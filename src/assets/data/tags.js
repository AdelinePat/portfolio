const icons = {
  // Not tag
  closed: ["fa-solid", "fa-plus"],
  // IDE and TOOL
  visualStudioCode: `<i class="devicon-vscode-plain"></i>`,
  intelliJ: `<i class="devicon-intellij-plain"></i>`,
  // General
  personal: `<i class="fa-solid fa-briefcase"></i>`,
  school: `<i class="fa-solid fa-graduation-cap"></i>`,
  teamwork: `<i class="fa-solid fa-users"></i>`,
  // Versionning
  git: `<i class="fa-brands fa-git-alt"></i>`,
  unityVersionControl: ``,
  // OS
  linux: `<i class="fa-brands fa-linux"></i>`,
  windows: `<i class="fa-brands fa-windows"></i>`,
  debian: `<i class="fa-brands fa-debian"></i>`,
  ubuntu: `<i class="fa-brands fa-ubuntu"></i>`,
  redhat: `<i class="devicon-redhat-plain"></i>`,
  osInstall: "",
  // Shell & Scripting
  bashScripting: `<i class="devicon-bash-plain"></i>`,
  linuxCLI: `<i class="fa-solid fa-terminal"></i>`,
  powershell: `<i class="devicon-powershell-plain"></i>`,
  // Virtualization
  vmware: "",
  virtualization: "",
  // DevOPS
  docker: `<i class="fa-brands fa-docker"></i>`,
  // Design
  figma: `<i class="fa-brands fa-figma"></i>`,
  photoshop: `<i class="devicon-photoshop-plain"></i>`,
  illustrator: `<i class="devicon-photoshop-plain"></i>`,
  // Databases
  sql: `<i class="fa-solid fa-database"></i>`,
  mysql: `<i class="devicon-mysql-original"></i>`,
  postgresql: `<i class="devicon-postgresql-plain"></i>`,
  kafka: `<i class="devicon-apachekafka-original"></i>`,
  // C & C++
  c: "",
  cpp: `<i class="devicon-cplusplus-plain"></i>`,
  cmake: `<i class="devicon-cmake-plain"></i>`,
  makefile: "",
  csharp: `<i class="devicon-csharp-plain"></i>`,
  //  Java
  java: `<i class="fa-brands fa-java"></i>`,
  maven: `<i class="devicon-maven-plain"></i>`,
  junit: `<i class="devicon-junit-plain-wordmark"></i>`,
  springboot: `<i class="devicon-spring-original"></i>`,
  thymeleaf: `<i class="devicon-thymeleaf-plain"></i>`,
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
  php: `<i class="fa-brands fa-php"></i>`,
  // OOP
  oop: `<i class="fa-sharp fa-solid fa-code"></i>`,
  designPattern: `<i class="fa-solid fa-puzzle-piece"></i>`,
  // Network
  socket: `<i class="fa-solid fa-network-wired"></i>`,
  // Concept
  ideation: "",
  algorithmic: `<i class="fa-solid fa-gears"></i>`,
  errorHandling: `<i class="fa-solid fa-triangle-exclamation"></i>`,
  // Tests (use the same icon!)
  unitaryTest: `<i class="fa-solid fa-vial"></i>`,
  integrationTest: `<i class="fa-solid fa-vial"></i>`,
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
  devops: "DevOps",
};

export const certificationCategories = {
  web: "Web",
  software: "Logiciel",
  databases: "Bases de Données",
  devops: "DevOps",
  systems: "Systèmes",
};

export const tags = {
  // Not tag
  closed: {
    icon: icons.closed,
  },
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
  // IDE
  visualStudioCode: {
    name: "VS Code",
    icon: icons.visualStudioCode,
    category: categories.general,
  },
  intelliJ: {
    name: "IntelliJ",
    icon: icons.intelliJ,
    category: categories.general,
  },
  // Versionning
  git: {
    name: "Git",
    icon: icons.git,
    category: categories.general,
  },
  unityVersionControl: {
    name: "Unity Version Control",
    icon: icons.unityVersionControl,
    category: categories.general,
  },
  // Design
  figma: {
    name: "Figma",
    icon: icons.figma,
    category: categories.general,
  },
  photoshop: {
    name: "Photoshop",
    icon: icons.photoshop,
    category: categories.general,
  },
  illustrator: {
    name: "Illustrator",
    icon: icons.illustrator,
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
  integrationTest: {
    name: "Test d'intégration",
    icon: icons.integrationTest,
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
  // OS
  linux: {
    name: "Linux",
    icon: icons.linux,
    category: certificationCategories.systems,
  },
  windows: {
    name: "Windows",
    icon: icons.windows,
    category: certificationCategories.systems,
  },
  debian: {
    name: "Debian",
    icon: icons.debian,
    category: certificationCategories.systems,
  },
  ubuntu: {
    name: "Ubuntu",
    icon: icons.ubuntu,
    category: certificationCategories.systems,
  },
  redhat: {
    name: "Red Hat",
    icon: icons.redhat,
    category: certificationCategories.systems,
  },

  // Bash & Scripting
  bashScripting: {
    name: "Bash scripting",
    icon: icons.bashScripting,
    category: certificationCategories.systems,
  },

  linuxCLI: {
    name: "Linux CLI",
    icon: icons.linuxCLI,
    category: certificationCategories.systems,
  },

  powershell: {
    name: "Powershell",
    icon: icons.powershell,
    category: certificationCategories.systems,
  },

  // Virtualization
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
  php: {
    name: "PHP",
    icon: icons.php,
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
  springboot: {
    name: "Spring Boot",
    icon: icons.springboot,
    category: categories.software,
  },
  thymeleaf: {
    name: "thymeleaf",
    icon: icons.thymeleaf,
    category: categories.web,
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
  csharp: {
    name: "C#",
    icon: icons.csharp,
    category: categories.software,
  },
  //    C/C++ or C# -> GUI/Game Engine
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
  sql: {
    name: "SQL",
    icon: icons.sql,
    category: categories.databases,
  },
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
  // DevOps
  docker: {
    name: "Docker",
    icon: icons.docker,
    category: categories.devops,
  },
};
