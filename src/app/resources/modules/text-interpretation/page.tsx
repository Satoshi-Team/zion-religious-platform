"use client"

import { Heading } from "@/components/ui/heading"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shell } from "@/components/shells/shell"

interface Method {
  name: string
  description: string
  principles: string[]
  applications: string[]
  challenges: string[]
}

interface Unit {
  title: string
  description: string
  duration: string
  topics: string[]
  activities: string[]
  resources: {
    readings: string[]
    exercises: string[]
  }
}

const interpretationMethods: Method[] = [
  {
    name: "Historical-Critical Method",
    description: "Analyzing texts within their historical and cultural context",
    principles: [
      "Historical context analysis",
      "Source criticism",
      "Form criticism",
      "Redaction criticism",
      "Social-scientific criticism"
    ],
    applications: [
      "Understanding original meaning",
      "Identifying historical layers",
      "Reconstructing textual development",
      "Cultural context analysis"
    ],
    challenges: [
      "Limited historical data",
      "Cultural distance",
      "Methodological complexity",
      "Balancing academic and religious perspectives"
    ]
  },
  {
    name: "Literary Analysis",
    description: "Examining literary features and structures of religious texts",
    principles: [
      "Genre identification",
      "Narrative analysis",
      "Rhetorical criticism",
      "Structural analysis",
      "Intertextual connections"
    ],
    applications: [
      "Understanding literary devices",
      "Analyzing narrative structures",
      "Identifying patterns",
      "Exploring textual relationships"
    ],
    challenges: [
      "Genre classification",
      "Translation issues",
      "Cultural literary conventions",
      "Multiple interpretive possibilities"
    ]
  },
  {
    name: "Contemporary Approaches",
    description: "Modern methods of textual interpretation and application",
    principles: [
      "Reader-response criticism",
      "Feminist interpretation",
      "Liberation theology",
      "Postcolonial reading",
      "Ecological interpretation"
    ],
    applications: [
      "Contemporary relevance",
      "Social justice perspectives",
      "Cultural adaptation",
      "Modern application"
    ],
    challenges: [
      "Maintaining textual integrity",
      "Balancing tradition and innovation",
      "Addressing modern issues",
      "Contextual appropriateness"
    ]
  }
]

const courseUnits: Unit[] = [
  {
    title: "Foundations of Interpretation",
    description: "Introduction to basic principles and methods of textual interpretation",
    duration: "2 weeks",
    topics: [
      "Hermeneutical principles",
      "Types of meaning",
      "Interpretive frameworks",
      "Role of context"
    ],
    activities: [
      "Text analysis exercises",
      "Method application practice",
      "Group discussions",
      "Case studies"
    ],
    resources: {
      readings: [
        "Introduction to Hermeneutics",
        "Principles of Interpretation",
        "Context in Religious Texts"
      ],
      exercises: [
        "Basic text analysis",
        "Context identification",
        "Meaning exploration"
      ]
    }
  },
  {
    title: "Advanced Methods",
    description: "Exploration of sophisticated interpretive approaches and their application",
    duration: "2 weeks",
    topics: [
      "Historical-critical method",
      "Literary analysis",
      "Contemporary approaches",
      "Comparative interpretation"
    ],
    activities: [
      "Method application",
      "Comparative analysis",
      "Research projects",
      "Presentations"
    ],
    resources: {
      readings: [
        "Advanced Hermeneutical Methods",
        "Literary Analysis Techniques",
        "Contemporary Interpretive Approaches"
      ],
      exercises: [
        "Historical analysis",
        "Literary criticism",
        "Modern application"
      ]
    }
  }
]

export default function TextInterpretationPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8">
        <Heading 
          title="Sacred Text Interpretation" 
          description="Advanced methods for interpreting and analyzing religious texts"
          className="mb-8"
        />

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="methods">Methods</TabsTrigger>
            <TabsTrigger value="units">Course Units</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Course Overview</CardTitle>
                <CardDescription>
                  Learn advanced techniques for interpreting religious texts and understanding their meaning in historical and contemporary contexts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Learning Objectives:</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                    <li>Master various interpretive methods and approaches</li>
                    <li>Understand historical and cultural contexts of texts</li>
                    <li>Apply contemporary interpretive frameworks</li>
                    <li>Develop critical analysis skills</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Prerequisites:</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                    <li>Understanding Sacred Texts (Basic Course)</li>
                    <li>Basic knowledge of religious traditions</li>
                    <li>Familiarity with basic hermeneutical concepts</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="methods">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {interpretationMethods.map((method) => (
                <Card key={method.name} className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{method.name}</h3>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Principles:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {method.principles.map((principle) => (
                          <li key={principle}>{principle}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Applications:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {method.applications.map((application) => (
                          <li key={application}>{application}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Challenges:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {method.challenges.map((challenge) => (
                          <li key={challenge}>{challenge}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="units">
            <div className="grid gap-6 md:grid-cols-2">
              {courseUnits.map((unit) => (
                <Card key={unit.title} className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{unit.title}</h3>
                  <p className="text-muted-foreground mb-4">{unit.description}</p>
                  <p className="text-sm font-medium mb-4">Duration: {unit.duration}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Topics:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {unit.topics.map((topic) => (
                          <li key={topic}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Activities:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {unit.activities.map((activity) => (
                          <li key={activity}>{activity}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Resources:</h4>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <h5 className="text-sm font-medium mb-1">Readings:</h5>
                          <ul className="list-disc list-inside text-sm text-muted-foreground">
                            {unit.resources.readings.map((reading) => (
                              <li key={reading}>{reading}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium mb-1">Exercises:</h5>
                          <ul className="list-disc list-inside text-sm text-muted-foreground">
                            {unit.resources.exercises.map((exercise) => (
                              <li key={exercise}>{exercise}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Shell>
  )
} 