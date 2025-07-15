import React from 'react'
import { Card } from "@/components/ui/card"
import Link from "next/link"

export function ZoroastrianismInfoBox() {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-6">Common Questions About Zoroastrianism</h2>
      
      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What is Zoroastrianism?</h3>
          <p className="mb-4">
            Zoroastrianism is one of the world&apos;s oldest monotheistic religions, founded by the 
            Prophet Zarathustra (Zoroaster) in ancient Persia. It emphasizes the cosmic battle 
            between good and evil, and the choice between truth and falsehood.
          </p>
          <Link href="https://www.britannica.com/topic/Zoroastrianism" 
                className="text-blue-600 hover:underline" 
                target="_blank" 
                rel="noopener noreferrer">
            Source: Britannica
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are the core beliefs?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>One supreme deity: Ahura Mazda</li>
            <li>Cosmic battle between good and evil</li>
            <li>Free will and moral choice</li>
            <li>Importance of good thoughts, words, and deeds</li>
            <li>Final triumph of good over evil</li>
            <li>Afterlife and judgment</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are the sacred texts?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Avesta (primary scripture)
              <ul className="list-circle pl-5 mt-2">
                <li>Gathas (hymns of Zarathustra)</li>
                <li>Yasna (liturgical texts)</li>
                <li>Vendidad (laws and traditions)</li>
                <li>Visperad (liturgical supplements)</li>
              </ul>
            </li>
            <li>Later texts:
              <ul className="list-circle pl-5 mt-2">
                <li>Denkard (religious encyclopedia)</li>
                <li>Bundahishn (creation account)</li>
              </ul>
            </li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are the sacred elements?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Fire (symbol of divine wisdom)</li>
            <li>Water (symbol of purity)</li>
            <li>Earth (symbol of sustenance)</li>
            <li>Air (symbol of life force)</li>
            <li>Space (symbol of infinity)</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are key practices?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Prayer (five times daily)</li>
            <li>Fire temple worship</li>
            <li>Navjote (initiation ceremony)</li>
            <li>Purification rituals</li>
            <li>Festivals and holy days</li>
            <li>Tower of Silence (traditional disposal of dead)</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are major festivals?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Nowruz (New Year)</li>
            <li>Mehregan (autumn festival)</li>
            <li>Tiregan (water festival)</li>
            <li>Sadeh (mid-winter festival)</li>
            <li>Gahambars (seasonal festivals)</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">Contemporary Communities</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Parsis in India</li>
            <li>Iranian Zoroastrians</li>
            <li>Diaspora communities worldwide</li>
            <li>Modern adaptations of practices</li>
            <li>Cultural preservation efforts</li>
          </ul>
        </Card>
      </div>
    </section>
  )
} 