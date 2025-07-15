import React from 'react'
import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Christian Teachings | Religious Knowledge",
  description: "Explore fundamental Christian teachings, doctrines, and theological concepts - from the Trinity and Salvation to Church History and Biblical interpretation.",
  openGraph: {
    title: "Christian Teachings | Religious Knowledge",
    description: "Comprehensive guide to Christian theology and practices",
    type: "website",
  },
}

interface TeachingCategory {
  title: string
  description: string
  topics: Array<{
    name: string
    path: string
    description: string
  }>
}

const categories: TeachingCategory[] = [
  {
    title: "Core Doctrines",
    description: "Fundamental beliefs and doctrines that form the foundation of Christian faith",
    topics: [
      {
        name: "Trinity",
        path: "/teachings/christianity/trinity",
        description: "The doctrine of one God existing in three persons - Father, Son, and Holy Spirit"
      },
      {
        name: "Salvation",
        path: "/teachings/christianity/salvation",
        description: "The Christian understanding of salvation through faith in Jesus Christ"
      },
      {
        name: "Incarnation",
        path: "/teachings/christianity/incarnation",
        description: "The doctrine of God becoming human in Jesus Christ"
      },
      {
        name: "Resurrection",
        path: "/teachings/christianity/resurrection",
        description: "Christ's victory over death and its significance for believers"
      }
    ]
  },
  {
    title: "Christian Life",
    description: "Practical aspects of living out the Christian faith",
    topics: [
      {
        name: "Prayer",
        path: "/teachings/christianity/prayer",
        description: "Communication with God through various forms of prayer"
      },
      {
        name: "Worship",
        path: "/teachings/christianity/worship",
        description: "Corporate and individual expressions of devotion to God"
      },
      {
        name: "Discipleship",
        path: "/teachings/christianity/discipleship",
        description: "Following Jesus and growing in Christian maturity"
      },
      {
        name: "Ethics",
        path: "/teachings/christianity/ethics",
        description: "Christian moral principles and decision-making"
      }
    ]
  },
  {
    title: "Church and Sacraments",
    description: "The nature of the Church and its sacred practices",
    topics: [
      {
        name: "Baptism",
        path: "/teachings/christianity/baptism",
        description: "The sacrament of initiation into the Christian community"
      },
      {
        name: "Eucharist",
        path: "/teachings/christianity/eucharist",
        description: "The Lord's Supper and its significance in Christian worship"
      },
      {
        name: "Church",
        path: "/teachings/christianity/church",
        description: "The nature and mission of the Christian community"
      },
      {
        name: "Ministry",
        path: "/teachings/christianity/ministry",
        description: "Various forms of service and leadership in the Church"
      }
    ]
  },
  {
    title: "Scripture and Tradition",
    description: "Sources and interpretation of Christian teaching",
    topics: [
      {
        name: "Bible",
        path: "/teachings/christianity/bible",
        description: "The nature, authority, and interpretation of Scripture"
      },
      {
        name: "Tradition",
        path: "/teachings/christianity/tradition",
        description: "The role of Christian tradition in faith and practice"
      },
      {
        name: "Creeds",
        path: "/teachings/christianity/creeds",
        description: "Historic statements of Christian belief"
      },
      {
        name: "Hermeneutics",
        path: "/teachings/christianity/hermeneutics",
        description: "Principles of biblical interpretation"
      }
    ]
  },
  {
    title: "Christian History",
    description: "Major periods and developments in Christian history",
    topics: [
      {
        name: "Early Church",
        path: "/teachings/christianity/early-church",
        description: "The first centuries of Christian development"
      },
      {
        name: "Reformation",
        path: "/teachings/christianity/reformation",
        description: "The 16th-century reform movement and its impact"
      },
      {
        name: "Modern Christianity",
        path: "/teachings/christianity/modern",
        description: "Contemporary expressions and challenges of faith"
      },
      {
        name: "Denominations",
        path: "/teachings/christianity/denominations",
        description: "Major Christian traditions and their distinctives"
      }
    ]
  }
]

export default function ChristianityPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Christian Teachings</h1>
        <p className="text-xl mb-4">
          Explore the rich theological heritage and fundamental teachings of Christianity, from core doctrines to practical aspects of Christian life. This comprehensive guide covers essential beliefs, practices, and historical developments that have shaped Christian faith and practice through the centuries.
        </p>
      </section>

      <div className="grid gap-8">
        {categories.map((category, index) => (
          <section key={index} className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">{category.title}</h2>
              <p className="text-slate-600">{category.description}</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {category.topics.map((topic, topicIndex) => (
                <Link key={topicIndex} href={topic.path} className="block">
                  <Card className="h-full hover:bg-slate-50 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">{topic.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">{topic.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Explore Other Religious Teachings</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/teachings/islam" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Islamic Teachings</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the fundamental beliefs and practices of Islam.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/buddhism" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Buddhist Teachings</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover the wisdom and practices of Buddhism.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/hinduism" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Hindu Teachings</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about the diverse traditions and philosophy of Hinduism.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 