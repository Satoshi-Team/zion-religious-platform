import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { BookOpen, Users, Clock, Target, Heart, Lightbulb, MapPin, Calendar, Award, BookMarked, PlayCircle, FileText, Globe, Star, MessageCircle, Handshake, Peace, Building } from 'lucide-react'
import Link from 'next/link'

interface InterfaithDialoguePageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: InterfaithDialoguePageProps): Promise<Metadata> {
  
  return {
    title: 'Interfaith Dialogue - Study Resources and Organizations | Sacred Texts',
    description: 'Explore interfaith dialogue principles, practices, organizations, and academic resources for promoting understanding and cooperation between religious traditions.',
    keywords: 'interfaith dialogue, interfaith studies, religious dialogue, interfaith cooperation, religious understanding, interfaith organizations, religious harmony, interfaith education, religious tolerance, interfaith initiatives',
    openGraph: {
      title: 'Interfaith Dialogue - Study Resources and Organizations',
      description: 'Explore interfaith dialogue principles, practices, organizations, and academic resources for promoting understanding and cooperation.',
      type: 'website',
    },
  }
}

export default async function InterfaithDialoguePage({ params }: InterfaithDialoguePageProps) {

  const dialoguePrinciples = [
    {
      title: 'Mutual Respect',
      description: 'Recognizing the inherent dignity and worth of all religious traditions',
      icon: Heart,
      practices: ['Active Listening', 'Non-judgmental Attitude', 'Cultural Sensitivity', 'Recognition of Diversity'],
      color: 'bg-red-50 dark:bg-red-950'
    },
    {
      title: 'Authentic Dialogue',
      description: 'Engaging in genuine conversation that seeks understanding rather than conversion',
      icon: MessageCircle,
      practices: ['Open Communication', 'Shared Learning', 'Common Ground Discovery', 'Honest Exchange'],
      color: 'bg-blue-50 dark:bg-blue-950'
    },
    {
      title: 'Common Action',
      description: 'Working together on shared concerns and social justice issues',
      icon: Handshake,
      practices: ['Community Service', 'Social Justice', 'Environmental Protection', 'Peace Building'],
      color: 'bg-green-50 dark:bg-green-950'
    },
    {
      title: 'Peaceful Coexistence',
      description: 'Promoting harmony and reducing religious conflict in society',
      icon: Peace,
      practices: ['Conflict Resolution', 'Mediation', 'Education Programs', 'Policy Advocacy'],
      color: 'bg-purple-50 dark:bg-purple-950'
    }
  ]

  const studyAreas = [
    {
      title: 'Theological Foundations',
      description: 'Religious perspectives on interfaith dialogue and cooperation',
      topics: ['Comparative Theology', 'Religious Pluralism', 'Exclusivism vs Inclusivism', 'Interfaith Hermeneutics', 'Sacred Texts on Other Religions'],
      approaches: ['Textual Analysis', 'Theological Reflection', 'Comparative Studies', 'Historical Context']
    },
    {
      title: 'Historical Development',
      description: 'Evolution of interfaith relations and dialogue movements',
      topics: ['Ancient Interfaith Relations', 'Medieval Religious Tolerance', 'Modern Interfaith Movements', 'Contemporary Challenges', 'Global Interfaith Networks'],
      approaches: ['Historical Research', 'Case Studies', 'Documentary Analysis', 'Oral Histories']
    },
    {
      title: 'Practical Applications',
      description: 'Methods and strategies for effective interfaith dialogue',
      topics: ['Dialogue Techniques', 'Facilitation Skills', 'Conflict Resolution', 'Community Building', 'Educational Programs'],
      approaches: ['Experiential Learning', 'Skills Training', 'Workshop Design', 'Program Evaluation']
    },
    {
      title: 'Contemporary Issues',
      description: 'Current challenges and opportunities in interfaith relations',
      topics: ['Religious Extremism', 'Secularism', 'Migration and Diaspora', 'Digital Age', 'Environmental Ethics'],
      approaches: ['Social Analysis', 'Policy Research', 'Media Studies', 'Ethnographic Research']
    }
  ]

  const organizations = [
    {
      title: 'International Organizations',
      items: [
        { name: 'World Council of Churches', location: 'Geneva, Switzerland', focus: 'Christian Interfaith Dialogue' },
        { name: 'Parliament of the World\'s Religions', location: 'Chicago, USA', focus: 'Global Interfaith Cooperation' },
        { name: 'United Religions Initiative', location: 'San Francisco, USA', focus: 'Interfaith Peace Building' },
        { name: 'KAICIID Dialogue Centre', location: 'Vienna, Austria', focus: 'Interreligious and Intercultural Dialogue' }
      ]
    },
    {
      title: 'Academic Centers',
      items: [
        { name: 'Center for Interfaith Studies', location: 'University of Birmingham, UK', focus: 'Interfaith Research and Education' },
        { name: 'Interfaith Center', location: 'New York, USA', focus: 'Interfaith Leadership Training' },
        { name: 'Institute for Interfaith Studies', location: 'University of Toronto, Canada', focus: 'Academic Interfaith Programs' },
        { name: 'Center for Religious and Cross-cultural Studies', location: 'Gadjah Mada University, Indonesia', focus: 'Asian Interfaith Studies' }
      ]
    },
    {
      title: 'Local and Regional',
      items: [
        { name: 'Interfaith Council of Greater Chicago', location: 'Chicago, USA', focus: 'Local Interfaith Cooperation' },
        { name: 'Interfaith Network UK', location: 'London, UK', focus: 'British Interfaith Relations' },
        { name: 'Interfaith Federation of Australia', location: 'Melbourne, Australia', focus: 'Australian Interfaith Dialogue' },
        { name: 'Interfaith Center of New York', location: 'New York, USA', focus: 'Community Interfaith Programs' }
      ]
    }
  ]

  const recommendedBooks = [
    {
      title: 'The Faith Club: A Muslim, A Christian, A Jew-- Three Women Search for Understanding',
      author: 'Ranya Idliby, Suzanne Oliver, and Priscilla Warner',
      description: 'Personal account of interfaith dialogue and friendship between three women'
    },
    {
      title: 'Interfaith Dialogue: A Guide for Muslims',
      author: 'Muhammad Shafiq',
      description: 'Islamic perspective on interfaith dialogue and cooperation'
    },
    {
      title: 'The Interfaith Movement: Mobilising Religious Diversity in the 21st Century',
      author: 'John Fahy and Jan-Jonathan Bock',
      description: 'Academic analysis of contemporary interfaith movements'
    },
    {
      title: 'Interfaith Leadership: A Primer',
      author: 'Eboo Patel',
      description: 'Practical guide for interfaith leadership and community building'
    }
  ]

  const dialogueModels = [
    {
      title: 'Theological Dialogue',
      description: 'Deep exploration of religious beliefs and practices',
      focus: 'Understanding core beliefs, sacred texts, and theological concepts',
      methods: ['Scripture Study', 'Theological Discussion', 'Comparative Analysis', 'Joint Prayer']
    },
    {
      title: 'Practical Dialogue',
      description: 'Collaboration on shared social concerns and community service',
      focus: 'Working together on humanitarian, environmental, and social justice issues',
      methods: ['Community Service', 'Social Action', 'Environmental Projects', 'Peace Building']
    },
    {
      title: 'Spiritual Dialogue',
      description: 'Sharing spiritual practices and experiences',
      focus: 'Experiencing each other\'s spiritual traditions and practices',
      methods: ['Meditation', 'Prayer', 'Ritual Participation', 'Spiritual Retreats']
    },
    {
      title: 'Life Dialogue',
      description: 'Everyday interactions and relationships between people of different faiths',
      focus: 'Building friendships and understanding through daily life',
      methods: ['Social Gatherings', 'Cultural Exchange', 'Family Connections', 'Workplace Relations']
    }
  ]

  const challenges = [
    {
      category: 'Theological Challenges',
      issues: [
        'Exclusivist religious claims',
        'Different understandings of truth',
        'Religious authority and interpretation',
        'Conversion and evangelization',
        'Religious laws and practices'
      ]
    },
    {
      category: 'Social Challenges',
      issues: [
        'Religious discrimination and prejudice',
        'Political manipulation of religion',
        'Media misrepresentation',
        'Economic and social inequalities',
        'Cultural misunderstandings'
      ]
    },
    {
      category: 'Practical Challenges',
      issues: [
        'Language and communication barriers',
        'Logistical coordination',
        'Funding and resources',
        'Measuring impact and success',
        'Sustaining long-term engagement'
      ]
    },
    {
      category: 'Contemporary Challenges',
      issues: [
        'Rise of religious extremism',
        'Secularization trends',
        'Digital communication',
        'Global migration',
        'Environmental crises'
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Interfaith Dialogue
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore the principles, practices, and organizations dedicated to promoting understanding and cooperation 
          between religious traditions through dialogue, education, and shared action.
        </p>
      </div>

      {/* Dialogue Principles */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Core Principles of Interfaith Dialogue
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {dialoguePrinciples.map((principle, index) => (
            <Card key={index} className={`${principle.color} border-0`}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <principle.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <CardTitle className="text-xl">{principle.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {principle.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {principle.practices.map((practice, practiceIndex) => (
                    <div key={practiceIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{practice}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Study Areas */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Academic Study Areas
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {studyAreas.map((area, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{area.title}</CardTitle>
                <CardDescription className="text-base">
                  {area.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Topics:</h4>
                    <div className="space-y-1">
                      {area.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Research Approaches:</h4>
                    <div className="space-y-1">
                      {area.approaches.map((approach, approachIndex) => (
                        <div key={approachIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{approach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Dialogue Models */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Models of Interfaith Dialogue
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {dialogueModels.map((model, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{model.title}</CardTitle>
                <CardDescription className="text-base">
                  {model.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Focus:</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{model.focus}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Methods:</h4>
                    <div className="space-y-1">
                      {model.methods.map((method, methodIndex) => (
                        <div key={methodIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{method}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Organizations */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Interfaith Organizations
        </h2>
        <div className="space-y-8">
          {organizations.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{item.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {item.location}
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                            {item.focus}
                          </p>
                        </div>
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Challenges in Interfaith Dialogue
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {challenges.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.issues.map((issue, issueIndex) => (
                    <div key={issueIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{issue}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recommended Books */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Recommended Reading
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {recommendedBooks.map((book, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{book.title}</CardTitle>
                <CardDescription className="text-base">
                  by {book.author}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  {book.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-0">
          <CardContent className="pt-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Join the Interfaith Dialogue Movement
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Interfaith dialogue is essential for building peaceful, inclusive communities in our diverse world. 
              Whether through study, practice, or participation, everyone can contribute to religious understanding and cooperation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/studies">
                  <BookOpen className="mr-2 h-5 w-5" />
                  All Study Areas
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resources">
                  <Globe className="mr-2 h-5 w-5" />
                  More Resources
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
} 