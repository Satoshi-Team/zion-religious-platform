interface Module {
  id: string
  title: string
  description: string
  content: string
  references: Reference[]
  learningObjectives: string[]
  keyTerms: KeyTerm[]
  quiz: QuizQuestion[]
  resources: Resource[]
}

interface Reference {
  title: string
  author?: string
  source: string
  url?: string
  year?: number
  type: 'book' | 'article' | 'website' | 'video' | 'document'
}

interface KeyTerm {
  term: string
  definition: string
  context?: string
}

interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface Resource {
  title: string
  type: 'reading' | 'video' | 'audio' | 'interactive'
  url: string
  duration?: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
}

interface Religion {
  id: string
  name: string
  symbol: string
  description: string
  modules: Module[]
  levels?: Level[]
}

interface Level {
  id: string
  name: string
  description: string
  goals: string[]
  moduleIds: string[]
}

export type {
  Module,
  Reference,
  KeyTerm,
  QuizQuestion,
  Resource,
  Religion,
  Level
} 