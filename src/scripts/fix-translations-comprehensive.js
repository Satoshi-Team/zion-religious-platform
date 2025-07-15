const fs = require('fs')
const path = require('path')

// Paths
const translationsTsPath = path.join(__dirname, '../lib/i18n/translations.ts')

console.log('🔧 Comprehensive translation fix - addressing all TypeScript issues...')

// Read the file
const tsFileText = fs.readFileSync(translationsTsPath, 'utf8')

// Step 1: Remove all duplicate buddhist properties in sacredTexts
// Keep only the first complete object and remove all buddhistTranslations references
let fixedText = tsFileText

// Remove all lines that reference buddhistTranslations in sacredTexts
fixedText = fixedText.replace(/\s+buddhist:\s+buddhistTranslations\.\w+\s*,?\s*\n/g, '\n')

// Step 2: Make all arrays explicitly mutable by adding type annotations
// This prevents TypeScript from inferring them as readonly
fixedText = fixedText.replace(
  /features:\s*\[([^\]]+)\]/g,
  'features: string[] = [$1]'
)

fixedText = fixedText.replace(
  /translations:\s*\[([^\]]+)\]/g,
  'translations: string[] = [$1]'
)

fixedText = fixedText.replace(
  /commentaries:\s*\[([^\]]+)\]/g,
  'commentaries: string[] = [$1]'
)

fixedText = fixedText.replace(
  /studyGuides:\s*\[([^\]]+)\]/g,
  'studyGuides: string[] = [$1]'
)

fixedText = fixedText.replace(
  /topics:\s*\[([^\]]+)\]/g,
  'topics: string[] = [$1]'
)

fixedText = fixedText.replace(
  /materials:\s*\[([^\]]+)\]/g,
  'materials: string[] = [$1]'
)

fixedText = fixedText.replace(
  /studyTips:\s*\[([^\]]+)\]/g,
  'studyTips: string[] = [$1]'
)

// Step 3: Fix the interface structure
fixedText = fixedText.replace(
  /resources:\s*\n\s*translations:/g,
  'resources: {\n    translations:'
)

// Step 4: Remove any trailing commas that might cause issues
fixedText = fixedText.replace(/,(\s*})/g, '$1')

// Step 5: Ensure proper closing braces for studies objects
fixedText = fixedText.replace(
  /studies:\s*\n\s*title:/g,
  'studies: {\n      title:'
)

// Step 6: Remove 'as const' if present
fixedText = fixedText.replace(/\s*as const\s*$/, '')

// Step 7: Add TranslationKey export if missing
if (!fixedText.includes('export type TranslationKey')) {
  fixedText += '\n\nexport type TranslationKey = keyof LanguageTranslations | \n  `${keyof LanguageTranslations}.${string}` |\n  `${keyof LanguageTranslations}.${string}.${string}`\n'
}

// Write the fixed file
fs.writeFileSync(translationsTsPath, fixedText, 'utf8')

console.log('✅ Comprehensive fixes applied')

// Test the build
console.log('\n🔨 Testing build...')
const { execSync } = require('child_process')

try {
  console.log('Running npm run build...')
  execSync('npm run build', { stdio: 'inherit' })
  console.log('✅ Build successful! All translation issues resolved.')
} catch (error) {
  console.log('❌ Build still failed. Let me try a different approach...')
  
  // Create a completely new translations file with proper structure
  console.log('Creating a new translations file with proper structure...')
  
  const newTranslationsContent = `import { BuddhismTranslations, buddhistTranslations } from './buddhist-translations'

export interface NavTranslations {
  home: string
  studies: string
  teachings: string
  resources: string
  meditation: string
  sacredTexts: string
}

export interface PageTranslations {
  title: string
  description: string
}

export interface SacredTextTranslations {
  title: string
  description: string
  features: string[]
  resources: {
    translations: string[]
    commentaries: string[]
    studyGuides: string[]
  }
  onlineAccess: {
    website: string
    app?: string
  }
}

export interface ResourcePageTranslations {
  title: string
  description: string
  level: string
  topics: string[]
  materials: string[]
  studyTips: string[]
}

export interface SacredTextsTranslations {
  bible: SacredTextTranslations
  quran: SacredTextTranslations
  buddhist: SacredTextTranslations
  hindu: SacredTextTranslations
  sikh: SacredTextTranslations
  zoroastrian: SacredTextTranslations
}

export interface LanguageTranslations {
  home: PageTranslations
  nav: NavTranslations
  studies: PageTranslations
  teachings: PageTranslations
  resources: PageTranslations
  meditation: PageTranslations
  sacredTexts: SacredTextsTranslations
  resourcePages: {
    beginner: ResourcePageTranslations
    intermediate: ResourcePageTranslations
    advanced: ResourcePageTranslations
  }
  history: {
    ancient: PageTranslations
    medieval: PageTranslations
    modern: PageTranslations
  }
  buddhist: BuddhismTranslations
}

export const translations: Record<string, LanguageTranslations> = {
  en: {
    home: {
      title: "Welcome to ZION.FM",
      description: "Your faith, your music, your station"
    },
    nav: {
      home: "Home",
      studies: "Studies",
      teachings: "Teachings",
      resources: "Resources",
      meditation: "Meditation",
      sacredTexts: "Sacred Texts"
    },
    studies: {
      title: "Studies",
      description: "Deep dive into religious texts"
    },
    teachings: {
      title: "Teachings",
      description: "Learn from experienced teachers"
    },
    resources: {
      title: "Resources",
      description: "Tools to help you grow"
    },
    meditation: {
      title: "Meditation",
      description: "Find peace and connection"
    },
    sacredTexts: {
      bible: {
        title: "The Bible",
        description: "Sacred texts of Christianity",
        features: string[] = [
          "Old Testament",
          "New Testament",
          "Commentaries",
          "Study guides"
        ],
        resources: {
          translations: string[] = [
            "King James Version",
            "New International Version",
            "English Standard Version"
          ],
          commentaries: string[] = [
            "Matthew Henry's Commentary",
            "The IVP Bible Commentary",
            "The New Bible Commentary"
          ],
          studyGuides: string[] = [
            "Bible Study Methods",
            "Biblical Interpretation Guide",
            "Historical Context Studies"
          ]
        },
        onlineAccess: {
          website: "https://www.biblegateway.com"
        }
      },
      quran: {
        title: "The Quran",
        description: "Sacred text of Islam",
        features: string[] = [
          "Surahs",
          "Ayahs",
          "Tafsir",
          "Study materials"
        ],
        resources: {
          translations: string[] = [
            "Sahih International",
            "Pickthall",
            "Yusuf Ali"
          ],
          commentaries: string[] = [
            "Tafsir Ibn Kathir",
            "Tafsir al-Jalalayn",
            "Maariful Quran"
          ],
          studyGuides: string[] = [
            "Quranic Sciences",
            "Thematic Studies",
            "Contextual Analysis"
          ]
        },
        onlineAccess: {
          website: "https://quran.com"
        }
      },
      buddhist: {
        title: "Buddhist Texts",
        description: "Collection of Buddhist scriptures and teachings",
        features: string[] = [
          "Sutras",
          "Commentaries",
          "Meditation guides",
          "Practice instructions"
        ],
        resources: {
          translations: string[] = [
            "Pali Canon",
            "Chinese Canon",
            "Tibetan Canon"
          ],
          commentaries: string[] = [
            "Traditional commentaries",
            "Modern interpretations",
            "Scholarly analysis"
          ],
          studyGuides: string[] = [
            "Buddhist Philosophy",
            "Meditation Techniques",
            "Ethical Guidelines"
          ]
        },
        onlineAccess: {
          website: "https://www.buddhanet.net"
        }
      },
      hindu: {
        title: "Hindu Scriptures",
        description: "Ancient texts of Hinduism",
        features: string[] = [
          "Vedas",
          "Upanishads",
          "Bhagavad Gita",
          "Puranas"
        ],
        resources: {
          translations: string[] = [
            "Sanskrit texts",
            "English translations",
            "Regional translations"
          ],
          commentaries: string[] = [
            "Traditional commentaries",
            "Modern interpretations",
            "Academic studies"
          ],
          studyGuides: string[] = [
            "Vedic Studies",
            "Philosophy guides",
            "Practice manuals"
          ]
        },
        onlineAccess: {
          website: "https://www.vedabase.com"
        }
      },
      sikh: {
        title: "Sikh Texts",
        description: "Sacred texts of Sikhism including the Guru Granth Sahib",
        features: string[] = [
          "Guru Granth Sahib",
          "Historical texts",
          "Devotional poetry",
          "Philosophical works"
        ],
        resources: {
          translations: string[] = [
            "Sri Guru Granth Sahib Ji",
            "English Translation",
            "Modern Interpretations"
          ],
          commentaries: string[] = [
            "Traditional Commentaries",
            "Modern Analysis",
            "Academic Studies"
          ],
          studyGuides: string[] = [
            "Gurbani Study Guide",
            "Historical Context",
            "Textual Analysis"
          ]
        },
        onlineAccess: {
          website: "https://www.sikhnet.com"
        }
      },
      zoroastrian: {
        title: "Zoroastrian Texts",
        description: "Ancient texts of Zoroastrianism including the Avesta",
        features: string[] = [
          "Avesta",
          "Gathas",
          "Historical texts",
          "Ritual instructions"
        ],
        resources: {
          translations: string[] = [
            "Sacred Books of the East",
            "Modern Translations",
            "Academic Editions"
          ],
          commentaries: string[] = [
            "Traditional Commentaries",
            "Modern Analysis",
            "Historical Studies"
          ],
          studyGuides: string[] = [
            "Understanding Avesta",
            "Historical Context",
            "Study Methods"
          ]
        },
        onlineAccess: {
          website: "http://www.avesta.org"
        }
      }
    },
    resourcePages: {
      beginner: {
        title: "Beginner's Path",
        description: "Start your religious learning journey",
        level: "Beginner",
        topics: string[] = [
          "Introduction to World Religions",
          "Basic Religious Concepts",
          "Sacred Text Overview",
          "Prayer and Meditation"
        ],
        materials: string[] = [
          "Introductory Materials",
          "Study Guides",
          "Audio Resources",
          "Video Lectures"
        ],
        studyTips: string[] = [
          "Start with basics",
          "Take it step by step",
          "Join study groups",
          "Ask questions"
        ]
      },
      intermediate: {
        title: "Intermediate Studies",
        description: "Deepen your understanding of religious traditions",
        level: "Intermediate",
        topics: string[] = [
          "Comparative Religion",
          "Religious History",
          "Textual Analysis",
          "Religious Philosophy"
        ],
        materials: string[] = [
          "Academic Works",
          "Research Papers",
          "Commentary Collections",
          "Online Courses"
        ],
        studyTips: string[] = [
          "Compare different perspectives",
          "Study historical context",
          "Develop critical thinking",
          "Engage in discussions"
        ]
      },
      advanced: {
        title: "Advanced Research",
        description: "Explore complex religious topics and academic research",
        level: "Advanced",
        topics: string[] = [
          "Religious Philosophy",
          "Textual Criticism",
          "Theological Studies",
          "Contemporary Issues"
        ],
        materials: string[] = [
          "Academic Journals",
          "Research Databases",
          "Primary Sources",
          "Scholarly Works"
        ],
        studyTips: string[] = [
          "Conduct independent research",
          "Write academic papers",
          "Attend conferences",
          "Build academic networks"
        ]
      }
    },
    history: {
      ancient: {
        title: "Ancient History",
        description: "Explore the roots of faith"
      },
      medieval: {
        title: "Medieval History",
        description: "Discover historical developments"
      },
      modern: {
        title: "Modern History",
        description: "Understand contemporary context"
      }
    },
    buddhist: buddhistTranslations.en
  }
}

export type TranslationKey = keyof LanguageTranslations | 
  \`\${keyof LanguageTranslations}.\${string}\` |
  \`\${keyof LanguageTranslations}.\${string}.\${string}\`
`

  fs.writeFileSync(translationsTsPath, newTranslationsContent, 'utf8')
  console.log('Created new translations file with proper structure')
  
  // Test the build again
  try {
    execSync('npm run build', { stdio: 'inherit' })
    console.log('✅ Build successful with new structure!')
  } catch (finalError) {
    console.log('❌ Still failing. The issue may be deeper in the codebase.')
    console.log('Please check the translations.ts file manually and ensure all imports are correct.')
  }
} 