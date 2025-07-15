import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MapPin, Users, Clock, Star, Shield, Heart, Target, Zap, Lightbulb, Globe, Mountain } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sacred Places & Pilgrimage Sites - Religious Destinations Worldwide | ZION.FM',
  description: 'Explore sacred places and pilgrimage sites from world religions. Discover holy cities, temples, shrines, and spiritual destinations with historical and cultural significance.',
  keywords: 'sacred places, pilgrimage sites, holy cities, religious destinations, temples, shrines, spiritual travel, religious tourism',
  openGraph: {
    title: 'Sacred Places & Pilgrimage Sites - Religious Destinations Worldwide',
    description: 'Discover the world\'s most sacred places and pilgrimage destinations.',
    type: 'website',
  },
}

const sacredPlaces = [
  {
    religion: 'Christianity',
    description: 'Holy sites and pilgrimage destinations in Christianity',
    icon: Shield,
    places: [
      {
        name: 'Jerusalem',
        country: 'Israel',
        significance: 'Holy city for Christianity, Judaism, and Islam',
        highlights: ['Church of the Holy Sepulchre', 'Via Dolorosa', 'Mount of Olives', 'Garden of Gethsemane'],
        bestTime: 'Spring and Fall',
        link: '/resources/places/jerusalem'
      },
      {
        name: 'Vatican City',
        country: 'Vatican City',
        significance: 'Center of the Catholic Church',
        highlights: ['St. Peter\'s Basilica', 'Sistine Chapel', 'Vatican Museums', 'St. Peter\'s Square'],
        bestTime: 'Year-round',
        link: '/resources/places/vatican-city'
      },
      {
        name: 'Santiago de Compostela',
        country: 'Spain',
        significance: 'End point of the Camino de Santiago pilgrimage',
        highlights: ['Cathedral of Santiago', 'Camino trails', 'Pilgrim\'s Mass', 'Botafumeiro'],
        bestTime: 'Spring to Fall',
        link: '/resources/places/santiago-compostela'
      },
      {
        name: 'Lourdes',
        country: 'France',
        significance: 'Marian apparition site and healing destination',
        highlights: ['Sanctuary of Our Lady', 'Grotto of Massabielle', 'Healing waters', 'Processions'],
        bestTime: 'May to October',
        link: '/resources/places/lourdes'
      }
    ]
  },
  {
    religion: 'Islam',
    description: 'Sacred sites and pilgrimage destinations in Islam',
    icon: Heart,
    places: [
      {
        name: 'Mecca',
        country: 'Saudi Arabia',
        significance: 'Holiest city in Islam, site of the Kaaba',
        highlights: ['Kaaba', 'Masjid al-Haram', 'Mount Arafat', 'Zamzam Well'],
        bestTime: 'Hajj season (Dhu al-Hijjah)',
        link: '/resources/places/mecca'
      },
      {
        name: 'Medina',
        country: 'Saudi Arabia',
        significance: 'Second holiest city, burial place of Prophet Muhammad',
        highlights: ['Al-Masjid an-Nabawi', 'Quba Mosque', 'Mount Uhud', 'Qiblatayn Mosque'],
        bestTime: 'Year-round',
        link: '/resources/places/medina'
      },
      {
        name: 'Jerusalem (Al-Quds)',
        country: 'Israel',
        significance: 'Third holiest city in Islam',
        highlights: ['Al-Aqsa Mosque', 'Dome of the Rock', 'Temple Mount', 'Old City'],
        bestTime: 'Spring and Fall',
        link: '/resources/places/jerusalem-islam'
      },
      {
        name: 'Karbala',
        country: 'Iraq',
        significance: 'Site of Imam Husayn\'s martyrdom',
        highlights: ['Imam Husayn Shrine', 'Al-Abbas Shrine', 'Arbaeen pilgrimage', 'Historical sites'],
        bestTime: 'Arbaeen season',
        link: '/resources/places/karbala'
      }
    ]
  },
  {
    religion: 'Hinduism',
    description: 'Sacred sites and pilgrimage destinations in Hinduism',
    icon: Target,
    places: [
      {
        name: 'Varanasi',
        country: 'India',
        significance: 'Holiest city in Hinduism, city of Shiva',
        highlights: ['Ganges River', 'Kashi Vishwanath Temple', 'Ghats', 'Evening Aarti'],
        bestTime: 'October to March',
        link: '/resources/places/varanasi'
      },
      {
        name: 'Vrindavan',
        country: 'India',
        significance: 'Sacred city associated with Lord Krishna',
        highlights: ['Banke Bihari Temple', 'ISKCON Temple', 'Radha Raman Temple', 'Krishna Janmasthan'],
        bestTime: 'October to March',
        link: '/resources/places/vrindavan'
      },
      {
        name: 'Badrinath',
        country: 'India',
        significance: 'One of the Char Dham pilgrimage sites',
        highlights: ['Badrinath Temple', 'Alaknanda River', 'Tapt Kund', 'Mana Village'],
        bestTime: 'May to November',
        link: '/resources/places/badrinath'
      },
      {
        name: 'Rameshwaram',
        country: 'India',
        significance: 'Sacred island and pilgrimage site',
        highlights: ['Ramanathaswamy Temple', 'Dhanushkodi', 'Agni Theertham', 'Pamban Bridge'],
        bestTime: 'October to March',
        link: '/resources/places/rameshwaram'
      }
    ]
  },
  {
    religion: 'Buddhism',
    description: 'Sacred sites and pilgrimage destinations in Buddhism',
    icon: Lightbulb,
    places: [
      {
        name: 'Bodh Gaya',
        country: 'India',
        significance: 'Site of Buddha\'s enlightenment',
        highlights: ['Mahabodhi Temple', 'Bodhi Tree', 'Great Buddha Statue', 'Meditation parks'],
        bestTime: 'October to March',
        link: '/resources/places/bodh-gaya'
      },
      {
        name: 'Lumbini',
        country: 'Nepal',
        significance: 'Birthplace of Buddha',
        highlights: ['Maya Devi Temple', 'Sacred Garden', 'World Peace Pagoda', 'Monasteries'],
        bestTime: 'October to May',
        link: '/resources/places/lumbini'
      },
      {
        name: 'Sarnath',
        country: 'India',
        significance: 'Site of Buddha\'s first teaching',
        highlights: ['Dhamek Stupa', 'Mulagandhakuti Vihara', 'Archaeological Museum', 'Deer Park'],
        bestTime: 'October to March',
        link: '/resources/places/sarnath'
      },
      {
        name: 'Kushinagar',
        country: 'India',
        significance: 'Site of Buddha\'s parinirvana',
        highlights: ['Mahaparinirvana Temple', 'Ramabhar Stupa', 'Matha Kuar Shrine', 'Nirvana Stupa'],
        bestTime: 'October to March',
        link: '/resources/places/kushinagar'
      }
    ]
  }
]

const pilgrimageTypes = [
  {
    title: 'Religious Pilgrimages',
    description: 'Traditional religious journeys to sacred sites',
    examples: [
      'Hajj (Islamic pilgrimage to Mecca)',
      'Kumbh Mela (Hindu pilgrimage)',
      'Camino de Santiago (Christian pilgrimage)',
      'Buddhist pilgrimage to four holy sites'
    ],
    significance: 'Spiritual purification and religious obligation'
  },
  {
    title: 'Cultural Pilgrimages',
    description: 'Journeys to sites of cultural and historical importance',
    examples: [
      'Visiting ancient temples and monuments',
      'Exploring religious architecture',
      'Learning about religious history',
      'Experiencing religious festivals'
    ],
    significance: 'Cultural understanding and historical appreciation'
  },
  {
    title: 'Personal Pilgrimages',
    description: 'Individual spiritual journeys and retreats',
    examples: [
      'Meditation retreats',
      'Spiritual workshops',
      'Personal reflection journeys',
      'Religious study programs'
    ],
    significance: 'Personal growth and spiritual development'
  },
  {
    title: 'Modern Pilgrimages',
    description: 'Contemporary approaches to sacred travel',
    examples: [
      'Religious tourism',
      'Interfaith dialogue visits',
      'Religious heritage tours',
      'Digital pilgrimage experiences'
    ],
    significance: 'Accessibility and modern engagement'
  }
]

const travelResources = [
  {
    category: 'Travel Planning',
    resources: [
      { name: 'Sacred Destinations', url: 'https://www.sacred-destinations.com/', description: 'Comprehensive guide to sacred sites worldwide' },
      { name: 'Pilgrimage Routes', url: 'https://www.pilgrimage-ways.com/', description: 'Information on pilgrimage routes and trails' },
      { name: 'Religious Tourism Guide', url: 'https://www.religious-tourism.com/', description: 'Guide to religious tourism destinations' },
      { name: 'Sacred Site Maps', url: 'https://www.sacred-sites.org/', description: 'Maps and information about sacred places' }
    ]
  },
  {
    category: 'Cultural Information',
    resources: [
      { name: 'UNESCO World Heritage', url: 'https://whc.unesco.org/', description: 'World Heritage religious sites' },
      { name: 'Religious Architecture', url: 'https://www.architecture.com/', description: 'Religious building and design information' },
      { name: 'Cultural Heritage', url: 'https://www.unesco.org/culture/', description: 'Cultural heritage and preservation' },
      { name: 'Religious Festivals', url: 'https://www.festivals.com/', description: 'Religious festivals and celebrations' }
    ]
  },
  {
    category: 'Practical Travel',
    resources: [
      { name: 'Travel Advisories', url: 'https://travel.state.gov/', description: 'Government travel information and advisories' },
      { name: 'Religious Etiquette', url: 'https://www.etiquette.com/', description: 'Cultural and religious etiquette guides' },
      { name: 'Pilgrimage Services', url: 'https://www.pilgrimage-services.com/', description: 'Pilgrimage travel services and tours' },
      { name: 'Sacred Site Photography', url: 'https://www.photography.com/', description: 'Photography guidelines for sacred sites' }
    ]
  }
]

const sacredSiteFeatures = [
  {
    title: 'Architectural Marvels',
    description: 'Religious buildings and structures of historical significance',
    examples: [
      'Gothic cathedrals and basilicas',
      'Islamic mosques and madrasas',
      'Hindu temples and gopurams',
      'Buddhist stupas and pagodas',
      'Jewish synagogues and yeshivas'
    ]
  },
  {
    title: 'Natural Sacred Sites',
    description: 'Natural locations with religious significance',
    examples: [
      'Sacred mountains and peaks',
      'Holy rivers and water bodies',
      'Sacred groves and forests',
      'Desert retreats and oases',
      'Caves and rock formations'
    ]
  },
  {
    title: 'Historical Sites',
    description: 'Places of historical religious importance',
    examples: [
      'Ancient religious ruins',
      'Archaeological sites',
      'Historical battlefields',
      'Religious settlements',
      'Pilgrimage routes'
    ]
  },
  {
    title: 'Modern Sacred Spaces',
    description: 'Contemporary religious and spiritual centers',
    examples: [
      'Modern temples and churches',
      'Meditation centers',
      'Interfaith centers',
      'Religious museums',
      'Spiritual retreats'
    ]
  }
]

const pilgrimageGuidance = [
  {
    title: 'Preparation',
    tips: [
      'Research the site and its significance',
      'Understand local customs and etiquette',
      'Check travel requirements and restrictions',
      'Plan appropriate clothing and gear',
      'Learn basic local language phrases'
    ]
  },
  {
    title: 'Respect and Etiquette',
    tips: [
      'Follow local religious customs',
      'Dress appropriately for the site',
      'Maintain respectful behavior',
      'Ask permission before photography',
      'Observe silence in sacred areas'
    ]
  },
  {
    title: 'Safety and Health',
    tips: [
      'Check travel advisories',
      'Get necessary vaccinations',
      'Bring appropriate medications',
      'Stay hydrated and well-rested',
      'Follow local health guidelines'
    ]
  },
  {
    title: 'Cultural Sensitivity',
    tips: [
      'Learn about local religious practices',
      'Respect prayer times and rituals',
      'Avoid inappropriate behavior',
      'Support local communities',
      'Leave positive impact'
    ]
  }
]

export default function SacredPlacesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Sacred Places & Pilgrimage Sites
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Discover the world\'s most sacred places and pilgrimage destinations. From ancient temples 
          to holy cities, explore religious sites that have drawn pilgrims and seekers for centuries, 
          each with their own unique spiritual significance and cultural heritage.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Badge variant="secondary" className="text-sm">Holy Cities</Badge>
          <Badge variant="secondary" className="text-sm">Temples</Badge>
          <Badge variant="secondary" className="text-sm">Pilgrimage Routes</Badge>
          <Badge variant="secondary" className="text-sm">Sacred Sites</Badge>
          <Badge variant="secondary" className="text-sm">Religious Tourism</Badge>
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="places" className="mb-12">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="places">Sacred Places</TabsTrigger>
          <TabsTrigger value="pilgrimages">Pilgrimages</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="guidance">Guidance</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="places" className="space-y-8">
          {sacredPlaces.map((religion) => {
            const Icon = religion.icon
            return (
              <Card key={religion.religion}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-2xl">{religion.religion}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {religion.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {religion.places.map((place) => (
                      <Card key={place.name} className="h-full">
                        <CardHeader>
                          <CardTitle className="text-xl">{place.name}</CardTitle>
                          <CardDescription className="text-base">
                            {place.country} • {place.significance}
                          </CardDescription>
                          <Badge variant="outline">{place.bestTime}</Badge>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Highlights:</h4>
                            <ul className="space-y-1 text-sm">
                              {place.highlights.map((highlight) => (
                                <li key={highlight} className="flex items-start gap-2">
                                  <Star className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <Button asChild className="w-full">
                            <Link href={place.link}>
                              Explore {place.name}
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

        <TabsContent value="pilgrimages" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {pilgrimageTypes.map((type) => (
              <Card key={type.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <CardDescription className="text-base">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <ul className="space-y-1 text-sm">
                      {type.examples.map((example) => (
                        <li key={example} className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Significance:</h4>
                    <p className="text-sm text-muted-foreground">{type.significance}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="features" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {sacredSiteFeatures.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.examples.map((example) => (
                      <li key={example} className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{example}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="guidance" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {pilgrimageGuidance.map((section) => (
              <Card key={section.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-8">
          {travelResources.map((category) => (
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
            <h3 className="text-2xl font-bold mb-4">Plan Your Sacred Journey</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you\'re planning a religious pilgrimage, cultural visit, or spiritual retreat, 
              these sacred places offer profound experiences of faith, history, and human spirituality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/resources/history">Religious History</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/resources/art">Religious Art</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/resources/music">Religious Music</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 