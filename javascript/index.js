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
        console.log('Initial active item:', activeItem.getAttribute('data-company'));
        updateActiveLine(activeItem);
    }
    
    experienceItems.forEach((item, index) => {
        // Add click event listener
        item.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const company = item.getAttribute('data-company');
            console.log('Clicked on:', company);
            
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
        
        console.log('Active line updated:', {
            company: activeItem.getAttribute('data-company'),
            activeIndex,
            lineTop,
            lineHeight
        });
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
            <footer class="bg-white py-16 pb-10">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <!-- Left Side -->
                        <div class="space-y-8">
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
                                    <a href="${this.pages.contact}" class="bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors text-center">
                                        Get In Touch
                                    </a>
                                    <a href="${this.pages.projects}" class="border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors text-center">
                                        Browse Projects
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Right Side -->
                        <div class="space-y-8">
                            <!-- Social Media Icons -->
                            <div class="flex justify-end">
                                <div class="flex space-x-4">
                                    <a href="#" class="text-gray-700 hover:text-purple-600 transition-colors">
                                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </a>
                                    <a href="#" class="text-gray-700 hover:text-purple-600 transition-colors">
                                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                    <a href="#" class="text-gray-700 hover:text-purple-600 transition-colors">
                                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                    <a href="#" class="text-gray-700 hover:text-purple-600 transition-colors">
                                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.461-2.189 4.588-1.293 1.127-2.964 1.634-4.379 1.634-1.415 0-2.086-.507-2.189-1.634-.103-1.127.896-2.73 2.189-4.588 1.293-1.858 2.964-2.73 4.379-2.73 1.415 0 2.086.872 2.189 2.73z"/>
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


