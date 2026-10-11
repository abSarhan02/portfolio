import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
} from "react-icons/fa";
import { SiSpringboot, SiTypescript, SiMysql } from "react-icons/si";

export const navigationItems = [
  { to: "/", key: "home" },
  { to: "/about", key: "about" },
  { to: "/projects", key: "projects" },
  { to: "/contact", key: "contact" },
];

export const translations = {
  it: {
    nav: {
      home: "Home",
      about: "Chi sono",
      projects: "Progetti",
      contact: "Contatti",
    },
    home: {
      intro: "Ciao, sono",
      role: "Full Stack Developer",
      specialist: "IT Specialist",
      description:
        "Sviluppo applicazioni web e software con particolare interesse per Java, Spring Boot e tecnologie frontend moderne.",
      projectButton: "Vedi i progetti",
      contactButton: "Contattami",
      availability: "Disponibile per nuove opportunità",
      run: "▶ Run",
      running: "Running...",
    },
    about: {
      label: "ABOUT ME",
      title: "Chi sono",
      intro:
        "Full Stack Developer e IT Specialist con esperienza nello sviluppo web, supporto IT e gestione di applicazioni software.",
      cards: [
        {
          number: "01",
          title: "Sviluppo",
          text: "Mi concentro principalmente sullo sviluppo con Java, Spring Boot e tecnologie frontend moderne come React, Angular e Vue.",
        },
        {
          number: "02",
          title: "Esperienza IT",
          text: "Ho lavorato anche in ambito supporto IT, e-learning, gestione applicativa e deployment.",
        },
        {
          number: "03",
          title: "Obiettivo",
          text: "Voglio continuare a crescere come sviluppatore, lavorando su applicazioni concrete e progetti strutturati.",
        },
      ],
    },
    contact: {
      label: "CONTACT",
      title: "Parliamone.",
      description:
        "Sono disponibile per opportunità lavorative, collaborazioni e progetti in ambito sviluppo software e IT.",
      email: "Email",
      linkedIn: "LinkedIn",
      gitHub: "GitHub",
    },
    projectDetail: {
      project: "PROGETTO",
      overview: "PANORAMICA",
      features: "FUNZIONALITÀ",
      mainFeatures: "Funzionalità principali",
      stack: "STACK",
      type: "TIPO",
      year: "ANNO",
      back: "Indietro",
      notFound: "Progetto non trovato",
      goBack: "Torna ai progetti",
      open: "Anteprima",
      liveDemo: "Live Demo",
      github: "GitHub",
    },
    languageToggle: {
      label: "IT",
      englishLabel: "EN",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    home: {
      intro: "Hi, I'm",
      role: "Full Stack Developer",
      specialist: "IT Specialist",
      description:
        "I build web and software applications with a special focus on Java, Spring Boot and modern frontend technologies.",
      projectButton: "See my projects",
      contactButton: "Contact me",
      availability: "Available for new opportunities",
      run: "▶ Run",
      running: "Running...",
    },
    about: {
      label: "ABOUT ME",
      title: "About me",
      intro:
        "Full Stack Developer and IT Specialist with experience in web development, IT support and application management.",
      cards: [
        {
          number: "01",
          title: "Development",
          text: "I mainly focus on Java, Spring Boot and modern frontend technologies such as React, Angular and Vue.",
        },
        {
          number: "02",
          title: "IT Experience",
          text: "I have also worked in IT support, e-learning, application management and deployment.",
        },
        {
          number: "03",
          title: "Goal",
          text: "I want to keep growing as a developer by working on practical applications and well-structured projects.",
        },
      ],
    },
    contact: {
      label: "CONTACT",
      title: "Let’s talk.",
      description:
        "I’m available for job opportunities, collaborations and projects in software development and IT.",
      email: "Email",
      linkedIn: "LinkedIn",
      gitHub: "GitHub",
    },
    projectDetail: {
      project: "PROJECT",
      overview: "OVERVIEW",
      features: "FEATURES",
      mainFeatures: "Main features",
      stack: "STACK",
      type: "TYPE",
      year: "YEAR",
      back: "Back",
      notFound: "Project not found",
      goBack: "Back to projects",
      open: "Preview",
      liveDemo: "Live Demo",
      github: "GitHub",
    },
    languageToggle: {
      label: "EN",
      englishLabel: "IT",
    },
  },
};

export const techStack = [
  { name: "Java", Icon: FaJava },
  { name: "Spring Boot", Icon: SiSpringboot },
  { name: "React", Icon: FaReact },
  { name: "JavaScript", Icon: FaJs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "HTML", Icon: FaHtml5 },
  { name: "CSS", Icon: FaCss3Alt },
  { name: "Bootstrap", Icon: FaBootstrap },
  { name: "MySQL", Icon: SiMysql },
  { name: "Git", Icon: FaGitAlt },
];
