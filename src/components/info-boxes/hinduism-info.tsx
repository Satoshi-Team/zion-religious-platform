import { Card } from "@/components/ui/card"
import Link from "next/link"

export function HinduismInfoBox() {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-6">Common Questions About Hinduism</h2>
      
      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What is Hinduism?</h3>
          <p className="mb-4">
            Hinduism is the world&apos;s oldest living religion, originating in India. It is a diverse 
            family of religious traditions, characterized by belief in reincarnation, karma, dharma, 
            and the pursuit of moksha (liberation).
          </p>
          <Link href="https://www.britannica.com/topic/Hinduism" 
                className="text-blue-600 hover:underline" 
                target="_blank" 
                rel="noopener noreferrer">
            Source: Britannica
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are the core Hindu beliefs?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Brahman (Ultimate Reality)</li>
            <li>Atman (Individual Soul)</li>
            <li>Dharma (Cosmic Order and Duty)</li>
            <li>Karma (Action and Consequence)</li>
            <li>Samsara (Cycle of Rebirth)</li>
            <li>Moksha (Liberation)</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are the sacred texts of Hinduism?</h3>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Primary Texts:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Vedas
                <ul className="list-circle pl-5 mt-1">
                  <li>Rig Veda</li>
                  <li>Sama Veda</li>
                  <li>Yajur Veda</li>
                  <li>Atharva Veda</li>
                </ul>
              </li>
              <li>Upanishads</li>
              <li>Bhagavad Gita</li>
              <li>Puranas</li>
            </ul>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are the main Hindu traditions?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Vaishnavism (worship of Vishnu)</li>
            <li>Shaivism (worship of Shiva)</li>
            <li>Shaktism (worship of the Divine Mother)</li>
            <li>Smartism (worship of multiple deities)</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are important Hindu practices?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Puja (worship)</li>
            <li>Meditation</li>
            <li>Yoga</li>
            <li>Temple worship</li>
            <li>Pilgrimage</li>
            <li>Festivals</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are major Hindu festivals?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Diwali (Festival of Lights)</li>
            <li>Holi (Festival of Colors)</li>
            <li>Navaratri (Nine Nights)</li>
            <li>Janmashtami (Krishna&apos;s Birthday)</li>
            <li>Maha Shivaratri (Night of Shiva)</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What is the Hindu concept of God?</h3>
          <p className="mb-4">
            Hinduism recognizes:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>One Supreme Reality (Brahman)</li>
            <li>Multiple manifestations of the divine</li>
            <li>Personal and impersonal aspects of God</li>
            <li>The divine presence in all creation</li>
          </ul>
        </Card>
      </div>
    </section>
  )
} 