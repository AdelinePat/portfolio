import { tags } from "./tags.js";
import { certificationTags } from "./certification-tags.js";
import { certificationCategories } from "./tags.js";

export const certifications = [
  {
    title: "HTML, CSS et Sass",
    display: true,
    img: "./assets/certifications_img/html-css-sass.png",
    altImg: "Certification Dyma HTML CSS et Sass",
    createdAt: "2025-07-25T10:00:00.000Z",
    content: `<p>Certification réalisée sur <strong>Dyma.fr</strong></p>
    <p>Lien vers la formation suivie ainsi que le certificat de réussite juste en dessous.</p>`,
    link: "https://dyma.fr/formations/html-css",
    successCertificate:
      "https://dyma.fr/certification/67cd546795b4574e36077859/5dab7f032482b13eb493df12",
    filters: [certificationCategories.web.id],
    tags: [
      tags.html,
      tags.css,
      tags.sass,
      certificationTags.flex,
      certificationTags.mediaQueries,
      certificationTags.mixin,
    ],
  },
  {
    title: "Docker",
    display: true,
    img: "./assets/certifications_img/docker.png",
    altImg: "Certification Dyma Docker",
    createdAt: "2025-07-14T10:00:00.000Z",
    content: `<p>Certification réalisée sur <strong>Dyma.fr</strong></p>
    <p>Lien vers la formation suivie ainsi que le certificat de réussite juste en dessous.</p>`,
    link: "https://dyma.fr/formations/docker",
    successCertificate:
      "https://dyma.fr/certification/67cd546795b4574e36077859/5f99eb48545c3568e680098f",
    filters: [certificationCategories.devops.id],
    tags: [
      tags.docker,
      certificationTags.dockerfile,
      certificationTags.dockerCompose,
      certificationTags.volumes,
      certificationTags.network,
      certificationTags.yaml,
    ],
  },
  {
    title: "Linux & bash",
    display: true,
    img: "./assets/certifications_img/linux-bash.png",
    altImg: "Certification Dyma Linux & bash",
    createdAt: "2025-06-17T10:00:00.000Z",
    content: `<p>Certification réalisée sur <strong>Dyma.fr</strong></p>
    <p>Lien vers la formation suivie ainsi que le certificat de réussite juste en dessous.</p>`,
    link: "https://dyma.fr/formations/linux-bash",
    successCertificate:
      "https://dyma.fr/certification/67cd546795b4574e36077859/5f39a9aa3298c65e1adc38a6",
    filters: [certificationCategories.systems.id],
    tags: [
      tags.linux,
      tags.ubuntu,
      tags.bashScripting,
      certificationTags.ssh,
      certificationTags.inputOutputRedirection,
      certificationTags.scripting,
      certificationTags.search,
      certificationTags.textStreamProcessing,
      certificationTags.permission,
    ],
  },
  {
    title: "C++",
    display: true,
    img: "./assets/certifications_img/cpp.png",
    altImg: "Certification Dyma C++",
    createdAt: "2025-05-25T10:00:00.000Z",
    content: `<p>Certification réalisée sur <strong>Dyma.fr</strong></p>
    <p>Lien vers la formation suivie ainsi que le certificat de réussite juste en dessous.</p>`,
    link: "https://dyma.fr/formations/cpp",
    successCertificate:
      "https://dyma.fr/certification/67cd546795b4574e36077859/651abcb0303239e7d7a9f2e6",
    filters: [certificationCategories.software.id],
    tags: [
      tags.cpp,
      certificationTags.smartPointer,
      certificationTags.template,
      certificationTags.standardTemplateLibrary,
    ],
  },
  {
    title: "Git",
    display: true,
    img: "./assets/certifications_img/git.png",
    altImg: "Certification Dyma Git",
    createdAt: "2025-04-27T10:00:00.000Z",
    content: `<p>Certification réalisée sur <strong>Dyma.fr</strong></p>
    <p>Lien vers la formation suivie ainsi que le certificat de réussite juste en dessous.</p>`,
    link: "https://dyma.fr/formations/git",
    successCertificate:
      "https://dyma.fr/certification/67cd546795b4574e36077859/5e66b9c683f9574379ad6802",
    filters: [certificationCategories.devops.id],
    tags: [
      tags.git,
      certificationTags.gitFlow,
      certificationTags.gitCommand,
      certificationTags.gitStash,
      certificationTags.gitPull,
      certificationTags.gitLog,
    ],
  },
  {
    title: "MySQL",
    display: true,
    img: "./assets/certifications_img/mysql.png",
    altImg: "Certification Dyma MySQL",
    createdAt: "2025-04-21T10:00:00.000Z",
    content: `<p>Certification réalisée sur <strong>Dyma.fr</strong></p>
    <p>Lien vers la formation suivie ainsi que le certificat de réussite juste en dessous.</p>`,
    link: "https://dyma.fr/formations/mysql",
    successCertificate:
      "https://dyma.fr/certification/67cd546795b4574e36077859/65c4bc64351a034a3639ca78",
    filters: [certificationCategories.databases.id],
    tags: [
      tags.sql,
      tags.mysql,
      certificationTags.join,
      certificationTags.transaction,
      certificationTags.trigger,
      certificationTags.function,
    ],
  },
  {
    title: "Javascript",
    display: true,
    img: "./assets/certifications_img/javascript.png",
    altImg: "Certification Dyma Javascript",
    createdAt: "2025-12-21T10:00:00.000Z",
    content: `<p>Certification réalisée sur Dyma.fr</p>
    <p>Lien vers la formation suivie ainsi que le certification de réussite juste en dessous.</p>`,
    link: "https://dyma.fr/formations/javascript",
    successCertificate:
      "https://dyma.fr/certification/67cd546795b4574e36077859/5de1a78332cf6b3128beee34",
    filters: [certificationCategories.web.id],
    tags: [
      tags.javascript,
      certificationTags.eventLoop,
      certificationTags.promise,
      certificationTags.asyncAwait,
      certificationTags.event,
      certificationTags.request,
      certificationTags.callback,
      certificationTags.closure,
      certificationTags.hoisting,
      certificationTags.esModule,
      certificationTags.prototypalInheritance,
      certificationTags.eventPropagation,
      certificationTags.dom,
    ],
  },
];

const articleTemplate = {
  title: "",
  display: true,
  img: "",
  altImg: "",
  createdAt: "2025-07-22T10:00:00.000Z",
  content: "",
  link: "",
  successCertificate: "",
  filters: [],
  tags: [],
};
