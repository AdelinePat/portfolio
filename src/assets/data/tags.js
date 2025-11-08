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

export const tags = {
  // General
  personal: {
    name: "Personnel",
    icon: icons.personal,
  },
  school: {
    name: "Scolaire",
    icon: icons.school,
  },
  general: {
    teamwork: {
      name: "Travail d'équipe",
      icon: icons.teamwork,
    },
    // Versionning
    git: {
      name: "Git",
      icon: icons.git,
    },
    // Design
    figma: {
      name: "Figma",
      icon: icons.figma,
    },
    // GUI or output
    console: {
      name: "Console",
      icon: icons.console,
    },
    // Network
    socket: {
      name: "Socket",
      icon: icons.socket,
    },
    // Concept
    ideation: {
      name: "Ideation",
      icon: icons.ideation,
    },
    algorithmic: {
      name: "Algorithmique",
      icon: icons.algorithmic,
    },
    unitaryTest: {
      name: "Test unitaire",
      icon: icons.unitaryTest,
    },
    errorHandling: {
      name: "Gestion d'erreur",
      icon: icons.errorHandling,
    },
    //   Architecture
    mvc: {
      name: "MVC",
      icon: icons.mvc,
    },
    designSystem: {
      name: "Design system",
      icon: icons.designSystem,
    },
    // OS & Virtualization
    linux: {
      name: "Linux",
      icon: icons.linux,
    },
    vmware: {
      name: "VMWare",
      icon: icons.vmware,
    },
    virtualization: {
      name: "Machine virtuelle",
      icon: icons.virtualization,
    },
    osInstall: {
      name: "Installation d'OS",
      icon: icons.osInstall,
    },
    // Tools
    regex: {
      name: "regex",
      icon: icons.regex,
    },
  },
  //   Web
  web: {
    html: {
      name: "HTML",
      icon: icons.html,
    },
    css: {
      name: "CSS",
      icon: icons.css,
    },
    sass: {
      name: "Sass",
      icon: icons.sass,
    },
    javascript: {
      name: "Javascript",
      icon: icons.javascript,
    },
  },
  // Software
  software: {
    //    Java
    java: {
      name: "java",
      icon: icons.java,
    },
    maven: {
      name: "Maven",
      icon: icons.maven,
    },
    junit: {
      name: "Junit",
      icon: icons.junit,
    },
    //    Java -> GUI
    javaFX: {
      name: "JavaFX",
      icon: icons.javaFX,
    },
    //    C/C++
    c: {
      name: "C",
      icon: icons.c,
    },
    cpp: {
      name: "C++",
      icon: icons.cpp,
    },
    //    C/C++ -> Compilation tool
    cmake: {
      name: "CMake",
      icon: icons.cmake,
    },
    makefile: {
      name: "Makefile",
      icon: icons.makefile,
    },
    //    C/C++ -> GUI/Game Engine
    unity: {
      name: "Unity",
      icon: icons.unity,
    },
    //    Python
    python: {
      name: "Python",
      icon: icons.python,
    },
    //    Python -> GUI
    pygame: {
      name: "Pygame",
      icon: icons.pygame,
    },
    tkinter: {
      name: "Tkinter",
      icon: icons.tkinter,
    },
  },
  // Databases
  databases: {
    mysql: {
      name: "MySQL",
      icon: icons.mysql,
    },
    postgresql: {
      name: "PostgreSQL",
      icon: icons.postgresql,
    },
  },
  // OOP
  oop: {
    oop: {
      name: "POO",
      icon: icons.oop,
    },
    designPattern: {
      name: "Design Pattern",
      icon: icons.designPattern,
    },
  },
};
