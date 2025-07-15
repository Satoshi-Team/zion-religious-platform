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
    title: "Religion in the Digital Age",
    description: "Exploring how technology and digital culture impact religious practice and community",
    duration: "1 week",
    topics: [
      "Online religious communities",
      "Digital worship practices",
      "Social media and religion",
      "Virtual sacred spaces"
    ],
    activities: [
      "Digital platform analysis",
      "Virtual community observation",
      "Online ritual participation",
      "Social media research"
    ],
    resources: {
      readings: [
        "Digital Religion",
        "Virtual Communities",
        "Religion in Cyberspace"
      ],
      videos: [
        "Digital Worship",
        "Online Religious Communities",
        "Virtual Sacred Spaces"
      ],
      exercises: [
        "Platform Analysis",
        "Digital Ethnography",
        "Virtual Space Design"
      ]
    }
  },
  {
    title: "Contemporary Religious Movements",
    description: "Understanding new religious movements and contemporary spirituality",
    duration: "1 week",
    topics: [
      "New religious movements",
      "Contemporary spirituality",
      "Religious innovation",
      "Hybrid traditions"
    ],
    activities: [
      "Movement analysis",
      "Field research",
      "Case studies",
      "Trend mapping"
    ],
    resources: {
      readings: [
        "New Religious Movements",
        "Contemporary Spirituality",
        "Religious Innovation"
      ],
      videos: [
        "Modern Movements",
        "Spiritual Trends",
        "Religious Evolution"
      ],
      exercises: [
        "Movement Documentation",
        "Trend Analysis",
        "Case Study Development"
      ]
    }
  },
  {
    title: "Secularization and Religious Change",
    description: "Examining the relationship between secularization and religious transformation",
    duration: "1 week",
    topics: [
      "Secularization theory",
      "Religious adaptation",
      "Cultural change",
      "Modern challenges"
    ],
    activities: [
      "Data analysis",
      "Trend research",
      "Comparative studies",
      "Impact assessment"
    ],
    resources: {
      readings: [
        "Secularization Trends",
        "Religious Adaptation",
        "Cultural Dynamics"
      ],
      videos: [
        "Secular Society",
        "Religious Change",
        "Modern Challenges"
      ],
      exercises: [
        "Trend Mapping",
        "Change Analysis",
        "Impact Study"
      ]
    }
  },
  {
    title: "Interfaith Dialogue and Pluralism",
    description: "Understanding interfaith relationships and religious diversity in modern society",
    duration: "1 week",
    topics: [
      "Interfaith dialogue",
      "Religious pluralism",
      "Multicultural society",
      "Common ground initiatives"
    ],
    activities: [
      "Dialogue participation",
      "Community visits",
      "Project development",
      "Case analysis"
    ],
    resources: {
      readings: [
        "Interfaith Relations",
        "Religious Pluralism",
        "Dialogue Methods"
      ],
      videos: [
        "Interfaith Initiatives",
        "Pluralistic Society",
        "Dialogue Examples"
      ],
      exercises: [
        "Dialogue Practice",
        "Project Planning",
        "Community Engagement"
      ]
    }
  }
]

export default function ModernReligionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Heading 
        title="Modern Religion and Contemporary Trends" 
        description="Explore how religion adapts and transforms in the modern world, from digital practices to interfaith dialogue"
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
                <li>Understand religion's role in the digital age</li>
                <li>Analyze contemporary religious movements</li>
                <li>Examine secularization and religious change</li>
                <li>Explore interfaith dialogue and pluralism</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Prerequisites:</h3>
              <p className="text-muted-foreground">Basic understanding of world religions and contemporary society</p>
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
              <Link href={`/resources/modules/modern-religion/units/${unit.title.toLowerCase().replace(/\s+/g, '-')}`}>
                Start Unit
              </Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
} 