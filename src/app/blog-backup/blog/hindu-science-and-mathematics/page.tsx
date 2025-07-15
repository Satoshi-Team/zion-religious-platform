import { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Hinduism & Science: Contributions in Mathematics, Astronomy, Medicine & Modern Dialogue | Religious Studies Blog",
  description: "Explore historical Hindu contributions to mathematics (decimal system, zero), astronomy (celestial calculations), medicine (Ayurveda), and the ongoing dialogue between ancient wisdom and modern scientific understanding.",
  openGraph: {
    title: "Hinduism & Science: Contributions in Mathematics, Astronomy, Medicine & Modern Dialogue | Religious Studies Blog",
    description: "Delve into ancient Hindu achievements in science and mathematics, including Ayurveda, and their relevance and dialogue with modern scientific fields.",
    type: "article",
    images: [
      {
        url: "/images/hinduism-science-contributions.jpg", // Placeholder - ensure image exists
        width: 1200,
        height: 630,
        alt: "Hindu Contributions to Science and Mathematics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hinduism & Science: Ancient Contributions & Modern Dialogue",
    description: "Discover Hindu advancements in math, astronomy, medicine (Ayurveda), and their dialogue with modern science.",
    images: ["/images/hinduism-science-contributions.jpg"], // Placeholder - ensure image exists
  },
}

export default function HinduScienceAndMathematicsPage() {
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
          <span aria-current="page">Hinduism & Science</span>
        </nav>

        <header className="space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
            Hinduism and Science: Historical Contributions & Modern Dialogue
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary">Sulba Sutras</Badge>
            <Badge variant="secondary">Aryabhata</Badge>
            <Badge variant="secondary">Brahmagupta</Badge>
            <Badge variant="secondary">Ayurveda</Badge>
            <Badge variant="secondary">Charaka Samhita</Badge>
            <Badge variant="secondary">Sushruta Samhita</Badge>
            <Badge variant="secondary">Quantum Physics</Badge>
            <Badge variant="secondary">Neuroscience</Badge>
          </div>
        </header>

        <div className="space-y-6">
          <p className="text-xl text-muted-foreground">
            Ancient and classical India saw remarkable advancements in various scientific fields, deeply intertwined with Hindu philosophical thought.
            These contributions in mathematics, astronomy, and medicine not only laid foundational concepts but continue to engage in a
            fruitful dialogue with modern scientific understanding.
          </p>

          <ScrollArea className="h-[700px] rounded-md border p-4">
            <div className="space-y-8">
              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Mathematics (Ganita)</h2>
                <Separator className="my-3" />
                <ul className="text-sm list-disc pl-4 space-y-2">
                  <li>
                    <strong>Sulba Sutras (c. 800-200 BCE):</strong> These texts, ancillary to the Vedas, detail complex fire-altar constructions, showcasing advanced knowledge of geometry, including the Pythagorean theorem, geometric approximations of pi, and solutions to algebraic equations.
                  </li>
                  <li>
                    <strong>Decimal System and Zero (Shunya):</strong> The invention of the decimal place-value system and the concept of zero (attributed to thinkers like Aryabhata and Brahmagupta) revolutionized mathematics globally and are foundational to modern computation.
                  </li>
                  <li>
                    <strong>Algebra (Bijaganita):</strong> Significant contributions were made to algebra, including systematic methods for solving linear and quadratic equations (e.g., Bhaskara II's Lilavati and Bijaganita).
                  </li>
                  <li>
                    <strong>Trigonometry (Trikonamiti):</strong> Development of trigonometric functions (sine, cosine) and accurate tables, notably in texts like Aryabhata's Aryabhatiya and the Surya Siddhanta, crucial for astronomical calculations.
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Astronomy (Jyotisha) and Cosmology</h2>
                <Separator className="my-3" />
                <ul className="text-sm list-disc pl-4 space-y-2">
                  <li>
                    <strong>Celestial Calculations:</strong> Sophisticated methods for calculating planetary positions, eclipses, and movements of celestial bodies (e.g., Surya Siddhanta, Aryabhata's model of epicycles).
                  </li>
                  <li>
                    <strong>Time Measurement & Cosmic Cycles:</strong> Elaborate systems of time measurement, including vast cosmic cycles (Yugas, Kalpas), reflecting a cyclical understanding of the universe (Puranic cosmology).
                  </li>
                  <li>
                    <strong>Heliocentrism and Gravity:</strong> Some texts and scholars (e.g., Aryabhata) proposed theories of Earth's rotation on its axis and hinted at concepts akin to gravity.
                  </li>
                  <li>
                    <strong>Observational Astronomy:</strong> Development of astronomical instruments and observatories (e.g., Jantar Mantar structures, though later).
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Medical Science (Ayurveda)</h2>
                <Separator className="my-3" />
                <ul className="text-sm list-disc pl-4 space-y-2">
                  <li>
                    <strong>Ayurveda ("Science of Life"):</strong> A holistic system of medicine emphasizing balance between body, mind, and spirit. Key texts include the Charaka Samhita (internal medicine) and Sushruta Samhita (surgery).
                  </li>
                  <li>
                    <strong>Surgical Techniques:</strong> The Sushruta Samhita describes complex surgical procedures, including rhinoplasty, cataract surgery, and the use of over 120 surgical instruments.
                  </li>
                  <li>
                    <strong>Herbal Medicine & Pharmacology:</strong> Extensive knowledge of medicinal plants, their properties, and formulations for treating various ailments.
                  </li>
                  <li>
                    <strong>Holistic Health & Lifestyle:</strong> Emphasis on diet, lifestyle (Dinacharya, Ritucharya), detoxification (Panchakarma), and mental well-being (Yoga) for preventing and treating disease.
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Modern Dialogue and Applications</h2>
                <Separator className="my-3" />
                <ul className="text-sm list-disc pl-4 space-y-2">
                  <li>
                    <strong>Philosophical Foundations:</strong> Hindu philosophical schools like Samkhya (cosmic evolution), Vaisheshika (atomism), and Nyaya (logic and epistemology) provided frameworks that resonate with scientific inquiry into the nature of reality and knowledge.
                  </li>
                  <li>
                    <strong>Quantum Physics:</strong> Concepts from Vedanta and other schools regarding consciousness, interconnectedness, and the nature of reality are often discussed in parallel with discoveries in quantum physics, exploring potential convergences.
                  </li>
                  <li>
                    <strong>Neuroscience and Consciousness Studies:</strong> Yoga and meditation practices, with their sophisticated understanding of mind and consciousness, are subjects of extensive neuroscientific research, particularly their effects on brain function, stress reduction, and well-being.
                  </li>
                  <li>
                    <strong>Mind-Body Medicine:</strong> Ayurvedic principles and yogic practices are increasingly integrated into modern healthcare for a holistic approach to wellness and disease management.
                  </li>
                  <li>
                    <strong>Computer Science:</strong> The logical structure of Panini's Sanskrit grammar (Ashtadhyayi) has been recognized for its parallels with formal language theory and its influence on computational linguistics.
                  </li>
                   <li>
                    <strong>Environmental Science:</strong> Traditional ecological wisdom, as discussed in Hindu texts, offers insights for sustainable practices and conservation.
                  </li>
                </ul>
              </Card>

              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Link href="/blog/hindu-philosophy" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Hindu Philosophy</h3>
                    <p className="text-sm text-muted-foreground">Foundations for scientific inquiry.</p>
                  </Card>
                </Link>
                <Link href="/blog/hindu-cosmology" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Hindu Cosmology</h3>
                    <p className="text-sm text-muted-foreground">Vast time scales and cosmic views.</p>
                  </Card>
                </Link>
                <Link href="/blog/yoga-paths-and-practices" className="block">
                  <Card className="h-full p-4 hover:border-foreground/50 transition-colors">
                    <h3 className="text-lg font-semibold">Yoga & Meditation</h3>
                    <p className="text-sm text-muted-foreground">Dialogue with neuroscience.</p>
                  </Card>
                </Link>
              </div>

              <Card className="mt-8 bg-muted p-4">
                <h3 className="text-lg font-semibold">Further Study</h3>
                <p className="text-sm text-muted-foreground">
                  Explore insights from the{" "}
                  <Link href="/hinduism/texts/sulba-sutras-mathematics" className="hover:underline">
                    Sulba Sutras on Mathematics
                  </Link>
                  , learn about{" "}
                  <Link href="/hinduism/medicine/ayurveda-modern-science" className="hover:underline">
                    Ayurveda's dialogue with Modern Medicine
                  </Link>
                  , or delve into{" "}
                  <Link href="/hinduism/philosophy/vedanta-quantum-physics" className="hover:underline">
                    Vedanta and Quantum Physics
                  </Link>
                  .
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" asChild>
                    <Link href="/hinduism/astronomy/ancient-indian-observatories">Ancient Indian Observatories</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/hinduism/science/panini-linguistics-computation">Panini & Computational Linguistics</Link>
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