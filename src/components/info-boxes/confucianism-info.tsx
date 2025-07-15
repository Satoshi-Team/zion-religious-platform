import { Card } from "@/components/ui/card"
import Link from "next/link"

export function ConfucianismInfoBox() {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-6">Common Questions About Confucianism</h2>
      
      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What is Confucianism?</h3>
          <p className="mb-4">
            Confucianism is a philosophical and ethical system developed from the teachings of the 
            Chinese philosopher Confucius (551-479 BCE). It emphasizes personal and governmental 
            morality, correctness of social relationships, and justice and sincerity.
          </p>
          <Link href="https://plato.stanford.edu/entries/confucius" 
                className="text-blue-600 hover:underline" 
                target="_blank" 
                rel="noopener noreferrer">
            Source: Stanford Encyclopedia of Philosophy
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are the Five Constants?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Ren (仁) - Benevolence, humaneness</li>
            <li>Yi (義) - Righteousness, justice</li>
            <li>Li (禮) - Proper conduct, ritual propriety</li>
            <li>Zhi (智) - Knowledge, wisdom</li>
            <li>Xin (信) - Integrity, trustworthiness</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are the Five Relationships?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Ruler to Subject</li>
            <li>Father to Son</li>
            <li>Husband to Wife</li>
            <li>Elder to Younger</li>
            <li>Friend to Friend</li>
          </ul>
          <p className="text-sm text-muted-foreground">
            Each relationship involves mutual obligations and responsibilities.
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are the key Confucian texts?</h3>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Four Books:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>The Analects (Lunyu)</li>
              <li>The Great Learning (Daxue)</li>
              <li>The Doctrine of the Mean (Zhongyong)</li>
              <li>Mencius (Mengzi)</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Five Classics:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Classic of Poetry (Shijing)</li>
              <li>Book of Documents (Shujing)</li>
              <li>Book of Rites (Liji)</li>
              <li>Book of Changes (Yijing)</li>
              <li>Spring and Autumn Annals (Chunqiu)</li>
            </ul>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are key Confucian concepts?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Junzi (君子) - The ideal moral person</li>
            <li>Dao (道) - The Way</li>
            <li>De (德) - Virtue, moral power</li>
            <li>Xiao (孝) - Filial piety</li>
            <li>Zhong (忠) - Loyalty</li>
            <li>He (和) - Harmony</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">How has Confucianism evolved?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Classical Confucianism (500-200 BCE)</li>
            <li>Han Confucianism (200 BCE-200 CE)</li>
            <li>Neo-Confucianism (960-1279 CE)</li>
            <li>Modern New Confucianism</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What is Confucian education?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Moral cultivation</li>
            <li>Classical learning</li>
            <li>Self-improvement</li>
            <li>Character development</li>
            <li>Social responsibility</li>
          </ul>
        </Card>
      </div>
    </section>
  )
} 