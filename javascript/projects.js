// Projects Page JavaScript
// Project Data - This is where you store all your project information
const projectData = {
    taskflow: {
        title: "TaskFlow",
        description: "Task management system with drag-and-drop, real-time collaboration, and responsive layout.",
        link: "https://taskflow-demo.com",
        client: "TechCorp Solutions",
        year: "2023",
        role: "Full Stack Developer",
        screenshot: `
            <div class="absolute inset-4 bg-white rounded-xl p-4">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-bold text-gray-900">TASKFLOW</h3>
                    <div class="w-8 h-8 bg-gray-200 rounded-full"></div>
                </div>
                <div class="space-y-3">
                    <div class="flex items-center space-x-3 p-2 bg-blue-50 rounded-lg">
                        <div class="w-4 h-4 border border-blue-500 rounded"></div>
                        <span class="text-sm">Complete project proposal</span>
                        <span class="ml-auto text-xs text-blue-600">High</span>
                    </div>
                    <div class="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                        <div class="w-4 h-4 bg-green-500 rounded"></div>
                        <span class="text-sm text-gray-500 line-through">Review team feedback</span>
                        <span class="ml-auto text-xs text-green-600">Done</span>
                    </div>
                    <div class="flex items-center space-x-3 p-2 bg-purple-50 rounded-lg">
                        <div class="w-4 h-4 border border-purple-500 rounded"></div>
                        <span class="text-sm">Schedule client meeting</span>
                        <span class="ml-auto text-xs text-purple-600">Medium</span>
                    </div>
                </div>
            </div>
        `
    },
    ecocart: {
        title: "EcoCart",
        description: "E-commerce platform promoting eco-friendly products with payment integration.",
        link: "https://ecocart-demo.com",
        client: "Jane Doe",
        year: "2021",
        role: "Lead Designer",
        screenshot: `
            <div class="absolute inset-4 bg-white rounded-xl p-4">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="text-lg font-bold text-gray-900">ECO SHOP</h3>
                    <div class="w-6 h-6 bg-gray-200 rounded-full"></div>
                </div>
                <div class="flex space-x-4">
                    <div class="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                        <div class="w-16 h-16 bg-gray-300 rounded-lg"></div>
                    </div>
                    <div class="flex-1">
                        <h4 class="text-sm font-bold text-gray-900 mb-1">Airpods-Max</h4>
                        <p class="text-lg font-bold text-gray-900 mb-1">$548.00</p>
                        <p class="text-xs text-gray-500 mb-2">or $99.99/month</p>
                        <div class="flex space-x-1 mb-2">
                            <div class="w-4 h-4 bg-purple-400 rounded-full"></div>
                            <div class="w-4 h-4 bg-green-400 rounded-full"></div>
                            <div class="w-4 h-4 bg-pink-400 rounded-full"></div>
                            <div class="w-4 h-4 bg-blue-400 rounded-full"></div>
                        </div>
                        <button class="w-full bg-purple-600 text-white text-xs py-1 rounded">Add to Cart</button>
                    </div>
                </div>
            </div>
        `
    },
    eventplanner: {
        title: "EventPlanner",
        description: "Event planning web application, enabling users to organise and manage events effortlessly.",
        link: "https://eventplanner-demo.com",
        client: "Event Solutions Inc",
        year: "2022",
        role: "UI/UX Designer",
        screenshot: `
            <div class="absolute inset-4 bg-white rounded-xl p-4">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="text-lg font-bold text-gray-900">TIMELINE</h3>
                    <div class="w-6 h-6 bg-gray-200 rounded-full"></div>
                </div>
                <div class="grid grid-cols-7 gap-1 mb-2">
                    <div class="text-center text-xs text-gray-500 py-1">Mon</div>
                    <div class="text-center text-xs text-gray-500 py-1">Tue</div>
                    <div class="text-center text-xs text-gray-500 py-1">Wed</div>
                    <div class="text-center text-xs text-gray-500 py-1">Thu</div>
                    <div class="text-center text-xs text-gray-500 py-1">Fri</div>
                    <div class="text-center text-xs text-gray-500 py-1">Sat</div>
                    <div class="text-center text-xs text-gray-500 py-1">Sun</div>
                </div>
                <div class="grid grid-cols-7 gap-1">
                    <div class="h-8 bg-purple-100 rounded flex items-center justify-center">
                        <span class="text-xs font-bold text-purple-800">1</span>
                    </div>
                    <div class="h-8 bg-gray-100 rounded"></div>
                    <div class="h-8 bg-purple-100 rounded flex items-center justify-center">
                        <span class="text-xs font-bold text-purple-800">2</span>
                    </div>
                    <div class="h-8 bg-gray-100 rounded"></div>
                    <div class="h-8 bg-purple-100 rounded flex items-center justify-center">
                        <span class="text-xs font-bold text-purple-800">3</span>
                    </div>
                    <div class="h-8 bg-gray-100 rounded"></div>
                    <div class="h-8 bg-gray-100 rounded"></div>
                </div>
            </div>
        `
    },
    foodiefinder: {
        title: "FoodieFinder",
        description: "Modern-looking restaurant discovery platform featuring real-time search, reviews, and ratings.",
        link: "https://foodiefinder-demo.com",
        client: "Food Network Co",
        year: "2023",
        role: "Frontend Developer",
        screenshot: `
            <div class="absolute inset-4 bg-white rounded-xl p-4">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="text-lg font-bold text-gray-900">MAPS</h3>
                    <div class="w-6 h-6 bg-gray-200 rounded-full"></div>
                </div>
                <div class="bg-gray-100 rounded-lg p-2 mb-3">
                    <p class="text-xs text-gray-600">Where do you want to eat?</p>
                </div>
                <div class="flex space-x-3">
                    <div class="flex-1 space-y-2">
                        <div class="flex items-center space-x-2 p-2 bg-orange-50 rounded-lg">
                            <div class="w-8 h-8 bg-gray-200 rounded"></div>
                            <div>
                                <p class="text-xs font-medium">The Spoon & Bowl</p>
                                <p class="text-xs text-gray-500">★ 4.8 • 2.1 km</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-2 p-2 bg-orange-50 rounded-lg">
                            <div class="w-8 h-8 bg-gray-200 rounded"></div>
                            <div>
                                <p class="text-xs font-medium">Just Around Coffee</p>
                                <p class="text-xs text-gray-500">★ 4.5 • 1.8 km</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-16 h-20 bg-gray-200 rounded-lg relative">
                        <div class="absolute top-2 left-2 w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div class="absolute top-6 right-2 w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div class="absolute bottom-4 left-3 w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                </div>
            </div>
        `
    }
};

// Global variables for projects page
let currentView = 'grid';
let currentPage = 1;
let projectsPerPage = 6;

function initProjectsPage() {
    loadProjects();
    setupEventListeners();
    updateProjectsCount();
    addParallaxEffect();
    addTypingEffect();
}

function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    // Show loading state
    projectsGrid.innerHTML = '<div class="projects-loading"></div>';
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        const allProjects = getFilteredProjects();
        const totalPages = Math.ceil(allProjects.length / projectsPerPage);
        
        // Get projects for current page
        const startIndex = (currentPage - 1) * projectsPerPage;
        const endIndex = startIndex + projectsPerPage;
        const projects = allProjects.slice(startIndex, endIndex);
        
        if (currentView === 'grid') {
            projectsGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-view';
            projectsGrid.innerHTML = projects.map(projectId => createProjectCard(projectId)).join('');
        } else {
            projectsGrid.className = 'space-y-6 list-view';
            projectsGrid.innerHTML = projects.map(projectId => createProjectListItem(projectId)).join('');
        }
        
        updateProjectsCount();
        updatePagination(allProjects.length, totalPages);
        
        // Add intersection observer for scroll animations
        addScrollAnimations();
    }, 300);
}

function getFilteredProjects() {
    // Return all projects since we removed filtering
    return Object.keys(projectData);
}


function createProjectCard(projectId) {
    const project = projectData[projectId];
    
    return `
        <div class="project-card group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2" data-project="${projectId}">
            <div class="relative h-64 bg-gradient-to-br from-purple-500 to-blue-600 overflow-hidden">
                <div class="absolute inset-0 bg-black bg-opacity-20"></div>
                <div class="absolute inset-4 bg-white rounded-xl p-4 opacity-90">
                    ${project.screenshot}
                </div>
                <div class="absolute top-4 right-4">
                    <span class="px-3 py-1 bg-white bg-opacity-90 text-gray-800 text-xs font-medium rounded-full">
                        ${project.year}
                    </span>
                </div>
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
                            <span class="text-xs font-medium text-gray-600">${project.client.charAt(0)}</span>
                        </div>
                        <span class="text-sm text-gray-600">${project.client}</span>
                    </div>
                    <span class="text-sm text-purple-600 font-medium">${project.role}</span>
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
                    <div class="relative h-48 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl overflow-hidden">
                        <div class="absolute inset-4 bg-white rounded-lg p-3 opacity-90">
                            ${project.screenshot}
                        </div>
                        <div class="absolute top-3 right-3">
                            <span class="px-2 py-1 bg-white bg-opacity-90 text-gray-800 text-xs font-medium rounded-full">
                                ${project.year}
                            </span>
                        </div>
                    </div>
                </div>
                
                <div class="md:w-2/3">
                    <div class="flex items-start justify-between mb-3">
                        <div>
                            <h3 class="text-2xl font-bold text-gray-900 mb-1">${project.title}</h3>
                            <p class="text-gray-600">${project.client} • ${project.role}</p>
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
            gridViewBtn.classList.add('bg-purple-100', 'text-purple-600');
            gridViewBtn.classList.remove('bg-gray-100', 'text-gray-600');
            listViewBtn.classList.add('bg-gray-100', 'text-gray-600');
            listViewBtn.classList.remove('bg-purple-100', 'text-purple-600');
            loadProjects();
        });
    }
    
    if (listViewBtn) {
        listViewBtn.addEventListener('click', function() {
            currentView = 'list';
            listViewBtn.classList.add('bg-purple-100', 'text-purple-600');
            listViewBtn.classList.remove('bg-gray-100', 'text-gray-600');
            gridViewBtn.classList.add('bg-gray-100', 'text-gray-600');
            gridViewBtn.classList.remove('bg-purple-100', 'text-purple-600');
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
    const detailUrl = `project-detail.html?project=${projectId}`;
    detailLink.href = detailUrl;
    
    // Remove any existing event listeners
    detailLink.onclick = null;
    
    // Add click event listener to ensure navigation works
    detailLink.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Button clicked! Navigating to:', detailUrl);
        window.location.href = detailUrl;
    });
    
    console.log('Modal opened for project:', projectId, 'URL:', detailUrl);
    console.log('Available projects:', Object.keys(projectData));
    
    // Update screenshot
    const screenshotContainer = document.getElementById('modal-screenshot');
    if (screenshotContainer) {
        screenshotContainer.innerHTML = project.screenshot;
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
                <button class="pagination-btn px-4 py-2 bg-purple-600 text-white rounded-lg font-medium" data-page="${i}">
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