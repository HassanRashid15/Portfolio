// Stack Data for About Page
const stackData = {
    marquee1: [
        { text: "Responsive Design", icon: "star" },
        { text: "HTML5/CSS3 Mastery", icon: "star" },
        { text: "JavaScript", icon: "star" },
        { text: "React Development", icon: "star" },
        { text: "Tailwind CSS", icon: "star" },
        // { text: "Node.js Backend", icon: "star" },
        { text: "TypeScript", icon: "star" }
    ],
    marquee2: [
        // { text: "Database Design", icon: "star" },
        { text: "API Integration", icon: "star" },
        { text: "Bootstrap", icon: "star" },
        { text: "Version Control", icon: "star" },
        { text: "AI-powered Tools", icon: "star" },
        { text: "Cloud Deployment", icon: "star" },
        { text: "Performance Optimization", icon: "star" },
        
        // { text: "Docker & Kubernetes", icon: "star" }
    ],
    marquee3: [
        { text: "Testing & QA", icon: "star" },
        { text: "Agile Methodology", icon: "star" },
        { text: "Code Review", icon: "star" },
        { text: "Performance Optimization", icon: "star" },
        { text: "Collaborative Team Player", icon: "star" },
        { text: "Attention to Detail", icon: "star" },
        { text: "Effective Communication", icon: "star" },
        { text: "Commitment", icon: "star" },
    ]
};

// Legacy Experience Data (keeping for other pages)
const experienceData = {
    apple: {
        title: "Senior iOS Developerss",
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
            return 'text-primary font-bold';
        }
        
        return this.currentPage === page 
            ? 'text-primary font-bold' 
            : 'text-gray-700 link transition-colors font-bold';
    }

    render() {
        const navbarHTML = `
            <nav class="bg-white shadow-sm fixed w-full top-0 z-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style="padding-left: 0px;">
                    <div class="flex justify-between items-center h-16">
                        <!-- Logo -->
                        <div class="flex-shrink-0">
                            <a href="${this.pages.home}" class="flex items-center">
                                <img src="Assets/Navlogo.png" 
                                     alt="Logo" 
                                     class="h-[60px] w-auto"
                                     onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='block';">
                                <span class="text-2xl font-bold text-primary" style="display: none;">Logo</span>
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
                            <a href="${this.pages.contact}" class="${this.currentPage === 'contact' ? 'text-primary' : 'text-gray-700 hover:text-primary'} transition-colors">
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </a>
                        </div>

                        <!-- Mobile menu button with chat icon -->
                        <div class="md:hidden flex items-center space-x-4">
                            <a href="${this.pages.contact}" class="${this.currentPage === 'contact' ? 'text-primary' : 'text-gray-700 hover:text-primary'} transition-colors">
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
                    <div class="menu-title">
                        <h2 class="text-white text-2xl font-bold tracking-wider">MENU</h2>
                    </div>
                    <div class="close">
                        <div></div>
                    </div>
                    <ul>
                        <li><a href="${this.pages.home}" class="${this.currentPage === 'home' ? 'text-primary' : 'text-white'} link hover:text-primary transition-colors">Home</a></li>
                        <li><a href="${this.pages.about}" class="${this.currentPage === 'about' ? 'text-primary' : 'text-white'} link hover:text-primary transition-colors">About</a></li>
                        <li><a href="${this.pages.projects}" class="${this.currentPage === 'projects' ? 'text-primary' : 'text-white'} link hover:text-primary transition-colors">Projects</a></li>
                        <li><a href="${this.pages.contact}" class="${this.currentPage === 'contact' ? 'text-primary' : 'text-white'} link hover:text-primary transition-colors">Contact</a></li>
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
            
            // Initialize mobile menu after navbar is mounted
            setTimeout(() => {
                initAnimatedMobileMenu();
            }, 100);
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
            <svg class="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-gray-700">${responsibility}</span>
        </li>`
    ).join('');
    
    return `
        <h3 class="text-2xl font-bold text-gray-900 mb-2">${experience.title} <span class="text-primary">@ ${experience.company}</span></h3>
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
            <svg class="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-sm text-gray-700">${responsibility}</span>
        </li>`
    ).join('');
    
    return `
        <h3 class="text-xl font-bold text-gray-900 mb-2">${experience.title} <span class="text-primary">@ ${experience.company}</span></h3>
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
    console.log('🚀 Initializing desktop experience tabs...');
    console.log('Screen width:', window.innerWidth);
    
    const experienceItems = document.querySelectorAll('.experience-item');
    const experienceDetails = document.querySelectorAll('.experience-details');
    const activeLine = document.getElementById('active-line');
    
    console.log('Desktop experience items found:', experienceItems.length);
    console.log('Desktop experience details found:', experienceDetails.length);
    console.log('Active line element found:', !!activeLine);
    
    if (!experienceItems.length || !experienceDetails.length || !activeLine) {
        console.log('❌ Missing required elements for desktop experience tabs');
        return;
    }
    
    // Debug initial state
    experienceItems.forEach((item, index) => {
        const company = item.getAttribute('data-company');
        console.log(`Desktop experience item ${index + 1} (${company}):`, {
            hasActive: item.classList.contains('active'),
            classes: item.className,
            computedColor: window.getComputedStyle(item.querySelector('span')).color
        });
    });
    
    // Set initial active state
    const activeItem = document.querySelector('.experience-item.active');
    if (activeItem) {
        console.log('Initial active desktop item:', activeItem.getAttribute('data-company'));
        updateActiveLine(activeItem);
    }
    
    experienceItems.forEach((item, index) => {
        // Add click event listener
        item.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const company = item.getAttribute('data-company');
            console.log('🖱️ Desktop experience item clicked:', company);
            console.log('Before change - active items:', Array.from(experienceItems).map(i => ({
                company: i.getAttribute('data-company'),
                hasActive: i.classList.contains('active')
            })));
            
            // Remove active class from all items
            experienceItems.forEach(i => {
                i.classList.remove('active');
                const text = i.querySelector('span');
                if (text) {
                    text.classList.remove('text-primary', 'font-medium');
                    text.classList.add('text-gray-600');
                }
            });
            
            // Add active class to clicked item
            item.classList.add('active');
            console.log(`✅ Added active to ${company} desktop item`);
            console.log(`${company} item classes:`, item.className);
            
            const text = item.querySelector('span');
            if (text) {
                text.classList.remove('text-gray-600');
                text.classList.add('text-primary', 'font-medium');
                console.log(`${company} text computed styles:`, {
                    color: window.getComputedStyle(text).color,
                    fontWeight: window.getComputedStyle(text).fontWeight
                });
            }
            
            // Hide all experience details
            experienceDetails.forEach(detail => {
                detail.classList.add('hidden');
            });
            
            // Show selected experience details
            const selectedDetails = document.getElementById(`${company}-details`);
            if (selectedDetails) {
                selectedDetails.classList.remove('hidden');
                console.log(`✅ Showed ${company} details`);
            } else {
                console.log(`❌ Could not find ${company}-details element`);
            }
            
            // Update active line
            updateActiveLine(item);
            
            // Debug final state
            setTimeout(() => {
                console.log('🔍 Final desktop experience state:');
                experienceItems.forEach(i => {
                    const companyName = i.getAttribute('data-company');
                    console.log(`${companyName} item:`, {
                        hasActive: i.classList.contains('active'),
                        classes: i.className,
                        computedColor: window.getComputedStyle(i.querySelector('span')).color
                    });
                });
            }, 100);
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
            <footer class="bg-white py-10 pb-2">
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
                                <h3 class="text-5xl md:text-3xl font-bold text-gray-900 mb-4">Interested in work<span class="m-0" style="margin: 0px; color: var(--primary-color);">ing together?</span></h3>
                                <div class="flex flex-col sm:flex-row gap-3">
                                 <a href="${this.pages.contact}" 
   class="bg-primary text-white border border-transparent hover:bg-transparent hover:text-white hover:border-primary font-semibold py-3 px-12 rounded-full transition-colors text-center">
    <span>Get In Touch</span>
</a>

                                    <a href="${this.pages.projects}" class="border border-gray-300 text-gray-700 hover:border-primary hover:text-slate-900 font-semibold py-3 px-12 rounded-full transition-colors text-center ">
                                        <span>Browse Projects</span>
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
   class="text-gray-700 hover:text-primary transition-colors" 
   aria-label="LinkedIn">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="h-8 w-8" fill="currentColor">
        <path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z"/>
    </svg>
</a>


                                    
                                    <!-- Instagram -->
                               <a href="https://instagram.com/yourprofile" 
   target="_blank" 
   rel="noopener noreferrer" 
   class="text-gray-700 hover:text-primary transition-colors" 
   aria-label="Instagram">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-7 w-7" fill="currentColor">
        <path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
    </svg>
</a>

                                    
                                    <!-- GitHub -->
                                    <a href="https://github.com/HassanRashid15" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-primary transition-colors" aria-label="GitHub">
                                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                    
                                    <!-- X (Twitter) -->
                              <a href="https://x.com/yourusername" 
   target="_blank" 
   rel="noopener noreferrer" 
   class="text-gray-700 hover:text-primary transition-colors" 
   aria-label="X (Twitter)">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="h-8 w-8" fill="currentColor">
        <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"/>
    </svg>
</a>

                                </div>
                            </div>
                            
                            <!-- Copyright -->
                            <div class="text-right">
                                <p class="text-gray-600 font-medium mb-0">&copy; ${new Date().getFullYear()} All Rights Reserved.Made by <span class="text-primary font-bold"> HRTECH.</span></p>
                               
                                   
                          
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
            return 'text-primary font-bold';
        }
        
        return this.currentPage === page 
            ? 'text-primary font-bold' 
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
    
    // Initialize mobile menu on page focus (for navigation between tabs)
    window.addEventListener('focus', function() {
        setTimeout(() => {
            initAnimatedMobileMenu();
        }, 100);
    });
    
    // Initialize mobile menu when navigating back/forward
    window.addEventListener('pageshow', function() {
        setTimeout(() => {
            initAnimatedMobileMenu();
        }, 100);
    });
    
    // Initialize footer
    const footer = new FooterComponent(currentPage);
    footer.mount('footer-container');
    
    // Initialize progress line animation and store the update function
    window.updateProgressLine = initProgressLineAnimation();
    
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
    // Commented out - using chatbot WhatsApp integration instead
    // setTimeout(() => {
    //     initWhatsAppButton();
    // }, 2000); // Show after 2 seconds
    
    // Initialize Chatbot
    setTimeout(() => {
        initChatbot();
    }, 2500); // Show after 2.5 seconds
    
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
    
    if (!experienceSection || !progressLine) return;
    
    let ticking = false;
    
    function updateProgressLine() {
        // Re-query experience items to get updated content
        const experienceItems = document.querySelectorAll('.experience-item');
        
        if (experienceItems.length === 0) return;
        
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
        
        // Debug logging
        console.log('Progress Line Update (Original Logic):', {
            scrolled,
            contentStart,
            contentEnd,
            contentHeight,
            progress: (progress * 100).toFixed(1) + '%',
            currentHeight: currentHeight.toFixed(0) + 'px',
            firstItemTop,
            lastItemBottom
        });
        
        ticking = false;
    }
    
    // Throttled scroll event for better performance
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateProgressLine);
            ticking = true;
        }
    });
    
    // Also update on window resize to handle dynamic content changes
    window.addEventListener('resize', () => {
        if (!ticking) {
            requestAnimationFrame(updateProgressLine);
            ticking = true;
        }
    });
    
    // Use MutationObserver to detect when content changes dynamically
    const observer = new MutationObserver(() => {
        if (!ticking) {
            requestAnimationFrame(updateProgressLine);
            ticking = true;
        }
    });
    
    // Observe the experience section for changes
    observer.observe(experienceSection, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'style']
    });
    
    // Initial call with a small delay to ensure DOM is ready
    setTimeout(() => {
    updateProgressLine();
    }, 100);
    
    // Also call on load to ensure it works
    window.addEventListener('load', () => {
        setTimeout(updateProgressLine, 200);
    });
    
    // Return the update function so it can be called manually if needed
    return updateProgressLine;
}

// Utility function to manually refresh the progress line
function refreshProgressLine() {
    if (window.updateProgressLine) {
        window.updateProgressLine();
    }
}

// Make it globally available
window.refreshProgressLine = refreshProgressLine;

// Debug function to test progress line
function debugProgressLine() {
    const progressLine = document.getElementById('progress-line');
    const experienceItems = document.querySelectorAll('.experience-item');
    
    if (!progressLine) {
        console.log('❌ Progress line element not found');
        return;
    }
    
    if (experienceItems.length === 0) {
        console.log('❌ No experience items found');
        return;
    }
    
    const firstItem = experienceItems[0];
    const lastItem = experienceItems[experienceItems.length - 1];
    
    const firstItemRect = firstItem.getBoundingClientRect();
    const lastItemRect = lastItem.getBoundingClientRect();
    
    const scrolled = window.pageYOffset;
    const firstItemTop = firstItemRect.top + scrolled;
    const lastItemBottom = lastItemRect.bottom + scrolled;
    const contentHeight = lastItemBottom - firstItemTop;
    
    console.log('🔍 Progress Line Debug Info:');
    console.log('- Experience items count:', experienceItems.length);
    console.log('- First item top:', firstItemTop);
    console.log('- Last item bottom:', lastItemBottom);
    console.log('- Content height:', contentHeight);
    console.log('- Current scroll:', scrolled);
    console.log('- Progress line height:', progressLine.style.height);
    console.log('- Progress line computed height:', window.getComputedStyle(progressLine).height);
    
    // Force refresh
    refreshProgressLine();
    console.log('- After refresh height:', progressLine.style.height);
}

// Make debug function globally available
window.debugProgressLine = debugProgressLine;

// Function to force progress line to full height (for testing)
function forceProgressLineFull() {
    const progressLine = document.getElementById('progress-line');
    const experienceItems = document.querySelectorAll('.experience-item');
    
    if (!progressLine || experienceItems.length === 0) return;
    
    const firstItem = experienceItems[0];
    const lastItem = experienceItems[experienceItems.length - 1];
    
    const firstItemRect = firstItem.getBoundingClientRect();
    const lastItemRect = lastItem.getBoundingClientRect();
    
    const scrolled = window.pageYOffset;
    const firstItemTop = firstItemRect.top + scrolled;
    const lastItemBottom = lastItemRect.bottom + scrolled;
    const totalHeight = lastItemBottom - firstItemTop;
    
    progressLine.style.height = `${totalHeight}px`;
    console.log('Forced progress line to full height:', totalHeight + 'px');
}

// Make it globally available
window.forceProgressLineFull = forceProgressLineFull;

// Quick fix function to immediately set progress line to full height
function fixProgressLineNow() {
    const progressLine = document.getElementById('progress-line');
    const experienceItems = document.querySelectorAll('.experience-item');
    
    if (!progressLine || experienceItems.length === 0) {
        console.log('❌ Progress line or experience items not found');
        return;
    }
    
    const firstItem = experienceItems[0];
    const lastItem = experienceItems[experienceItems.length - 1];
    
    const firstItemRect = firstItem.getBoundingClientRect();
    const lastItemRect = lastItem.getBoundingClientRect();
    
    const scrolled = window.pageYOffset;
    const firstItemTop = firstItemRect.top + scrolled;
    const lastItemBottom = lastItemRect.bottom + scrolled;
    const totalHeight = lastItemBottom - firstItemTop;
    
    // Set the progress line to full height immediately
    progressLine.style.height = `${totalHeight}px`;
    progressLine.style.transition = 'none'; // Remove transition for immediate effect
    
    console.log('✅ Progress line fixed to full height:', totalHeight + 'px');
    
    // Restore transition after a brief moment
    setTimeout(() => {
        progressLine.style.transition = 'height 0.3s ease-out';
    }, 100);
}

// Make it globally available
window.fixProgressLineNow = fixProgressLineNow;

// Function to set progress line to 100% immediately
function setProgressLineTo100() {
    const progressLine = document.getElementById('progress-line');
    const experienceItems = document.querySelectorAll('.experience-item');
    
    if (!progressLine || experienceItems.length === 0) {
        console.log('❌ Progress line or experience items not found');
        return;
    }
    
    const firstItem = experienceItems[0];
    const lastItem = experienceItems[experienceItems.length - 1];
    
    const firstItemRect = firstItem.getBoundingClientRect();
    const lastItemRect = lastItem.getBoundingClientRect();
    
    const scrolled = window.pageYOffset;
    const firstItemTop = firstItemRect.top + scrolled;
    const lastItemBottom = lastItemRect.bottom + scrolled;
    const totalHeight = lastItemBottom - firstItemTop;
    
    // Set to 100% height
    progressLine.style.height = `${totalHeight}px`;
    
    console.log('✅ Progress line set to 100%:', totalHeight + 'px');
}

// Make it globally available
window.setProgressLineTo100 = setProgressLineTo100;

// Function to set progress line to 50% (middle point)
function setProgressLineTo50() {
    const progressLine = document.getElementById('progress-line');
    const experienceItems = document.querySelectorAll('.experience-item');
    
    if (!progressLine || experienceItems.length === 0) {
        console.log('❌ Progress line or experience items not found');
        return;
    }
    
    const firstItem = experienceItems[0];
    const lastItem = experienceItems[experienceItems.length - 1];
    
    const firstItemRect = firstItem.getBoundingClientRect();
    const lastItemRect = lastItem.getBoundingClientRect();
    
    const scrolled = window.pageYOffset;
    const firstItemTop = firstItemRect.top + scrolled;
    const lastItemBottom = lastItemRect.bottom + scrolled;
    const totalHeight = lastItemBottom - firstItemTop;
    
    // Set to 50% height
    progressLine.style.height = `${totalHeight * 0.5}px`;
    
    console.log('✅ Progress line set to 50%:', (totalHeight * 0.5) + 'px');
}

// Make it globally available
window.setProgressLineTo50 = setProgressLineTo50;

// Simple test function to manually set progress line height
function testProgressLine(percentage) {
    const progressLine = document.getElementById('progress-line');
    const experienceItems = document.querySelectorAll('.experience-item');
    
    if (!progressLine || experienceItems.length === 0) {
        console.log('❌ Progress line or experience items not found');
        return;
    }
    
    const firstItem = experienceItems[0];
    const lastItem = experienceItems[experienceItems.length - 1];
    
    const firstItemRect = firstItem.getBoundingClientRect();
    const lastItemRect = lastItem.getBoundingClientRect();
    
    const scrolled = window.pageYOffset;
    const firstItemTop = firstItemRect.top + scrolled;
    const lastItemBottom = lastItemRect.bottom + scrolled;
    const totalHeight = lastItemBottom - firstItemTop;
    
    const targetHeight = totalHeight * (percentage / 100);
    progressLine.style.height = `${targetHeight}px`;
    
    console.log(`✅ Progress line set to ${percentage}%:`, targetHeight + 'px');
}

// Make it globally available
window.testProgressLine = testProgressLine;

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
                dot.classList.add('bg-primary');
            } else {
                dot.classList.remove('bg-primary');
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
    
    
    // Update screenshot with actual project image and mockup from projects.js
    const screenshot = document.getElementById('modal-screenshot');
    if (screenshot && typeof projectData !== 'undefined' && projectData[projectId]) {
        const projectDataItem = projectData[projectId];
        screenshot.innerHTML = `
            <div class="relative h-full rounded-xl overflow-hidden">
                ${projectDataItem.image ? `
                    <img src="${projectDataItem.image}" 
                         alt="${projectDataItem.title}" 
                         class="w-full h-full object-contain"
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

// Rotating placeholder text for chatbot input
let placeholderTimeout = null;
let placeholderState = {
    currentText: '',
    isDeleting: false,
    placeholderIndex: 0,
    animationRunning: false
};

const placeholders = [
    'Type your message...',
    'Ask about services we offered...',
    'Ask about portfolio...',
    'Ask about availability...',
    'Ask about contact...',
    'How can I help you?',
    'What would you like to know?'
];

function startRotatingPlaceholder() {
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotWindow = document.getElementById('chatbot-window');
    
    if (!chatbotInput || !chatbotWindow) return;
    
    // Stop any existing animation
    stopRotatingPlaceholder();
    
    // Reset state
    placeholderState.currentText = '';
    placeholderState.isDeleting = false;
    placeholderState.placeholderIndex = 0;
    placeholderState.animationRunning = false;
    
    function typePlaceholder() {
        if (!chatbotInput || !chatbotWindow) return;
        
        // Stop if chatbot window is closed
        if (!chatbotWindow.classList.contains('active')) {
            placeholderState.animationRunning = false;
            return;
        }
        
        // Stop animation if input is focused or has value
        if (document.activeElement === chatbotInput || chatbotInput.value) {
            placeholderState.animationRunning = false;
            return;
        }
        
        placeholderState.animationRunning = true;
        const fullText = placeholders[placeholderState.placeholderIndex];
        
        if (placeholderState.isDeleting) {
            placeholderState.currentText = fullText.substring(0, placeholderState.currentText.length - 1);
        } else {
            placeholderState.currentText = fullText.substring(0, placeholderState.currentText.length + 1);
        }
        
        chatbotInput.placeholder = placeholderState.currentText + '|';
        
        if (!placeholderState.isDeleting && placeholderState.currentText === fullText) {
            // Pause at end of typing
            placeholderTimeout = setTimeout(() => {
                if (placeholderState.animationRunning && !chatbotInput.value && document.activeElement !== chatbotInput && chatbotWindow.classList.contains('active')) {
                    placeholderState.isDeleting = true;
                    typePlaceholder();
                }
            }, 2000);
        } else if (placeholderState.isDeleting && placeholderState.currentText === '') {
            // Move to next placeholder
            placeholderState.isDeleting = false;
            placeholderState.placeholderIndex = (placeholderState.placeholderIndex + 1) % placeholders.length;
            placeholderTimeout = setTimeout(() => {
                if (placeholderState.animationRunning && !chatbotInput.value && document.activeElement !== chatbotInput && chatbotWindow.classList.contains('active')) {
                    typePlaceholder();
                }
            }, 500);
        } else {
            // Continue typing/deleting
            const speed = placeholderState.isDeleting ? 50 : 100;
            placeholderTimeout = setTimeout(() => {
                if (placeholderState.animationRunning && !chatbotInput.value && document.activeElement !== chatbotInput && chatbotWindow.classList.contains('active')) {
                    typePlaceholder();
                }
            }, speed);
        }
    }
    
    // Start animation when chatbot opens
    placeholderTimeout = setTimeout(() => {
        if (chatbotWindow.classList.contains('active') && !chatbotInput.value && document.activeElement !== chatbotInput) {
            typePlaceholder();
        }
    }, 1000);
}

function stopRotatingPlaceholder() {
    if (placeholderTimeout) {
        clearTimeout(placeholderTimeout);
        placeholderTimeout = null;
    }
    placeholderState.animationRunning = false;
    const chatbotInput = document.getElementById('chatbot-input');
    if (chatbotInput) {
        chatbotInput.placeholder = 'Type your message...';
    }
}

// Chatbot Widget Functionality
function initChatbot() {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotMessages = document.getElementById('chatbot-messages');
    
    if (!chatbotToggle || !chatbotWindow) {
        console.warn('Chatbot elements not found');
        return;
    }
    
    // Tooltip elements
    const chatbotTooltip = document.getElementById('chatbot-tooltip');
    const chatbotTooltipClose = document.getElementById('chatbot-tooltip-close');
    let tooltipShown = false;
    let tooltipTimeout = null;
    
    // Function to show tooltip
    function showTooltip() {
        if (!chatbotTooltip || tooltipShown) return;
        
        // Check if chatbot window is already open
        if (chatbotWindow.classList.contains('active')) {
            return; // Don't show if chatbot is open
        }
        
        tooltipShown = true;
        chatbotTooltip.classList.add('show');
        
        // Auto-hide after 8 seconds
        tooltipTimeout = setTimeout(() => {
            hideTooltip();
        }, 8000);
    }
    
    // Function to hide tooltip
    function hideTooltip() {
        if (!chatbotTooltip) return;
        
        chatbotTooltip.classList.remove('show');
        if (tooltipTimeout) {
            clearTimeout(tooltipTimeout);
            tooltipTimeout = null;
        }
    }
    
    // Show tooltip after delay (3 seconds after page load)
    setTimeout(() => {
        showTooltip();
    }, 3000);
    
    // Close tooltip button
    if (chatbotTooltipClose) {
        chatbotTooltipClose.addEventListener('click', (e) => {
            e.stopPropagation();
            hideTooltip();
        });
    }
    
    // Conversation tracking
    let messageCount = 0;
    let userMessageCount = 0;
    let whatsappPromptShown = false;
    const LONG_CONVERSATION_THRESHOLD = 4; // Show WhatsApp prompt after 4 user messages
    const WHATSAPP_PHONE = "923349878525";
    
    // Keywords that indicate user wants to talk more or discuss further
    const wantToTalkKeywords = [
        "more", "discuss", "talk", "help", "need", "want", "interested", 
        "project", "quote", "price", "cost", "budget", "timeline", 
        "start", "begin", "hire", "work together", "collaborate",
        "details", "explain", "tell me more", "elaborate", "further",
        "how much", "pricing", "payment", "when can", "how long",
        "proposal", "estimate", "scope", "requirements", "specifications"
    ];
    
    // Knowledge base for chatbot responses
    const knowledgeBase = {
        greetings: [
            "Hello! 👋 How can I help you today?",
            "Hi there! What would you like to know?",
            "Hey! I'm here to help. What can I do for you?"
        ],
        services: {
            keywords: ["service", "skill", "technology", "tech", "what can you do", "expertise", "specialize"],
            response: "Hassan specializes in Frontend Development with expertise in:\n\n• React & Next.js\n• JavaScript (ES6+)\n• HTML5 & CSS3\n• UI/UX Design\n• Responsive Web Design\n• Modern Web Applications\n\nWould you like to know more about any specific technology?"
        },
        availability: {
            keywords: ["available", "hire", "freelance", "project", "work", "collaborate", "when"],
            response: "Hassan is available for freelance projects and collaborations! 🚀\n\nHe typically responds within 24-48 hours. For urgent inquiries, you can contact him directly via:\n\n• Email: hassanrashid0018@gmail.com\n• WhatsApp: +92-334-9878525\n\nWould you like to discuss a project?"
        },
        portfolio: {
            keywords: ["project", "portfolio", "work", "example", "showcase", "what have you built"],
            response: "Hassan has worked on various projects including:\n\n• DevStitch - Web Development Agency\n• Jokester - Live Comedy Platform\n• Docmed - Medical Appointment Booking\n• SocialConnect - Professional Networking\n\nCheck out the Projects page to see detailed case studies! Would you like to know more about any specific project?"
        },
        contact: {
            keywords: ["contact", "email", "phone", "reach", "get in touch", "how to contact"],
            response: "You can reach Hassan through:\n\n📧 Email: hassanrashid0018@gmail.com\n📱 Phone: +92-334-9878525\n💬 WhatsApp: Click the green button below!\n\nHe usually responds within 24-48 hours. For faster response, use WhatsApp! 😊"
        },
        default: "I'm not sure I understand. Could you rephrase that? You can ask me about:\n\n• Services & Skills\n• Availability\n• Portfolio Projects\n• Contact Information\n\nOr feel free to contact Hassan directly via WhatsApp for more specific questions!"
    };
    
    // Function to get bot response and response type
    function getBotResponse(userMessage) {
        const message = userMessage.toLowerCase().trim();
        let responseType = 'default';
        let response = '';
        
        // Check for greetings
        if (message.match(/^(hi|hello|hey|greetings|good morning|good afternoon|good evening)/)) {
            response = knowledgeBase.greetings[Math.floor(Math.random() * knowledgeBase.greetings.length)];
            responseType = 'greeting';
        }
        // Check for services
        else if (knowledgeBase.services.keywords.some(keyword => message.includes(keyword))) {
            response = knowledgeBase.services.response;
            responseType = 'services';
        }
        // Check for availability
        else if (knowledgeBase.availability.keywords.some(keyword => message.includes(keyword))) {
            response = knowledgeBase.availability.response;
            responseType = 'availability';
        }
        // Check for portfolio
        else if (knowledgeBase.portfolio.keywords.some(keyword => message.includes(keyword))) {
            response = knowledgeBase.portfolio.response;
            responseType = 'portfolio';
        }
        // Check for contact
        else if (knowledgeBase.contact.keywords.some(keyword => message.includes(keyword))) {
            response = knowledgeBase.contact.response;
            responseType = 'contact';
        }
        // Default response
        else {
            response = knowledgeBase.default;
            responseType = 'default';
        }
        
        return { text: response, type: responseType };
    }
    
    // Function to get action buttons based on response type
    function getActionButtons(responseType) {
        const buttons = [];
        
        switch(responseType) {
            case 'services':
                buttons.push(
                    { text: 'View Projects', action: 'view-projects' },
                    { text: 'Get Quote', action: 'quote' },
                    { text: 'Chat on WhatsApp', action: 'whatsapp', isWhatsApp: true }
                );
                break;
            case 'availability':
                buttons.push(
                    { text: 'Discuss Project', action: 'whatsapp', isWhatsApp: true },
                    { text: 'View Portfolio', action: 'view-projects' },
                    { text: 'Contact Info', action: 'contact' }
                );
                break;
            case 'portfolio':
                buttons.push(
                    { text: 'View All Projects', action: 'view-projects' },
                    { text: 'Discuss Project', action: 'whatsapp', isWhatsApp: true },
                    { text: 'Get Quote', action: 'quote' }
                );
                break;
            case 'contact':
                buttons.push(
                    { text: 'Chat on WhatsApp', action: 'whatsapp', isWhatsApp: true },
                    { text: 'Send Email', action: 'email' },
                    { text: 'View Projects', action: 'view-projects' }
                );
                break;
            case 'email-success':
                buttons.push(
                    { text: 'Chat on WhatsApp', action: 'whatsapp', isWhatsApp: true },
                    { text: 'View Projects', action: 'view-projects' },
                    { text: 'Ask More Questions', action: 'continue-chat' }
                );
                break;
            default:
                buttons.push(
                    { text: 'Services', action: 'services' },
                    { text: 'Portfolio', action: 'portfolio' },
                    { text: 'Chat on WhatsApp', action: 'whatsapp', isWhatsApp: true }
                );
        }
        
        // Add "End Conversation" button to all responses
        buttons.push(
            { text: 'End Conversation', action: 'end-conversation', isEndConversation: true }
        );
        
        return buttons;
    }
    
    // Function to handle action button clicks
    function handleActionButton(action) {
        switch(action) {
            case 'whatsapp':
                window.open(`https://wa.me/${WHATSAPP_PHONE}?text=Hi! I'm interested in discussing a project. Let's talk!`, '_blank');
                break;
            case 'view-projects':
                if (window.location.pathname.includes('projects.html')) {
                    // Already on projects page
                    addMessage('You\'re already on the Projects page! Check out the projects above. 🎨', false);
                } else {
                    window.location.href = 'projects.html';
                }
                break;
            case 'email':
                showEmailModal();
                break;
            case 'quote':
            case 'services':
            case 'portfolio':
            case 'contact':
                // Trigger the corresponding response
                const actionMessages = {
                    'quote': 'I need a quote for a project',
                    'services': 'What services do you offer',
                    'portfolio': 'Show me your portfolio',
                    'contact': 'How can I contact you'
                };
                chatbotInput.value = actionMessages[action];
                sendMessage();
                break;
            case 'end-conversation':
                // End conversation
                endConversation();
                break;
            case 'continue-chat':
                // Just focus on input to continue chatting
                const inputField = document.getElementById('chatbot-input');
                if (inputField) {
                    inputField.focus();
                }
                break;
        }
    }
    
    // Function to end conversation
    function endConversation() {
        const chatbotWindow = document.getElementById('chatbot-window');
        const chatbotMessages = document.getElementById('chatbot-messages');
        
        // Add farewell message
        if (chatbotMessages) {
            const farewellMsg = document.createElement('div');
            farewellMsg.className = 'chatbot-message chatbot-message-bot';
            farewellMsg.innerHTML = `
                <div class="chatbot-message-content">
                    <p>Thank you for chatting! Feel free to reach out anytime. Have a great day! 👋</p>
                </div>
            `;
            chatbotMessages.appendChild(farewellMsg);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
        
        // Close chatbot after a delay
        setTimeout(() => {
            if (chatbotWindow) {
                chatbotWindow.classList.remove('active');
            }
            // Reset conversation tracking
            resetConversationTracking();
        }, 2000);
    }
    
    // Function to add message to chat
    function addMessage(text, isUser = false, responseType = null) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${isUser ? 'chatbot-message-user' : 'chatbot-message-bot'}`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'chatbot-message-content';
        
        // Handle line breaks in text
        const lines = text.split('\n');
        lines.forEach((line, index) => {
            if (line.trim()) {
                const p = document.createElement('p');
                p.textContent = line.trim();
                if (index > 0) {
                    p.style.marginTop = '4px';
                }
                contentDiv.appendChild(p);
            }
        });
        
        // Add action buttons for bot messages
        if (!isUser && responseType) {
            const actionButtons = getActionButtons(responseType);
            if (actionButtons.length > 0) {
                const buttonsContainer = document.createElement('div');
                buttonsContainer.className = 'chatbot-action-buttons';
                
                actionButtons.forEach(btn => {
                    const button = document.createElement('button');
                    let buttonClass = 'chatbot-action-btn';
                    
                    if (btn.isWhatsApp) {
                        buttonClass += ' whatsapp-btn';
                    }
                    if (btn.isEndConversation) {
                        buttonClass += ' end-conversation-btn';
                    }
                    
                    button.className = buttonClass;
                    
                    if (btn.isWhatsApp) {
                        button.innerHTML = `
                            <svg fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                            </svg>
                            ${btn.text}
                        `;
                    } else if (btn.isEndConversation) {
                        button.innerHTML = `
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width: 16px; height: 16px;">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                            ${btn.text}
                        `;
                    } else {
                        button.textContent = btn.text;
                    }
                    
                    button.addEventListener('click', () => {
                        handleActionButton(btn.action);
                    });
                    
                    buttonsContainer.appendChild(button);
                });
                
                contentDiv.appendChild(buttonsContainer);
            }
        }
        
        messageDiv.appendChild(contentDiv);
        chatbotMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        
        return messageDiv;
    }
    
    // Function to detect if user wants to discuss more
    function wantsToTalkMore(message) {
        const lowerMessage = message.toLowerCase();
        return wantToTalkKeywords.some(keyword => lowerMessage.includes(keyword));
    }
    
    // Function to show WhatsApp prompt
    function showWhatsAppPrompt() {
        if (whatsappPromptShown) return; // Don't show multiple times
        
        whatsappPromptShown = true;
        
        // Create WhatsApp prompt message
        const promptMessage = `
Let's continue this conversation on WhatsApp! 💬

I can help you with:
• Detailed project discussions
• Custom quotes and pricing
• Timeline and availability
• Technical requirements

Click below to chat directly with Hassan on WhatsApp - he usually responds within a few hours! ⚡
        `.trim();
        
        // Add prompt message
        setTimeout(() => {
            const promptDiv = addMessage(promptMessage, false);
            
            // Add WhatsApp button inside the message
            setTimeout(() => {
                const whatsappButtonDiv = document.createElement('div');
                whatsappButtonDiv.className = 'chatbot-whatsapp-prompt';
                whatsappButtonDiv.innerHTML = `
                    <a href="https://wa.me/${WHATSAPP_PHONE}?text=Hi! I'm interested in discussing a project. Let's talk!" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="chatbot-whatsapp-button">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        <span>Continue on WhatsApp</span>
                    </a>
                `;
                
                const contentDiv = promptDiv.querySelector('.chatbot-message-content');
                if (contentDiv) {
                    contentDiv.appendChild(whatsappButtonDiv);
                }
                
                // Highlight WhatsApp floating button
                const whatsappFloatBtn = document.getElementById('whatsapp-float-btn');
                if (whatsappFloatBtn) {
                    whatsappFloatBtn.classList.add('show');
                    whatsappFloatBtn.style.animation = 'pulse 1s ease-in-out 5';
                    setTimeout(() => {
                        whatsappFloatBtn.style.animation = '';
                    }, 5000);
                }
            }, 300);
        }, 1000);
    }
    
    // Function to send message
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (!message) return;
        
        // Track conversation
        userMessageCount++;
        messageCount += 2; // User message + bot response
        
        // Add user message
        addMessage(message, true);
        chatbotInput.value = '';
        
        // Check if user wants to talk more (intent detection)
        const wantsToTalk = wantsToTalkMore(message);
        
        // Simulate typing delay
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            addMessage(botResponse.text, false, botResponse.type);
            
            // Show WhatsApp prompt if:
            // 1. User has sent 4+ messages (long conversation)
            // 2. User shows intent to discuss more (keywords detected)
            if ((userMessageCount >= LONG_CONVERSATION_THRESHOLD || wantsToTalk) && !whatsappPromptShown) {
                setTimeout(() => {
                    showWhatsAppPrompt();
                }, 1500);
            }
            
            // Check if response mentions WhatsApp
            if (botResponse.text.toLowerCase().includes('whatsapp')) {
                setTimeout(() => {
                    const whatsappButton = document.getElementById('whatsapp-float-btn');
                    if (whatsappButton) {
                        whatsappButton.classList.add('show');
                        whatsappButton.style.animation = 'pulse 1s ease-in-out 3';
                    }
                }, 500);
            }
        }, 800);
    }
    
    // Function to reset conversation tracking (when starting new conversation)
    function resetConversationTracking() {
        messageCount = 0;
        userMessageCount = 0;
        whatsappPromptShown = false;
    }
    
    // Function to toggle WhatsApp button visibility
    function toggleWhatsAppButton(show) {
        const whatsappFloatBtn = document.getElementById('whatsapp-float-btn');
        if (whatsappFloatBtn) {
            if (show) {
                whatsappFloatBtn.classList.add('show');
            } else {
                // Don't hide completely, just keep it visible but less prominent
                // Or you can hide it: whatsappFloatBtn.classList.remove('show');
            }
        }
    }
    
    // Toggle chatbot window
    chatbotToggle.addEventListener('click', () => {
        const wasActive = chatbotWindow.classList.contains('active');
        chatbotWindow.classList.toggle('active');
        
        if (chatbotWindow.classList.contains('active')) {
            // Start rotating placeholder when chatbot opens
            setTimeout(() => {
                startRotatingPlaceholder();
            }, 500);
            
            // Don't auto-focus to allow placeholder animation
            // chatbotInput.focus();
            
            // Hide tooltip when chatbot opens
            hideTooltip();
            // Hide WhatsApp button when chatbot is open (optional - reduces clutter)
            // Uncomment if you want to hide it:
            // toggleWhatsAppButton(false);
        } else if (wasActive) {
            // Stop rotating placeholder when chatbot closes
            stopRotatingPlaceholder();
            
            // Show WhatsApp button when chatbot closes
            toggleWhatsAppButton(true);
            // If closing, reset tracking after a delay (in case user reopens quickly)
            setTimeout(() => {
                if (!chatbotWindow.classList.contains('active')) {
                    resetConversationTracking();
                }
            }, 5000); // Reset after 5 seconds of being closed
        }
    });
    
    // Close chatbot window
    chatbotClose.addEventListener('click', () => {
        chatbotWindow.classList.remove('active');
        
        // Stop rotating placeholder when chatbot closes
        stopRotatingPlaceholder();
        
        // Show WhatsApp button when chatbot closes
        toggleWhatsAppButton(true);
        // Show tooltip again after closing (optional - can be removed if you don't want it to reappear)
        // setTimeout(() => {
        //     if (!chatbotWindow.classList.contains('active') && !tooltipShown) {
        //         showTooltip();
        //     }
        // }, 2000);
        // Reset tracking after closing
        setTimeout(() => {
            if (!chatbotWindow.classList.contains('active')) {
                resetConversationTracking();
            }
        }, 5000);
    });
    
    // Handle quick button clicks
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('chatbot-quick-btn')) {
            const action = e.target.getAttribute('data-action');
            const actionMessages = {
                'services': 'What services do you offer',
                'availability': 'Are you available for projects',
                'portfolio': 'Show me your portfolio projects',
                'contact': 'How can I contact you'
            };
            
            if (actionMessages[action]) {
                chatbotInput.value = actionMessages[action];
                sendMessage();
            }
        }
    });
    
    // Send message on button click
    chatbotSend.addEventListener('click', sendMessage);
    
    // Send message on Enter key
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Handle input focus - stop placeholder animation
    chatbotInput.addEventListener('focus', () => {
        stopRotatingPlaceholder();
        chatbotInput.placeholder = 'Type your message...';
    });
    
    // Handle input blur - resume placeholder animation if empty
    chatbotInput.addEventListener('blur', () => {
        if (!chatbotInput.value && chatbotWindow.classList.contains('active')) {
            // Reset state and restart
            placeholderState.currentText = '';
            placeholderState.placeholderIndex = 0;
            placeholderState.isDeleting = false;
            setTimeout(() => {
                if (chatbotWindow.classList.contains('active') && !chatbotInput.value) {
                    startRotatingPlaceholder();
                }
            }, 500);
        }
    });
    
    // Close on outside click (optional)
    document.addEventListener('click', (e) => {
        if (chatbotWindow.classList.contains('active') && 
            !chatbotWindow.contains(e.target) && 
            !chatbotToggle.contains(e.target)) {
            // Optional: Uncomment to close on outside click
            // chatbotWindow.classList.remove('active');
        }
    });
    
    console.log('✅ Chatbot initialized');
}

// Email Modal Functionality
function showEmailModal() {
    const emailModal = document.getElementById('email-modal');
    if (emailModal) {
        emailModal.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        // Focus on first input
        setTimeout(() => {
            const firstInput = document.getElementById('client-email');
            if (firstInput) {
                firstInput.focus();
            }
        }, 100);
    }
}

// Reset email form when modal closes
function resetEmailForm() {
    const emailForm = document.getElementById('email-form');
    if (emailForm) {
        emailForm.reset();
        // Remove any error messages
        const errorMsg = emailForm.querySelector('.email-error-message');
        if (errorMsg) {
            errorMsg.remove();
        }
        // Reset submit button
        const submitBtn = emailForm.querySelector('.email-submit-btn');
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Send Email
            `;
            submitBtn.style.background = '';
        }
    }
}

function hideEmailModal() {
    const emailModal = document.getElementById('email-modal');
    if (emailModal) {
        emailModal.classList.remove('show');
        document.body.style.overflow = 'auto';
        
        // Reset form
        resetEmailForm();
    }
}

// Initialize email modal
document.addEventListener('DOMContentLoaded', function() {
    const emailModal = document.getElementById('email-modal');
    const emailModalClose = document.getElementById('email-modal-close');
    const emailForm = document.getElementById('email-form');
    
    if (!emailModal) return;
    
    // Close modal button
    if (emailModalClose) {
        emailModalClose.addEventListener('click', hideEmailModal);
    }
    
    // Close on outside click
    emailModal.addEventListener('click', (e) => {
        if (e.target === emailModal) {
            hideEmailModal();
        }
    });
    
    // Initialize EmailJS (replace with your public key after setup)
    // Get your keys from: https://dashboard.emailjs.com/admin/integration
    if (typeof emailjs !== 'undefined') {
        // Replace 'YOUR_PUBLIC_KEY' with your EmailJS public key
        // emailjs.init('YOUR_PUBLIC_KEY');
    }
    
    // Handle form submission
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const clientEmail = document.getElementById('client-email').value;
            const subject = document.getElementById('email-subject').value;
            const message = document.getElementById('email-message').value;
            const submitBtn = emailForm.querySelector('.email-submit-btn');
            const originalBtnText = submitBtn.innerHTML;
            
            // Disable button and show loading
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Sending...</span>';
            
            // EmailJS Configuration
            const serviceID = 'service_uh46zig';
            const templateID = 'template_qet9f3d';
            const publicKey = 'FY_OotUce1A8cX5ZG';
            const WHATSAPP_PHONE = '923349878525';
            
            // Wait for EmailJS to load, then send
            let retryCount = 0;
            const maxRetries = 20; // Wait up to 2 seconds for EmailJS to load
            
            function sendEmailWithEmailJS() {
                // Check if EmailJS is loaded
                if (typeof emailjs === 'undefined') {
                    retryCount++;
                    if (retryCount < maxRetries) {
                        // EmailJS not loaded yet, wait a bit more
                        setTimeout(sendEmailWithEmailJS, 100);
                        return;
                    } else {
                        // EmailJS failed to load - show WhatsApp option
                        console.error('EmailJS failed to load');
                        showEmailErrorWithWhatsApp(clientEmail, subject, message, submitBtn, originalBtnText, emailForm);
                        return;
                    }
                }
                
                // Initialize EmailJS
                try {
                    emailjs.init(publicKey);
                } catch (error) {
                    console.error('EmailJS init error:', error);
                    showEmailErrorWithWhatsApp(clientEmail, subject, message, submitBtn, originalBtnText, emailForm);
                    return;
                }
                
                // Get current time
                const currentTime = new Date().toLocaleString('en-US', {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                });
                
                // Send email via EmailJS
                emailjs.send(serviceID, templateID, {
                    to_email: 'hassanrashid0018@gmail.com',
                    from_email: clientEmail,
                    subject: subject,
                    message: message,
                    reply_to: clientEmail,
                    time: currentTime,
                    name: clientEmail.split('@')[0]
                })
                .then(function(response) {
                    console.log('Email sent successfully!', response.status, response.text);
                    // Success
                    submitBtn.innerHTML = '<span>✅ Sent!</span>';
                    submitBtn.style.background = '#10b981';
                    
                    setTimeout(() => {
                        hideEmailModal();
                        showEmailSuccessInChatbot('✅ Email sent successfully! Hassan will get back to you soon.');
                    }, 1000);
                })
                .catch(function(error) {
                    console.error('EmailJS Send Error:', error);
                    console.error('Error Details:', {
                        status: error.status,
                        text: error.text,
                        serviceID: serviceID,
                        templateID: templateID
                    });
                    
                    // Show specific error message
                    let errorMessage = 'Email failed to send.';
                    if (error.text) {
                        if (error.text.includes('template ID not found')) {
                            errorMessage = 'Template not found. Please check your EmailJS template ID.';
                        } else if (error.text.includes('service')) {
                            errorMessage = 'Email service error. Please check your EmailJS service configuration.';
                        } else {
                            errorMessage = `Error: ${error.text}`;
                        }
                    }
                    
                    // Error - show WhatsApp option
                    showEmailErrorWithWhatsApp(clientEmail, subject, message, submitBtn, originalBtnText, emailForm, errorMessage);
                });
            }
            
            // Start sending
            sendEmailWithEmailJS();
        });
    }
    
    // Function to show error with WhatsApp option
    function showEmailErrorWithWhatsApp(clientEmail, subject, message, submitBtn, originalBtnText, emailForm, customErrorMsg = null) {
        const WHATSAPP_PHONE = '923349878525';
        
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        
        const errorText = customErrorMsg || '❌ Email failed to send. Try WhatsApp instead:';
        
        // Show error with WhatsApp option
        const errorMsg = document.createElement('div');
        errorMsg.className = 'email-error-message';
        errorMsg.style.cssText = 'margin-top: 15px; padding: 12px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; color: #991b1b; font-size: 13px;';
        errorMsg.innerHTML = `
            <p style="margin: 0 0 10px 0;">${errorText}</p>
            <a href="https://wa.me/${WHATSAPP_PHONE}?text=Hi! I need to send you an email.%0D%0A%0D%0AMy email: ${encodeURIComponent(clientEmail)}%0D%0ASubject: ${encodeURIComponent(subject)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}" 
               target="_blank" 
               style="display: inline-block; padding: 8px 16px; background: #25D366; color: white; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 13px; margin-top: 8px;">
                💬 Open WhatsApp
            </a>
        `;
        
        // Remove any existing error message
        const existingError = emailForm.querySelector('.email-error-message');
        if (existingError) {
            existingError.remove();
        }
        
        emailForm.appendChild(errorMsg);
    }
    
    
    // Show success message in chatbot with action buttons
    function showEmailSuccessInChatbot(customMessage = null) {
        const messageText = customMessage || '✅ Email sent successfully! Hassan will get back to you soon.';
        // Use addMessage function to get action buttons automatically
        addMessage(messageText, false, 'email-success');
    }
    
});

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
        
        // Check if mobile menu is already initialized to prevent duplicate event listeners
        if (open.hasAttribute('data-mobile-menu-initialized')) {
            console.log('Mobile menu already initialized, skipping...');
            return;
        }
        
        // Mark as initialized
        open.setAttribute('data-mobile-menu-initialized', 'true');
        
        // Reset mobile menu state to ensure it starts closed (original animation)
        gsap.set('#mobile-nav', { right: '-100%', height: '30px' });
        
        // Set initial states
        gsap.set('#mobile-nav ul li a', { opacity: 0, pointerEvents: 'none' });
        gsap.set('#mobile-nav .close', { opacity: 0, pointerEvents: 'none' });
        gsap.set('#mobile-nav a img', { opacity: 0 });
        gsap.set('#mobile-nav .menu-title', { opacity: 0, pointerEvents: 'none' });
        
        var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
        
        open.addEventListener('click', () => {
            console.log('Mobile menu open clicked');
            if (tl.reversed()) {
                tl.play();
            } else {
                tl.to('#mobile-nav', { right: 0 })
                    .to('#mobile-nav', { height: '100vh' }, '-=.1')
                    .to('#mobile-nav a img', { opacity: 1, pointerEvents: 'all' }, '-=.8')
                    .to('#mobile-nav .menu-title', { opacity: 1, pointerEvents: 'all' }, '-=.7')
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
    console.log('🚀 Initializing mobile experience tabs...');
    console.log('Screen width:', window.innerWidth);
    
    const tabButtons = document.querySelectorAll('.tab-button-mobile');
    const tabContents = document.querySelectorAll('.experience-details-mobile');
    
    console.log('Mobile tab buttons found:', tabButtons.length);
    console.log('Mobile tab contents found:', tabContents.length);
    
    // Debug initial state
    tabButtons.forEach((btn, index) => {
        const tabName = btn.getAttribute('data-tab');
        console.log(`Mobile tab ${index + 1} (${tabName}):`, {
            hasActive: btn.classList.contains('active'),
            classes: btn.className,
            computedColor: window.getComputedStyle(btn).color,
            computedBackground: window.getComputedStyle(btn).backgroundColor
        });
    });
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            console.log('🖱️ Mobile tab clicked:', targetTab);
            console.log('Before change - active tabs:', Array.from(tabButtons).map(btn => ({
                tab: btn.getAttribute('data-tab'),
                hasActive: btn.classList.contains('active')
            })));
            
            // Remove active class from all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                console.log(`Removed active from ${btn.getAttribute('data-tab')} tab`);
            });
            
            // Add active class to clicked button
            button.classList.add('active');
            console.log(`✅ Added active to ${targetTab} tab`);
            console.log(`${targetTab} tab classes:`, button.className);
            console.log(`${targetTab} tab computed styles:`, {
                color: window.getComputedStyle(button).color,
                backgroundColor: window.getComputedStyle(button).backgroundColor,
                background: window.getComputedStyle(button).background
            });
            
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
       
        },
        { 
            project: selectedProjects[1], 
            classes: 'col-span-3 row-span-3 col-start-3',
         
        },
        { 
            project: selectedProjects[2], 
            classes: 'col-span-2 row-span-2 row-start-4',
      
        },
        { 
            project: selectedProjects[3], 
            classes: 'col-span-3 row-span-2 col-start-3 row-start-4',
          
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
            <div class="${item.classes} project-card-simple shadow-lg cursor-pointer" data-project="${item.project}">
                <div class="card-image">
                    ${project.image ? `
                        <img src="${project.image}" 
                             alt="${project.title}" 
                             class="w-full h-full object-contain"
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
                    <div class="default-title">${project.title}.
                </div>
                
                <!-- Detailed content - shows on hover -->
                <div class="card-content">
                    <div>
                        <div class="project-title-with-icon">
                            ${project.logo ? `
                                <img src="${project.logo}" 
                                     alt="${project.title}<span< logo" 
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
    
    // Initialize GSAP animations for home project cards
    initializeHomeProjectCardAnimations();
}

// Function to initialize GSAP animations for home project cards
function initializeHomeProjectCardAnimations() {
    const projectCards = document.querySelectorAll('#home-projects-container .project-card-simple');
    
    projectCards.forEach((card, index) => {
        const content = card.querySelector('.card-content');
        const title = card.querySelector('.project-title');
        const description = card.querySelector('.project-description');
        const meta = card.querySelector('.project-meta');
        const techTags = card.querySelector('.tech-tags');
        
        if (!content || !title) return; // Skip if elements not found
        
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

// Function to create individual project card HTML
function createProjectCard(size, projectId) {
    const project = projectData[projectId];
    if (!project) return '';

    // Generate technology tags based on project type
    const techTags = generateTechTags(project);
    
    return `
        <div class="${size} h-full">
            <div class="project-card-simple shadow-lg cursor-pointer h-full" data-project="${projectId}">
                <div class="card-image">
                    ${project.image ? `
                        <img src="${project.image}" 
                             alt="${project.title}" 
                             class="w-full h-full object-contain"
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
                    <div class="default-title">${project.title}<span class="project-title-dot">.</span></div>
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
        </div>
    `;
}

// Function to generate technology tags based on project
function generateTechTags(project) {
    const techMap = {
        'Devstitch': [
            { name: 'React', bg: 'bg-blue-100', text: 'text-blue-800' },
            { name: 'Socket.io', bg: 'bg-primary-light', text: 'text-primary-dark' }
        ],
        'ecocart': [
            { name: 'React', bg: 'bg-green-100', text: 'text-green-800' },
            { name: 'Stripe', bg: 'bg-blue-100', text: 'text-blue-800' }
        ],
        'jokester': [
            { name: 'Vue.js', bg: 'bg-primary-light', text: 'text-primary-dark' },
            { name: 'Node.js', bg: 'bg-blue-100', text: 'text-blue-800' }
        ],
        'docmed': [
            { name: 'React Native', bg: 'bg-orange-100', text: 'text-orange-800' },
            { name: 'Maps API', bg: 'bg-blue-100', text: 'text-blue-800' }
        ],
        'aquavance': [
            { name: 'React', bg: 'bg-green-100', text: 'text-green-800' },
            { name: 'Node.js', bg: 'bg-blue-100', text: 'text-blue-800' }
        ],
        'nexcent': [
            { name: 'React', bg: 'bg-yellow-100', text: 'text-yellow-800' },
            { name: 'Chart.js', bg: 'bg-blue-100', text: 'text-blue-800' }
        ],
        'socialconnect': [
            { name: 'Vue.js', bg: 'bg-blue-100', text: 'text-blue-800' },
            { name: 'Firebase', bg: 'bg-orange-100', text: 'text-orange-800' }
        ],
        'smartcity': [
            { name: 'React', bg: 'bg-green-100', text: 'text-green-800' },
            { name: 'IoT', bg: 'bg-primary-light', text: 'text-primary-dark' }
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

// Function to load projects with modern 2x2 portfolio cards layout
function loadHomeProjectsNewsStyle() {
    console.log('=== loadHomeProjectsNewsStyle called ===');
    
    // Check if projectData is available
    if (typeof projectData === 'undefined') {
        console.log('Project data not available, retrying...');
        setTimeout(loadHomeProjectsNewsStyle, 100);
        return;
    }

    const container = document.getElementById('home-projects-container');
    if (!container) {
        console.log('Container not found!');
        return;
    }
    
    console.log('Container found:', container);

    // Get all project IDs and shuffle them
    const projectIds = Object.keys(projectData);
    console.log('Available project IDs:', projectIds);
    
    if (projectIds.length === 0) {
        console.log('No projects found in projectData!');
        return;
    }
    
    const shuffledProjects = projectIds.sort(() => Math.random() - 0.5);
    
    // Take first 4 projects for 2x2 grid layout
    const selectedProjects = shuffledProjects.slice(0, 4);
    console.log('Selected projects:', selectedProjects);
    
    // Ensure we have exactly 4 projects
    if (selectedProjects.length < 4) {
        while (selectedProjects.length < 4 && selectedProjects.length < projectIds.length) {
            const remainingProjects = projectIds.filter(id => !selectedProjects.includes(id));
            if (remainingProjects.length > 0) {
                selectedProjects.push(remainingProjects[0]);
            } else {
                break;
            }
        }
    }

    let projectsHTML = '';
    
    // Create 2x2 grid with modern portfolio cards
    selectedProjects.forEach(projectId => {
        const cardHTML = createModernPortfolioCard(projectId);
        console.log(`Card HTML for ${projectId}:`, cardHTML.length, 'characters');
        projectsHTML += cardHTML;
    });

    console.log('Total projects HTML length:', projectsHTML.length);
    container.innerHTML = projectsHTML;
    console.log('Modern portfolio cards HTML generated and inserted');
    console.log('Container children count:', container.children.length);
    
    // Add click event listeners to the project cards
    addProjectClickHandlers();
    
    // Initialize GSAP animations for home project cards
    setTimeout(() => {
        initializeHomeProjectCardAnimations();
    }, 100);
}

// Function to create modern portfolio-style card (2x2 grid design) with hover effect
function createModernPortfolioCard(projectId) {
    const project = projectData[projectId];
    if (!project) {
        console.error(`Project not found for ID: ${projectId}`);
        return '';
    }

    // Generate technology tags based on project type
    let techTags = [];
    try {
        techTags = generateTechTags(project);
    } catch (error) {
        console.error('Error generating tech tags:', error);
        techTags = [];
    }

    return `
        <div class="project-card-simple shadow-lg cursor-pointer" data-project="${projectId}">
            <div class="card-image">
                ${project.image ? `
                    <img src="${project.image}" 
                         alt="${project.title}" 
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
                <div class="default-title">
                        <h5>
                        ${project.title}<span class="project-title-dot">.</span></h5>
                        </div>
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

// Function to create Bootstrap-style news card converted to Tailwind
function createBootstrapNewsCard(projectId) {
    const project = projectData[projectId];
    if (!project) return '';

    return `
        <div class="w-full lg:w-1/2 p-2">
            <a href="#" class="block" data-project="${projectId}">
                <figure class="newsCard news-Slide-up h-96">
                    ${project.image ? `
                        <img src="${project.image}" 
                             alt="${project.title}" 
                             loading="lazy">
                    ` : `
                        <div class="w-full h-full bg-gradient-to-br from-purple-500 to-blue-600"></div>
                    `}
                    
                    <div class="newsCaption">
                        <div class="d-flex align-items-center justify-content-between cnt-title">
                            <h5 class="newsCaption-title text-white m-0">${project.title}<span class="project-title-dot">.</span></h5>
                            <i class="fas fa-arrow-alt-circle-right"></i>
                        </div>
                        <div class="newsCaption-content d-flex">
                            <p class="col-10 py-3 px-0">${project.description}</p>
                        </div>
                    </div>
                    <span class="overlay"></span>
                </figure>
            </a>
        </div>
    `;
}

// Initialize mobile tabs when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load experience data for both desktop and mobile views
    loadExperienceData();
    
    initMobileTabs();
    
    // Load home projects if we're on the home page
    if (document.body.getAttribute('data-page') === 'home') {
        // Load immediately and also with a small delay as backup
        loadHomeProjectsNewsStyle();
        setTimeout(() => {
            loadHomeProjectsNewsStyle();
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
            loadHomeProjectsNewsStyle();
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

// Stack Rendering Function for About Page
function renderStackItems() {
    const marqueeWrapper = document.getElementById('marquee-wrapper');
    if (!marqueeWrapper) return;

    // Clear existing content
    marqueeWrapper.innerHTML = '';

    // Create star icon SVG
    const starIcon = `
        <svg class="w-6 h-6 text-primary-light mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
        </svg>
    `;

    // Function to create marquee content
    function createMarqueeContent(items) {
        return items.map(item => `
            <div class="marquee__content">
                ${starIcon}
                <span class="text-sm font-bold text-white">${item.text}</span>
            </div>
        `).join('');
    }

    // Create marquees dynamically
    const marquees = [
        { data: stackData.marquee1, classes: 'marquee marquee--fast' },
        { data: stackData.marquee2, classes: 'marquee marquee--reverse marquee--medium' },
        { data: stackData.marquee3, classes: 'marquee marquee--slow' }
    ];

    marquees.forEach(marquee => {
        const marqueeElement = document.createElement('div');
        marqueeElement.className = marquee.classes;
        
        marqueeElement.innerHTML = `
            <div class="marquee__group">
                ${createMarqueeContent(marquee.data)}
            </div>
            <div class="marquee__group" aria-hidden="true">
                ${createMarqueeContent(marquee.data)}
            </div>
        `;
        
        marqueeWrapper.appendChild(marqueeElement);
    });
}

// Initialize stack rendering when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderStackItems();
});


