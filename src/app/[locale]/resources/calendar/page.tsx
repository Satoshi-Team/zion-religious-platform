import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, Star, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Religious Calendar Resources - Sacred Calendars & Festivals',
  description: 'Explore sacred calendars and religious festivals across world religions. Discover lunar and solar calendars, holy days, and seasonal celebrations from Christianity, Islam, Hinduism, Buddhism, Judaism, and more.',
  keywords: 'religious calendar, sacred calendar, religious festivals, holy days, lunar calendar, solar calendar, religious holidays, world religions calendar',
  openGraph: {
    title: 'Religious Calendar Resources - Sacred Calendars & Festivals',
    description: 'Explore sacred calendars and religious festivals across world religions. Discover lunar and solar calendars, holy days, and seasonal celebrations.',
    type: 'website',
  },
}

const calendarSystems = [
  {
    religion: 'Christianity',
    calendars: [
      {
        name: 'Gregorian Calendar',
        description: 'Solar calendar introduced by Pope Gregory XIII in 1582, now the most widely used civil calendar worldwide.',
        type: 'Solar',
        features: ['365.2425 days per year', 'Leap year system', 'Fixed seasons', 'Civil standard'],
        keyDates: ['Christmas (Dec 25)', 'Easter (Variable)', 'Epiphany (Jan 6)', 'Pentecost (Variable)']
      },
      {
        name: 'Liturgical Calendar',
        description: 'Christian calendar organizing the year around the life of Christ and saints, with seasons like Advent, Lent, and Easter.',
        type: 'Liturgical',
        features: ['Christological focus', 'Saint commemorations', 'Seasonal themes', 'Color coding'],
        keyDates: ['Advent (4 weeks)', 'Lent (40 days)', 'Easter Season (50 days)', 'Ordinary Time']
      }
    ]
  },
  {
    religion: 'Islam',
    calendars: [
      {
        name: 'Hijri Calendar',
        description: 'Lunar calendar based on the migration of Prophet Muhammad from Mecca to Medina in 622 CE.',
        type: 'Lunar',
        features: ['354-355 days per year', '12 lunar months', 'No leap months', 'Lunar phases'],
        keyDates: ['Ramadan (9th month)', 'Eid al-Fitr', 'Eid al-Adha', 'Muharram (1st month)']
      },
      {
        name: 'Islamic Calendar',
        description: 'Religious calendar used for determining Islamic holy days and festivals, with months like Ramadan and Dhul Hijjah.',
        type: 'Religious',
        features: ['Lunar reckoning', 'Religious observances', 'Pilgrimage timing', 'Fasting periods'],
        keyDates: ['Laylat al-Qadr', 'Day of Ashura', 'Prophet\'s Birthday', 'Night Journey']
      }
    ]
  },
  {
    religion: 'Hinduism',
    calendars: [
      {
        name: 'Vikram Samvat',
        description: 'Hindu lunar calendar used in Nepal and parts of India, with 12 lunar months and leap months.',
        type: 'Lunar-Solar',
        features: ['Lunar months', 'Solar years', 'Leap months', 'Regional variations'],
        keyDates: ['Diwali', 'Holi', 'Raksha Bandhan', 'Navratri']
      },
      {
        name: 'Shaka Samvat',
        description: 'Indian national calendar, a solar calendar with 12 months and leap years.',
        type: 'Solar',
        features: ['Solar reckoning', 'Fixed seasons', 'National standard', 'Astronomical basis'],
        keyDates: ['Makar Sankranti', 'Vasant Panchami', 'Guru Purnima', 'Krishna Janmashtami']
      }
    ]
  },
  {
    religion: 'Buddhism',
    calendars: [
      {
        name: 'Buddhist Calendar',
        description: 'Lunar calendar used in various Buddhist traditions, with months based on lunar cycles.',
        type: 'Lunar',
        features: ['Lunar months', 'Regional variations', 'Monastic schedules', 'Meditation periods'],
        keyDates: ['Vesak (Buddha\'s Birthday)', 'Magha Puja', 'Asalha Puja', 'Kathina']
      },
      {
        name: 'Tibetan Calendar',
        description: 'Complex lunar-solar calendar used in Tibetan Buddhism, incorporating astronomical calculations.',
        type: 'Lunar-Solar',
        features: ['Astronomical calculations', 'Leap months', 'Element cycles', 'Auspicious days'],
        keyDates: ['Losar (New Year)', 'Saga Dawa', 'Chokhor Duchen', 'Lhabab Duchen']
      }
    ]
  },
  {
    religion: 'Judaism',
    calendars: [
      {
        name: 'Hebrew Calendar',
        description: 'Lunar-solar calendar used in Judaism, with 12 or 13 months and complex intercalation rules.',
        type: 'Lunar-Solar',
        features: ['Lunar months', 'Solar years', 'Leap months', 'Biblical basis'],
        keyDates: ['Rosh Hashanah', 'Yom Kippur', 'Passover', 'Shavuot']
      },
      {
        name: 'Jewish Liturgical Calendar',
        description: 'Religious calendar organizing Jewish life around Torah readings and festivals.',
        type: 'Liturgical',
        features: ['Torah portions', 'Festival cycles', 'Fast days', 'Seasonal observances'],
        keyDates: ['Sukkot', 'Hanukkah', 'Purim', 'Tisha B\'Av']
      }
    ]
  },
  {
    religion: 'Sikhism',
    calendars: [
      {
        name: 'Nanakshahi Calendar',
        description: 'Solar calendar introduced in 2003, based on the birth of Guru Nanak and Sikh historical events.',
        type: 'Solar',
        features: ['Solar reckoning', 'Sikh history', 'Fixed dates', 'Modern adoption'],
        keyDates: ['Guru Nanak\'s Birthday', 'Guru Gobind Singh\'s Birthday', 'Vaisakhi', 'Martyrdom days']
      },
      {
        name: 'Bikrami Calendar',
        description: 'Traditional calendar used by Sikhs, based on the Vikram Samvat system.',
        type: 'Lunar-Solar',
        features: ['Lunar months', 'Solar years', 'Traditional use', 'Regional variations'],
        keyDates: ['Gurpurabs', 'Sangrand', 'Masya', 'Puranmashi']
      }
    ]
  }
]

const majorFestivals = [
  {
    religion: 'Christianity',
    festivals: [
      {
        name: 'Christmas',
        description: 'Celebration of the birth of Jesus Christ, observed on December 25th in most Christian traditions.',
        date: 'December 25',
        significance: 'Birth of Jesus Christ',
        practices: ['Church services', 'Gift giving', 'Family gatherings', 'Nativity scenes']
      },
      {
        name: 'Easter',
        description: 'Resurrection of Jesus Christ, the most important Christian festival, with variable dates.',
        date: 'Variable (Spring)',
        significance: 'Resurrection of Christ',
        practices: ['Church services', 'Easter eggs', 'Family meals', 'Religious processions']
      },
      {
        name: 'Pentecost',
        description: 'Descent of the Holy Spirit upon the apostles, marking the birth of the Christian Church.',
        date: 'Variable (50 days after Easter)',
        significance: 'Holy Spirit descent',
        practices: ['Church services', 'Red decorations', 'Confirmation ceremonies']
      }
    ]
  },
  {
    religion: 'Islam',
    festivals: [
      {
        name: 'Eid al-Fitr',
        description: 'Festival of Breaking the Fast, marking the end of Ramadan and the month of fasting.',
        date: 'Variable (1st Shawwal)',
        significance: 'End of Ramadan',
        practices: ['Prayer services', 'Feasting', 'Charity giving', 'Family visits']
      },
      {
        name: 'Eid al-Adha',
        description: 'Festival of Sacrifice, commemorating Abraham\'s willingness to sacrifice his son.',
        date: 'Variable (10th Dhul Hijjah)',
        significance: 'Sacrifice and obedience',
        practices: ['Animal sacrifice', 'Prayer services', 'Charity', 'Pilgrimage']
      },
      {
        name: 'Mawlid al-Nabi',
        description: 'Birthday of Prophet Muhammad, celebrated with prayers, poetry, and community gatherings.',
        date: 'Variable (12th Rabi al-Awwal)',
        significance: 'Prophet\'s birth',
        practices: ['Religious gatherings', 'Poetry recitation', 'Charity', 'Community meals']
      }
    ]
  },
  {
    religion: 'Hinduism',
    festivals: [
      {
        name: 'Diwali',
        description: 'Festival of Lights, celebrating the victory of light over darkness and good over evil.',
        date: 'Variable (October/November)',
        significance: 'Victory of light',
        practices: ['Oil lamps', 'Fireworks', 'Family gatherings', 'Gift giving']
      },
      {
        name: 'Holi',
        description: 'Festival of Colors, celebrating spring and the victory of good over evil.',
        date: 'Variable (February/March)',
        significance: 'Spring celebration',
        practices: ['Color throwing', 'Bonfires', 'Music and dance', 'Community celebration']
      },
      {
        name: 'Navratri',
        description: 'Nine nights of worship dedicated to the goddess Durga and her various forms.',
        date: 'Variable (September/October)',
        significance: 'Goddess worship',
        practices: ['Fasting', 'Prayer', 'Dance (Garba)', 'Temple visits']
      }
    ]
  },
  {
    religion: 'Buddhism',
    festivals: [
      {
        name: 'Vesak',
        description: 'Buddha\'s Birthday, celebrating the birth, enlightenment, and death of Gautama Buddha.',
        date: 'Variable (May)',
        significance: 'Buddha\'s life events',
        practices: ['Temple visits', 'Meditation', 'Charity', 'Lantern lighting']
      },
      {
        name: 'Magha Puja',
        description: 'Fourfold Assembly, commemorating Buddha\'s teaching to 1,250 enlightened monks.',
        date: 'Variable (February)',
        significance: 'Monastic community',
        practices: ['Temple ceremonies', 'Candle processions', 'Meditation', 'Dhamma talks']
      },
      {
        name: 'Asalha Puja',
        description: 'Dhamma Day, celebrating Buddha\'s first teaching of the Four Noble Truths.',
        date: 'Variable (July)',
        significance: 'First teaching',
        practices: ['Temple ceremonies', 'Dhamma talks', 'Meditation', 'Merit making']
      }
    ]
  },
  {
    religion: 'Judaism',
    festivals: [
      {
        name: 'Rosh Hashanah',
        description: 'Jewish New Year, marking the beginning of the High Holy Days and period of repentance.',
        date: 'Variable (September/October)',
        significance: 'New Year and judgment',
        practices: ['Synagogue services', 'Shofar blowing', 'Special meals', 'Reflection']
      },
      {
        name: 'Yom Kippur',
        description: 'Day of Atonement, the holiest day in Judaism, dedicated to repentance and forgiveness.',
        date: 'Variable (September/October)',
        significance: 'Atonement and forgiveness',
        practices: ['Fasting', 'Synagogue services', 'Prayer', 'Reflection']
      },
      {
        name: 'Passover',
        description: 'Festival of Freedom, commemorating the Exodus from Egypt and liberation from slavery.',
        date: 'Variable (March/April)',
        significance: 'Exodus and freedom',
        practices: ['Seder meal', 'Matzah eating', 'Family gatherings', 'Storytelling']
      }
    ]
  },
  {
    religion: 'Sikhism',
    festivals: [
      {
        name: 'Vaisakhi',
        description: 'Harvest festival and founding of the Khalsa, marking the birth of the Sikh community.',
        date: 'April 13-14',
        significance: 'Khalsa foundation',
        practices: ['Gurdwara services', 'Processions', 'Community meals', 'Kirtan']
      },
      {
        name: 'Guru Nanak\'s Birthday',
        description: 'Birthday of Guru Nanak, the founder of Sikhism and first of the ten Sikh Gurus.',
        date: 'Variable (October/November)',
        significance: 'Guru Nanak\'s birth',
        practices: ['Gurdwara services', 'Kirtan', 'Community meals', 'Processions']
      },
      {
        name: 'Martyrdom of Guru Tegh Bahadur',
        description: 'Commemoration of the martyrdom of the ninth Sikh Guru for religious freedom.',
        date: 'November 24',
        significance: 'Religious freedom',
        practices: ['Gurdwara services', 'Kirtan', 'Community meals', 'Reflection']
      }
    ]
  }
]

const calendarResources = [
  {
    category: 'Online Calendars',
    resources: [
      {
        name: 'Interfaith Calendar',
        description: 'Comprehensive calendar showing major religious holidays and festivals',
        url: 'https://www.interfaith-calendar.org/',
        type: 'Multi-faith'
      },
      {
        name: 'Religious Holidays',
        description: 'Detailed information about religious holidays and their significance',
        url: 'https://www.timeanddate.com/holidays/',
        type: 'Reference'
      },
      {
        name: 'Sacred Calendar',
        description: 'Interactive calendar with religious events and cultural celebrations',
        url: 'https://www.sacred-texts.com/calendar/',
        type: 'Interactive'
      }
    ]
  },
  {
    category: 'Academic Resources',
    resources: [
      {
        name: 'Calendar Studies Journal',
        description: 'Academic journal focusing on religious and cultural calendar systems',
        url: 'https://www.calendarstudies.org/',
        type: 'Academic'
      },
      {
        name: 'Chronology Database',
        description: 'Database of historical religious events and calendar conversions',
        url: 'https://www.chronology.org/',
        type: 'Research'
      }
    ]
  },
  {
    category: 'Mobile Apps',
    resources: [
      {
        name: 'Religious Calendar App',
        description: 'Mobile app with religious holidays and calendar conversions',
        url: 'https://play.google.com/store/apps/details?id=com.religiouscalendar',
        type: 'Mobile App'
      },
      {
        name: 'Interfaith Holidays',
        description: 'App showing major religious holidays and cultural celebrations',
        url: 'https://apps.apple.com/app/interfaith-holidays/id123456789',
        type: 'Mobile App'
      }
    ]
  }
]

export default function ReligiousCalendarPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Religious Calendar Resources</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore sacred calendars and religious festivals across world religions. Discover lunar and solar calendars, 
          holy days, and seasonal celebrations that mark the spiritual rhythms of human life.
        </p>
      </div>

      {/* Calendar Systems */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Sacred Calendar Systems</h2>
        <div className="space-y-12">
          {calendarSystems.map((religion) => (
            <div key={religion.religion} className="bg-card rounded-lg p-6 border">
              <h3 className="text-2xl font-bold mb-6 text-primary">{religion.religion}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {religion.calendars.map((calendar) => (
                  <Card key={calendar.name} className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        {calendar.name}
                      </CardTitle>
                      <CardDescription>
                        <Badge variant="outline">{calendar.type}</Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm">{calendar.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                        <ul className="text-xs space-y-1">
                          {calendar.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">Important Dates:</h4>
                        <div className="flex flex-wrap gap-1">
                          {calendar.keyDates.map((date) => (
                            <Badge key={date} variant="secondary" className="text-xs">
                              {date}
                            </Badge>
                          ))}
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

      {/* Major Festivals */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Major Religious Festivals</h2>
        <div className="space-y-12">
          {majorFestivals.map((religion) => (
            <div key={religion.religion} className="bg-card rounded-lg p-6 border">
              <h3 className="text-2xl font-bold mb-6 text-primary">{religion.religion}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {religion.festivals.map((festival) => (
                  <Card key={festival.name} className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Star className="h-5 w-5" />
                        {festival.name}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {festival.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm">{festival.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Significance:</h4>
                        <p className="text-xs text-muted-foreground">{festival.significance}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">Common Practices:</h4>
                        <ul className="text-xs space-y-1">
                          {festival.practices.map((practice) => (
                            <li key={practice} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              {practice}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Calendar Resources */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Calendar Resources & Tools</h2>
        <div className="space-y-8">
          {calendarResources.map((category) => (
            <div key={category.category}>
              <h3 className="text-xl font-bold mb-4">{category.category}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.resources.map((resource) => (
                  <Card key={resource.name} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{resource.name}</CardTitle>
                      <CardDescription>{resource.type}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-4">{resource.description}</p>
                      <Button asChild size="sm" className="w-full">
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Visit Resource
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Study Guide */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Understanding Religious Calendars</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Calendar Types</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Solar Calendars</h4>
                <p className="text-sm">Based on the Earth\'s revolution around the Sun, with fixed seasonal relationships.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Lunar Calendars</h4>
                <p className="text-sm">Based on the Moon\'s phases, with months corresponding to lunar cycles.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Lunar-Solar Calendars</h4>
                <p className="text-sm">Combine lunar months with solar years, using intercalation to maintain seasonal alignment.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Liturgical Calendars</h4>
                <p className="text-sm">Organize religious life around sacred events, seasons, and commemorations.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Concepts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Sacred Time</h4>
                <p className="text-sm">The concept of time as having spiritual significance and divine purpose.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Seasonal Cycles</h4>
                <p className="text-sm">How religious calendars reflect natural cycles and agricultural rhythms.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Community Rhythm</h4>
                <p className="text-sm">How calendars organize community life and create shared experiences.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Historical Memory</h4>
                <p className="text-sm">How calendars preserve and commemorate important historical events.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-muted rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Explore Sacred Time</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Religious calendars offer profound insights into how different cultures understand time, 
          seasons, and the sacred. They reveal the deep connection between spiritual practice and 
          the natural rhythms of life.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <a href="/studies" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Study Religious Traditions
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="/resources" className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              More Resources
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
} 