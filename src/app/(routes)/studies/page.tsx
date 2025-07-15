import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, GraduationCap, Users, Lightbulb, Target, Globe, Heart, Brain, Eye, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Religious Studies & Academic Research | ZION.FM',
  description: 'Comprehensive religious studies resources, academic research methodologies, comparative religion studies, and scholarly approaches to understanding world faiths and spiritual traditions.',
  keywords: 'religious studies, academic research, comparative religion, theology, religious history, spiritual traditions, scholarly study, religious education',
  openGraph: {
    title: 'Religious Studies & Academic Research | ZION.FM',
    description: 'Comprehensive religious studies resources, academic research methodologies, and scholarly approaches to understanding world faiths.',
    type: 'website',
  },
}

const studyCategories = [
  {
    title: 'Sacred Texts',
    description: 'In-depth study of religious scriptures, commentaries, and textual analysis',
    icon: BookOpen,
    href: '/sacred-texts',
    features: ['Biblical Studies', 'Quranic Analysis', 'Vedic Literature', 'Buddhist Sutras', 'Comparative Textual Studies']
  },
  {
    title: 'Theological Studies',
    description: 'Systematic study of religious doctrines, beliefs, and theological systems',
    icon: GraduationCap,
    href: '/studies/theology',
    features: ['Christian Theology', 'Islamic Theology', 'Hindu Philosophy', 'Buddhist Philosophy', 'Comparative Theology']
  },
  {
    title: 'Historical Research',
    description: 'Historical development and evolution of religious traditions',
    icon: Users,
    href: '/studies/history',
    features: ['Religious History', 'Cultural Evolution', 'Historical Context', 'Archaeological Evidence', 'Timeline Analysis']
  },
  {
    title: 'Comparative Religion',
    description: 'Cross-cultural analysis and comparison of religious traditions',
    icon: Globe,
    href: '/studies/comparative',
    features: ['Interfaith Dialogue', 'Cultural Comparison', 'Common Themes', 'Divergent Beliefs', 'Global Perspectives']
  },
  {
    title: 'Academic Research',
    description: 'Scholarly methodologies and research approaches in religious studies',
    icon: Search,
    href: '/studies/academic',
    features: ['Research Methods', 'Critical Analysis', 'Academic Standards', 'Peer Review', 'Scholarly Publications']
  },
  {
    title: 'Study Guides',
    description: 'Structured learning paths and educational resources',
    icon: Target,
    href: '/studies/guides',
    features: ['Learning Paths', 'Study Materials', 'Assessment Tools', 'Progress Tracking', 'Educational Resources']
  }
]

const researchMethodologies = [
  {
    title: 'Textual Analysis',
    description: 'Critical examination of religious texts, manuscripts, and translations',
    icon: BookOpen,
    methods: ['Source Criticism', 'Textual Criticism', 'Literary Analysis', 'Translation Studies', 'Manuscript Analysis']
  },
  {
    title: 'Historical Research',
    description: 'Investigation of religious history through primary and secondary sources',
    icon: Users,
    methods: ['Primary Source Analysis', 'Archaeological Evidence', 'Historical Context', 'Chronological Study', 'Cultural History']
  },
  {
    title: 'Comparative Studies',
    description: 'Cross-cultural and interfaith comparison methodologies',
    icon: Globe,
    methods: ['Comparative Analysis', 'Cultural Anthropology', 'Sociological Study', 'Interfaith Dialogue', 'Global Perspectives']
  },
  {
    title: 'Philosophical Inquiry',
    description: 'Philosophical examination of religious concepts and beliefs',
    icon: Brain,
    methods: ['Logical Analysis', 'Conceptual Study', 'Ethical Inquiry', 'Metaphysical Investigation', 'Epistemological Study']
  },
  {
    title: 'Empirical Research',
    description: 'Scientific and evidence-based approaches to religious phenomena',
    icon: Eye,
    methods: ['Statistical Analysis', 'Survey Research', 'Field Studies', 'Experimental Design', 'Data Analysis']
  },
  {
    title: 'Experiential Study',
    description: 'First-hand experience and participant observation in religious practices',
    icon: Heart,
    methods: ['Participant Observation', 'Phenomenological Study', 'Experiential Learning', 'Practice-Based Research', 'Reflective Analysis']
  }
]

const academicResources = [
  {
    category: 'Primary Sources',
    items: [
      'Religious Scriptures and Texts',
      'Historical Documents and Manuscripts',
      'Archaeological Artifacts',
      'Oral Traditions and Testimonies',
      'Contemporary Religious Literature'
    ]
  },
  {
    category: 'Secondary Sources',
    items: [
      'Academic Journals and Publications',
      'Scholarly Books and Monographs',
      'Conference Proceedings',
      'Research Papers and Theses',
      'Critical Commentaries'
    ]
  },
  {
    category: 'Digital Resources',
    items: [
      'Online Databases and Archives',
      'Digital Libraries and Collections',
      'Academic Search Engines',
      'Research Tools and Software',
      'Virtual Museum Collections'
    ]
  },
  {
    category: 'Institutional Resources',
    items: [
      'University Libraries and Archives',
      'Religious Institutions and Seminaries',
      'Museums and Cultural Centers',
      'Research Institutes and Centers',
      'Professional Associations'
    ]
  }
]

export default function StudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <GraduationCap className="mx-auto h-16 w-16 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Religious Studies &
            <span className="text-blue-600 dark:text-blue-400"> Academic Research</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
            Explore comprehensive religious studies resources, scholarly methodologies, and academic approaches to understanding the world's diverse spiritual traditions and faith systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/studies/theology"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start with Theology
            </Link>
            <Link
              href="/studies/comparative"
              className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Comparative Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Study Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Study Areas
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover structured learning paths across all major areas of religious studies and academic research
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studyCategories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <category.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Research Methodologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Academic Research Methodologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Learn the scholarly approaches and research methods used in religious studies and academic inquiry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchMethodologies.map((methodology) => (
              <div
                key={methodology.title}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <methodology.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {methodology.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {methodology.description}
                </p>
                <ul className="space-y-2">
                  {methodology.methods.map((method) => (
                    <li key={method} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                      {method}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Academic Resources & Tools
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Access comprehensive resources for scholarly research and academic study in religious traditions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {academicResources.map((resource) => (
              <div
                key={resource.category}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {resource.category}
                </h3>
                <ul className="space-y-3">
                  {resource.items.map((item) => (
                    <li key={item} className="flex items-center text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Begin Your Academic Journey
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start exploring religious studies with our comprehensive resources and structured learning paths
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/studies/guides"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Study Guides
            </Link>
            <Link
              href="/studies/academic"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Academic Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 