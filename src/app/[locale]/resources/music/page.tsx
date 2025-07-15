import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Music, Play, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sacred Music Resources - Religious Music Traditions & Compositions',
  description: 'Explore sacred music traditions across world religions. Discover classical hymns, devotional songs, chants, and spiritual compositions from Christianity, Islam, Hinduism, Buddhism, Judaism, and more.',
  keywords: 'sacred music, religious music, hymns, chants, devotional songs, spiritual music, classical religious music, world religions music',
  openGraph: {
    title: 'Sacred Music Resources - Religious Music Traditions & Compositions',
    description: 'Explore sacred music traditions across world religions. Discover classical hymns, devotional songs, chants, and spiritual compositions.',
    type: 'website',
  },
}

const musicTraditions = [
  {
    religion: 'Christianity',
    traditions: [
      {
        name: 'Gregorian Chant',
        description: 'Monophonic liturgical chant of the Roman Catholic Church, developed in the 9th-10th centuries. Characterized by its flowing, unaccompanied vocal lines and Latin texts.',
        examples: ['Pater Noster', 'Ave Maria', 'Dies Irae', 'Salve Regina'],
        period: 'Medieval to Present',
        features: ['Unaccompanied vocals', 'Latin texts', 'Modal melodies', 'Liturgical use']
      },
      {
        name: 'Protestant Hymns',
        description: 'Congregational songs developed during the Reformation, emphasizing congregational participation and vernacular languages.',
        examples: ['Amazing Grace', 'A Mighty Fortress', 'How Great Thou Art', 'It Is Well'],
        period: '16th Century to Present',
        features: ['Congregational singing', 'Vernacular texts', 'Harmonic accompaniment', 'Theological themes']
      },
      {
        name: 'Orthodox Chant',
        description: 'Byzantine and Eastern Orthodox liturgical music, featuring complex melodic patterns and traditional modal systems.',
        examples: ['Cherubic Hymn', 'Trisagion', 'Lord\'s Prayer', 'Magnificat'],
        period: 'Byzantine to Present',
        features: ['Byzantine notation', 'Modal system', 'A cappella', 'Liturgical cycles']
      }
    ]
  },
  {
    religion: 'Islam',
    traditions: [
      {
        name: 'Adhan (Call to Prayer)',
        description: 'The Islamic call to prayer, performed five times daily. Features distinctive melodic patterns and Arabic text.',
        examples: ['Fajr Adhan', 'Dhuhr Adhan', 'Asr Adhan', 'Maghrib Adhan', 'Isha Adhan'],
        period: '7th Century to Present',
        features: ['Arabic text', 'Melodic patterns', 'Five daily calls', 'Community announcement']
      },
      {
        name: 'Nasheed',
        description: 'Islamic vocal music that is either sung a cappella or accompanied by percussion instruments, avoiding stringed instruments.',
        examples: ['Tala\' al-Badru', 'Allahu Allahu', 'Asma Allah', 'Ya Habibi'],
        period: 'Medieval to Present',
        features: ['A cappella or percussion', 'Islamic themes', 'Arabic poetry', 'Spiritual content']
      },
      {
        name: 'Quranic Recitation',
        description: 'The melodic recitation of the Quran, following traditional tajweed rules and maqam (melodic mode) systems.',
        examples: ['Surah Al-Fatiha', 'Surah Al-Baqarah', 'Surah Ya-Sin', 'Surah Ar-Rahman'],
        period: '7th Century to Present',
        features: ['Tajweed rules', 'Maqam system', 'Arabic pronunciation', 'Spiritual devotion']
      }
    ]
  },
  {
    religion: 'Hinduism',
    traditions: [
      {
        name: 'Bhajan',
        description: 'Devotional songs in praise of Hindu deities, often sung in groups during religious ceremonies and festivals.',
        examples: ['Hare Krishna', 'Jai Ganesh Deva', 'Om Jai Jagdish Hare', 'Aarti Kunj Bihari Ki'],
        period: 'Medieval to Present',
        features: ['Devotional themes', 'Group singing', 'Simple melodies', 'Sanskrit/Hindi texts']
      },
      {
        name: 'Kirtan',
        description: 'Call-and-response devotional chanting, often accompanied by instruments like harmonium, tabla, and kartals.',
        examples: ['Hare Rama Hare Krishna', 'Govinda Jaya Jaya', 'Radhe Radhe', 'Jaya Radha Madhava'],
        period: 'Medieval to Present',
        features: ['Call-and-response', 'Instrumental accompaniment', 'Repetitive chanting', 'Community participation']
      },
      {
        name: 'Dhrupad',
        description: 'Ancient form of Hindustani classical music, characterized by its serious, meditative nature and spiritual themes.',
        examples: ['Alap', 'Jor', 'Jhala', 'Composition'],
        period: '15th Century to Present',
        features: ['Serious nature', 'Spiritual themes', 'Complex ragas', 'Traditional texts']
      }
    ]
  },
  {
    religion: 'Buddhism',
    traditions: [
      {
        name: 'Buddhist Chanting',
        description: 'Monastic chanting of Buddhist texts and mantras, often in Pali, Sanskrit, or local languages.',
        examples: ['Om Mani Padme Hum', 'Namo Amitabha', 'Heart Sutra', 'Metta Sutta'],
        period: '5th Century BCE to Present',
        features: ['Monastic tradition', 'Pali/Sanskrit texts', 'Meditative purpose', 'Ritual context']
      },
      {
        name: 'Tibetan Chant',
        description: 'Unique form of Buddhist chanting from Tibet, featuring overtone singing and complex harmonic structures.',
        examples: ['Gyaling', 'Dungchen', 'Rolmo', 'Silnyen'],
        period: '7th Century to Present',
        features: ['Overtone singing', 'Tibetan language', 'Ceremonial use', 'Complex harmonics']
      },
      {
        name: 'Zen Chanting',
        description: 'Simple, repetitive chanting in Zen Buddhism, emphasizing mindfulness and present-moment awareness.',
        examples: ['Heart Sutra', 'Gate Gate', 'Namu Amida Butsu', 'Zazen instructions'],
        period: '6th Century to Present',
        features: ['Simple melodies', 'Repetitive nature', 'Mindfulness focus', 'Meditation aid']
      }
    ]
  },
  {
    religion: 'Judaism',
    traditions: [
      {
        name: 'Cantillation',
        description: 'The ritual chanting of readings from the Hebrew Bible, following traditional melodic patterns called trope.',
        examples: ['Torah reading', 'Haftarah', 'Megillah', 'Trope patterns'],
        period: 'Ancient to Present',
        features: ['Hebrew text', 'Trope system', 'Biblical cantillation', 'Synagogue use']
      },
      {
        name: 'Jewish Liturgical Music',
        description: 'Traditional synagogue music, including prayers, psalms, and liturgical compositions.',
        examples: ['Kol Nidre', 'Adon Olam', 'Yigdal', 'Lecha Dodi'],
        period: 'Medieval to Present',
        features: ['Hebrew prayers', 'Synagogue context', 'Traditional melodies', 'Liturgical cycles']
      },
      {
        name: 'Klezmer',
        description: 'Traditional Jewish instrumental music, originally played at weddings and celebrations in Eastern Europe.',
        examples: ['Hava Nagila', 'Tumbalalaika', 'Oyfn Pripetshik', 'Eli Eli'],
        period: '18th Century to Present',
        features: ['Instrumental music', 'Wedding celebrations', 'Eastern European origin', 'Folk traditions']
      }
    ]
  },
  {
    religion: 'Sikhism',
    traditions: [
      {
        name: 'Gurbani Kirtan',
        description: 'The singing of hymns from the Guru Granth Sahib, accompanied by traditional instruments like the harmonium and tabla.',
        examples: ['Japji Sahib', 'Asa Ki Vaar', 'Sukhmani Sahib', 'Rehras Sahib'],
        period: '15th Century to Present',
        features: ['Guru Granth Sahib', 'Traditional ragas', 'Harmonium accompaniment', 'Gurdwara context']
      },
      {
        name: 'Shabad Kirtan',
        description: 'Devotional singing of Sikh hymns, emphasizing the spiritual message and musical beauty of the compositions.',
        examples: ['Waheguru', 'Satnam', 'Gurmantar', 'Mool Mantar'],
        period: '15th Century to Present',
        features: ['Devotional focus', 'Spiritual themes', 'Community singing', 'Meditative purpose']
      }
    ]
  }
]

const musicResources = [
  {
    category: 'Online Collections',
    resources: [
      {
        name: 'Sacred Harp',
        description: 'Traditional shape-note singing collection with roots in American religious music',
        url: 'https://fasola.org/',
        type: 'Website'
      },
      {
        name: 'Chant Database',
        description: 'Comprehensive database of Gregorian chants and liturgical music',
        url: 'https://gregobase.selapa.net/',
        type: 'Database'
      },
      {
        name: 'Islamic Nasheed Collection',
        description: 'Traditional Islamic vocal music and devotional songs',
        url: 'https://www.islamicfinder.org/nasheeds/',
        type: 'Audio Collection'
      }
    ]
  },
  {
    category: 'Academic Resources',
    resources: [
      {
        name: 'Journal of Sacred Music',
        description: 'Academic journal focusing on religious music traditions and scholarship',
        url: 'https://www.sacredmusicjournal.org/',
        type: 'Journal'
      },
      {
        name: 'Ethnomusicology Database',
        description: 'Database of traditional and religious music from around the world',
        url: 'https://www.ethnomusicology.org/',
        type: 'Research Database'
      }
    ]
  },
  {
    category: 'Performance Groups',
    resources: [
      {
        name: 'Tallis Scholars',
        description: 'Renowned ensemble specializing in Renaissance sacred music',
        url: 'https://www.thetallisscholars.co.uk/',
        type: 'Ensemble'
      },
      {
        name: 'Chanticleer',
        description: 'Professional vocal ensemble performing sacred and secular music',
        url: 'https://chanticleer.org/',
        type: 'Ensemble'
      }
    ]
  }
]

export default function ReligiousMusicPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Sacred Music Resources</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the rich traditions of sacred music across world religions. Discover classical hymns, 
          devotional songs, chants, and spiritual compositions that have shaped religious practice for centuries.
        </p>
      </div>

      {/* Music Traditions by Religion */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Sacred Music Traditions</h2>
        <div className="space-y-12">
          {musicTraditions.map((religion) => (
            <div key={religion.religion} className="bg-card rounded-lg p-6 border">
              <h3 className="text-2xl font-bold mb-6 text-primary">{religion.religion}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {religion.traditions.map((tradition) => (
                  <Card key={tradition.name} className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Music className="h-5 w-5" />
                        {tradition.name}
                      </CardTitle>
                      <CardDescription>{tradition.period}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm">{tradition.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Key Examples:</h4>
                        <div className="flex flex-wrap gap-1">
                          {tradition.examples.map((example) => (
                            <Badge key={example} variant="secondary" className="text-xs">
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">Features:</h4>
                        <ul className="text-xs space-y-1">
                          {tradition.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              {feature}
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

      {/* Music Resources */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Music Resources & Collections</h2>
        <div className="space-y-8">
          {musicResources.map((category) => (
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
        <h2 className="text-3xl font-bold mb-8 text-center">Studying Sacred Music</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. Choose a Tradition</h4>
                <p className="text-sm">Begin with a religious tradition that interests you or aligns with your cultural background.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">2. Listen Actively</h4>
                <p className="text-sm">Focus on the musical structure, text setting, and spiritual context of the compositions.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">3. Study Historical Context</h4>
                <p className="text-sm">Understand the religious, cultural, and historical factors that shaped each musical tradition.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">4. Practice Participation</h4>
                <p className="text-sm">Attend religious services or cultural events to experience sacred music in its intended context.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Concepts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Liturgical Function</h4>
                <p className="text-sm">How music serves religious rituals and ceremonies.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Text Setting</h4>
                <p className="text-sm">The relationship between sacred texts and musical composition.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Modal Systems</h4>
                <p className="text-sm">Traditional scale systems used in various religious music traditions.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Community Participation</h4>
                <p className="text-sm">How sacred music brings communities together in worship and celebration.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-muted rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Explore Sacred Music</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Sacred music offers a unique window into the spiritual traditions of humanity. 
          Whether you're a musician, scholar, or spiritual seeker, these traditions provide 
          rich opportunities for study, practice, and personal growth.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <a href="/studies" className="flex items-center gap-2">
              <Play className="h-4 w-4" />
              Study Religious Traditions
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="/resources" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              More Resources
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
} 