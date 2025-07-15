import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ScrollText, Library, ArrowLeft, ExternalLink, Lightbulb, History, Users, Globe, Search, Brain, Heart, Eye } from "lucide-react"
import Link from "next/link"

interface HinduPhilosophyPageProps {
  params: {
    locale: string
  }
}

export const metadata: Metadata = {
  title: "Hindu Philosophy | Studies",
  description: "Explore the profound philosophical teachings of Hinduism, from the Vedas to the six classical schools of thought.",
  keywords: "Hindu philosophy, Vedanta, Yoga, Samkhya, Nyaya, Vaisheshika, Mimamsa, Hindu schools of thought, Brahman, Atman"
}

export default function HinduPhilosophyPage({ params }: HinduPhilosophyPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navigation */}
      <div className="mb-6">
        <Button asChild variant="ghost">
          <Link href={`/${params.locale}/sacred-texts/hindu`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Hindu Scriptures
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">Hindu Philosophy</Badge>
        <h1 className="text-4xl font-bold mb-4">Hindu Philosophy</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          Explore the rich philosophical traditions of Hinduism, from the ancient Vedas to the 
          sophisticated systems of thought that have shaped Indian civilization for millennia.
        </p>
        <div className="flex justify-center gap-4">
          <Badge variant="outline">
            <Brain className="mr-1 h-3 w-3" />
            Core Concepts
          </Badge>
          <Badge variant="outline">
            <Heart className="mr-1 h-3 w-3" />
            Schools of Thought
          </Badge>
          <Badge variant="outline">
            <Eye className="mr-1 h-3 w-3" />
            Nature of Reality
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Core Philosophical Concepts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-blue-600" />
                Core Philosophical Concepts
              </CardTitle>
              <CardDescription>
                The fundamental philosophical principles that underlie Hindu thought
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="brahman" className="space-y-4">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="brahman">Brahman</TabsTrigger>
                  <TabsTrigger value="atman">Atman</TabsTrigger>
                  <TabsTrigger value="dharma">Dharma</TabsTrigger>
                  <TabsTrigger value="karma">Karma</TabsTrigger>
                </TabsList>

                <TabsContent value="brahman" className="space-y-4">
                  <p className="text-muted-foreground">
                    Brahman is the ultimate reality, the absolute, infinite consciousness that is the 
                    source and substratum of all existence. It is beyond all forms, qualities, and limitations.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Nirguna Brahman</h4>
                      <p className="text-sm text-muted-foreground">
                        Brahman without attributes - the absolute reality beyond all forms, qualities, 
                        and descriptions. It is pure consciousness, existence, and bliss (Sat-Chit-Ananda).
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Saguna Brahman</h4>
                      <p className="text-sm text-muted-foreground">
                        Brahman with attributes - the personal aspect of the divine, worshipped as 
                        various deities like Vishnu, Shiva, and Devi. This is Brahman as experienced 
                        by the individual soul.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Brahman and Maya</h4>
                      <p className="text-sm text-muted-foreground">
                        Maya is the cosmic illusion that makes the one Brahman appear as the many. 
                        It is the power that creates the appearance of the phenomenal world.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="atman" className="space-y-4">
                  <p className="text-muted-foreground">
                    Atman is the individual soul or self, which is essentially identical to Brahman. 
                    The realization of this identity is the goal of Hindu spiritual practice.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Nature of Atman</h4>
                      <p className="text-sm text-muted-foreground">
                        Atman is eternal, pure, enlightened, and free by nature. It is not created, 
                        does not die, and is not affected by the actions of the body and mind.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Atman and Brahman</h4>
                      <p className="text-sm text-muted-foreground">
                        "Tat Tvam Asi" - "That Thou Art" - the Upanishadic teaching that the individual 
                        Atman is identical to the universal Brahman. This is the essence of Advaita Vedanta.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Self-Realization</h4>
                      <p className="text-sm text-muted-foreground">
                        The goal of Hindu philosophy is to realize one's true nature as Atman, 
                        which leads to liberation (moksha) from the cycle of birth and death.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="dharma" className="space-y-4">
                  <p className="text-muted-foreground">
                    Dharma is the cosmic law, moral duty, and righteous way of living. It is the 
                    foundation of Hindu ethics and social order.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Cosmic Dharma</h4>
                      <p className="text-sm text-muted-foreground">
                        The natural law that maintains order in the universe. It is the principle 
                        that governs all existence and ensures harmony in creation.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Individual Dharma</h4>
                      <p className="text-sm text-muted-foreground">
                        The personal duty based on one's stage of life (ashrama) and social role (varna). 
                        It includes moral and ethical responsibilities.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">The Four Goals</h4>
                      <p className="text-sm text-muted-foreground">
                        Dharma (duty), Artha (wealth), Kama (pleasure), and Moksha (liberation). 
                        These are the four legitimate goals of human life.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="karma" className="space-y-4">
                  <p className="text-muted-foreground">
                    Karma is the law of action and its consequences. Every action has a corresponding 
                    result, and understanding karma is essential for spiritual progress.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">The Law of Karma</h4>
                      <p className="text-sm text-muted-foreground">
                        Every intentional action creates an impression that will bear fruit in the future. 
                        Good actions lead to good results, bad actions to suffering.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Types of Karma</h4>
                      <p className="text-sm text-muted-foreground">
                        Sanchita karma (accumulated), Prarabdha karma (destined to bear fruit), 
                        and Kriyamana karma (being created). Only Kriyamana karma can be changed.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Karma Yoga</h4>
                      <p className="text-sm text-muted-foreground">
                        The path of selfless action - performing duties without attachment to results. 
                        This purifies the mind and leads to liberation.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Six Classical Schools */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-green-600" />
                Six Classical Schools of Hindu Philosophy
              </CardTitle>
              <CardDescription>
                The six orthodox (astika) systems of Hindu philosophy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Vedanta</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Advaita Vedanta</h4>
                      <p className="text-sm text-muted-foreground">
                        Non-dualistic philosophy of Shankara. Brahman alone is real, the world is 
                        illusion (maya), and Atman is identical to Brahman.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Vishishtadvaita</h4>
                      <p className="text-sm text-muted-foreground">
                        Qualified non-dualism of Ramanuja. Brahman, souls, and matter are real but 
                        souls and matter are attributes of Brahman.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Dvaita Vedanta</h4>
                      <p className="text-sm text-muted-foreground">
                        Dualistic philosophy of Madhva. Brahman and individual souls are eternally 
                        distinct, with Brahman as the supreme controller.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Dvaitadvaita</h4>
                      <p className="text-sm text-muted-foreground">
                        Dualistic non-dualism of Nimbarka. Souls are both identical to and different 
                        from Brahman, like waves and the ocean.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Yoga Philosophy</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Eight Limbs</h4>
                      <p className="text-sm text-muted-foreground">
                        Yama (restraints), Niyama (observances), Asana (posture), Pranayama (breath control), 
                        Pratyahara (withdrawal), Dharana (concentration), Dhyana (meditation), Samadhi (absorption).
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Purusha and Prakriti</h4>
                      <p className="text-sm text-muted-foreground">
                        Purusha (consciousness) and Prakriti (matter) are the two fundamental realities. 
                        Liberation comes from realizing their separation.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Kleshas</h4>
                      <p className="text-sm text-muted-foreground">
                        The five afflictions: ignorance, egoism, attachment, aversion, and fear of death. 
                        These are the causes of suffering.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Samadhi</h4>
                      <p className="text-sm text-muted-foreground">
                        The ultimate goal of yoga - complete absorption in pure consciousness, 
                        leading to liberation and union with the divine.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Samkhya Philosophy</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Dualism</h4>
                      <p className="text-sm text-muted-foreground">
                        Purusha (consciousness) and Prakriti (matter) are the two eternal, independent realities. 
                        The world evolves from Prakriti through the three gunas.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Three Gunas</h4>
                      <p className="text-sm text-muted-foreground">
                        Sattva (purity, harmony), Rajas (activity, passion), and Tamas (inertia, darkness). 
                        These qualities pervade all of creation.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Evolution Theory</h4>
                      <p className="text-sm text-muted-foreground">
                        From Prakriti evolve Mahat (cosmic intelligence), Ahamkara (ego), Manas (mind), 
                        the five sense organs, five motor organs, and five elements.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Liberation</h4>
                      <p className="text-sm text-muted-foreground">
                        Kaivalya (isolation) - the Purusha realizes its complete separation from Prakriti, 
                        attaining freedom from all suffering.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Other Schools</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Nyaya</h4>
                      <p className="text-sm text-muted-foreground">
                        Logic and epistemology. Focuses on valid knowledge, logical reasoning, 
                        and the means of acquiring true knowledge.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Vaisheshika</h4>
                      <p className="text-sm text-muted-foreground">
                        Atomism and metaphysics. Teaches that the universe is composed of eternal atoms 
                        and that liberation comes through knowledge of reality.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <h4 className="font-medium mb-2">Mimamsa</h4>
                      <p className="text-sm text-muted-foreground">
                        Ritual philosophy. Emphasizes the importance of Vedic rituals and dharma, 
                        focusing on the correct interpretation of Vedic texts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Nature of Reality */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-purple-600" />
                Nature of Reality
              </CardTitle>
              <CardDescription>
                Hindu perspectives on consciousness, the universe, and ultimate reality
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Cosmology and Creation</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Cyclic Universe</h4>
                      <p className="text-sm text-muted-foreground">
                        The universe undergoes endless cycles of creation, preservation, and dissolution. 
                        Each cycle (kalpa) lasts for billions of years.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Maya and Illusion</h4>
                      <p className="text-sm text-muted-foreground">
                        The phenomenal world is maya - not absolutely real but not completely unreal either. 
                        It is like a dream or a mirage, appearing real but ultimately illusory.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Lila (Divine Play)</h4>
                      <p className="text-sm text-muted-foreground">
                        The creation is the divine play (lila) of Brahman. The universe exists for 
                        the joy and expression of the divine consciousness.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Consciousness and Mind</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Chitta (Mind-Stuff)</h4>
                      <p className="text-sm text-muted-foreground">
                        The mind is composed of subtle matter that can take the form of any object. 
                        It is like a mirror that reflects the objects of perception.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Antahkarana</h4>
                      <p className="text-sm text-muted-foreground">
                        The fourfold inner instrument: Manas (mind), Buddhi (intellect), 
                        Ahamkara (ego), and Chitta (memory).
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <h4 className="font-medium">Witness Consciousness</h4>
                      <p className="text-sm text-muted-foreground">
                        The pure awareness that witnesses all mental activities without being affected by them. 
                        This is the true nature of the self.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Free Text Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Free Text Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/sacred-texts/hindu/vedas`}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Vedas
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/sacred-texts/hindu/upanishads`}>
                    <ScrollText className="mr-2 h-4 w-4" />
                    Upanishads
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/sacred-texts/hindu/bhagavad-gita`}>
                    <Library className="mr-2 h-4 w-4" />
                    Bhagavad Gita
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="https://www.sacred-texts.com/hin" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Sacred Texts
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Study Resources */}
          <Card>
            <CardHeader>
              <CardTitle>Study Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/studies/hindu/practices`}>
                    <Search className="mr-2 h-4 w-4" />
                    Hindu Practices
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/studies/hindu/history`}>
                    <History className="mr-2 h-4 w-4" />
                    Hindu History
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link href={`/${params.locale}/studies/hindu/beginner`}>
                    <Lightbulb className="mr-2 h-4 w-4" />
                    Beginner's Guide
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Key Philosophers */}
          <Card>
            <CardHeader>
              <CardTitle>Key Philosophers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Adi Shankara</span>
                  <p className="text-sm">Founder of Advaita Vedanta</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Ramanuja</span>
                  <p className="text-sm">Founder of Vishishtadvaita</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Madhva</span>
                  <p className="text-sm">Founder of Dvaita Vedanta</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Patanjali</span>
                  <p className="text-sm">Author of Yoga Sutras</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Continue Your Philosophical Journey</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Deepen your understanding of Hindu philosophy through practice, study of sacred texts, 
          and exploration of the rich traditions that have shaped Indian thought.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href={`/${params.locale}/studies/hindu/practices`}>
              <Search className="mr-2 h-5 w-5" />
              Learn Practices
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href={`/${params.locale}/sacred-texts/hindu`}>
              <BookOpen className="mr-2 h-5 w-5" />
              Read Scriptures
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 