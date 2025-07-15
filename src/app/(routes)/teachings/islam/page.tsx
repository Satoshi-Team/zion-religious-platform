import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Islamic Teachings | Religious Knowledge",
  description: "Explore fundamental Islamic teachings, from the Five Pillars and Articles of Faith to Islamic law and spirituality.",
  openGraph: {
    title: "Islamic Teachings | Religious Knowledge",
    description: "Comprehensive guide to Islamic beliefs and practices",
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
    arabicName?: string
  }>
}

const categories: TeachingCategory[] = [
  {
    title: "Core Beliefs",
    description: "Fundamental principles and beliefs of Islam",
    topics: [
      {
        name: "Divine Unity",
        path: "/teachings/islam/tawhid",
        arabicName: "التوحيد",
        description: "The absolute oneness of Allah"
      },
      {
        name: "Prophecy",
        path: "/teachings/islam/prophecy",
        arabicName: "النبوة",
        description: "The role and significance of prophets in Islam"
      },
      {
        name: "Articles of Faith",
        path: "/teachings/islam/articles-of-faith",
        arabicName: "أركان الإيمان",
        description: "The six fundamental beliefs in Islam"
      },
      {
        name: "Divine Decree",
        path: "/teachings/islam/divine-decree",
        arabicName: "القضاء والقدر",
        description: "The concept of divine will and predestination"
      }
    ]
  },
  {
    title: "Islamic Practice",
    description: "Core religious practices and obligations",
    topics: [
      {
        name: "Five Pillars",
        path: "/teachings/islam/pillars",
        arabicName: "أركان الإسلام",
        description: "The fundamental practices of Islam"
      },
      {
        name: "Prayer",
        path: "/teachings/islam/prayer",
        arabicName: "الصلاة",
        description: "The ritual prayer in Islam"
      },
      {
        name: "Fasting",
        path: "/teachings/islam/fasting",
        arabicName: "الصوم",
        description: "The practice of fasting in Ramadan"
      },
      {
        name: "Pilgrimage",
        path: "/teachings/islam/hajj",
        arabicName: "الحج",
        description: "The pilgrimage to Mecca"
      }
    ]
  },
  {
    title: "Islamic Law and Ethics",
    description: "Legal and ethical principles in Islam",
    topics: [
      {
        name: "Islamic Law",
        path: "/teachings/islam/sharia",
        arabicName: "الشريعة",
        description: "The divine law and its principles"
      },
      {
        name: "Ethics",
        path: "/teachings/islam/ethics",
        arabicName: "الأخلاق",
        description: "Moral principles and character in Islam"
      },
      {
        name: "Family Life",
        path: "/teachings/islam/family",
        arabicName: "الأسرة",
        description: "Islamic teachings on family relations"
      },
      {
        name: "Social Justice",
        path: "/teachings/islam/social-justice",
        arabicName: "العدل الاجتماعي",
        description: "Principles of justice and equality"
      }
    ]
  }
]

export default function IslamPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold mb-6">Islamic Teachings</h1>
        <p className="text-xl mb-4">
          Discover the comprehensive teachings of Islam, from its fundamental beliefs and practices to its ethical principles and spiritual dimensions. This guide explores the various aspects of Islamic faith, law, and spirituality that have guided believers for over 1,400 years.
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
                      <CardTitle className="text-xl">
                        {topic.name}
                        {topic.arabicName && (
                          <span className="block text-sm text-slate-600 font-normal">
                            {topic.arabicName}
                          </span>
                        )}
                      </CardTitle>
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
        <h2 className="text-3xl font-bold mb-6">Islamic Schools of Thought</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Link href="/teachings/islam/sunni" className="block">
            <Card className="hover:bg-slate-50 transition-colors h-full">
              <CardHeader>
                <CardTitle>Sunni Islam</CardTitle>
              </CardHeader>
              <CardContent>
                <p>The largest denomination in Islam, following the Sunnah and the four schools of jurisprudence.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/islam/shia" className="block">
            <Card className="hover:bg-slate-50 transition-colors h-full">
              <CardHeader>
                <CardTitle>Shia Islam</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Following the leadership of the Prophet's family through Ali and his descendants.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/islam/sufism" className="block">
            <Card className="hover:bg-slate-50 transition-colors h-full">
              <CardHeader>
                <CardTitle>Sufism</CardTitle>
              </CardHeader>
              <CardContent>
                <p>The mystical dimension of Islam focusing on spiritual purification and direct knowledge of God.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/islam/contemporary" className="block">
            <Card className="hover:bg-slate-50 transition-colors h-full">
              <CardHeader>
                <CardTitle>Contemporary Islam</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Modern interpretations and applications of Islamic teachings in today's world.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Explore Other Religious Teachings</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/teachings/christianity" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Christian Teachings</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore the fundamental beliefs and practices of Christianity.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/buddhism" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Buddhist Teachings</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about the core principles and practices of Buddhism.</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/teachings/hinduism" className="block">
            <Card className="hover:bg-slate-50 transition-colors">
              <CardHeader>
                <CardTitle>Hindu Teachings</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover the diverse traditions and philosophy of Hinduism.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
} 