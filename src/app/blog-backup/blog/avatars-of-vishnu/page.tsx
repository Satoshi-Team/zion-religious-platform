import React from 'react'
import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Avatars of Vishnu: The Dashavatara and Divine Intervention | Religious Studies Blog",
  description: "Explore the Dashavatara, the ten primary avatars of Lord Vishnu in Hinduism, including Matsya, Kurma, Varaha, Narasimha, Vamana, Parashurama, Rama, Krishna, Buddha, and Kalki. Understand their stories and significance in cosmic order.",
  openGraph: {
    title: "Avatars of Vishnu: The Dashavatara and Divine Intervention | Religious Studies Blog",
    description: "A deep dive into the ten major incarnations of Vishnu (Dashavatara), detailing their roles in preserving Dharma, protecting devotees, and guiding humanity through different yugas.",
    type: "article",
    images: [
      {
        url: "/images/avatars-of-vishnu.jpg", // Placeholder - ensure image exists
        width: 1200,
        height: 630,
        alt: "The Ten Avatars of Vishnu (Dashavatara)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avatars of Vishnu: The Dashavatara and Divine Intervention",
    description: "Explore Vishnu's ten primary avatars (Dashavatara) and their significance in Hinduism.",
    images: ["/images/avatars-of-vishnu.jpg"], // Placeholder - ensure image exists
  },
}

export default function AvatarsOfVishnuPage() {
  return (
    <article className="prose prose-lg dark:prose-invert mx-auto">
      <div className="space-y-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <span aria-hidden="true">•</span>
          <Link href="/religion/hinduism" className="hover:underline">
            Hinduism
          </Link>
          <span aria-hidden="true">•</span>
          <span aria-current="page">Avatars of Vishnu</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            Avatars of Vishnu: Divine Incarnations (Dashavatara)
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Dashavatara</Badge>
            <Badge variant="secondary">Vishnu</Badge>
            <Badge variant="secondary">Dharma</Badge>
            <Badge variant="secondary">Incarnation</Badge>
            <Badge variant="secondary">Hindu Mythology</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            The concept of divine incarnation (avatar) is central to Vaishnavism,
            a major tradition within Hinduism. Lord Vishnu, the preserver and protector of cosmic order (Dharma),
            is believed to manifest in various forms on Earth to restore righteousness, vanquish evil, and guide humanity.
            The ten primary incarnations, collectively known as the Dashavatara, are particularly significant,
            each appearing in a different epoch (Yuga) to address specific cosmic needs.
          </p>

          <ScrollArea className="h-[600px] rounded-md border p-4">
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">The Concept of Avatar</h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Divine Manifestation</h3>
                    <ul className="mt-2">
                      <li><strong>Purpose:</strong> To re-establish Dharma, protect the virtuous, and destroy evil.</li>
                      <li><strong>Nature:</strong> Avatars can be full manifestations (Purna Avatars like Krishna) or partial (Amsha Avatars).</li>
                      <li><strong>Context:</strong> Appearances are often tied to cosmic cycles (Yugas) and specific needs of the world.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Bhagavad Gita on Avatars</h3>
                    <p className="mt-2">
                      "Whenever there is a decline in righteousness (Dharma) and an increase in unrighteousness (Adharma), O Arjuna, I manifest Myself." (Bhagavad Gita 4.7)
                    </p>
                    <p className="mt-2">
                      "For the protection of the good, for the destruction of the wicked, and for the establishment of righteousness, I come into being from age to age." (Bhagavad Gita 4.8)
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">The Ten Major Incarnations (Dashavatara)</h2>
                <Separator className="my-4" />
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {/* Matsya */}
                  <Card className="p-4">
                    <h3 className="text-lg font-medium">1. Matsya (The Fish)</h3>
                    <Badge variant="outline">Satya Yuga</Badge>
                    <p className="mt-2 text-sm">
                      Saved Manu (progenitor of humanity) and the sacred Vedas from a great deluge, ensuring the continuity of life and knowledge.
                    </p>
                    <ul className="mt-1 text-xs">
                      <li>Symbolizes: Rescue, preservation of sacred wisdom.</li>
                    </ul>
                  </Card>

                  {/* Kurma */}
                  <Card className="p-4">
                    <h3 className="text-lg font-medium">2. Kurma (The Tortoise)</h3>
                    <Badge variant="outline">Satya Yuga</Badge>
                    <p className="mt-2 text-sm">
                      Supported Mount Mandara on his back during the churning of the cosmic ocean (Samudra Manthan) to obtain Amrita (nectar of immortality).
                    </p>
                    <ul className="mt-1 text-xs">
                      <li>Symbolizes: Cosmic support, stability, endurance.</li>
                    </ul>
                  </Card>

                  {/* Varaha */}
                  <Card className="p-4">
                    <h3 className="text-lg font-medium">3. Varaha (The Boar)</h3>
                    <Badge variant="outline">Satya Yuga</Badge>
                    <p className="mt-2 text-sm">
                      Rescued the Earth Goddess (Bhudevi) from the demon Hiranyaksha, who had dragged her to the bottom of the cosmic ocean.
                    </p>
                    <ul className="mt-1 text-xs">
                      <li>Symbolizes: Upliftment of Earth, protection from cosmic evil.</li>
                    </ul>
                  </Card>

                  {/* Narasimha */}
                  <Card className="p-4">
                    <h3 className="text-lg font-medium">4. Narasimha (The Man-Lion)</h3>
                    <Badge variant="outline">Satya Yuga</Badge>
                    <p className="mt-2 text-sm">
                      Appeared with a lion's head and human body to slay the demon Hiranyakashipu, who was immune to being killed by man or beast, day or night, inside or outside.
                    </p>
                    <ul className="mt-1 text-xs">
                      <li>Symbolizes: Protection of devotees, divine justice transcending boons.</li>
                    </ul>
                  </Card>

                  {/* Vamana */}
                  <Card className="p-4">
                    <h3 className="text-lg font-medium">5. Vamana (The Dwarf)</h3>
                    <Badge variant="outline">Treta Yuga</Badge>
                    <p className="mt-2 text-sm">
                      As a dwarf Brahmin, tricked the demon king Bali into granting him three paces of land, covering the heavens, earth, and netherworlds, restoring cosmic balance.
                    </p>
                    <ul className="mt-1 text-xs">
                      <li>Symbolizes: Humility overcoming pride, cosmic order.</li>
                    </ul>
                  </Card>

                  {/* Parashurama */}
                  <Card className="p-4">
                    <h3 className="text-lg font-medium">6. Parashurama (The Warrior with an Axe)</h3>
                    <Badge variant="outline">Treta Yuga</Badge>
                    <p className="mt-2 text-sm">
                      A Brahmin warrior who subdued the arrogant Kshatriya (warrior) class who were oppressing the people and neglecting their duties.
                    </p>
                    <ul className="mt-1 text-xs">
                      <li>Symbolizes: Destruction of tyranny, restoration of social order.</li>
                    </ul>
                  </Card>

                  {/* Rama */}
                  <Card className="p-4">
                    <h3 className="text-lg font-medium">7. Rama (The Ideal King)</h3>
                    <Badge variant="outline">Treta Yuga</Badge>
                    <p className="mt-2 text-sm">
                      The protagonist of the epic Ramayana, embodying Dharma, righteousness, and ideal kingship. Defeated the demon king Ravana.
                    </p>
                    <ul className="mt-1 text-xs">
                      <li>Symbolizes: Virtue, duty, ideal human conduct.</li>
                    </ul>
                  </Card>

                  {/* Krishna */}
                  <Card className="p-4">
                    <h3 className="text-lg font-medium">8. Krishna (The Divine Statesman & Teacher)</h3>
                    <Badge variant="outline">Dvapara Yuga</Badge>
                    <p className="mt-2 text-sm">
                      A central figure in the Mahabharata and Bhagavad Gita. Known for his divine play (Lila), wisdom, and teachings on Dharma, Bhakti, and Karma Yoga.
                    </p>
                    <ul className="mt-1 text-xs">
                      <li>Symbolizes: Divine love, wisdom, multifaceted divinity.</li>
                    </ul>
                  </Card>

                  {/* Buddha */}
                  <Card className="p-4">
                    <h3 className="text-lg font-medium">9. Buddha (The Enlightened One)</h3>
                    <Badge variant="outline">Kali Yuga</Badge>
                    <p className="mt-2 text-sm">
                      Hindus consider Siddhartha Gautama, the founder of Buddhism, as an avatar who taught compassion and non-violence to guide humanity away from excessive ritualism.
                    </p>
                    <ul className="mt-1 text-xs">
                      <li>Symbolizes: Compassion, non-violence, spiritual awakening.</li>
                    </ul>
                  </Card>

                  {/* Kalki */}
                  <Card className="p-4">
                    <h3 className="text-lg font-medium">10. Kalki (The Future Avatar)</h3>
                    <Badge variant="outline">End of Kali Yuga</Badge>
                    <p className="mt-2 text-sm">
                      Prophesied to appear at the end of the current Kali Yuga, riding a white horse with a blazing sword, to destroy wickedness and usher in a new Satya Yuga (age of truth).
                    </p>
                    <ul className="mt-1 text-xs">
                      <li>Symbolizes: Renewal, destruction of adharma, future hope.</li>
                    </ul>
                  </Card>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Philosophical Significance
                </h2>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium">Evolutionary Interpretation</h3>
                    <p className="mt-2">
                      Some interpretations view the Dashavatara as representing an evolutionary sequence, from aquatic life (Matsya) to more complex human forms and finally spiritual enlightenment (Buddha) and cosmic renewal (Kalki).
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Diverse Paths to Divine</h3>
                    <p className="mt-2">
                      The various avatars showcase different aspects of the divine and offer multiple paths for devotion and understanding, catering to diverse human temperaments and spiritual needs. Each avatar's story provides moral and spiritual lessons.
                    </p>
                  </div>
                </div>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Link href="/blog/major-deities" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Major Hindu Deities</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn about Vishnu, Shiva, Devi and others.
                    </p>
                  </Card>
                </Link>
                <Link href="/blog/hindu-cosmology" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Hindu Cosmology</h3>
                    <p className="text-sm text-muted-foreground">
                      Understand Yugas and the cosmic cycles.
                    </p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Explore the stories of individual avatars like{" "}
                  <Link href="/hinduism/avatars/rama" className="hover:underline">
                    Rama
                  </Link>{" "}
                  and{" "}
                  <Link href="/hinduism/avatars/krishna" className="hover:underline">
                    Krishna
                  </Link>
                  . Delve deeper into the concept of{" "}
                  <Link href="/hinduism/concepts/dharma" className="hover:underline">
                    Dharma
                  </Link>
                  .
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/hinduism/texts/bhagavad-gita">Bhagavad Gita</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/hinduism/concepts/yugas">The Yugas</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </ScrollArea>
        </div>
      </div>
    </article>
  )
} 