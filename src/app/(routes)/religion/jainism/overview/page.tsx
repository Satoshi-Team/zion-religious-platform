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
    title: 'Jainism Overview | Sacred Texts & Religious Studies',
    description: 'Explore Jainism, an ancient Indian religion emphasizing non-violence (ahimsa), spiritual liberation, and the path to enlightenment through ethical living.',
    keywords: 'Jainism, Jain religion, ahimsa, non-violence, spiritual liberation, Jain beliefs, Jain practices, Jain history',
    openGraph: {
      title: 'Jainism Overview | Sacred Texts & Religious Studies',
      description: 'Explore Jainism, an ancient Indian religion emphasizing non-violence (ahimsa), spiritual liberation, and the path to enlightenment through ethical living.',
      type: 'website',
    },
  }
}

export default async function JainismOverviewPage({ params }: { params: { locale: string } }) {

  const coreBeliefs = [
    {
      belief: "Ahimsa (Non-Violence)",
      description: "Absolute non-violence towards all living beings",
      details: [
        "Non-violence in thought, word, and deed",
        "Respect for all forms of life",
        "Vegetarianism and careful eating",
        "Avoiding harm to even microscopic life",
        "Compassion and kindness to all beings"
      ],
      significance: "Central principle guiding all Jain practices and ethics"
    },
    {
      belief: "Anekantavada (Non-Absolutism)",
      description: "Multiple perspectives and relative truth",
      details: [
        "Recognition of multiple viewpoints",
        "Avoidance of dogmatic thinking",
        "Respect for different perspectives",
        "Intellectual humility and tolerance",
        "Understanding of relative truth"
      ],
      significance: "Promotes intellectual tolerance and understanding"
    },
    {
      belief: "Aparigraha (Non-Possessiveness)",
      description: "Detachment from material possessions",
      details: [
        "Minimizing material possessions",
        "Avoiding excessive attachment",
        "Simple living and contentment",
        "Sharing with others",
        "Focus on spiritual wealth"
      ],
      significance: "Leads to inner peace and spiritual freedom"
    },
    {
      belief: "Karma and Reincarnation",
      description: "Understanding of action and rebirth",
      details: [
        "Karma as subtle matter attached to soul",
        "Cycle of birth and death (samsara)",
        "Liberation through karma removal",
        "Individual responsibility for actions",
        "Path to moksha (liberation)"
      ],
      significance: "Explains suffering and path to liberation"
    },
    {
      belief: "Jiva and Ajiva",
      description: "Soul and non-soul substances",
      details: [
        "Jiva: Conscious, eternal soul",
        "Ajiva: Non-conscious matter",
        "Infinite souls in universe",
        "Souls can attain liberation",
        "Matter includes karma particles"
      ],
      significance: "Foundation of Jain metaphysics and cosmology"
    }
  ]

  const threeJewels = [
    {
      jewel: "Right Faith (Samyak Darshana)",
      description: "Correct understanding of reality",
      elements: [
        "Belief in existence of soul",
        "Understanding of karma",
        "Faith in path to liberation",
        "Recognition of true nature",
        "Acceptance of Jain teachings"
      ],
      significance: "Foundation for spiritual progress"
    },
    {
      jewel: "Right Knowledge (Samyak Jnana)",
      description: "Accurate knowledge of reality",
      elements: [
        "Understanding of soul and matter",
        "Knowledge of karma theory",
        "Awareness of spiritual path",
        "Study of sacred texts",
        "Wisdom and discernment"
      ],
      significance: "Essential for spiritual development"
    },
    {
      jewel: "Right Conduct (Samyak Charitra)",
      description: "Ethical behavior and practice",
      elements: [
        "Following five vows",
        "Practicing non-violence",
        "Cultivating virtues",
        "Avoiding harmful actions",
        "Spiritual discipline"
      ],
      significance: "Practical application of spiritual principles"
    }
  ]

  const fiveVows = [
    {
      vow: "Ahimsa (Non-Violence)",
      description: "Complete non-violence",
      practice: [
        "Avoiding harm to any living being",
        "Vegetarian diet",
        "Careful movement and speech",
        "Compassionate thoughts",
        "Protection of all life forms"
      ],
      significance: "Most fundamental vow for spiritual progress"
    },
    {
      vow: "Satya (Truth)",
      description: "Speaking truth always",
      practice: [
        "Honest communication",
        "Avoiding falsehood",
        "Speaking with kindness",
        "Keeping promises",
        "Integrity in all dealings"
      ],
      significance: "Builds trust and spiritual purity"
    },
    {
      vow: "Asteya (Non-Stealing)",
      description: "Not taking what is not given",
      practice: [
        "Respecting others' property",
        "Avoiding theft and fraud",
        "Fair business practices",
        "Giving to others",
        "Contentment with what one has"
      ],
      significance: "Promotes honesty and contentment"
    },
    {
      vow: "Brahmacharya (Celibacy)",
      description: "Sexual restraint and purity",
      practice: [
        "Monastic celibacy for monks",
        "Marital fidelity for laypeople",
        "Control of sensual desires",
        "Focus on spiritual goals",
        "Energy conservation for meditation"
      ],
      significance: "Conserves energy for spiritual practice"
    },
    {
      vow: "Aparigraha (Non-Possessiveness)",
      description: "Limiting possessions and attachments",
      practice: [
        "Minimizing material possessions",
        "Avoiding excessive attachment",
        "Sharing with others",
        "Simple living",
        "Focus on spiritual wealth"
      ],
      significance: "Reduces karma and promotes detachment"
    }
  ]

  const jainSects = [
    {
      sect: "Digambara",
      description: "Sky-clad or naked monks",
      characteristics: [
        "Monks renounce all clothing",
        "Strict ascetic practices",
        "Belief that women cannot attain liberation",
        "Emphasis on complete renunciation",
        "Conservative interpretation of texts"
      ],
      practices: [
        "Naked monks (male only)",
        "Strict vegetarianism",
        "Intensive meditation",
        "Complete renunciation",
        "Emphasis on austerity"
      ],
      significance: "Represents extreme ascetic path"
    },
    {
      sect: "Shvetambara",
      description: "White-clad monks",
      characteristics: [
        "Monks wear white robes",
        "Belief that women can attain liberation",
        "More liberal interpretation of texts",
        "Active lay community",
        "Emphasis on gradual progress"
      ],
      practices: [
        "White-robed monks",
        "Vegetarian diet",
        "Regular meditation",
        "Community service",
        "Educational activities"
      ],
      significance: "Represents moderate ascetic path"
    }
  ]

  const spiritualPath = [
    {
      stage: "Gunasthana (Spiritual Stages)",
      description: "Fourteen stages of spiritual development",
      stages: [
        "Wrong belief to right belief",
        "Right belief to partial restraint",
        "Partial to complete restraint",
        "Complete restraint to non-attachment",
        "Non-attachment to omniscience"
      ],
      significance: "Guides spiritual progress and development"
    },
    {
      stage: "Tirthankaras",
      description: "Spiritual teachers and pathfinders",
      role: [
        "Twenty-four Tirthankaras in current cycle",
        "Mahavira as the last Tirthankara",
        "Perfect knowledge and conduct",
        "Teaching the path to liberation",
        "Examples of spiritual perfection"
      ],
      significance: "Provide guidance and inspiration for spiritual seekers"
    },
    {
      stage: "Monastic Life",
      description: "Path of complete renunciation",
      elements: [
        "Complete renunciation of worldly life",
        "Intensive spiritual practice",
        "Teaching and guidance",
        "Preservation of knowledge",
        "Example of spiritual discipline"
      ],
      significance: "Highest path for spiritual attainment"
    },
    {
      stage: "Lay Life",
      description: "Spiritual practice in daily life",
      elements: [
        "Following ethical principles",
        "Supporting monastic community",
        "Regular meditation and prayer",
        "Community service",
        "Gradual spiritual progress"
      ],
      significance: "Practical path for spiritual development"
    }
  ]

  const jainPhilosophy = [
    {
      concept: "Syadvada (Conditional Predication)",
      description: "Seven-fold logic and conditional statements",
      elements: [
        "Maybe it is (syat asti)",
        "Maybe it is not (syat nasti)",
        "Maybe it is and is not (syat asti nasti)",
        "Maybe it is indescribable (syat avaktavyam)",
        "Maybe it is and is indescribable",
        "Maybe it is not and is indescribable",
        "Maybe it is, is not, and is indescribable"
      ],
      significance: "Prevents dogmatic thinking and promotes understanding"
    },
    {
      concept: "Naya (Partial Truth)",
      description: "Different perspectives on reality",
      elements: [
        "Naigama naya: Common perspective",
        "Samgraha naya: Class perspective",
        "Vyavahara naya: Practical perspective",
        "Rjusutra naya: Linear perspective",
        "Sabda naya: Verbal perspective",
        "Samabhirudha naya: Etymological perspective",
        "Evambhuta naya: Functional perspective"
      ],
      significance: "Recognizes complexity and relativity of truth"
    },
    {
      concept: "Gunasthana",
      description: "Fourteen stages of spiritual development",
      elements: [
        "Mithyatva: Wrong belief",
        "Sasvadana: Taste of right belief",
        "Misradrsti: Mixed belief",
        "Avirata samyagdrsti: Right belief without restraint",
        "Desavirata: Partial restraint",
        "Pramatta samyata: Complete restraint with carelessness",
        "Apramatta samyata: Complete restraint without carelessness"
      ],
      significance: "Maps spiritual progress and development"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Jainism Overview</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover Jainism, an ancient Indian religion emphasizing non-violence (ahimsa), spiritual liberation, 
          and the path to enlightenment through ethical living and spiritual discipline.
        </p>
      </div>

      <div className="grid gap-8 mb-12">
        {coreBeliefs.map((belief, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
              <div className="flex items-center gap-3">
                <Star className="h-6 w-6 text-green-600" />
                <div>
                  <CardTitle className="text-2xl">{belief.belief}</CardTitle>
                  <CardDescription className="text-lg">{belief.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    Key Elements
                  </h3>
                  <ul className="space-y-2">
                    {belief.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{detail}</span>
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
                    {belief.significance}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Three Jewels of Jainism</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {threeJewels.map((jewel, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{jewel.jewel}</CardTitle>
                <CardDescription>{jewel.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm text-muted-foreground mb-3">Key Elements</h4>
                <ul className="space-y-2 mb-4">
                  {jewel.elements.map((element, elementIndex) => (
                    <li key={elementIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{element}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="font-semibold text-sm text-muted-foreground mb-2">Significance</h4>
                <p className="text-sm text-muted-foreground">{jewel.significance}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Five Great Vows (Mahavratas)</h2>
        <div className="grid gap-6">
          {fiveVows.map((vow, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{vow.vow}</CardTitle>
                <CardDescription>{vow.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Practice</h4>
                    <ul className="space-y-2">
                      {vow.practice.map((practice, practiceIndex) => (
                        <li key={practiceIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Significance</h4>
                    <p className="text-sm text-muted-foreground">{vow.significance}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Jain Sects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {jainSects.map((sect, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{sect.sect}</CardTitle>
                <CardDescription>{sect.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Characteristics</h4>
                    <ul className="space-y-2">
                      {sect.characteristics.map((characteristic, charIndex) => (
                        <li key={charIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{characteristic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Practices</h4>
                    <ul className="space-y-2">
                      {sect.practices.map((practice, practiceIndex) => (
                        <li key={practiceIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">Significance</h4>
                  <p className="text-sm text-muted-foreground">{sect.significance}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Spiritual Path</h2>
        <div className="grid gap-6">
          {spiritualPath.map((path, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{path.stage}</CardTitle>
                <CardDescription>{path.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Elements</h4>
                    <ul className="space-y-2">
                      {path.elements.map((element, elementIndex) => (
                        <li key={elementIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{element}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Significance</h4>
                    <p className="text-sm text-muted-foreground">{path.significance}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Explore More About Jainism</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/religion/jainism/scriptures`}>
              Jain Scriptures
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