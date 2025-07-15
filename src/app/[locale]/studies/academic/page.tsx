import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookOpen, Users, Clock, Star, Shield, Heart, Target, Zap, Lightbulb, Globe, MessageSquare, Brain, Eye, Book, Compass, GraduationCap, Search, FileText, Award } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Academic Religious Studies - Research Methods & Scholarly Resources | ZION.FM',
  description: 'Explore academic religious studies with research methods, scholarly resources, and academic approaches to understanding religion. Access academic databases, research methodologies, and scholarly publications.',
  keywords: 'academic religious studies, religious research methods, scholarly resources, religious studies methodology, academic databases, religious scholarship, research methodology',
  openGraph: {
    title: 'Academic Religious Studies - Research Methods & Scholarly Resources',
    description: 'Comprehensive academic religious studies resources and research methodologies.',
    type: 'website',
  },
}

const researchMethods = [
  {
    category: 'Qualitative Research Methods',
    description: 'Methods for understanding religious phenomena through qualitative analysis',
    icon: Search,
    methods: [
      {
        name: 'Ethnography',
        description: 'Participant observation and cultural immersion',
        applications: ['Religious communities', 'Ritual practices', 'Cultural contexts', 'Social dynamics'],
        techniques: ['Participant observation', 'Interviews', 'Field notes', 'Cultural analysis'],
        link: '/studies/academic/methods/ethnography'
      },
      {
        name: 'Phenomenology',
        description: 'Studying religious experience as it appears to consciousness',
        applications: ['Religious experience', 'Spiritual practices', 'Personal narratives', 'Subjective meaning'],
        techniques: ['Bracketing', 'Description', 'Analysis', 'Interpretation'],
        link: '/studies/academic/methods/phenomenology'
      },
      {
        name: 'Hermeneutics',
        description: 'Interpretation of religious texts and traditions',
        applications: ['Sacred texts', 'Religious traditions', 'Historical documents', 'Cultural artifacts'],
        techniques: ['Textual analysis', 'Contextual understanding', 'Interpretive frameworks', 'Critical reading'],
        link: '/studies/academic/methods/hermeneutics'
      },
      {
        name: 'Case Study',
        description: 'In-depth analysis of specific religious phenomena',
        applications: ['Religious movements', 'Individual experiences', 'Community studies', 'Historical events'],
        techniques: ['Data collection', 'Analysis', 'Documentation', 'Generalization'],
        link: '/studies/academic/methods/case-study'
      }
    ]
  },
  {
    category: 'Quantitative Research Methods',
    description: 'Statistical and numerical approaches to religious studies',
    icon: Target,
    methods: [
      {
        name: 'Survey Research',
        description: 'Systematic data collection through questionnaires',
        applications: ['Religious beliefs', 'Practice patterns', 'Demographics', 'Attitudes'],
        techniques: ['Questionnaire design', 'Sampling', 'Data analysis', 'Statistical testing'],
        link: '/studies/academic/methods/survey-research'
      },
      {
        name: 'Content Analysis',
        description: 'Systematic analysis of religious texts and media',
        applications: ['Sacred texts', 'Religious media', 'Historical documents', 'Contemporary materials'],
        techniques: ['Coding', 'Categorization', 'Frequency analysis', 'Thematic analysis'],
        link: '/studies/academic/methods/content-analysis'
      },
      {
        name: 'Statistical Analysis',
        description: 'Mathematical analysis of religious data',
        applications: ['Demographic studies', 'Trend analysis', 'Correlation studies', 'Predictive modeling'],
        techniques: ['Descriptive statistics', 'Inferential statistics', 'Regression analysis', 'Factor analysis'],
        link: '/studies/academic/methods/statistical-analysis'
      },
      {
        name: 'Experimental Design',
        description: 'Controlled studies of religious phenomena',
        applications: ['Religious psychology', 'Behavioral studies', 'Intervention research', 'Causal relationships'],
        techniques: ['Random assignment', 'Control groups', 'Manipulation', 'Measurement'],
        link: '/studies/academic/methods/experimental-design'
      }
    ]
  },
  {
    category: 'Historical Research Methods',
    description: 'Methods for studying religious history and development',
    icon: Clock,
    methods: [
      {
        name: 'Historical Criticism',
        description: 'Critical analysis of historical religious sources',
        applications: ['Biblical studies', 'Religious history', 'Textual development', 'Historical context'],
        techniques: ['Source criticism', 'Form criticism', 'Redaction criticism', 'Historical reconstruction'],
        link: '/studies/academic/methods/historical-criticism'
      },
      {
        name: 'Archaeology',
        description: 'Material evidence of religious practices and beliefs',
        applications: ['Ancient religions', 'Religious sites', 'Material culture', 'Historical reconstruction'],
        techniques: ['Excavation', 'Artifact analysis', 'Dating methods', 'Contextual interpretation'],
        link: '/studies/academic/methods/archaeology'
      },
      {
        name: 'Paleography',
        description: 'Study of ancient religious manuscripts and texts',
        applications: ['Ancient texts', 'Manuscript traditions', 'Textual transmission', 'Historical development'],
        techniques: ['Handwriting analysis', 'Dating methods', 'Textual comparison', 'Historical context'],
        link: '/studies/academic/methods/paleography'
      },
      {
        name: 'Oral History',
        description: 'Recording and analyzing oral religious traditions',
        applications: ['Indigenous religions', 'Oral traditions', 'Community memory', 'Cultural transmission'],
        techniques: ['Interviewing', 'Recording', 'Transcription', 'Analysis'],
        link: '/studies/academic/methods/oral-history'
      }
    ]
  }
]

const academicResources = [
  {
    category: 'Academic Databases',
    resources: [
      { name: 'ATLA Religion Database', url: 'https://www.atla.com/', description: 'Comprehensive religious studies database' },
      { name: 'JSTOR Religion', url: 'https://www.jstor.org/', description: 'Academic religious studies journals' },
      { name: 'Project MUSE Religion', url: 'https://muse.jhu.edu/', description: 'Humanities and social sciences journals' },
      { name: 'Academic Search Complete', url: 'https://www.ebsco.com/', description: 'Multi-disciplinary academic database' }
    ]
  },
  {
    category: 'Religious Studies Journals',
    resources: [
      { name: 'Journal of the American Academy of Religion', url: 'https://academic.oup.com/jaar', description: 'Leading religious studies journal' },
      { name: 'Religious Studies', url: 'https://www.cambridge.org/core/journals/religious-studies', description: 'Philosophical approach to religion' },
      { name: 'Religion', url: 'https://www.tandfonline.com/journals/rrel20', description: 'International journal of religious studies' },
      { name: 'Method & Theory in the Study of Religion', url: 'https://brill.com/view/journals/mtsr', description: 'Methodological approaches to religion' }
    ]
  },
  {
    category: 'Research Institutions',
    resources: [
      { name: 'Harvard Divinity School', url: 'https://hds.harvard.edu/', description: 'Leading religious studies institution' },
      { name: 'Oxford Centre for Islamic Studies', url: 'https://www.oxcis.ac.uk/', description: 'Islamic studies research center' },
      { name: 'Center for the Study of World Religions', url: 'https://cswr.hds.harvard.edu/', description: 'Comparative religion research' },
      { name: 'Religious Research Association', url: 'https://rra.hartsem.edu/', description: 'Professional association for religious research' }
    ]
  }
]

const researchAreas = [
  {
    title: 'Biblical Studies',
    description: 'Academic study of the Bible and biblical literature',
    focus: [
      'Textual criticism',
      'Historical context',
      'Literary analysis',
      'Theological interpretation'
    ],
    methodologies: ['Historical-critical method', 'Literary criticism', 'Archaeology', 'Ancient Near Eastern studies'],
    link: '/studies/academic/areas/biblical-studies'
  },
  {
    title: 'Islamic Studies',
    description: 'Academic study of Islam and Islamic civilization',
    focus: [
      'Quranic studies',
      'Hadith studies',
      'Islamic law',
      'Islamic history'
    ],
    methodologies: ['Textual analysis', 'Historical research', 'Legal studies', 'Cultural studies'],
    link: '/studies/academic/areas/islamic-studies'
  },
  {
    title: 'Buddhist Studies',
    description: 'Academic study of Buddhism and Buddhist traditions',
    focus: [
      'Buddhist texts',
      'Meditation practices',
      'Buddhist philosophy',
      'Buddhist history'
    ],
    methodologies: ['Textual studies', 'Philosophical analysis', 'Anthropological research', 'Historical studies'],
    link: '/studies/academic/areas/buddhist-studies'
  },
  {
    title: 'Hindu Studies',
    description: 'Academic study of Hinduism and Hindu traditions',
    focus: [
      'Vedic studies',
      'Hindu philosophy',
      'Hindu practices',
      'Hindu history'
    ],
    methodologies: ['Sanskrit studies', 'Philosophical analysis', 'Anthropological research', 'Historical studies'],
    link: '/studies/academic/areas/hindu-studies'
  }
]

const academicSkills = [
  {
    title: 'Research Design',
    description: 'Planning and designing religious studies research',
    skills: [
      'Formulating research questions',
      'Selecting appropriate methods',
      'Designing data collection',
      'Planning analysis strategies'
    ],
    benefits: ['Methodological rigor', 'Valid conclusions', 'Reliable results', 'Academic credibility']
  },
  {
    title: 'Critical Analysis',
    description: 'Analyzing religious texts and phenomena critically',
    skills: [
      'Textual analysis',
      'Logical reasoning',
      'Evidence evaluation',
      'Argument construction'
    ],
    benefits: ['Deep understanding', 'Critical thinking', 'Analytical skills', 'Scholarly insight']
  },
  {
    title: 'Academic Writing',
    description: 'Writing scholarly papers and research reports',
    skills: [
      'Clear argumentation',
      'Proper citation',
      'Academic style',
      'Research presentation'
    ],
    benefits: ['Effective communication', 'Academic credibility', 'Professional development', 'Knowledge dissemination']
  },
  {
    title: 'Interdisciplinary Approaches',
    description: 'Integrating multiple disciplines in religious studies',
    skills: [
      'Cross-disciplinary research',
      'Methodological integration',
      'Comparative analysis',
      'Synthesis of perspectives'
    ],
    benefits: ['Comprehensive understanding', 'Innovative approaches', 'Broader perspective', 'Academic collaboration']
  }
]

const researchEthics = [
  {
    title: 'Informed Consent',
    description: 'Ensuring participants understand and agree to research',
    principles: [
      'Clear explanation of research purpose',
      'Voluntary participation',
      'Right to withdraw',
      'Protection of privacy'
    ]
  },
  {
    title: 'Cultural Sensitivity',
    description: 'Respecting cultural and religious differences',
    principles: [
      'Cultural awareness',
      'Respect for traditions',
      'Avoiding bias',
      'Cultural consultation'
    ]
  },
  {
    title: 'Academic Integrity',
    description: 'Maintaining honesty and transparency in research',
    principles: [
      'Accurate reporting',
      'Proper attribution',
      'Avoiding plagiarism',
      'Transparent methodology'
    ]
  },
  {
    title: 'Beneficence',
    description: 'Ensuring research benefits participants and society',
    principles: [
      'Minimizing harm',
      'Maximizing benefits',
      'Social responsibility',
      'Ethical consideration'
    ]
  }
]

const careerPaths = [
  {
    title: 'Academic Careers',
    positions: [
      'University Professor',
      'Research Scholar',
      'Department Chair',
      'Academic Administrator'
    ],
    requirements: ['PhD in Religious Studies', 'Teaching experience', 'Research publications', 'Academic service'],
    skills: ['Research methodology', 'Teaching ability', 'Academic writing', 'Administrative skills']
  },
  {
    title: 'Research Careers',
    positions: [
      'Research Associate',
      'Policy Analyst',
      'Think Tank Researcher',
      'Independent Scholar'
    ],
    requirements: ['Research experience', 'Analytical skills', 'Writing ability', 'Subject expertise'],
    skills: ['Data analysis', 'Report writing', 'Policy analysis', 'Project management']
  },
  {
    title: 'Professional Careers',
    positions: [
      'Religious Educator',
      'Interfaith Coordinator',
      'Cultural Consultant',
      'Museum Curator'
    ],
    requirements: ['Religious studies background', 'Communication skills', 'Cultural sensitivity', 'Professional experience'],
    skills: ['Education', 'Interfaith dialogue', 'Cultural understanding', 'Public engagement']
  }
]

export default function AcademicStudiesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Academic Religious Studies
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Explore academic religious studies with research methods, scholarly resources, and academic approaches 
          to understanding religion. Access academic databases, research methodologies, and scholarly publications.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Badge variant="secondary" className="text-sm">Research Methods</Badge>
          <Badge variant="secondary" className="text-sm">Scholarly Resources</Badge>
          <Badge variant="secondary" className="text-sm">Academic Databases</Badge>
          <Badge variant="secondary" className="text-sm">Research Ethics</Badge>
          <Badge variant="secondary" className="text-sm">Academic Careers</Badge>
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="methods" className="mb-12">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="methods">Methods</TabsTrigger>
          <TabsTrigger value="areas">Areas</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="ethics">Ethics</TabsTrigger>
          <TabsTrigger value="careers">Careers</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="methods" className="space-y-8">
          {researchMethods.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.category}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-2xl">{category.category}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.methods.map((method) => (
                      <Card key={method.name} className="h-full">
                        <CardHeader>
                          <CardTitle className="text-xl">{method.name}</CardTitle>
                          <CardDescription className="text-base">
                            {method.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Applications:</h4>
                            <div className="flex flex-wrap gap-2">
                              {method.applications.map((app) => (
                                <Badge key={app} variant="secondary" className="text-xs">
                                  {app}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Techniques:</h4>
                            <div className="flex flex-wrap gap-2">
                              {method.techniques.map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <Button asChild className="w-full">
                            <Link href={method.link}>
                              Learn {method.name}
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </TabsContent>

        <TabsContent value="areas" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {researchAreas.map((area) => (
              <Card key={area.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                  <CardDescription className="text-base">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Focus Areas:</h4>
                    <ul className="space-y-2">
                      {area.focus.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Methodologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.methodologies.map((method) => (
                        <Badge key={method} variant="outline" className="text-xs">
                          {method}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link href={area.link}>
                      Study {area.title}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="skills" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {academicSkills.map((skill) => (
              <Card key={skill.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{skill.title}</CardTitle>
                  <CardDescription className="text-base">
                    {skill.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Skills:</h4>
                    <ul className="space-y-2">
                      {skill.skills.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.benefits.map((benefit) => (
                        <Badge key={benefit} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ethics" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {researchEthics.map((ethical) => (
              <Card key={ethical.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{ethical.title}</CardTitle>
                  <CardDescription className="text-base">
                    {ethical.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {ethical.principles.map((principle) => (
                      <li key={principle} className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{principle}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="careers" className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            {careerPaths.map((career) => (
              <Card key={career.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{career.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Positions:</h4>
                    <ul className="space-y-1 text-sm">
                      {career.positions.map((position) => (
                        <li key={position} className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{position}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.requirements.map((req) => (
                        <Badge key={req} variant="secondary" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-8">
          {academicResources.map((category) => (
            <Card key={category.category}>
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.resources.map((resource) => (
                    <div key={resource.name} className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">{resource.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {resource.description}
                      </p>
                      <Button asChild size="sm" variant="outline">
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          Visit Resource
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Advance Your Academic Religious Studies</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Develop research skills, access scholarly resources, and pursue academic excellence 
              in religious studies with our comprehensive academic resources.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/studies/theology">Theology Studies</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/studies/comparative">Comparative Studies</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/resources">Academic Resources</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 