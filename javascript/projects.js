// Projects Page JavaScript
// Import centralized project data
// Note: In a browser environment, we'll load this via script tag
// The projectData will be available globally after project-data.js loads

// Global variables for projects page
let currentView = 'grid';
let currentPage = 1;
let projectsPerPage = 6;
let currentTab = 'all-projects';

function initProjectsPage() {
    console.log('🚀 Initializing projects page...');
    console.log('Initial currentTab:', currentTab);
    console.log('Screen width on init:', window.innerWidth);
    
    loadProjects(false); // No transition on initial load
    setupEventListeners();
    setupTabListeners();
    updateProjectsCount();
    addParallaxEffect();
    
    // Debug initial tab state
    setTimeout(() => {
        console.log('🔍 Initial tab state after setup:');
        const allProjectsTab = document.getElementById('tab-all-projects');
        const liveProjectsTab = document.getElementById('tab-live-projects');
        const figmaConvertersTab = document.getElementById('tab-figma-converters');
        
        [allProjectsTab, liveProjectsTab, figmaConvertersTab].forEach((tab, index) => {
            if (tab) {
                const tabNames = ['all-projects', 'live-projects', 'figma-converters'];
                console.log(`${tabNames[index]} tab initial state:`, {
                    hasActive: tab.classList.contains('active'),
                    classes: tab.className,
                    computedColor: window.getComputedStyle(tab).color,
                    computedBackground: window.getComputedStyle(tab).backgroundColor
                });
            }
        });
    }, 200);
    
    console.log('✅ Projects page initialized successfully');
}

function loadProjects(showTransition = true) {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) {
        console.error('Projects grid container not found!');
        return;
    }
    
    console.log('Loading projects...', { showTransition, currentView, currentTab });
    
    if (showTransition) {
        // Add fade out effect
        projectsGrid.classList.add('fade-out');
        
        setTimeout(() => {
            // Show loading state
            projectsGrid.innerHTML = '<div class="projects-loading"></div>';
            projectsGrid.classList.remove('fade-out');
            projectsGrid.classList.add('fade-in');
            
            // Load projects after fade in
            setTimeout(() => {
                const allProjects = getFilteredProjects();
                const totalPages = Math.ceil(allProjects.length / projectsPerPage);
                
                // Get projects for current page
                const startIndex = (currentPage - 1) * projectsPerPage;
                const endIndex = startIndex + projectsPerPage;
                const projects = allProjects.slice(startIndex, endIndex);
                
                if (currentView === 'grid') {
                    projectsGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-view fade-in';
                    const gridHTML = projects.map(projectId => createProjectCard(projectId)).join('');
                    console.log('Grid HTML length:', gridHTML.length);
                    projectsGrid.innerHTML = gridHTML;
                } else {
                    projectsGrid.className = 'list-view fade-in';
                    const listHTML = projects.map(projectId => createProjectListItem(projectId)).join('');
                    console.log('List HTML length:', listHTML.length);
                    projectsGrid.innerHTML = listHTML;
                }
                
                updateProjectsCount();
                updatePagination(allProjects.length, totalPages);
                
                // Add intersection observer for scroll animations
                addScrollAnimations();
                
                // Initialize GSAP animations for project cards
                initializeProjectCardAnimations();
            }, 150);
        }, 200);
    } else {
        // Direct load without transition (for initial load)
        projectsGrid.innerHTML = '<div class="projects-loading"></div>';
        
        setTimeout(() => {
            const allProjects = getFilteredProjects();
            const totalPages = Math.ceil(allProjects.length / projectsPerPage);
            
            // Get projects for current page
            const startIndex = (currentPage - 1) * projectsPerPage;
            const endIndex = startIndex + projectsPerPage;
            const projects = allProjects.slice(startIndex, endIndex);
            
            if (currentView === 'grid') {
                projectsGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-view fade-in';
                const gridHTML = projects.map(projectId => createProjectCard(projectId)).join('');
                console.log('Grid HTML length (direct load):', gridHTML.length);
                projectsGrid.innerHTML = gridHTML;
            } else {
                projectsGrid.className = 'list-view fade-in';
                const listHTML = projects.map(projectId => createProjectListItem(projectId)).join('');
                console.log('List HTML length (direct load):', listHTML.length);
                projectsGrid.innerHTML = listHTML;
            }
            
            updateProjectsCount();
            updatePagination(allProjects.length, totalPages);
            
            // Add intersection observer for scroll animations
            addScrollAnimations();
            
            // Initialize GSAP animations for project cards
            initializeProjectCardAnimations();
        }, 300);
    }
}

function getFilteredProjects() {
    // Get all project IDs from projectData
    if (typeof projectData === 'undefined') {
        console.error('projectData is not defined!');
        return [];
    }
    
    const allProjectIds = Object.keys(projectData);
    console.log('All project IDs:', allProjectIds);
    
    // Filter based on current tab
    if (currentTab === 'all-projects') {
        return allProjectIds; // Show all projects
    } else if (currentTab === 'live-projects') {
        // Show only live projects
        return allProjectIds.filter(projectId => {
            const project = projectData[projectId];
            return project.category === 'live-projects';
        });
    } else if (currentTab === 'figma-converters') {
        // Show only figma converter projects
        return allProjectIds.filter(projectId => {
            const project = projectData[projectId];
            return project.category === 'figma-converters';
        });
    }
    
    return allProjectIds; // Fallback
}


function createProjectCard(projectId) {
    const project = projectData[projectId];
    
    if (!project) {
        console.error(`Project not found for ID: ${projectId}`);
        return '';
    }
    
    console.log(`Creating card for project: ${projectId}`, project.title);
    
    // Generate technology tags based on project type
    const techTags = generateTechTags(project);
    
    return `
        <div class="project-card-simple shadow-lg" data-project="${projectId}">
            <div class="card-image">
                ${project.image ? `
                    <img src="${project.image}" 
                         alt="${project.title}" 
                         class="w-full h-full"
                         loading="lazy">
                ` : `
                    <div class="w-full h-full bg-gradient-to-br from-purple-500 to-blue-600"></div>
                `}
            </div>
            
            <!-- Default title and icon - always visible -->
            <div class="card-default">
                <div class="default-icon">
                    ${project.logo ? `
                        <img src="${project.logo}" 
                             alt="${project.title} logo" 
                             class="w-6 h-6 rounded-sm object-cover"
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="display: none;">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    ` : `
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    `}
                </div>
                <div class="default-title">${project.title}</div>
            </div>
            
            <!-- Detailed content - shows on hover -->
            <div class="card-content">
                <div>
                    <div class="project-title-with-icon">
                        ${project.logo ? `
                            <img src="${project.logo}" 
                                 alt="${project.title} logo" 
                                 
                                 class="project-logo"
                                 onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                            <svg class="project-logo-fallback" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="display: none;">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        ` : `
                            <svg class="project-logo-fallback" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        `}
                        <h3 class="project-title">${project.title}<span class="project-title-dot">.</span> </h3>
                       
                    </div>
                    <p class="project-description">${project.description}</p>
                    
                    <div class="project-meta">
                        <span class="project-client">${project.client}</span>
                        <span class="project-role">${project.role}</span>
                    </div>
                </div>
                
                    <div class="tech-tags">
                        ${techTags.slice(0, 3).map(tag => `<span class="tech-tag">${tag.name}</span>`).join('')}
                    </div>
                </div>
            
            <!-- Hidden content for modal -->
            <div class="hidden project-data">
                <div class="project-description">${project.description}</div>
                <div class="project-client">${project.client}</div>
                <div class="project-role">${project.role}</div>
                <div class="project-year">${project.year}</div>
                <div class="project-image">${project.image || ''}</div>
                <div class="project-logo">${project.logo || ''}</div>
            </div>
        </div>
    `;
}

function createProjectListItem(projectId) {
    const project = projectData[projectId];
    
    if (!project) {
        console.error(`Project not found for ID: ${projectId}`);
        return '';
    }
    
    console.log(`Creating list item for project: ${projectId}`, project.title);
    
    // Generate technology tags based on project type
    const techTags = generateTechTags(project);
    
    return `
        <div class="project-item-list bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row" data-project="${projectId}">
            <!-- Image Section -->
            <div class="w-full md:w-1/3 h-64 md:h-auto bg-gray-100 flex items-center justify-center overflow-hidden">
                ${project.image ? `
                    <img src="${project.image}" 
                         alt="${project.title}" 
                         class="w-full h-full"
                         loading="lazy">
                ` : `
                    <div class="w-full h-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                        ${project.logo ? `
                            <img src="${project.logo}" 
                                 alt="${project.title} logo" 
                                 class="w-24 h-24 object-contain">
                        ` : `
                            <svg class="w-24 h-24 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        `}
                    </div>
                `}
            </div>
            
            <!-- Content Section -->
            <div class="w-full md:w-2/3 p-6 flex flex-col justify-between">
                <div>
                    <div class="flex items-center gap-3 mb-3">
                        ${project.logo ? `
                            <img src="${project.logo}" 
                                 alt="${project.title} logo" 
                                 class="w-8 h-8 rounded-sm object-cover"
                                 onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                            <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="display: none;">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        ` : `
                            <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        `}
                        <h3 class="text-2xl font-bold text-gray-900">${project.title}<span class="project-title-dot">.</span></h3>
                    </div>
                    
                    <p class="text-gray-600 mb-4 line-clamp-2">${project.description}</p>
                    
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${techTags.slice(0, 4).map(tag => `
                            <span class="px-3 py-1 rounded-full text-xs font-semibold ${tag.bg} ${tag.text}">
                                ${tag.name}
                            </span>
                        `).join('')}
                    </div>
                </div>
                
                <div class="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div class="flex items-center gap-4 text-sm text-gray-600">
                        <span class="font-semibold">${project.client}</span>
                        <span>•</span>
                        <span>${project.role}</span>
                        <span>•</span>
                        <span>${project.year}</span>
                    </div>
                    ${project.link ? `
                        <a href="${project.link}" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           class="text-primary hover:text-primary-hover font-semibold transition-colors">
                            Visit Website →
                        </a>
                    ` : ''}
                </div>
            </div>
            
            <!-- Hidden content for modal -->
            <div class="hidden project-data">
                <div class="project-description">${project.description}</div>
                <div class="project-client">${project.client}</div>
                <div class="project-role">${project.role}</div>
                <div class="project-year">${project.year}</div>
                <div class="project-image">${project.image || ''}</div>
                <div class="project-logo">${project.logo || ''}</div>
            </div>
        </div>
    `;
}

function setupEventListeners() {
    // View toggle buttons
    const gridViewBtn = document.getElementById('grid-view');
    const listViewBtn = document.getElementById('list-view');
    
    // Initialize button states based on currentView
    if (gridViewBtn && listViewBtn) {
        if (currentView === 'grid') {
            gridViewBtn.classList.add('bg-primary-light', 'text-primary');
            gridViewBtn.classList.remove('bg-gray-100', 'text-gray-600');
            listViewBtn.classList.add('bg-gray-100', 'text-gray-600');
            listViewBtn.classList.remove('bg-primary-light', 'text-primary');
        } else {
            listViewBtn.classList.add('bg-primary-light', 'text-primary');
            listViewBtn.classList.remove('bg-gray-100', 'text-gray-600');
            gridViewBtn.classList.add('bg-gray-100', 'text-gray-600');
            gridViewBtn.classList.remove('bg-primary-light', 'text-primary');
        }
    }
    
    if (gridViewBtn) {
        gridViewBtn.addEventListener('click', function() {
            currentView = 'grid';
            gridViewBtn.classList.add('bg-primary-light', 'text-primary');
            gridViewBtn.classList.remove('bg-gray-100', 'text-gray-600');
            if (listViewBtn) {
                listViewBtn.classList.add('bg-gray-100', 'text-gray-600');
                listViewBtn.classList.remove('bg-primary-light', 'text-primary');
            }
            loadProjects();
        });
    }
    
    if (listViewBtn) {
        listViewBtn.addEventListener('click', function() {
            currentView = 'list';
            listViewBtn.classList.add('bg-primary-light', 'text-primary');
            listViewBtn.classList.remove('bg-gray-100', 'text-gray-600');
            if (gridViewBtn) {
                gridViewBtn.classList.add('bg-gray-100', 'text-gray-600');
                gridViewBtn.classList.remove('bg-primary-light', 'text-primary');
            }
            loadProjects();
        });
    }
    
    // Project card clicks
    document.addEventListener('click', function(e) {
        const projectCard = e.target.closest('[data-project]');
        if (projectCard) {
            const projectId = projectCard.dataset.project;
            showProjectModal(projectId);
        }
    });
    
    // Modal close button
    const closeModalBtn = document.getElementById('close-modal');
    const modal = document.getElementById('project-modal');
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', hideProjectModal);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                hideProjectModal();
            }
        });
    }
    
    // Pagination dots
    document.addEventListener('click', function(e) {
        if (e.target.closest('.pagination-dot')) {
            const page = parseInt(e.target.closest('.pagination-dot').dataset.page);
            if (page && page !== currentPage) {
                currentPage = page;
                loadProjects();
                // Scroll to top of projects section
                document.getElementById('projects-grid').scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
}

function setupTabListeners() {
    const allProjectsTab = document.getElementById('tab-all-projects');
    const liveProjectsTab = document.getElementById('tab-live-projects');
    const figmaConvertersTab = document.getElementById('tab-figma-converters');
    
    if (allProjectsTab) {
        allProjectsTab.addEventListener('click', () => {
            console.log('🖱️ All Projects tab clicked');
            console.log('Before change - currentTab:', currentTab);
            currentTab = 'all-projects';
            console.log('After change - currentTab:', currentTab);
            currentPage = 1;
            updateTabButtons();
            scrollToActiveTab();
            loadProjects();
        });
    }
    
    if (liveProjectsTab) {
        liveProjectsTab.addEventListener('click', () => {
            console.log('🖱️ Live Projects tab clicked');
            console.log('Before change - currentTab:', currentTab);
            currentTab = 'live-projects';
            console.log('After change - currentTab:', currentTab);
            currentPage = 1;
            updateTabButtons();
            scrollToActiveTab();
            loadProjects();
        });
    }
    
    if (figmaConvertersTab) {
        figmaConvertersTab.addEventListener('click', () => {
            console.log('🖱️ Figma Converters tab clicked');
            console.log('Before change - currentTab:', currentTab);
            currentTab = 'figma-converters';
            console.log('After change - currentTab:', currentTab);
            currentPage = 1;
            updateTabButtons();
            scrollToActiveTab();
            loadProjects();
        });
    }
    
    // Add touch gesture support
    setupTouchGestures();
}

function scrollToActiveTab() {
    const tabsContainer = document.getElementById('tabs-container');
    const activeTab = tabsContainer.querySelector('.tab-button.active');
    
    if (activeTab && tabsContainer) {
        const containerRect = tabsContainer.getBoundingClientRect();
        const tabRect = activeTab.getBoundingClientRect();
        
        // Calculate scroll position to center the active tab
        const scrollLeft = activeTab.offsetLeft - (tabsContainer.offsetWidth / 2) + (activeTab.offsetWidth / 2);
        
        tabsContainer.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
        });
    }
}

function setupTouchGestures() {
    const tabsContainer = document.getElementById('tabs-container');
    if (!tabsContainer) return;
    
    let startX = 0;
    let startY = 0;
    let isScrolling = false;
    
    tabsContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isScrolling = false;
    }, { passive: true });
    
    tabsContainer.addEventListener('touchmove', (e) => {
        if (!startX || !startY) return;
        
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        
        const diffX = Math.abs(currentX - startX);
        const diffY = Math.abs(currentY - startY);
        
        // Determine if this is a horizontal scroll
        if (diffX > diffY && diffX > 10) {
            isScrolling = true;
        }
    }, { passive: true });
    
    tabsContainer.addEventListener('touchend', (e) => {
        if (!isScrolling) return;
        
        const endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;
        
        // Swipe threshold
        if (Math.abs(diffX) > 50) {
            const tabs = ['all-projects', 'live-projects', 'figma-converters'];
            const currentIndex = tabs.indexOf(currentTab);
            
            if (diffX > 0 && currentIndex < tabs.length - 1) {
                // Swipe left - next tab
                currentTab = tabs[currentIndex + 1];
            } else if (diffX < 0 && currentIndex > 0) {
                // Swipe right - previous tab
                currentTab = tabs[currentIndex - 1];
            }
            
            if (currentTab !== tabs[tabs.indexOf(currentTab)]) {
                currentPage = 1;
                updateTabButtons();
                scrollToActiveTab();
                loadProjects();
            }
        }
        
        startX = 0;
        startY = 0;
        isScrolling = false;
    }, { passive: true });
}

function updateTabButtons() {
    const allProjectsTab = document.getElementById('tab-all-projects');
    const liveProjectsTab = document.getElementById('tab-live-projects');
    const figmaConvertersTab = document.getElementById('tab-figma-converters');
    
    console.log('🔍 DEBUG: updateTabButtons called');
    console.log('Current tab:', currentTab);
    console.log('Screen width:', window.innerWidth);
    console.log('Tabs found:', {
        allProjects: !!allProjectsTab,
        liveProjects: !!liveProjectsTab,
        figmaConverters: !!figmaConvertersTab
    });
    
    // Remove active class from all tabs
    if (allProjectsTab) {
        allProjectsTab.classList.remove('active');
        console.log('Removed active from all-projects tab');
    }
    if (liveProjectsTab) {
        liveProjectsTab.classList.remove('active');
        console.log('Removed active from live-projects tab');
    }
    if (figmaConvertersTab) {
        figmaConvertersTab.classList.remove('active');
        console.log('Removed active from figma-converters tab');
    }
    
    // Add active class to current tab
    if (currentTab === 'all-projects' && allProjectsTab) {
        allProjectsTab.classList.add('active');
        console.log('✅ Added active to all-projects tab');
        console.log('All-projects tab classes:', allProjectsTab.className);
        console.log('All-projects tab computed styles:', {
            color: window.getComputedStyle(allProjectsTab).color,
            backgroundColor: window.getComputedStyle(allProjectsTab).backgroundColor,
            background: window.getComputedStyle(allProjectsTab).background
        });
    } else if (currentTab === 'live-projects' && liveProjectsTab) {
        liveProjectsTab.classList.add('active');
        console.log('✅ Added active to live-projects tab');
        console.log('Live-projects tab classes:', liveProjectsTab.className);
        console.log('Live-projects tab computed styles:', {
            color: window.getComputedStyle(liveProjectsTab).color,
            backgroundColor: window.getComputedStyle(liveProjectsTab).backgroundColor,
            background: window.getComputedStyle(liveProjectsTab).background
        });
    } else if (currentTab === 'figma-converters' && figmaConvertersTab) {
        figmaConvertersTab.classList.add('active');
        console.log('✅ Added active to figma-converters tab');
        console.log('Figma-converters tab classes:', figmaConvertersTab.className);
        console.log('Figma-converters tab computed styles:', {
            color: window.getComputedStyle(figmaConvertersTab).color,
            backgroundColor: window.getComputedStyle(figmaConvertersTab).backgroundColor,
            background: window.getComputedStyle(figmaConvertersTab).background
        });
    }
    
    // Debug all tabs after update
    setTimeout(() => {
        console.log('🔍 Final tab states:');
        [allProjectsTab, liveProjectsTab, figmaConvertersTab].forEach((tab, index) => {
            if (tab) {
                const tabNames = ['all-projects', 'live-projects', 'figma-converters'];
                console.log(`${tabNames[index]} tab:`, {
                    hasActive: tab.classList.contains('active'),
                    classes: tab.className,
                    computedColor: window.getComputedStyle(tab).color,
                    computedBackground: window.getComputedStyle(tab).backgroundColor
                });
            }
        });
    }, 100);
}

function showProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;
    
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    
    // Update modal content with logo
    const modalTitle = document.getElementById('modal-title');
    if (project.logo) {
        modalTitle.innerHTML = `
            <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img src="${project.logo}" 
                         alt="${project.client} logo" 
                         class="w-full h-full object-contain"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <span class="text-sm font-medium text-gray-600" style="display: none;">${project.client.charAt(0)}</span>
                </div>
                <span>${project.title}<span class="project-title-dot">.</span> </span>
            </div>
        `;
    } else {
        modalTitle.textContent = project.title;
    }
    
    document.getElementById('modal-client').textContent = project.client;
    document.getElementById('modal-year').textContent = project.year;
    document.getElementById('modal-role').textContent = project.role;
    document.getElementById('modal-client-name').textContent = project.client;
    
    // Add Visit Website link above description
    const descriptionElement = document.getElementById('modal-description');
    const existingLink = descriptionElement.parentNode.querySelector('.visit-website-link');
    if (existingLink) {
        existingLink.remove();
    }
    
    const visitLink = document.createElement('div');
    visitLink.className = 'visit-website-link mb-4';
    visitLink.innerHTML = `
             <a href="${project.link}" 
           target="_blank" 
           rel="noopener noreferrer"
           class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium my-5 mt-0 transition-colors link">
        
            Visit Website
        </a>
    `;
    descriptionElement.parentNode.insertBefore(visitLink, descriptionElement);
    
    document.getElementById('modal-description').textContent = project.description;
    
    // Update modal client label based on client type
    const modalClientLabel = document.getElementById('modal-client-label');
    if (modalClientLabel) {
        modalClientLabel.textContent = project.clientType === 'individual' ? 'Client' : 'Organization';
    }
    
    // Set the detail link
    const detailLink = document.getElementById('modal-detail-link');
    const detailUrl = `project-detail.html?id=${projectId}`;
    detailLink.href = detailUrl;
    
    // Remove any existing event listeners
    detailLink.onclick = null;
    
    // Add click event listener to ensure navigation works
    detailLink.addEventListener('click', function(e) {
        e.preventDefault();
        // console.log('Button clicked! Navigating to:', detailUrl);
        window.location.href = detailUrl;
    });
    
    
    // console.log('Modal opened for project:', projectId, 'URL:', detailUrl);
    // console.log('Available projects:', Object.keys(projectData));
    
    // Update screenshot with Unsplash image and mockup
    const screenshotContainer = document.getElementById('modal-screenshot');
    if (screenshotContainer) {
        screenshotContainer.innerHTML = `
            <div class="h-full rounded-xl overflow-hidden relative group">
                ${project.image ? `
                    <img src="${project.image}" 
                         alt="${project.title}" 
                         class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                         loading="lazy">
                    <div class="absolute inset-0 bg-black bg-opacity-30"></div>
                ` : `
                    <div class="w-full h-full bg-gradient-to-br from-purple-500 to-blue-600"></div>
                `}
            </div>
        `;
    }
    
    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function hideProjectModal() {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

function updateProjectsCount() {
    const countElement = document.getElementById('projects-count');
    if (countElement) {
        const count = getFilteredProjects().length;
        countElement.textContent = count;
    }
    
    // Update tab counts
    updateTabCounts();
}

function updateTabCounts() {
    const allProjectsCount = document.getElementById('all-projects-count');
    const liveProjectsCount = document.getElementById('live-projects-count');
    const figmaProjectsCount = document.getElementById('figma-projects-count');
    
    if (allProjectsCount) {
        // Count all projects
        const totalProjects = Object.keys(projectData).length;
        allProjectsCount.textContent = totalProjects;
    }
    
    if (liveProjectsCount) {
        // Count only live projects
        const liveProjects = Object.keys(projectData).filter(projectId => {
            const project = projectData[projectId];
            return project.category === 'live-projects';
        }).length;
        liveProjectsCount.textContent = liveProjects;
    }
    
    if (figmaProjectsCount) {
        // Count only figma converter projects
        const figmaProjects = Object.keys(projectData).filter(projectId => {
            const project = projectData[projectId];
            return project.category === 'figma-converters';
        }).length;
        figmaProjectsCount.textContent = figmaProjects;
    }
}

function updatePagination(totalProjects, totalPages) {
    const paginationContainer = document.getElementById('pagination-container');
    if (!paginationContainer || totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }
    
    // Create modern dots pagination
    let paginationHTML = '<div class="pagination-dots">';
    
    for (let i = 1; i <= totalPages; i++) {
        const isActive = i === currentPage ? 'active' : '';
        paginationHTML += `
            <button class="pagination-dot ${isActive}" data-page="${i}" aria-label="Go to page ${i}">
            </button>
        `;
    }
    
    paginationHTML += '</div>';
    paginationContainer.innerHTML = paginationHTML;
}

function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all project cards and items
    document.querySelectorAll('.project-card, .project-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

function addParallaxEffect() {
    // Only apply parallax effect on projects page
    const currentPage = document.body.getAttribute('data-page');
    if (currentPage !== 'projects') return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('section');
        
        if (heroSection) {
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });
}



// Add some CSS for line clamping
const style = document.createElement('style');
style.textContent = `
    .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    
    .project-card {
        animation: fadeInUp 0.6s ease-out;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .project-item {
        animation: fadeInUp 0.6s ease-out;
    }
`;
document.head.appendChild(style);

// Function to initialize GSAP animations for project cards
function initializeProjectCardAnimations() {
    const projectCards = document.querySelectorAll('.project-card-simple');
    console.log('Found project cards:', projectCards.length);
    
    projectCards.forEach((card, index) => {
        const content = card.querySelector('.card-content');
        const title = card.querySelector('.project-title');
        const description = card.querySelector('.project-description');
        const meta = card.querySelector('.project-meta');
        const techTags = card.querySelector('.tech-tags');
        
        console.log(`Card ${index}:`, {
            content: !!content,
            title: !!title,
            description: !!description,
            meta: !!meta,
            techTags: !!techTags
        });
        
        if (!content || !title) {
            console.warn(`Skipping card ${index} - missing content or title`);
            return; // Skip if elements not found
        }
        
        // Check if GSAP is available
        if (typeof gsap === 'undefined') {
            console.error('GSAP is not loaded!');
            return;
        }
        
        const defaultContent = card.querySelector('.card-default');
        const defaultTitle = card.querySelector('.default-title');
        const defaultIcon = card.querySelector('.default-icon');
        
        // Set initial state for GSAP - content is hidden by default
        gsap.set(content, { y: "100%", opacity: 0 });
        gsap.set([title, description, meta, techTags].filter(Boolean), { y: 20, opacity: 0 });
        
        // Hover in animation - hide default content and show detailed content
        card.addEventListener('mouseenter', () => {
            const tl = gsap.timeline();
            
            // First hide the default content
            tl.to([defaultTitle, defaultIcon].filter(Boolean), {
                opacity: 0,
                y: -10,
                duration: 0.3,
                ease: "power2.in"
            })
            // Then slide up the detailed content container
            .to(content, {
                y: "0%",
                opacity: 1,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.1")
            // Then animate the individual elements with stagger
            .to([title, description, meta, techTags].filter(Boolean), {
                y: 0,
                opacity: 1,
                duration: 0.4,
                stagger: 0.1,
                ease: "power2.out"
            }, "-=0.3");
        });
        
        // Hover out animation - show default content and hide detailed content
        card.addEventListener('mouseleave', () => {
            const tl = gsap.timeline();
            
            // First hide the individual elements
            tl.to([title, description, meta, techTags].filter(Boolean), {
                y: 20,
                opacity: 0,
                duration: 0.2,
                stagger: 0.05,
                ease: "power2.in"
            })
            // Then slide down the content container
            .to(content, {
                y: "100%",
                opacity: 0,
                duration: 0.4,
                ease: "power2.in"
            }, "-=0.1")
            // Finally show the default content
            .to([defaultTitle, defaultIcon].filter(Boolean), {
                opacity: 1,
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            }, "-=0.2");
        });
    });
}

// Initialize projects page when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for navbar and footer to load first
    setTimeout(() => {
        initProjectsPage();
    }, 100);
});