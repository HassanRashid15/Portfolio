// Centralized Project Data - Define all projects here once
// This file is imported by both projects.js and project-detail.js
const projectData = {
    Devstitch: {
        title: "DevStitch",
        description: "DevStitch is a custom web solutions development agency specializing in modern web development, web applications, e-commerce platforms, and dedicated development teams. With over 50 completed projects, 20+ satisfied clients, and a 4.9 Clutch rating, DevStitch ensures innovative, scalable, and high-performance solutions tailored to client needs.",
        link: "https://devstitch-demo.com",
        client: "Software Agency",
        clientType: "organization",
        year: "2024",   
        role: "Frontend Developer",
        image: "Assets/Project1a.png",
        category: "live-projects",
        logo: "https://devstitch.com/favicon.ico", // DevStitch logo
        screenshot: `
            <div class="bg-white rounded-xl p-4">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-bold text-gray-900">TASKFLOW</h3>

                </div>
                <div class="space-y-3">

                </div>
            </div>
        `,
        about: [
            "DevStitch is a custom web solutions development agency driven by AI and focused on performance, security, and innovative problem-solving. The company thrives on teamwork and a results-driven approach, ensuring exceptional outcomes for their clients. Their core services include modern web development using technologies like PHP Laravel and Node.js, web application development for smooth and intuitive user experiences, e-commerce solutions for scalable online stores, and providing dedicated development teams to meet diverse business needs.",
            "With over 50 successfully completed projects, 20+ satisfied clients, and a stellar 4.9 Clutch rating, DevStitch has cemented its reputation as a leading development agency. They follow a comprehensive six-step development process — planning, design, development, testing, deployment, and maintenance — to deliver top-notch, reliable, and secure solutions. Their experience spans multiple industries, including e-commerce, luxury watch manufacturing, interior design, and sustainable travel platforms.",
            "Client feedback frequently highlights DevStitch's professionalism, technical expertise, reliability, and commitment to deadlines, with many projects exceeding expectations. The company's mission is to ensure quality, scalability, and innovation in every solution delivered, making DevStitch a trusted partner for businesses worldwide."
          ],
        clientInfo: [
            "We collaborated with a mid-size tech startup specializing in project management tools for remote teams. The organization faced challenges in managing complex workflows, enabling real-time collaboration, and integrating their platform with third-party services.",
            "Our team at DevStitch designed and developed a scalable, responsive web application with a seamless user experience. As a Frontend Developer, I focused on building pixel-perfect interfaces, implementing real-time data handling, and ensuring cross-browser compatibility. The final solution helped the client streamline operations, improve team productivity, and enhance user engagement significantly."
        ],
        challenges: [
            "As a Frontend Developer at DevStitch, I faced several challenges that helped me grow technically and professionally. One of the primary challenges was implementing pixel-perfect, responsive designs across various screen sizes while ensuring performance optimization. Integrating frontend components seamlessly with backend APIs for real-time data handling and dynamic content rendering also required careful planning. Additionally, managing state efficiently in complex web applications with features like real-time collaboration and drag-and-drop interfaces was a demanding task.",
            "I also had to focus on optimizing page load speed, maintaining cross-browser compatibility, and balancing rapid feature delivery with clean, maintainable, and reusable code practices to ensure scalability and long-term project success."
          ],

        results: [
         "As a result of overcoming these challenges, I successfully delivered responsive and high-performance web applications that met both design and functional requirements. The seamless integration with backend APIs enhanced real-time collaboration features, while optimization efforts significantly improved page load speed and user experience.",

  "My focus on clean, maintainable, and reusable code practices ensured long-term scalability for the projects, making future updates and feature enhancements smoother. The final solutions not only met client expectations but also contributed to positive feedback and strengthened DevStitch’s reputation for delivering quality web solutions on time."
        ],
        resultScreenshots: [
            `<div class="rounded-xl relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center" 
                     alt="Dashboard Analytics" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-blue-50 p-2 rounded">
                    <p class="text-xs text-blue-600">Analytics</p>
                    <p class="text-lg font-bold text-blue-800">+25%</p>
                </div>
            </div>`,
            `<div class="rounded-xl relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center" 
                     alt="Analytics Charts" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-green-50 p-2 rounded">
                    <p class="text-xs text-green-600">Performance</p>
                    <p class="text-lg font-bold text-green-800">98%</p>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=center" 
                     alt="Team Collaboration" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-purple-50 p-2 rounded">
                    <p class="text-xs text-purple-600">Team</p>
                    <p class="text-lg font-bold text-purple-800">50+</p>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center" 
                     alt="Project Success" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-orange-50 p-2 rounded">
                    <p class="text-xs text-orange-600">Success</p>
                    <p class="text-lg font-bold text-orange-800">4.9★</p>
                </div>
            </div>`
        ]
    },
    ecocart: {
        title: "EcoCart",
        description: "E-commerce platform promoting eco-friendly products with payment integration.",
        link: "https://ecocart-demo.com",
        client: "Jane Doe",
        clientType: "individual",
        year: "2021",
        role: "Lead Designer",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
        logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=64&h=64&fit=crop&crop=center",
        category: "figma-converters",
        screenshot: `
            <div class="bg-white rounded-xl p-4">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="text-lg font-bold text-gray-900">ECO SHOP</h3>

                </div>
                <div class="flex space-x-4">

                </div>
            </div>
        `,
        about: [
            "EcoCart is a sustainable e-commerce platform that connects environmentally conscious consumers with eco-friendly products. The platform focuses on transparency, providing detailed information about each product's environmental impact.",
            "Built with modern e-commerce technologies, EcoCart offers seamless shopping experiences while promoting sustainable consumption habits."
        ],
        clientInfo: [
            "Our client was an environmental organization looking to create a marketplace for sustainable products. They wanted to make eco-friendly shopping more accessible and transparent.",
            "The platform needed to handle complex product categorization, environmental impact tracking, and secure payment processing."
        ],
        challenges: [
            "The main challenge was creating a product categorization system that could accurately represent environmental impact while remaining user-friendly. We also needed to integrate with multiple payment providers and shipping services.",
            "Another challenge was building trust through transparency - showing customers exactly how their purchases contribute to environmental sustainability."
        ],
        results: [
            "EcoCart successfully launched with over 200 eco-friendly products and processed $50,000 in sales within the first month. Customer satisfaction scores averaged 4.8/5, with 85% of customers reporting increased awareness of sustainable shopping.",
            "The platform has helped reduce carbon footprint by 30% compared to traditional e-commerce through optimized shipping and packaging solutions."
        ],
        resultScreenshots: [
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center" 
                     alt="E-commerce Shopping" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-green-50 p-2 rounded">
                    <p class="text-xs text-green-600">Sales</p>
                    <p class="text-lg font-bold text-green-800">+40%</p>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop&crop=center" 
                     alt="Online Shopping Cart" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-blue-50 p-2 rounded">
                    <p class="text-xs text-blue-600">Cart</p>
                    <p class="text-lg font-bold text-blue-800">$2.5K</p>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center" 
                     alt="E-commerce Product Gallery" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-purple-50 p-2 rounded">
                    <p class="text-xs text-purple-600">Products</p>
                    <p class="text-lg font-bold text-purple-800">500+</p>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop&crop=center" 
                     alt="Eco Impact" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-orange-50 p-2 rounded">
                    <p class="text-xs text-orange-600">Impact</p>
                    <p class="text-lg font-bold text-orange-800">-30%</p>
                </div>
            </div>`
        ]
    },
    jokester: {
        title: "Jokester",
        description: "Jokester is a web application that allows users to share and discover jokes.",
        link: "https://jokester-demo.com",
        client: "Sarah Johnson",
        clientType: "individual",
        year: "2022",
        role: "UI/UX Designer",
        image: "Assets/Project2a.png",
        logo: "Assets/jokester-favicon.ico",
        category: "live-projects",
        screenshot: `
            <div class="bg-white rounded-xl p-4">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="text-lg font-bold text-gray-900">JOKESTER</h3>

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

                    <div class="h-8 bg-purple-100 rounded flex items-center justify-center">
                        <span class="text-xs font-bold text-purple-800">2</span>

                    <div class="h-8 bg-purple-100 rounded flex items-center justify-center">
                        <span class="text-xs font-bold text-purple-800">3</span>

                </div>
            </div>
        `,
        about: [
            "Jokester is a web application that allows users to share and discover jokes.",
            "The application features timeline management, guest coordination, vendor management, and real-time collaboration tools to ensure successful events."
        ],
        clientInfo: [
            "We partnered with a corporate events company that was managing multiple large-scale events simultaneously. They needed a centralized platform to coordinate all aspects of event planning.",
            "The client required integration with various third-party services, mobile accessibility for on-site coordination, and detailed reporting capabilities."
        ],
        challenges: [
            "The main challenge was creating a timeline system that could handle complex event schedules with multiple concurrent activities. We also needed to ensure real-time synchronization across multiple users.",
            "Another challenge was building an intuitive interface that could manage the complexity of large events while remaining accessible to users with varying technical expertise."
        ],
        results: [
            "EventPlanner reduced event planning time by 50% and improved coordination efficiency by 70%. The platform successfully managed over 100 events in its first year, with an average event size of 500+ attendees.",
            "Client satisfaction increased by 40%, and the platform has become the standard tool for event management within the organization."
        ],
        resultScreenshots: [
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="Assets/Project2a.png" 
                     alt="Event Planning Calendar" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-blue-50 p-2 rounded">
                    <p class="text-xs text-blue-600">Events</p>
                    <p class="text-lg font-bold text-blue-800">100+</p>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="Assets/Project2b.png" 
                     alt="Event Guests Management" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-green-50 p-2 rounded">
                    <p class="text-xs text-green-600">Guests</p>
                    <p class="text-lg font-bold text-green-800">500+</p>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="Assets/Project2c.png" 
                     alt="Event Vendors Management" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-purple-50 p-2 rounded">
                    <p class="text-xs text-purple-600">Vendors</p>
                    <p class="text-lg font-bold text-purple-800">50+</p>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="Assets/Project2d.png" 
                     alt="Event Success" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-orange-50 p-2 rounded">
                    <p class="text-xs text-orange-600">Success</p>
                    <p class="text-lg font-bold text-orange-800">70%</p>
                </div>
            </div>`
        ]
    },
    foodiefinder: {
        title: "FoodieFinder",
        description: "Modern-looking restaurant discovery platform featuring real-time search, reviews, and ratings.",
        link: "https://foodiefinder-demo.com",
        client: "Michael Chen",
        clientType: "individual",
        year: "2023",
        role: "Frontend Developer",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&crop=center",
        logo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=64&h=64&fit=crop&crop=center",
        category: "figma-converters",
        screenshot: `
            <div class="bg-white rounded-xl p-4">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="text-lg font-bold text-gray-900">MAPS</h3>

                </div>
                <div class="bg-gray-100 rounded-lg p-2 mb-3">

                </div>
                <div class="flex space-x-3">

                </div>
            </div>
        `,
        about: [
            "FoodieFinder is a location-based restaurant discovery platform that helps users find the perfect dining experience. The app combines real-time location data with comprehensive restaurant information to provide personalized recommendations.",
            "Built with modern mobile technologies, FoodieFinder offers seamless navigation, real-time reviews, and integrated booking capabilities."
        ],
        clientInfo: [
            "Our client was a food delivery startup looking to expand into restaurant discovery and recommendations. They wanted to create a platform that would help users discover new restaurants and make informed dining decisions.",
            "The platform needed to integrate with mapping services, review systems, and restaurant databases while providing a smooth user experience."
        ],
        challenges: [
            "The main challenge was creating an accurate location-based search system that could handle real-time data updates. We also needed to integrate multiple data sources while maintaining fast performance.",
            "Another challenge was building a recommendation engine that could provide personalized suggestions based on user preferences and location history."
        ],
        results: [
            "FoodieFinder successfully launched with over 10,000 restaurants in its database and achieved 4.7/5 user rating. The platform processed over 1 million location-based searches in its first six months.",
            "Restaurant partners reported a 35% increase in foot traffic, and users spent an average of 8 minutes per session exploring restaurants."
        ],
        resultScreenshots: [
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&crop=center" 
                     alt="Restaurant Search Interface" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-blue-50 p-2 rounded">
                    <p class="text-xs text-blue-600">Search</p>
                    <p class="text-lg font-bold text-blue-800">1M+</p>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop&crop=center" 
                     alt="Restaurant Listing" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-green-50 p-2 rounded">
                    <p class="text-xs text-green-600">Restaurants</p>
                    <p class="text-lg font-bold text-green-800">10K+</p>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop&crop=center" 
                     alt="Restaurant Map View" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-purple-50 p-2 rounded">
                    <p class="text-xs text-purple-600">Rating</p>
                    <p class="text-lg font-bold text-purple-800">4.7★</p>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop&crop=center" 
                     alt="Restaurant Success" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-orange-50 p-2 rounded">
                    <p class="text-xs text-orange-600">Traffic</p>
                    <p class="text-lg font-bold text-orange-800">+35%</p>
                </div>
            </div>`
        ]
    },
    healthtracker: {
        title: "HealthTracker",
        description: "Comprehensive health and fitness tracking app with AI-powered insights and personalized recommendations.",
        link: "https://healthtracker-demo.com",
        client: "Wellness Solutions Ltd",
        clientType: "organization",
        year: "2024",
        role: "Full Stack Developer",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
        logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=64&h=64&fit=crop&crop=center",
        category: "live-projects",
        screenshot: `
            <div class="bg-white rounded-xl p-4">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="text-lg font-bold text-gray-900">HEALTH TRACKER</h3>

                </div>
                <div class="space-y-3">

                        <span class="text-sm font-bold text-green-600">8,247</span>

                        <span class="text-sm font-bold text-blue-600">6/8 glasses</span>

                        <span class="text-sm font-bold text-purple-600">85%</span>

                </div>
            </div>
        `,
        about: [
            "HealthTracker is a comprehensive health and fitness monitoring application that empowers users to take control of their wellness journey. The app combines advanced tracking capabilities with AI-powered insights to provide personalized health recommendations.",
            "Built with cutting-edge technology, HealthTracker offers seamless integration with wearable devices, real-time health monitoring, and intelligent analytics to help users achieve their health goals."
        ],
        clientInfo: [
            "We partnered with a leading wellness company that wanted to create a comprehensive health tracking solution for their users. They needed an app that could integrate with various health devices and provide meaningful insights.",
            "The client required real-time data synchronization, personalized recommendations, and a user-friendly interface that could motivate users to maintain healthy habits."
        ],
        challenges: [
            "The main challenge was creating a robust data synchronization system that could handle real-time updates from multiple health devices while maintaining data accuracy and privacy.",
            "Another challenge was developing an AI recommendation engine that could provide personalized health insights without overwhelming users with too much information."
        ],
        results: [
            "HealthTracker successfully launched with over 50,000 active users and achieved a 4.9/5 user rating. Users reported a 45% improvement in their health habits and 60% better adherence to fitness goals.",
            "The app processed over 2 million health data points daily and helped users collectively lose over 10,000 pounds in the first six months."
        ],
        resultScreenshots: [
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center" 
                     alt="Health Dashboard" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-blue-50 p-2 rounded">
                    <p class="text-xs text-blue-600">Users</p>
                    <p class="text-lg font-bold text-blue-800">50K+</p>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center" 
                     alt="Fitness Tracking" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-green-50 p-2 rounded">
                    <p class="text-xs text-green-600">Fitness</p>
                    <p class="text-lg font-bold text-green-800">+60%</p>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop&crop=center" 
                     alt="Health Analytics" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-purple-50 p-2 rounded">
                    <p class="text-xs text-purple-600">Data</p>
                    <p class="text-lg font-bold text-purple-800">2M+</p>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center" 
                     alt="Health Success" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-orange-50 p-2 rounded">
                    <p class="text-xs text-orange-600">Rating</p>
                    <p class="text-lg font-bold text-orange-800">4.9★</p>
                </div>
            </div>`
        ]
    },
    cryptotracker: {
        title: "CryptoTracker",
        description: "Real-time cryptocurrency portfolio tracker with advanced analytics and market insights.",
        link: "https://cryptotracker-demo.com",
        client: "Digital Finance Corp",
        clientType: "organization",
        year: "2024",
        role: "Frontend Developer",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&crop=center",
        logo: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=64&h=64&fit=crop&crop=center",
        category: "figma-converters",
        screenshot: `
            <div class="bg-white rounded-xl p-4">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="text-lg font-bold text-gray-900">CRYPTO TRACKER</h3>

                </div>
                <div class="space-y-3">

                        <span class="text-sm font-bold text-yellow-600">$45,230</span>

                        <span class="text-sm font-bold text-blue-600">$3,120</span>

                        <span class="text-sm font-bold text-green-600">+12.5%</span>

                </div>
            </div>
        `,
        about: [
            "CryptoTracker is a comprehensive cryptocurrency portfolio management platform that provides real-time market data, advanced analytics, and intelligent insights for crypto investors.",
            "The application features live price tracking, portfolio performance analysis, market trends, and personalized alerts to help users make informed investment decisions."
        ],
        clientInfo: [
            "We worked with a fintech startup that wanted to create a user-friendly cryptocurrency tracking solution for both beginners and experienced traders.",
            "The client required real-time data integration, secure portfolio management, and advanced charting capabilities with mobile accessibility."
        ],
        challenges: [
            "The main challenge was integrating multiple cryptocurrency APIs to provide real-time data while ensuring system reliability and handling high-frequency updates.",
            "Another challenge was creating an intuitive interface that could display complex financial data in an accessible way for users with varying levels of crypto knowledge."
        ],
        results: [
            "CryptoTracker successfully launched with over 25,000 active users and processed over $50 million in portfolio tracking. Users reported 40% better investment decision-making and 35% improved portfolio performance.",
            "The app achieved a 4.8/5 user rating and was featured in major fintech publications for its innovative approach to crypto portfolio management."
        ],
        resultScreenshots: [
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&crop=center" 
                     alt="Crypto Dashboard" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-red-50 p-2 rounded">
                    <p class="text-xs text-red-600">24h</p>
                    <p class="text-lg font-bold text-red-800">+5.2%</p>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop&crop=center" 
                     alt="Market Analysis" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-green-50 p-2 rounded">
                    <p class="text-xs text-green-600">Portfolio</p>
                    <p class="text-lg font-bold text-green-800">$45,230</p>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&crop=center" 
                     alt="Trading Charts" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-blue-50 p-2 rounded">
                    <p class="text-xs text-blue-600">Trend</p>
                    <p class="text-lg font-bold text-blue-800">↗ +12.5%</p>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1642790103337-344b4477a0b1?w=800&h=600&fit=crop&crop=center" 
                     alt="Analytics" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-purple-50 p-2 rounded">
                    <p class="text-xs text-purple-600">ROI</p>
                    <p class="text-lg font-bold text-purple-800">+35%</p>
                </div>
            </div>`
        ]
    },
    socialconnect: {
        title: "SocialConnect",
        description: "Professional networking platform connecting industry experts and fostering meaningful business relationships.",
        link: "https://socialconnect-demo.com",
        client: "Networking Solutions Inc",
        clientType: "organization",
        year: "2023",
        role: "UI/UX Designer",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",
        logo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=64&h=64&fit=crop&crop=center",
        category: "live-projects",
        screenshot: `
            <div class="bg-white rounded-xl p-4">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="text-lg font-bold text-gray-900">SOCIAL CONNECT</h3>

                </div>
                <div class="space-y-3">

                </div>
            </div>
        `,
        about: [
            "SocialConnect is a professional networking platform designed to bridge the gap between industry experts and create meaningful business relationships. The platform focuses on quality connections over quantity.",
            "Built with modern social networking technologies, SocialConnect offers intelligent matching, event management, and collaborative tools to help professionals grow their networks effectively."
        ],
        clientInfo: [
            "We partnered with a business networking company that wanted to create a more focused alternative to existing social platforms, emphasizing professional growth and meaningful connections.",
            "The client required advanced matching algorithms, event integration, and privacy-focused features to ensure a professional networking experience."
        ],
        challenges: [
            "The main challenge was creating an intelligent matching system that could connect professionals based on industry, interests, and career goals while maintaining user privacy.",
            "Another challenge was building a platform that encouraged meaningful interactions rather than superficial connections, requiring careful UX design and feature prioritization."
        ],
        results: [
            "SocialConnect successfully launched with over 15,000 professionals and facilitated over 5,000 meaningful business connections. Users reported 60% more relevant networking opportunities and 45% better career advancement.",
            "The platform achieved a 4.7/5 user rating and was recognized as a top professional networking tool by industry publications."
        ],
        resultScreenshots: [
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center" 
                     alt="Professional Network" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-blue-50 p-2 rounded">
                    <p class="text-xs text-blue-600">Network</p>
                    <p class="text-lg font-bold text-blue-800">15K+</p>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center" 
                     alt="Connection Matching" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-green-50 p-2 rounded">
                    <p class="text-xs text-green-600">Connections</p>
                    <p class="text-lg font-bold text-green-800">5K+</p>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&crop=center" 
                     alt="Professional Events" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-purple-50 p-2 rounded">
                    <p class="text-xs text-purple-600">Events</p>
                    <p class="text-lg font-bold text-purple-800">200+</p>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center" 
                     alt="Career Success" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-orange-50 p-2 rounded">
                    <p class="text-xs text-orange-600">Success</p>
                    <p class="text-lg font-bold text-orange-800">+45%</p>
                </div>
            </div>`
        ]
    },
    smartcity: {
        title: "SmartCity",
        description: "IoT-powered smart city management platform optimizing urban infrastructure and citizen services.",
        link: "https://smartcity-demo.com",
        client: "Urban Innovation Labs",
        clientType: "organization",
        year: "2024",
        role: "Full Stack Developer",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=center",
        logo: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=64&h=64&fit=crop&crop=center",
        category: "figma-converters",
        screenshot: `
            <div class="bg-white rounded-xl p-4">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="text-lg font-bold text-gray-900">SMART CITY</h3>

                </div>
                <div class="space-y-3">

                        <span class="text-sm font-bold text-green-600">Optimal</span>

                        <span class="text-sm font-bold text-blue-600">Good</span>

                        <span class="text-sm font-bold text-purple-600">Efficient</span>

                </div>
            </div>
        `,
        about: [
            "SmartCity is an innovative IoT-powered platform that revolutionizes urban management by connecting city infrastructure, optimizing resource usage, and enhancing citizen services through intelligent data analysis.",
            "The platform integrates sensors, data analytics, and citizen feedback to create a responsive urban ecosystem that improves quality of life while reducing environmental impact."
        ],
        clientInfo: [
            "We collaborated with a municipal government and urban planning firm to develop a comprehensive smart city solution that could manage multiple urban systems simultaneously.",
            "The client required real-time monitoring capabilities, predictive analytics, and citizen engagement features to create a more efficient and livable city environment."
        ],
        challenges: [
            "The main challenge was integrating data from thousands of IoT sensors across the city while ensuring real-time processing and maintaining system reliability at scale.",
            "Another challenge was creating an intuitive interface that could present complex urban data in a way that was useful for both city officials and citizens."
        ],
        results: [
            "SmartCity successfully reduced traffic congestion by 30%, improved air quality by 25%, and decreased energy consumption by 20%. Citizen satisfaction increased by 40% with city services.",
            "The platform processed over 1 million data points daily and was recognized as a leading smart city solution, winning the Urban Innovation Award 2024."
        ],
        resultScreenshots: [
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=center" 
                     alt="City Dashboard" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-blue-50 p-2 rounded">
                    <p class="text-xs text-blue-600">Traffic</p>
                    <p class="text-lg font-bold text-blue-800">-30%</p>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center" 
                     alt="IoT Sensors" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-green-50 p-2 rounded">
                    <p class="text-xs text-green-600">Air Quality</p>
                    <p class="text-lg font-bold text-green-800">+25%</p>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop&crop=center" 
                     alt="City Analytics" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-purple-50 p-2 rounded">
                    <p class="text-xs text-purple-600">Energy</p>
                    <p class="text-lg font-bold text-purple-800">-20%</p>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop&crop=center" 
                     alt="City Success" 
                     class="w-full h-full object-cover">
                <div class="absolute top-4 right-4 bg-orange-50 p-2 rounded">
                    <p class="text-xs text-orange-600">Satisfaction</p>
                    <p class="text-lg font-bold text-orange-800">+40%</p>
                </div>
            </div>`
        ]
    }
    // 
    // ADD NEW PROJECTS HERE - They will automatically appear on both pages!
    // 
    // Example: To add a new project, uncomment and modify the code below:
    //
    // , newproject: {
    //     title: "New Project",
    //     description: "Description of your new project.",
    //     link: "https://newproject-demo.com",
    //     client: "Client Name",
    //     year: "2024",
    //     role: "Your Role",
    //     image: "https://images.unsplash.com/photo-XXXXX?w=800&h=600&fit=crop&crop=center",
    //     screenshot: `
    //         <div class="absolute inset-4 bg-white rounded-xl p-4">
    //             <h3 class="text-lg font-bold text-gray-900">NEW PROJECT</h3>
    //             <!-- Add your custom screenshot HTML here -->
    //         </div>
    //     `,
    //     about: [
    //         "First paragraph about the project...",
    //         "Second paragraph about the project..."
    //     ],
    //     clientInfo: [
    //         "Information about the client...",
    //         "More client details..."
    //     ],
    //     challenges: [
    //         "First challenge...",
    //         "Second challenge..."
    //     ],
    //     results: [
    //         "First result...",
    //         "Second result..."
    //     ],
    //     resultScreenshots: [
    //         `<div class="bg-gray-100 rounded-xl h-48 relative overflow-hidden">
    //             <div class="absolute inset-4 bg-white rounded-lg p-4">
    //                 <h3 class="text-sm font-bold text-gray-900">Result 1</h3>
    //             </div>
    //         </div>`,
    //         `<div class="bg-gray-100 rounded-xl h-48 relative overflow-hidden">
    //             <div class="absolute inset-4 bg-white rounded-lg p-4">
    //                 <h3 class="text-sm font-bold text-gray-900">Result 2</h3>
    //             </div>
    //         </div>`,
    //         `<div class="bg-gray-100 rounded-xl h-48 relative overflow-hidden">
    //             <div class="absolute inset-4 bg-white rounded-lg p-4">
    //                 <h3 class="text-sm font-bold text-gray-900">Result 3</h3>
    //             </div>
    //         </div>`
    //     ]
    // }
};

// Export the project data for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projectData;
}
