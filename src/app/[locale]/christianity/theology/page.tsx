import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Christian Theology | Core Doctrines and Beliefs',
  description: 'Explore the fundamental theological concepts of Christianity including Christology, Soteriology, Ecclesiology, Pneumatology, and Eschatology.',
  keywords: 'Christian theology, Christology, Soteriology, Ecclesiology, Pneumatology, Eschatology, Christian doctrines, systematic theology',
  openGraph: {
    title: 'Christian Theology | Core Doctrines and Beliefs',
    description: 'Comprehensive exploration of Christian theological concepts and systematic theology.',
    images: [{ url: '/images/christian-theology.jpg', width: 1200, height: 630 }]
  }
}

interface PageProps {
  params: {
    locale: string
  }
}

export default function ChristianTheologyPage({ params }: PageProps) {
  const theologicalTopics = [
    {
      title: 'Christology',
      description: 'The study of Jesus Christ, his nature, person, and work',
      href: `/${params.locale}/christianity/christology`,
      icon: '✝️'
    },
    {
      title: 'Soteriology',
      description: 'The doctrine of salvation and how it is achieved',
      href: `/${params.locale}/christianity/theology/soteriology`,
      icon: '🕊️'
    },
    {
      title: 'Ecclesiology',
      description: 'The study of the Church, its nature, structure, and mission',
      href: `/${params.locale}/christianity/theology/ecclesiology`,
      icon: '⛪'
    },
    {
      title: 'Pneumatology',
      description: 'The study of the Holy Spirit and his work',
      href: `/${params.locale}/christianity/theology/pneumatology`,
      icon: '🔥'
    },
    {
      title: 'Eschatology',
      description: 'The study of end times, resurrection, and final judgment',
      href: `/${params.locale}/christianity/theology/eschatology`,
      icon: '🌅'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Christian Theology</h1>
        <p className="text-xl text-muted-foreground">
        <p className="text-sm text-muted-foreground">Locale: {params.locale}</p>
          Explore the systematic study of Christian beliefs, doctrines, and theological concepts
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Core Theological Disciplines</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {theologicalTopics.map((topic) => (
              <Link key={topic.title} href={topic.href}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-4">{topic.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                    <p className="text-muted-foreground">{topic.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Systematic Theology Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <section className="space-y-4">
            <h3 className="text-xl font-semibold">What is Systematic Theology?</h3>
            <p className="text-muted-foreground">
              Systematic theology is the organized study of Christian doctrine, seeking to understand 
              and articulate the coherent system of beliefs found in Scripture. It examines how various 
              theological concepts relate to one another and form a unified understanding of God, 
              humanity, and the world.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Key Principles</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Scripture as the primary authority for theological reflection</li>
              <li>Historical continuity with the apostolic tradition</li>
              <li>Logical coherence and systematic organization</li>
              <li>Practical application to Christian life and ministry</li>
              <li>Ecumenical dialogue and interdenominational understanding</li>
            </ul>
          </section>
        </CardContent>
      </Card>
    </div>
  )
} 