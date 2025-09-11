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
            `<div class="bg-gray-100 rounded-xl h-48 relative overflow-hidden">
                <div class="absolute inset-4 bg-white rounded-lg p-4">
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
            `<div class="bg-gray-100 rounded-xl h-48 relative overflow-hidden">
                <div class="absolute inset-4 bg-white rounded-lg p-4">
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
            `<div class="bg-gray-100 rounded-xl h-48 relative overflow-hidden">
                <div class="absolute inset-4 bg-white rounded-lg p-4">
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
            `<div class="bg-gray-100 rounded-2xl h-96 relative overflow-hidden">
                <div class="absolute inset-6 bg-white rounded-xl p-6">
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
                <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-30"></div>
            </div>`,
            `<div class="bg-gray-100 rounded-2xl h-96 relative overflow-hidden">
                <div class="absolute inset-6 bg-white rounded-xl p-6">
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
                <div class="absolute -top-4 -left-4 w-20 h-20 bg-purple-100 rounded-full opacity-40"></div>
            </div>`,
            `<div class="bg-gray-100 rounded-2xl h-96 relative overflow-hidden">
                <div class="absolute inset-6 bg-white rounded-xl p-6">
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
                <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-200 rounded-full opacity-30"></div>
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
            `<div class="bg-gray-100 rounded-xl h-48 relative overflow-hidden">
                <div class="absolute inset-4 bg-white rounded-lg p-4">
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
            `<div class="bg-gray-100 rounded-xl h-48 relative overflow-hidden">
                <div class="absolute inset-4 bg-white rounded-lg p-4">
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
            `<div class="bg-gray-100 rounded-xl h-48 relative overflow-hidden">
                <div class="absolute inset-4 bg-white rounded-lg p-4">
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
            `<div class="bg-gray-100 rounded-xl h-48 relative overflow-hidden">
                <div class="absolute inset-4 bg-white rounded-lg p-4">
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
            `<div class="bg-gray-100 rounded-xl h-48 relative overflow-hidden">
                <div class="absolute inset-4 bg-white rounded-lg p-4">
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
            `<div class="bg-gray-100 rounded-xl h-48 relative overflow-hidden">
                <div class="absolute inset-4 bg-white rounded-lg p-4">
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="text-sm font-bold text-gray-900">Map</h3>
                    </div>
                    <div class="w-full h-20 bg-gray-200 rounded relative">
                        <div class="absolute top-2 left-2 w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div class="absolute top-6 right-2 w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div class="absolute bottom-4 left-3 w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                </div>
            </div>`
        ]
    }
};

// Function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to load project data
function loadProjectData() {
    const projectId = getUrlParameter('project');
    
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
    
    // Update project screenshot
    document.getElementById('project-screenshot').innerHTML = project.screenshot;
    
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
    const detailUrl = `project-detail.html?project=${projectId}`;
    detailLink.href = detailUrl;
    
    // Add click event listener to ensure navigation works
    detailLink.onclick = function(e) {
        e.preventDefault();
        window.location.href = detailUrl;
    };
    
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
