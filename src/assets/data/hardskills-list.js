import { tags } from "./tags.js";

export const highlights = [
  tags.docker,
  tags.java,
  tags.cpp,
  tags.mysql,
  tags.visualStudioCode,
];

export const hardskills = [
  {
    title: "Outils et IDE",
    display: true,
    tags: [tags.git, tags.docker, tags.visualStudioCode, tags.intelliJ],
  },
  {
    title: "Langages",
    display: true,
    tags: [
      tags.java,
      tags.cpp,
      tags.python,
      tags.javascript,
      tags.sass,
      tags.css,
      tags.html,
    ],
  },
  {
    title: "Base de données",
    display: true,
    tags: [tags.sql, tags.mysql, tags.postgresql, tags.kafka],
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
    display: true,
    tags: [tags.photoshop, tags.illustrator, tags.figma],
  },
];

const skillTemplate = {
  title: "",
  display: true,
  tags: [],
};
