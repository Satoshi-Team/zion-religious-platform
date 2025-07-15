interface SacredText {
  id: string
  name: string
  originalName: string
  religion: string
  language: string
  period: string
  description: string
  content: {
    type: 'text' | 'translation' | 'commentary'
    url: string
    language: string
    translator?: string
    publisher?: string
    year?: number
    license?: string
  }[]
  academicResources: {
    title: string
    url: string
    institution: string
    type: 'research' | 'course' | 'commentary'
  }[]
  digitalArchives: {
    name: string
    url: string
    format: string[]
    access: 'free' | 'subscription' | 'partial'
  }[]
  lastVerified: string
}

export const SACRED_TEXTS: SacredText[] = [
  {
    id: "st1",
    name: "Bible",
    originalName: "Biblia Sacra",
    religion: "Christianity",
    description: "The holy scripture of Christianity",
    language: "Multiple",
    period: "1st-4th century CE",
    content: [
      {
        type: "commentary",
        language: "English",
        url: "https://example.com/bible-study"
      }
    ],
    academicResources: [],
    digitalArchives: [],
    lastVerified: "2024-03-20"
  }
  // ... more texts
]