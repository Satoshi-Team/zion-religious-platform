import React from 'react'
import { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Seventh-day Adventist Church - Religious Studies",
  description: "Comprehensive guide to Seventh-day Adventist beliefs, practices, and history",
  keywords: [
    "Seventh-day Adventist",
    "SDA Church",
    "Ellen G. White",
    "Adventist beliefs",
    "Sabbath observance",
    "Health message",
    "Second Coming",
    "Adventist education"
  ]
}

interface HistoricalEvent {
  period: string
  date: string
  description: string
  developments: string[]
}

const historicalEvents: HistoricalEvent[] = [
  {
    period: "Millerite Movement",
    date: "1831-1844",
    description: "The foundation period under William Miller's leadership.",
    developments: [
      "Great Second Advent Awakening",
      "Study of prophetic time periods",
      "October 22, 1844 expectation",
      "Great Disappointment experience"
    ]
  },
  {
    period: "Formation Period",
    date: "1844-1863",
    description: "Development of distinctive Adventist doctrines and organization.",
    developments: [
      "Sabbath truth acceptance",
      "Sanctuary doctrine development",
      "Ellen White's prophetic ministry",
      "Health message introduction"
    ]
  },
  {
    period: "Organizational Development",
    date: "1863-1888",
    description: "Establishment of church structure and institutions.",
    developments: [
      "General Conference formation",
      "Publishing work expansion",
      "Health institution establishment",
      "Educational system beginnings"
    ]
  },
  {
    period: "Expansion Era",
    date: "1888-1915",
    description: "Significant growth and doctrinal development.",
    developments: [
      "Righteousness by faith emphasis",
      "Global mission initiatives",
      "Educational expansion",
      "Publishing work growth"
    ]
  },
  {
    period: "Modern Development",
    date: "1915-Present",
    description: "Global growth and institutional development.",
    developments: [
      "Worldwide church expansion",
      "Educational system growth",
      "Healthcare network development",
      "Media ministry establishment"
    ]
  },
  {
    period: "Contemporary Era",
    date: "1980-Present",
    description: "Modern challenges and global presence.",
    developments: [
      "Fundamental Beliefs revision",
      "Technology integration",
      "Global mission emphasis",
      "Environmental stewardship"
    ]
  }
]

interface HistoricalFigure {
  name: string
  period: string
  contribution: string[]
  legacy: string[]
}

const historicalFigures: HistoricalFigure[] = [
  {
    name: "Ellen G. White",
    period: "1827-1915",
    contribution: [
      "Prophetic ministry",
      "Extensive writings",
      "Health reform advocacy",
      "Educational vision"
    ],
    legacy: [
      "Spirit of Prophecy writings",
      "Health message",
      "Educational blueprint",
      "Organizational guidance"
    ]
  },
  {
    name: "James White",
    period: "1821-1881",
    contribution: [
      "Publishing work establishment",
      "Organizational leadership",
      "Educational advocacy",
      "Financial management"
    ],
    legacy: [
      "Review and Herald publishing",
      "Church organization",
      "Educational system",
      "Administrative structure"
    ]
  },
  {
    name: "Joseph Bates",
    period: "1792-1872",
    contribution: [
      "Sabbath truth advocacy",
      "Early leadership",
      "Doctrinal development",
      "Temperance promotion"
    ],
    legacy: [
      "Sabbath observance",
      "Health reform",
      "Maritime missions",
      "Sanctuary understanding"
    ]
  }
]

interface FundamentalBelief {
  title: string
  description: string
  biblicalBasis: string[]
  application: string[]
}

const fundamentalBeliefs: FundamentalBelief[] = [
  {
    title: "The Holy Scriptures",
    description: "The Bible as God's inspired Word and sole rule of faith and practice.",
    biblicalBasis: [
      "2 Timothy 3:16-17",
      "2 Peter 1:20-21",
      "Psalm 119:105",
      "Proverbs 30:5-6"
    ],
    application: [
      "Daily Bible study",
      "Scripture memorization",
      "Biblical preaching",
      "Life guidance"
    ]
  },
  {
    title: "The Sabbath",
    description: "The seventh-day Sabbath as God's eternal sign of Creation and redemption.",
    biblicalBasis: [
      "Genesis 2:1-3",
      "Exodus 20:8-11",
      "Isaiah 58:13-14",
      "Mark 2:27-28"
    ],
    application: [
      "Saturday worship",
      "Rest from work",
      "Family time",
      "Creation remembrance"
    ]
  },
  {
    title: "Second Advent",
    description: "The literal, visible return of Jesus Christ.",
    biblicalBasis: [
      "John 14:1-3",
      "Acts 1:9-11",
      "1 Thessalonians 4:16-17",
      "Revelation 1:7"
    ],
    application: [
      "Preparation for Christ's return",
      "Mission urgency",
      "Holy living",
      "Hope sharing"
    ]
  },
  {
    title: "State of the Dead",
    description: "The unconscious state of the dead until resurrection.",
    biblicalBasis: [
      "Ecclesiastes 9:5-6",
      "John 11:11-14",
      "1 Thessalonians 4:13-18",
      "1 Corinthians 15:51-54"
    ],
    application: [
      "Understanding death",
      "Comfort in loss",
      "Resurrection hope",
      "Truth sharing"
    ]
  },
  {
    title: "Sanctuary Service",
    description: "Christ's high priestly ministry in the heavenly sanctuary.",
    biblicalBasis: [
      "Hebrews 8:1-2",
      "Daniel 8:14",
      "Revelation 14:6-7",
      "Leviticus 16"
    ],
    application: [
      "Understanding judgment",
      "Intercessory prayer",
      "Sanctuary lessons",
      "Christian living"
    ]
  },
  {
    title: "Health Message",
    description: "The body as God's temple and principles of healthy living.",
    biblicalBasis: [
      "1 Corinthians 6:19-20",
      "3 John 2",
      "Daniel 1:8",
      "Genesis 1:29"
    ],
    application: [
      "Vegetarian diet emphasis",
      "Abstinence from harmful substances",
      "Exercise promotion",
      "Whole-person wellness"
    ]
  },
  {
    title: "Spirit of Prophecy",
    description: "The prophetic gift manifested in Ellen G. White's ministry.",
    biblicalBasis: [
      "Joel 2:28-29",
      "Revelation 12:17",
      "Revelation 19:10",
      "Amos 3:7"
    ],
    application: [
      "Study of prophetic writings",
      "Application of counsel",
      "Understanding last days",
      "Church guidance"
    ]
  },
  {
    title: "Three Angels' Messages",
    description: "God's final message to the world in Revelation 14.",
    biblicalBasis: [
      "Revelation 14:6-12",
      "Matthew 24:14",
      "Revelation 18:1-4",
      "Daniel 7:9-14"
    ],
    application: [
      "Global mission focus",
      "Present truth proclamation",
      "Babylon identification",
      "Sabbath emphasis"
    ]
  }
]

interface ReligiousPractice {
  name: string
  description: string
  guidelines: string[]
  significance: string[]
}

const religiousPractices: ReligiousPractice[] = [
  {
    name: "Sabbath Observance",
    description: "Weekly celebration of the seventh-day Sabbath from sunset Friday to sunset Saturday.",
    guidelines: [
      "Preparation on Friday",
      "Church attendance",
      "Nature activities",
      "Family fellowship"
    ],
    significance: [
      "Creation memorial",
      "Spiritual renewal",
      "Family bonding",
      "Physical rest"
    ]
  },
  {
    name: "Bible Study",
    description: "Regular personal and group study of Scripture using various methods.",
    guidelines: [
      "Daily devotional time",
      "Sabbath School participation",
      "Small group studies",
      "Personal meditation"
    ],
    significance: [
      "Spiritual growth",
      "Doctrinal understanding",
      "Character development",
      "Truth discovery"
    ]
  },
  {
    name: "Health Practices",
    description: "Implementation of health principles for whole-person wellness.",
    guidelines: [
      "Plant-based diet emphasis",
      "Regular exercise",
      "Adequate rest",
      "Abstinence from harmful substances"
    ],
    significance: [
      "Temple of Holy Spirit",
      "Mental clarity",
      "Physical wellness",
      "Spiritual discernment"
    ]
  },
  {
    name: "Communion Service",
    description: "Quarterly ordinance of humility and Lord's Supper.",
    guidelines: [
      "Foot washing service",
      "Unleavened bread",
      "Unfermented grape juice",
      "Self-examination"
    ],
    significance: [
      "Christ's sacrifice remembrance",
      "Christian humility",
      "Church unity",
      "Spiritual cleansing"
    ]
  },
  {
    name: "Evangelism",
    description: "Sharing the Three Angels' Messages through various methods.",
    guidelines: [
      "Public evangelism",
      "Bible studies",
      "Literature distribution",
      "Health ministry"
    ],
    significance: [
      "Great Commission fulfillment",
      "Truth proclamation",
      "Soul winning",
      "Last-day message"
    ]
  },
  {
    name: "Stewardship",
    description: "Faithful management of time, talents, and resources.",
    guidelines: [
      "Tithe returning",
      "Offering giving",
      "Time management",
      "Talent utilization"
    ],
    significance: [
      "God's ownership recognition",
      "Faith expression",
      "Mission support",
      "Character development"
    ]
  },
  {
    name: "Prayer Life",
    description: "Regular communication with God through various forms of prayer.",
    guidelines: [
      "Personal devotions",
      "Family worship",
      "Intercessory prayer",
      "Prayer meetings"
    ],
    significance: [
      "Divine communion",
      "Spiritual strength",
      "Divine guidance",
      "Answer reception"
    ]
  },
  {
    name: "Christian Education",
    description: "Holistic education integrating faith and learning.",
    guidelines: [
      "Church schools support",
      "Home education emphasis",
      "Character development",
      "Service orientation"
    ],
    significance: [
      "Biblical worldview",
      "Character formation",
      "Mission preparation",
      "Life skills development"
    ]
  }
]

interface HealthPrinciple {
  topic: string
  description: string
  biblicalBasis: string[]
  recommendations: string[]
  benefits: string[]
}

const healthPrinciples: HealthPrinciple[] = [
  {
    topic: "Plant-Based Nutrition",
    description: "Emphasis on whole plant foods as the foundation of a healthy diet, following the original diet given in Genesis.",
    biblicalBasis: [
      "Genesis 1:29",
      "Daniel 1:8-16",
      "Leviticus 11"
    ],
    recommendations: [
      "Variety of fruits and vegetables",
      "Whole grains",
      "Nuts and legumes",
      "Limited processed foods"
    ],
    benefits: [
      "Optimal physical health",
      "Mental clarity",
      "Disease prevention",
      "Environmental stewardship"
    ]
  },
  {
    topic: "Physical Activity",
    description: "Regular exercise and physical activity as essential components of whole-person wellness.",
    biblicalBasis: [
      "1 Corinthians 6:19-20",
      "3 John 1:2"
    ],
    recommendations: [
      "Daily moderate exercise",
      "Outdoor activities",
      "Physical labor",
      "Regular movement breaks"
    ],
    benefits: [
      "Cardiovascular health",
      "Stress reduction",
      "Better sleep quality",
      "Weight management"
    ]
  },
  {
    topic: "Rest and Recovery",
    description: "Importance of adequate rest, including weekly Sabbath rest and proper sleep habits.",
    biblicalBasis: [
      "Exodus 20:8-11",
      "Psalm 127:2",
      "Mark 6:31"
    ],
    recommendations: [
      "7-8 hours of sleep",
      "Regular sleep schedule",
      "Sabbath observance",
      "Stress management"
    ],
    benefits: [
      "Physical restoration",
      "Mental rejuvenation",
      "Emotional balance",
      "Spiritual renewal"
    ]
  },
  {
    topic: "Temperance",
    description: "Abstinence from harmful substances and moderation in beneficial things.",
    biblicalBasis: [
      "1 Corinthians 10:31",
      "Daniel 1:8",
      "Proverbs 20:1"
    ],
    recommendations: [
      "Avoid alcohol and tobacco",
      "Moderate use of healthy foods",
      "Balance in work and recreation",
      "Mindful consumption"
    ],
    benefits: [
      "Clear mind",
      "Better decision-making",
      "Disease prevention",
      "Spiritual discernment"
    ]
  },
  {
    topic: "Water and Hydration",
    description: "Proper hydration through pure water consumption and hydrotherapy principles.",
    biblicalBasis: [
      "John 4:14",
      "Revelation 22:17"
    ],
    recommendations: [
      "8-10 glasses daily",
      "Water-rich foods",
      "Hydrotherapy treatments",
      "Limited caffeine intake"
    ],
    benefits: [
      "Improved circulation",
      "Better digestion",
      "Toxin elimination",
      "Skin health"
    ]
  },
  {
    topic: "Fresh Air and Sunlight",
    description: "Regular exposure to fresh air and appropriate sunlight for optimal health.",
    biblicalBasis: [
      "Genesis 2:7",
      "Malachi 4:2"
    ],
    recommendations: [
      "Outdoor exercise",
      "Open windows",
      "Deep breathing",
      "Moderate sun exposure"
    ],
    benefits: [
      "Vitamin D production",
      "Improved oxygenation",
      "Better mood",
      "Enhanced immunity"
    ]
  },
  {
    topic: "Mental and Emotional Health",
    description: "Maintaining mental and emotional well-being through spiritual and lifestyle practices.",
    biblicalBasis: [
      "Philippians 4:8",
      "Proverbs 17:22"
    ],
    recommendations: [
      "Regular prayer and meditation",
      "Positive thinking",
      "Social connections",
      "Nature time"
    ],
    benefits: [
      "Stress reduction",
      "Emotional stability",
      "Better relationships",
      "Spiritual growth"
    ]
  }
]

interface EducationLevel {
  type: string
  description: string
  objectives: string[]
  curriculum: string[]
  features: string[]
  institutions: Array<{
    name: string
    location: string
    founded: string
    website: string
  }>
}

const educationalSystem: EducationLevel[] = [
  {
    type: "Elementary Education",
    description: "Foundation level education integrating biblical principles with academic excellence for grades K-8.",
    objectives: [
      "Character development",
      "Academic excellence",
      "Biblical worldview",
      "Service orientation"
    ],
    curriculum: [
      "Core academic subjects",
      "Bible study",
      "Creation science",
      "Health education"
    ],
    features: [
      "Small class sizes",
      "Certified Christian teachers",
      "Bible-based curriculum",
      "Character development focus",
      "Regular worship activities"
    ],
    institutions: [
      {
        name: "Adventist Education",
        location: "Global Network",
        founded: "1872",
        website: "https://adventisteducation.org"
      }
    ]
  },
  {
    type: "Secondary Education",
    description: "College preparatory education with spiritual emphasis for grades 9-12.",
    objectives: [
      "College preparation",
      "Spiritual maturity",
      "Leadership development",
      "Life skills"
    ],
    curriculum: [
      "Advanced academics",
      "Bible doctrines",
      "Vocational training",
      "Physical education"
    ],
    features: [
      "College prep programs",
      "Spiritual mentoring",
      "Leadership opportunities",
      "Community service projects",
      "Athletic programs"
    ],
    institutions: [
      {
        name: "Andrews Academy",
        location: "Berrien Springs, MI",
        founded: "1901",
        website: "https://andrews.edu/academy"
      }
    ]
  },
  {
    type: "Higher Education",
    description: "University level education combining faith, learning, and research.",
    objectives: [
      "Professional preparation",
      "Research excellence",
      "Mission service",
      "Global perspective"
    ],
    curriculum: [
      "Professional programs",
      "Liberal arts",
      "Theological studies",
      "Research methods"
    ],
    features: [
      "Research opportunities",
      "International programs",
      "Mission trips",
      "Professional internships",
      "Faith integration"
    ],
    institutions: [
      {
        name: "Andrews University",
        location: "Berrien Springs, MI",
        founded: "1874",
        website: "https://andrews.edu"
      },
      {
        name: "Loma Linda University",
        location: "Loma Linda, CA",
        founded: "1905",
        website: "https://llu.edu"
      }
    ]
  },
  {
    type: "Theological Education",
    description: "Seminary and pastoral training for ministry and leadership.",
    objectives: [
      "Pastoral preparation",
      "Biblical scholarship",
      "Evangelism training",
      "Leadership development"
    ],
    curriculum: [
      "Biblical languages",
      "Systematic theology",
      "Pastoral ministry",
      "Church history"
    ],
    features: [
      "Field education",
      "Mentorship programs",
      "Research resources",
      "Global ministry focus",
      "Practical training"
    ],
    institutions: [
      {
        name: "Andrews Theological Seminary",
        location: "Berrien Springs, MI",
        founded: "1936",
        website: "https://andrews.edu/sem"
      }
    ]
  },
  {
    type: "Continuing Education",
    description: "Lifelong learning opportunities for professional and personal growth.",
    objectives: [
      "Professional development",
      "Skill enhancement",
      "Knowledge updating",
      "Certification maintenance"
    ],
    curriculum: [
      "Professional workshops",
      "Online courses",
      "Certificate programs",
      "Summer intensives"
    ],
    features: [
      "Flexible scheduling",
      "Online learning options",
      "Professional certification",
      "Practical application",
      "Networking opportunities"
    ],
    institutions: [
      {
        name: "Adventist Learning Community",
        location: "Online Platform",
        founded: "2014",
        website: "https://adventistlearningcommunity.com"
      }
    ]
  }
]

interface MissionArea {
  region: string
  description: string
  initiatives: string[]
  impact: {
    statistics: string[]
    testimonials: string[]
  }
  currentProjects: Array<{
    name: string
    description: string
    location: string
    status: string
  }>
}

const missionWork: MissionArea[] = [
  {
    region: "Africa",
    description: "Extensive network of medical facilities, schools, and evangelistic centers across the continent.",
    initiatives: [
      "Healthcare development",
      "Educational institutions",
      "Agricultural programs",
      "Water projects"
    ],
    impact: {
      statistics: [
        "Over 7 million members",
        "130+ hospitals and clinics",
        "Thousands of schools",
        "Active in 48 countries"
      ],
      testimonials: [
        "Transformed communities through education",
        "Improved healthcare access",
        "Sustainable agriculture impact"
      ]
    },
    currentProjects: [
      {
        name: "Adventist University of Africa",
        description: "Graduate education center serving all of Africa",
        location: "Kenya",
        status: "Active"
      },
      {
        name: "ADRA Africa Projects",
        description: "Humanitarian and development initiatives",
        location: "Pan-African",
        status: "Ongoing"
      }
    ]
  },
  {
    region: "South America",
    description: "Strong presence in education and healthcare, with significant growth in urban centers.",
    initiatives: [
      "Urban ministry",
      "Educational expansion",
      "Health message",
      "Media evangelism"
    ],
    impact: {
      statistics: [
        "Over 2 million members",
        "Numerous universities",
        "TV and radio networks",
        "Active in all countries"
      ],
      testimonials: [
        "Educational excellence achievement",
        "Media ministry success",
        "Community health impact"
      ]
    },
    currentProjects: [
      {
        name: "Novo Tempo Network",
        description: "Media ministry reaching millions",
        location: "Brazil",
        status: "Expanding"
      },
      {
        name: "ADRA South America",
        description: "Regional humanitarian projects",
        location: "Multiple countries",
        status: "Active"
      }
    ]
  },
  {
    region: "Asia-Pacific",
    description: "Dynamic growth region with focus on urban centers and unreached areas.",
    initiatives: [
      "Urban centers of influence",
      "Medical missions",
      "Educational outreach",
      "Literature ministry"
    ],
    impact: {
      statistics: [
        "Growing membership",
        "Multiple institutions",
        "Literature distribution",
        "Medical missions"
      ],
      testimonials: [
        "Urban ministry success",
        "Educational impact",
        "Healthcare outreach"
      ]
    },
    currentProjects: [
      {
        name: "1000 Missionary Movement",
        description: "Training young missionaries",
        location: "Philippines",
        status: "Active"
      },
      {
        name: "Hope Channel Asia",
        description: "Media ministry in multiple languages",
        location: "Regional",
        status: "Expanding"
      }
    ]
  },
  {
    region: "Inter-America",
    description: "Vibrant region with strong emphasis on education and evangelism.",
    initiatives: [
      "Youth evangelism",
      "Education expansion",
      "Community service",
      "Health ministry"
    ],
    impact: {
      statistics: [
        "High member engagement",
        "Educational excellence",
        "Community impact",
        "Youth involvement"
      ],
      testimonials: [
        "Youth leadership development",
        "Educational achievements",
        "Community transformation"
      ]
    },
    currentProjects: [
      {
        name: "Inter-American Educational System",
        description: "Strengthening educational institutions",
        location: "Regional",
        status: "Ongoing"
      },
      {
        name: "Youth for Christ",
        description: "Youth evangelism initiative",
        location: "Multiple countries",
        status: "Active"
      }
    ]
  },
  {
    region: "Euro-Asia",
    description: "Focus on urban ministry and reaching secular populations.",
    initiatives: [
      "Urban ministry",
      "Secular outreach",
      "Youth engagement",
      "Literature distribution"
    ],
    impact: {
      statistics: [
        "Growing presence",
        "Urban centers",
        "Youth programs",
        "Literature impact"
      ],
      testimonials: [
        "Urban ministry success",
        "Youth engagement",
        "Community impact"
      ]
    },
    currentProjects: [
      {
        name: "Centers of Influence",
        description: "Urban ministry centers",
        location: "Major cities",
        status: "Expanding"
      },
      {
        name: "Literature Ministry",
        description: "Publishing and distribution",
        location: "Regional",
        status: "Active"
      }
    ]
  }
]

interface AcademicResource {
  name: string
  type: "journal" | "research-center" | "library" | "database" | "publication"
  description: string
  url: string
  access: "open" | "subscription" | "institutional"
  topics: string[]
  institution?: string
  frequency?: string
  languages: string[]
}

const academicResources: AcademicResource[] = [
  {
    name: "Andrews University Seminary Studies",
    type: "journal",
    description: "Peer-reviewed journal focusing on biblical studies, archaeology, theology, and church history.",
    url: "https://digitalcommons.andrews.edu/auss/",
    access: "open",
    topics: [
      "Biblical Studies",
      "Archaeology",
      "Systematic Theology",
      "Church History"
    ],
    institution: "Andrews University",
    frequency: "Biannual",
    languages: ["English"]
  },
  {
    name: "Ellen G. White Estate Research Center",
    type: "research-center",
    description: "Primary source materials and research facilities for studying Ellen White's writings and early Adventist history.",
    url: "https://whiteestate.org/",
    access: "open",
    topics: [
      "Ellen G. White Studies",
      "Adventist History",
      "Prophetic Ministry",
      "Historical Documents"
    ],
    institution: "General Conference",
    languages: ["English", "Spanish", "Portuguese", "French"]
  },
  {
    name: "Biblical Research Institute",
    type: "research-center",
    description: "Scholarly research and resources on biblical interpretation, theology, and contemporary issues.",
    url: "https://adventistbiblicalresearch.org/",
    access: "open",
    topics: [
      "Biblical Research",
      "Doctrinal Studies",
      "Contemporary Issues",
      "Apologetics"
    ],
    institution: "General Conference",
    languages: ["English", "Multiple Languages"]
  },
  {
    name: "Adventist Digital Library",
    type: "database",
    description: "Digital repository of Adventist publications, photographs, and historical materials.",
    url: "https://adventistdigitallibrary.org/",
    access: "open",
    topics: [
      "Historical Documents",
      "Periodicals",
      "Photographs",
      "Media Resources"
    ],
    institution: "Adventist Church",
    languages: ["English", "Multiple Historical Languages"]
  },
  {
    name: "Journal of the Adventist Theological Society",
    type: "journal",
    description: "Scholarly journal dedicated to theological research and biblical interpretation.",
    url: "https://www.atsjats.org/",
    access: "subscription",
    topics: [
      "Theological Studies",
      "Biblical Interpretation",
      "Doctrinal Research",
      "Contemporary Issues"
    ],
    frequency: "Biannual",
    languages: ["English"]
  },
  {
    name: "Center for Adventist Research",
    type: "research-center",
    description: "Major research collection of Adventist historical materials and special collections.",
    url: "https://www.centerforadventistresearch.org/",
    access: "institutional",
    topics: [
      "Adventist Heritage",
      "Historical Research",
      "Special Collections",
      "Archival Materials"
    ],
    institution: "Andrews University",
    languages: ["English", "Multiple Historical Languages"]
  },
  {
    name: "Perspective Digest",
    type: "publication",
    description: "Online publication featuring scholarly articles on theology and contemporary issues.",
    url: "https://www.perspectivedigest.org/",
    access: "open",
    topics: [
      "Contemporary Theology",
      "Biblical Studies",
      "Christian Living",
      "Apologetics"
    ],
    frequency: "Quarterly",
    languages: ["English"]
  },
  {
    name: "Faith and Science Council",
    type: "research-center",
    description: "Research and resources on the interface between faith and science.",
    url: "https://faithandscience.org",
    access: "open",
    topics: [
      "Creation Science",
      "Origins Research",
      "Scientific Studies",
      "Faith-Science Dialogue"
    ],
    institution: "General Conference",
    languages: ["English", "Spanish"]
  }
]

function SeventhDayAdventistPage() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Seventh-day Adventist Church</h1>
        <p className="text-xl text-muted-foreground">
          Exploring the beliefs, practices, and worldwide mission of the Seventh-day Adventist Church
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-7 gap-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="beliefs">Beliefs</TabsTrigger>
          <TabsTrigger value="practices">Practices</TabsTrigger>
          <TabsTrigger value="health">Health</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="mission">Mission</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Historical Development</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {historicalEvents.map((event) => (
                <div key={event.period} className="p-4 bg-secondary rounded-lg">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{event.period}</h3>
                    <Badge>{event.date}</Badge>
                  </div>
                  <p className="text-sm mt-2">{event.description}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium">Key Developments:</h4>
                    <ul className="list-disc list-inside mt-2 text-sm">
                      {event.developments.map((dev, index) => (
                        <li key={index}>{dev}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="beliefs" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Fundamental Beliefs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {fundamentalBeliefs.map((belief) => (
                <div key={belief.title} className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">{belief.title}</h3>
                  <p className="text-sm mt-2">{belief.description}</p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium">Biblical Foundation:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {belief.biblicalBasis.map((verse, index) => (
                          <li key={index}>{verse}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Practical Application:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {belief.application.map((app, index) => (
                          <li key={index}>{app}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="practices" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Religious Practices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {religiousPractices.map((practice) => (
                <div key={practice.name} className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">{practice.name}</h3>
                  <p className="text-sm mt-2">{practice.description}</p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium">Guidelines:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {practice.guidelines.map((guide, index) => (
                          <li key={index}>{guide}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Significance:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {practice.significance.map((sig, index) => (
                          <li key={index}>{sig}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="health" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Health Message and Lifestyle</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {healthPrinciples.map((principle) => (
                <div key={principle.topic} className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">{principle.topic}</h3>
                  <p className="text-sm mt-2">{principle.description}</p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium">Guidelines:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {principle.recommendations.map((guide, index) => (
                          <li key={index}>{guide}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Benefits:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {principle.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="education" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Educational System</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {educationalSystem.map((level) => (
                <div key={level.type} className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">{level.type}</h3>
                  <p className="text-sm mt-2">{level.description}</p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium">Features:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {level.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Institutions:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {level.institutions.map((inst, index) => (
                          <li key={index}>
                            <a 
                              href={inst.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline text-primary"
                            >
                              {inst.name}
                            </a>
                            {" - "}
                            {inst.location} (Est. {inst.founded})
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mission" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Global Mission and Outreach</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {missionWork.map((area) => (
                <div key={area.region} className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-medium">{area.region}</h3>
                  <p className="text-sm mt-2">{area.description}</p>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium">Initiatives:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {area.initiatives.map((initiative, index) => (
                          <li key={index}>{initiative}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Impact:</h4>
                      <ul className="list-disc list-inside mt-2 text-sm">
                        {area.impact.statistics.map((stat, index) => (
                          <li key={index}>{stat}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Academic and Educational Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {academicResources.map((resource) => (
                <div key={resource.name} className="p-4 bg-secondary rounded-lg">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{resource.name}</h3>
                    <Badge>{resource.type}</Badge>
                  </div>
                  <p className="text-sm mt-2">{resource.description}</p>
                  <a
                    href={resource.url}
                    className="text-primary hover:underline text-sm block mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Resource
                  </a>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default SeventhDayAdventistPage 