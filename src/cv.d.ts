export interface CV {
  basics: Basics
  experience: Array<Experience>
  education: Array<Education>
  skills: Array<Skills>
  languages: Array<Languages>
  projects: Array<Projects>
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
  profiles: Array<Profiles>
}

interface Location {
  address: string
  postalCode: string
  city: string
  countryCode: string
  region: string
}

interface Profiles {
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

type DateStr = `${string}-${string}-${string}`

interface Skills {
  name: string
  level: string
}

interface Languages {
  language: string
  fluency: string
}

interface Projects {
  name: string
  isActive: boolean
  description: string
  highlights: Highlight
  url: string
  github?: string
}

type Highlight = Array<string>