import { Card } from "@/components/ui/card"
import Link from "next/link"

export function BuddhismInfoBox() {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-6">Common Questions About Buddhism</h2>
      
      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What is Buddhism?</h3>
          <p className="mb-4">
            Buddhism is a path of spiritual development and practice based on the teachings of 
            Siddhartha Gautama (the Buddha). Founded in India around 2,500 years ago, it focuses 
            on understanding the nature of reality and ending suffering.
          </p>
          <Link href="https://www.britannica.com/topic/Buddhism" 
                className="text-blue-600 hover:underline" 
                target="_blank" 
                rel="noopener noreferrer">
            Source: Britannica
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are the Four Noble Truths?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>The truth of suffering (dukkha)</li>
            <li>The truth of the cause of suffering (samudaya)</li>
            <li>The truth of the end of suffering (nirodha)</li>
            <li>The truth of the path leading to the end of suffering (magga)</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What is the Noble Eightfold Path?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Right View</li>
            <li>Right Intention</li>
            <li>Right Speech</li>
            <li>Right Action</li>
            <li>Right Livelihood</li>
            <li>Right Effort</li>
            <li>Right Mindfulness</li>
            <li>Right Concentration</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are the main schools of Buddhism?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Theravada (Way of the Elders)
              <ul className="list-circle pl-5 mt-2">
                <li>Prevalent in Southeast Asia</li>
                <li>Focuses on individual enlightenment</li>
              </ul>
            </li>
            <li>Mahayana (Great Vehicle)
              <ul className="list-circle pl-5 mt-2">
                <li>Common in East Asia</li>
                <li>Emphasizes universal salvation</li>
              </ul>
            </li>
            <li>Vajrayana (Diamond Vehicle)
              <ul className="list-circle pl-5 mt-2">
                <li>Practiced in Tibet and surrounding regions</li>
                <li>Incorporates tantric practices</li>
              </ul>
            </li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are Buddhist sacred texts?</h3>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Key texts include:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Tripitaka (Pali Canon)</li>
              <li>Mahayana Sutras</li>
              <li>Heart Sutra</li>
              <li>Diamond Sutra</li>
              <li>Lotus Sutra</li>
            </ul>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are key Buddhist practices?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Meditation (bhavana)</li>
            <li>Mindfulness practice</li>
            <li>Chanting and mantras</li>
            <li>Offering and devotional practices</li>
            <li>Following ethical precepts</li>
            <li>Study of dharma</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are important Buddhist concepts?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Karma (action and consequence)</li>
            <li>Samsara (cycle of rebirth)</li>
            <li>Nirvana (liberation)</li>
            <li>Emptiness (sunyata)</li>
            <li>Impermanence (anicca)</li>
            <li>Non-self (anatta)</li>
          </ul>
        </Card>
      </div>
    </section>
  )
} 