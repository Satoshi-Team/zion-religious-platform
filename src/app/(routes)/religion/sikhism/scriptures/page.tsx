import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { BookOpen, Heart, Lightbulb, Users, Star, Shield, Globe, Eye, Target, Scale, Calendar, MapPin } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: 'Sikh Scriptures | Sacred Texts & Religious Studies',
    description: 'Explore Sikh sacred texts including the Guru Granth Sahib, Dasam Granth, and other important religious writings that form the foundation of Sikh tradition.',
    keywords: 'Sikh scriptures, Guru Granth Sahib, Dasam Granth, Sikh texts, Gurmukhi, Sikh writings, sacred texts',
    openGraph: {
      title: 'Sikh Scriptures | Sacred Texts & Religious Studies',
      description: 'Explore Sikh sacred texts including the Guru Granth Sahib, Dasam Granth, and other important religious writings that form the foundation of Sikh tradition.',
      type: 'website',
    },
  }
}

export default async function SikhismScripturesPage({ params }: { params: { locale: string } }) {

  const guruGranthSahib = [
    {
      section: "Japji Sahib",
      author: "Guru Nanak Dev",
      description: "Opening composition and morning prayer",
      content: [
        "Mool Mantar: Basic creed of Sikhism",
        "38 pauris (stanzas) of spiritual wisdom",
        "Explains nature of God and creation",
        "Path to spiritual liberation",
        "Foundation of Sikh philosophy"
      ],
      significance: "Most important composition, recited daily by Sikhs",
      themes: ["Divine nature", "Spiritual path", "Liberation", "Divine grace"]
    },
    {
      section: "Guru Nanak's Compositions",
      author: "Guru Nanak Dev",
      description: "Foundational teachings of Sikhism",
      content: [
        "Asa di Var: Spiritual journey and social reform",
        "Barah Maha: Twelve months and spiritual seasons",
        "Patti: Alphabet and divine wisdom",
        "Shabad Hazare: Thousand hymns of wisdom",
        "Dukh Bhanjani: Healing and comfort"
      ],
      significance: "Establishes core Sikh beliefs and practices",
      themes: ["Social justice", "Divine wisdom", "Spiritual seasons", "Healing"]
    },
    {
      section: "Guru Angad's Compositions",
      author: "Guru Angad Dev",
      description: "Teachings of the second Guru",
      content: [
        "Slokas: Short verses of wisdom",
        "Development of Gurmukhi script",
        "Emphasis on education and learning",
        "Community building teachings",
        "Spiritual discipline guidance"
      ],
      significance: "Establishes Sikh educational and community traditions",
      themes: ["Education", "Community", "Discipline", "Scripture"]
    },
    {
      section: "Guru Amar Das's Compositions",
      author: "Guru Amar Das",
      description: "Social reform and equality teachings",
      content: [
        "Anand Sahib: Song of bliss and joy",
        "Slokas on social equality",
        "Women's rights and dignity",
        "Abolition of caste system",
        "Community service emphasis"
      ],
      significance: "Advances social reform and equality principles",
      themes: ["Equality", "Social reform", "Women's rights", "Community service"]
    },
    {
      section: "Guru Ram Das's Compositions",
      author: "Guru Ram Das",
      description: "Devotional and community teachings",
      content: [
        "Lavan: Wedding ceremony hymns",
        "Slokas on devotion and service",
        "Community building guidance",
        "Spiritual discipline teachings",
        "Harmandir Sahib establishment"
      ],
      significance: "Establishes Sikh marriage ceremony and community institutions",
      themes: ["Marriage", "Devotion", "Community", "Service"]
    },
    {
      section: "Guru Arjan's Compositions",
      author: "Guru Arjan Dev",
      description: "Comprehensive spiritual teachings",
      content: [
        "Sukhmani Sahib: Psalm of peace and comfort",
        "Barah Maha: Spiritual journey through months",
        "Slokas on various spiritual topics",
        "Compilation of Adi Granth",
        "Martyrdom and sacrifice teachings"
      ],
      significance: "Creates comprehensive spiritual guide and faces persecution",
      themes: ["Peace", "Comfort", "Sacrifice", "Spiritual journey"]
    },
    {
      section: "Guru Tegh Bahadur's Compositions",
      author: "Guru Tegh Bahadur",
      description: "Teachings of the ninth Guru",
      content: [
        "Slokas on spiritual discipline",
        "Teachings on religious freedom",
        "Sacrifice and martyrdom",
        "Defense of human rights",
        "Protection of religious minorities"
      ],
      significance: "Demonstrates commitment to religious freedom and human rights",
      themes: ["Religious freedom", "Human rights", "Sacrifice", "Martyrdom"]
    }
  ]

  const dasamGranth = [
    {
      section: "Jaap Sahib",
      author: "Guru Gobind Singh",
      description: "Morning prayer and divine praise",
      content: [
        "199 verses praising divine attributes",
        "Emphasis on divine power and protection",
        "Martial spirit and courage",
        "Spiritual discipline and devotion",
        "Integration of spiritual and temporal power"
      ],
      significance: "Important morning prayer and martial inspiration",
      themes: ["Divine power", "Courage", "Protection", "Discipline"]
    },
    {
      section: "Akal Ustat",
      author: "Guru Gobind Singh",
      description: "Praise of the timeless God",
      content: [
        "Divine attributes and qualities",
        "Universal brotherhood teachings",
        "Equality of all religions",
        "Divine justice and mercy",
        "Spiritual wisdom and guidance"
      ],
      significance: "Emphasizes universal spiritual truths",
      themes: ["Divine attributes", "Universal brotherhood", "Religious equality", "Justice"]
    },
    {
      section: "Bachitar Natak",
      author: "Guru Gobind Singh",
      description: "Autobiographical account and divine drama",
      content: [
        "Guru's spiritual lineage and mission",
        "Historical events and battles",
        "Divine purpose and guidance",
        "Protection of dharma and justice",
        "Martial traditions and courage"
      ],
      significance: "Provides historical context and spiritual mission",
      themes: ["Spiritual lineage", "Historical events", "Divine mission", "Protection"]
    },
    {
      section: "Chandi Charitar",
      author: "Guru Gobind Singh",
      description: "Tales of divine power and protection",
      content: [
        "Stories of divine intervention",
        "Protection of the righteous",
        "Victory over evil and oppression",
        "Divine justice and retribution",
        "Spiritual courage and strength"
      ],
      significance: "Inspires courage and faith in divine protection",
      themes: ["Divine protection", "Justice", "Courage", "Victory over evil"]
    },
    {
      section: "Chandi di Var",
      author: "Guru Gobind Singh",
      description: "Ballad of divine power",
      content: [
        "Poetic narrative of divine intervention",
        "Protection of the oppressed",
        "Victory of good over evil",
        "Divine justice and retribution",
        "Spiritual strength and courage"
      ],
      significance: "Inspires martial spirit and divine protection",
      themes: ["Divine intervention", "Protection", "Justice", "Courage"]
    }
  ]

  const otherTexts = [
    {
      category: "Sikh Rehat Maryada",
      description: "Code of conduct and discipline",
      content: [
        "Guidelines for Sikh behavior and practice",
        "Ritual ceremonies and procedures",
        "Community organization and leadership",
        "Ethical standards and principles",
        "Modern interpretation of Sikh values"
      ],
      significance: "Guides Sikh practice and community life",
      themes: ["Conduct", "Discipline", "Community", "Ethics"]
    },
    {
      category: "Janam Sakhis",
      description: "Biographical accounts of Guru Nanak",
      content: [
        "Life stories and miracles of Guru Nanak",
        "Travels and teachings",
        "Historical events and encounters",
        "Spiritual wisdom and guidance",
        "Community building and service"
      ],
      significance: "Provides historical and spiritual context",
      themes: ["Biography", "Miracles", "Travels", "Teachings"]
    },
    {
      category: "Gurbani Kirtan",
      description: "Musical tradition of Sikh hymns",
      content: [
        "Traditional ragas and musical modes",
        "Devotional singing and chanting",
        "Spiritual experience through music",
        "Community participation and unity",
        "Preservation of musical traditions"
      ],
      significance: "Enhances spiritual experience and community unity",
      themes: ["Music", "Devotion", "Community", "Spiritual experience"]
    },
    {
      category: "Contemporary Sikh Literature",
      description: "Modern Sikh writings and interpretations",
      content: [
        "Modern commentaries and interpretations",
        "Historical research and scholarship",
        "Social and political writings",
        "Interfaith dialogue and understanding",
        "Contemporary Sikh identity and issues"
      ],
      significance: "Keeps Sikh tradition relevant to modern challenges",
      themes: ["Modern interpretation", "Scholarship", "Contemporary issues", "Interfaith dialogue"]
    }
  ]

  const scripturalThemes = [
    {
      theme: "Divine Unity and Oneness",
      description: "Central belief in one God",
      manifestations: [
        "Ik Onkar: One God concept",
        "Formless and eternal divine reality",
        "Present in all creation",
        "Transcends religious boundaries",
        "Source of all existence"
      ]
    },
    {
      theme: "Equality and Social Justice",
      description: "Universal equality and human dignity",
      manifestations: [
        "Rejection of caste system",
        "Gender equality and women's rights",
        "Equal access to spiritual practice",
        "Service to humanity (seva)",
        "Standing against oppression"
      ]
    },
    {
      theme: "Spiritual Discipline and Devotion",
      description: "Path to spiritual liberation",
      manifestations: [
        "Daily prayer and meditation",
        "Honest living and hard work",
        "Sharing with others",
        "Service to community",
        "Remembrance of divine name"
      ]
    },
    {
      theme: "Courage and Protection",
      description: "Defense of righteousness and justice",
      manifestations: [
        "Protection of the oppressed",
        "Standing against tyranny",
        "Martial traditions and courage",
        "Sacrifice for justice",
        "Defense of religious freedom"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Sikh Scriptures</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the rich collection of Sikh sacred texts, from the eternal Guru Granth Sahib to the 
          martial Dasam Granth, forming the comprehensive spiritual and cultural heritage of Sikhism.
        </p>
      </div>

      <div className="grid gap-8 mb-12">
        {guruGranthSahib.map((section, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950 dark:to-yellow-950">
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-orange-600" />
                <div>
                  <CardTitle className="text-2xl">{section.section}</CardTitle>
                  <CardDescription className="text-lg">{section.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Content and Teachings
                  </h3>
                  <ul className="space-y-2">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    Religious Significance
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {section.significance}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-blue-500" />
                    Key Themes
                  </h3>
                  <ul className="space-y-1">
                    {section.themes.map((theme, themeIndex) => (
                      <li key={themeIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-xs">{theme}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Dasam Granth</h2>
        <div className="grid gap-6">
          {dasamGranth.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{section.section}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      {section.author}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Content</h4>
                    <ul className="space-y-2">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Significance</h4>
                    <p className="text-sm text-muted-foreground mb-4">{section.significance}</p>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Themes</h4>
                    <ul className="space-y-1">
                      {section.themes.map((theme, themeIndex) => (
                        <li key={themeIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-xs">{theme}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Additional Sacred Texts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {otherTexts.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Content</h4>
                    <ul className="space-y-2">
                      {category.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">Significance</h4>
                    <p className="text-sm text-muted-foreground mb-3">{category.significance}</p>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">Themes</h4>
                    <ul className="space-y-1">
                      {category.themes.map((theme, themeIndex) => (
                        <li key={themeIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-xs">{theme}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Scriptural Themes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {scripturalThemes.map((theme, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{theme.theme}</CardTitle>
                <CardDescription>{theme.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm text-muted-foreground mb-3">Manifestations</h4>
                <ul className="space-y-2">
                  {theme.manifestations.map((manifestation, manIndex) => (
                    <li key={manIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{manifestation}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Explore More About Sikhism</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/religion/sikhism/overview`}>
              Sikh Overview
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/religion/sikhism/practices`}>
              Sikh Practices
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/religion/sikhism/history`}>
              Sikh History
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/religion/sikhism/teachings`}>
              Sikh Teachings
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 