const projects = [
  // =====================================================
  // PROGETTI PRINCIPALI
  // =====================================================

  {
    id: "muslimbro",
    title: "MuslimBro",
    category: "featured",

    description:
      "Web app dedicata alla comunità musulmana con orari di preghiera, Corano, Qibla, Azkar e strumenti per la pratica quotidiana.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "REST API"
    ],

    type: "Web Application",
    year: "2025",

    overview:
      "MuslimBro nasce da un'esigenza personale: conoscere rapidamente gli orari di preghiera in base alla propria posizione, soprattutto durante gli spostamenti. Il progetto si è poi evoluto in una piattaforma con diversi strumenti dedicati alla pratica quotidiana.",

    features: [
      "Orari di preghiera basati sulla posizione",
      "Geolocalizzazione",
      "Corano in italiano e arabo",
      "Azkar della mattina e della sera",
      "Direzione della Qibla",
      "Cinque pilastri dell'Islam",
      "Design responsive"
    ],

    live: "https://muslimbro.it",
    github: ""
  },

  {
    id: "vitrina",
    title: "Vitrina",
    category: "featured",

    description:
      "E-commerce moderno sviluppato con Vue 3 e TypeScript, con catalogo prodotti, carrello, wishlist e gestione dello stato tramite Pinia.",

    technologies: [
      "Vue 3",
      "TypeScript",
      "Pinia",
      "Vue Router",
      "Axios",
      "Fake Store API"
    ],

    type: "E-commerce Web Application",
    year: "2026",

    overview:
      "Vitrina è un'applicazione e-commerce sviluppata con Vue 3 e TypeScript. Utilizza un'architettura a componenti, gestione centralizzata dello stato tramite Pinia e comunicazione con API esterne tramite Axios.",

    features: [
      "Catalogo prodotti tramite API",
      "Categorie dinamiche",
      "Filtri per categoria",
      "Pagina dettaglio prodotto",
      "Carrello con gestione quantità",
      "Wishlist",
      "Persistenza tramite LocalStorage",
      "Tema chiaro e scuro",
      "Design responsive"
    ],

    live: "https://qubica.vercel.app/",
    github: "https://github.com/abSarhan02/qubica"
  },
{
  id: "educap",

  title: "EduCap",

  category: "featured",

  description:
    "Quiz interattivo sviluppato per una fiera EduNext, ispirato al Cappello Parlante di Harry Potter, che suggerisce il percorso universitario più affine all'utente in base alle risposte fornite.",

  technologies: [
    "HTML",
    "CSS",
    "JavaScript"
  ],

  type: "Interactive Web Application",

  year: "2025",

  overview:
    "EduCap è un'applicazione web interattiva realizzata per una fiera EduNext. Il progetto riprende il concetto del Cappello Parlante di Harry Potter: l'utente risponde a una serie di domande e, sulla base delle risposte, viene individuato il percorso universitario più vicino ai suoi interessi e alle sue preferenze.",

  features: [
    "Quiz interattivo",
    "Domande a risposta multipla",
    "Calcolo del percorso universitario più affine",
    "Logica di valutazione delle risposte",
    "Risultato personalizzato",
    "Interfaccia responsive"
  ],

  live: "https://educap.edunext.eu",

  github: ""
},
  {
    id: "masr-delivery",
    title: "Masr Delivery",
    category: "featured",

    description:
      "Applicazione Java per la simulazione di una piattaforma di food delivery, con gestione di clienti, ristoranti, ordini, rider e promozioni.",

    technologies: [
      "Java",
      "OOP",
      "Collections",
      "Design Patterns"
    ],

    type: "Java Console Application",
    year: "2026",

    overview:
      "Masr Delivery è un'applicazione Java sviluppata per modellare una piattaforma di food delivery. Il progetto utilizza programmazione orientata agli oggetti, diverse collection Java e pattern di progettazione per mantenere la struttura del codice modulare.",

    features: [
      "Gestione clienti e ristoranti",
      "Gestione menu e ordini",
      "Gestione rider e veicoli",
      "Promozioni e calcolo prezzi",
      "PriorityQueue per la gestione degli ordini",
      "Builder, Factory e Strategy Pattern",
      "Observer Pattern",
      "Singleton",
      "Gestione delle eccezioni"
    ],

    live: "",
    github: "https://github.com/abSarhan02/masr-delivery-"
  },


  // =====================================================
  // JAVA
  // =====================================================

  {
    id: "speedway-rentals",
    title: "SpeedWay Rentals",
    category: "java",

    description:
      "Applicazione Java per la gestione di un sistema di autonoleggio sviluppata applicando i principi della programmazione orientata agli oggetti.",

    technologies: [
      "Java",
      "OOP"
    ],

    type: "Java Console Application",
    year: "2026",

    overview:
      "Applicazione Java sviluppata per mettere in pratica la programmazione orientata agli oggetti attraverso la gestione di automobili, clienti e differenti tipologie di veicoli.",

    features: [
      "Gestione automobili",
      "Gestione clienti",
      "Veicoli standard e luxury",
      "Classi e oggetti",
      "Incapsulamento",
      "Ereditarietà",
      "Polimorfismo"
    ],

    live: "",
    github: "https://github.com/abSarhan02/SpeedWay-Rentals"
  },

  {
    id: "library-management",
    title: "Library Management System",
    category: "java",

    description:
      "Sistema Java per la gestione di una biblioteca con libri, riviste, DVD, membri e operazioni di prestito.",

    technologies: [
      "Java",
      "OOP",
      "Collections"
    ],

    type: "Java Console Application",
    year: "2026",

    overview:
      "Sistema di gestione bibliotecaria sviluppato in Java per approfondire ereditarietà, polimorfismo, interfacce e gestione di differenti tipologie di elementi.",

    features: [
      "Gestione libri",
      "Gestione riviste",
      "Gestione DVD",
      "Gestione membri",
      "Prestiti e restituzioni",
      "Stato degli elementi",
      "Ereditarietà e polimorfismo",
      "Interfacce Java"
    ],

    live: "",
    github:
      "https://github.com/abSarhan02/Library-Management-System-"
  },

  {
    id: "cinema-booking",
    title: "Cinema Booking System",
    category: "java",

    description:
      "Applicazione Java console per la gestione delle prenotazioni e dei posti di un cinema.",

    technologies: [
      "Java",
      "OOP"
    ],

    type: "Java Console Application",
    year: "2026",

    overview:
      "Sistema di prenotazione sviluppato in Java per esercitare la modellazione ad oggetti e la gestione della logica applicativa.",

    features: [
      "Gestione dei posti",
      "Prenotazione biglietti",
      "Controllo disponibilità",
      "Gestione delle prenotazioni",
      "Programmazione orientata agli oggetti"
    ],

    live: "",
    github:
      "https://github.com/abSarhan02/Assignment-4-cinema-booking-system-"
  },


  // =====================================================
  // HTML / CSS / JAVASCRIPT
  // =====================================================

  {
    id: "mealify",
    title: "Mealify",
    category: "frontend",

    description:
      "Landing page responsive dedicata al mondo della ristorazione, sviluppata con HTML e CSS.",

    technologies: [
      "HTML",
      "CSS"
    ],

    type: "Frontend Website",
    year: "2024",

    overview:
      "Landing page responsive sviluppata per approfondire la realizzazione di layout moderni utilizzando HTML e CSS puro.",

    features: [
      "Responsive design",
      "Hero section",
      "Sezione chef",
      "Gallery",
      "Contact section",
      "Layout responsive"
    ],

    live: "https://absarhan02.github.io/Mealify/",
    github: "https://github.com/abSarhan02/Mealify"
  },

  {
    id: "fokir",
    title: "Fokir",
    category: "frontend",

    description:
      "Portfolio template responsive sviluppato utilizzando HTML e CSS.",

    technologies: [
      "HTML",
      "CSS"
    ],

    type: "Frontend Website",
    year: "2024",

    overview:
      "Progetto frontend focalizzato sulla realizzazione di un portfolio completo e responsive utilizzando HTML e CSS.",

    features: [
      "Responsive design",
      "Portfolio layout",
      "Sezione servizi",
      "Portfolio gallery",
      "Blog section",
      "Contact section"
    ],

    live: "https://absarhan02.github.io/Fokir/",
    github: "https://github.com/abSarhan02/Fokir"
  },

  {
    id: "bezel",
    title: "Bezel",
    category: "frontend",

    description:
      "Landing page multipurpose responsive sviluppata utilizzando Bootstrap 5, JavaScript e CSS personalizzato.",

    technologies: [
      "HTML",
      "CSS",
      "Bootstrap 5",
      "JavaScript"
    ],

    type: "Frontend Website",
    year: "2024",

    overview:
      "Sito multipurpose responsive sviluppato utilizzando Bootstrap 5 e CSS personalizzato, con diversi componenti tipici di un moderno sito aziendale.",

    features: [
      "Bootstrap Grid",
      "Responsive navbar",
      "Carousel",
      "Team section",
      "Services section",
      "Pricing section",
      "Responsive design"
    ],

    live: "https://absarhan02.github.io/Bezel/",
    github: "https://github.com/abSarhan02/Bezel"
  },

  {
    id: "devfolio",
    title: "DevFolio",
    category: "frontend",

    description:
      "Portfolio responsive sviluppato con Bootstrap 5, JavaScript e CSS personalizzato.",

    technologies: [
      "HTML",
      "CSS",
      "Bootstrap 5",
      "JavaScript"
    ],

    type: "Portfolio Website",
    year: "2024",

    overview:
      "Portfolio web sviluppato utilizzando Bootstrap 5 per approfondire grid system, componenti responsive e personalizzazione tramite CSS.",

    features: [
      "Responsive navbar",
      "Bootstrap Grid",
      "Sezione About",
      "Services cards",
      "Portfolio section",
      "Blog section",
      "Contact section"
    ],

    live: "https://absarhan02.github.io/Devfolio/",
    github: "https://github.com/abSarhan02/Devfolio"
  },

  {
    id: "grid-template",
    title: "Grid Template",
    category: "frontend",

    description:
      "Layout web sviluppato per approfondire CSS Grid e la costruzione di interfacce responsive.",

    technologies: [
      "HTML",
      "CSS",
      "CSS Grid"
    ],

    type: "Frontend Layout",
    year: "2024",

    overview:
      "Progetto dedicato allo studio di CSS Grid attraverso la realizzazione di un layout composto da sezioni di dimensioni e strutture differenti.",

    features: [
      "CSS Grid",
      "Layout multi-colonna",
      "Responsive design",
      "Gestione degli spazi",
      "Layout adattivo"
    ],

    live: "https://absarhan02.github.io/Grid-temp/",
    github: "https://github.com/abSarhan02/Grid-temp"
  },

  {
    id: "weather-app",
    title: "Weather App",
    category: "frontend",

    description:
      "Applicazione meteo che utilizza geolocalizzazione e API esterne per mostrare le previsioni dei giorni successivi.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap 5",
      "WeatherAPI"
    ],

    type: "Frontend Web Application",
    year: "2024",

    overview:
      "Applicazione meteo sviluppata in JavaScript con integrazione WeatherAPI. Utilizza la geolocalizzazione del browser oppure una località inserita dall'utente per recuperare le previsioni meteorologiche.",

    features: [
      "Geolocalizzazione",
      "Ricerca località",
      "WeatherAPI",
      "Previsioni meteo a 3 giorni",
      "Temperatura e condizioni meteo",
      "Umidità e vento",
      "Aggiornamento dinamico del DOM",
      "Responsive design"
    ],

    live: "https://absarhan02.github.io/weatherApp/",
    github: "https://github.com/abSarhan02/weatherApp"
  },

  {
    id: "yummy",
    title: "Yummy",
    category: "frontend",

    description:
      "Applicazione web per esplorare ricette e pasti tramite TheMealDB API.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap 5",
      "jQuery",
      "TheMealDB API"
    ],

    type: "Frontend Web Application",
    year: "2024",

    overview:
      "Applicazione frontend sviluppata utilizzando JavaScript, jQuery, Bootstrap e TheMealDB API per recuperare e visualizzare dinamicamente ricette e informazioni sui pasti.",

    features: [
      "Elenco dei pasti",
      "Ricerca per nome",
      "Ricerca per lettera",
      "Categorie",
      "Ricerca per area",
      "Ricerca per ingrediente",
      "Dettaglio ricetta",
      "Bootstrap Modal",
      "Integrazione TheMealDB API"
    ],

    live: "https://absarhan02.github.io/yummy/",
    github: "https://github.com/abSarhan02/yummy"
  },

  {
    id: "quote-generator",
    title: "Quote Generator",
    category: "frontend",

    description:
      "Generatore casuale di citazioni sviluppato con JavaScript e DOM manipulation.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript"
    ],

    type: "Frontend Web Application",
    year: "2024",

    overview:
      "Piccola applicazione JavaScript che genera citazioni casuali e permette di modificare dinamicamente il tema cromatico dell'interfaccia.",

    features: [
      "Generazione casuale di citazioni",
      "Autore della citazione",
      "Prevenzione della ripetizione immediata",
      "Cambio del tema cromatico",
      "DOM manipulation",
      "Event listeners"
    ],

    live: "https://absarhan02.github.io/QuoteGenerator/",
    github: "https://github.com/abSarhan02/QuoteGenerator"
  }
];

export default projects;