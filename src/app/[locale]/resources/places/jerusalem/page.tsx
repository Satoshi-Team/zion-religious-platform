import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MapPin, Users, Clock, Star, Shield, Heart, Target, Zap, Lightbulb, Globe, Mountain, Calendar, Camera, BookOpen, Compass } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Jerusalem - Holy City for Three Faiths | Sacred Places & Pilgrimage Sites | ZION.FM',
  description: 'Explore Jerusalem, the holy city sacred to Judaism, Christianity, and Islam. Discover the Church of the Holy Sepulchre, Western Wall, Al-Aqsa Mosque, and sacred sites.',
  keywords: 'Jerusalem, holy city, Church of the Holy Sepulchre, Western Wall, Al-Aqsa Mosque, Temple Mount, Via Dolorosa, Mount of Olives, religious pilgrimage',
  openGraph: {
    title: 'Jerusalem - Holy City for Three Faiths',
    description: 'Discover Jerusalem\'s sacred sites and spiritual significance for Judaism, Christianity, and Islam.',
    type: 'website',
  },
}

const jerusalemData = {
  name: 'Jerusalem',
  country: 'Israel',
  significance: 'Holy city for Judaism, Christianity, and Islam',
  description: 'Jerusalem is one of the oldest cities in the world and holds profound religious significance for three major world religions. Known as the "City of Peace," it has been a center of spiritual pilgrimage for millennia.',
  religions: ['Judaism', 'Christianity', 'Islam'],
  bestTime: 'Spring (March-May) and Fall (September-November)',
  climate: 'Mediterranean climate with hot, dry summers and mild, wet winters',
  language: 'Hebrew, Arabic, English',
  currency: 'Israeli Shekel (ILS)',
  timezone: 'Israel Standard Time (IST)',
  
  highlights: [
    {
      name: 'Church of the Holy Sepulchre',
      religion: 'Christianity',
      description: 'The most sacred site in Christianity, believed to be the location of Jesus\' crucifixion, burial, and resurrection.',
      significance: 'Contains the Stone of Anointing, the Tomb of Jesus, and Calvary (Golgotha)',
      tips: 'Visit early morning to avoid crowds. Dress modestly and be respectful of ongoing services.',
      location: 'Christian Quarter, Old City'
    },
    {
      name: 'Western Wall (Kotel)',
      religion: 'Judaism',
      description: 'The holiest site in Judaism, the last remaining wall of the Second Temple.',
      significance: 'Jews pray here and place written prayers in the wall\'s cracks',
      tips: 'Separate prayer areas for men and women. Cover your head (kippah provided).',
      location: 'Jewish Quarter, Old City'
    },
    {
      name: 'Al-Aqsa Mosque',
      religion: 'Islam',
      description: 'The third holiest site in Islam, where Prophet Muhammad ascended to heaven.',
      significance: 'Site of the Night Journey (Isra and Mi\'raj)',
      tips: 'Non-Muslims cannot enter the mosque but can visit the Temple Mount complex.',
      location: 'Temple Mount, Old City'
    },
    {
      name: 'Dome of the Rock',
      religion: 'Islam',
      description: 'Iconic golden-domed shrine marking the spot where Prophet Muhammad ascended to heaven.',
      significance: 'Built on the Foundation Stone, sacred to all three Abrahamic religions',
      tips: 'Non-Muslims cannot enter but can admire the exterior and visit the Temple Mount.',
      location: 'Temple Mount, Old City'
    },
    {
      name: 'Via Dolorosa',
      religion: 'Christianity',
      description: 'The "Way of Sorrow," the path Jesus walked carrying the cross to his crucifixion.',
      significance: 'Fourteen stations of the cross mark significant events along the way',
      tips: 'Follow the route on Fridays when Franciscan monks lead processions.',
      location: 'Old City, from Lion\'s Gate to Church of the Holy Sepulchre'
    },
    {
      name: 'Mount of Olives',
      religion: 'Christianity, Judaism',
      description: 'Sacred mountain with panoramic views of Jerusalem and important religious sites.',
      significance: 'Site of Jesus\' ascension and location of the Garden of Gethsemane',
      tips: 'Visit at sunset for spectacular views. Many important churches and cemeteries here.',
      location: 'East Jerusalem'
    }
  ],
  
  practicalInfo: {
    gettingThere: [
      'Ben Gurion Airport (TLV) - 45 minutes by car or train',
      'Regular buses from Tel Aviv and other Israeli cities',
      'Light rail connects major areas of the city'
    ],
    accommodation: [
      'Old City hotels for authentic experience',
      'West Jerusalem for modern amenities',
      'Hostels and guesthouses for budget travelers',
      'Religious guesthouses for spiritual retreats'
    ],
    safety: [
      'Generally safe for tourists',
      'Be aware of political tensions',
      'Follow local advice and travel advisories',
      'Respect religious customs and dress codes'
    ],
    etiquette: [
      'Dress modestly, especially at religious sites',
      'Remove shoes before entering mosques',
      'Cover head at Jewish sites',
      'Be respectful during prayer times',
      'Ask permission before taking photos of people'
    ]
  },
  
  festivals: [
    {
      name: 'Passover',
      religion: 'Judaism',
      time: 'Spring (March/April)',
      description: 'Celebration of the Exodus from Egypt'
    },
    {
      name: 'Easter',
      religion: 'Christianity',
      time: 'Spring (March/April)',
      description: 'Commemoration of Jesus\' resurrection'
    },
    {
      name: 'Ramadan',
      religion: 'Islam',
      time: 'Ninth month of Islamic calendar',
      description: 'Month of fasting and spiritual reflection'
    }
  ],
  
  nearbyPlaces: [
    {
      name: 'Bethlehem',
      distance: '10 km',
      significance: 'Birthplace of Jesus',
      link: '/resources/places/bethlehem'
    },
    {
      name: 'Dead Sea',
      distance: '40 km',
      significance: 'Lowest point on Earth, healing waters',
      link: '/resources/places/dead-sea'
    },
    {
      name: 'Masada',
      distance: '80 km',
      significance: 'Ancient fortress and UNESCO site',
      link: '/resources/places/masada'
    }
  ]
}

export default function JerusalemPage() {
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
          
          <h1 className="text-4xl font-bold mb-2">{jerusalemData.name}</h1>
          <div className="flex justify-center items-center gap-4 text-lg text-muted-foreground mb-4">
            <MapPin className="h-5 w-5" />
            <span>{jerusalemData.country}</span>
            <span>•</span>
            <span>{jerusalemData.significance}</span>
          </div>
          
          <div className="flex justify-center gap-2 mb-6">
            {jerusalemData.religions.map(religion => (
              <Badge key={religion} variant="secondary">
                {religion}
              </Badge>
            ))}
          </div>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {jerusalemData.description}
          </p>
        </div>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="highlights">Sacred Sites</TabsTrigger>
            <TabsTrigger value="practical">Practical Info</TabsTrigger>
            <TabsTrigger value="festivals">Festivals</TabsTrigger>
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
                  <p className="text-sm">{jerusalemData.bestTime}</p>
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
                  <p className="text-sm">{jerusalemData.climate}</p>
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
                  <p className="text-sm">{jerusalemData.language}</p>
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
                  <p className="text-sm">{jerusalemData.timezone}</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Historical Significance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <Shield className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <h3 className="font-semibold mb-2">Judaism</h3>
                    <p className="text-sm text-muted-foreground">
                      Ancient capital of the Kingdom of Israel, site of the First and Second Temples, 
                      and the eternal capital of the Jewish people.
                    </p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Heart className="h-8 w-8 mx-auto mb-2 text-red-600" />
                    <h3 className="font-semibold mb-2">Christianity</h3>
                    <p className="text-sm text-muted-foreground">
                      Location of Jesus' ministry, crucifixion, and resurrection. 
                      The center of early Christianity and many biblical events.
                    </p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Target className="h-8 w-8 mx-auto mb-2 text-green-600" />
                    <h3 className="font-semibold mb-2">Islam</h3>
                    <p className="text-sm text-muted-foreground">
                      Third holiest city in Islam, site of Prophet Muhammad's Night Journey 
                      and the first qibla (direction of prayer).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="highlights" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jerusalemData.highlights.map((site, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{site.name}</CardTitle>
                      <Badge variant="outline">{site.religion}</Badge>
                    </div>
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
                    {jerusalemData.practicalInfo.gettingThere.map((item, index) => (
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
                    {jerusalemData.practicalInfo.accommodation.map((item, index) => (
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
                        {jerusalemData.practicalInfo.safety.map((item, index) => (
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
                        {jerusalemData.practicalInfo.etiquette.map((item, index) => (
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

          <TabsContent value="festivals" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {jerusalemData.festivals.map((festival, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{festival.name}</CardTitle>
                    <CardDescription>{festival.religion}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">When: {festival.time}</p>
                      <p className="text-sm text-muted-foreground">{festival.description}</p>
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
            <CardDescription>Explore other significant religious sites in the region</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {jerusalemData.nearbyPlaces.map((place, index) => (
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
            <CardDescription>Deepen your understanding of Jerusalem's religious significance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/studies/history">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <BookOpen className="h-6 w-6 mb-2 text-blue-600" />
                    <h4 className="font-semibold mb-2">Religious History</h4>
                    <p className="text-sm text-muted-foreground">Explore the historical development of Jerusalem's religious significance</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/studies/theology">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <Lightbulb className="h-6 w-6 mb-2 text-yellow-600" />
                    <h4 className="font-semibold mb-2">Theological Studies</h4>
                    <p className="text-sm text-muted-foreground">Study the theological importance of Jerusalem in different faiths</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/teachings/bible">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <Shield className="h-6 w-6 mb-2 text-green-600" />
                    <h4 className="font-semibold mb-2">Biblical Studies</h4>
                    <p className="text-sm text-muted-foreground">Learn about Jerusalem's role in biblical narratives and teachings</p>
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