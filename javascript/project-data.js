// Centralized Project Data - Define all projects here once
// This file is imported by both projects.js and project-detail.js
const projectData = {
    taskflow: {
        title: "TaskFlow",
        description: "Task management system with drag-and-drop, real-time collaboration, and responsive layout.",
        link: "https://taskflow-demo.com",
        client: "TechCorp Solutions",
        year: "2023",
        role: "Full Stack Developer",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center",
        screenshot: `
            <div class="bg-white rounded-xl p-4">
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
        `,
        about: [
            "TaskFlow is a comprehensive task management system designed to streamline workflow and enhance team collaboration. Built with modern web technologies, it provides an intuitive interface for managing projects, tracking progress, and facilitating real-time communication.",
            "The application features drag-and-drop functionality, customizable dashboards, and advanced filtering options to help teams stay organized and productive."
        ],
        clientInfo: [
            "We worked with a mid-size tech startup that was struggling with project management across multiple teams. They needed a solution that could handle complex workflows while remaining user-friendly.",
            "The client required real-time collaboration features, mobile responsiveness, and integration capabilities with their existing tools."
        ],
        challenges: [
            "The main challenge was creating a seamless drag-and-drop experience that worked consistently across different devices and browsers. We also needed to implement real-time synchronization without performance issues.",
            "Another challenge was designing an intuitive interface that could handle complex project hierarchies while remaining simple enough for daily use."
        ],
        results: [
            "TaskFlow successfully reduced project completion time by 40% and improved team collaboration efficiency by 60%. The real-time features eliminated communication delays and the intuitive interface reduced training time for new users.",
            "The application now serves over 500 active users daily and has become the primary project management tool for the organization."
        ],
        resultScreenshots: [
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center" 
                     alt="Dashboard Analytics" 
                     class="w-full h-full object-cover">
                <div class="bg-white rounded-lg p-4 opacity-95">
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="text-sm font-bold text-gray-900">Dashboard</h3>
                    </div>
                    <div class="grid grid-cols-3 gap-2">
                        <div class="bg-blue-50 p-2 rounded">
                            <p class="text-xs text-blue-600">Ongoing</p>
                            <p class="text-lg font-bold text-blue-800">12</p>
                        </div>
                        <div class="bg-green-50 p-2 rounded">
                            <p class="text-xs text-green-600">Completed</p>
                            <p class="text-lg font-bold text-green-800">28</p>
                        </div>
                        <div class="bg-purple-50 p-2 rounded">
                            <p class="text-xs text-purple-600">Summary</p>
                            <p class="text-lg font-bold text-purple-800">40</p>
                        </div>
                    </div>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center" 
                     alt="Analytics Charts" 
                     class="w-full h-full object-cover">
                <div class="bg-white rounded-lg p-4 opacity-95">
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="text-sm font-bold text-gray-900">Analytics</h3>
                    </div>
                    <div class="space-y-2">
                        <div class="h-2 bg-gray-200 rounded-full">
                            <div class="h-2 bg-purple-500 rounded-full w-3/4"></div>
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full">
                            <div class="h-2 bg-blue-500 rounded-full w-1/2"></div>
                        </div>
                    </div>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=center" 
                     alt="Team Collaboration" 
                     class="w-full h-full object-cover">
                <div class="bg-white rounded-lg p-4 opacity-95">
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="text-sm font-bold text-gray-900">Team</h3>
                    </div>
                    <div class="flex space-x-2">
                        <div class="w-8 h-8 bg-blue-500 rounded-full"></div>
                        <div class="w-8 h-8 bg-green-500 rounded-full"></div>
                        <div class="w-8 h-8 bg-purple-500 rounded-full"></div>
                    </div>
                </div>
            </div>`
        ]
    },
    ecocart: {
        title: "EcoCart",
        description: "E-commerce platform promoting eco-friendly products with payment integration.",
        link: "https://ecocart-demo.com",
        client: "Jane Doe",
        year: "2021",
        role: "Lead Designer",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
        screenshot: `
            <div class="bg-white rounded-xl p-4">
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
            `<div class="rounded-2xl h-96 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center" 
                     alt="E-commerce Shopping" 
                     class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-black bg-opacity-30"></div>
                <div class="bg-white rounded-xl p-6 opacity-95">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-xl font-bold text-gray-900">ECO SHOP</h3>
                        <div class="w-8 h-8 bg-gray-200 rounded-full"></div>
                    </div>
                    <div class="flex space-x-6">
                        <div class="w-32 h-32 bg-gray-200 rounded-xl flex items-center justify-center">
                            <div class="w-24 h-24 bg-purple-200 rounded-lg"></div>
                        </div>
                        <div class="flex-1">
                            <h4 class="text-lg font-bold text-gray-900 mb-2">Airpods-Max</h4>
                            <p class="text-2xl font-bold text-gray-900 mb-2">$549.00</p>
                            <p class="text-sm text-gray-500 mb-4">or $99.99/month</p>
                            <div class="flex space-x-2 mb-4">
                                <div class="w-6 h-6 bg-gray-400 rounded-full"></div>
                                <div class="w-6 h-6 bg-white border-2 border-gray-300 rounded-full"></div>
                                <div class="w-6 h-6 bg-black rounded-full"></div>
                                <div class="w-6 h-6 bg-purple-400 rounded-full"></div>
                                <div class="w-6 h-6 bg-green-400 rounded-full"></div>
                            </div>
                            <div class="flex space-x-2 mb-4">
                                <button class="px-4 py-2 bg-gray-100 rounded-lg text-sm">-</button>
                                <span class="px-4 py-2 text-sm">1</span>
                                <button class="px-4 py-2 bg-gray-100 rounded-lg text-sm">+</button>
                            </div>
                            <div class="flex space-x-2">
                                <button class="px-6 py-2 bg-purple-600 text-white text-sm rounded-lg">Buy Now</button>
                                <button class="px-6 py-2 border border-gray-300 text-sm rounded-lg">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`,
            `<div class="rounded-2xl h-96 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop&crop=center" 
                     alt="Online Shopping Cart" 
                     class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-black bg-opacity-30"></div>
                <div class="bg-white rounded-xl p-6 opacity-95">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-xl font-bold text-gray-900">ECO SHOP</h3>
                        <div class="w-8 h-8 bg-gray-200 rounded-full"></div>
                    </div>
                    <div class="flex space-x-6">
                        <div class="w-32 h-32 bg-gray-200 rounded-xl flex items-center justify-center">
                            <div class="w-24 h-24 bg-purple-200 rounded-lg"></div>
                        </div>
                        <div class="flex-1">
                            <h4 class="text-lg font-bold text-gray-900 mb-2">Airpods-Max</h4>
                            <p class="text-2xl font-bold text-gray-900 mb-2">$549.00</p>
                            <p class="text-sm text-gray-500 mb-4">or $99.99/month</p>
                            <div class="flex space-x-2 mb-4">
                                <div class="w-6 h-6 bg-gray-400 rounded-full"></div>
                                <div class="w-6 h-6 bg-white border-2 border-gray-300 rounded-full"></div>
                                <div class="w-6 h-6 bg-black rounded-full"></div>
                                <div class="w-6 h-6 bg-purple-400 rounded-full"></div>
                                <div class="w-6 h-6 bg-green-400 rounded-full"></div>
                            </div>
                            <div class="space-y-2 text-sm text-gray-600">
                                <p>✓ Free Delivery</p>
                                <p>✓ Return Delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`,
            `<div class="rounded-2xl h-96 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center" 
                     alt="E-commerce Product Gallery" 
                     class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-black bg-opacity-30"></div>
                <div class="bg-white rounded-xl p-6 opacity-95">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-xl font-bold text-gray-900">ECO SHOP</h3>
                        <div class="w-8 h-8 bg-gray-200 rounded-full"></div>
                    </div>
                    <div class="flex space-x-6">
                        <div class="w-32 h-32 bg-gray-200 rounded-xl flex items-center justify-center">
                            <div class="w-24 h-24 bg-purple-200 rounded-lg"></div>
                        </div>
                        <div class="flex-1">
                            <h4 class="text-lg font-bold text-gray-900 mb-2">Airpods-Max</h4>
                            <p class="text-2xl font-bold text-gray-900 mb-2">$549.00</p>
                            <p class="text-sm text-gray-500 mb-4">or $99.99/month</p>
                            <div class="flex space-x-2 mb-4">
                                <div class="w-6 h-6 bg-gray-400 rounded-full"></div>
                                <div class="w-6 h-6 bg-white border-2 border-gray-300 rounded-full"></div>
                                <div class="w-6 h-6 bg-black rounded-full"></div>
                                <div class="w-6 h-6 bg-purple-400 rounded-full"></div>
                                <div class="w-6 h-6 bg-green-400 rounded-full"></div>
                            </div>
                            <div class="flex space-x-2">
                                <button class="px-6 py-2 bg-purple-600 text-white text-sm rounded-lg">Buy Now</button>
                                <button class="px-6 py-2 border border-gray-300 text-sm rounded-lg">Add to Cart</button>
                            </div>
                            <div class="mt-4 grid grid-cols-3 gap-2">
                                <div class="w-12 h-12 bg-gray-200 rounded"></div>
                                <div class="w-12 h-12 bg-gray-200 rounded"></div>
                                <div class="w-12 h-12 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        ]
    },
    eventplanner: {
        title: "EventPlanner",
        description: "Event planning web application, enabling users to organise and manage events effortlessly.",
        link: "https://eventplanner-demo.com",
        client: "Event Solutions Inc",
        year: "2022",
        role: "UI/UX Designer",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop&crop=center",
        screenshot: `
            <div class="bg-white rounded-xl p-4">
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
        `,
        about: [
            "EventPlanner is a comprehensive event management platform that simplifies the entire event planning process. From initial concept to post-event analysis, it provides tools for every aspect of event organization.",
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
                <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop&crop=center" 
                     alt="Event Planning Calendar" 
                     class="w-full h-full object-cover">
                <div class="bg-white rounded-lg p-4 opacity-95">
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="text-sm font-bold text-gray-900">Calendar</h3>
                    </div>
                    <div class="grid grid-cols-7 gap-1">
                        <div class="h-6 bg-purple-100 rounded flex items-center justify-center">
                            <span class="text-xs">1</span>
                        </div>
                        <div class="h-6 bg-gray-100 rounded"></div>
                        <div class="h-6 bg-purple-100 rounded flex items-center justify-center">
                            <span class="text-xs">2</span>
                        </div>
                        <div class="h-6 bg-gray-100 rounded"></div>
                        <div class="h-6 bg-purple-100 rounded flex items-center justify-center">
                            <span class="text-xs">3</span>
                        </div>
                        <div class="h-6 bg-gray-100 rounded"></div>
                        <div class="h-6 bg-gray-100 rounded"></div>
                    </div>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&crop=center" 
                     alt="Event Guests Management" 
                     class="w-full h-full object-cover">
                <div class="bg-white rounded-lg p-4 opacity-95">
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="text-sm font-bold text-gray-900">Guests</h3>
                    </div>
                    <div class="space-y-2">
                        <div class="flex items-center space-x-2 p-2 bg-purple-50 rounded">
                            <div class="w-6 h-6 bg-gray-200 rounded-full"></div>
                            <span class="text-xs">John Smith</span>
                        </div>
                        <div class="flex items-center space-x-2 p-2 bg-purple-50 rounded">
                            <div class="w-6 h-6 bg-gray-200 rounded-full"></div>
                            <span class="text-xs">Jane Doe</span>
                        </div>
                    </div>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1519167758481-83f142bb8b5a?w=800&h=600&fit=crop&crop=center" 
                     alt="Event Vendors Management" 
                     class="w-full h-full object-cover">
                <div class="bg-white rounded-lg p-4 opacity-95">
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="text-sm font-bold text-gray-900">Vendors</h3>
                    </div>
                    <div class="space-y-2">
                        <div class="p-2 bg-gray-50 rounded">
                            <p class="text-xs font-medium">Catering Co.</p>
                            <p class="text-xs text-gray-500">Confirmed</p>
                        </div>
                        <div class="p-2 bg-gray-50 rounded">
                            <p class="text-xs font-medium">Audio Visual</p>
                            <p class="text-xs text-gray-500">Pending</p>
                        </div>
                    </div>
                </div>
            </div>`
        ]
    },
    foodiefinder: {
        title: "FoodieFinder",
        description: "Modern-looking restaurant discovery platform featuring real-time search, reviews, and ratings.",
        link: "https://foodiefinder-demo.com",
        client: "Food Network Co",
        year: "2023",
        role: "Frontend Developer",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&crop=center",
        screenshot: `
            <div class="bg-white rounded-xl p-4">
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
                    </div>
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
                <div class="bg-white rounded-lg p-4 opacity-95">
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="text-sm font-bold text-gray-900">Search</h3>
                    </div>
                    <div class="bg-gray-100 rounded p-2 mb-2">
                        <p class="text-xs text-gray-600">Where do you want to eat?</p>
                    </div>
                    <div class="flex space-x-1">
                        <span class="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Nearest</span>
                        <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">Vegetarian</span>
                    </div>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&crop=center" 
                     alt="Restaurant Listing" 
                     class="w-full h-full object-cover">
                <div class="bg-white rounded-lg p-4 opacity-95">
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="text-sm font-bold text-gray-900">Restaurant</h3>
                    </div>
                    <div class="flex items-center space-x-2 p-2 bg-orange-50 rounded">
                        <div class="w-8 h-8 bg-gray-200 rounded"></div>
                        <div>
                            <p class="text-xs font-medium">The Spoon & Bowl</p>
                            <p class="text-xs text-gray-500">★ 4.8 • 2.1 km</p>
                        </div>
                    </div>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&crop=center" 
                     alt="Restaurant Map View" 
                     class="w-full h-full object-cover">
                <div class="bg-white rounded-lg p-4 opacity-95">
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="text-sm font-bold text-gray-900">Map</h3>
                    </div>
                    <div class="w-full h-20 bg-gray-200 rounded relative">
                    </div>
                </div>
            </div>`
        ]
    },
    healthtracker: {
        title: "HealthTracker",
        description: "Comprehensive health and fitness tracking app with AI-powered insights and personalized recommendations.",
        link: "https://healthtracker-demo.com",
        client: "Wellness Solutions Ltd",
        year: "2024",
        role: "Full Stack Developer",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
        screenshot: `
            <div class="bg-white rounded-xl p-4">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="text-lg font-bold text-gray-900">HEALTH TRACKER</h3>
                    <div class="w-6 h-6 bg-green-200 rounded-full"></div>
                </div>
                <div class="space-y-3">
                    <div class="flex items-center justify-between p-2 bg-green-50 rounded-lg">
                        <div class="flex items-center space-x-2">
                            <div class="w-4 h-4 bg-green-500 rounded-full"></div>
                            <span class="text-sm">Steps Today</span>
                        </div>
                        <span class="text-sm font-bold text-green-600">8,247</span>
                    </div>
                    <div class="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                        <div class="flex items-center space-x-2">
                            <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
                            <span class="text-sm">Water Intake</span>
                        </div>
                        <span class="text-sm font-bold text-blue-600">6/8 glasses</span>
                    </div>
                    <div class="flex items-center justify-between p-2 bg-purple-50 rounded-lg">
                        <div class="flex items-center space-x-2">
                            <div class="w-4 h-4 bg-purple-500 rounded-full"></div>
                            <span class="text-sm">Sleep Quality</span>
                        </div>
                        <span class="text-sm font-bold text-purple-600">85%</span>
                    </div>
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
                <div class="bg-white rounded-lg p-4 opacity-95">
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="text-sm font-bold text-gray-900">Dashboard</h3>
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                        <div class="bg-green-50 p-2 rounded">
                            <p class="text-xs text-green-600">Steps</p>
                            <p class="text-lg font-bold text-green-800">8,247</p>
                        </div>
                        <div class="bg-blue-50 p-2 rounded">
                            <p class="text-xs text-blue-600">Calories</p>
                            <p class="text-lg font-bold text-blue-800">2,340</p>
                        </div>
                        <div class="bg-purple-50 p-2 rounded">
                            <p class="text-xs text-purple-600">Heart Rate</p>
                            <p class="text-lg font-bold text-purple-800">72 BPM</p>
                        </div>
                        <div class="bg-orange-50 p-2 rounded">
                            <p class="text-xs text-orange-600">Sleep</p>
                            <p class="text-lg font-bold text-orange-800">7.5h</p>
                        </div>
                    </div>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center" 
                     alt="Fitness Tracking" 
                     class="w-full h-full object-cover">
                <div class="bg-white rounded-lg p-4 opacity-95">
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="text-sm font-bold text-gray-900">Workout</h3>
                    </div>
                    <div class="space-y-2">
                        <div class="flex items-center justify-between">
                            <span class="text-xs">Running</span>
                            <span class="text-xs font-bold text-green-600">30 min</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-xs">Cycling</span>
                            <span class="text-xs font-bold text-blue-600">45 min</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-xs">Yoga</span>
                            <span class="text-xs font-bold text-purple-600">20 min</span>
                        </div>
                    </div>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop&crop=center" 
                     alt="Health Analytics" 
                     class="w-full h-full object-cover">
                <div class="bg-white rounded-lg p-4 opacity-95">
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="text-sm font-bold text-gray-900">Analytics</h3>
                    </div>
                    <div class="space-y-2">
                        <div class="h-2 bg-gray-200 rounded-full">
                            <div class="h-2 bg-green-500 rounded-full w-4/5"></div>
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full">
                            <div class="h-2 bg-blue-500 rounded-full w-3/4"></div>
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full">
                            <div class="h-2 bg-purple-500 rounded-full w-2/3"></div>
                        </div>
                    </div>
                </div>
            </div>`
        ]
    },
    cryptotracker: {
        title: "CryptoTracker",
        description: "Real-time cryptocurrency portfolio tracker with advanced analytics and market insights.",
        link: "https://cryptotracker-demo.com",
        client: "Digital Finance Corp",
        year: "2024",
        role: "Frontend Developer",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&crop=center",
        screenshot: `
            <div class="bg-white rounded-xl p-4">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="text-lg font-bold text-gray-900">CRYPTO TRACKER</h3>
                    <div class="w-6 h-6 bg-yellow-200 rounded-full"></div>
                </div>
                <div class="space-y-3">
                    <div class="flex items-center justify-between p-2 bg-yellow-50 rounded-lg">
                        <div class="flex items-center space-x-2">
                            <div class="w-4 h-4 bg-yellow-500 rounded-full"></div>
                            <span class="text-sm">Bitcoin</span>
                        </div>
                        <span class="text-sm font-bold text-yellow-600">$45,230</span>
                    </div>
                    <div class="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                        <div class="flex items-center space-x-2">
                            <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
                            <span class="text-sm">Ethereum</span>
                        </div>
                        <span class="text-sm font-bold text-blue-600">$3,120</span>
                    </div>
                    <div class="flex items-center justify-between p-2 bg-green-50 rounded-lg">
                        <div class="flex items-center space-x-2">
                            <div class="w-4 h-4 bg-green-500 rounded-full"></div>
                            <span class="text-sm">Portfolio</span>
                        </div>
                        <span class="text-sm font-bold text-green-600">+12.5%</span>
                    </div>
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
                <div class="bg-white rounded-lg p-4 opacity-95">
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="text-sm font-bold text-gray-900">Portfolio</h3>
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                        <div class="bg-yellow-50 p-2 rounded">
                            <p class="text-xs text-yellow-600">BTC</p>
                            <p class="text-lg font-bold text-yellow-800">$45,230</p>
                        </div>
                        <div class="bg-blue-50 p-2 rounded">
                            <p class="text-xs text-blue-600">ETH</p>
                            <p class="text-lg font-bold text-blue-800">$3,120</p>
                        </div>
                        <div class="bg-green-50 p-2 rounded">
                            <p class="text-xs text-green-600">Total</p>
                            <p class="text-lg font-bold text-green-800">$125K</p>
                        </div>
                        <div class="bg-red-50 p-2 rounded">
                            <p class="text-xs text-red-600">24h</p>
                            <p class="text-lg font-bold text-red-800">+5.2%</p>
                        </div>
                    </div>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&crop=center" 
                     alt="Market Analysis" 
                     class="w-full h-full object-cover">
                <div class="bg-white rounded-lg p-4 opacity-95">
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="text-sm font-bold text-gray-900">Market</h3>
                    </div>
                    <div class="space-y-2">
                        <div class="h-2 bg-gray-200 rounded-full">
                            <div class="h-2 bg-yellow-500 rounded-full w-4/5"></div>
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full">
                            <div class="h-2 bg-blue-500 rounded-full w-3/4"></div>
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full">
                            <div class="h-2 bg-green-500 rounded-full w-2/3"></div>
                        </div>
                    </div>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&crop=center" 
                     alt="Trading Charts" 
                     class="w-full h-full object-cover">
                <div class="bg-white rounded-lg p-4 opacity-95">
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="text-sm font-bold text-gray-900">Charts</h3>
                    </div>
                    <div class="w-full h-20 bg-gray-200 rounded relative">
                    </div>
                </div>
            </div>`
        ]
    },
    socialconnect: {
        title: "SocialConnect",
        description: "Professional networking platform connecting industry experts and fostering meaningful business relationships.",
        link: "https://socialconnect-demo.com",
        client: "Networking Solutions Inc",
        year: "2023",
        role: "UI/UX Designer",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center",
        screenshot: `
            <div class="bg-white rounded-xl p-4">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="text-lg font-bold text-gray-900">SOCIAL CONNECT</h3>
                    <div class="w-6 h-6 bg-blue-200 rounded-full"></div>
                </div>
                <div class="space-y-3">
                    <div class="flex items-center space-x-2 p-2 bg-blue-50 rounded-lg">
                        <div class="w-6 h-6 bg-gray-200 rounded-full"></div>
                        <div>
                            <p class="text-xs font-medium">Sarah Johnson</p>
                            <p class="text-xs text-gray-500">Product Manager</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-2 p-2 bg-green-50 rounded-lg">
                        <div class="w-6 h-6 bg-gray-200 rounded-full"></div>
                        <div>
                            <p class="text-xs font-medium">Mike Chen</p>
                            <p class="text-xs text-gray-500">Tech Lead</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-2 p-2 bg-purple-50 rounded-lg">
                        <div class="w-6 h-6 bg-gray-200 rounded-full"></div>
                        <div>
                            <p class="text-xs font-medium">Emma Davis</p>
                            <p class="text-xs text-gray-500">Designer</p>
                        </div>
                    </div>
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
                <div class="bg-white rounded-lg p-4 opacity-95">
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="text-sm font-bold text-gray-900">Network</h3>
                    </div>
                    <div class="flex space-x-2">
                        <div class="w-8 h-8 bg-blue-500 rounded-full"></div>
                        <div class="w-8 h-8 bg-green-500 rounded-full"></div>
                        <div class="w-8 h-8 bg-purple-500 rounded-full"></div>
                        <div class="w-8 h-8 bg-yellow-500 rounded-full"></div>
                    </div>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center" 
                     alt="Connection Matching" 
                     class="w-full h-full object-cover">
                <div class="bg-white rounded-lg p-4 opacity-95">
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="text-sm font-bold text-gray-900">Matches</h3>
                    </div>
                    <div class="space-y-2">
                        <div class="flex items-center justify-between">
                            <span class="text-xs">Tech Industry</span>
                            <span class="text-xs font-bold text-blue-600">85%</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-xs">Design</span>
                            <span class="text-xs font-bold text-green-600">72%</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-xs">Marketing</span>
                            <span class="text-xs font-bold text-purple-600">68%</span>
                        </div>
                    </div>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center" 
                     alt="Professional Events" 
                     class="w-full h-full object-cover">
                <div class="bg-white rounded-lg p-4 opacity-95">
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="text-sm font-bold text-gray-900">Events</h3>
                    </div>
                    <div class="space-y-2">
                        <div class="p-2 bg-blue-50 rounded">
                            <p class="text-xs font-medium">Tech Meetup</p>
                            <p class="text-xs text-gray-500">Tomorrow 6PM</p>
                        </div>
                        <div class="p-2 bg-green-50 rounded">
                            <p class="text-xs font-medium">Design Workshop</p>
                            <p class="text-xs text-gray-500">Friday 2PM</p>
                        </div>
                    </div>
                </div>
            </div>`
        ]
    },
    smartcity: {
        title: "SmartCity",
        description: "IoT-powered smart city management platform optimizing urban infrastructure and citizen services.",
        link: "https://smartcity-demo.com",
        client: "Urban Innovation Labs",
        year: "2024",
        role: "Full Stack Developer",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=center",
        screenshot: `
            <div class="bg-white rounded-xl p-4">
                <div class="flex justify-between items-center mb-3">
                    <h3 class="text-lg font-bold text-gray-900">SMART CITY</h3>
                    <div class="w-6 h-6 bg-green-200 rounded-full"></div>
                </div>
                <div class="space-y-3">
                    <div class="flex items-center justify-between p-2 bg-green-50 rounded-lg">
                        <div class="flex items-center space-x-2">
                            <div class="w-4 h-4 bg-green-500 rounded-full"></div>
                            <span class="text-sm">Traffic Flow</span>
                        </div>
                        <span class="text-sm font-bold text-green-600">Optimal</span>
                    </div>
                    <div class="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                        <div class="flex items-center space-x-2">
                            <div class="w-4 h-4 bg-blue-500 rounded-full"></div>
                            <span class="text-sm">Air Quality</span>
                        </div>
                        <span class="text-sm font-bold text-blue-600">Good</span>
                    </div>
                    <div class="flex items-center justify-between p-2 bg-purple-50 rounded-lg">
                        <div class="flex items-center space-x-2">
                            <div class="w-4 h-4 bg-purple-500 rounded-full"></div>
                            <span class="text-sm">Energy Usage</span>
                        </div>
                        <span class="text-sm font-bold text-purple-600">Efficient</span>
                    </div>
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
                <div class="bg-white rounded-lg p-4 opacity-95">
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="text-sm font-bold text-gray-900">Dashboard</h3>
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                        <div class="bg-green-50 p-2 rounded">
                            <p class="text-xs text-green-600">Traffic</p>
                            <p class="text-lg font-bold text-green-800">Optimal</p>
                        </div>
                        <div class="bg-blue-50 p-2 rounded">
                            <p class="text-xs text-blue-600">Air Quality</p>
                            <p class="text-lg font-bold text-blue-800">Good</p>
                        </div>
                        <div class="bg-purple-50 p-2 rounded">
                            <p class="text-xs text-purple-600">Energy</p>
                            <p class="text-lg font-bold text-purple-800">Efficient</p>
                        </div>
                        <div class="bg-orange-50 p-2 rounded">
                            <p class="text-xs text-orange-600">Services</p>
                            <p class="text-lg font-bold text-orange-800">Active</p>
                        </div>
                    </div>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=center" 
                     alt="IoT Sensors" 
                     class="w-full h-full object-cover">
                <div class="bg-white rounded-lg p-4 opacity-95">
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="text-sm font-bold text-gray-900">Sensors</h3>
                    </div>
                    <div class="space-y-2">
                        <div class="flex items-center justify-between">
                            <span class="text-xs">Traffic Sensors</span>
                            <span class="text-xs font-bold text-green-600">1,247</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-xs">Air Quality</span>
                            <span class="text-xs font-bold text-blue-600">89</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-xs">Energy Meters</span>
                            <span class="text-xs font-bold text-purple-600">456</span>
                        </div>
                    </div>
                </div>
            </div>`,
            `<div class="rounded-xl h-48 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=center" 
                     alt="City Analytics" 
                     class="w-full h-full object-cover">
                <div class="bg-white rounded-lg p-4 opacity-95">
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="text-sm font-bold text-gray-900">Analytics</h3>
                    </div>
                    <div class="space-y-2">
                        <div class="h-2 bg-gray-200 rounded-full">
                            <div class="h-2 bg-green-500 rounded-full w-4/5"></div>
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full">
                            <div class="h-2 bg-blue-500 rounded-full w-3/4"></div>
                        </div>
                        <div class="h-2 bg-gray-200 rounded-full">
                            <div class="h-2 bg-purple-500 rounded-full w-2/3"></div>
                        </div>
                    </div>
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
