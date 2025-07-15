import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { BookOpen, Heart, Lightbulb, Users, Star, Shield, Globe, Eye, Target, Scale, Calendar, MapPin } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: 'Jain Scriptures | Sacred Texts & Religious Studies',
    description: 'Explore Jain sacred texts including the Agamas, canonical literature, and other important religious writings that form the foundation of Jain tradition.',
    keywords: 'Jain scriptures, Agamas, Jain texts, Jain literature, Jain canon, sacred texts, Jain writings',
    openGraph: {
      title: 'Jain Scriptures | Sacred Texts & Religious Studies',
      description: 'Explore Jain sacred texts including the Agamas, canonical literature, and other important religious writings that form the foundation of Jain tradition.',
      type: 'website',
    },
  }
}

export default async function JainismScripturesPage({ params }: { params: { locale: string } }) {

  const agamas = [
    {
      category: "Angas (Limbs)",
      description: "Primary canonical texts",
      texts: [
        {
          name: "Acharanga Sutra",
          content: "Monastic conduct and discipline",
          themes: ["Monastic rules", "Non-violence", "Spiritual discipline", "Ethical conduct"]
        },
        {
          name: "Sutrakritanga",
          content: "Refutation of false doctrines",
          themes: ["Philosophical debates", "Truth and falsehood", "Religious tolerance", "Intellectual discourse"]
        },
        {
          name: "Sthananga",
          content: "Numerical classifications",
          themes: ["Systematic organization", "Jain categories", "Knowledge classification", "Philosophical structure"]
        },
        {
          name: "Samavayanga",
          content: "Mathematical calculations",
          themes: ["Cosmology", "Mathematics", "Time cycles", "Universe structure"]
        },
        {
          name: "Vyakhyaprajnapti",
          content: "Exposition of teachings",
          themes: ["Scriptural interpretation", "Teaching methods", "Knowledge transmission", "Spiritual guidance"]
        },
        {
          name: "Jnatrdharmakatha",
          content: "Stories of knowledge and religion",
          themes: ["Moral stories", "Spiritual examples", "Ethical lessons", "Religious narratives"]
        },
        {
          name: "Upasakadasa",
          content: "Ten chapters on lay followers",
          themes: ["Lay conduct", "Householder duties", "Spiritual practice", "Community life"]
        },
        {
          name: "Antakrddasa",
          content: "Ten chapters on those who ended karma",
          themes: ["Liberation", "Karma destruction", "Spiritual attainment", "Enlightened beings"]
        },
        {
          name: "Anuttaraupapatikadasa",
          content: "Ten chapters on highest beings",
          themes: ["Divine beings", "Spiritual hierarchy", "Cosmic order", "Transcendent states"]
        },
        {
          name: "Prasnavyakaranani",
          content: "Questions and explanations",
          themes: ["Dialogue format", "Question-answer method", "Clarification", "Understanding"]
        },
        {
          name: "Vipakasruta",
          content: "Scripture on fruits of karma",
          themes: ["Karma theory", "Cause and effect", "Moral consequences", "Spiritual law"]
        },
        {
          name: "Dristivada",
          content: "Scripture on views",
          themes: ["Philosophical views", "Different perspectives", "Intellectual understanding", "Wisdom"]
        }
      ],
      significance: "Core canonical texts containing fundamental Jain teachings"
    },
    {
      category: "Upangas (Subsidiary Limbs)",
      description: "Secondary canonical texts",
      texts: [
        {
          name: "Aupapatika",
          content: "Spontaneous birth",
          themes: ["Rebirth", "Cosmology", "Life forms", "Spiritual evolution"]
        },
        {
          name: "Rajaprasniya",
          content: "Questions of King Prasenajit",
          themes: ["Royal dialogue", "Philosophical questions", "Spiritual guidance", "Wisdom exchange"]
        },
        {
          name: "Jivajivabhigama",
          content: "Classification of living beings",
          themes: ["Biology", "Life classification", "Soul types", "Cosmic understanding"]
        },
        {
          name: "Prajnapana",
          content: "Questions and answers",
          themes: ["Dialogue", "Knowledge transmission", "Understanding", "Clarification"]
        },
        {
          name: "Suryaprajnapti",
          content: "Exposition of the sun",
          themes: ["Astronomy", "Cosmology", "Natural phenomena", "Scientific understanding"]
        },
        {
          name: "Jambudvipaprajnapti",
          content: "Exposition of Jambudvipa",
          themes: ["Geography", "Cosmic geography", "World structure", "Physical universe"]
        },
        {
          name: "Chandraprajnapti",
          content: "Exposition of the moon",
          themes: ["Astronomy", "Lunar cycles", "Time measurement", "Cosmic order"]
        },
        {
          name: "Nirayavalika",
          content: "Hellish beings",
          themes: ["Cosmology", "Hell realms", "Karmic consequences", "Moral teaching"]
        },
        {
          name: "Kalpavatamsika",
          content: "Heavenly beings",
          themes: ["Cosmology", "Heaven realms", "Divine beings", "Spiritual states"]
        },
        {
          name: "Puspika",
          content: "Flowers",
          themes: ["Nature", "Beauty", "Spiritual symbolism", "Cosmic harmony"]
        },
        {
          name: "Puspachulika",
          content: "Flower garlands",
          themes: ["Aesthetics", "Spiritual beauty", "Cosmic order", "Divine creation"]
        },
        {
          name: "Vrishnidasa",
          content: "Ten chapters on Vrishni",
          themes: ["Historical narrative", "Moral lessons", "Spiritual examples", "Ethical teaching"]
        }
      ],
      significance: "Expand and elaborate on primary teachings"
    }
  ]

  const nonCanonicalTexts = [
    {
      category: "Philosophical Works",
      description: "Systematic philosophical treatises",
      texts: [
        {
          name: "Tattvartha Sutra",
          author: "Umasvati",
          content: "Compendium of Jain philosophy",
          themes: ["Metaphysics", "Ethics", "Spiritual path", "Liberation"]
        },
        {
          name: "Samayasara",
          author: "Kundakunda",
          content: "Essence of spiritual practice",
          themes: ["Spiritual discipline", "Soul nature", "Meditation", "Liberation"]
        },
        {
          name: "Pancastikaya",
          author: "Kundakunda",
          content: "Five substances",
          themes: ["Metaphysics", "Cosmology", "Substance theory", "Reality"]
        },
        {
          name: "Pravachanasara",
          author: "Kundakunda",
          content: "Essence of teachings",
          themes: ["Spiritual guidance", "Ethical conduct", "Monastic life", "Wisdom"]
        }
      ]
    },
    {
      category: "Commentaries",
      description: "Exegetical works on canonical texts",
      texts: [
        {
          name: "Bhagavati Aradhana",
          author: "Shivakoti",
          content: "Commentary on spiritual practice",
          themes: ["Meditation", "Spiritual discipline", "Monastic life", "Liberation"]
        },
        {
          name: "Dhavala",
          author: "Virsen",
          content: "Commentary on Satkhandagama",
          themes: ["Karma theory", "Cosmology", "Philosophy", "Scriptural interpretation"]
        },
        {
          name: "Jayadhavala",
          author: "Virsen",
          content: "Commentary on Kasayapahuda",
          themes: ["Passions", "Karma", "Spiritual purification", "Ethics"]
        }
      ]
    },
    {
      category: "Narrative Literature",
      description: "Stories and legends",
      texts: [
        {
          name: "Kalpasutra",
          author: "Bhadrabahu",
          content: "Biographies of Tirthankaras",
          themes: ["Tirthankara lives", "Spiritual examples", "Historical narrative", "Inspiration"]
        },
        {
          name: "Uttarapurana",
          author: "Gunabhadra",
          content: "Later history",
          themes: ["Historical narrative", "Moral lessons", "Spiritual guidance", "Community history"]
        },
        {
          name: "Trishashtishalakapurusha",
          author: "Hemachandra",
          content: "Lives of 63 great men",
          themes: ["Biographical stories", "Moral examples", "Spiritual inspiration", "Historical figures"]
        }
      ]
    }
  ]

  const modernTexts = [
    {
      category: "Contemporary Literature",
      description: "Modern Jain writings and interpretations",
      texts: [
        {
          name: "Modern Jain Commentaries",
          content: "Contemporary interpretations of ancient texts",
          themes: ["Modern relevance", "Contemporary application", "Practical guidance", "Spiritual wisdom"]
        },
        {
          name: "Jain Ethics and Philosophy",
          content: "Modern philosophical works",
          themes: ["Ethical principles", "Philosophical analysis", "Modern challenges", "Spiritual guidance"]
        },
        {
          name: "Jain Meditation Guides",
          content: "Contemporary meditation practices",
          themes: ["Meditation techniques", "Spiritual practice", "Inner peace", "Self-realization"]
        },
        {
          name: "Jain Environmental Ethics",
          content: "Environmental protection and sustainability",
          themes: ["Environmental ethics", "Non-violence", "Sustainability", "Ecological wisdom"]
        }
      ]
    },
    {
      category: "Educational Materials",
      description: "Teaching and learning resources",
      texts: [
        {
          name: "Jain Textbooks",
          content: "Educational materials for students",
          themes: ["Education", "Knowledge transmission", "Spiritual learning", "Philosophical study"]
        },
        {
          name: "Jain Children's Literature",
          content: "Stories and teachings for children",
          themes: ["Moral education", "Spiritual values", "Character development", "Ethical teaching"]
        },
        {
          name: "Jain Research Publications",
          content: "Academic and scholarly works",
          themes: ["Academic research", "Scholarly analysis", "Historical study", "Philosophical investigation"]
        }
      ]
    }
  ]

  const scripturalThemes = [
    {
      theme: "Non-Violence (Ahimsa)",
      description: "Central principle of Jainism",
      manifestations: [
        "Absolute non-violence towards all beings",
        "Vegetarianism and careful eating",
        "Non-violence in thought, word, and deed",
        "Protection of all life forms",
        "Compassion and kindness"
      ]
    },
    {
      theme: "Karma and Liberation",
      description: "Understanding of action and freedom",
      manifestations: [
        "Karma as subtle matter attached to soul",
        "Cycle of birth and death",
        "Liberation through karma removal",
        "Individual responsibility",
        "Path to moksha"
      ]
    },
    {
      theme: "Multiple Perspectives (Anekantavada)",
      description: "Recognition of relative truth",
      manifestations: [
        "Seven-fold logic (Syadvada)",
        "Conditional predication",
        "Intellectual tolerance",
        "Avoidance of dogmatism",
        "Respect for different viewpoints"
      ]
    },
    {
      theme: "Spiritual Discipline",
      description: "Path to liberation",
      manifestations: [
        "Five great vows",
        "Three jewels of Jainism",
        "Monastic practices",
        "Lay spiritual practice",
        "Meditation and contemplation"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Jain Scriptures</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the rich collection of Jain sacred texts, from the ancient Agamas to modern interpretations, 
          forming the comprehensive spiritual and philosophical heritage of Jainism.
        </p>
      </div>

      <div className="grid gap-8 mb-12">
        {agamas.map((category, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-green-600" />
                <div>
                  <CardTitle className="text-2xl">{category.category}</CardTitle>
                  <CardDescription className="text-lg">{category.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Sacred Texts
                  </h3>
                  <div className="space-y-4">
                    {category.texts.map((text, textIndex) => (
                      <div key={textIndex} className="border-l-4 border-green-200 pl-4">
                        <h4 className="font-semibold text-sm">{text.name}</h4>
                        <p className="text-xs text-muted-foreground mb-1">{text.content}</p>
                        <div className="text-xs">
                          <span className="font-medium">Themes:</span> {text.themes.join(", ")}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    Religious Significance
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.significance}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Non-Canonical Texts</h2>
        <div className="grid gap-6">
          {nonCanonicalTexts.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Key Texts</h4>
                    <div className="space-y-3">
                      {category.texts.map((text, textIndex) => (
                        <div key={textIndex} className="border-l-4 border-blue-200 pl-4">
                          <h5 className="font-semibold text-sm">{text.name}</h5>
                          {text.author && <p className="text-xs text-muted-foreground">by {text.author}</p>}
                          <p className="text-xs text-muted-foreground mb-1">{text.content}</p>
                          <div className="text-xs">
                            <span className="font-medium">Themes:</span> {text.themes.join(", ")}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Modern Jain Literature</h2>
        <div className="grid gap-6">
          {modernTexts.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Contemporary Works</h4>
                    <div className="space-y-3">
                      {category.texts.map((text, textIndex) => (
                        <div key={textIndex} className="border-l-4 border-purple-200 pl-4">
                          <h5 className="font-semibold text-sm">{text.name}</h5>
                          <p className="text-xs text-muted-foreground mb-1">{text.content}</p>
                          <div className="text-xs">
                            <span className="font-medium">Themes:</span> {text.themes.join(", ")}
                          </div>
                        </div>
                      ))}
                    </div>
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
        <h2 className="text-2xl font-bold">Explore More About Jainism</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/religion/jainism/overview`}>
              Jain Overview
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/religion/jainism/practices`}>
              Jain Practices
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/religion/jainism/history`}>
              Jain History
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/religion/jainism/teachings`}>
              Jain Teachings
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 