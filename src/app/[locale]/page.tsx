import React from 'react'
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Link from "next/link"
import { FilterButtons } from "@/components/filter-buttons"
import { ReligionSections } from "@/components/religion-sections"
import { Suspense } from "react"
import { StationCard } from "@/components/stations/station-card"
import { VERIFIED_STATIONS } from "@/lib/constants/verified-stations"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { getTranslations } from "@/lib/i18n-fixed"
import { type Locale } from "@/config/i18n"

// Helper function to safely access translation properties
function safeT(t: (key: string) => string, path: string, fallback: string = ''): string {
  if (!t || typeof t !== 'function') return fallback
  
  try {
    const result = t(path)
    return result !== path ? result : fallback
  } catch (error) {
    console.warn(`Translation error for key "${path}":`, error)
    return fallback
  }
}

export const metadata: Metadata = {
  title: 'ZION.FM | Understanding Christianity and Beyond: Explore the Rich Tapestry of World Religions',
  description: "Discover ZION.FM, your gateway to the world's major religions. Explore in-depth guides, histories, and teachings. Dive into overviews, theology, philosophy, sacred texts, and the evolution of faiths from ancient to modern times. Made for seekers, students, and the curious alike."
}

interface HomePageProps {
  params: {
    locale: Locale
  }
}

// Christianity sub-paths and detailed pages
const christianityLinks = [
  { label: "Overview", href: "/religion/christianity/" },
  { label: "Theology", href: "/religion/christianity/theology/" },
  { label: "Christology", href: "/religion/christianity/theology/christology/" },
  { label: "Soteriology", href: "/religion/christianity/theology/soteriology/" },
  { label: "Ecclesiology", href: "/religion/christianity/theology/ecclesiology/" },
  { label: "Pneumatology", href: "/religion/christianity/theology/pneumatology/" },
  { label: "Eschatology", href: "/religion/christianity/theology/eschatology/" },
  { label: "History", href: "/religion/christianity/history/" },
  { label: "Early Church", href: "/religion/christianity/history/early-church/" },
  { label: "Medieval", href: "/religion/christianity/history/medieval/" },
  { label: "Reformation", href: "/religion/christianity/history/reformation/" },
  { label: "Modern", href: "/religion/christianity/history/modern/" },
  { label: "Cultural Impact", href: "/religion/christianity/impact/" },
  { label: "Art", href: "/religion/christianity/impact/art/" },
  { label: "Literature", href: "/religion/christianity/impact/literature/" },
  { label: "Music", href: "/religion/christianity/impact/music/" },
  { label: "Science", href: "/religion/christianity/impact/science/" },
  { label: "Philosophy", href: "/religion/christianity/impact/philosophy/" },
  { label: "All Christianity Blog Posts", href: "/blog?category=Christianity" },
]

// Enhanced blogPosts with multiple categories
const blogPosts = [
  {
    title: "Faiths in Dialogue: Christianity and Islam",
    slug: "faiths-in-dialogue-christianity-islam",
    categories: ["Christianity", "Islam", "Interfaith"],
    seoDescription: "Explore the intersections and shared values between Christianity and Islam in this in-depth interfaith analysis."
  },
  {
    title: "What Is the Gospel?",
    slug: "what-is-the-gospel",
    categories: ["Christianity"],
    seoDescription: "Understanding the core message of Christianity and its significance in modern life."
  },
  {
    title: "Who Is Jesus Christ?",
    slug: "who-is-jesus-christ",
    categories: ["Christianity"],
    seoDescription: "Exploring the historical and theological significance of Jesus Christ in Christianity."
  },
  { title: "What Does It Mean to Be Saved?", slug: "what-does-it-mean-to-be-saved" },
  { title: "How to Read the Bible", slug: "how-to-read-the-bible" },
  { title: "Prayer 101: Talking with God", slug: "prayer-101-talking-with-god" },
]

interface BlogPost {
  title: string
  slug: string
  categories?: string[]
}

// Helper to get posts by category
function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.categories?.includes(category))
}

const islamLinks = [
  { label: "Overview", href: "/religion/islam/" },
  { label: "Studies", href: "/religion/islam/studies/" },
  { label: "Shariah", href: "/religion/islam/studies/shariah/" },
  { label: "Aqidah", href: "/religion/islam/studies/aqidah/" },
  { label: "Tasawwuf (Studies)", href: "/religion/islam/studies/tasawwuf/" },
  { label: "Fiqh", href: "/religion/islam/studies/fiqh/" },
  { label: "Tawhid", href: "/religion/islam/studies/tawhid/" },
  { label: "Practices", href: "/religion/islam/practices/" },
  { label: "Meditation", href: "/religion/islam/practices/meditation/" },
  { label: "Dhikr", href: "/religion/islam/practices/dhikr/" },
  { label: "Tasawwuf (Practices)", href: "/religion/islam/practices/tasawwuf/" },
  { label: "Prayer", href: "/religion/islam/practices/prayer/" },
  { label: "Impact", href: "/religion/islam/impact/" },
  { label: "Music", href: "/religion/islam/impact/music/" },
  { label: "Philosophy", href: "/religion/islam/impact/philosophy/" },
  { label: "Science", href: "/religion/islam/impact/science/" },
  { label: "Literature", href: "/religion/islam/impact/literature/" },
  { label: "Art", href: "/religion/islam/impact/art/" },
  { label: "History", href: "/religion/islam/history/" },
  { label: "Contemporary", href: "/religion/islam/history/contemporary/" },
  { label: "Modern", href: "/religion/islam/history/modern/" },
  { label: "Medieval", href: "/religion/islam/history/medieval/" },
  { label: "Golden Age", href: "/religion/islam/history/golden-age/" },
  { label: "Early Islam", href: "/religion/islam/history/early-islam/" },
  { label: "All Islam Blog Posts", href: "/blog?category=Islam" },
]

const buddhismLinks = [
  { label: "Overview", href: "/religion/buddhism/" },
  { label: "Impact", href: "/religion/buddhism/impact/" },
  { label: "Peace", href: "/religion/buddhism/impact/peace/" },
  { label: "Environment", href: "/religion/buddhism/impact/environment/" },
  { label: "Health", href: "/religion/buddhism/impact/health/" },
  { label: "Education", href: "/religion/buddhism/impact/education/" },
  { label: "Society", href: "/religion/buddhism/impact/society/" },
  { label: "Science", href: "/religion/buddhism/impact/science/" },
  { label: "Literature", href: "/religion/buddhism/impact/literature/" },
  { label: "Architecture", href: "/religion/buddhism/impact/architecture/" },
  { label: "Art", href: "/religion/buddhism/impact/art/" },
  { label: "Schools", href: "/religion/buddhism/schools/" },
  { label: "Vajrayana", href: "/religion/buddhism/schools/vajrayana/" },
  { label: "Mahayana", href: "/religion/buddhism/schools/mahayana/" },
  { label: "Theravada", href: "/religion/buddhism/schools/theravada/" },
  { label: "Studies", href: "/religion/buddhism/studies/" },
  { label: "Philosophy", href: "/religion/buddhism/studies/philosophy/" },
  { label: "Dharma", href: "/religion/buddhism/studies/dharma/" },
  { label: "Dependent Origination", href: "/religion/buddhism/studies/dependent-origination/" },
  { label: "Five Aggregates", href: "/religion/buddhism/studies/five-aggregates/" },
  { label: "Schools (Studies)", href: "/religion/buddhism/studies/schools/" },
  { label: "Meditation (Studies)", href: "/religion/buddhism/studies/meditation/" },
  { label: "Ethics (Studies)", href: "/religion/buddhism/studies/ethics/" },
  { label: "Three Marks", href: "/religion/buddhism/studies/three-marks/" },
  { label: "Noble Eightfold Path", href: "/religion/buddhism/studies/noble-eightfold-path/" },
  { label: "Four Noble Truths", href: "/religion/buddhism/studies/four-noble-truths/" },
  { label: "Practices", href: "/religion/buddhism/practices/" },
  { label: "Rituals", href: "/religion/buddhism/practices/rituals/" },
  { label: "Ethics (Practices)", href: "/religion/buddhism/practices/ethics/" },
  { label: "Mindfulness", href: "/religion/buddhism/practices/mindfulness/" },
  { label: "Meditation (Practices)", href: "/religion/buddhism/practices/meditation/" },
  { label: "Texts", href: "/religion/buddhism/texts/" },
  { label: "Beliefs", href: "/religion/buddhism/beliefs/" },
  { label: "History", href: "/religion/buddhism/history/" },
  { label: "Modern", href: "/religion/buddhism/history/modern/" },
  { label: "Medieval", href: "/religion/buddhism/history/medieval/" },
  { label: "Classical", href: "/religion/buddhism/history/classical/" },
  { label: "Early Buddhism", href: "/religion/buddhism/history/early-buddhism/" },
  { label: "Contemporary", href: "/religion/buddhism/history/contemporary/" },
  { label: "All Buddhism Blog Posts", href: "/blog?category=Buddhism" },
]

const hinduismLinks = [
  { label: "Overview", href: "/religion/hinduism/" },
  { label: "Studies", href: "/religion/hinduism/studies/" },
  { label: "Karma", href: "/religion/hinduism/studies/karma/" },
  { label: "Philosophy", href: "/religion/hinduism/studies/philosophy/" },
  { label: "Moksha", href: "/religion/hinduism/studies/moksha/" },
  { label: "Dharma", href: "/religion/hinduism/studies/dharma/" },
  { label: "Vedanta", href: "/religion/hinduism/studies/vedanta/" },
  { label: "History", href: "/religion/hinduism/history/" },
  { label: "Early", href: "/religion/hinduism/history/early/" },
  { label: "Medieval", href: "/religion/hinduism/history/medieval/" },
  { label: "Contemporary", href: "/religion/hinduism/history/contemporary/" },
  { label: "Modern", href: "/religion/hinduism/history/modern/" },
  { label: "Classical", href: "/religion/hinduism/history/classical/" },
  { label: "Vedic", href: "/religion/hinduism/history/vedic/" },
  { label: "Impact", href: "/religion/hinduism/impact/" },
  { label: "Yoga", href: "/religion/hinduism/impact/yoga/" },
  { label: "Literature", href: "/religion/hinduism/impact/literature/" },
  { label: "Music & Dance", href: "/religion/hinduism/impact/music-dance/" },
  { label: "Philosophy (Impact)", href: "/religion/hinduism/impact/philosophy/" },
  { label: "Art", href: "/religion/hinduism/impact/art/" },
  { label: "All Hinduism Blog Posts", href: "/blog?category=Hinduism" },
]

const ethicsLinks = [
  { label: "Overview", href: "/religion/ethics/" },
  { label: "Social", href: "/religion/ethics/social/" },
  { label: "Virtue", href: "/religion/ethics/virtue/" },
  { label: "Applied", href: "/religion/ethics/applied/" },
  { label: "Principles", href: "/religion/ethics/principles/" },
  { label: "All Ethics Blog Posts", href: "/blog?category=Ethics" },
]

const philosophyLinks = [
  { label: "Overview", href: "/religion/philosophy/" },
  { label: "Language", href: "/religion/philosophy/language/" },
  { label: "Divine", href: "/religion/philosophy/divine/" },
  { label: "Epistemology", href: "/religion/philosophy/epistemology/" },
  { label: "Metaphysics", href: "/religion/philosophy/metaphysics/" },
  { label: "All Philosophy Blog Posts", href: "/blog?category=Philosophy" },
]

const historyLinks = [
  { label: "Overview", href: "/religion/history/" },
  { label: "Modern", href: "/religion/history/modern/" },
  { label: "Sacred", href: "/religion/history/sacred/" },
  { label: "Movements", href: "/religion/history/movements/" },
  { label: "Ancient", href: "/religion/history/ancient/" },
  { label: "All History Blog Posts", href: "/blog?category=History" },
]

const comparativeLinks = [
  { label: "Overview", href: "/religion/comparative/" },
  { label: "Dialogue", href: "/religion/comparative/dialogue/" },
  { label: "Cultures", href: "/religion/comparative/cultures/" },
  { label: "Practices", href: "/religion/comparative/practices/" },
  { label: "Beliefs", href: "/religion/comparative/beliefs/" },
  { label: "All Comparative Blog Posts", href: "/blog?category=Comparative" },
]

function getUncategorizedPosts() {
  return blogPosts.filter(post => !post.categories || post.categories.length === 0)
}

function getInterfaithPosts() {
  return blogPosts.filter(post => post.categories && (post.categories.includes("Interfaith") || post.categories.length > 1))
}

export default async function HomePage({ params }: HomePageProps) {
  
  // Ensure t is a valid function
  if (!t || typeof t !== 'function') {
    console.error('Translation function is invalid:', t)
    return (
      <main className="container mx-auto px-4 py-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error Loading Page</h1>
          <p className="text-muted-foreground">Unable to load page content. Please try again.</p>
        </div>
      </main>
    )
  }
  
  return (
    <main className="container mx-auto px-4 py-6 space-y-12">
      <section className="text-center py-12 space-y-6">
        <h1 className="text-4xl font-bold">ZION.FM | Understanding Christianity and Beyond: Explore the Rich Tapestry of World Religions</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover ZION.FM, your gateway to the world's major religions. Explore in-depth guides, histories, and teachings. Dive into overviews, theology, philosophy, sacred texts, and the evolution of faiths from ancient to modern times. Made for seekers, students, and the curious alike.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg" className="px-8">
            <Link href="/en/studies">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap mr-2 h-5 w-5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
              Start Learning
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8">
            <Link href="/en/resources">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-library mr-2 h-5 w-5"><path d="m16 6 4 14"></path><path d="M12 6v14"></path><path d="M8 8v12"></path><path d="M4 4v16"></path></svg>
              Browse Resources
            </Link>
          </Button>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">{safeT(t, 'home.quickAccess.title', 'Quick Access')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Study Guides Card */}
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center text-lg break-words">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap h-5 w-5"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                <span className="ml-2">{safeT(t, 'home.quickAccess.studyGuides.title', 'Study Guides')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground mb-4 break-words">
                {safeT(t, 'home.quickAccess.studyGuides.description', 'Comprehensive study materials and guides for religious education')}
              </p>
              <Button asChild variant="outline" className="w-full mt-auto">
                <Link href={`/${params.locale}/studies/`}>{safeT(t, 'home.quickAccess.studyGuides.title', 'Study Guides')}</Link>
              </Button>
            </CardContent>
          </Card>
          {/* Resources Card */}
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center text-lg break-words">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-library h-5 w-5"><path d="m16 6 4 14" /><path d="M12 6v14" /><path d="M8 8v12" /><path d="M4 4v16" /></svg>
                <span className="ml-2">{safeT(t, 'home.quickAccess.resources.title', 'Resources')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground mb-4 break-words">
                {safeT(t, 'home.quickAccess.resources.description', 'Extensive library of religious texts, articles, and multimedia content')}
              </p>
              <Button asChild variant="outline" className="w-full mt-auto">
                <Link href={`/${params.locale}/resources/`}>{safeT(t, 'home.quickAccess.resources.title', 'Resources')}</Link>
              </Button>
            </CardContent>
          </Card>
          {/* Sacred Texts Card */}
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center text-lg break-words">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scroll-text h-5 w-5"><path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" /><path d="M19 17V5a2 2 0 0 0-2-2H4" /><path d="M15 8h-5" /><path d="M15 12h-5" /></svg>
                <span className="ml-2">{safeT(t, 'home.quickAccess.sacredTexts.title', 'Sacred Texts')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground mb-4 break-words">
                {safeT(t, 'home.quickAccess.sacredTexts.description', 'Access to sacred scriptures and religious texts from various traditions')}
              </p>
              <Button asChild variant="outline" className="w-full mt-auto">
                <Link href={`/${params.locale}/sacred-texts/`}>{safeT(t, 'home.quickAccess.sacredTexts.title', 'Sacred Texts')}</Link>
              </Button>
            </CardContent>
          </Card>
          {/* Teachings Card */}
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center text-lg break-words">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-marked h-5 w-5"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /><polyline points="10 2 10 10 13 7 16 10 16 2" /></svg>
                <span className="ml-2">{safeT(t, 'home.quickAccess.teachings.title', 'Teachings')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground mb-4 break-words">
                {safeT(t, 'home.quickAccess.teachings.description', 'Explore religious teachings and spiritual wisdom from diverse traditions')}
              </p>
              <Button asChild variant="outline" className="w-full mt-auto">
                <Link href={`/${params.locale}/teachings/`}>{safeT(t, 'home.quickAccess.teachings.title', 'Teachings')}</Link>
              </Button>
            </CardContent>
          </Card>
          {/* Meditation Card */}
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center text-lg break-words">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart h-5 w-5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                <span className="ml-2">{safeT(t, 'home.quickAccess.meditation.title', 'Meditation')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground mb-4 break-words">
                {safeT(t, 'home.quickAccess.meditation.description', 'Guided meditation practices and spiritual exercises')}
              </p>
              <Button asChild variant="outline" className="w-full mt-auto">
                <Link href={`/${params.locale}/meditation/`}>{safeT(t, 'home.quickAccess.meditation.title', 'Meditation')}</Link>
              </Button>
            </CardContent>
          </Card>
          {/* Explore Card */}
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center text-lg break-words">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-compass h-5 w-5"><circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></svg>
                <span className="ml-2">{safeT(t, 'home.quickAccess.explore.title', 'Explore')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground mb-4 break-words">
                {safeT(t, 'home.quickAccess.explore.description', 'Discover new religious traditions and spiritual practices')}
              </p>
              <Button asChild variant="outline" className="w-full mt-auto">
                <Link href={`/${params.locale}/study/`}>{safeT(t, 'home.quickAccess.explore.title', 'Explore')}</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Radio Stations Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">{safeT(t, 'home.radioStations.title', 'Religious Radio Stations')}</h2>
        <Suspense fallback={<LoadingSpinner />}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {VERIFIED_STATIONS.map((station) => (
              <StationCard key={station.id} station={station} />
            ))}
          </div>
        </Suspense>
      </section>

      {/* Religion Sections */}
      <ReligionSections t={t} />

      {/* Filter Buttons */}
      <FilterButtons t={t} />
    </main>
  )
} 