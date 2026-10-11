const projectTranslations = {
  muslimbro: {
    description:
      "A web app for the Muslim community, featuring prayer times, the Quran, Qibla direction, Azkar and tools for daily practice.",
    type: "Web application",
    overview:
      "MuslimBro started from a personal need: quickly checking prayer times based on location, especially while travelling. It later grew into a platform with several tools for daily practice.",
    features: [
      "Location-based prayer times",
      "Geolocation",
      "Quran in Italian and Arabic",
      "Morning and evening Azkar",
      "Qibla direction",
      "The Five Pillars of Islam",
      "Responsive design",
    ],
  },
  vitrina: {
    description:
      "A modern e-commerce app built with Vue 3 and TypeScript, featuring a product catalogue, cart, wishlist and state management with Pinia.",
    type: "E-commerce web application",
    overview:
      "Vitrina is an e-commerce application built with Vue 3 and TypeScript. It uses a component-based architecture, centralized state management with Pinia and Axios to communicate with external APIs.",
    features: [
      "API-powered product catalogue",
      "Dynamic categories",
      "Category filters",
      "Product detail page",
      "Shopping cart with quantity management",
      "Wishlist",
      "LocalStorage persistence",
      "Light and dark themes",
      "Responsive design",
    ],
  },
  educap: {
    description:
      "An interactive quiz created for the EduNext fair. Inspired by the Sorting Hat from Harry Potter, it suggests a university course based on the user's answers.",
    type: "Interactive web application",
    overview:
      "EduCap is an interactive web application created for an EduNext fair. Inspired by the Sorting Hat from Harry Potter, it asks users a series of questions and identifies the university course that best matches their interests and preferences.",
    features: [
      "Interactive quiz",
      "Multiple-choice questions",
      "University course matching",
      "Answer scoring logic",
      "Personalized results",
      "Responsive interface",
    ],
  },
  "masr-delivery": {
    description:
      "A Java application that simulates a food delivery platform, including customers, restaurants, orders, couriers and promotions.",
    type: "Java console application",
    overview:
      "Masr Delivery is a Java application that models a food delivery platform. It uses object-oriented programming, Java collections and design patterns to keep the code modular.",
    features: [
      "Customer and restaurant management",
      "Menu and order management",
      "Courier and vehicle management",
      "Promotions and price calculation",
      "PriorityQueue for order management",
      "Builder, Factory and Strategy patterns",
      "Observer pattern",
      "Singleton pattern",
      "Exception handling",
    ],
  },
  "speedway-rentals": {
    description:
      "A Java car rental management application developed using object-oriented programming principles.",
    type: "Java console application",
    overview:
      "A Java application built to practise object-oriented programming by managing cars, customers and different types of vehicles.",
    features: [
      "Car management",
      "Customer management",
      "Standard and luxury vehicles",
      "Classes and objects",
      "Encapsulation",
      "Inheritance",
      "Polymorphism",
    ],
  },
  "library-management": {
    description:
      "A Java library management system for handling books, magazines, DVDs, members and lending operations.",
    type: "Java console application",
    overview:
      "A Java library management system built to explore inheritance, polymorphism, interfaces and the management of different types of items.",
    features: [
      "Book management",
      "Magazine management",
      "DVD management",
      "Member management",
      "Loans and returns",
      "Item availability status",
      "Inheritance and polymorphism",
      "Java interfaces",
    ],
  },
  "cinema-booking": {
    description:
      "A Java console application for managing cinema seats and bookings.",
    type: "Java console application",
    overview:
      "A Java booking system built to practise object-oriented modelling and application logic.",
    features: [
      "Seat management",
      "Ticket booking",
      "Availability checks",
      "Booking management",
      "Object-oriented programming",
    ],
  },
  mealify: {
    description:
      "A responsive landing page for a restaurant, built with HTML and CSS.",
    type: "Frontend website",
    overview:
      "A responsive landing page built to practise creating modern layouts using plain HTML and CSS.",
    features: [
      "Responsive design",
      "Hero section",
      "Chef section",
      "Gallery",
      "Contact section",
      "Responsive layout",
    ],
  },
  fokir: {
    description: "A responsive portfolio template built with HTML and CSS.",
    type: "Frontend website",
    overview:
      "A frontend project focused on building a complete, responsive portfolio using HTML and CSS.",
    features: [
      "Responsive design",
      "Portfolio layout",
      "Services section",
      "Portfolio gallery",
      "Blog section",
      "Contact section",
    ],
  },
  bezel: {
    description:
      "A responsive multipurpose landing page built with Bootstrap 5, JavaScript and custom CSS.",
    type: "Frontend website",
    overview:
      "A responsive multipurpose website built with Bootstrap 5 and custom CSS, featuring common components found on modern business websites.",
    features: [
      "Bootstrap grid",
      "Responsive navbar",
      "Carousel",
      "Team section",
      "Services section",
      "Pricing section",
      "Responsive design",
    ],
  },
  devfolio: {
    description:
      "A responsive portfolio built with Bootstrap 5, JavaScript and custom CSS.",
    type: "Portfolio website",
    overview:
      "A portfolio website built with Bootstrap 5 to practise the grid system, responsive components and CSS customization.",
    features: [
      "Responsive navbar",
      "Bootstrap grid",
      "About section",
      "Service cards",
      "Portfolio section",
      "Blog section",
      "Contact section",
    ],
  },
  "grid-template": {
    description:
      "A web layout built to explore CSS Grid and the creation of responsive interfaces.",
    type: "Frontend layout",
    overview:
      "A project focused on learning CSS Grid by building a layout made up of sections with different sizes and structures.",
    features: [
      "CSS Grid",
      "Multi-column layout",
      "Responsive design",
      "Spacing management",
      "Adaptive layout",
    ],
  },
  "weather-app": {
    description:
      "A weather app that uses geolocation and external APIs to show forecasts for the coming days.",
    type: "Frontend web application",
    overview:
      "A weather app built with JavaScript and WeatherAPI. It uses browser geolocation or a location entered by the user to retrieve forecasts.",
    features: [
      "Geolocation",
      "Location search",
      "WeatherAPI integration",
      "Three-day forecast",
      "Temperature and weather conditions",
      "Humidity and wind",
      "Dynamic DOM updates",
      "Responsive design",
    ],
  },
  yummy: {
    description:
      "A web app for exploring recipes and meals using TheMealDB API.",
    type: "Frontend web application",
    overview:
      "A frontend application built with JavaScript, jQuery, Bootstrap and TheMealDB API to retrieve and display recipes and meal information dynamically.",
    features: [
      "Meal listings",
      "Search by name",
      "Search by first letter",
      "Categories",
      "Search by area",
      "Search by ingredient",
      "Recipe details",
      "Bootstrap modal",
      "TheMealDB API integration",
    ],
  },
  "quote-generator": {
    description:
      "A random quote generator built with JavaScript and DOM manipulation.",
    type: "Frontend web application",
    overview:
      "A small JavaScript app that generates random quotes and lets users change the interface colour theme dynamically.",
    features: [
      "Random quote generation",
      "Quote author",
      "Prevention of immediate repeats",
      "Colour theme switching",
      "DOM manipulation",
      "Event listeners",
    ],
  },
};

export default projectTranslations;
