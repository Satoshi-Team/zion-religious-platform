import { Card } from "@/components/ui/card"
import Link from "next/link"

export function JainismInfoBox() {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-6">Common Questions About Jainism</h2>
      
      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What is Jainism?</h3>
          <p className="mb-4">
            Jainism is an ancient Indian religion emphasizing non-violence (ahimsa), truthfulness, 
            non-stealing, celibacy/fidelity, and non-possession. Its spiritual goal is liberation 
            of the soul from the cycle of birth and death.
          </p>
          <Link href="https://www.jainworld.com/education/introduction-to-jainism/" 
                className="text-blue-600 hover:underline" 
                target="_blank" 
                rel="noopener noreferrer">
            Source: Jain World
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">Who are the Tirthankaras?</h3>
          <p className="mb-4">
            The 24 Tirthankaras are enlightened teachers who show the path to liberation. The last two were:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Parshvanatha (23rd Tirthankara)</li>
            <li>Mahavira (24th Tirthankara)</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are the Five Great Vows (Mahavratas)?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Ahimsa (Non-violence)</li>
            <li>Satya (Truthfulness)</li>
            <li>Asteya (Non-stealing)</li>
            <li>Brahmacharya (Celibacy/Fidelity)</li>
            <li>Aparigraha (Non-possession)</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are the main Jain principles?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Anekantavada (Many-sided reality)</li>
            <li>Syadvada (Theory of relativity)</li>
            <li>Karma theory</li>
            <li>Soul and liberation</li>
            <li>Non-violence to all life forms</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are the main Jain sects?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Svetambara (white-clad)</li>
            <li>Digambara (sky-clad)</li>
            <li>Sthanakvasi</li>
            <li>Terapanthi</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are important Jain practices?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Meditation and prayer</li>
            <li>Dietary restrictions</li>
            <li>Fasting</li>
            <li>Temple worship</li>
            <li>Pilgrimage</li>
            <li>Charity and compassion</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are important Jain practices?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Meditation and prayer</li>
            <li>Dietary restrictions</li>
            <li>Fasting</li>
            <li>Temple worship</li>
            <li>Pilgrimage</li>
            <li>Charity and compassion</li>
          </ul>
        </Card>
      </div>
    </section>
  )
} 