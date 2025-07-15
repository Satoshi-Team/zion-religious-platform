import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Users, Book, MapPin, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Early Church History - From Jesus to Constantine',
  description: 'Explore the formative period of early Christianity from the time of Jesus through the apostolic age, persecution, and the establishment of the church as a major religious force.',
  keywords: 'early church history, apostolic age, church fathers, persecution, Constantine, Council of Nicaea, Christianity origins',
  openGraph: {
    title: 'Early Church History - From Jesus to Constantine',
    description: 'Explore the formative period of early Christianity from the time of Jesus through the apostolic age, persecution, and the establishment of the church.',
    type: 'website',
  },
}

const timePeriods = [
  {
    period: 'Apostolic Age (30-100 CE)',
    description: 'The period immediately following Jesus\' death and resurrection, marked by the ministry of the apostles and the rapid spread of Christianity.',
    events: [
      {
        year: '30-33 CE',
        event: 'Crucifixion and Resurrection of Jesus',
        description: 'The central event of Christianity, followed by the Great Commission to spread the gospel.'
      },
      {
        year: '33 CE',
        event: 'Pentecost',
        description: 'The descent of the Holy Spirit upon the apostles, marking the birth of the Christian Church.'
      },
      {
        year: '34-67 CE',
        event: 'Paul\'s Missionary Journeys',
        description: 'Three major missionary journeys establishing churches throughout the Roman Empire.'
      },
      {
        year: '49 CE',
        event: 'Council of Jerusalem',
        description: 'First church council addressing the relationship between Jewish law and Gentile converts.'
      },
      {
        year: '64-68 CE',
        event: 'Nero\'s Persecution',
        description: 'First major persecution of Christians under Emperor Nero, including the martyrdom of Peter and Paul.'
      },
      {
        year: '70 CE',
        event: 'Destruction of Jerusalem Temple',
        description: 'Roman destruction of the Second Temple, leading to the dispersion of Jewish Christians.'
      }
    ]
  },
  {
    period: 'Post-Apostolic Age (100-313 CE)',
    description: 'The period of church fathers, theological development, and intermittent persecution under various Roman emperors.',
    events: [
      {
        year: '100-165 CE',
        event: 'Apostolic Fathers',
        description: 'Early Christian writers who had direct contact with the apostles, including Clement, Ignatius, and Polycarp.'
      },
      {
        year: '150-200 CE',
        event: 'Apologists',
        description: 'Christian writers defending the faith against pagan accusations, including Justin Martyr and Tertullian.'
      },
      {
        year: '180-250 CE',
        event: 'Gnostic Controversy',
        description: 'Confrontation with Gnostic teachings, leading to the development of orthodox Christian doctrine.'
      },
      {
        year: '202-211 CE',
        event: 'Severan Persecution',
        description: 'Persecution under Emperor Septimius Severus, particularly targeting converts and catechumens.'
      },
      {
        year: '250-251 CE',
        event: 'Decian Persecution',
        description: 'Systematic persecution requiring all citizens to offer sacrifices to Roman gods.'
      },
      {
        year: '303-311 CE',
        event: 'Great Persecution',
        description: 'The most severe persecution under Diocletian, attempting to eliminate Christianity entirely.'
      }
    ]
  },
  {
    period: 'Constantinian Era (313-381 CE)',
    description: 'The period of Christianity\'s legalization and establishment as the dominant religion of the Roman Empire.',
    events: [
      {
        year: '313 CE',
        event: 'Edict of Milan',
        description: 'Constantine and Licinius grant religious tolerance to Christians throughout the empire.'
      },
      {
        year: '325 CE',
        event: 'Council of Nicaea',
        description: 'First ecumenical council addressing the Arian controversy and establishing the Nicene Creed.'
      },
      {
        year: '330 CE',
        event: 'Foundation of Constantinople',
        description: 'Constantine establishes a new capital, creating a Christian imperial city.'
      },
      {
        year: '337 CE',
        event: 'Death of Constantine',
        description: 'Constantine is baptized on his deathbed, marking the beginning of Christian emperors.'
      },
      {
        year: '381 CE',
        event: 'Council of Constantinople',
        description: 'Second ecumenical council affirming the divinity of the Holy Spirit.'
      }
    ]
  }
]

const keyFigures = [
  {
    name: 'Peter',
    role: 'Apostle and First Pope',
    period: '1st Century',
    contributions: [
      'Leader of the Jerusalem church',
      'First to preach to Gentiles',
      'Author of epistles',
      'Martyrdom in Rome'
    ]
  },
  {
    name: 'Paul',
    role: 'Apostle to the Gentiles',
    period: '1st Century',
    contributions: [
      'Missionary journeys',
      'Epistles to churches',
      'Theological development',
      'Martyrdom in Rome'
    ]
  },
  {
    name: 'Clement of Rome',
    role: 'Bishop and Apostolic Father',
    period: '1st Century',
    contributions: [
      'First Epistle to Corinthians',
      'Church order and discipline',
      'Apostolic succession',
      'Unity and harmony'
    ]
  },
  {
    name: 'Ignatius of Antioch',
    role: 'Bishop and Martyr',
    period: '1st-2nd Century',
    contributions: [
      'Seven epistles',
      'Episcopal structure',
      'Eucharistic theology',
      'Martyrdom witness'
    ]
  },
  {
    name: 'Justin Martyr',
    role: 'Apologist and Philosopher',
    period: '2nd Century',
    contributions: [
      'Dialogue with Trypho',
      'First Apology',
      'Logos theology',
      'Philosophy and faith'
    ]
  },
  {
    name: 'Irenaeus of Lyons',
    role: 'Bishop and Theologian',
    period: '2nd Century',
    contributions: [
      'Against Heresies',
      'Rule of faith',
      'Gnostic refutation',
      'Apostolic tradition'
    ]
  },
  {
    name: 'Tertullian',
    role: 'Apologist and Theologian',
    period: '2nd-3rd Century',
    contributions: [
      'Latin theology',
      'Trinitarian terminology',
      'Apologetic works',
      'Montanist influence'
    ]
  },
  {
    name: 'Origen',
    role: 'Scholar and Theologian',
    period: '2nd-3rd Century',
    contributions: [
      'Biblical exegesis',
      'Hexapla',
      'Systematic theology',
      'Allegorical interpretation'
    ]
  },
  {
    name: 'Constantine',
    role: 'Roman Emperor',
    period: '4th Century',
    contributions: [
      'Edict of Milan',
      'Council of Nicaea',
      'Christian empire',
      'Constantinople'
    ]
  }
]

const theologicalDevelopments = [
  {
    area: 'Christology',
    developments: [
      'Divinity of Christ affirmed',
      'Incarnation theology',
      'Two natures doctrine',
      'Arian controversy resolved'
    ]
  },
  {
    area: 'Trinity',
    developments: [
      'Triune God concept',
      'Nicene Creed formulation',
      'Holy Spirit divinity',
      'Trinitarian terminology'
    ]
  },
  {
    area: 'Ecclesiology',
    developments: [
      'Episcopal structure',
      'Apostolic succession',
      'Church unity',
      'Sacramental theology'
    ]
  },
  {
    area: 'Scripture',
    developments: [
      'Canon formation',
      'Biblical interpretation',
      'Old Testament use',
      'Gospel harmonization'
    ]
  }
]

const challenges = [
  {
    challenge: 'Persecution',
    description: 'Intermittent but severe persecution under various Roman emperors, testing the faith and commitment of early Christians.',
    responses: [
      'Martyrdom witness',
      'Underground worship',
      'Apologetic defense',
      'Community solidarity'
    ]
  },
  {
    challenge: 'Heresy',
    description: 'Various theological challenges including Gnosticism, Arianism, and other deviations from apostolic teaching.',
    responses: [
      'Creedal formulations',
      'Ecumenical councils',
      'Theological refutation',
      'Orthodox definition'
    ]
  },
  {
    challenge: 'Cultural Integration',
    description: 'Balancing Christian identity with Greco-Roman culture and avoiding both assimilation and isolation.',
    responses: [
      'Inculturation',
      'Philosophical engagement',
      'Cultural transformation',
      'Distinctive identity'
    ]
  },
  {
    challenge: 'Internal Division',
    description: 'Disputes over leadership, doctrine, and practice threatening church unity.',
    responses: [
      'Conciliar authority',
      'Episcopal structure',
      'Apostolic tradition',
      'Unity emphasis'
    ]
  }
]

export default function EarlyChurchHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Early Church History</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the formative period of Christianity from the time of Jesus through the apostolic age, 
          persecution, and the establishment of the church as a major religious force in the Roman Empire.
        </p>
      </div>

      {/* Timeline */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Historical Timeline</h2>
        <div className="space-y-12">
          {timePeriods.map((period) => (
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

      {/* Theological Developments */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Theological Developments</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {theologicalDevelopments.map((area) => (
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

      {/* Challenges and Responses */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Challenges and Responses</h2>
        <div className="space-y-6">
          {challenges.map((challenge) => (
            <Card key={challenge.challenge}>
              <CardHeader>
                <CardTitle>{challenge.challenge}</CardTitle>
                <CardDescription>{challenge.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm mb-2">Christian Responses:</h4>
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
              <p className="text-sm">Essential texts for understanding early Christianity:</p>
              <ul className="text-sm space-y-1">
                <li>• New Testament</li>
                <li>• Apostolic Fathers</li>
                <li>• Early Apologists</li>
                <li>• Church Councils</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Historical Context</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Understanding the world of early Christianity:</p>
              <ul className="text-sm space-y-1">
                <li>• Roman Empire</li>
                <li>• Jewish Background</li>
                <li>• Greco-Roman Culture</li>
                <li>• Social Structures</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Archaeological Evidence</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">Material evidence of early Christianity:</p>
              <ul className="text-sm space-y-1">
                <li>• Catacombs</li>
                <li>• Church Buildings</li>
                <li>• Inscriptions</li>
                <li>• Artifacts</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-muted rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Continue Your Study</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          The early church period laid the foundation for all subsequent Christian history. 
          Understanding this formative era is essential for comprehending Christian theology, 
          practice, and identity.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <a href="/religion/christianity/history/medieval" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Medieval Church History
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