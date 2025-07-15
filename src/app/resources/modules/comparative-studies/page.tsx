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
    title: "Comparative Methods in Religious Studies",
    description: "Understanding approaches and methodologies for comparing religious traditions",
    duration: "1 week",
    topics: [
      "Comparative methodology",
      "Cross-cultural analysis",
      "Academic approaches",
      "Ethical considerations"
    ],
    activities: [
      "Method analysis",
      "Case study development",
      "Comparative frameworks",
      "Research design"
    ],
    resources: {
      readings: [
        "Comparative Religious Studies",
        "Research Methods",
        "Cross-Cultural Analysis"
      ],
      videos: [
        "Comparative Methods",
        "Research Approaches",
        "Ethical Considerations"
      ],
      exercises: [
        "Method Application",
        "Framework Development",
        "Case Analysis"
      ]
    }
  },
  {
    title: "Sacred Texts and Scriptures",
    description: "Comparing sacred texts across religious traditions",
    duration: "1 week",
    topics: [
      "Textual comparison",
      "Interpretive traditions",
      "Common themes",
      "Literary forms"
    ],
    activities: [
      "Text analysis",
      "Theme comparison",
      "Interpretation study",
      "Literary analysis"
    ],
    resources: {
      readings: [
        "Sacred Text Comparison",
        "Interpretive Traditions",
        "Literary Analysis"
      ],
      videos: [
        "Comparative Texts",
        "Interpretation Methods",
        "Common Themes"
      ],
      exercises: [
        "Text Comparison",
        "Theme Analysis",
        "Literary Study"
      ]
    }
  },
  {
    title: "Rituals and Practices",
    description: "Analyzing and comparing religious practices across traditions",
    duration: "1 week",
    topics: [
      "Ritual comparison",
      "Practice analysis",
      "Cultural context",
      "Symbolic meaning"
    ],
    activities: [
      "Ritual observation",
      "Practice documentation",
      "Comparative analysis",
      "Symbol study"
    ],
    resources: {
      readings: [
        "Comparative Rituals",
        "Religious Practices",
        "Symbolic Analysis"
      ],
      videos: [
        "Ritual Traditions",
        "Practice Comparison",
        "Symbol Systems"
      ],
      exercises: [
        "Ritual Analysis",
        "Practice Comparison",
        "Symbol Mapping"
      ]
    }
  },
  {
    title: "Beliefs and Worldviews",
    description: "Comparing religious beliefs, philosophies, and worldviews",
    duration: "1 week",
    topics: [
      "Belief systems",
      "Philosophical concepts",
      "Ethical frameworks",
      "Worldview analysis"
    ],
    activities: [
      "Belief comparison",
      "Concept mapping",
      "Ethics analysis",
      "Worldview study"
    ],
    resources: {
      readings: [
        "Comparative Beliefs",
        "Religious Philosophy",
        "Ethical Systems"
      ],
      videos: [
        "Belief Systems",
        "Philosophical Concepts",
        "Ethical Frameworks"
      ],
      exercises: [
        "Belief Analysis",
        "Concept Mapping",
        "Ethics Comparison"
      ]
    }
  }
]

export default function ComparativeStudiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Heading 
        title="Comparative Religious Studies" 
        description="Explore and compare different religious traditions, their texts, practices, and beliefs"
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
                <li>Master comparative research methods</li>
                <li>Analyze sacred texts across traditions</li>
                <li>Compare religious practices and rituals</li>
                <li>Examine diverse beliefs and worldviews</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Prerequisites:</h3>
              <p className="text-muted-foreground">Basic knowledge of major world religions</p>
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
              <Link href={`/resources/modules/comparative-studies/units/${unit.title.toLowerCase().replace(/\s+/g, '-')}`}>
                Start Unit
              </Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
} 