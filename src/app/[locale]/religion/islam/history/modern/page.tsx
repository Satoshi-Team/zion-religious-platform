import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Users, Book, MapPin, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Modern Islamic History - Ottoman Empire to Present',
  description: 'Explore the modern period of Islam: Ottoman Empire, colonialism, independence movements, and the contemporary Islamic world.',
  keywords: 'modern islam history, ottoman empire, colonialism, islamic reform, independence movements, contemporary islam',
  openGraph: {
    title: 'Modern Islamic History - Ottoman Empire to Present',
    description: 'Explore the modern period of Islam: Ottoman Empire, colonialism, independence movements, and the contemporary Islamic world.',
    type: 'website',
  },
}

const timeline = [
  {
    period: 'Ottoman Empire (1299-1922 CE)',
    description: 'The longest-lasting Islamic empire, spanning three continents and six centuries.',
    events: [
      {
        year: '1453 CE',
        event: 'Conquest of Constantinople',
        description: 'Mehmed II captures Constantinople, ending the Byzantine Empire.'
      },
      {
        year: '1517 CE',
        event: 'Conquest of Egypt',
        description: 'Ottomans gain control of the holy cities of Mecca and Medina.'
      },
      {
        year: '1520-1566 CE',
        event: 'Reign of Suleiman the Magnificent',
        description: 'Peak of Ottoman power and cultural achievement.'
      },
      {
        year: '1683 CE',
        event: 'Siege of Vienna',
        description: 'Ottoman advance into Europe is halted at Vienna.'
      },
      {
        year: '1839-1876 CE',
        event: 'Tanzimat Reforms',
        description: 'Modernization and westernization of Ottoman society.'
      },
      {
        year: '1922 CE',
        event: 'Fall of Ottoman Empire',
        description: 'Empire dissolves after World War I, Republic of Turkey established.'
      }
    ]
  },
  {
    period: 'Colonial Period (1800-1950 CE)',
    description: 'European colonialism and its impact on Islamic societies.',
    events: [
      {
        year: '1798 CE',
        event: 'Napoleon\'s Invasion of Egypt',
        description: 'Beginning of European intervention in the Islamic world.'
      },
      {
        year: '1857 CE',
        event: 'Indian Rebellion',
        description: 'Major uprising against British rule in India.'
      },
      {
        year: '1882 CE',
        event: 'British Occupation of Egypt',
        description: 'Britain takes control of Egypt, beginning colonial rule.'
      },
      {
        year: '1916 CE',
        event: 'Sykes-Picot Agreement',
        description: 'Secret agreement dividing Ottoman territories between Britain and France.'
      },
      {
        year: '1920s-1940s CE',
        event: 'Mandate System',
        description: 'European powers administer former Ottoman territories.'
      }
    ]
  },
  {
    period: 'Independence and Modernization (1950-2000 CE)',
    description: 'Decolonization and the emergence of modern Islamic states.',
    events: [
      {
        year: '1947 CE',
        event: 'Partition of India',
        description: 'Creation of Pakistan as a Muslim-majority state.'
      },
      {
        year: '1952 CE',
        event: 'Egyptian Revolution',
        description: 'Gamal Abdel Nasser leads revolution against monarchy.'
      },
      {
        year: '1979 CE',
        event: 'Iranian Revolution',
        description: 'Islamic Revolution establishes theocratic government in Iran.'
      },
      {
        year: '1980s CE',
        event: 'Soviet-Afghan War',
        description: 'Muslim resistance against Soviet occupation of Afghanistan.'
      },
      {
        year: '1990s CE',
        event: 'Post-Cold War Changes',
        description: 'New challenges and opportunities for Islamic societies.'
      }
    ]
  },
  {
    period: 'Contemporary Period (2000-Present)',
    description: 'Islam in the 21st century, facing new challenges and opportunities.',
    events: [
      {
        year: '2001 CE',
        event: 'September 11 Attacks',
        description: 'Terrorist attacks lead to global focus on Islam and terrorism.'
      },
      {
        year: '2011 CE',
        event: 'Arab Spring',
        description: 'Pro-democracy uprisings across the Arab world.'
      },
      {
        year: '2014 CE',
        event: 'Rise of ISIS',
        description: 'Emergence of extremist group claiming to represent Islam.'
      },
      {
        year: '2020s CE',
        event: 'Contemporary Challenges',
        description: 'Islam faces issues of extremism, reform, and integration.'
      }
    ]
  }
]

const keyFigures = [
  {
    name: 'Suleiman the Magnificent',
    role: 'Ottoman Sultan',
    period: '1520-1566 CE',
    contributions: [
      'Ottoman expansion',
      'Legal reforms',
      'Cultural patronage',
      'Architectural projects'
    ]
  },
  {
    name: 'Muhammad Ali Pasha',
    role: 'Egyptian Ruler',
    period: '1805-1848 CE',
    contributions: [
      'Modernization of Egypt',
      'Industrial development',
      'Educational reforms',
      'Military modernization'
    ]
  },
  {
    name: 'Jamal al-Din al-Afghani',
    role: 'Islamic Reformer',
    period: '1838-1897 CE',
    contributions: [
      'Pan-Islamism',
      'Modernization advocacy',
      'Anti-colonialism',
      'Islamic unity'
    ]
  },
  {
    name: 'Muhammad Abduh',
    role: 'Egyptian Reformer',
    period: '1849-1905 CE',
    contributions: [
      'Islamic modernism',
      'Educational reform',
      'Religious interpretation',
      'Social reform'
    ]
  },
  {
    name: 'Mustafa Kemal Atatürk',
    role: 'Turkish Leader',
    period: '1881-1938 CE',
    contributions: [
      'Turkish Republic',
      'Secularization',
      'Modernization',
      'Westernization'
    ]
  },
  {
    name: 'Ayatollah Khomeini',
    role: 'Iranian Leader',
    period: '1902-1989 CE',
    contributions: [
      'Iranian Revolution',
      'Islamic government',
      'Anti-imperialism',
      'Shi\'a leadership'
    ]
  }
]

const themes = [
  {
    area: 'Reform Movements',
    themes: [
      'Islamic modernism',
      'Salafism',
      'Sufi revival',
      'Liberal Islam'
    ]
  },
  {
    area: 'Political Islam',
    themes: [
      'Islamist movements',
      'Democratic participation',
      'Theocratic states',
      'Secular governments'
    ]
  },
  {
    area: 'Social Change',
    themes: [
      'Women\'s rights',
      'Education reform',
      'Economic development',
      'Urbanization'
    ]
  },
  {
    area: 'Global Relations',
    themes: [
      'West-Islam relations',
      'Interfaith dialogue',
      'Migration and diaspora',
      'International cooperation'
    ]
  }
]

const challenges = [
  {
    challenge: 'Extremism and Terrorism',
    description: 'Violent extremism claiming Islamic justification.',
    responses: [
      'Islamic counter-narratives',
      'Interfaith cooperation',
      'Security measures',
      'Educational reform'
    ]
  },
  {
    challenge: 'Modernization',
    description: 'Balancing tradition with contemporary needs.',
    responses: [
      'Islamic finance',
      'Technology integration',
      'Cultural preservation',
      'Social reform'
    ]
  },
  {
    challenge: 'Globalization',
    description: 'Navigating cultural exchange and identity.',
    responses: [
      'Cultural dialogue',
      'Islamic media',
      'Diaspora communities',
      'International networks'
    ]
  }
]

export default function ModernIslamHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Modern Islamic History</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the modern period of Islam: Ottoman Empire, colonialism, independence movements, 
          and the contemporary Islamic world facing new challenges and opportunities.
        </p>
      </div>

      {/* Timeline */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Historical Timeline</h2>
        <div className="space-y-12">
          {timeline.map((period) => (
            <div key={period.period} className="bg-card rounded-lg p-6 border">
              <h3 className="text-2xl font-bold mb-4 text-primary">{period.period}</h3>
              <p className="text-muted-foreground mb-6">{period.description}</p>
              <div className="space-y-4">
                {period.events.map((event) => (
                  <Card key={event.year} className="border-l-4 border-l-primary">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <Badge variant="outline" className="shrink-0">
                          <Calendar className="h-3 w-3 mr-1" />
                          {event.year}
                        </Badge>
                        <div>
                          <h4 className="font-semibold">{event.event}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Figures */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Figures</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyFigures.map((figure) => (
            <Card key={figure.name} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  {figure.name}
                </CardTitle>
                <CardDescription>
                  <Badge variant="outline">{figure.role}</Badge>
                  <span className="ml-2 text-xs">{figure.period}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm mb-2">Key Contributions:</h4>
                <ul className="text-sm space-y-1">
                  {figure.contributions.map((contribution) => (
                    <li key={contribution} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {contribution}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Major Themes */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Major Themes</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {themes.map((area) => (
            <Card key={area.area}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  {area.area}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {area.themes.map((theme) => (
                    <li key={theme} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {theme}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Challenges and Responses */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Contemporary Challenges</h2>
        <div className="space-y-6">
          {challenges.map((challenge) => (
            <Card key={challenge.challenge}>
              <CardHeader>
                <CardTitle>{challenge.challenge}</CardTitle>
                <CardDescription>{challenge.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm mb-2">Islamic Responses:</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {challenge.responses.map((response) => (
                    <div key={response} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      <span className="text-sm">{response}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Study Resources */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Study Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Primary Sources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Essential modern Islamic texts:</p>
              <ul className="text-sm space-y-1">
                <li>• Reformist writings</li>
                <li>• Political manifestos</li>
                <li>• Historical accounts</li>
                <li>• Contemporary analysis</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Historical Context</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Understanding the modern Islamic world:</p>
              <ul className="text-sm space-y-1">
                <li>• Colonialism</li>
                <li>• Nationalism</li>
                <li>• Globalization</li>
                <li>• Technology</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contemporary Issues</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Current challenges and debates:</p>
              <ul className="text-sm space-y-1">
                <li>• Religious reform</li>
                <li>• Political participation</li>
                <li>• Social change</li>
                <li>• Global relations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-muted rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Continue Your Study</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          The modern period of Islamic history shows the dynamic nature of Islamic societies 
          as they adapt to changing global circumstances. Understanding this era is crucial 
          for comprehending contemporary Islamic issues and developments.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <a href="/studies/history" className="flex items-center gap-2">
              <Book className="h-4 w-4" />
              More Historical Studies
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="/religion/islam/overview" className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              Islamic Overview
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
} 