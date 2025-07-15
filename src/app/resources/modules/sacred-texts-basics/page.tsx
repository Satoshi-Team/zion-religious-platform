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
    title: "Introduction to Sacred Texts",
    description: "Understanding the nature and role of sacred texts in religious traditions",
    duration: "1 week",
    topics: [
      "What makes a text sacred?",
      "Types of sacred literature",
      "Oral and written traditions",
      "Role of sacred texts in religious life"
    ],
    activities: [
      "Text classification exercises",
      "Comparative analysis",
      "Historical timeline creation",
      "Group discussions"
    ],
    resources: {
      readings: [
        "Introduction to Sacred Literature",
        "History of Religious Texts",
        "Sacred Text Categories"
      ],
      videos: [
        "Understanding Sacred Texts",
        "Text Transmission History",
        "Sacred Writing Systems"
      ],
      exercises: [
        "Text Type Analysis",
        "Timeline Construction",
        "Tradition Mapping"
      ]
    }
  },
  {
    title: "Hermeneutics and Interpretation",
    description: "Learning basic principles of religious text interpretation",
    duration: "1 week",
    topics: [
      "Basic hermeneutical principles",
      "Historical-critical method",
      "Literary analysis",
      "Contemporary approaches"
    ],
    activities: [
      "Text interpretation exercises",
      "Context analysis",
      "Meaning exploration",
      "Interpretive methods practice"
    ],
    resources: {
      readings: [
        "Principles of Hermeneutics",
        "Interpretive Methods",
        "Modern Approaches"
      ],
      videos: [
        "Text Interpretation Basics",
        "Hermeneutical Methods",
        "Contemporary Analysis"
      ],
      exercises: [
        "Passage Analysis",
        "Context Study",
        "Method Application"
      ]
    }
  },
  {
    title: "Historical and Cultural Context",
    description: "Exploring the historical and cultural settings of sacred texts",
    duration: "1 week",
    topics: [
      "Historical backgrounds",
      "Cultural influences",
      "Language and translation",
      "Textual development"
    ],
    activities: [
      "Historical research",
      "Cultural analysis",
      "Language study",
      "Context mapping"
    ],
    resources: {
      readings: [
        "Historical Contexts",
        "Cultural Backgrounds",
        "Translation History"
      ],
      videos: [
        "Historical Settings",
        "Cultural Influences",
        "Language Development"
      ],
      exercises: [
        "Context Analysis",
        "Cultural Mapping",
        "Translation Study"
      ]
    }
  },
  {
    title: "Modern Application",
    description: "Understanding how sacred texts are used and applied today",
    duration: "1 week",
    topics: [
      "Contemporary relevance",
      "Modern interpretations",
      "Practical application",
      "Interfaith dialogue"
    ],
    activities: [
      "Application exercises",
      "Modern case studies",
      "Comparative discussions",
      "Personal reflection"
    ],
    resources: {
      readings: [
        "Contemporary Applications",
        "Modern Interpretations",
        "Practical Usage"
      ],
      videos: [
        "Modern Relevance",
        "Application Methods",
        "Contemporary Practice"
      ],
      exercises: [
        "Application Practice",
        "Case Analysis",
        "Reflection Writing"
      ]
    }
  }
]

export default function SacredTextsBasicsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Heading 
        title="Understanding Sacred Texts" 
        description="Learn how to approach and understand various religious texts and their interpretations"
        className="mb-8"
      />
      
      <div className="mb-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Course Overview</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium">Duration:</h3>
              <p className="text-muted-foreground">3 weeks</p>
            </div>
            <div>
              <h3 className="text-sm font-medium">Learning Objectives:</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                <li>Understand the nature and role of sacred texts</li>
                <li>Learn basic principles of textual interpretation</li>
                <li>Explore historical and cultural contexts</li>
                <li>Apply texts to contemporary situations</li>
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
              <Link href={`/resources/modules/sacred-texts-basics/units/${unit.title.toLowerCase().replace(/\s+/g, '-')}`}>
                Start Unit
              </Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
} 