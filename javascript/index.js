// Experience Data
const experienceData = {
    apple: {
        title: "Senior iOS Developer",
        company: "Apple",
        period: "June 2020 - Present",
        responsibilities: [
            "Led development of core iOS applications used by millions of users worldwide.",
            "Collaborated with cross-functional teams to deliver high-quality software solutions.",
            "Mentored junior developers and established best practices for iOS development."
        ]
    },
    microsoft: {
        title: "Frontend Developer",
        company: "Microsoft",
        period: "January - April 2018",
        responsibilities: [
            "Developed responsive web applications using modern JavaScript frameworks.",
            "Collaborated with design teams to implement cutting-edge user interfaces.",
            "Optimized application performance and user experience across multiple browsers."
        ]
    },
    spotify: {
        title: "UI/UX Designer",
        company: "Spotify",
        period: "May - August 2017",
        responsibilities: [
            "Designed user interfaces for music streaming applications and web platforms.",
            "Conducted user research and usability testing to improve product design.",
            "Created interactive prototypes and design systems for consistent user experience."
        ]
    },
    stripe: {
        title: "Product Designer",
        company: "Stripe",
        period: "September 2016 - January 2017",
        responsibilities: [
            "Designed payment processing interfaces and financial dashboard components.",
            "Worked closely with engineering teams to implement design specifications.",
            "Conducted A/B tests to optimize conversion rates and user engagement."
        ]
    },
    webflow: {
        title: "Product Designer",
        company: "Webflow",
        period: "September 2017 - July 2018",
        responsibilities: [
            "Designed intuitive user interfaces for the visual web development platform.",
            "Created comprehensive design systems and component libraries.",
            "Collaborated with product managers to define user requirements and feature specifications."
        ]
    }
};

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
        // Special case: highlight Projects link when on project-detail page
        if (page === 'projects' && this.currentPage === 'project-detail') {
            return 'text-purple-600 font-bold';
        }
        
        return this.currentPage === page 
            ? 'text-purple-600 font-bold' 
            : 'text-gray-700 link transition-colors font-bold';
    }

    render() {
        const navbarHTML = `
            <nav class="bg-white shadow-sm fixed w-full top-0 z-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style="padding-left: 5px;">
                    <div class="flex justify-between items-center h-16">
                        <!-- Logo -->
                        <div class="flex-shrink-0">
                            <a href="${this.pages.home}" class="flex items-center">
                                <img src="Assets/Navlogo.png" alt="Logo" class="h-[60px] w-auto">
                            </a>
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
                            <a href="${this.pages.contact}" class="${this.getLinkClass('contact')} transition-colors">
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </a>
                        </div>

                        <!-- Mobile menu button with chat icon -->
                        <div class="md:hidden flex items-center space-x-4">
                            <a href="${this.pages.contact}" class="${this.getLinkClass('contact')} transition-colors">
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </a>
                            <div id="mobile-menu-button" class="container">
                                <div class="bars"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Animated Mobile Navigation -->
                <nav id="mobile-nav">
                      <a href="${this.pages.home}" class="flex items-center navlogo-custom">
                                <img src="Assets/navwhite.png" alt="Logo" class="h-[70px] w-auto">
                            </a>
                    <div class="close">
                        <div></div>
                    </div>
                    <ul>
                        <li><a href="${this.pages.home}" class="${this.currentPage === 'home' ? 'text-purple-400' : 'text-white'} hover:text-purple-400 transition-colors">Home</a></li>
                        <li><a href="${this.pages.about}" class="${this.currentPage === 'about' ? 'text-purple-400' : 'text-white'} hover:text-purple-400 transition-colors">About</a></li>
                        <li><a href="${this.pages.projects}" class="${this.currentPage === 'projects' ? 'text-purple-400' : 'text-white'} hover:text-purple-400 transition-colors">Projects</a></li>
                        <li><a href="${this.pages.contact}" class="${this.currentPage === 'contact' ? 'text-purple-400' : 'text-white'} hover:text-purple-400 transition-colors">Contact</a></li>
                    </ul>
                </nav>
            </nav>
        `;
        return navbarHTML;
    }

    mount(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = this.render();
            console.log('Navbar mounted successfully');
        } else {
            console.error('Navbar container not found:', containerId);
        }
    }
}

// Mobile menu functionality - moved to after navbar is mounted
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    console.log('Initializing mobile menu:', {
        mobileMenuButton: !!mobileMenuButton,
        mobileMenu: !!mobileMenu,
        menuIcon: !!menuIcon,
        closeIcon: !!closeIcon
    });

    // Skip if using the new animated mobile menu (which uses #mobile-nav)
    if (document.getElementById('mobile-nav')) {
        console.log('Using animated mobile menu, skipping old mobile menu');
        return;
    }

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Mobile menu button clicked');
            
            // Toggle mobile menu visibility with animation
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                // Show menu with animation
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('show');
                mobileMenu.style.display = 'block';
            } else {
                // Hide menu with animation
                mobileMenu.classList.remove('show');
                mobileMenu.classList.add('hidden');
                
                // Hide after animation completes
                setTimeout(() => {
                    mobileMenu.style.display = 'none';
                }, 300); // Match CSS transition duration
            }
            
            // Toggle icons with animation
            if (menuIcon && closeIcon) {
                if (isHidden) {
                    menuIcon.classList.add('hidden');
                    closeIcon.classList.remove('hidden');
                } else {
                    menuIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                }
            }
        });

        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Animate close
                mobileMenu.classList.remove('show');
                mobileMenu.classList.add('hidden');
                
                // Hide after animation completes
                setTimeout(() => {
                    mobileMenu.style.display = 'none';
                }, 300);
                
                if (menuIcon && closeIcon) {
                    menuIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
                // Animate close
                mobileMenu.classList.remove('show');
                mobileMenu.classList.add('hidden');
                
                // Hide after animation completes
                setTimeout(() => {
                    mobileMenu.style.display = 'none';
                }, 300);
                
                if (menuIcon && closeIcon) {
                    menuIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                }
            }
        });
    } else {
        console.error('Mobile menu elements not found:', {
            mobileMenuButton: !!mobileMenuButton,
            mobileMenu: !!mobileMenu
        });
    }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
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
}

// Navbar scroll effect
function initNavbarScrollEffect() {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('nav');
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white/95', 'backdrop-blur-sm');
        } else {
            navbar.classList.remove('bg-white/95', 'backdrop-blur-sm');
        }
    });
}

// Function to generate experience details HTML
function generateExperienceDetails(companyKey) {
    const experience = experienceData[companyKey];
    if (!experience) return '';
    
    const responsibilitiesHTML = experience.responsibilities.map(responsibility => 
        `<li class="flex items-start">
            <svg class="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-gray-700">${responsibility}</span>
        </li>`
    ).join('');
    
    return `
        <h3 class="text-2xl font-bold text-gray-900 mb-2">${experience.title} <span class="text-purple-600">@ ${experience.company}</span></h3>
        <p class="text-gray-500 mb-6">${experience.period}</p>
        <ul class="space-y-3">
            ${responsibilitiesHTML}
        </ul>
    `;
}

// Function to generate mobile experience details HTML
function generateMobileExperienceDetails(companyKey) {
    const experience = experienceData[companyKey];
    if (!experience) return '';
    
    const responsibilitiesHTML = experience.responsibilities.map(responsibility => 
        `<li class="flex items-start">
            <svg class="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-sm text-gray-700">${responsibility}</span>
        </li>`
    ).join('');
    
    return `
        <h3 class="text-xl font-bold text-gray-900 mb-2">${experience.title} <span class="text-purple-600">@ ${experience.company}</span></h3>
        <p class="text-gray-500 mb-4">${experience.period}</p>
        <ul class="space-y-2">
            ${responsibilitiesHTML}
        </ul>
    `;
}

// Function to load experience data dynamically
function loadExperienceData() {
    // Load desktop experience details
    Object.keys(experienceData).forEach(companyKey => {
        const desktopContainer = document.getElementById(`${companyKey}-details`);
        const mobileContainer = document.getElementById(`${companyKey}-details-mobile`);
        
        if (desktopContainer) {
            desktopContainer.innerHTML = generateExperienceDetails(companyKey);
        }
        
        if (mobileContainer) {
            mobileContainer.innerHTML = generateMobileExperienceDetails(companyKey);
        }
    });
}

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
<div class="grid grid-cols-1 md:grid-cols-2 gap-0 place-items-center">
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
                                    <a href="${this.pages.contact}" class="btn-mimas text-center">
                                        Get In Touch
                                    </a>
                                    <a href="${this.pages.projects}" class="btn-mimas btn-mimas--white text-center">
                                        Browse Projects
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Right Side -->
                        <div class="space-y-4 w-full py-10 pb-0">
                            <!-- Social Media Icons -->
                            <div class="flex justify-end">
                                <div class="flex space-x-3 items-center">
                                    <!-- LinkedIn -->
         <a href="https://www.linkedin.com/in/hassan-rashid-61136823b/" 
   target="_blank" 
   rel="noopener noreferrer" 
   class="text-gray-700 hover:text-purple-600 transition-colors" 
   aria-label="LinkedIn">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="h-8 w-8" fill="currentColor">
        <path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z"/>
    </svg>
</a>


                                    
                                    <!-- Instagram -->
                               <a href="https://instagram.com/yourprofile" 
   target="_blank" 
   rel="noopener noreferrer" 
   class="text-gray-700 hover:text-purple-600 transition-colors" 
   aria-label="Instagram">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-7 w-7" fill="currentColor">
        <path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
    </svg>
</a>

                                    
                                    <!-- GitHub -->
                                    <a href="https://github.com/HassanRashid15" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-purple-600 transition-colors" aria-label="GitHub">
                                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                    
                                    <!-- X (Twitter) -->
                              <a href="https://x.com/yourusername" 
   target="_blank" 
   rel="noopener noreferrer" 
   class="text-gray-700 hover:text-purple-600 transition-colors" 
   aria-label="X (Twitter)">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="h-8 w-8" fill="currentColor">
        <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"/>
    </svg>
</a>

                                </div>
                            </div>
                            
                            <!-- Copyright -->
                            <div class="text-right">
                                <p class="text-gray-600 font-medium mb-2">&copy; ${new Date().getFullYear()} All Rights Reserved. Made by HRTECH.</p>
                               
                                   
                          
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        `;
        return footerHTML;
    }

    getLinkClass(page) {
        // Special case: highlight Projects link when on project-detail page
        if (page === 'projects' && this.currentPage === 'project-detail') {
            return 'text-purple-600 font-bold';
        }
        
        return this.currentPage === page 
            ? 'text-purple-600 font-bold' 
            : 'text-gray-700 link transition-colors font-bold';
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
    
    // Initialize mobile menu functionality after navbar is mounted
    setTimeout(() => {
        initMobileMenu();
        initSmoothScrolling();
        initNavbarScrollEffect();
        // Initialize animated mobile menu for all pages
        initAnimatedMobileMenu();
    }, 100);
    
    // Also initialize mobile menu when page becomes visible (for navigation)
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            setTimeout(() => {
                initAnimatedMobileMenu();
            }, 100);
        }
    });
    
    // Backup initialization on window load
    window.addEventListener('load', function() {
        setTimeout(() => {
            initAnimatedMobileMenu();
        }, 200);
    });
    
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
    
    // Initialize grid layout functionality
    setTimeout(() => {
        initGridLayout();
        addRippleAnimation();
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
    
    // Use centralized project data
    const project = projectData[projectId];
    if (!project) return;
    
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

// GSAP Animated Mobile Menu - Exact CodePen Implementation
function initAnimatedMobileMenu(retryCount = 0) {
    const maxRetries = 5;
    
    // Wait a bit more to ensure navbar is fully rendered
    setTimeout(() => {
        // Try multiple selectors for the open button
        let open = document.querySelector('.container');
        if (!open) {
            open = document.getElementById('mobile-menu-button');
        }
        
        const close = document.querySelector('.close');
        const mobileNav = document.getElementById('mobile-nav');
        
        console.log('Mobile menu elements found:', { 
            open: !!open, 
            close: !!close, 
            mobileNav: !!mobileNav,
            openElement: open,
            closeElement: close,
            mobileNavElement: mobileNav,
            navbarMounted: !!document.querySelector('nav')
        });
        
        if (!open || !close || !mobileNav) {
            if (retryCount < maxRetries) {
                console.log(`Mobile menu elements not found, retrying... (${retryCount + 1}/${maxRetries})`);
                // Check if navbar container exists
                const navbarContainer = document.getElementById('navbar-container');
                if (!navbarContainer) {
                    console.log('Navbar container not found, navbar may not be mounted yet');
                }
                // Retry after a longer delay
                setTimeout(() => {
                    initAnimatedMobileMenu(retryCount + 1);
                }, 500);
                return;
            } else {
                console.error('Mobile menu initialization failed after maximum retries');
                return;
            }
        }
        
        // Check if GSAP is available
        if (typeof gsap === 'undefined') {
            if (retryCount < maxRetries) {
                console.log('GSAP not loaded, retrying...');
                // Retry after GSAP loads
                setTimeout(() => {
                    initAnimatedMobileMenu(retryCount + 1);
                }, 500);
                return;
            } else {
                console.error('GSAP not loaded after maximum retries');
                return;
            }
        }
        
        // Set initial states
        gsap.set('#mobile-nav ul li a', { opacity: 0, pointerEvents: 'none' });
        gsap.set('#mobile-nav .close', { opacity: 0, pointerEvents: 'none' });
        gsap.set('#mobile-nav a img', { opacity: 0 });
        
        var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
        
        open.addEventListener('click', () => {
            console.log('Mobile menu open clicked');
            if (tl.reversed()) {
                tl.play();
            } else {
                tl.to('#mobile-nav', { right: 0 })
                    .to('#mobile-nav', { height: '100vh' }, '-=.1')
                    .to('#mobile-nav a img', { opacity: 1, pointerEvents: 'all' }, '-=.8')
                    .to('#mobile-nav .close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
                    .to('#mobile-nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.6');
            }
        });

        close.addEventListener('click', () => {
            console.log('Mobile menu close clicked');
            tl.reverse();
        });
        
        console.log('Mobile menu initialized successfully with elements:', {
            open: open.id || open.className,
            close: close.className,
            mobileNav: mobileNav.id
        });
    }, 200);
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

// Function to load random projects for home page with grid layout
function loadHomeProjects() {
    // Check if projectData is available
    if (typeof projectData === 'undefined') {
        setTimeout(loadHomeProjects, 100);
        return;
    }

    const container = document.getElementById('home-projects-container');
    if (!container) return;

    // Get all project IDs and shuffle them
    const projectIds = Object.keys(projectData);
    console.log('Available project IDs:', projectIds);
    const shuffledProjects = projectIds.sort(() => Math.random() - 0.5);
    console.log('Shuffled projects:', shuffledProjects);
    
    // Take first 4 projects for home page, ensure we have exactly 4
    const selectedProjects = shuffledProjects.slice(0, 4);
    console.log('Selected projects for grid:', selectedProjects);
    
    // Ensure we have exactly 4 projects
    if (selectedProjects.length < 4) {
        console.warn('Not enough projects available, using available projects');
        // Fill with available projects if we have less than 4
        while (selectedProjects.length < 4 && selectedProjects.length < projectIds.length) {
            const remainingProjects = projectIds.filter(id => !selectedProjects.includes(id));
            if (remainingProjects.length > 0) {
                selectedProjects.push(remainingProjects[0]);
            } else {
                break;
            }
        }
    }
    
    // Create the new grid layout with your specified spans
    const gridLayout = [
        { 
            project: selectedProjects[0], 
            classes: 'col-span-2 row-span-3',
            gradient: 'from-purple-500 to-blue-600'
        },
        { 
            project: selectedProjects[1], 
            classes: 'col-span-3 row-span-3 col-start-3',
            gradient: 'from-green-500 to-teal-600'
        },
        { 
            project: selectedProjects[2], 
            classes: 'col-span-2 row-span-2 row-start-4',
            gradient: 'from-orange-500 to-red-600'
        },
        { 
            project: selectedProjects[3], 
            classes: 'col-span-3 row-span-2 col-start-3 row-start-4',
            gradient: 'from-indigo-500 to-purple-600'
        }
    ];

    let projectsHTML = '';
    
    gridLayout.forEach((item, index) => {
        console.log(`Processing grid item ${index + 1}:`, item);
        const project = projectData[item.project];
        if (!project) {
            console.log(`Project not found for ${item.project}`);
            return;
        }
        console.log(`Project found:`, project.title);
        
        const techTags = generateTechTags(project);
        
        projectsHTML += `
            <div class="${item.classes} bg-gradient-to-br ${item.gradient} rounded-xl p-6 flex flex-col justify-between text-white hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group relative overflow-hidden" data-project="${item.project}">
                <!-- Project Image -->
                <div class="absolute inset-0 rounded-xl overflow-hidden">
                    ${project.image ? `
                        <img src="${project.image}" 
                             alt="${project.title}" 
                             class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                             loading="lazy">
                        <div class="absolute inset-0 bg-gradient-to-br ${item.gradient} bg-opacity-80"></div>
                    ` : `
                        <div class="w-full h-full bg-gradient-to-br ${item.gradient}"></div>
                    `}
                </div>
                
                <!-- Content -->
                <div class="relative z-10 flex flex-col justify-between h-full">
                    <div>
                        <h3 class="text-2xl font-bold mb-2">${project.title}</h3>
                        <p class="text-white text-opacity-90 text-sm line-clamp-2">${project.description}</p>
                    </div>
                    <div class="flex space-x-2 flex-wrap mt-4">
                        ${techTags.map(tag => `<span class="px-3 py-1 bg-white bg-opacity-20 rounded-full text-xs">${tag.name}</span>`).join('')}
                    </div>
                </div>
                
                <!-- Hover overlay -->
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-xl transition-all duration-300"></div>
            </div>
        `;
    });

    console.log('Final projects HTML length:', projectsHTML.length);
    console.log('Number of grid items generated:', (projectsHTML.match(/class="[^"]*col-span/g) || []).length);

    container.innerHTML = projectsHTML;
    
    // Debug: Log the generated HTML and container info
    console.log('Grid container:', container);
    console.log('Generated projects HTML:', projectsHTML);
    console.log('Container classes:', container.className);
    console.log('Container computed style:', window.getComputedStyle(container).display);
    console.log('Grid template columns:', window.getComputedStyle(container).gridTemplateColumns);
    console.log('Grid template rows:', window.getComputedStyle(container).gridTemplateRows);
    
    // Force grid layout and clear any cached styles
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(5, 1fr)';
    container.style.gridTemplateRows = 'repeat(5, 1fr)';
    container.style.gap = '1rem';
    container.style.height = '600px';
    
    // Force reflow to ensure styles are applied
    container.offsetHeight;
    
    // Log the final computed styles
    console.log('Final computed styles:');
    console.log('Display:', window.getComputedStyle(container).display);
    console.log('Grid columns:', window.getComputedStyle(container).gridTemplateColumns);
    console.log('Grid rows:', window.getComputedStyle(container).gridTemplateRows);
    
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
        <div class="${size} h-full">
            <div class="card hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full flex flex-col" data-project="${projectId}">
                <div class=" bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg mb-4 overflow-hidden relative group flex-shrink-0">
                    ${project.image ? `
                        <img src="${project.image}" 
                             alt="${project.title}" 
                             class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                             loading="lazy">
                        <div class="absolute inset-0 bg-black bg-opacity-30"></div>
                    ` : ''}
                </div>
                <div class="flex items-center justify-between mb-2 flex-shrink-0">
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
                        <h3 class="text-xl font-semibold text-gray-900">${project.title}</h3>
                    </div>
                    <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>
                </div>
                <p class="text-gray-600 mb-4 line-clamp-2 flex-grow">${project.description}</p>
                <div class="flex space-x-2 flex-shrink-0">
                    ${techTags.map(tag => `<span class="px-3 py-1 ${tag.bg} ${tag.text} text-sm rounded-full">${tag.name}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

// Function to generate technology tags based on project
function generateTechTags(project) {
    const techMap = {
        'Devstitch': [
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
        card.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
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
    // Load experience data for both desktop and mobile views
    loadExperienceData();
    
    initMobileTabs();
    
    // Load home projects if we're on the home page
    if (document.body.getAttribute('data-page') === 'home') {
        // Load immediately and also with a small delay as backup
        loadHomeProjects();
        setTimeout(() => {
            loadHomeProjects();
        }, 50);
    } else {
        // Load project images for other pages (legacy)
        setTimeout(() => {
            loadProjectImages();
        }, 100);
    }
});

// Also load projects when the page becomes visible (for navigation from other pages)
document.addEventListener('visibilitychange', function() {
    if (!document.hidden && document.body.getAttribute('data-page') === 'home') {
        setTimeout(() => {
            loadHomeProjects();
        }, 100);
    }
});

// Grid Layout Functionality for Projects
function initGridLayout() {
    const gridBoxes = document.querySelectorAll('#home-projects-container > div');
    
    gridBoxes.forEach((box, index) => {
        // Add click functionality
        box.addEventListener('click', function() {
            // Add a ripple effect
            const ripple = document.createElement('div');
            ripple.className = 'ripple-effect';
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
                top: 50%;
                left: 50%;
                width: 100px;
                height: 100px;
                margin-left: -50px;
                margin-top: -50px;
            `;
            
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 600);
            
            // Get project ID from data attribute
            const projectId = this.getAttribute('data-project');
            if (projectId) {
                console.log(`Clicked on project: ${projectId}`);
                // You can add navigation or modal opening here
                // For example: showProjectModal(projectId);
            }
        });
        
        // Add hover sound effect (optional)
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-2px)';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });
}

// Add ripple animation CSS
function addRippleAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        #home-projects-container > div {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
}


