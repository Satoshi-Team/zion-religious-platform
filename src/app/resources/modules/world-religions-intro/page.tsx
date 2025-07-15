import { Heading } from "@/components/ui/heading"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface LessonUnit {
  title: string
  description: string
  duration: string
  topics: string[]
  activities: string[]
  resources: {
    readings: string[]
    videos: string[]
    exercises: string[]
  }
}

const lessonUnits: LessonUnit[] = [
  {
    title: "Understanding Religion",
    description: "Introduction to the concept of religion and its role in human society",
    duration: "1 week",
    topics: [
      "What is religion?",
      "Elements of religion",
      "Functions of religion in society",
      "Religious diversity"
    ],
    activities: [
      "Interactive discussions",
      "Personal reflection exercises",
      "Cultural observation tasks",
      "Comparative analysis"
    ],
    resources: {
      readings: [
        "Introduction to Religious Studies",
        "Understanding World Religions",
        "Religion in Contemporary Society"
      ],
      videos: [
        "The Nature of Religion",
        "Religion in Human History",
        "Religious Diversity Today"
      ],
      exercises: [
        "Religious Elements Analysis",
        "Personal Beliefs Reflection",
        "Cultural Impact Assessment"
      ]
    }
  },
  {
    title: "Abrahamic Religions",
    description: "Overview of Judaism, Christianity, and Islam",
    duration: "1 week",
    topics: [
      "Origins and development",
      "Core beliefs and practices",
      "Sacred texts and traditions",
      "Contemporary expressions"
    ],
    activities: [
      "Comparative study",
      "Scripture analysis",
      "Virtual visits to places of worship",
      "Interfaith dialogue exercises"
    ],
    resources: {
      readings: [
        "The Abrahamic Traditions",
        "Sacred Texts in Context",
        "Modern Religious Practice"
      ],
      videos: [
        "History of Abrahamic Faiths",
        "Sacred Places Tour",
        "Contemporary Worship"
      ],
      exercises: [
        "Scripture Comparison",
        "Practice Analysis",
        "Tradition Mapping"
      ]
    }
  },
  {
    title: "Eastern Traditions",
    description: "Introduction to Hinduism, Buddhism, and other Eastern religions",
    duration: "1 week",
    topics: [
      "Hindu philosophy and practice",
      "Buddhist teachings",
      "Eastern religious concepts",
      "Meditation and mindfulness"
    ],
    activities: [
      "Meditation practice",
      "Philosophy discussion",
      "Symbol interpretation",
      "Ritual observation"
    ],
    resources: {
      readings: [
        "Eastern Religious Thought",
        "Buddhist Philosophy",
        "Hindu Traditions"
      ],
      videos: [
        "Eastern Wisdom Traditions",
        "Meditation Techniques",
        "Sacred Symbols"
      ],
      exercises: [
        "Meditation Journal",
        "Concept Mapping",
        "Practice Documentation"
      ]
    }
  },
  {
    title: "Indigenous and Modern Movements",
    description: "Exploration of indigenous traditions and contemporary religious movements",
    duration: "1 week",
    topics: [
      "Indigenous spirituality",
      "New religious movements",
      "Syncretic traditions",
      "Contemporary spirituality"
    ],
    activities: [
      "Case studies",
      "Field observations",
      "Community interviews",
      "Research projects"
    ],
    resources: {
      readings: [
        "Indigenous Spiritual Practices",
        "Modern Religious Movements",
        "Contemporary Spirituality"
      ],
      videos: [
        "Indigenous Ceremonies",
        "New Religious Expressions",
        "Spiritual Innovation"
      ],
      exercises: [
        "Tradition Documentation",
        "Movement Analysis",
        "Community Study"
      ]
    }
  }
]

export default function WorldReligionsIntroPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Heading 
        title="Introduction to World Religions" 
        description="A comprehensive overview of major world religions, their beliefs, practices, and historical development"
        className="mb-8"
      />
      
      <div className="mb-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Course Overview</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium">Duration:</h3>
              <p className="text-muted-foreground">4 weeks</p>
            </div>
            <div>
              <h3 className="text-sm font-medium">Learning Objectives:</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                <li>Understand the basic concepts and elements of religion</li>
                <li>Compare and contrast major world religions</li>
                <li>Analyze religious practices and their cultural contexts</li>
                <li>Explore contemporary religious expressions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Prerequisites:</h3>
              <p className="text-muted-foreground">None - This is an introductory course</p>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        {lessonUnits.map((unit) => (
          <Card key={unit.title} className="p-6">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-2">{unit.title}</h2>
              <p className="text-muted-foreground">{unit.description}</p>
              <p className="text-sm text-muted-foreground mt-2">Duration: {unit.duration}</p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Topics:</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {unit.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Activities:</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {unit.activities.map((activity) => (
                    <li key={activity}>{activity}</li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Learning Resources:</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-xs font-medium mb-1">Readings</h4>
                    <ul className="list-disc list-inside text-xs text-muted-foreground">
                      {unit.resources.readings.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-medium mb-1">Videos</h4>
                    <ul className="list-disc list-inside text-xs text-muted-foreground">
                      {unit.resources.videos.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-medium mb-1">Exercises</h4>
                    <ul className="list-disc list-inside text-xs text-muted-foreground">
                      {unit.resources.exercises.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Button asChild>
              <Link href={`/resources/modules/world-religions-intro/units/${unit.title.toLowerCase().replace(/\s+/g, '-')}`}>
                Start Unit
              </Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
} 