import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export async function generateMetadata() {
  return {
    title: 'Buddhist Sacred Texts | Sutras, Scriptures & Commentaries',
    description: 'Explore Buddhist sacred texts including the Tripitaka, Sutras, and major schools of Buddhist thought. Complete guide with translations and study resources.',
    openGraph: {
      title: 'Buddhist Sacred Texts | Complete Resource Guide',
      description: 'Explore Buddhist scriptures, sutras, and commentaries with study resources',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Buddhist Sacred Texts | Complete Resource Guide',
      description: 'Explore Buddhist scriptures, sutras, and commentaries with study resources',
    }
  }
}

const buddhistTexts = [
  {
    id: 'tripitaka',
    name: 'Tripitaka (Pali Canon)',
    description: 'The earliest complete collection of Buddhist texts, preserved in the Pali language.',
    sections: [
      {
        name: 'Vinaya Pitaka',
        description: 'Rules and regulations for monastic life',
        keyTexts: ['Suttavibhanga', 'Khandhaka', 'Parivara']
      },
      {
        name: 'Sutta Pitaka',
        description: 'Discourses and teachings of the Buddha',
        keyTexts: ['Digha Nikaya', 'Majjhima Nikaya', 'Samyutta Nikaya']
      },
      {
        name: 'Abhidhamma Pitaka',
        description: 'Philosophical and psychological analysis',
        keyTexts: ['Dhammasangani', 'Vibhanga', 'Dhatukatha']
      }
    ],
    translations: [
      {
        name: 'Wisdom Publications Edition',
        language: 'English',
        translator: 'Bhikkhu Bodhi',
        year: '1995-2012'
      }
    ],
    resources: [
      {
        title: 'Access to Insight',
        url: 'https://www.accesstoinsight.org',
        type: 'Online Library'
      }
    ]
  },
  {
    id: 'mahayana-sutras',
    name: 'Mahayana Sutras',
    description: 'Major texts of Mahayana Buddhism, including influential sutras and commentaries.',
    keyTexts: [
      {
        name: 'Heart Sutra',
        description: 'Core teaching on emptiness and wisdom',
        translations: ['Red Pine', 'Edward Conze']
      },
      {
        name: 'Diamond Sutra',
        description: 'Teachings on non-attachment and emptiness',
        translations: ['Thich Nhat Hanh', 'Red Pine']
      }
    ],
    resources: [
      {
        title: 'Buddhist Digital Resource Center',
        url: 'https://www.tbrc.org',
        type: 'Digital Library'
      }
    ]
  }
]

export default function BuddhistTextsPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Buddhist Sacred Texts</h1>
        <p className="text-xl text-muted-foreground">
          Explore the vast collection of Buddhist scriptures, sutras, and commentaries
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Major Buddhist Texts</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {buddhistTexts.map((text) => (
            <Card key={text.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{text.name}</CardTitle>
                <p className="text-muted-foreground">{text.description}</p>
              </CardHeader>
              <CardContent className="flex-1 space-y-6">
                {/* Similar structure to previous pages */}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
} 