import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Users, Book, MapPin, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Early Judaism History - Biblical Period to Second Temple',
  description: 'Explore the early period of Judaism: biblical period, ancient Israel, and the development of Jewish religious practices.',
  keywords: 'early judaism history, biblical period, ancient israel, second temple, jewish development, hebrew bible',
  openGraph: {
    title: 'Early Judaism History - Biblical Period to Second Temple',
    description: 'Explore the early period of Judaism: biblical period, ancient Israel, and the development of Jewish religious practices.',
    type: 'website',
  },
}

const timeline = [
  {
    period: 'Patriarchal Period (2000-1500 BCE)',
    description: 'The period of the biblical patriarchs and early Hebrew history.',
    events: [
      {
        year: '2000 BCE',
        event: 'Abraham\'s Call',
        description: 'Abraham receives divine call and covenant in Ur of the Chaldeans.'
      },
      {
        year: '1800 BCE',
        event: 'Isaac and Jacob',
        description: 'Continuation of the covenant through Isaac and Jacob.'
      },
      {
        year: '1700 BCE',
        event: 'Joseph in Egypt',
        description: 'Joseph rises to power in Egypt, setting stage for Hebrew settlement.'
      }
    ]
  },
  {
    period: 'Exodus and Conquest (1500-1200 BCE)',
    description: 'The period of Hebrew slavery, exodus, and settlement in Canaan.',
    events: [
      {
        year: '1300 BCE',
        event: 'Moses and Exodus',
        description: 'Moses leads Hebrews out of Egypt and receives Torah at Sinai.'
      },
      {
        year: '1250 BCE',
        event: 'Conquest of Canaan',
        description: 'Joshua leads conquest of the Promised Land.'
      },
      {
        year: '1200 BCE',
        event: 'Period of Judges',
        description: 'Israel governed by charismatic leaders and judges.'
      }
    ]
  },
  {
    period: 'United Monarchy (1050-930 BCE)',
    description: 'The period of united Israel under Saul, David, and Solomon.',
    events: [
      {
        year: '1050 BCE',
        event: 'Saul\'s Reign',
        description: 'First king of Israel, establishes monarchy.'
      },
      {
        year: '1000 BCE',
        event: 'David\'s Reign',
        description: 'David establishes Jerusalem as capital and expands kingdom.'
      },
      {
        year: '970 BCE',
        event: 'Solomon\'s Reign',
        description: 'Solomon builds First Temple and establishes trade networks.'
      },
      {
        year: '930 BCE',
        event: 'Kingdom Division',
        description: 'Israel splits into northern and southern kingdoms.'
      }
    ]
  },
  {
    period: 'Divided Kingdom (930-586 BCE)',
    description: 'Period of separate kingdoms of Israel and Judah.',
    events: [
      {
        year: '722 BCE',
        event: 'Fall of Israel',
        description: 'Northern kingdom falls to Assyria, ten tribes exiled.'
      },
      {
        year: '586 BCE',
        event: 'Fall of Judah',
        description: 'Southern kingdom falls to Babylon, First Temple destroyed.'
      }
    ]
  },
  {
    period: 'Babylonian Exile (586-538 BCE)',
    description: 'Period of Jewish exile in Babylon and religious development.',
    events: [
      {
        year: '586-538 BCE',
        event: 'Exile Period',
        description: 'Jews develop synagogue worship and preserve traditions.'
      },
      {
        year: '538 BCE',
        event: 'Cyrus Decree',
        description: 'Persian king Cyrus allows Jews to return to Jerusalem.'
      }
    ]
  },
  {
    period: 'Second Temple Period (538 BCE-70 CE)',
    description: 'Period of Second Temple and Jewish religious development.',
    events: [
      {
        year: '515 BCE',
        event: 'Second Temple Built',
        description: 'Second Temple completed under Zerubbabel.'
      },
      {
        year: '450 BCE',
        event: 'Ezra and Nehemiah',
        description: 'Religious and social reforms in Jerusalem.'
      },
      {
        year: '332 BCE',
        event: 'Hellenistic Period',
        description: 'Alexander the Great conquers region, Greek influence begins.'
      },
      {
        year: '167 BCE',
        event: 'Maccabean Revolt',
        description: 'Jewish revolt against Hellenistic rulers, Hanukkah origin.'
      }
    ]
  }
]

const keyFigures = [
  {
    name: 'Abraham',
    role: 'First Patriarch',
    period: '2000 BCE',
    contributions: [
      'Covenant with God',
      'Monotheism',
      'Circumcision',
      'Faith example'
    ]
  },
  {
    name: 'Moses',
    role: 'Lawgiver and Prophet',
    period: '1300 BCE',
    contributions: [
      'Exodus leadership',
      'Torah revelation',
      'Ten Commandments',
      'Covenant mediator'
    ]
  },
  {
    name: 'David',
    role: 'King of Israel',
    period: '1000 BCE',
    contributions: [
      'Jerusalem capital',
      'Kingdom expansion',
      'Psalms authorship',
      'Messianic lineage'
    ]
  },
  {
    name: 'Solomon',
    role: 'King and Temple Builder',
    period: '970 BCE',
    contributions: [
      'First Temple',
      'Wisdom literature',
      'Trade networks',
      'Kingdom prosperity'
    ]
  },
  {
    name: 'Ezra',
    role: 'Priest and Scribe',
    period: '450 BCE',
    contributions: [
      'Torah reading',
      'Religious reform',
      'Community organization',
      'Biblical editing'
    ]
  }
]

const religiousDevelopments = [
  {
    area: 'Monotheism',
    developments: [
      'Exclusive worship of Yahweh',
      'Rejection of idolatry',
      'Covenant theology',
      'Divine unity'
    ]
  },
  {
    area: 'Torah and Law',
    developments: [
      'Written Torah',
      'Oral tradition',
      'Legal codes',
      'Ethical teachings'
    ]
  },
  {
    area: 'Temple Worship',
    developments: [
      'Sacrificial system',
      'Priestly duties',
      'Festival calendar',
      'Ritual purity'
    ]
  },
  {
    area: 'Prophecy',
    developments: [
      'Prophetic tradition',
      'Social justice',
      'Messianic hope',
      'Divine communication'
    ]
  }
]

const culturalAchievements = [
  {
    area: 'Literature',
    achievements: [
      'Hebrew Bible',
      'Psalms and poetry',
      'Wisdom literature',
      'Historical narratives'
    ]
  },
  {
    area: 'Architecture',
    achievements: [
      'Temple construction',
      'City planning',
      'Fortifications',
      'Palace architecture'
    ]
  },
  {
    area: 'Social Organization',
    achievements: [
      'Tribal structure',
      'Monarchical system',
      'Priestly hierarchy',
      'Community laws'
    ]
  }
]

export default function EarlyJudaismHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Early Judaism History</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the early period of Judaism: biblical period, ancient Israel, and the development 
          of Jewish religious practices and cultural identity.
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

      {/* Religious Developments */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Religious Developments</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {religiousDevelopments.map((area) => (
            <Card key={area.area}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  {area.area}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {area.developments.map((development) => (
                    <li key={development} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {development}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Cultural Achievements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Cultural Achievements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {culturalAchievements.map((area) => (
            <Card key={area.area}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  {area.area}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {area.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-center gap-2 text-sm">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
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
              <p className="text-sm">Essential early Jewish texts:</p>
              <ul className="text-sm space-y-1">
                <li>• Hebrew Bible</li>
                <li>• Dead Sea Scrolls</li>
                <li>• Apocrypha</li>
                <li>• Archaeological evidence</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Historical Context</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Understanding the ancient Near East:</p>
              <ul className="text-sm space-y-1">
                <li>• Ancient Egypt</li>
                <li>• Mesopotamia</li>
                <li>• Canaanite culture</li>
                <li>• Trade routes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Archaeological Evidence</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Material evidence of early Judaism:</p>
              <ul className="text-sm space-y-1">
                <li>• Temple remains</li>
                <li>• Inscriptions</li>
                <li>• Artifacts</li>
                <li>• Settlement patterns</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-muted rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Continue Your Study</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          The early period of Judaism established the foundation for one of the world\'s oldest 
          monotheistic religions. Understanding this formative era is essential for comprehending 
          Jewish history, culture, and religious practice.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <a href="/religion/judaism/history/medieval" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Medieval Judaism History
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="/studies/history" className="flex items-center gap-2">
              <Book className="h-4 w-4" />
              More Historical Studies
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
} 