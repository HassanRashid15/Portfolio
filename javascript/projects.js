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
    addTypingEffect();
    
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
    if (!projectsGrid) return;
    
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
                    projectsGrid.innerHTML = projects.map(projectId => createProjectCard(projectId)).join('');
                } else {
                    projectsGrid.className = 'space-y-6 list-view fade-in';
                    projectsGrid.innerHTML = projects.map(projectId => createProjectListItem(projectId)).join('');
                }
                
                updateProjectsCount();
                updatePagination(allProjects.length, totalPages);
                
                // Add intersection observer for scroll animations
                addScrollAnimations();
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
                projectsGrid.innerHTML = projects.map(projectId => createProjectCard(projectId)).join('');
            } else {
                projectsGrid.className = 'space-y-6 list-view fade-in';
                projectsGrid.innerHTML = projects.map(projectId => createProjectListItem(projectId)).join('');
            }
            
            updateProjectsCount();
            updatePagination(allProjects.length, totalPages);
            
            // Add intersection observer for scroll animations
            addScrollAnimations();
        }, 300);
    }
}

function getFilteredProjects() {
    // Get all project IDs from projectData
    const allProjectIds = Object.keys(projectData);
    
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
    
    return `
        <div class="project-card group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2" data-project="${projectId}">
            <div class="h-64 overflow-hidden relative group">
                ${project.image ? `
                    <img src="${project.image}" 
                         alt="${project.title}" 
                         class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                         loading="lazy">
                    <div class="absolute inset-0 bg-black bg-opacity-30"></div>
                ` : `
                    <div class="w-full h-full bg-gradient-to-br from-purple-500 to-blue-600"></div>
                `}
            </div>
            
            <div class="p-6">
                <div class="mb-3">
                    <div class="flex items-center space-x-3">
                        ${project.logo ? `
                            <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                                <img src="${project.logo}" 
                                     alt="${project.client} logo" 
                                     class="w-full h-full object-cover"
                                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                <span class="text-xs font-medium text-gray-600" style="display: none;">${project.client.charAt(0)}</span>
                            </div>
                        ` : ''}
                        <h3 class="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                            ${project.title}
                        </h3>
                    </div>
                </div>
                
                <p class="text-gray-600 mb-4 line-clamp-2">${project.description}</p>
                
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                        <span class="text-sm text-gray-600">${project.client}</span>
                    </div>
                    <span class="text-sm text-primary font-medium">${project.role}</span>
                </div>
            </div>
        </div>
    `;
}

function createProjectListItem(projectId) {
    const project = projectData[projectId];
    
    return `
        <div class="project-item bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6" data-project="${projectId}">
            <div class="flex flex-col md:flex-row gap-6">
                <div class="md:w-1/3">
                    <div class="h-48 rounded-xl overflow-hidden relative group">
                        ${project.image ? `
                            <img src="${project.image}" 
                                 alt="${project.title}" 
                                 class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                 loading="lazy">
                            <div class="absolute inset-0 bg-black bg-opacity-30"></div>
                        ` : `
                            <div class="w-full h-full bg-gradient-to-br from-purple-500 to-blue-600"></div>
                        `}
                    </div>
                </div>
                
                <div class="md:w-2/3">
                    <div class="flex items-start justify-between mb-3">
                        <div class="flex items-center space-x-3">
                            ${project.logo ? `
                                <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                                    <img src="${project.logo}" 
                                         alt="${project.client} logo" 
                                         class="w-full h-full object-cover"
                                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                    <span class="text-sm font-medium text-gray-600" style="display: none;">${project.client.charAt(0)}</span>
                                </div>
                            ` : ''}
                            <div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-1">${project.title}</h3>
                                <p class="text-gray-600">${project.client} • ${project.role}</p>
                            </div>
                        </div>
                    </div>
                    
                    <p class="text-gray-700">${project.description}</p>
                </div>
            </div>
        </div>
    `;
}

function setupEventListeners() {
    // View toggle buttons
    const gridViewBtn = document.getElementById('grid-view');
    const listViewBtn = document.getElementById('list-view');
    
    if (gridViewBtn) {
        gridViewBtn.addEventListener('click', function() {
            currentView = 'grid';
            gridViewBtn.classList.add('bg-primary-light', 'text-primary');
            gridViewBtn.classList.remove('bg-gray-100', 'text-gray-600');
            listViewBtn.classList.add('bg-gray-100', 'text-gray-600');
            listViewBtn.classList.remove('bg-primary-light', 'text-primary');
            loadProjects();
        });
    }
    
    if (listViewBtn) {
        listViewBtn.addEventListener('click', function() {
            currentView = 'list';
            listViewBtn.classList.add('bg-primary-light', 'text-primary');
            listViewBtn.classList.remove('bg-gray-100', 'text-gray-600');
            gridViewBtn.classList.add('bg-gray-100', 'text-gray-600');
            gridViewBtn.classList.remove('bg-primary-light', 'text-primary');
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
    
    // Pagination buttons
    document.addEventListener('click', function(e) {
        if (e.target.closest('.pagination-btn')) {
            const page = parseInt(e.target.closest('.pagination-btn').dataset.page);
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
                         class="w-full h-full object-cover"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <span class="text-sm font-medium text-gray-600" style="display: none;">${project.client.charAt(0)}</span>
                </div>
                <span>${project.title}</span>
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
                         class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
    
    let paginationHTML = '';
    
    // Previous button
    if (currentPage > 1) {
        paginationHTML += `
            <button class="pagination-btn px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors" data-page="${currentPage - 1}">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                </svg>
            </button>
        `;
    }
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === currentPage) {
            paginationHTML += `
                <button class="pagination-btn px-4 py-2 bg-primary text-white rounded-lg font-medium" data-page="${i}">
                    ${i}
                </button>
            `;
        } else {
            paginationHTML += `
                <button class="pagination-btn px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors" data-page="${i}">
                    ${i}
                </button>
            `;
        }
    }
    
    // Next button
    if (currentPage < totalPages) {
        paginationHTML += `
            <button class="pagination-btn px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors" data-page="${currentPage + 1}">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
            </button>
        `;
    }
    
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

function addTypingEffect() {
    // Only apply typing effect on projects page
    const currentPage = document.body.getAttribute('data-page');
    if (currentPage !== 'projects') return;
    
    const titleElement = document.querySelector('h1');
    if (!titleElement) return;
    
    const text = titleElement.textContent;
    titleElement.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            titleElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
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

// Initialize projects page when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for navbar and footer to load first
    setTimeout(() => {
        initProjectsPage();
    }, 100);
});