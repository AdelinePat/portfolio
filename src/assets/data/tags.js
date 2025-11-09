const icons = {
  // General
  personal: `<i class="fa-solid fa-briefcase"></i>`,
  school: `<i class="fa-solid fa-graduation-cap"></i>`,
  teamwork: `<i class="fa-solid fa-users"></i>`,
  // Versionning
  git: `<i class="fa-brands fa-git-alt"></i>`,
  // OS & Virtualization
  linux: `<i class="fa-brands fa-linux"></i>`,
  vmware: "",
  virtualization: "",
  osInstall: "",
  // Design
  figma: `<i class="fa-brands fa-figma"></i>`,
  // Databases
  mysql: `<i class="devicon-mysql-original"></i>`,
  postgresql: `<i class="devicon-postgresql-plain"></i>`,
  // C & C++
  c: "",
  cpp: `<i class="devicon-cplusplus-plain"></i>`,
  cmake: `<i class="devicon-cmake-plain"></i>`,
  makefile: "",
  //  Java
  java: `<i class="fa-brands fa-java"></i>`,
  maven: `<i class="devicon-maven-plain"></i>`,
  junit: `<i class="devicon-junit-plain-wordmark"></i>`,
  // Python
  python: `<i class="fa-brands fa-python"></i>`,
  // GUI or output
  unity: `<i class="devicon-unity-plain"></i>`,
  console: `<i class="fa-solid fa-terminal"></i>`,
  pygame: "",
  tkinter: "",
  javaFX: "",
  // Web languages
  html: `<i class="fa-brands fa-html5"></i>`,
  css: `<i class="fa-brands fa-css3-alt"></i>`,
  sass: `<i class="fa-brands fa-sass"></i>`,
  javascript: `<i class="fa-brands fa-js"></i>`,
  // OOP
  oop: `<i class="fa-sharp fa-solid fa-code"></i>`,
  designPattern: `<i class="fa-solid fa-puzzle-piece"></i>`,
  // Network
  socket: `<i class="fa-solid fa-network-wired"></i>`,
  // Concept
  ideation: "",
  unitaryTest: `<i class="fa-solid fa-vial"></i>`,
  algorithmic: `<i class="fa-solid fa-gears"></i>`,
  errorHandling: `<i class="fa-solid fa-triangle-exclamation"></i>`,
  //   Architecture
  mvc: `<i class="fa-solid fa-diagram-project"></i>`,
  designSystem: "",
  // Tools
  regex: "",
};

export const categories = {
  personal: "Projet personnel",
  school: "Projet scolaire",
  general: "Général",
  web: "Web",
  software: "Logiciel",
  databases: "Bases de Données",
  oop: "Programmation Orientée Objet",
};

export const tags = {
  // General
  personal: {
    name: "Personnel",
    icon: icons.personal,
    category: categories.personal,
  },
  school: {
    name: "Scolaire",
    icon: icons.school,
    category: categories.school,
  },

  teamwork: {
    name: "Travail d'équipe",
    icon: icons.teamwork,
    category: categories.general,
  },
  // Versionning
  git: {
    name: "Git",
    icon: icons.git,
    category: categories.general,
  },
  // Design
  figma: {
    name: "Figma",
    icon: icons.figma,
    category: categories.general,
  },
  // GUI or output
  console: {
    name: "Console",
    icon: icons.console,
    category: categories.general,
  },
  // Network
  socket: {
    name: "Socket",
    icon: icons.socket,
    category: categories.general,
  },
  // Concept
  ideation: {
    name: "Ideation",
    icon: icons.ideation,
    category: categories.general,
  },
  algorithmic: {
    name: "Algorithmique",
    icon: icons.algorithmic,
    category: categories.general,
  },
  unitaryTest: {
    name: "Test unitaire",
    icon: icons.unitaryTest,
    category: categories.general,
  },
  errorHandling: {
    name: "Gestion d'erreur",
    icon: icons.errorHandling,
    category: categories.general,
  },
  //   Architecture
  mvc: {
    name: "MVC",
    icon: icons.mvc,
    category: categories.general,
  },
  designSystem: {
    name: "Design system",
    icon: icons.designSystem,
    category: categories.general,
  },
  // OS & Virtualization
  linux: {
    name: "Linux",
    icon: icons.linux,
    category: categories.general,
  },
  vmware: {
    name: "VMWare",
    icon: icons.vmware,
    category: categories.general,
  },
  virtualization: {
    name: "Machine virtuelle",
    icon: icons.virtualization,
    category: categories.general,
  },
  osInstall: {
    name: "Installation d'OS",
    icon: icons.osInstall,
    category: categories.general,
  },
  // Tools
  regex: {
    name: "regex",
    icon: icons.regex,
    category: categories.general,
  },
  //   Web
  html: {
    name: "HTML",
    icon: icons.html,
    category: categories.web,
  },
  css: {
    name: "CSS",
    icon: icons.css,
    category: categories.web,
  },
  sass: {
    name: "Sass",
    icon: icons.sass,
    category: categories.web,
  },
  javascript: {
    name: "Javascript",
    icon: icons.javascript,
    category: categories.web,
  },
  // Software
  //    Java
  java: {
    name: "java",
    icon: icons.java,
    category: categories.software,
  },
  maven: {
    name: "Maven",
    icon: icons.maven,
    category: categories.software,
  },
  junit: {
    name: "Junit",
    icon: icons.junit,
    category: categories.software,
  },
  //    Java -> GUI
  javaFX: {
    name: "JavaFX",
    icon: icons.javaFX,
    category: categories.software,
  },
  //    C/C++
  c: {
    name: "C",
    icon: icons.c,
    category: categories.software,
  },
  cpp: {
    name: "C++",
    icon: icons.cpp,
    category: categories.software,
  },
  //    C/C++ -> Compilation tool
  cmake: {
    name: "CMake",
    icon: icons.cmake,
    category: categories.software,
  },
  makefile: {
    name: "Makefile",
    icon: icons.makefile,
    category: categories.software,
  },
  //    C/C++ -> GUI/Game Engine
  unity: {
    name: "Unity",
    icon: icons.unity,
    category: categories.software,
  },
  //    Python
  python: {
    name: "Python",
    icon: icons.python,
    category: categories.software,
  },
  //    Python -> GUI
  pygame: {
    name: "Pygame",
    icon: icons.pygame,
    category: categories.software,
  },
  tkinter: {
    name: "Tkinter",
    icon: icons.tkinter,
    category: categories.software,
  },
  // Databases
  mysql: {
    name: "MySQL",
    icon: icons.mysql,
    category: categories.databases,
  },
  postgresql: {
    name: "PostgreSQL",
    icon: icons.postgresql,
    category: categories.databases,
  },
  // OOP
  oop: {
    name: "POO",
    icon: icons.oop,
    category: categories.oop,
  },
  designPattern: {
    name: "Design Pattern",
    icon: icons.designPattern,
    category: categories.oop,
  },
};
