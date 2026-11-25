export interface CV {
  basics: Basics
  experience: Experience[]
  education: Education[]
  skills: Skill[]
  languages: Language[]
  projects: Project[]
}

interface Basics {
  name: string
  label: string
  image: string
  email: string
  phone: string
  url: string
  summary: string
  location: Location
  profiles: Profile[]
}

interface Location {
  address: string
  postalCode: string
  city?: string
  countryCode: string
  region: string
}

interface Profile {
  network: string
  username: string
  url: string
}

interface Experience {
  name: string
  position: string
  startDate: string
  endDate: string | null
  summary: string | null
}

interface Education {
  institution: string
  area: string
  startDate: string
  endDate: string | null
}

interface Skill {
  name: string
  category: string
  level: string
}

interface Language {
  language: string
  fluency: string
}

interface Project {
  name: string
  isActive: boolean
  featured?: boolean
  description: string
  highlights: string[]
  links: ProjectLink[]
}

interface ProjectLink {
  label: string
  url: string
  type: "live" | "github"
}
