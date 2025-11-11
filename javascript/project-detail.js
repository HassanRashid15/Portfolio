// Project Detail Page JavaScript
// Import centralized project data
// Note: In a browser environment, we'll load this via script tag
// The projectData will be available globally after project-data.js loads

// Placeholder - projectData will be loaded from project-data.js

// Function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to load project data
function loadProjectData() {
    console.log('=== loadProjectData called ===');
    const projectId = getUrlParameter('id');
    console.log('Project ID from URL:', projectId);
    console.log('Project data available:', typeof projectData !== 'undefined');
    
    if (!projectId || !projectData[projectId]) {
        console.log('Project not found, redirecting to home page');
        // Redirect to home page if project not found
        window.location.href = 'index.html';
        return;
    }
    
    const project = projectData[projectId];
    
    // Update page title
    document.title = `${project.title} - Portfolio`;
    
    // Update project title with logo
    const titleElement = document.getElementById('project-title');
    if (project.logo) {
        titleElement.innerHTML = `
            <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
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
        titleElement.textContent = project.title;
    }
    
    // Update project description
    document.getElementById('project-description').textContent = project.description;
    
    // Update project link
    const projectLink = document.getElementById('project-link');
    projectLink.href = project.link;
    projectLink.target = '_blank';
    projectLink.rel = 'noopener noreferrer';
    projectLink.title = `Visit ${project.title} website`;
    
    // Update project screenshot with main image and overlay
    const screenshotContainer = document.getElementById('project-screenshot');
    if (screenshotContainer) {
        screenshotContainer.innerHTML = `
            <div class="relative h-full rounded-2xl overflow-hidden group">
                ${project.image ? `
                    <img src="${project.image}" 
                         alt="${project.title}" 
                         class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                         loading="lazy">
                    <div class="absolute inset-0 bg-black bg-opacity-0"></div>
                ` : `
                    <div class="w-full h-full bg-gradient-to-br from-purple-500 to-blue-600"></div>
                `}
            </div>
        `;
    }
    
    // Update metadata
    document.getElementById('client-name').textContent = project.client;
    document.getElementById('project-year').textContent = project.year;
    document.getElementById('project-role').textContent = project.role;
    
    // Update client logo if available
    const clientNameElement = document.getElementById('client-name');
    if (project.logo && clientNameElement) {
        // Add logo before client name
        const logoElement = document.createElement('div');
        logoElement.className = 'w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden mb-2';
        logoElement.innerHTML = `
            <img src="${project.logo}" 
                 alt="${project.client} logo" 
                 class="w-full h-full object-contain"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <span class="text-xs font-medium text-gray-600" style="display: none;">${project.client.charAt(0)}</span>
        `;
        clientNameElement.parentNode.insertBefore(logoElement, clientNameElement);
    }
    
    // Update client label based on client type
    const clientLabel = document.getElementById('client-label');
    if (clientLabel) {
        clientLabel.textContent = project.clientType === 'individual' ? 'Client' : 'Organization';
    }
    
    // Update about content
    const aboutContent = document.getElementById('about-content');
    aboutContent.innerHTML = project.about.map(paragraph => `<p>${paragraph}</p>`).join('');
    
    // Update client content heading based on client type
    const clientSection = document.querySelector('#client-content').parentElement;
    const clientHeading = clientSection.querySelector('h2');
    if (clientHeading) {
        const clientText = project.clientType === 'individual' ? 'Our Client' : 'Our Organization';
        clientHeading.innerHTML = `${clientText}<span class="project-title-dot">.</span>`;
    }
    
    // Add Visit Website button after description for all projects
    const descriptionElement = document.getElementById('project-description');
    const existingButton = descriptionElement.parentNode.querySelector('.visit-website-btn');
    if (!existingButton) {
        const visitButton = document.createElement('div');
        visitButton.className = 'visit-website-btn mt-0';
        visitButton.innerHTML = `
               <a href="${project.link}" 
           target="_blank" 
           rel="noopener noreferrer"
           class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium my-5 mt-0 transition-colors link">
        
            Visit Website
        </a>
        `;
        descriptionElement.parentNode.insertBefore(visitButton, descriptionElement.nextSibling);
    }
    
    // Update client content
    const clientContent = document.getElementById('client-content');
    clientContent.innerHTML = project.clientInfo.map(paragraph => `<p>${paragraph}</p>`).join('');
    
    // Update challenges content
    const challengesContent = document.getElementById('challenges-content');
    challengesContent.innerHTML = project.challenges.map(paragraph => `<p>${paragraph}</p>`).join('');
    
    // Update results content
    const resultsContent = document.getElementById('results-content');
    resultsContent.innerHTML = project.results.map(paragraph => `<p>${paragraph}</p>`).join('');
    
    // Update results screenshots with 5x5 grid layout
    const resultsScreenshots = document.getElementById('results-screenshots');
    console.log('=== PROJECT DETAIL DEBUG ===');
    console.log('Project ID:', projectId);
    console.log('Project resultScreenshots:', project.resultScreenshots);
    console.log('Number of screenshots:', project.resultScreenshots ? project.resultScreenshots.length : 0);
    console.log('Timestamp:', new Date().toISOString());
    
    if (project.resultScreenshots && project.resultScreenshots.length >= 4) {
        // Define the grid layout for result images
        const gridLayout = [
            { 
                screenshot: project.resultScreenshots[0], 
                classes: 'col-span-2 row-span-3',
                gradient: 'from-purple-500 to-blue-600'
            },
            { 
                screenshot: project.resultScreenshots[1], 
                classes: 'col-span-3 row-span-3 col-start-3',
                gradient: 'from-green-500 to-teal-600'
            },
            { 
                screenshot: project.resultScreenshots[2], 
                classes: 'col-span-2 row-span-2 row-start-4',
                gradient: 'from-orange-500 to-red-600'
            },
            { 
                screenshot: project.resultScreenshots[3], 
                classes: 'col-span-3 row-span-2 col-start-3 row-start-4',
                gradient: 'from-indigo-500 to-purple-600'
            }
        ];

        let screenshotsHTML = '';
        
        gridLayout.forEach((item, index) => {
            screenshotsHTML += `
                <div class="${item.classes} rounded-xl border-2 border-gray-300 cursor-pointer" onclick="openImagePreview('${item.screenshot.match(/src="([^"]*)"/)?.[1] || ''}', 'Result ${index + 1}')">
                    ${item.screenshot}
                </div>
            `;
        });
        
        resultsScreenshots.innerHTML = screenshotsHTML;
        console.log('✅ Using 4+ screenshots grid layout');
        console.log('Grid HTML length:', screenshotsHTML.length);
    } else if (project.resultScreenshots && project.resultScreenshots.length > 0) {
        console.log('Using fallback layout for', project.resultScreenshots.length, 'screenshots');
        // Fallback for fewer than 4 screenshots - still use grid layout
        const availableScreenshots = project.resultScreenshots;
        // const gradients = ['from-purple-500 to-blue-600', 'from-green-500 to-teal-600', 'from-orange-500 to-red-600', 'from-indigo-500 to-purple-600'];
        
        let fallbackHTML = '';
        
        if (availableScreenshots.length === 1) {
            console.log('Using 1 screenshot layout');
            fallbackHTML = `
                <div class="col-span-5 row-span-5 rounded-xl border-2 border-gray-300 cursor-pointer" onclick="openImagePreview('${availableScreenshots[0].match(/src="([^"]*)"/)?.[1] || ''}', 'Project Result')">
                    ${availableScreenshots[0]}
                </div>
            `;
        } else if (availableScreenshots.length === 2) {
            console.log('Using 2 screenshots layout');
            fallbackHTML = `
                <div class="col-span-3 row-span-5 rounded-xl border-2 border-gray-300 cursor-pointer" onclick="openImagePreview('${availableScreenshots[0].match(/src="([^"]*)"/)?.[1] || ''}', 'Result 1')">
                    ${availableScreenshots[0]}
                </div>
                <div class="col-span-2 row-span-5 col-start-4 rounded-xl border-2 border-gray-300 cursor-pointer" onclick="openImagePreview('${availableScreenshots[1].match(/src="([^"]*)"/)?.[1] || ''}', 'Result 2')">
                    ${availableScreenshots[1]}
                </div>
            `;
        } else if (availableScreenshots.length === 3) {
            console.log('Using 3 screenshots layout');
            fallbackHTML = `
                <div class="col-span-2 row-span-3 rounded-xl border-2 border-gray-300 cursor-pointer" onclick="openImagePreview('${availableScreenshots[0].match(/src="([^"]*)"/)?.[1] || ''}', 'Result 1')">
                    ${availableScreenshots[0]}
                </div>
                <div class="col-span-3 row-span-3 col-start-3 rounded-xl border-2 border-gray-300 cursor-pointer" onclick="openImagePreview('${availableScreenshots[1].match(/src="([^"]*)"/)?.[1] || ''}', 'Result 2')">
                    ${availableScreenshots[1]}
                </div>
                <div class="col-span-5 row-span-2 row-start-4 rounded-xl border-2 border-gray-300 cursor-pointer" onclick="openImagePreview('${availableScreenshots[2].match(/src="([^"]*)"/)?.[1] || ''}', 'Result 3')">
                    ${availableScreenshots[2]}
                </div>
            `;
        }
        
        resultsScreenshots.innerHTML = fallbackHTML;
    }
    
    // Load more projects (exclude current project)
    setTimeout(() => {
        loadMoreProjects(projectId);
    }, 100);
}

// Function to load more projects
function loadMoreProjects(currentProjectId) {
    console.log('=== loadMoreProjects called with:', currentProjectId, '===');
    const moreProjectsContainer = document.querySelector('#more-projects');
    if (!moreProjectsContainer) {
        console.log('More projects container not found');
        return;
    }
    console.log('More projects container found:', moreProjectsContainer);
    
    // Check if projectData is available
    if (typeof projectData === 'undefined') {
        console.log('Project data not available, retrying...');
        setTimeout(() => {
            loadMoreProjects(currentProjectId);
        }, 100);
        return;
    }
    
    console.log('Loading more projects, current project:', currentProjectId);
    console.log('Available projects:', Object.keys(projectData));
    console.log('Project data object:', projectData);
    
    const otherProjects = Object.keys(projectData).filter(id => id !== currentProjectId);
    console.log('Other projects (excluding current):', otherProjects);
    
    if (otherProjects.length === 0) {
        console.log('No other projects found');
        moreProjectsContainer.innerHTML = '<p class="text-center text-gray-500">No other projects available</p>';
        return;
    }
    
    // Fallback: If we have projects but something goes wrong, show a simple message
    if (otherProjects.length > 0) {
        console.log('Found', otherProjects.length, 'other projects');
    }
    
    // Shuffle the array to get random projects
    const shuffledProjects = otherProjects.sort(() => Math.random() - 0.5);
    const selectedProjects = shuffledProjects.slice(0, 3); // Show 3 random projects
    console.log('Selected projects for display:', selectedProjects);
    
    moreProjectsContainer.innerHTML = selectedProjects.map(projectId => {
        const project = projectData[projectId];
        if (!project) {
            return '';
        }
        return `
            <div class="project-card-simple shadow-lg cursor-pointer h-80" data-project="${projectId}">
                <div class="card-image">
                    ${project.image ? `
                        <img src="${project.image}" 
                             alt="${project.title}.project-card-simple " 
                             class="w-full h-full img-custom-cards"
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
                            <h3 class="project-title">${project.title} <span class="project-title-dot">.</span> </h3>
                        </div>
                        <p class="project-description">${project.description}</p>
                        
                        <div class="project-meta">
                            <span class="project-client">${project.client}</span>
                            <span class="project-role">${project.role}</span>
                        </div>
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
    }).join('');
    
    console.log('More projects HTML set successfully');
    console.log('Container innerHTML length:', moreProjectsContainer.innerHTML.length);
    console.log('Container visible:', moreProjectsContainer.offsetHeight > 0);
    console.log('Container display:', window.getComputedStyle(moreProjectsContainer).display);
    console.log('Container children count:', moreProjectsContainer.children.length);
    
    // Force a reflow to ensure the content is visible
    moreProjectsContainer.offsetHeight;
    
    // Add event listeners for the project cards
    setupModalEventListeners();
    
    // Initialize GSAP animations for project detail cards
    initializeProjectDetailCardAnimations();
}

// Function to initialize GSAP animations for project detail cards
function initializeProjectDetailCardAnimations() {
    const projectCards = document.querySelectorAll('#more-projects .project-card-simple');
    
    projectCards.forEach((card, index) => {
        const content = card.querySelector('.card-content');
        const title = card.querySelector('.project-title');
        const description = card.querySelector('.project-description');
        const meta = card.querySelector('.project-meta');
        
        if (!content || !title) return; // Skip if elements not found
        
        const defaultContent = card.querySelector('.card-default');
        const defaultTitle = card.querySelector('.default-title');
        const defaultIcon = card.querySelector('.default-icon');
        
        // Set initial state for GSAP - content is hidden by default
        gsap.set(content, { y: "100%", opacity: 0 });
        gsap.set([title, description, meta].filter(Boolean), { y: 20, opacity: 0 });
        
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
            .to([title, description, meta].filter(Boolean), {
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
            tl.to([title, description, meta].filter(Boolean), {
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

function setupModalEventListeners() {
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
    
    // Update modal client logo if available
    const modalClientNameElement = document.getElementById('modal-client-name');
    if (project.logo && modalClientNameElement) {
        // Remove existing logo if any
        const existingLogo = modalClientNameElement.parentNode.querySelector('.client-logo');
        if (existingLogo) {
            existingLogo.remove();
        }
        
        // Add logo above client name
        // const logoElement = document.createElement('div');
        // logoElement.className = 'client-logo w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden mb-3 mx-auto';
        // logoElement.innerHTML = `
        //     <img src="${project.logo}" 
        //          alt="${project.client} logo" 
        //          class="w-full h-full object-contain"
        //          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        //     <span class="text-sm font-medium text-gray-600" style="display: none;">${project.client.charAt(0)}</span>
        // `;
        // modalClientNameElement.parentNode.insertBefore(logoElement, modalClientNameElement);
    }
    
    // Update modal client label based on client type
    const modalClientLabel = document.getElementById('modal-client-label');
    if (modalClientLabel) {
        modalClientLabel.textContent = project.clientType === 'individual' ? 'Client' : 'Organization';
    }
    
    // Set the detail link
    const detailLink = document.getElementById('modal-detail-link');
    const detailUrl = `project-detail.html?id=${projectId}`;
    detailLink.href = detailUrl;
    
    // Add click event listener to ensure navigation works
    detailLink.onclick = function(e) {
        e.preventDefault();
        window.location.href = detailUrl;
    };
    
    
    // Update screenshot with main image and overlay
    const screenshotContainer = document.getElementById('modal-screenshot');
    if (screenshotContainer) {
        screenshotContainer.innerHTML = `
            <div class="relative h-full rounded-xl overflow-hidden group">
                ${project.image ? `
                    <img src="${project.image}" 
                         alt="${project.title}" 
                         class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                         loading="lazy">
                    <div class="absolute inset-0 bg-black bg-opacity-20"></div>
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

// Add CSS for line clamping
const style = document.createElement('style');
style.textContent = `
    .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Image Preview Functionality
function openImagePreview(imageSrc, title) {
    if (!imageSrc) return;
    
    // Get all images for navigation
    const allImages = Array.from(document.querySelectorAll('#results-screenshots img')).map(img => ({
        src: img.src,
        alt: img.alt || 'Project Image'
    }));
    
    let currentIndex = allImages.findIndex(img => img.src === imageSrc);
    if (currentIndex === -1) currentIndex = 0;
    
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center';
    modal.onclick = function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.body.style.overflow = 'auto';
        }
    };
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'relative w-full h-full flex items-center justify-center p-8';
    modalContent.onclick = function(e) {
        e.stopPropagation();
    };
    
    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'absolute top-4 right-4 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-3 transition-all text-white';
    closeBtn.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
    `;
    closeBtn.onclick = function() {
        document.body.removeChild(modal);
        document.body.style.overflow = 'auto';
    };
    
    // Create previous button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-3 transition-all text-white';
    prevBtn.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
    `;
    prevBtn.onclick = function(e) {
        e.stopPropagation();
        currentIndex = currentIndex > 0 ? currentIndex - 1 : allImages.length - 1;
        updatePreviewImage(allImages[currentIndex].src, allImages[currentIndex].alt);
    };
    
    // Create next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-3 transition-all text-white';
    nextBtn.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
    `;
    nextBtn.onclick = function(e) {
        e.stopPropagation();
        currentIndex = currentIndex < allImages.length - 1 ? currentIndex + 1 : 0;
        updatePreviewImage(allImages[currentIndex].src, allImages[currentIndex].alt);
    };
    
    // Create image container
    const imageContainer = document.createElement('div');
    imageContainer.className = 'max-w-full max-h-full flex items-center justify-center';
    
    // Create image
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = title;
    img.className = 'max-w-full max-h-full object-contain rounded-lg';
    img.loading = 'lazy';
    
    // Create title
    const titleElement = document.createElement('div');
    titleElement.className = 'absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg';
    titleElement.textContent = title;
    
    // Create image counter
    const counterElement = document.createElement('div');
    counterElement.className = 'absolute top-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-lg text-sm';
    counterElement.textContent = `${currentIndex + 1} / ${allImages.length}`;
    
    // Function to update image
    function updatePreviewImage(newSrc, newTitle) {
        img.src = newSrc;
        img.alt = newTitle;
        titleElement.textContent = newTitle;
        counterElement.textContent = `${currentIndex + 1} / ${allImages.length}`;
    }
    
    // Assemble modal
    imageContainer.appendChild(img);
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(prevBtn);
    modalContent.appendChild(nextBtn);
    modalContent.appendChild(imageContainer);
    modalContent.appendChild(titleElement);
    modalContent.appendChild(counterElement);
    modal.appendChild(modalContent);
    
    // Add keyboard navigation
    const handleKeyPress = function(e) {
        if (e.key === 'Escape') {
            document.body.removeChild(modal);
            document.body.style.overflow = 'auto';
            document.removeEventListener('keydown', handleKeyPress);
        } else if (e.key === 'ArrowLeft') {
            currentIndex = currentIndex > 0 ? currentIndex - 1 : allImages.length - 1;
            updatePreviewImage(allImages[currentIndex].src, allImages[currentIndex].alt);
        } else if (e.key === 'ArrowRight') {
            currentIndex = currentIndex < allImages.length - 1 ? currentIndex + 1 : 0;
            updatePreviewImage(allImages[currentIndex].src, allImages[currentIndex].alt);
        }
    };
    
    document.addEventListener('keydown', handleKeyPress);
    
    // Add to page
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

// Test function to manually load more projects
function testLoadMoreProjects() {
    console.log('=== Testing loadMoreProjects manually ===');
    console.log('Project data available:', typeof projectData !== 'undefined');
    if (typeof projectData !== 'undefined') {
        console.log('Available projects:', Object.keys(projectData));
        loadMoreProjects('cryptotracker');
    }
}

// Make test function globally available
window.testLoadMoreProjects = testLoadMoreProjects;

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== DOMContentLoaded event fired ===');
    console.log('Project data available at load:', typeof projectData !== 'undefined');
    
    // If project data is not available, wait a bit and try again
    if (typeof projectData === 'undefined') {
        console.log('Project data not available, waiting...');
        setTimeout(() => {
            console.log('Retrying after delay, project data available:', typeof projectData !== 'undefined');
            loadProjectData();
        }, 500);
    } else {
        loadProjectData();
    }
});
