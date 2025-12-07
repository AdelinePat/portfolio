import { tags } from "./tags.js";
// import { certificationTags } from "./certification-tags.js";

export const courses = [
  {
    title: "Apache Kafka Series - Learn Apache Kafka for Beginners v3",
    display: true,
    createdAt: "2025-10-11T10:00:00.000Z",
    progress: 49, // optional chapter not done
    courseUrl:
      "https://www.udemy.com/course/apache-kafka/",
    learningPlatform: "Udemy",
    tags: [tags.kafka],
  },
  {
    title: "Apprenez à programmer en C",
    display: true,
    createdAt: "2025-03-31T10:00:00.000Z",
    progress: 100, // optional chapter not done
    courseUrl:
      "https://openclassrooms.com/fr/courses/19980-apprenez-a-programmer-en-c",
    learningPlatform: "OpenClassRooms",
    tags: [tags.c],
  },
  {
    title: "Apprenez la programmation orientée objet avec Python",
    display: true,
    createdAt: "2025-01-06T10:00:00.000Z",
    progress: 100,
    courseUrl:
      "https://openclassrooms.com/fr/courses/7150616-apprenez-la-programmation-orientee-objet-avec-python",
    learningPlatform: "OpenClassRooms",
    tags: [tags.oop, tags.python],
  },
  {
    title: "Concevez votre site web avec PHP et MySQL",
    display: true,
    createdAt: "2024-12-28T10:00:00.000Z",
    progress: 59,
    courseUrl:
      "https://openclassrooms.com/fr/courses/918836-concevez-votre-site-web-avec-php-et-mysql",
    learningPlatform: "OpenClassRooms",
    tags: [tags.php],
  },
  {
    title: "Apprenez à programmer avec JavaScript",
    display: true,
    createdAt: "2024-12-19T10:00:00.000Z",
    progress: 100,
    courseUrl:
      "https://openclassrooms.com/fr/courses/7696886-apprenez-a-programmer-avec-javascript",
    learningPlatform: "OpenClassRooms",
    tags: [tags.javascript],
  },
  {
    title: "Simplifiez-vous le CSS avec Sass",
    display: true,
    createdAt: "2024-12-03T10:00:00.000Z",
    progress: 100,
    courseUrl:
      "https://openclassrooms.com/fr/courses/8069761-simplifiez-vous-le-css-avec-sass",
    learningPlatform: "OpenClassRooms",
    tags: [tags.sass, tags.html],
  },
  {
    title: "Créez une maquette web avec Figma",
    display: true,
    createdAt: "2024-11-14T10:00:00.000Z",
    progress: 100,
    courseUrl:
      "https://openclassrooms.com/fr/courses/7342806-creez-une-maquette-web-avec-figma",
    learningPlatform: "OpenClassRooms",
    tags: [tags.figma],
  },
  {
    title: "Gérez du code avec Git et GitHub",
    display: true,
    createdAt: "2024-11-02T10:00:00.000Z",
    progress: 100,
    courseUrl:
      "https://openclassrooms.com/fr/courses/7162856-gerez-du-code-avec-git-et-github",
    learningPlatform: "OpenClassRooms",
    tags: [tags.git],
  },
  {
    title: "Apprenez les bases du langage Python",
    display: true,
    createdAt: "2024-10-31T10:00:00.000Z",
    progress: 72,
    courseUrl:
      "https://openclassrooms.com/fr/courses/7168871-apprenez-les-bases-du-langage-python",
    learningPlatform: "OpenClassRooms",
    tags: [tags.python],
  },
  {
    title: "Comprendre le Web",
    display: true,
    createdAt: "2024-02-31T10:00:00.000Z",
    progress: 100,
    courseUrl:
      "https://openclassrooms.com/fr/courses/1946386-comprendre-le-web",
    learningPlatform: "OpenClassRooms",
    tags: [],
  },
  {
    title: "Créez votre site web avec HTML5 et CSS3",
    display: true,
    createdAt: "2024-03-05T10:00:00.000Z",
    progress: 100,
    courseUrl:
      "https://openclassrooms.com/fr/courses/1603881-creez-votre-site-web-avec-html5-et-css3",
    learningPlatform: "OpenClassRooms",
    tags: [tags.html, tags.css],
  },
  {
    title: "Découvrez le fonctionnement des algorithmes",
    display: true,
    createdAt: "2024-02-22T10:00:00.000Z",
    progress: 100,
    courseUrl:
      "https://openclassrooms.com/fr/courses/7527306-decouvrez-le-fonctionnement-des-algorithmes",
    learningPlatform: "OpenClassRooms",
    tags: [tags.algorithmic],
  },
];

const courseTemplate = {
  title: "",
  display: true,
  createdAt: "2025-03-31T10:00:00.000Z",
  progress: 0,
  courseUrl: "",
  learningPlatform: "OpenClassRooms",
  tags: [],
};
