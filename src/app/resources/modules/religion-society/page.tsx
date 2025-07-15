import React from 'react'
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
    title: "Religion and Culture",
    description: "Exploring the relationship between religion and cultural expression",
    duration: "1 week",
    topics: [
      "Cultural influence on religion",
      "Religious impact on culture",
      "Art and symbolism",
      "Cultural adaptation"
    ],
    activities: [
      "Cultural analysis",
      "Art interpretation",
      "Symbol study",
      "Case studies"
    ],
    resources: {
      readings: [
        "Religion and Culture",
        "Cultural Expression",
        "Religious Art"
      ],
      videos: [
        "Cultural Influence",
        "Religious Expression",
        "Artistic Traditions"
      ],
      exercises: [
        "Cultural Analysis",
        "Symbol Study",
        "Art Interpretation"
      ]
    }
  },
  {
    title: "Religion and Politics",
    description: "Understanding the intersection of religion and political systems",
    duration: "1 week",
    topics: [
      "Religious influence on politics",
      "Church-state relations",
      "Religious freedom",
      "Political theology"
    ],
    activities: [
      "Policy analysis",
      "Case studies",
      "Debate participation",
      "Research projects"
    ],
    resources: {
      readings: [
        "Religion and Politics",
        "Political Systems",
        "Religious Freedom"
      ],
      videos: [
        "Political Influence",
        "Religious Rights",
        "State Relations"
      ],
      exercises: [
        "Policy Analysis",
        "Case Study",
        "Debate Preparation"
      ]
    }
  },
  {
    title: "Religion and Social Justice",
    description: "Examining religious approaches to social justice and activism",
    duration: "1 week",
    topics: [
      "Social justice movements",
      "Religious activism",
      "Ethical frameworks",
      "Community engagement"
    ],
    activities: [
      "Movement analysis",
      "Project planning",
      "Community work",
      "Impact assessment"
    ],
    resources: {
      readings: [
        "Religious Activism",
        "Social Justice",
        "Community Action"
      ],
      videos: [
        "Justice Movements",
        "Religious Action",
        "Community Impact"
      ],
      exercises: [
        "Project Design",
        "Impact Study",
        "Action Planning"
      ]
    }
  },
  {
    title: "Religion in Modern Society",
    description: "Analyzing religion's role in contemporary social life",
    duration: "1 week",
    topics: [
      "Secularization",
      "Religious diversity",
      "Modern challenges",
      "Future trends"
    ],
    activities: [
      "Trend analysis",
      "Future scenarios",
      "Research projects",
      "Discussion forums"
    ],
    resources: {
      readings: [
        "Modern Religion",
        "Social Trends",
        "Future Perspectives"
      ],
      videos: [
        "Contemporary Issues",
        "Religious Change",
        "Future Trends"
      ],
      exercises: [
        "Trend Analysis",
        "Scenario Planning",
        "Impact Assessment"
      ]
    }
  }
]

export default function ReligionSocietyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Heading 
        title="Religion and Society" 
        description="Explore the complex relationships between religion and various aspects of social life"
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
                <li>Understand religion's influence on culture</li>
                <li>Analyze religion's role in politics</li>
                <li>Examine religious approaches to social justice</li>
                <li>Explore religion in modern society</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Prerequisites:</h3>
              <p className="text-muted-foreground">Basic understanding of religion and social sciences</p>
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
              <Link href={`/resources/modules/religion-society/units/${unit.title.toLowerCase().replace(/\s+/g, '-')}`}>
                Start Unit
              </Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
} 