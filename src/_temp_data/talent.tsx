import { TalentFull } from "@/types/Talent";

const talent: TalentFull = {
  name: "Juan Lopez Martinez",
  role: "Full-stack developer",
  description: `Hello! This is Juan Lopez speaking, I'm a Full-Stack Developer specializing in Front-End Technologies and also a student at Holberton School.`,
  rating: 3,
  city: "Lima",
  country: "Perú",
  salary_min: 2500,
  salary_max: 3000,
  national_currency: 1,
  github_url: "https://github.com/juanlopezmartinez",
  linkedin_url: "https://linkedin.com/in/juanlopezmartinez",
  tech_skills: [
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
  soft_skills: ["Comunicación", "Auto-aprendizaje", "Empatía"],
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
    {
      id: 2,
      comment: "Ayudó siempre al equipo, es muy talentoso.",
      author: {
        id: 1,
        name: "Manuel Ramirez",
        role: "Tech Lead",
      },
      score: 3,
    },
  ],
  experiences: [
    {
      id: 1,
      type: "work",
      organization: {
        id: 1,
        name: "FRACTAL",
      },
      position: "Desarrollador Full-Stack",
      start_date: new Date(2020, 5, 6),
      end_date: new Date(2023, 5, 6),
    },
    {
      id: 4,
      type: "work",
      organization: {
        id: 1,
        name: "FRACTAL Services",
      },
      position: "Líder de proyectos",
      start_date: new Date(2023, 5, 6),
      end_date: null,
    },
    {
      id: 2,
      type: "school",
      organization: {
        id: 2,
        name: "Pontificia Universidad Católica del Perú",
      },
      position: "Ingeniería de sistemas",
      grade: "Bachiller",
      start_date: new Date(2015, 5, 6),
      end_date: new Date(2021, 5, 6),
    },
    {
      id: 3,
      type: "school",
      organization: {
        id: 3,
        name: "Cibertec",
      },
      position: "Análisis de Datos",
      grade: "Diplomado",
      start_date: new Date(2015, 5, 6),
      end_date: new Date(2023, 1, 1),
    },
  ],
  certificates: [
    { id: 1, name: "Frontend", src: "/mock-data/certificate.svg" },
    { id: 2, name: "Backend", src: "/mock-data/certificate.svg" },
    { id: 3, name: "Data science", src: "/mock-data/certificate.svg" },
  ],
  languages: [
    { id: 1, name: "Inglés", level: 4, checked: true },
    { id: 2, name: "Español", level: 5, checked: false },
  ],
};

export default talent;
