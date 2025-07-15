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
    title: "Understanding Religious Practices",
    description: "Introduction to the nature and significance of religious practices across traditions",
    duration: "1 week",
    topics: [
      "What are religious practices?",
      "Types of religious practices",
      "Individual vs communal practices",
      "Role of practices in religious life"
    ],
    activities: [
      "Practice observation",
      "Comparative analysis",
      "Reflection exercises",
      "Group discussions"
    ],
    resources: {
      readings: [
        "Introduction to Religious Practices",
        "Ritual and Religion",
        "Sacred Actions"
      ],
      videos: [
        "Religious Practices Overview",
        "Global Religious Rituals",
        "Sacred Ceremonies"
      ],
      exercises: [
        "Practice Documentation",
        "Comparative Analysis",
        "Personal Reflection"
      ]
    }
  },
  {
    title: "Prayer and Meditation",
    description: "Exploring various forms of prayer and meditation across religions",
    duration: "1 week",
    topics: [
      "Forms of prayer",
      "Meditation techniques",
      "Contemplative practices",
      "Sacred spaces"
    ],
    activities: [
      "Guided meditation",
      "Prayer observation",
      "Sacred space visits",
      "Practice journaling"
    ],
    resources: {
      readings: [
        "Prayer in World Religions",
        "Meditation Traditions",
        "Sacred Space Design"
      ],
      videos: [
        "Prayer Practices",
        "Meditation Techniques",
        "Sacred Spaces Tour"
      ],
      exercises: [
        "Meditation Journal",
        "Prayer Analysis",
        "Space Creation"
      ]
    }
  },
  {
    title: "Rituals and Ceremonies",
    description: "Understanding religious rituals, ceremonies, and their significance",
    duration: "1 week",
    topics: [
      "Types of rituals",
      "Life cycle ceremonies",
      "Festival celebrations",
      "Sacred time"
    ],
    activities: [
      "Ritual observation",
      "Ceremony analysis",
      "Festival participation",
      "Timeline creation"
    ],
    resources: {
      readings: [
        "Religious Rituals",
        "Sacred Ceremonies",
        "Festival Traditions"
      ],
      videos: [
        "World Religious Rituals",
        "Life Cycle Ceremonies",
        "Festival Celebrations"
      ],
      exercises: [
        "Ritual Analysis",
        "Ceremony Documentation",
        "Festival Calendar"
      ]
    }
  },
  {
    title: "Sacred Objects and Symbols",
    description: "Exploring the use and meaning of sacred objects and symbols in religious practice",
    duration: "1 week",
    topics: [
      "Sacred objects",
      "Religious symbols",
      "Ritual implements",
      "Sacred art"
    ],
    activities: [
      "Symbol analysis",
      "Object study",
      "Art observation",
      "Creative projects"
    ],
    resources: {
      readings: [
        "Sacred Objects",
        "Religious Symbols",
        "Sacred Art History"
      ],
      videos: [
        "Sacred Objects Tour",
        "Symbol Meanings",
        "Religious Art"
      ],
      exercises: [
        "Symbol Mapping",
        "Object Documentation",
        "Art Analysis"
      ]
    }
  }
]

export default function ReligiousPracticesIntroPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Heading 
        title="Introduction to Religious Practices" 
        description="Explore the diverse world of religious practices, rituals, and ceremonies across different traditions"
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
                <li>Understand the nature and significance of religious practices</li>
                <li>Experience different forms of prayer and meditation</li>
                <li>Analyze religious rituals and ceremonies</li>
                <li>Interpret sacred objects and symbols</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Prerequisites:</h3>
              <p className="text-muted-foreground">Basic understanding of world religions</p>
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
              <Link href={`/resources/modules/practices-intro/units/${unit.title.toLowerCase().replace(/\s+/g, '-')}`}>
                Start Unit
              </Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
} 