export interface ReligiousResource {
  id: string
  name: string
  description: string
  religion: string
  type: string
  url: string
  featured: boolean
  language: string
  topics: string[]
  author?: string
  organization?: string
}

// Add this interface to extend ReligiousResource with isVerified
interface VerifiedReligiousResource extends ReligiousResource {
  isVerified?: boolean
}

export const RELIGIOUS_RESOURCES = [
  // Christianity Resources
  {
    id: "bible-gateway",
    name: "Bible Gateway",
    description: "Multiple translations of the Bible with study resources",
    url: "https://www.biblegateway.com",
    type: "text",
    religion: "Christianity",
    language: "Multiple",
    isVerified: true,
    featured: true,
    topics: ["bible", "study", "resources"],
    organization: "Bible Gateway"
  },
  {
    id: "blue-letter-bible",
    name: "Blue Letter Bible",
    description: "In-depth Bible study tools and commentaries",
    url: "https://www.blueletterbible.org",
    type: "study",
    religion: "Christianity",
    language: "English",
    isVerified: true,
    featured: true,
    topics: ["bible", "study", "commentaries"],
    author: "Blue Letter Bible"
  },
  
  // Islam Resources
  {
    id: "quran-com",
    name: "Quran.com",
    description: "Multiple translations of the Quran with audio recitations",
    url: "https://quran.com",
    type: "text",
    religion: "Islam",
    language: "Multiple",
    isVerified: true,
    featured: true,
    topics: ["quran", "translation", "audio"],
    organization: "Quran.com"
  },
  
  // Judaism Resources
  {
    id: "sefaria",
    name: "Sefaria",
    description: "Jewish texts and translations",
    url: "https://www.sefaria.org",
    type: "text",
    religion: "Judaism",
    language: "Multiple",
    isVerified: true,
    featured: true,
    topics: ["jewish", "texts", "translations"],
    organization: "Sefaria"
  },
  
  // Buddhism Resources
  {
    id: "access-to-insight",
    name: "Access to Insight",
    description: "Buddhist texts and study materials",
    url: "https://www.accesstoinsight.org",
    type: "study",
    religion: "Buddhism",
    language: "English",
    isVerified: true,
    featured: true,
    topics: ["buddhist", "texts", "study"],
    author: "Access to Insight"
  },
  
  // Hinduism Resources
  {
    id: "vedabase",
    name: "Vedabase",
    description: "Vedic texts and translations",
    url: "https://vedabase.io",
    type: "text",
    religion: "Hinduism",
    language: "Multiple",
    isVerified: true,
    featured: true,
    topics: ["vedic", "texts", "translations"],
    organization: "Vedabase"
  },
  {
    id: "daily-devotional",
    name: "Daily Devotional Guide",
    description: "Daily scripture readings and reflections for spiritual growth",
    religion: "Christianity",
    type: "Study Guide",
    url: "/resources/daily-devotional",
    featured: true,
    language: "English",
    topics: ["scripture", "reflection", "prayer"],
    organization: "Christian Study Network"
  },
  {
    id: "meditation-basics",
    name: "Introduction to Buddhist Meditation",
    description: "Learn the fundamentals of Buddhist meditation practices",
    religion: "Buddhism",
    type: "Course",
    url: "/resources/buddhist-meditation",
    featured: true,
    language: "English",
    topics: ["meditation", "mindfulness", "buddhism"],
    author: "Venerable Thich Nhat Hanh"
  }
] as VerifiedReligiousResource[] 