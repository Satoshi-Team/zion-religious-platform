"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const blogPosts = [
  // Christianity
  {
    title: "Christian Creeds and Confessions",
    href: "/blog/christian-creeds-and-confessions",
    description: "Understanding the historical development and significance of Christian creeds and confessions"
  },
  {
    title: "Who Is the Holy Spirit?",
    href: "/blog/who-is-the-holy-spirit",
    description: "Exploring the nature and role of the Holy Spirit in Christian theology"
  },
  {
    title: "The Holy Trinity",
    href: "/blog/the-holy-trinity",
    description: "Understanding the Christian doctrine of the Trinity"
  },
  // Hinduism
  {
    title: "Introduction to Hinduism",
    href: "/blog/introduction-to-hinduism",
    description: "Exploring the foundations of Hinduism: its ancient origins and core beliefs"
  },
  {
    title: "The Vedas and Upanishads",
    href: "/blog/the-vedas-and-upanishads",
    description: "Exploring the profound wisdom of the Vedas and Upanishads"
  },
  {
    title: "The Bhagavad Gita and Its Teachings",
    href: "/blog/the-bhagavad-gita-and-its-teachings",
    description: "Understanding the timeless wisdom of the Bhagavad Gita"
  },
  {
    title: "Major Hindu Deities",
    href: "/blog/major-deities",
    description: "Exploring the rich pantheon of Hindu deities"
  },
  {
    title: "Avatars of Vishnu",
    href: "/blog/avatars-of-vishnu",
    description: "Understanding the divine incarnations of Lord Vishnu"
  },
  {
    title: "Hindu Cosmology",
    href: "/blog/hindu-cosmology",
    description: "Exploring the profound concepts of Hindu cosmology"
  },
  {
    title: "Yoga: Paths and Practices",
    href: "/blog/yoga-paths-and-practices",
    description: "Understanding the diverse paths of Yoga in Hinduism"
  },
  {
    title: "Hindu Rituals and Worship",
    href: "/blog/hindu-rituals-and-worship",
    description: "Exploring the sacred practices and devotional traditions"
  },
  {
    title: "Hindu Festivals",
    href: "/blog/hindu-festivals",
    description: "Discovering the vibrant celebrations of Hindu festivals"
  },
  {
    title: "Hindu Temples",
    href: "/blog/hindu-temples",
    description: "Understanding the sacred architecture and worship"
  },
  {
    title: "Hindu Art and Architecture",
    href: "/blog/hindu-art-and-architecture",
    description: "Exploring the artistic and architectural traditions"
  },
  {
    title: "Hindu Music and Dance",
    href: "/blog/hindu-music-and-dance",
    description: "Discovering the sacred arts and devotional expressions"
  },
  {
    title: "Hindu Science and Mathematics",
    href: "/blog/hindu-science-and-mathematics",
    description: "Exploring the contributions to science and mathematics"
  },
  {
    title: "Hinduism and Ecology",
    href: "/blog/hinduism-and-ecology",
    description: "Understanding environmental ethics and practices"
  },
  {
    title: "Hinduism in the Modern World",
    href: "/blog/hinduism-in-the-modern-world",
    description: "Exploring contemporary challenges and adaptations"
  },
  // Buddhism
  {
    title: "Life of Siddhartha Gautama",
    href: "/blog/life-of-siddhartha-gautama",
    description: "Exploring the Buddha's journey to enlightenment"
  },
  {
    title: "The Four Noble Truths",
    href: "/blog/the-four-noble-truths",
    description: "Understanding the core teachings of Buddhism"
  },
  {
    title: "The Noble Eightfold Path",
    href: "/blog/the-noble-eightfold-path",
    description: "Exploring the practical guide to Buddhist practice"
  },
  {
    title: "Buddhist Meditation Techniques",
    href: "/blog/buddhist-meditation-techniques",
    description: "Understanding the path to mindfulness and insight"
  },
  {
    title: "Buddhism and Mindfulness",
    href: "/blog/buddhism-and-mindfulness",
    description: "Exploring ancient wisdom in modern life"
  },
  {
    title: "Buddhist Cosmology",
    href: "/blog/buddhist-cosmology",
    description: "Understanding the universe and realms of existence"
  },
  {
    title: "Buddhist Art and Architecture",
    href: "/blog/buddhist-art-and-architecture",
    description: "Exploring visual expressions of enlightenment"
  },
  {
    title: "Buddhist Scriptures and Texts",
    href: "/blog/buddhist-scriptures-and-texts",
    description: "Understanding sacred writings and their significance"
  },
  {
    title: "Buddhist Festivals and Celebrations",
    href: "/blog/buddhist-festivals-and-celebrations",
    description: "Exploring sacred time and community"
  },
  {
    title: "Buddhism in the Modern World",
    href: "/blog/buddhism-in-the-modern-world",
    description: "Understanding adaptation and innovation"
  },
  // Islam
  {
    title: "Introduction to Islam",
    href: "/blog/introduction-to-islam",
    description: "Exploring the origins and historical development"
  },
  {
    title: "The Five Pillars of Islam",
    href: "/blog/the-five-pillars-of-islam",
    description: "Understanding the fundamental practices"
  },
  {
    title: "The Six Articles of Faith",
    href: "/blog/the-six-articles-of-faith",
    description: "Exploring the core beliefs of Islam"
  },
  {
    title: "The Life and Teachings of Prophet Muhammad",
    href: "/blog/the-life-and-teachings-of-prophet-muhammad",
    description: "Understanding the final prophet of Islam"
  },
  {
    title: "The Quran: Structure and Interpretation",
    href: "/blog/the-quran-structure-themes-and-interpretation",
    description: "Exploring the divine revelation of Islam"
  },
  {
    title: "Islamic Law (Sharia)",
    href: "/blog/islamic-law-sharia-sources-and-applications",
    description: "Understanding sources and applications"
  },
  {
    title: "Islamic Art and Architecture",
    href: "/blog/islamic-art-and-architecture",
    description: "Exploring the visual journey through faith"
  },
  {
    title: "Islamic Calendar and Festivals",
    href: "/blog/islamic-calendar-and-festivals",
    description: "Understanding sacred time and celebrations"
  },
  {
    title: "Islamic Environmental Ethics",
    href: "/blog/islamic-environmental-ethics",
    description: "Exploring stewardship and sustainability"
  },
  {
    title: "Islam in the Modern World",
    href: "/blog/islam-in-the-modern-world",
    description: "Understanding challenges and opportunities"
  }
]

export function BlogSidebar() {
  // TODO: Sync filter state with main content if desired
  return (
    <Card className="sticky top-8">
      <CardHeader>
        <CardTitle>Filter Posts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {/* TODO: Dynamically render categories */}
                <SelectItem value="Christianity">Christianity</SelectItem>
                <SelectItem value="Islam">Islam</SelectItem>
                <SelectItem value="Hinduism">Hinduism</SelectItem>
                <SelectItem value="Buddhism">Buddhism</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="All Levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                {/* TODO: Dynamically render levels */}
                <SelectItem value="Foundations of Faith">Foundations of Faith</SelectItem>
                <SelectItem value="Foundations">Foundations</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 