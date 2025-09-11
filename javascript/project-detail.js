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
    const projectId = getUrlParameter('id');
    
    if (!projectId || !projectData[projectId]) {
        // Redirect to home page if project not found
        window.location.href = 'index.html';
        return;
    }
    
    const project = projectData[projectId];
    
    // Update page title
    document.title = `${project.title} - Portfolio`;
    
    // Update project title
    document.getElementById('project-title').textContent = project.title;
    
    // Update project description
    document.getElementById('project-description').textContent = project.description;
    
    // Update project link
    document.getElementById('project-link').href = project.link;
    
    // Update project screenshot with main image and overlay
    const screenshotContainer = document.getElementById('project-screenshot');
    if (screenshotContainer) {
        screenshotContainer.innerHTML = `
            <div class="relative h-full rounded-2xl overflow-hidden group">
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
    
    // Update metadata
    document.getElementById('client-name').textContent = project.client;
    document.getElementById('project-year').textContent = project.year;
    document.getElementById('project-role').textContent = project.role;
    
    // Update about content
    const aboutContent = document.getElementById('about-content');
    aboutContent.innerHTML = project.about.map(paragraph => `<p>${paragraph}</p>`).join('');
    
    // Update client content
    const clientContent = document.getElementById('client-content');
    clientContent.innerHTML = project.clientInfo.map(paragraph => `<p>${paragraph}</p>`).join('');
    
    // Update challenges content
    const challengesContent = document.getElementById('challenges-content');
    challengesContent.innerHTML = project.challenges.map(paragraph => `<p>${paragraph}</p>`).join('');
    
    // Update results content
    const resultsContent = document.getElementById('results-content');
    resultsContent.innerHTML = project.results.map(paragraph => `<p>${paragraph}</p>`).join('');
    
    // Update results screenshots with custom layout
    const resultsScreenshots = document.getElementById('results-screenshots');
    if (project.resultScreenshots && project.resultScreenshots.length >= 3) {
        resultsScreenshots.innerHTML = `
            <!-- First row: 40% left, 60% right -->
            <div class="grid grid-cols-1 lg:grid-cols-10 gap-8">
                <div class="lg:col-span-4">
                    <div class="relative">
                        ${project.resultScreenshots[0]}
                        <div class="absolute -bottom-2 -right-2 w-16 h-16 bg-purple-200 rounded-full opacity-30"></div>
                    </div>
                </div>
                <div class="lg:col-span-6">
                    <div class="relative">
                        ${project.resultScreenshots[1]}
                        <div class="absolute -bottom-2 -right-2 w-16 h-16 bg-purple-200 rounded-full opacity-30"></div>
                    </div>
                </div>
            </div>
            <!-- Second row: Full width -->
            <div class="w-full">
                <div class="relative">
                    ${project.resultScreenshots[2]}
                    <div class="absolute -bottom-2 -right-2 w-16 h-16 bg-purple-200 rounded-full opacity-30"></div>
                </div>
            </div>
        `;
    }
    
    // Load more projects (exclude current project)
    setTimeout(() => {
        loadMoreProjects(projectId);
    }, 100);
}

// Function to load more projects
function loadMoreProjects(currentProjectId) {
    const moreProjectsContainer = document.querySelector('#more-projects');
    if (!moreProjectsContainer) {
        return;
    }
    
    const otherProjects = Object.keys(projectData).filter(id => id !== currentProjectId);
    
    if (otherProjects.length === 0) {
        moreProjectsContainer.innerHTML = '<p class="text-center text-gray-500">No other projects available</p>';
        return;
    }
    
    // Shuffle the array to get random projects
    const shuffledProjects = otherProjects.sort(() => Math.random() - 0.5);
    const selectedProjects = shuffledProjects.slice(0, 3); // Show 3 random projects
    
    moreProjectsContainer.innerHTML = selectedProjects.map(projectId => {
        const project = projectData[projectId];
        if (!project) {
            return '';
        }
        return `
            <div class="project-card group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 cursor-pointer" data-project="${projectId}">
                <div class="relative h-64 overflow-hidden group">
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
                        <h3 class="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                            ${project.title}
                        </h3>
                    </div>
                    
                    <p class="text-gray-600 mb-4 line-clamp-2">${project.description}</p>
                    
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-2">
                            <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                <span class="text-xs font-medium text-gray-600">${typeof project.client === 'string' ? project.client.charAt(0) : 'C'}</span>
                            </div>
                            <span class="text-sm text-gray-600">${typeof project.client === 'string' ? project.client : 'Client'}</span>
                        </div>
                        <span class="text-sm text-purple-600 font-medium">${project.role}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    
    
    // Add event listeners for the project cards
    setupModalEventListeners();
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
    
    // Update modal content
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-client').textContent = project.client;
    document.getElementById('modal-year').textContent = project.year;
    document.getElementById('modal-role').textContent = project.role;
    document.getElementById('modal-client-name').textContent = project.client;
    document.getElementById('modal-description').textContent = project.description;
    
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

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadProjectData();
});
