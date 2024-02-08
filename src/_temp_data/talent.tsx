const talent = {
  name: "Juan Lopez Martinez",
  role: "Full-stack developer",
  rating: 3,
  city: "Lima",
  country: "Perú",
  salaryMin: 2500,
  salaryMax: 3000,
  techSkills: [
    {
      name: "Data Structure",
      years: 3.5,
    },
    {
      name: "Docker",
      years: 1,
    },
    {
      name: "Express",
      years: 2,
    },
    {
      name: "Github",
      years: 3,
    },
    {
      name: "JavaScript",
      years: 5,
    },
    {
      name: "Nginx",
      years: 2,
    },
    {
      name: "NodeJS",
      years: 2,
    },
  ],
  softSkills: ["Comunicación", "Auto-aprendizaje", "Empatía"],
  feedbacks: [
    {
      id: 1,
      comment: "Ayudó siempre al equipo, es muy talentoso.",
      author: {
        id: 1,
        name: "Cesar Ortiz",
        role: "Tech Lead",
      },
      score: 3,
    },
  ],
};

export default talent;
