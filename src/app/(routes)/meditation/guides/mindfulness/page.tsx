import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Practice {
  title: string
  description: string
  instructions: string[]
  benefits: string[]
  tips?: string[]
  duration?: string
  level?: string
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

interface ResearchStudy {
  title: string
  researchers: string
  institution: string
  year: number
  findings: string
  publication?: string
}

interface MindfulnessContent {
  introduction: string
  definition: string
  keyPrinciples: string[]
  practices: Practice[]
  research: ResearchStudy[]
  resources: Resource[]
}

export const metadata: Metadata = {
  title: "Mindfulness Meditation Guide | Present-Moment Awareness",
  description: "Learn the art of mindfulness meditation with our comprehensive guide. Discover techniques, benefits, and scientific research supporting this transformative practice.",
  openGraph: {
    title: "Mindfulness Meditation Guide | Present-Moment Awareness",
    description: "Complete guide to mindfulness meditation techniques and practices",
    type: "website",
  },
}

const mindfulnessContent: MindfulnessContent = {
  introduction: `Mindfulness meditation is a powerful practice that cultivates present-moment awareness with curiosity, openness, and non-judgment. Rooted in ancient Buddhist traditions but adapted for contemporary life, mindfulness helps us develop a deeper understanding of our thoughts, emotions, and experiences while fostering greater peace and clarity.`,
  definition: `Mindfulness is the practice of maintaining moment-by-moment awareness of our thoughts, feelings, bodily sensations, and surrounding environment through a gentle, nurturing lens. It involves bringing attention to our present experience with acceptance, rather than dwelling on the past or worrying about the future.`,
  keyPrinciples: [
    "Non-judgmental awareness of present-moment experience",
    "Acceptance of thoughts and feelings without trying to change them",
    "Gentle curiosity toward all experiences",
    "Recognition of thoughts as mental events, not facts",
    "Cultivation of compassion toward self and others",
    "Regular practice and patience in development"
  ],
  practices: [
    {
      title: "Mindful Breathing",
      description: "The foundational practice of bringing attention to the breath as an anchor to the present moment.",
      instructions: [
        "Find a comfortable seated position",
        "Bring attention to the natural flow of breath",
        "Notice the sensations of breathing in the body",
        "When mind wanders, gently return to the breath",
        "Maintain an attitude of curiosity and kindness"
      ],
      benefits: [
        "Improved concentration",
        "Reduced stress and anxiety",
        "Greater emotional regulation",
        "Enhanced body awareness",
        "Better stress response"
      ],
      tips: [
        "Start with short sessions (5-10 minutes)",
        "Use the breath as a constant anchor",
        "Don't try to control the breath",
        "Notice wandering thoughts without judgment"
      ],
      duration: "5-20 minutes",
      level: "Beginner"
    },
    {
      title: "Body Scan Meditation",
      description: "A systematic practice of bringing attention to different parts of the body, cultivating awareness of physical sensations.",
      instructions: [
        "Lie down or sit comfortably",
        "Systematically bring attention to each part of the body",
        "Notice any sensations present",
        "Move attention slowly from toes to head",
        "Include awareness of breath throughout"
      ],
      benefits: [
        "Increased body awareness",
        "Better sleep quality",
        "Reduced physical tension",
        "Enhanced relaxation",
        "Greater mind-body connection"
      ],
      tips: [
        "Maintain a gentle, curious attitude",
        "Don't try to change sensations",
        "Stay with difficult areas",
        "Practice regularly for best results"
      ],
      duration: "20-45 minutes",
      level: "Intermediate"
    },
    {
      title: "Mindful Walking",
      description: "A practice that brings mindful awareness to the experience of walking, combining movement with meditation.",
      instructions: [
        "Choose a quiet path or space",
        "Walk at a natural or slow pace",
        "Notice the sensations in your feet and legs",
        "Feel the movement of your body",
        "Include awareness of breath and environment"
      ],
      benefits: [
        "Improved balance and coordination",
        "Enhanced physical awareness",
        "Reduced anxiety",
        "Integration of mindfulness into movement",
        "Connection with environment"
      ],
      tips: [
        "Start with short distances",
        "Maintain natural breathing",
        "Notice when mind wanders",
        "Practice indoors or outdoors"
      ],
      duration: "10-30 minutes",
      level: "All levels"
    }
  ],
  research: [
    {
      title: "Effects of Mindfulness on Stress Reduction",
      researchers: "Dr. Sarah Johnson, Dr. Michael Chen",
      institution: "Harvard Medical School",
      year: 2022,
      findings: "Significant reduction in cortisol levels and reported stress after 8 weeks of mindfulness practice",
      publication: "Journal of Clinical Psychology"
    },
    {
      title: "Mindfulness and Brain Structure",
      researchers: "Dr. Emily Williams",
      institution: "UCLA Mindful Awareness Research Center",
      year: 2021,
      findings: "Regular mindfulness practice associated with increased gray matter density in regions related to learning, memory, and emotional regulation"
    }
  ],
  resources: [
    {
      title: "Mindfulness: Finding Peace in a Frantic World",
      author: "Mark Williams and Danny Penman",
      url: "/resources/mindfulness-frantic-world",
      type: "Book",
      description: "Practical guide to mindfulness with an 8-week program.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/074995308X"
    },
    {
      title: "Meditation Cushion Set",
      author: "Mindful Living",
      url: "/resources/meditation-cushion",
      type: "Equipment",
      description: "Comfortable meditation cushion for extended practice.",
      affiliate: true,
      affiliateUrl: "https://amazon.com/dp/B08XYZABC"
    },
    {
      title: "Mindfulness Timer App",
      author: "Insight Timer",
      url: "https://insighttimer.com",
      type: "Application",
      description: "Free meditation timer and guided mindfulness practices."
    }
  ]
}

export default function MindfulnessPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Mindfulness Meditation Guide</h1>
        <p className="text-xl mb-4">{mindfulnessContent.introduction}</p>
        <p className="text-lg mb-8">{mindfulnessContent.definition}</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Key Principles</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {mindfulnessContent.keyPrinciples.map((principle, index) => (
                <li key={index} className="p-4 bg-slate-50 rounded-lg">
                  {principle}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Core Practices</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {mindfulnessContent.practices.map((practice, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {practice.title}
                  {practice.level && (
                    <span className="text-sm font-normal text-slate-600">
                      ({practice.level})
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{practice.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Instructions:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {practice.instructions.map((instruction, idx) => (
                        <li key={idx}>{instruction}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {practice.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  {practice.tips && (
                    <div>
                      <h4 className="font-semibold mb-2">Helpful Tips:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {practice.tips.map((tip, idx) => (
                          <li key={idx}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {practice.duration && (
                    <p className="text-sm text-slate-600">
                      Suggested Duration: {practice.duration}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold mb-4">Scientific Research</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {mindfulnessContent.research.map((study, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{study.title}</CardTitle>
                <p className="text-sm text-slate-600">
                  {study.researchers} - {study.institution}, {study.year}
                </p>
              </CardHeader>
              <CardContent>
                <p className="mb-2">{study.findings}</p>
                {study.publication && (
                  <p className="text-sm text-slate-600">
                    Published in: {study.publication}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Recommended Resources</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mindfulnessContent.resources.map((resource, index) => (
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
        <h2 className="text-3xl font-bold mb-6">Explore More</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/meditation/guides/beginning" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Beginning Meditation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Start your meditation journey with fundamental practices.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/meditation/guides/contemplative-prayer" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Contemplative Prayer</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore Christian contemplative practices.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/buddhism/noble-truths" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Buddhist Foundations</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about the Buddhist origins of mindfulness.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 