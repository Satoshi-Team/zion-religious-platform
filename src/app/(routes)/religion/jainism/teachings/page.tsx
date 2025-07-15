import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { BookOpen, Heart, Lightbulb, Users, Star, Shield, Globe, Eye, Target, Scale } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: 'Jain Teachings | Sacred Texts & Religious Studies',
    description: 'Explore Jain ethical teachings, spiritual principles, wisdom literature, and educational traditions that guide Jain life and values.',
    keywords: 'Jain teachings, Jain ethics, spiritual principles, wisdom literature, Jain values, Jain education, Jain philosophy',
    openGraph: {
      title: 'Jain Teachings | Sacred Texts & Religious Studies',
      description: 'Explore Jain ethical teachings, spiritual principles, wisdom literature, and educational traditions that guide Jain life and values.',
      type: 'website',
    },
  }
}

export default async function JainismTeachingsPage({ params }: { params: { locale: string } }) {

  const coreTeachings = [
    {
      teaching: "Ahimsa (Non-Violence)",
      description: "Absolute non-violence towards all living beings",
      principles: [
        "Non-violence in thought, word, and deed",
        "Respect for all forms of life",
        "Vegetarianism and careful eating",
        "Avoiding harm to even microscopic life",
        "Compassion and kindness to all beings"
      ],
      significance: "Central principle guiding all Jain practices and ethics"
    },
    {
      teaching: "Anekantavada (Non-Absolutism)",
      description: "Multiple perspectives and relative truth",
      principles: [
        "Recognition of multiple viewpoints",
        "Avoidance of dogmatic thinking",
        "Respect for different perspectives",
        "Intellectual humility and tolerance",
        "Understanding of relative truth"
      ],
      significance: "Promotes intellectual tolerance and understanding"
    },
    {
      teaching: "Aparigraha (Non-Possessiveness)",
      description: "Detachment from material possessions",
      principles: [
        "Minimizing material possessions",
        "Avoiding excessive attachment",
        "Simple living and contentment",
        "Sharing with others",
        "Focus on spiritual wealth"
      ],
      significance: "Leads to inner peace and spiritual freedom"
    },
    {
      teaching: "Karma and Reincarnation",
      description: "Understanding of action and rebirth",
      principles: [
        "Karma as subtle matter attached to soul",
        "Cycle of birth and death (samsara)",
        "Liberation through karma removal",
        "Individual responsibility for actions",
        "Path to moksha (liberation)"
      ],
      significance: "Explains suffering and path to liberation"
    },
    {
      teaching: "Jiva and Ajiva",
      description: "Soul and non-soul substances",
      principles: [
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

  const wisdomLiterature = [
    {
      text: "Tattvartha Sutra",
      author: "Umasvati",
      description: "Compendium of Jain philosophy",
      keyTeachings: [
        "Seven categories of truth",
        "Soul and matter relationship",
        "Karma theory and liberation",
        "Ethical principles and conduct",
        "Spiritual path and stages"
      ],
      famousPassages: [
        "Samyag-darsana-jnana-caritrani moksamargah",
        "Jiva ajiva punya papa asrava samvara nirjara moksa",
        "Parasparopagraho jivanam"
      ],
      influence: "Most important systematic work on Jain philosophy"
    },
    {
      text: "Samayasara",
      author: "Kundakunda",
      description: "Essence of spiritual practice",
      keyTeachings: [
        "Nature of pure soul",
        "Meditation and contemplation",
        "Spiritual purification",
        "Liberation and omniscience",
        "Detachment and renunciation"
      ],
      famousPassages: [
        "Samyag-darsana-jnana-caritrani moksamargah",
        "Jiva ajiva punya papa asrava samvara nirjara moksa",
        "Parasparopagraho jivanam"
      ],
      influence: "Essential guide for spiritual practice"
    },
    {
      text: "Pancastikaya",
      author: "Kundakunda",
      description: "Five substances",
      keyTeachings: [
        "Five fundamental substances",
        "Soul and matter distinction",
        "Cosmology and metaphysics",
        "Spiritual reality",
        "Liberation process"
      ],
      famousPassages: [
        "Jiva ajiva punya papa asrava samvara nirjara moksa",
        "Parasparopagraho jivanam",
        "Samyag-darsana-jnana-caritrani moksamargah"
      ],
      influence: "Foundation of Jain metaphysics"
    },
    {
      text: "Pravachanasara",
      author: "Kundakunda",
      description: "Essence of teachings",
      keyTeachings: [
        "Spiritual guidance",
        "Ethical conduct",
        "Monastic life",
        "Wisdom and knowledge",
        "Path to liberation"
      ],
      famousPassages: [
        "Parasparopagraho jivanam",
        "Samyag-darsana-jnana-caritrani moksamargah",
        "Jiva ajiva punya papa asrava samvara nirjara moksa"
      ],
      influence: "Practical guide for spiritual life"
    }
  ]

  const philosophicalConcepts = [
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
    },
    {
      concept: "Karma Theory",
      description: "Understanding of karma and its effects",
      elements: [
        "Karma as subtle matter",
        "Eight types of karma",
        "Karma bondage and liberation",
        "Individual responsibility",
        "Path to karma removal"
      ],
      significance: "Explains suffering and liberation process"
    }
  ]

  const ethicalGuidelines = [
    {
      guideline: "Five Evils to Avoid",
      description: "Negative qualities to overcome",
      evils: [
        "Kaam (Lust): Excessive desire and attachment",
        "Krodh (Anger): Destructive anger and hatred",
        "Lobh (Greed): Excessive greed and materialism",
        "Moh (Attachment): Excessive attachment to worldly things",
        "Ahankar (Ego): Pride and self-centeredness"
      ],
      significance: "Obstacles to spiritual growth and ethical living"
    },
    {
      guideline: "Five Virtues to Cultivate",
      description: "Positive qualities to develop",
      virtues: [
        "Sat (Truth): Truthfulness and honesty",
        "Santokh (Contentment): Satisfaction and gratitude",
        "Daya (Compassion): Kindness and mercy",
        "Nimrata (Humility): Modesty and humility",
        "Pyar (Love): Love for all creation"
      ],
      significance: "Path to spiritual growth and ethical living"
    },
    {
      guideline: "Social Responsibilities",
      description: "Duties towards society and humanity",
      responsibilities: [
        "Protecting the weak and oppressed",
        "Standing against injustice",
        "Promoting equality and justice",
        "Serving humanity selflessly",
        "Preserving the environment"
      ],
      significance: "Essential for spiritual and social well-being"
    },
    {
      guideline: "Family and Community",
      description: "Duties towards family and community",
      duties: [
        "Respecting and caring for parents",
        "Raising children with Jain values",
        "Supporting community welfare",
        "Participating in community activities",
        "Maintaining family harmony"
      ],
      significance: "Foundation for strong society and spiritual growth"
    }
  ]

  const spiritualPractices = [
    {
      practice: "Samayika (Meditation)",
      description: "Daily meditation and spiritual practice",
      elements: [
        "48-minute meditation sessions",
        "Focus on soul nature",
        "Purification of thoughts",
        "Spiritual contemplation",
        "Inner peace and tranquility"
      ],
      significance: "Purifies karma and advances spiritual progress"
    },
    {
      practice: "Pratikramana (Repentance)",
      description: "Daily repentance and self-reflection",
      elements: [
        "Reflection on daily actions",
        "Repentance for harmful deeds",
        "Renewal of vows",
        "Purification of karma",
        "Spiritual cleansing"
      ],
      significance: "Removes accumulated karma and purifies soul"
    },
    {
      practice: "Sangha (Community)",
      description: "Association with spiritual community",
      elements: [
        "Attending temple regularly",
        "Participating in ceremonies",
        "Learning from spiritual teachers",
        "Supporting community activities",
        "Building spiritual relationships"
      ],
      significance: "Strengthens spiritual growth and community bonds"
    },
    {
      practice: "Seva (Service)",
      description: "Service to humanity and all beings",
      elements: [
        "Helping those in need",
        "Protecting animals",
        "Environmental conservation",
        "Community service",
        "Promoting peace"
      ],
      significance: "Demonstrates love for all creation"
    }
  ]

  const educationalTraditions = [
    {
      tradition: "Traditional Learning",
      description: "Ancient methods of knowledge transmission",
      features: [
        "Guru-shishya tradition",
        "Oral transmission of texts",
        "Memorization and recitation",
        "Philosophical debates",
        "Spiritual guidance"
      ],
      significance: "Preserves knowledge and spiritual wisdom"
    },
    {
      tradition: "Monastic Education",
      description: "Education within monastic communities",
      features: [
        "Intensive study of scriptures",
        "Philosophical training",
        "Spiritual discipline",
        "Teaching and guidance",
        "Preservation of knowledge"
      ],
      significance: "Maintains high standards of learning"
    },
    {
      tradition: "Modern Educational Institutions",
      description: "Contemporary Jain educational centers",
      features: [
        "Schools and universities",
        "Research and scholarship",
        "Cultural preservation",
        "Interfaith understanding",
        "Global outreach"
      ],
      significance: "Advances education and cultural preservation"
    },
    {
      tradition: "Community Education",
      description: "Education for lay community",
      features: [
        "Religious education programs",
        "Cultural activities",
        "Moral and ethical training",
        "Community service",
        "Spiritual development"
      ],
      significance: "Strengthens community and preserves values"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Jain Teachings</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover the rich ethical teachings, spiritual principles, and wisdom traditions of Jainism that guide 
          Jain life and provide timeless insights for human flourishing and spiritual growth.
        </p>
      </div>

      <div className="grid gap-8 mb-12">
        {coreTeachings.map((teaching, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6 text-green-600" />
                <div>
                  <CardTitle className="text-2xl">{teaching.teaching}</CardTitle>
                  <CardDescription className="text-lg">{teaching.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    Key Principles
                  </h3>
                  <ul className="space-y-2">
                    {teaching.principles.map((principle, principleIndex) => (
                      <li key={principleIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{principle}</span>
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
                    {teaching.significance}
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
        <h2 className="text-3xl font-bold mb-8 text-center">Wisdom Literature</h2>
        <div className="grid gap-6">
          {wisdomLiterature.map((text, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{text.text}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      {text.author}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Key Teachings</h4>
                    <ul className="space-y-2">
                      {text.keyTeachings.map((teaching, teachingIndex) => (
                        <li key={teachingIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{teaching}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Famous Passages</h4>
                    <ul className="space-y-2">
                      {text.famousPassages.map((passage, passageIndex) => (
                        <li key={passageIndex} className="text-sm italic text-muted-foreground">
                          "{passage}"
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">Influence</h4>
                  <p className="text-sm text-muted-foreground">{text.influence}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Philosophical Concepts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {philosophicalConcepts.map((concept, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{concept.concept}</CardTitle>
                <CardDescription>{concept.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm text-muted-foreground mb-3">Key Elements</h4>
                <ul className="space-y-2">
                  {concept.elements.map((element, elementIndex) => (
                    <li key={elementIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{element}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">Significance</h4>
                  <p className="text-sm text-muted-foreground">{concept.significance}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Ethical Guidelines</h2>
        <div className="grid gap-6">
          {ethicalGuidelines.map((guideline, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{guideline.guideline}</CardTitle>
                <CardDescription>{guideline.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Elements</h4>
                    <ul className="space-y-2">
                      {(guideline.evils || guideline.virtues || guideline.responsibilities || guideline.duties).map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Significance</h4>
                    <p className="text-sm text-muted-foreground">{guideline.significance}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Spiritual Practices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {spiritualPractices.map((practice, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{practice.practice}</CardTitle>
                <CardDescription>{practice.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Key Elements</h4>
                    <ul className="space-y-2">
                      {practice.elements.map((element, elementIndex) => (
                        <li key={elementIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{element}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">Significance</h4>
                    <p className="text-sm text-muted-foreground">{practice.significance}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Educational Traditions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {educationalTraditions.map((tradition, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{tradition.tradition}</CardTitle>
                <CardDescription>{tradition.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {tradition.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">Significance</h4>
                    <p className="text-sm text-muted-foreground">{tradition.significance}</p>
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
            <Link href={`/${params.locale}/religion/jainism/overview`}>
              Jain Overview
            </Link>
          </Button>
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
        </div>
      </div>
    </div>
  )
} 