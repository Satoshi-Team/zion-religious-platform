import { Card } from "@/components/ui/card"
import Link from "next/link"

export function IndigenousTraditionsInfoBox() {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-6">Common Questions About Indigenous Traditions</h2>
      
      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are Indigenous Religious Traditions?</h3>
          <p className="mb-4">
            Indigenous religious traditions are diverse spiritual practices and beliefs that originate 
            from the traditional cultures of native peoples worldwide. They typically emphasize 
            connection to land, ancestors, and the natural world.
          </p>
          <Link href="https://www.britannica.com/topic/Native-American-religion" 
                className="text-blue-600 hover:underline" 
                target="_blank" 
                rel="noopener noreferrer">
            Source: Britannica
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are common elements across traditions?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Sacred relationship with land</li>
            <li>Ancestral connections</li>
            <li>Oral traditions</li>
            <li>Ceremonial practices</li>
            <li>Community-based spirituality</li>
            <li>Holistic worldview</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">Major Regional Traditions</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Americas:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Native North American traditions</li>
                <li>Mesoamerican spirituality</li>
                <li>Andean religious practices</li>
                <li>Amazon Basin traditions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Africa:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>West African traditions</li>
                <li>East African practices</li>
                <li>Southern African spirituality</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Oceania:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Aboriginal Australian spirituality</li>
                <li>Māori traditions</li>
                <li>Pacific Islander practices</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">Common Spiritual Practices</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Ceremonial rituals</li>
            <li>Sacred dance and music</li>
            <li>Traditional healing</li>
            <li>Vision quests</li>
            <li>Storytelling</li>
            <li>Sacred site pilgrimages</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">Sacred Knowledge</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Oral histories and traditions</li>
            <li>Creation stories</li>
            <li>Traditional ecological knowledge</li>
            <li>Ceremonial songs and chants</li>
            <li>Medicinal practices</li>
            <li>Cultural protocols</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">Contemporary Practices</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Cultural revitalization</li>
            <li>Language preservation</li>
            <li>Traditional ceremonies</li>
            <li>Environmental stewardship</li>
            <li>Intergenerational teaching</li>
            <li>Sacred site protection</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">Key Concepts</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Sacred landscapes</li>
            <li>Ancestral spirits</li>
            <li>Cyclical time</li>
            <li>Interconnectedness</li>
            <li>Reciprocity with nature</li>
            <li>Community responsibility</li>
          </ul>
        </Card>
      </div>
    </section>
  )
} 