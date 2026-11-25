import type { CV } from "@/cv"

export type Lang = "es" | "en"

export interface SectionProps {
  cv: CV
  lang: Lang
}
