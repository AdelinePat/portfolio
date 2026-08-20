const softSkills = {
  adaptability: "Adaptabilité",
  problemSolving: "Résolution de problème",
  decisionMaking: "Prise de décision",
  priorization: "Priorisation des tâches",
  proactivity: "Proactivité",
  communication: "Communication",
};
export const experiences = [
  {
    title: "Infirmière au pool",
    display: true,
    location:
      "Hôpital Saint Joseph et Hôpital Européen, 13008 & 13003 Marseille",
    startDate: "2020-02-11T10:00:00.000Z", // 11/02 au 28/02 à HE puis St JO
    endDate: "2020-09-14T10:00:00.000Z",
    content: `<p>
      En tant qu'infirmière au pool, j'ai travaillé dans plusieurs
      services en fonction des besoins de l'hôpital. Chacun demandant
      des soins techniques, des connaissances de protocoles et
              procédures différents.
            </p>`,
    taskList: [
      "Changement fréquent de service",
      "Bonne capacité d'adaptation, réactivité",
    ],
    softSkills: [
      softSkills.adaptability,
      softSkills.proactivity,
      softSkills.priorization,
    ],
  },
  {
    title: "Infirmière en oncologie de jour",
    display: true,
    location: "Hôpital Saint Joseph, 13008 Marseille",
    startDate: "2020-09-15T10:00:00.000Z",
    endDate: "2023-06-02T10:00:00.000Z",
    content: `<p>Dans le cadre des soins infirmiers de ce service :</p>`,
    taskList: [
      "Organisation, rapidité d'exécution des tâches, prises de décision en situation d'urgence",
      "Analyses des besoins, analyse et repérage des risques",
      "Collaboration au sein d'une équipe pluridisciplinaire",
      "Connaissances techniques, transmissions d'informations",
      "Formation des élèves et nouveaux infirmiers",
    ],
    softSkills: [
      softSkills.adaptability,
      softSkills.decisionMaking,
      softSkills.communication,
      softSkills.priorization,
    ],
  },
  {
    title: "Alternante performance engineer",
    display: true,
    location: "FDJ United - Équipe performance platform, 13127 Vitrolles",
    startDate: "2025-09-01T10:00:00.000Z",
    endDate: "2027-08-31T10:00:00.000Z",
    content: ``,
    taskList: [
      `Conception et développement en <strong>Kotlin</strong> d'une chaîne de capture, 
      anonymisation et archivage des événements <strong>Kafka</strong> de production dans <strong>S3</strong>,
      puis de rejeu dans des clusters Kafka de performance`,
      `Développement d'un mécanisme de rejeu à <strong>vitesse configurable</strong>, permettant de reproduire des charges réelles et de les moduler pour tester le comportement du SI`,
      `Analyse de l'existant, recueil des besoins et <strong>identification des limites</strong> d'un processus manuel et chronophage`,
      `Rédaction de l'<strong>architecture technique</strong>, conception puis implémentation de la solution cible`,
    ],
    softSkills: [
      softSkills.problemSolving,
      softSkills.communication,
      softSkills.proactivity,
    ],
  },
];

const experienceTemplate = {
  title: "",
  location: "",
  startDate: "2025-07-22T10:00:00.000Z",
  endDate: "2025-07-22T10:00:00.000Z",
  content: ``,
  taskList: [],
  softSkills: [],
};
