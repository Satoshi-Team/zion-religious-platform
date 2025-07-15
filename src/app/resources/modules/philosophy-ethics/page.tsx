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
    title: "Religious Philosophy Foundations",
    description: "Exploring fundamental concepts in religious philosophy and metaphysics",
    duration: "1 week",
    topics: [
      "Nature of reality",
      "Divine existence",
      "Religious epistemology",
      "Faith and reason"
    ],
    activities: [
      "Philosophical analysis",
      "Argument evaluation",
      "Concept mapping",
      "Text interpretation"
    ],
    resources: {
      readings: [
        "Philosophy of Religion",
        "Religious Metaphysics",
        "Faith and Knowledge"
      ],
      videos: [
        "Religious Philosophy",
        "Metaphysical Concepts",
        "Faith and Reason"
      ],
      exercises: [
        "Argument Analysis",
        "Concept Mapping",
        "Text Study"
      ]
    }
  },
  {
    title: "Ethical Frameworks in Religion",
    description: "Understanding religious approaches to ethics and moral philosophy",
    duration: "1 week",
    topics: [
      "Religious ethics",
      "Moral principles",
      "Virtue ethics",
      "Divine command theory"
    ],
    activities: [
      "Case studies",
      "Ethical analysis",
      "Moral reasoning",
      "Framework application"
    ],
    resources: {
      readings: [
        "Religious Ethics",
        "Moral Philosophy",
        "Virtue Traditions"
      ],
      videos: [
        "Ethical Frameworks",
        "Moral Reasoning",
        "Religious Values"
      ],
      exercises: [
        "Case Analysis",
        "Framework Application",
        "Value Assessment"
      ]
    }
  },
  {
    title: "Contemporary Ethical Issues",
    description: "Applying religious ethics to modern moral challenges",
    duration: "1 week",
    topics: [
      "Bioethics",
      "Environmental ethics",
      "Social justice",
      "Technology ethics"
    ],
    activities: [
      "Issue analysis",
      "Position development",
      "Debate participation",
      "Solution proposal"
    ],
    resources: {
      readings: [
        "Modern Ethical Issues",
        "Religious Responses",
        "Ethical Solutions"
      ],
      videos: [
        "Contemporary Challenges",
        "Religious Perspectives",
        "Ethical Solutions"
      ],
      exercises: [
        "Issue Analysis",
        "Response Development",
        "Solution Design"
      ]
    }
  },
  {
    title: "Interfaith Ethics and Dialogue",
    description: "Exploring ethical perspectives across religious traditions",
    duration: "1 week",
    topics: [
      "Common values",
      "Ethical dialogue",
      "Shared principles",
      "Universal ethics"
    ],
    activities: [
      "Comparative analysis",
      "Dialogue sessions",
      "Value exploration",
      "Framework synthesis"
    ],
    resources: {
      readings: [
        "Interfaith Ethics",
        "Shared Values",
        "Ethical Dialogue"
      ],
      videos: [
        "Interfaith Perspectives",
        "Common Ground",
        "Ethical Unity"
      ],
      exercises: [
        "Value Comparison",
        "Dialogue Practice",
        "Framework Integration"
      ]
    }
  }
]

export default function PhilosophyEthicsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Heading 
        title="Religious Philosophy and Ethics" 
        description="Explore philosophical foundations and ethical frameworks across religious traditions"
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
                <li>Understand religious philosophical foundations</li>
                <li>Analyze religious ethical frameworks</li>
                <li>Apply religious ethics to modern issues</li>
                <li>Explore interfaith ethical dialogue</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Prerequisites:</h3>
              <p className="text-muted-foreground">Basic understanding of philosophy and world religions</p>
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
              <Link href={`/resources/modules/philosophy-ethics/units/${unit.title.toLowerCase().replace(/\s+/g, '-')}`}>
                Start Unit
              </Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
} 