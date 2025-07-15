import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { BookOpen, Users, Clock, Target, Heart, Lightbulb, MapPin, Calendar, Award, BookMarked, PlayCircle, FileText, Globe, Star, Brain, Zap, Leaf, Target as TargetIcon } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Modern Meditation - Contemporary Techniques & Scientific Research | ZION.FM',
  description: 'Explore modern meditation techniques, scientific research, and contemporary approaches to mindfulness, stress reduction, and mental well-being.',
  keywords: 'modern meditation, mindfulness, scientific meditation, stress reduction, mental health, contemporary meditation, meditation research, secular meditation, wellness meditation, meditation apps',
  openGraph: {
    title: 'Modern Meditation - Contemporary Techniques & Scientific Research',
    description: 'Explore modern meditation techniques, scientific research, and contemporary approaches to mindfulness and well-being.',
    type: 'website',
  },
}

export default function ModernMeditationPage() {
  const modernTechniques = [
    {
      title: 'Mindfulness Meditation',
      description: 'Present-moment awareness and non-judgmental attention to experience',
      icon: Brain,
      techniques: ['Body Scan', 'Breath Awareness', 'Walking Meditation', 'Mindful Eating', 'Loving-Kindness'],
      benefits: ['Stress Reduction', 'Emotional Regulation', 'Improved Focus', 'Better Sleep', 'Enhanced Well-being'],
      color: 'bg-blue-50 dark:bg-blue-950'
    },
    {
      title: 'Transcendental Meditation',
      description: 'Effortless meditation technique using personalized mantras',
      icon: Zap,
      techniques: ['Mantra Repetition', 'Effortless Practice', 'Twice Daily Sessions', 'Natural Transcendence', 'Deep Rest'],
      benefits: ['Deep Relaxation', 'Reduced Anxiety', 'Improved Creativity', 'Better Health', 'Spiritual Growth'],
      color: 'bg-purple-50 dark:bg-purple-950'
    },
    {
      title: 'Body-Based Meditation',
      description: 'Meditation focusing on physical sensations and body awareness',
      icon: TargetIcon,
      techniques: ['Progressive Relaxation', 'Body Scanning', 'Movement Meditation', 'Sensory Awareness', 'Grounding'],
      benefits: ['Physical Relaxation', 'Body Awareness', 'Stress Relief', 'Pain Management', 'Mind-Body Connection'],
      color: 'bg-green-50 dark:bg-green-950'
    },
    {
      title: 'Nature-Based Meditation',
      description: 'Meditation practices connected to natural environments',
      icon: Leaf,
      techniques: ['Forest Bathing', 'Nature Sounds', 'Outdoor Meditation', 'Seasonal Awareness', 'Environmental Connection'],
      benefits: ['Stress Reduction', 'Environmental Awareness', 'Mental Clarity', 'Emotional Balance', 'Spiritual Connection'],
      color: 'bg-orange-50 dark:bg-orange-950'
    }
  ]

  const scientificResearch = [
    {
      title: 'Neuroscientific Studies',
      description: 'Research on meditation effects on brain structure and function',
      findings: [
        'Increased gray matter in prefrontal cortex',
        'Enhanced connectivity in default mode network',
        'Reduced amygdala activity (stress response)',
        'Improved attention and concentration',
        'Neuroplasticity and brain adaptation'
      ],
      institutions: ['Harvard Medical School', 'UCLA', 'Stanford University', 'Max Planck Institute']
    },
    {
      title: 'Psychological Benefits',
      description: 'Mental health and psychological effects of meditation',
      findings: [
        'Reduced symptoms of anxiety and depression',
        'Improved emotional regulation',
        'Enhanced self-awareness and insight',
        'Better stress management',
        'Increased resilience and coping skills'
      ],
      institutions: ['Johns Hopkins University', 'University of Oxford', 'University of California', 'University of Wisconsin']
    },
    {
      title: 'Physical Health Effects',
      description: 'Impact of meditation on physical health and well-being',
      findings: [
        'Lower blood pressure and heart rate',
        'Improved immune system function',
        'Better sleep quality and duration',
        'Reduced inflammation markers',
        'Enhanced pain management'
      ],
      institutions: ['Mayo Clinic', 'Cleveland Clinic', 'University of Massachusetts', 'University of Pittsburgh']
    }
  ]

  const contemporaryApplications = [
    {
      title: 'Workplace Wellness',
      description: 'Meditation programs in corporate and professional settings',
      applications: [
        'Stress management for employees',
        'Leadership development programs',
        'Team building and communication',
        'Work-life balance initiatives',
        'Performance enhancement training'
      ],
      companies: ['Google', 'Apple', 'Microsoft', 'Goldman Sachs', 'General Mills']
    },
    {
      title: 'Healthcare Integration',
      description: 'Meditation in medical and healthcare settings',
      applications: [
        'Pain management programs',
        'Mental health treatment',
        'Chronic disease management',
        'Preventive healthcare',
        'Patient recovery support'
      ],
      institutions: ['Mayo Clinic', 'Cleveland Clinic', 'Kaiser Permanente', 'VA Medical Centers']
    },
    {
      title: 'Education and Learning',
      description: 'Meditation in educational institutions',
      applications: [
        'Student stress reduction',
        'Academic performance improvement',
        'Social-emotional learning',
        'Teacher well-being programs',
        'School climate improvement'
      ],
      programs: ['Mindful Schools', 'Inner Explorer', 'Calm Classroom', 'MindUP']
    }
  ]

  const digitalMeditation = [
    {
      title: 'Meditation Apps',
      description: 'Digital platforms for guided meditation and mindfulness',
      platforms: [
        {
          name: 'Headspace',
          features: 'Guided meditations, sleep content, mindful movement',
          focus: 'Beginner-friendly meditation and wellness'
        },
        {
          name: 'Calm',
          features: 'Sleep stories, meditation music, breathing exercises',
          focus: 'Stress relief and sleep improvement'
        },
        {
          name: 'Insight Timer',
          features: 'Free meditations, community features, timer',
          focus: 'Diverse meditation styles and community'
        },
        {
          name: 'Waking Up',
          features: 'Philosophical approach, consciousness exploration',
          focus: 'Advanced meditation and spiritual inquiry'
        }
      ]
    },
    {
      title: 'Online Programs',
      description: 'Comprehensive online meditation courses and training',
      programs: [
        {
          name: 'Mindfulness-Based Stress Reduction (MBSR)',
          duration: '8-week program',
          focus: 'Evidence-based stress reduction'
        },
        {
          name: 'Mindfulness-Based Cognitive Therapy (MBCT)',
          duration: '8-week program',
          focus: 'Depression prevention and relapse'
        },
        {
          name: 'Transcendental Meditation Training',
          duration: '4-day course',
          focus: 'Personalized mantra meditation'
        },
        {
          name: 'Vipassana Meditation',
          duration: '10-day retreat',
          focus: 'Insight meditation practice'
        }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4">
            <Link 
              href="/meditation"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              ← Back to Meditation
            </Link>
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Modern Meditation</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              Explore contemporary meditation techniques, scientific research, and modern approaches 
              to mindfulness, stress reduction, and mental well-being.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/meditation/modern/guided">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Guided Practice
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/meditation/modern/research">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Research
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Modern Techniques */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Contemporary Meditation Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modernTechniques.map((technique, index) => (
              <Card key={index} className={`${technique.color} border-0`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-white dark:bg-gray-800 rounded-lg">
                      <technique.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{technique.title}</CardTitle>
                  </div>
                  <CardDescription>{technique.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Techniques:</h4>
                    <div className="flex flex-wrap gap-1">
                      {technique.techniques.map((tech, tIndex) => (
                        <Badge key={tIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {technique.benefits.map((benefit, bIndex) => (
                        <Badge key={bIndex} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href={`/meditation/modern/${technique.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Scientific Research */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Scientific Research & Evidence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scientificResearch.map((research, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{research.title}</CardTitle>
                  <CardDescription>{research.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Findings:</h4>
                      <ul className="text-sm space-y-1">
                        {research.findings.map((finding, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">•</span>
                            {finding}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Research Institutions:</h4>
                      <div className="flex flex-wrap gap-1">
                        {research.institutions.map((institution, iIndex) => (
                          <Badge key={iIndex} variant="outline" className="text-xs">
                            {institution}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contemporary Applications */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Contemporary Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contemporaryApplications.map((application, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{application.title}</CardTitle>
                  <CardDescription>{application.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Applications:</h4>
                      <ul className="text-sm space-y-1">
                        {application.applications.map((app, aIndex) => (
                          <li key={aIndex} className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Examples:</h4>
                      <div className="flex flex-wrap gap-1">
                        {(application.companies || application.institutions || application.programs)?.map((example, eIndex) => (
                          <Badge key={eIndex} variant="secondary" className="text-xs">
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Digital Meditation */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Digital Meditation & Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {digitalMeditation.map((digital, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{digital.title}</CardTitle>
                  <CardDescription>{digital.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {digital.platforms?.map((platform, pIndex) => (
                      <div key={pIndex} className="p-3 border rounded-lg">
                        <h4 className="font-semibold mb-1">{platform.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{platform.features}</p>
                        <p className="text-xs font-medium text-blue-600">{platform.focus}</p>
                      </div>
                    ))}
                    {digital.programs?.map((program, pIndex) => (
                      <div key={pIndex} className="p-3 border rounded-lg">
                        <h4 className="font-semibold mb-1">{program.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{program.duration}</p>
                        <p className="text-xs font-medium text-blue-600">{program.focus}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Related Resources */}
        <Card>
          <CardHeader>
            <CardTitle>Explore More</CardTitle>
            <CardDescription>Continue your meditation journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/meditation/christian">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <Heart className="h-6 w-6 mb-2 text-red-600" />
                    <h4 className="font-semibold mb-2">Christian Meditation</h4>
                    <p className="text-sm text-muted-foreground">Contemplative prayer and spiritual practices</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/meditation/buddhist">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <Target className="h-6 w-6 mb-2 text-yellow-600" />
                    <h4 className="font-semibold mb-2">Buddhist Meditation</h4>
                    <p className="text-sm text-muted-foreground">Mindfulness, Vipassana, and Zen practices</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/studies/meditation">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <BookOpen className="h-6 w-6 mb-2 text-green-600" />
                    <h4 className="font-semibold mb-2">Meditation Studies</h4>
                    <p className="text-sm text-muted-foreground">Academic research and studies</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 