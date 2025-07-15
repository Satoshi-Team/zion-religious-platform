import { Card } from "@/components/ui/card"
import Link from "next/link"

export function BahaiInfoBox() {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-6">Common Questions About the Bahá&apos;í Faith</h2>
      
      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What is the Bahá&apos;í Faith?</h3>
          <p className="mb-4">
            The Bahá&apos;í Faith is a world religion founded by Bahá&apos;u&apos;lláh in the 19th century. 
            It teaches the unity of all religions, the oneness of humanity, and the progressive 
            revelation of religious truth.
          </p>
          <Link href="https://www.bahai.org/beliefs" 
                className="text-blue-600 hover:underline" 
                target="_blank" 
                rel="noopener noreferrer">
            Source: Bahai.org
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are the core Bahá&apos;í beliefs?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Unity of God</li>
            <li>Unity of Religion</li>
            <li>Unity of Humanity</li>
            <li>Progressive Revelation</li>
            <li>Equality of men and women</li>
            <li>Harmony of science and religion</li>
            <li>Universal education</li>
            <li>World peace</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">Who are the Central Figures?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>The Báb (1819-1850) - The Herald</li>
            <li>Bahá&apos;u&apos;lláh (1817-1892) - The Founder</li>
            <li>&apos;Abdu&apos;l-Bahá (1844-1921) - The Exemplar</li>
            <li>Shoghi Effendi (1897-1957) - The Guardian</li>
          </ul>
        </Card>
      </div>
    </section>
  )
} 