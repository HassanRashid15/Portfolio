// Navbar Component
class NavbarComponent {
    constructor() {
        this.currentPage = document.body.getAttribute('data-page') || 'home';
        this.pages = {
            home: 'index.html',
            projects: 'projects.html',
            about: 'about.html',
            contact: 'contact.html'
        };
    }

    getLinkClass(page) {
        return this.currentPage === page 
            ? 'text-purple-600 font-bold' 
            : 'text-gray-700 hover:text-gray-900 transition-colors font-bold';
    }

    render() {
        const navbarHTML = `
            <nav class="bg-white shadow-sm fixed w-full top-0 z-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-center h-16">
                        <!-- Logo -->
                        <div class="flex-shrink-0">
                            <a href="${this.pages.home}" class="text-xl font-bold text-gray-900">LucaDCZ.</a>
                        </div>
                        
                        <!-- Desktop Menu - Centered -->
                        <div class="hidden md:block">
                            <div class="flex items-center space-x-8">
                                <a href="${this.pages.home}" class="${this.getLinkClass('home')}">Home</a>
                                <a href="${this.pages.projects}" class="${this.getLinkClass('projects')}">Projects</a>
                                <a href="${this.pages.about}" class="${this.getLinkClass('about')}">About</a>
                            </div>
                        </div>

                        <!-- Right side - Chat icon (Desktop only) -->
                        <div class="hidden md:flex items-center">
                            <a href="${this.pages.contact}" class="${this.currentPage === 'contact' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'} transition-colors">
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </a>
                        </div>

                        <!-- Mobile menu button with chat icon -->
                        <div class="md:hidden flex items-center space-x-4">
                            <a href="${this.pages.contact}" class="${this.currentPage === 'contact' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'} transition-colors">
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </a>
                            <button id="mobile-menu-button" class="text-gray-700 hover:text-gray-900 focus:outline-none">
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path id="menu-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                    <path id="close-icon" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Mobile Navigation -->
                <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
                    <div class="px-2 pt-2 pb-3 space-y-1">
                        <a href="${this.pages.home}" class="block px-3 py-2 ${this.getLinkClass('home')}">Home</a>
                        <a href="${this.pages.projects}" class="block px-3 py-2 ${this.getLinkClass('projects')}">Projects</a>
                        <a href="${this.pages.about}" class="block px-3 py-2 ${this.getLinkClass('about')}">About</a>
                    </div>
                </div>
            </nav>
        `;
        return navbarHTML;
    }

    mount(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = this.render();
        }
    }
}

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            // Toggle mobile menu visibility
            mobileMenu.classList.toggle('hidden');
            
            // Toggle icons
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });

        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('nav');
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white/95', 'backdrop-blur-sm');
        } else {
            navbar.classList.remove('bg-white/95', 'backdrop-blur-sm');
        }
    });
});

// Experience Tabs Functionality
function initExperienceTabs() {
    const experienceItems = document.querySelectorAll('.experience-item');
    const experienceDetails = document.querySelectorAll('.experience-details');
    const activeLine = document.getElementById('active-line');
    
    if (!experienceItems.length || !experienceDetails.length || !activeLine) {
        return;
    }
    
    // Set initial active state
    const activeItem = document.querySelector('.experience-item.active');
    if (activeItem) {
        // console.log('Initial active item:', activeItem.getAttribute('data-company'));
        updateActiveLine(activeItem);
    }
    
    experienceItems.forEach((item, index) => {
        // Add click event listener
        item.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const company = item.getAttribute('data-company');
            // console.log('Clicked on:', company);
            
            // Remove active class from all items
            experienceItems.forEach(i => {
                i.classList.remove('active');
                const text = i.querySelector('span');
                if (text) {
                    text.classList.remove('text-purple-600', 'font-medium');
                    text.classList.add('text-gray-600');
                }
            });
            
            // Add active class to clicked item
            item.classList.add('active');
            const text = item.querySelector('span');
            if (text) {
                text.classList.remove('text-gray-600');
                text.classList.add('text-purple-600', 'font-medium');
            }
            
            // Hide all experience details
            experienceDetails.forEach(detail => {
                detail.classList.add('hidden');
            });
            
            // Show selected experience details
            const selectedDetails = document.getElementById(`${company}-details`);
            if (selectedDetails) {
                selectedDetails.classList.remove('hidden');
            }
            
            // Update active line
            updateActiveLine(item);
        });
    });
    
    function updateActiveLine(activeItem) {
        const container = activeItem.closest('.space-y-8');
        const items = container.querySelectorAll('.experience-item');
        const activeIndex = Array.from(items).indexOf(activeItem);
        
        // Calculate position based on item index
        // space-y-8 = 32px gap between items, py-2 = 16px padding (8px top + 8px bottom)
        const itemHeight = 48; // Height of each item including padding and text
        const gapHeight = 32; // space-y-8 gap between items
        const lineTop = activeIndex * (itemHeight + gapHeight);
        const lineHeight = itemHeight;
        
        activeLine.style.top = `${lineTop}px`;
        activeLine.style.height = `${lineHeight}px`;
        
        // console.log('Active line updated:', {
        //     company: activeItem.getAttribute('data-company'),
        //     activeIndex,
        //     lineTop,
        //     lineHeight
        // });
    }
}

// Footer Component
class FooterComponent {
    constructor(currentPage = 'home') {
        this.currentPage = currentPage;
        this.pages = {
            'home': 'index.html',
            'projects': 'projects.html',
            'about': 'about.html',
            'contact': 'contact.html'
        };
    }

    render() {
        const footerHTML = `
            <footer class="bg-white py-10 pb-5">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-end">
                        <!-- Left Side -->
                        <div class="space-y-8 w-full">
                            <!-- Navigation Links -->
                            <div>
                                <div class="flex flex-wrap gap-6 mb-8">
                                    <a href="${this.pages.home}" class="${this.getLinkClass('home')}">Home</a>
                                    <a href="${this.pages.projects}" class="${this.getLinkClass('projects')}">Projects</a>
                                    <a href="${this.pages.about}" class="${this.getLinkClass('about')}">About</a>
                                    <a href="${this.pages.contact}" class="${this.getLinkClass('contact')}">Contact</a>
                                </div>
                            </div>
                            
                            <!-- Call to Action -->
                            <div>
                                <h3 class="text-xl font-bold text-gray-900 mb-4">Interested in working together?</h3>
                                <div class="flex flex-col sm:flex-row gap-4">
                                    <a href="${this.pages.contact}" class="bg-purple-600 text-white font-semibold py-3 px-8 rounded-full border border-transparent hover:bg-transparent hover:text-purple-600 hover:border-purple-600 transition-colors text-center">
                                        Get In Touch
                                    </a>
                                    <a href="${this.pages.projects}" class="border border-gray-300 text-gray-700 hover:bg-purple-700 hover:text-white font-semibold py-3 px-8 rounded-full transition-colors text-center">
                                        Browse Projects
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Right Side -->
                        <div class="space-y-8 w-full">
                            <!-- Social Media Icons -->
                            <div class="flex justify-end">
                                <div class="flex space-x-4">
                                    <!-- LinkedIn -->
                                    <a href="https://www.linkedin.com/in/hassan-rashid-61136823b/" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-purple-600 transition-colors" aria-label="LinkedIn">
                                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                    
                                    <!-- Instagram -->
                                    <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-purple-600 transition-colors" aria-label="Instagram">
                                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    </a>
                                    
                                    <!-- GitHub -->
                                    <a href="https://github.com/HassanRashid15" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-purple-600 transition-colors" aria-label="GitHub">
                                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                    
                                    <!-- X (Twitter) -->
                                    <a href="https://x.com/yourusername" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-purple-600 transition-colors" aria-label="X (Twitter)">
                                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            
                            <!-- Copyright -->
                            <div class="text-right">
                                <p class="text-gray-600 mb-2">&copy; 2024 All Rights Reserved.</p>
                                <p class="text-gray-600 flex items-center justify-end">
                                    Made with 
                                    <svg class="h-4 w-4 text-purple-600 mx-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                                    </svg>
                                    by LucaDCZ
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        `;
        return footerHTML;
    }

    getLinkClass(page) {
        return this.currentPage === page 
            ? 'text-purple-600 font-bold' 
            : 'text-gray-700 hover:text-purple-600 transition-colors font-bold';
    }

    mount(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = this.render();
        }
    }
}

    // Auto-initialize navbar and footer based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = document.body.getAttribute('data-page') || 'home';
    
    // Remove any transforms from home section (fix for cached parallax effect)
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.style.transform = 'none';
        homeSection.style.transition = 'none';
    }
    
    // Initialize navbar
    const navbar = new NavbarComponent();
    navbar.mount('navbar-container');
    
    // Initialize footer
    const footer = new FooterComponent(currentPage);
    footer.mount('footer-container');
    
    // Initialize progress line animation
    initProgressLineAnimation();
    
    // Initialize experience tabs
    setTimeout(() => {
        initExperienceTabs();
    }, 100);
    
    // Initialize projects slider
    setTimeout(() => {
        initProjectsSlider();
    }, 100);
    
    // Initialize home page modal functionality
    setTimeout(() => {
        initHomePageModal();
    }, 100);
    
    // Initialize WhatsApp floating button
    setTimeout(() => {
        initWhatsAppButton();
    }, 2000); // Show after 2 seconds
    
    
    
});

// Progress Line Animation
function initProgressLineAnimation() {
    const experienceSection = document.querySelector('#experience-section');
    const progressLine = document.getElementById('progress-line');
    const experienceItems = document.querySelectorAll('.experience-item');
    
    if (!experienceSection || !progressLine || experienceItems.length === 0) return;
    
    let ticking = false;
    
    function updateProgressLine() {
        const scrolled = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        // Get the first and last experience items to determine the actual content range
        const firstItem = experienceItems[0];
        const lastItem = experienceItems[experienceItems.length - 1];
        
        const firstItemRect = firstItem.getBoundingClientRect();
        const lastItemRect = lastItem.getBoundingClientRect();
        
        const firstItemTop = firstItemRect.top + scrolled;
        const lastItemBottom = lastItemRect.bottom + scrolled;
        
        // Calculate the actual content height (from first item to last item)
        const contentStart = firstItemTop - windowHeight * 0.5; // Start when first item is 50% into viewport
        const contentEnd = lastItemBottom - windowHeight * 0.5; // End when last item is 50% out of viewport
        const contentHeight = lastItemBottom - firstItemTop;
        
        // Calculate progress through the content area
        let progress = 0;
        
        if (scrolled >= contentStart && scrolled <= contentEnd) {
            // Calculate progress (0 to 1) through the content area
            progress = (scrolled - contentStart) / (contentEnd - contentStart);
        } else if (scrolled > contentEnd) {
            // If we've passed the content, show full progress
            progress = 1;
        }
        
        // Apply the progress to the line height - limit to actual content height
        const currentHeight = Math.max(0, Math.min(contentHeight, contentHeight * progress));
        
        progressLine.style.height = `${currentHeight}px`;
        
        ticking = false;
    }
    
    // Throttled scroll event for better performance
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateProgressLine);
            ticking = true;
        }
    });
    
    // Initial call
    updateProgressLine();
}

// Projects Showcase Functionality
function initProjectsSlider() {
    const projectsContainer = document.getElementById('projectsContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.dot');
    const projectSlides = document.querySelectorAll('.project-slide');
    
    if (!projectsContainer || !prevBtn || !nextBtn) return;
    
    let currentSlide = 0;
    const totalSlides = projectSlides.length;
    
    function updateSlider() {
        // Hide all slides
        projectSlides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.remove('hidden');
                slide.classList.add('active');
            } else {
                slide.classList.add('hidden');
                slide.classList.remove('active');
            }
        });
        
        // Update dots
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.remove('bg-gray-300');
                dot.classList.add('bg-purple-600');
            } else {
                dot.classList.remove('bg-purple-600');
                dot.classList.add('bg-gray-300');
            }
        });
        
        // Update button states
        prevBtn.style.opacity = currentSlide === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentSlide === totalSlides - 1 ? '0.5' : '1';
    }
    
    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlider();
        }
    }
    
    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
        }
    }
    
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateSlider();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    projectsContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    projectsContainer.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const threshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }
    
    // Initialize
    updateSlider();
}

// Home Page Modal Functionality
function initHomePageModal() {
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

// Project modal functions
function showProjectModal(projectId) {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    
    // Project data
    const projects = {
        taskflow: {
            title: 'TaskFlow',
            client: 'Personal Project',
            year: '2024',
            role: 'Full Stack Developer',
            clientName: 'Self',
            description: 'A comprehensive task management system built with React and Socket.io. Features include drag-and-drop functionality, real-time collaboration, and a responsive design that works seamlessly across all devices.',
            screenshot: 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
        },
        ecocart: {
            title: 'EcoCart',
            client: 'E-commerce Platform',
            year: '2024',
            role: 'Frontend Developer',
            clientName: 'EcoCart Inc.',
            description: 'An innovative e-commerce platform focused on promoting eco-friendly products. Integrated with Stripe for secure payments and features a modern, user-friendly interface designed to encourage sustainable shopping habits.',
            screenshot: 'linear-gradient(135deg, #10b981, #059669)'
        },
        eventplanner: {
            title: 'EventPlanner',
            client: 'Event Management',
            year: '2023',
            role: 'Full Stack Developer',
            clientName: 'EventPro',
            description: 'A comprehensive event planning web application that enables users to organize and manage events effortlessly. Built with Vue.js and Node.js, featuring real-time updates and collaborative planning tools.',
            screenshot: 'linear-gradient(135deg, #8b5cf6, #ec4899)'
        },
        foodiefinder: {
            title: 'FoodieFinder',
            client: 'Restaurant Discovery',
            year: '2023',
            role: 'Mobile Developer',
            clientName: 'FoodieCorp',
            description: 'A modern restaurant discovery platform built with React Native. Features real-time search, user reviews, ratings, and integration with Maps API for location-based restaurant recommendations.',
            screenshot: 'linear-gradient(135deg, #f59e0b, #dc2626)'
        }
    };
    
    const project = projects[projectId];
    if (!project) return;
    
    // Update modal content
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-client').textContent = project.client;
    document.getElementById('modal-year').textContent = project.year;
    document.getElementById('modal-role').textContent = project.role;
    document.getElementById('modal-client-name').textContent = project.clientName;
    document.getElementById('modal-description').textContent = project.description;
    
    // Update screenshot with actual project image and mockup from projects.js
    const screenshot = document.getElementById('modal-screenshot');
    if (screenshot && typeof projectData !== 'undefined' && projectData[projectId]) {
        const projectDataItem = projectData[projectId];
        screenshot.innerHTML = `
            <div class="relative h-full rounded-xl overflow-hidden">
                ${projectDataItem.image ? `
                    <img src="${projectDataItem.image}" 
                         alt="${projectDataItem.title}" 
                         class="w-full h-full object-cover"
                         loading="lazy">
                ` : `
                    <div class="w-full h-full bg-gradient-to-br from-purple-500 to-blue-600"></div>
                `}
              
        `;
    }
    
    // Update detail link with correct URL parameter format
    const detailLink = document.getElementById('modal-detail-link');
    if (detailLink) {
        const detailUrl = `project-detail.html?id=${projectId}`;
        detailLink.href = detailUrl;
        
        // Remove any existing click handlers and add new one
        detailLink.onclick = function(e) {
            e.preventDefault();
            // Close modal first
            hideProjectModal();
            // Navigate to detail page with correct URL format
            window.location.href = detailUrl;
        };
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

// WhatsApp Floating Button
function initWhatsAppButton() {
    // Check if button already exists
    if (document.getElementById('whatsapp-float-btn')) return;
    
    // Create WhatsApp button
    const whatsappButton = document.createElement('div');
    whatsappButton.id = 'whatsapp-float-btn';
    whatsappButton.innerHTML = `
        <a href="https://wa.me/923349878525?text=Hi! I'm interested in your services." 
           target="_blank" 
           rel="noopener noreferrer"
           class="whatsapp-float-btn"
           aria-label="Contact us on WhatsApp">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
        </a>
    `;
    
    // Add to body
    document.body.appendChild(whatsappButton);
    
    // Add CSS styles
    const style = document.createElement('style');
    style.textContent = `
        #whatsapp-float-btn {
            position: fixed;
            right: -80px;
            bottom: 20px;
            z-index: 1000;
            transition: right 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        #whatsapp-float-btn.show {
            right: 20px;
        }
        
        .whatsapp-float-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            background: #25D366;
            border-radius: 50%;
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
            color: white;
            text-decoration: none;
            transition: all 0.3s ease;
            animation: pulse 2s infinite;
        }
        
        .whatsapp-float-btn:hover {
            background: #128C7E;
            transform: scale(1.1);
            box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
        }
        
        .whatsapp-float-btn svg {
            width: 28px;
            height: 28px;
        }
        
        @keyframes pulse {
            0% {
                box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
            }
            50% {
                box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4), 0 0 0 10px rgba(37, 211, 102, 0.1);
            }
            100% {
                box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
            }
        }
        
        /* Mobile responsive */
        @media (max-width: 768px) {
            #whatsapp-float-btn {
                bottom: 15px;
            }
            
            #whatsapp-float-btn.show {
                right: 15px;
            }
            
            .whatsapp-float-btn {
                width: 50px;
                height: 50px;
            }
            
            .whatsapp-float-btn svg {
                width: 24px;
                height: 24px;
            }
        }
    `;
    
    document.head.appendChild(style);
    
    // Show button with animation after a short delay
    setTimeout(() => {
        whatsappButton.classList.add('show');
    }, 100);
    
    // Add click tracking (optional)
    whatsappButton.addEventListener('click', function() {
        console.log('WhatsApp button clicked');
    });
}

// Mobile Tab Functionality
function initMobileTabs() {
    const tabButtons = document.querySelectorAll('.tab-button-mobile');
    const tabContents = document.querySelectorAll('.experience-details-mobile');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(content => content.classList.add('hidden'));
            // Show target tab content
            const targetContent = document.getElementById(`${targetTab}-details-mobile`);
            if (targetContent) {
                targetContent.classList.remove('hidden');
            }
        });
    });
}

// Import project data from projects.js
// Note: In a real application, you would use ES6 modules or fetch the data
// For now, we'll access the global projectData from projects.js

// Function to load random projects for home page
function loadHomeProjects() {
    // Check if projectData is available
    if (typeof projectData === 'undefined') {
        console.log('Project data not loaded yet, retrying...');
        setTimeout(loadHomeProjects, 200);
        return;
    }

    const container = document.getElementById('home-projects-container');
    if (!container) return;

    // Get all project IDs and shuffle them
    const projectIds = Object.keys(projectData);
    const shuffledProjects = projectIds.sort(() => Math.random() - 0.5);
    
    // Take first 4 projects for home page
    const selectedProjects = shuffledProjects.slice(0, 4);
    
    // Create the layout: 30% - 70% on first row, 70% - 30% on second row
    const layout = [
        { size: 'lg:col-span-3', project: selectedProjects[0] },
        { size: 'lg:col-span-7', project: selectedProjects[1] },
        { size: 'lg:col-span-7', project: selectedProjects[2] },
        { size: 'lg:col-span-3', project: selectedProjects[3] }
    ];

    let projectsHTML = '';
    
    // First Row: 30% Left, 70% Right
    projectsHTML += '<div class="grid grid-cols-1 lg:grid-cols-10 gap-8 mb-8">';
    projectsHTML += createProjectCard(layout[0].size, layout[0].project);
    projectsHTML += createProjectCard(layout[1].size, layout[1].project);
    projectsHTML += '</div>';
    
    // Second Row: 70% Left, 30% Right
    projectsHTML += '<div class="grid grid-cols-1 lg:grid-cols-10 gap-8">';
    projectsHTML += createProjectCard(layout[2].size, layout[2].project);
    projectsHTML += createProjectCard(layout[3].size, layout[3].project);
    projectsHTML += '</div>';

    container.innerHTML = projectsHTML;
    
    // Add click event listeners to the new project cards
    addProjectClickHandlers();
}

// Function to create individual project card HTML
function createProjectCard(size, projectId) {
    const project = projectData[projectId];
    if (!project) return '';

    // Generate technology tags based on project type
    const techTags = generateTechTags(project);
    
    return `
        <div class="${size}">
            <div class="card hover:shadow-lg transition-shadow duration-300 cursor-pointer" data-project="${projectId}">
                <div class="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg mb-4 overflow-hidden relative group">
                    ${project.image ? `
                        <img src="${project.image}" 
                             alt="${project.title}" 
                             class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                             loading="lazy">
                        <div class="absolute inset-0 bg-black bg-opacity-30"></div>
                    ` : ''}
                </div>
                <div class="flex items-center justify-between mb-2">
                    <h3 class="text-xl font-semibold text-gray-900">${project.title}</h3>
                    <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>
                </div>
                <p class="text-gray-600 mb-4">${project.description}</p>
                <div class="flex space-x-2">
                    ${techTags.map(tag => `<span class="px-3 py-1 ${tag.bg} ${tag.text} text-sm rounded-full">${tag.name}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

// Function to generate technology tags based on project
function generateTechTags(project) {
    const techMap = {
        'taskflow': [
            { name: 'React', bg: 'bg-blue-100', text: 'text-blue-800' },
            { name: 'Socket.io', bg: 'bg-purple-100', text: 'text-purple-800' }
        ],
        'ecocart': [
            { name: 'React', bg: 'bg-green-100', text: 'text-green-800' },
            { name: 'Stripe', bg: 'bg-blue-100', text: 'text-blue-800' }
        ],
        'eventplanner': [
            { name: 'Vue.js', bg: 'bg-purple-100', text: 'text-purple-800' },
            { name: 'Node.js', bg: 'bg-blue-100', text: 'text-blue-800' }
        ],
        'foodiefinder': [
            { name: 'React Native', bg: 'bg-orange-100', text: 'text-orange-800' },
            { name: 'Maps API', bg: 'bg-blue-100', text: 'text-blue-800' }
        ],
        'healthtracker': [
            { name: 'React', bg: 'bg-green-100', text: 'text-green-800' },
            { name: 'Node.js', bg: 'bg-blue-100', text: 'text-blue-800' }
        ],
        'cryptotracker': [
            { name: 'React', bg: 'bg-yellow-100', text: 'text-yellow-800' },
            { name: 'Chart.js', bg: 'bg-blue-100', text: 'text-blue-800' }
        ],
        'socialconnect': [
            { name: 'Vue.js', bg: 'bg-blue-100', text: 'text-blue-800' },
            { name: 'Firebase', bg: 'bg-orange-100', text: 'text-orange-800' }
        ],
        'smartcity': [
            { name: 'React', bg: 'bg-green-100', text: 'text-green-800' },
            { name: 'IoT', bg: 'bg-purple-100', text: 'text-purple-800' }
        ]
    };

    // Find project key by title
    const projectKey = Object.keys(projectData).find(key => projectData[key].title === project.title);
    return techMap[projectKey] || [
        { name: 'React', bg: 'bg-blue-100', text: 'text-blue-800' },
        { name: 'Node.js', bg: 'bg-green-100', text: 'text-green-800' }
    ];
}

// Function to add click handlers for project cards
function addProjectClickHandlers() {
    const projectCards = document.querySelectorAll('[data-project]');
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            showProjectModal(projectId);
        });
    });
}

// Duplicate showProjectModal function removed - using the existing one above

// Function to load project images dynamically from projects.js (legacy function)
function loadProjectImages() {
    // This function is now replaced by loadHomeProjects for the home page
    // Keep it for backward compatibility with other pages
    console.log('loadProjectImages called - this function is deprecated for home page');
}

// Function removed - no more "More Projects" section

// Initialize mobile tabs when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initMobileTabs();
    
    // Load home projects if we're on the home page
    if (document.body.getAttribute('data-page') === 'home') {
        setTimeout(() => {
            loadHomeProjects();
        }, 100);
    } else {
        // Load project images for other pages (legacy)
        setTimeout(() => {
            loadProjectImages();
        }, 100);
    }
});


