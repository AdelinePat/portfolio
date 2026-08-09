import { tags } from "./tags.js";

export const highlights = [
  tags.docker,
  tags.cpp,
  tags.java,
  tags.mysql,
  tags.visualStudioCode,
];

export const hardskills = [
  {
    title: "Outils et environnement",
    display: true,
    tags: [
      tags.git,
      tags.docker,
      tags.visualStudioCode,
      tags.intelliJ,
    ],
  },
  {
    title: "Runtimes et middlewares",
    display: true,
    tags: [
      tags.nodejs,
      tags.kafka
    ]
  },
  {
    title: "Langages",
    display: true,
    tags: [
      tags.java,
      tags.kotlin,
      tags.cpp,
      tags.python,
      tags.javascript,
      tags.typescript,
      tags.sass,
      tags.css,
      tags.html,
    ],
  },
  {
    title: "Base de données",
    display: true,
    tags: [tags.sql, tags.mysql, tags.postgresql],
  },
  {
    title: "Systèmes d'exploitation",
    display: true,
    tags: [tags.windows, tags.debian, tags.ubuntu, tags.redhat],
  },
  {
    title: "Shell et scripting",
    display: true,
    tags: [tags.bashScripting, tags.linuxCLI, tags.powershell],
  },
  {
    title: "Design",
    display: false,
    tags: [tags.photoshop, tags.illustrator, tags.figma],
  },
];

const skillTemplate = {
  title: "",
  display: true,
  tags: [],
};
