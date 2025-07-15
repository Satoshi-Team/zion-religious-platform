import { Card } from "@/components/ui/card"
import Link from "next/link"

export function ShintoInfoBox() {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-6">Common Questions About Shinto</h2>
      
      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What is Shinto?</h3>
          <p className="mb-4">
            Shinto is the indigenous faith of Japan, focusing on ritual practices to be carried out 
            diligently to establish a connection between present-day Japan and its ancient past. 
            It emphasizes respect for kami (spirits or deities) and harmony with nature.
          </p>
          <Link href="https://www.britannica.com/topic/Shinto" 
                className="text-blue-600 hover:underline" 
                target="_blank" 
                rel="noopener noreferrer">
            Source: Britannica
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are Kami?</h3>
          <p className="mb-4">
            Kami are:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Divine spirits or deities</li>
            <li>Natural forces and elements</li>
            <li>Ancestral spirits</li>
            <li>Deified historical figures</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are Shinto Shrines?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Jinja (神社) - Places of worship</li>
            <li>Torii gates mark sacred space</li>
            <li>Contains various shrine buildings</li>
            <li>Houses kami</li>
            <li>Centers for festivals and rituals</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are key Shinto practices?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Purification rituals (harae)</li>
            <li>Shrine visits (omairi)</li>
            <li>Festival participation (matsuri)</li>
            <li>Offerings to kami</li>
            <li>Prayer and ritual (norito)</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are major Shinto festivals?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Shōgatsu (New Year)</li>
            <li>Setsubun (Beginning of Spring)</li>
            <li>Shichi-Go-San (Children&apos;s Festival)</li>
            <li>Local shrine matsuri</li>
            <li>Seasonal celebrations</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are Shinto sacred texts?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Kojiki (Record of Ancient Matters)</li>
            <li>Nihon Shoki (Chronicles of Japan)</li>
            <li>Engishiki (Procedures of the Engi Era)</li>
            <li>Various prayer and ritual texts</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are Shinto values?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Harmony with nature</li>
            <li>Purity and cleanliness</li>
            <li>Respect for ancestors</li>
            <li>Community solidarity</li>
            <li>Balance of tradition and modernity</li>
          </ul>
        </Card>
      </div>
    </section>
  )
} 