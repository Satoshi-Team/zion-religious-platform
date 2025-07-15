"use client"

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const routes = [
  {
    title: 'Christianity',
    children: [
      {
        title: 'Theological Topics',
        children: [
          { title: 'Christology', href: '/christianity/christology' },
          { title: 'Soteriology', href: '/christianity/theology/soteriology' },
          { title: 'Ecclesiology', href: '/christianity/theology/ecclesiology' },
          { title: 'Pneumatology', href: '/christianity/theology/pneumatology' },
          { title: 'Eschatology', href: '/christianity/theology/eschatology' }
        ]
      },
      {
        title: 'Historical Periods',
        children: [
          { title: 'Early Church', href: '/religion/christianity/history/early-church' },
          { title: 'Medieval', href: '/religion/christianity/history/medieval' },
          { title: 'Reformation', href: '/religion/christianity/history/reformation' },
          { title: 'Modern', href: '/religion/christianity/history/modern' },
          { title: 'Contemporary', href: '/religion/christianity/history/contemporary' }
        ]
      },
      {
        title: 'Cultural Impact',
        children: [
          { title: 'Art', href: '/religion/christianity/impact/art' },
          { title: 'Literature', href: '/religion/christianity/impact/literature' },
          { title: 'Music', href: '/religion/christianity/impact/music' },
          { title: 'Science', href: '/religion/christianity/impact/science' },
          { title: 'Philosophy', href: '/religion/christianity/impact/philosophy' }
        ]
      }
    ]
  },
  {
    title: 'Islam',
    children: [
      {
        title: 'Islamic Studies',
        children: [
          { title: 'Tawhid', href: '/religion/islam/studies/tawhid' },
          { title: 'Fiqh', href: '/religion/islam/studies/fiqh' },
          { title: 'Shariah', href: '/religion/islam/studies/shariah' },
          { title: 'Tasawwuf', href: '/religion/islam/studies/tasawwuf' },
          { title: 'Aqidah', href: '/religion/islam/studies/aqidah' }
        ]
      },
      {
        title: 'Historical Periods',
        children: [
          { title: 'Early Islam', href: '/religion/islam/history/early-islam' },
          { title: 'Golden Age', href: '/religion/islam/history/golden-age' },
          { title: 'Medieval', href: '/religion/islam/history/medieval' },
          { title: 'Modern', href: '/religion/islam/history/modern' },
          { title: 'Contemporary', href: '/religion/islam/history/contemporary' }
        ]
      },
      {
        title: 'Cultural Impact',
        children: [
          { title: 'Art & Architecture', href: '/religion/islam/impact/art' },
          { title: 'Literature', href: '/religion/islam/impact/literature' },
          { title: 'Science', href: '/religion/islam/impact/science' },
          { title: 'Philosophy', href: '/religion/islam/impact/philosophy' },
          { title: 'Music', href: '/religion/islam/impact/music' }
        ]
      }
    ]
  },
  {
    title: 'Buddhism',
    children: [
      {
        title: 'Buddhist Studies',
        children: [
          { title: 'Four Noble Truths', href: '/religion/buddhism/studies/four-noble-truths' },
          { title: 'Noble Eightfold Path', href: '/religion/buddhism/studies/eightfold-path' },
          { title: 'Buddhist Philosophy', href: '/religion/buddhism/studies/philosophy' },
          { title: 'Schools of Buddhism', href: '/religion/buddhism/studies/schools' },
          { title: 'Buddhist Ethics', href: '/religion/buddhism/studies/ethics' }
        ]
      },
      {
        title: 'Historical Periods',
        children: [
          { title: 'Early Buddhism', href: '/religion/buddhism/history/early-buddhism' },
          { title: 'Classical', href: '/religion/buddhism/history/classical' },
          { title: 'Medieval', href: '/religion/buddhism/history/medieval' },
          { title: 'Modern', href: '/religion/buddhism/history/modern' },
          { title: 'Contemporary', href: '/religion/buddhism/history/contemporary' }
        ]
      },
      {
        title: 'Cultural Impact',
        children: [
          { title: 'Art', href: '/religion/buddhism/impact/art' },
          { title: 'Literature', href: '/religion/buddhism/impact/literature' },
          { title: 'Philosophy', href: '/religion/buddhism/impact/philosophy' },
          { title: 'Psychology', href: '/religion/buddhism/impact/psychology' },
          { title: 'Meditation', href: '/religion/buddhism/impact/meditation' }
        ]
      }
    ]
  },
  {
    title: 'Hinduism',
    children: [
      {
        title: 'Hindu Studies',
        children: [
          { title: 'Vedanta', href: '/religion/hinduism/studies/vedanta' },
          { title: 'Dharma', href: '/religion/hinduism/studies/dharma' },
          { title: 'Karma', href: '/religion/hinduism/studies/karma' },
          { title: 'Moksha', href: '/religion/hinduism/studies/moksha' },
          { title: 'Hindu Philosophy', href: '/religion/hinduism/studies/philosophy' }
        ]
      },
      {
        title: 'Historical Periods',
        children: [
          { title: 'Vedic Period', href: '/religion/hinduism/history/vedic' },
          { title: 'Classical', href: '/religion/hinduism/history/classical' },
          { title: 'Medieval', href: '/religion/hinduism/history/medieval' },
          { title: 'Modern', href: '/religion/hinduism/history/modern' },
          { title: 'Contemporary', href: '/religion/hinduism/history/contemporary' }
        ]
      },
      {
        title: 'Cultural Impact',
        children: [
          { title: 'Art', href: '/religion/hinduism/impact/art' },
          { title: 'Literature', href: '/religion/hinduism/impact/literature' },
          { title: 'Philosophy', href: '/religion/hinduism/impact/philosophy' },
          { title: 'Yoga', href: '/religion/hinduism/impact/yoga' },
          { title: 'Music & Dance', href: '/religion/hinduism/impact/music-dance' }
        ]
      }
    ]
  },
  {
    title: 'Judaism',
    children: [
      {
        title: 'Theological Topics',
        children: [
          { title: 'Monotheism', href: '/religion/judaism/theology/monotheism' },
          { title: 'Covenant', href: '/religion/judaism/theology/covenant' },
          { title: 'Torah', href: '/religion/judaism/theology/torah' },
          { title: 'Messianism', href: '/religion/judaism/theology/messianism' },
          { title: 'Jewish Ethics', href: '/religion/judaism/theology/ethics' }
        ]
      },
      {
        title: 'Historical Periods',
        children: [
          { title: 'Biblical Period', href: '/religion/judaism/history/biblical' },
          { title: 'Second Temple', href: '/religion/judaism/history/second-temple' },
          { title: 'Rabbinic Period', href: '/religion/judaism/history/rabbinic' },
          { title: 'Medieval', href: '/religion/judaism/history/medieval' },
          { title: 'Modern', href: '/religion/judaism/history/modern' }
        ]
      },
      {
        title: 'Cultural Impact',
        children: [
          { title: 'Art', href: '/religion/judaism/impact/art' },
          { title: 'Literature', href: '/religion/judaism/impact/literature' },
          { title: 'Music', href: '/religion/judaism/impact/music' },
          { title: 'Science', href: '/religion/judaism/impact/science' },
          { title: 'Philosophy', href: '/religion/judaism/impact/philosophy' }
        ]
      }
    ]
  },
  {
    title: 'Sikhism',
    children: [
      {
        title: 'Theological Topics',
        children: [
          { title: 'Waheguru and Divine Nature', href: '/religion/sikhism/theology/divine-nature' },
          { title: 'The Guru Tradition', href: '/religion/sikhism/theology/guru-tradition' },
          { title: 'Khalsa and Identity', href: '/religion/sikhism/theology/khalsa-identity' },
          { title: 'Sacred Scripture', href: '/religion/sikhism/theology/sacred-scripture' },
          { title: 'Ethics and Values', href: '/religion/sikhism/theology/ethics-values' }
        ]
      },
      {
        title: 'Historical Periods',
        children: [
          { title: 'Foundation Period', href: '/religion/sikhism/history/foundation' },
          { title: 'Period of the Gurus', href: '/religion/sikhism/history/gurus' },
          { title: 'Sikh Empire', href: '/religion/sikhism/history/empire' },
          { title: 'Colonial Period', href: '/religion/sikhism/history/colonial' },
          { title: 'Modern Period', href: '/religion/sikhism/history/modern' }
        ]
      },
      {
        title: 'Cultural Impact',
        children: [
          { title: 'Art and Architecture', href: '/religion/sikhism/impact/art' },
          { title: 'Literature', href: '/religion/sikhism/impact/literature' },
          { title: 'Music and Kirtan', href: '/religion/sikhism/impact/music' },
          { title: 'Social Institutions', href: '/religion/sikhism/impact/social' },
          { title: 'Global Influence', href: '/religion/sikhism/impact/global' }
        ]
      }
    ]
  },
  {
    title: 'Shinto',
    children: [
      {
        title: 'Theological Topics',
        children: [
          { title: 'Kami and Divinity', href: '/religion/shinto/theology/kami' },
          { title: 'Sacred Space', href: '/religion/shinto/theology/sacred-space' },
          { title: 'Ritual and Worship', href: '/religion/shinto/theology/ritual' },
          { title: 'Purity and Harmony', href: '/religion/shinto/theology/purity' },
          { title: 'Nature and Spirituality', href: '/religion/shinto/theology/nature' }
        ]
      },
      {
        title: 'Historical Periods',
        children: [
          { title: 'Ancient Shinto', href: '/religion/shinto/history/ancient' },
          { title: 'Imperial Period', href: '/religion/shinto/history/imperial' },
          { title: 'Medieval Synthesis', href: '/religion/shinto/history/medieval' },
          { title: 'State Shinto', href: '/religion/shinto/history/state' },
          { title: 'Modern Period', href: '/religion/shinto/history/modern' }
        ]
      },
      {
        title: 'Cultural Impact',
        children: [
          { title: 'Art and Architecture', href: '/religion/shinto/impact/art' },
          { title: 'Festivals and Rituals', href: '/religion/shinto/impact/festivals' },
          { title: 'Literature and Mythology', href: '/religion/shinto/impact/literature' },
          { title: 'Social Practices', href: '/religion/shinto/impact/social' },
          { title: 'Environmental Ethics', href: '/religion/shinto/impact/environment' }
        ]
      }
    ]
  },
  {
    title: 'Taoism',
    children: [
      {
        title: 'Theological Topics',
        children: [
          { title: 'The Tao', href: '/religion/taoism/theology/tao' },
          { title: 'Yin and Yang', href: '/religion/taoism/theology/yin-yang' },
          { title: 'Wu Wei', href: '/religion/taoism/theology/wu-wei' },
          { title: 'Three Treasures', href: '/religion/taoism/theology/three-treasures' },
          { title: 'Immortality', href: '/religion/taoism/theology/immortality' }
        ]
      },
      {
        title: 'Historical Periods',
        children: [
          { title: 'Classical Period', href: '/religion/taoism/history/classical' },
          { title: 'Han Dynasty', href: '/religion/taoism/history/han' },
          { title: 'Six Dynasties', href: '/religion/taoism/history/six-dynasties' },
          { title: 'Tang and Song', href: '/religion/taoism/history/tang-song' },
          { title: 'Modern Period', href: '/religion/taoism/history/modern' }
        ]
      },
      {
        title: 'Cultural Impact',
        children: [
          { title: 'Art and Aesthetics', href: '/religion/taoism/impact/art' },
          { title: 'Literature', href: '/religion/taoism/impact/literature' },
          { title: 'Medicine and Alchemy', href: '/religion/taoism/impact/medicine' },
          { title: 'Martial Arts', href: '/religion/taoism/impact/martial-arts' },
          { title: 'Environmental Thought', href: '/religion/taoism/impact/environment' }
        ]
      }
    ]
  },
  {
    title: 'Bahá\'í Faith',
    children: [
      {
        title: 'Theological Topics',
        children: [
          { title: 'Progressive Revelation', href: '/religion/bahai/theology/progressive-revelation' },
          { title: 'Unity of Religion', href: '/religion/bahai/theology/unity-religion' },
          { title: 'Divine Manifestations', href: '/religion/bahai/theology/manifestations' },
          { title: 'Social Principles', href: '/religion/bahai/theology/social-principles' },
          { title: 'Spiritual Nature', href: '/religion/bahai/theology/spiritual-nature' }
        ]
      },
      {
        title: 'Historical Periods',
        children: [
          { title: 'The Báb', href: '/religion/bahai/history/bab' },
          { title: 'Bahá\'u\'lláh', href: '/religion/bahai/history/bahaullah' },
          { title: 'Abdu\'l-Bahá', href: '/religion/bahai/history/abdul-baha' },
          { title: 'Guardian Period', href: '/religion/bahai/history/guardian' },
          { title: 'Modern Era', href: '/religion/bahai/history/modern' }
        ]
      },
      {
        title: 'Cultural Impact',
        children: [
          { title: 'Architecture', href: '/religion/bahai/impact/architecture' },
          { title: 'Arts and Literature', href: '/religion/bahai/impact/arts' },
          { title: 'Social Development', href: '/religion/bahai/impact/social' },
          { title: 'Education', href: '/religion/bahai/impact/education' },
          { title: 'Global Community', href: '/religion/bahai/impact/global' }
        ]
      }
    ]
  },
  {
    title: 'Confucianism',
    children: [
      {
        title: 'Philosophical Concepts',
        children: [
          { title: 'Ren and Virtue', href: '/religion/confucianism/concepts/ren' },
          { title: 'Li and Ritual', href: '/religion/confucianism/concepts/li' },
          { title: 'Junzi Ideal', href: '/religion/confucianism/concepts/junzi' },
          { title: 'Five Relations', href: '/religion/confucianism/concepts/relations' },
          { title: 'Heaven and Dao', href: '/religion/confucianism/concepts/heaven' }
        ]
      },
      {
        title: 'Historical Periods',
        children: [
          { title: 'Classical Period', href: '/religion/confucianism/history/classical' },
          { title: 'Han Synthesis', href: '/religion/confucianism/history/han' },
          { title: 'Neo-Confucianism', href: '/religion/confucianism/history/neo' },
          { title: 'Modern Revival', href: '/religion/confucianism/history/modern' },
          { title: 'Contemporary', href: '/religion/confucianism/history/contemporary' }
        ]
      },
      {
        title: 'Cultural Impact',
        children: [
          { title: 'Education', href: '/religion/confucianism/impact/education' },
          { title: 'Political Thought', href: '/religion/confucianism/impact/politics' },
          { title: 'Social Structure', href: '/religion/confucianism/impact/society' },
          { title: 'Arts and Literature', href: '/religion/confucianism/impact/arts' },
          { title: 'Modern Influence', href: '/religion/confucianism/impact/influence' }
        ]
      }
    ]
  },
  {
    title: 'Rastafarianism',
    children: [
      {
        title: 'Theological Topics',
        children: [
          { title: 'Jah and Divinity', href: '/religion/rastafari/theology/jah' },
          { title: 'African Heritage', href: '/religion/rastafari/theology/africa' },
          { title: 'Babylon System', href: '/religion/rastafari/theology/babylon' },
          { title: 'Spiritual Practices', href: '/religion/rastafari/theology/practices' },
          { title: 'Sacred Texts', href: '/religion/rastafari/theology/texts' }
        ]
      },
      {
        title: 'Historical Periods',
        children: [
          { title: 'Origins', href: '/religion/rastafari/history/origins' },
          { title: 'Marcus Garvey', href: '/religion/rastafari/history/garvey' },
          { title: 'Haile Selassie', href: '/religion/rastafari/history/selassie' },
          { title: 'Global Spread', href: '/religion/rastafari/history/global' },
          { title: 'Modern Era', href: '/religion/rastafari/history/modern' }
        ]
      },
      {
        title: 'Cultural Impact',
        children: [
          { title: 'Music and Reggae', href: '/religion/rastafari/impact/music' },
          { title: 'Language and Iyaric', href: '/religion/rastafari/impact/language' },
          { title: 'Art and Symbolism', href: '/religion/rastafari/impact/art' },
          { title: 'Social Justice', href: '/religion/rastafari/impact/social' },
          { title: 'Global Influence', href: '/religion/rastafari/impact/global' }
        ]
      }
    ]
  },
  {
    title: 'Jainism',
    children: [
      {
        title: 'Theological Topics',
        children: [
          { title: 'Ahimsa and Non-Violence', href: '/religion/jainism/theology/ahimsa' },
          { title: 'Karma and Liberation', href: '/religion/jainism/theology/karma' },
          { title: 'Anekantavada', href: '/religion/jainism/theology/anekantavada' },
          { title: 'Jiva and Ajiva', href: '/religion/jainism/theology/jiva' },
          { title: 'Five Great Vows', href: '/religion/jainism/theology/vows' }
        ]
      },
      {
        title: 'Historical Periods',
        children: [
          { title: 'Early Jainism', href: '/religion/jainism/history/early' },
          { title: 'Classical Period', href: '/religion/jainism/history/classical' },
          { title: 'Medieval Era', href: '/religion/jainism/history/medieval' },
          { title: 'Colonial Period', href: '/religion/jainism/history/colonial' },
          { title: 'Modern Times', href: '/religion/jainism/history/modern' }
        ]
      },
      {
        title: 'Cultural Impact',
        children: [
          { title: 'Art and Architecture', href: '/religion/jainism/impact/art' },
          { title: 'Literature and Texts', href: '/religion/jainism/impact/literature' },
          { title: 'Science and Mathematics', href: '/religion/jainism/impact/science' },
          { title: 'Environmental Ethics', href: '/religion/jainism/impact/environment' },
          { title: 'Global Influence', href: '/religion/jainism/impact/global' }
        ]
      }
    ]
  }
]

export function TheologicalNav() {
  const pathname = usePathname()
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const toggleSection = (title: string) => {
    setExpandedSections(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    )
  }

  return (
    <nav className="h-full py-6 px-4">
      <div className="space-y-4">
        {routes.map((religion) => (
          <div key={religion.title} className="space-y-2">
            <button
              onClick={() => toggleSection(religion.title)}
              className="flex items-center justify-between w-full text-left font-semibold text-lg hover:text-primary transition-colors"
            >
              {religion.title}
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  expandedSections.includes(religion.title) ? "transform rotate-180" : ""
                )}
              />
            </button>
            {expandedSections.includes(religion.title) && (
              <div className="space-y-4 pl-4">
                {religion.children.map((section) => (
                  <div key={section.title} className="space-y-2">
                    <h3 className="font-medium text-sm text-muted-foreground">
                      {section.title}
                    </h3>
                    <div className="grid gap-1">
                      {section.children.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "text-sm py-1 px-2 rounded-md hover:bg-accent transition-colors",
                            pathname === item.href
                              ? "text-primary font-medium bg-accent"
                              : "text-muted-foreground"
                          )}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
} 