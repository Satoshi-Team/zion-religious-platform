import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MapPin, Users, Clock, Star, Shield, Heart, Target, Zap, Lightbulb, Globe, Mountain, Calendar, Camera, BookOpen, Compass, Crown } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vatican City - Center of the Catholic Church | Sacred Places & Pilgrimage Sites | ZION.FM',
  description: 'Explore Vatican City, the smallest independent state and spiritual center of the Catholic Church. Discover St. Peter\'s Basilica, Sistine Chapel, and Vatican Museums.',
  keywords: 'Vatican City, St. Peter\'s Basilica, Sistine Chapel, Vatican Museums, Pope, Catholic Church, Rome, pilgrimage, religious art',
  openGraph: {
    title: 'Vatican City - Center of the Catholic Church',
    description: 'Discover the spiritual and artistic treasures of Vatican City, the heart of Catholicism.',
    type: 'website',
  },
}

const vaticanData = {
  name: 'Vatican City',
  country: 'Vatican City State',
  significance: 'Center of the Catholic Church and residence of the Pope',
  description: 'Vatican City is the world\'s smallest independent state and the spiritual center of the Roman Catholic Church. Home to the Pope and some of the world\'s most magnificent religious art and architecture.',
  religions: ['Catholicism'],
  bestTime: 'Year-round, but spring and fall are most pleasant',
  climate: 'Mediterranean climate with hot summers and mild winters',
  language: 'Italian, Latin',
  currency: 'Euro (EUR)',
  timezone: 'Central European Time (CET)',
  
  highlights: [
    {
      name: 'St. Peter\'s Basilica',
      description: 'The largest church in the world and the most important Catholic church.',
      significance: 'Built over the tomb of St. Peter, contains Michelangelo\'s Pietà and Bernini\'s Baldacchino',
      tips: 'Visit early morning to avoid crowds. Dress modestly (covered shoulders and knees).',
      location: 'St. Peter\'s Square',
      mustSee: ['Pietà by Michelangelo', 'Baldacchino by Bernini', 'Papal Altar', 'Dome climb']
    },
    {
      name: 'Sistine Chapel',
      description: 'Famous for Michelangelo\'s ceiling frescoes and The Last Judgment.',
      significance: 'Site of papal conclaves and one of the world\'s greatest artistic masterpieces',
      tips: 'Book tickets in advance. No photography allowed. Be quiet and respectful.',
      location: 'Vatican Museums',
      mustSee: ['Creation of Adam', 'The Last Judgment', 'Prophets and Sibyls', 'Papal throne']
    },
    {
      name: 'Vatican Museums',
      description: 'One of the world\'s largest art collections spanning centuries of religious and secular art.',
      significance: 'Contains priceless works from ancient Egypt to contemporary art',
      tips: 'Allow 3-4 hours minimum. Book skip-the-line tickets. Follow the recommended route.',
      location: 'Vatican City',
      mustSee: ['Raphael Rooms', 'Borgia Apartments', 'Gallery of Maps', 'Egyptian Museum']
    },
    {
      name: 'St. Peter\'s Square',
      description: 'Magnificent plaza designed by Bernini, the main entrance to Vatican City.',
      significance: 'Site of major papal ceremonies and gatherings',
      tips: 'Best photos in early morning or late afternoon. Attend Sunday Angelus for papal blessing.',
      location: 'Main entrance to Vatican City',
      mustSee: ['Obelisk', 'Fountains', 'Colonnades', 'Papal apartments balcony']
    },
    {
      name: 'Vatican Gardens',
      description: 'Beautiful gardens covering more than half of Vatican City.',
      significance: 'Private papal gardens with fountains, sculptures, and peaceful walking paths',
      tips: 'Requires special guided tour. Book well in advance. Photography allowed.',
      location: 'Behind St. Peter\'s Basilica',
      mustSee: ['Casina Pio IV', 'Fountain of the Eagle', 'Medieval walls', 'Pope\'s heliport']
    },
    {
      name: 'Vatican Library',
      description: 'One of the oldest libraries in the world with priceless manuscripts.',
      significance: 'Contains over 1.1 million books and 75,000 manuscripts',
      tips: 'Access requires special permission. Scholars and researchers only.',
      location: 'Vatican Museums complex',
      mustSee: ['Ancient manuscripts', 'Rare books', 'Historical documents', 'Papal archives']
    }
  ],
  
  practicalInfo: {
    gettingThere: [
      'Metro Line A to Ottaviano-San Pietro station',
      'Bus lines 64, 62, 40, 81 to Vatican area',
      'Walking distance from Rome\'s historic center',
      'Taxis available from anywhere in Rome'
    ],
    accommodation: [
      'Hotels in Prati district (closest to Vatican)',
      'Accommodation in Rome\'s historic center',
      'Religious guesthouses and convents',
      'Airbnb options in nearby neighborhoods'
    ],
    safety: [
      'Very safe, heavily secured area',
      'Beware of pickpockets in crowded areas',
      'Follow security instructions',
      'Respect dress codes and behavior guidelines'
    ],
    etiquette: [
      'Dress modestly - covered shoulders and knees',
      'Remove hats when entering churches',
      'Be quiet and respectful in religious areas',
      'No photography in Sistine Chapel',
      'Follow security personnel instructions'
    ]
  },
  
  events: [
    {
      name: 'Papal Audience',
      time: 'Wednesdays at 9:30 AM',
      description: 'Weekly public audience with the Pope in St. Peter\'s Square or Paul VI Hall',
      tickets: 'Free, but must be requested in advance'
    },
    {
      name: 'Sunday Angelus',
      time: 'Sundays at 12:00 PM',
      description: 'Pope\'s weekly blessing from his apartment window',
      tickets: 'No tickets needed, open to public'
    },
    {
      name: 'Easter Mass',
      time: 'Easter Sunday',
      description: 'Pope\'s Easter Mass in St. Peter\'s Square',
      tickets: 'Free, but extremely crowded'
    },
    {
      name: 'Christmas Mass',
      time: 'Christmas Eve and Day',
      description: 'Midnight Mass and Christmas Day Mass',
      tickets: 'Free, but requires advance booking'
    }
  ],
  
  nearbyPlaces: [
    {
      name: 'Rome',
      distance: '0 km (surrounded by)',
      significance: 'Eternal City with ancient ruins and Christian sites',
      link: '/resources/places/rome'
    },
    {
      name: 'Assisi',
      distance: '180 km',
      significance: 'Birthplace of St. Francis and important pilgrimage site',
      link: '/resources/places/assisi'
    },
    {
      name: 'Lourdes',
      distance: '1,200 km',
      significance: 'Marian apparition site and healing destination',
      link: '/resources/places/lourdes'
    }
  ]
}

export default function VaticanCityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mb-4">
            <Link 
              href="/resources/places"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Sacred Places
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold mb-2">{vaticanData.name}</h1>
          <div className="flex justify-center items-center gap-4 text-lg text-muted-foreground mb-4">
            <MapPin className="h-5 w-5" />
            <span>{vaticanData.country}</span>
            <span>•</span>
            <span>{vaticanData.significance}</span>
          </div>
          
          <div className="flex justify-center gap-2 mb-6">
            {vaticanData.religions.map(religion => (
              <Badge key={religion} variant="secondary">
                {religion}
              </Badge>
            ))}
          </div>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {vaticanData.description}
          </p>
        </div>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="highlights">Sacred Sites</TabsTrigger>
            <TabsTrigger value="practical">Practical Info</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Best Time to Visit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{vaticanData.bestTime}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    Climate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{vaticanData.climate}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Language
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{vaticanData.language}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Timezone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{vaticanData.timezone}</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Religious Significance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Crown className="h-5 w-5 text-yellow-600" />
                      Center of Catholicism
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Vatican City serves as the spiritual and administrative center of the Roman Catholic Church, 
                      home to the Pope and the Holy See. It represents the continuity of the Church founded by 
                      St. Peter and maintains the traditions of 2,000 years of Christianity.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                      Papal Authority
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      As the residence of the Pope, Vatican City is the source of papal teachings, 
                      encyclicals, and spiritual guidance for over 1.3 billion Catholics worldwide. 
                      It symbolizes the unity of the Catholic Church and its mission to spread the Gospel.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="highlights" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {vaticanData.highlights.map((site, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{site.name}</CardTitle>
                    <CardDescription>{site.location}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm">{site.description}</p>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Significance:</h4>
                      <p className="text-sm text-muted-foreground">{site.significance}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Visitor Tips:</h4>
                      <p className="text-sm text-muted-foreground">{site.tips}</p>
                    </div>
                    {site.mustSee && (
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Must See:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {site.mustSee.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-blue-600 mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="practical" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Getting There</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {vaticanData.practicalInfo.gettingThere.map((item, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Accommodation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {vaticanData.practicalInfo.accommodation.map((item, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Safety & Etiquette</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Safety:</h4>
                      <ul className="space-y-1">
                        {vaticanData.practicalInfo.safety.map((item, index) => (
                          <li key={index} className="text-sm flex items-start gap-2">
                            <span className="text-green-600 mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Etiquette:</h4>
                      <ul className="space-y-1">
                        {vaticanData.practicalInfo.etiquette.map((item, index) => (
                          <li key={index} className="text-sm flex items-start gap-2">
                            <span className="text-orange-600 mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {vaticanData.events.map((event, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{event.name}</CardTitle>
                    <CardDescription>{event.time}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm">{event.description}</p>
                      <p className="text-sm font-medium text-blue-600">{event.tickets}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Nearby Places */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Nearby Sacred Places</CardTitle>
            <CardDescription>Explore other significant religious sites in Italy and Europe</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {vaticanData.nearbyPlaces.map((place, index) => (
                <Link key={index} href={place.link}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-1">{place.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{place.distance}</p>
                      <p className="text-sm">{place.significance}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Study Resources */}
        <Card>
          <CardHeader>
            <CardTitle>Study Resources</CardTitle>
            <CardDescription>Deepen your understanding of Vatican City and Catholicism</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/studies/theology">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <BookOpen className="h-6 w-6 mb-2 text-blue-600" />
                    <h4 className="font-semibold mb-2">Catholic Theology</h4>
                    <p className="text-sm text-muted-foreground">Study Catholic doctrine and papal teachings</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/studies/history">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <Lightbulb className="h-6 w-6 mb-2 text-yellow-600" />
                    <h4 className="font-semibold mb-2">Church History</h4>
                    <p className="text-sm text-muted-foreground">Explore the history of the Catholic Church and papacy</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/teachings/sermons">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <Shield className="h-6 w-6 mb-2 text-green-600" />
                    <h4 className="font-semibold mb-2">Papal Teachings</h4>
                    <p className="text-sm text-muted-foreground">Learn from papal encyclicals and addresses</p>
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