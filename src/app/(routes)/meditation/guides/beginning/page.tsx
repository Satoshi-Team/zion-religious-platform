import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface MeditationStep {
  title: string
  description: string
  instructions: string[]
  tips?: string[]
  duration?: string
  commonChallenges?: string[]
}

interface Resource {
  title: string
  author?: string
  url: string
  type: string
  description: string
  affiliate?: boolean
  affiliateUrl?: string
}

interface BeginnerGuideContent {
  introduction: string
  benefits: string[]
  prerequisites: string[]
  steps: MeditationStep[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Beginning Meditation Guide | First Steps to Mindful Practice",
  description: "Start your meditation journey with our comprehensive beginner's guide. Learn essential techniques, benefits, and practical tips for establishing a daily practice.",
  openGraph: {
    title: "Beginning Meditation Guide | First Steps to Mindful Practice",
    description: "Comprehensive guide for starting your meditation practice",
    type: "website",
  },
}

const beginnerGuideContent: BeginnerGuideContent = {
  introduction: `Beginning a meditation practice is a transformative journey that starts with simple, mindful awareness. This guide will walk you through the essential steps of establishing a sustainable meditation practice, regardless of your spiritual or religious background. Whether you're seeking stress reduction, emotional balance, or spiritual growth, these foundational techniques will help you build a strong foundation for your practice.`,
  benefits: [
    "Reduced stress and anxiety",
    "Improved focus and concentration",
    "Better emotional regulation",
    "Enhanced self-awareness",
    "Better sleep quality",
    "Increased mindfulness in daily life",
    "Greater sense of inner peace"
  ],
  prerequisites: [
    "A quiet space free from distractions",
    "Comfortable seating (chair, cushion, or meditation bench)",
    "Loose, comfortable clothing",
    "5-10 minutes of uninterrupted time",
    "Open mind and patient attitude"
  ],
  steps: [
    {
      title: "Finding Your Seat",
      description: "Establishing a stable, comfortable posture is essential for meditation practice.",
      instructions: [
        "Find a quiet space where you won't be disturbed",
        "Sit on a chair, cushion, or meditation bench",
        "Keep your spine naturally straight but not rigid",
        "Rest your hands comfortably on your lap or knees",
        "Gently close your eyes or keep them slightly open"
      ],
      tips: [
        "Use cushions or props for comfort if needed",
        "Experiment with different positions to find what works best",
        "Keep shoulders relaxed and facial muscles soft"
      ],
      duration: "Take 1-2 minutes to settle in"
    },
    {
      title: "Connecting with the Breath",
      description: "The breath serves as a natural anchor for attention and awareness.",
      instructions: [
        "Bring attention to the sensation of breathing",
        "Notice the breath at the nostrils or belly",
        "Observe the natural rhythm without changing it",
        "Count breaths from 1 to 10 if helpful",
        "Return attention gently when mind wanders"
      ],
      tips: [
        "Don't force or control the breath",
        "Be patient with wandering thoughts",
        "Use counting as a support for concentration"
      ],
      duration: "Start with 5 minutes",
      commonChallenges: [
        "Mind wandering frequently",
        "Feeling restless or sleepy",
        "Trying too hard to concentrate"
      ]
    },
    {
      title: "Developing Mindful Awareness",
      description: "Learn to observe thoughts and sensations without getting caught up in them.",
      instructions: [
        "Notice thoughts arising without following them",
        "Acknowledge emotions without judgment",
        "Feel bodily sensations as they occur",
        "Return to breath when attention wanders",
        "Practice gentle acceptance of experience"
      ],
      tips: [
        "Label thoughts as 'thinking' and return to breath",
        "Use gentle reminders to stay present",
        "Don't judge yourself for getting distracted"
      ],
      duration: "Practice for 10 minutes"
    }
  ],
  resources: [
    {
      title: "Meditation Cushion Set",
      author: "Mindful Living",
      url: "/resources/meditation-cushion",
      type: "Equipment",
      description: "High-quality zafu and zabuton set for comfortable meditation practice.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/B08XYZABC"
    },
    {
      title: "Meditation Timer App",
      author: "Insight Timer",
      url: "https://insighttimer.com",
      type: "Application",
      description: "Free meditation timer with guided sessions and tracking features."
    },
    {
      title: "The Mind Illuminated",
      author: "Culadasa (John Yates)",
      url: "/resources/mind-illuminated",
      type: "Book",
      description: "Comprehensive meditation manual with stage-based guidance.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/1501156985"
    }
  ]
}

export default function BeginnerMeditationPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Beginning Meditation Guide</h1>
        <p className="text-xl mb-8">{beginnerGuideContent.introduction}</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Benefits of Meditation</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1">
              {beginnerGuideContent.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Before You Begin</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1">
              {beginnerGuideContent.prerequisites.map((prerequisite, index) => (
                <li key={index}>{prerequisite}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Step-by-Step Guide</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {beginnerGuideContent.steps.map((step, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-700">
                    {index + 1}
                  </span>
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{step.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Instructions:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {step.instructions.map((instruction, idx) => (
                        <li key={idx}>{instruction}</li>
                      ))}
                    </ul>
                  </div>
                  {step.tips && (
                    <div>
                      <h4 className="font-semibold mb-2">Helpful Tips:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {step.tips.map((tip, idx) => (
                          <li key={idx}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {step.commonChallenges && (
                    <div>
                      <h4 className="font-semibold mb-2">Common Challenges:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {step.commonChallenges.map((challenge, idx) => (
                          <li key={idx}>{challenge}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {step.duration && (
                    <p className="text-sm text-slate-600">
                      Suggested Duration: {step.duration}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Recommended Resources</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {beginnerGuideContent.resources.map((resource, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
                {resource.author && (
                  <p className="text-sm text-slate-600">By {resource.author}</p>
                )}
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{resource.description}</p>
                <div className="space-x-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={resource.url}>Learn More</Link>
                  </Button>
                  {resource.affiliate && (
                    <Button asChild variant="default" size="sm">
                      <Link href={resource.affiliateUrl!} target="_blank" rel="noopener noreferrer">
                        View on Amazon
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Next Steps</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/meditation/guides/mindfulness" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Mindfulness Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Deepen your practice with mindfulness techniques.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/meditation/guides/contemplative-prayer" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Contemplative Prayer</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore meditation within the Christian tradition.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/studies/practices/meditation" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Advanced Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover more meditation techniques and traditions.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 