import type { Lang } from "@/types"

const es = {
  nav: {
    about: "Sobre mí",
    journey: "Trayectoria",
    projects: "Proyectos",
    skills: "Habilidades",
    contact: "Contacto"
  },
  hero: {
    greeting: "Hola, soy",
    viewProjects: "Ver proyectos",
    contactMe: "Contáctame",
    switchLang: "Cambiar idioma a inglés",
    email: (name: string, email: string) => `Enviar un correo electrónico a ${name} al correo ${email}`,
    phone: (name: string, phone: string) => `Llamar por teléfono a ${name} al número ${phone}`,
    profile: (name: string, network: string) => `Visitar el perfil de ${name} en ${network}`
  },
  sections: {
    about: { eyebrow: "01 · Perfil", title: "Sobre mí" },
    experience: { eyebrow: "02 · Trayectoria", title: "Experiencia" },
    education: { title: "Educación" },
    projects: { eyebrow: "03 · Trabajo", title: "Proyectos" },
    skills: { eyebrow: "04 · Stack", title: "Habilidades" },
    languages: { eyebrow: "05 · Idiomas", title: "Idiomas" },
    contact: { title: "Información de contacto", text: "Estoy abierta a oportunidades laborales, colaboraciones y nuevos proyectos. No dudes en escribirme." }
  },
  present: "Actualidad",
  inProgress: "En curso",
  ongoing: "En desarrollo"
}

const en: typeof es = {
  nav: {
    about: "About",
    journey: "Journey",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact"
  },
  hero: {
    greeting: "Hi, I'm",
    viewProjects: "View projects",
    contactMe: "Contact me",
    switchLang: "Switch language to Spanish",
    email: (name, email) => `Send an email to ${name} at ${email}`,
    phone: (name, phone) => `Call ${name} at ${phone}`,
    profile: (name, network) => `Visit ${name}'s ${network} profile`
  },
  sections: {
    about: { eyebrow: "01 · Profile", title: "About me" },
    experience: { eyebrow: "02 · Journey", title: "Experience" },
    education: { title: "Education" },
    projects: { eyebrow: "03 · Work", title: "Projects" },
    skills: { eyebrow: "04 · Stack", title: "Skills" },
    languages: { eyebrow: "05 · Languages", title: "Languages" },
    contact: { title: "Contact information", text: "I'm open to job opportunities, collaborations and new projects. Feel free to reach out." }
  },
  present: "Present",
  inProgress: "In progress",
  ongoing: "In development"
}

const dictionaries = { es, en }

export const getText = (lang: Lang) => dictionaries[lang]

/** Cuántos "puntos" de nivel tiene una habilidad (1 a 3), según el texto del CV. */
const LEVEL_SCORES: Record<string, number> = {
  avanzado: 3,
  advanced: 3,
  intermedio: 2,
  intermediate: 2,
  principiante: 1,
  beginner: 1
}

export const getLevelScore = (level: string) => LEVEL_SCORES[level.trim().toLowerCase()] ?? 1
