import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { BookOpen, Heart, Lightbulb, Users, Star, Shield, Globe, Eye, Target, Scale, Calendar, MapPin } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: 'Jewish Scriptures | Sacred Texts & Religious Studies',
    description: 'Explore Jewish sacred texts including the Tanakh (Hebrew Bible), Talmud, Midrash, and other important religious writings that form the foundation of Jewish tradition.',
    keywords: 'Jewish scriptures, Tanakh, Torah, Talmud, Midrash, Hebrew Bible, Jewish texts, sacred writings',
    openGraph: {
      title: 'Jewish Scriptures | Sacred Texts & Religious Studies',
      description: 'Explore Jewish sacred texts including the Tanakh (Hebrew Bible), Talmud, Midrash, and other important religious writings that form the foundation of Jewish tradition.',
      type: 'website',
    },
  }
}

export default async function JudaismScripturesPage({ params }: { params: { locale: string } }) {

  const tanakh = [
    {
      section: "Torah (Five Books of Moses)",
      description: "The foundational text of Judaism, containing divine revelation",
      books: [
        {
          name: "Genesis (Bereshit)",
          hebrew: "בראשית",
          content: "Creation, patriarchs, Joseph story",
          themes: ["Creation and origins", "Covenant with Abraham", "Family narratives", "Divine promises"]
        },
        {
          name: "Exodus (Shemot)",
          hebrew: "שמות",
          content: "Egyptian slavery, liberation, Sinai revelation",
          themes: ["Liberation and freedom", "Divine revelation", "Covenant at Sinai", "Divine law"]
        },
        {
          name: "Leviticus (Vayikra)",
          hebrew: "ויקרא",
          content: "Priestly laws, sacrifices, holiness",
          themes: ["Ritual purity", "Sacrificial system", "Holiness codes", "Priestly duties"]
        },
        {
          name: "Numbers (Bamidbar)",
          hebrew: "במדבר",
          content: "Wilderness journey, census, laws",
          themes: ["Wilderness experience", "Divine guidance", "Leadership challenges", "Covenant renewal"]
        },
        {
          name: "Deuteronomy (Devarim)",
          hebrew: "דברים",
          content: "Moses' farewell speeches, law review",
          themes: ["Covenant renewal", "Divine commandments", "Land promise", "Moral instruction"]
        }
      ],
      significance: "Foundation of Jewish law, belief, and practice"
    },
    {
      section: "Nevi'im (Prophets)",
      description: "Historical and prophetic books containing divine messages",
      books: [
        {
          name: "Joshua",
          hebrew: "יהושע",
          content: "Conquest of Canaan, land distribution",
          themes: ["Divine promise fulfillment", "Leadership transition", "Land inheritance", "Covenant faithfulness"]
        },
        {
          name: "Judges",
          hebrew: "שופטים",
          content: "Tribal leadership, cycles of sin and redemption",
          themes: ["Divine deliverance", "Leadership cycles", "Moral decline", "Divine mercy"]
        },
        {
          name: "Samuel I & II",
          hebrew: "שמואל",
          content: "Samuel, Saul, David's reign",
          themes: ["Monarchy establishment", "Divine selection", "Leadership qualities", "Covenant with David"]
        },
        {
          name: "Kings I & II",
          hebrew: "מלכים",
          content: "Solomon, divided kingdom, exile",
          themes: ["Temple building", "Kingdom division", "Prophetic warnings", "Divine judgment"]
        },
        {
          name: "Isaiah",
          hebrew: "ישעיהו",
          content: "Messianic prophecies, divine comfort",
          themes: ["Messianic hope", "Divine comfort", "Social justice", "Universal redemption"]
        },
        {
          name: "Jeremiah",
          hebrew: "ירמיהו",
          content: "Destruction warnings, new covenant",
          themes: ["Divine judgment", "New covenant", "Prophetic suffering", "Hope in exile"]
        },
        {
          name: "Ezekiel",
          hebrew: "יחזקאל",
          content: "Exile prophecies, temple vision",
          themes: ["Divine presence", "Restoration hope", "Individual responsibility", "Temple renewal"]
        },
        {
          name: "Twelve Minor Prophets",
          hebrew: "תרי עשר",
          content: "Hosea through Malachi",
          themes: ["Divine love", "Social justice", "Repentance", "Messianic restoration"]
        }
      ],
      significance: "Guides moral behavior and provides hope for redemption"
    },
    {
      section: "Ketuvim (Writings)",
      description: "Wisdom literature, poetry, and historical books",
      books: [
        {
          name: "Psalms (Tehillim)",
          hebrew: "תהילים",
          content: "Prayers, hymns, spiritual poetry",
          themes: ["Prayer and worship", "Divine praise", "Trust in God", "Spiritual expression"]
        },
        {
          name: "Proverbs (Mishlei)",
          hebrew: "משלי",
          content: "Wisdom sayings, practical guidance",
          themes: ["Practical wisdom", "Fear of God", "Moral instruction", "Life guidance"]
        },
        {
          name: "Job (Iyov)",
          hebrew: "איוב",
          content: "Suffering, divine justice, faith",
          themes: ["Divine justice", "Human suffering", "Faith in adversity", "Divine mystery"]
        },
        {
          name: "Song of Songs (Shir HaShirim)",
          hebrew: "שיר השירים",
          content: "Love poetry, divine-human relationship",
          themes: ["Divine love", "Human love", "Spiritual allegory", "Intimate relationship"]
        },
        {
          name: "Ruth",
          hebrew: "רות",
          content: "Loyalty, redemption, Davidic lineage",
          themes: ["Loyalty and devotion", "Divine providence", "Redemption", "Messianic lineage"]
        },
        {
          name: "Lamentations (Eichah)",
          hebrew: "איכה",
          content: "Destruction of Jerusalem, mourning",
          themes: ["Divine judgment", "Mourning and loss", "Hope in suffering", "Divine mercy"]
        },
        {
          name: "Ecclesiastes (Kohelet)",
          hebrew: "קהלת",
          content: "Meaning of life, wisdom, acceptance",
          themes: ["Life's meaning", "Divine mystery", "Acceptance", "Fear of God"]
        },
        {
          name: "Esther",
          hebrew: "אסתר",
          content: "Purim story, divine providence",
          themes: ["Divine providence", "Jewish survival", "Courage and faith", "Hidden miracles"]
        },
        {
          name: "Daniel",
          hebrew: "דניאל",
          content: "Exile experiences, apocalyptic visions",
          themes: ["Divine sovereignty", "Messianic hope", "Faith in exile", "End times"]
        },
        {
          name: "Ezra-Nehemiah",
          hebrew: "עזרא-נחמיה",
          content: "Return from exile, temple rebuilding",
          themes: ["Restoration", "Covenant renewal", "Leadership", "Divine faithfulness"]
        },
        {
          name: "Chronicles I & II",
          hebrew: "דברי הימים",
          content: "Historical retelling, Davidic dynasty",
          themes: ["Divine history", "Temple worship", "Davidic covenant", "Divine plan"]
        }
      ],
      significance: "Provides wisdom, comfort, and spiritual guidance"
    }
  ]

  const talmud = [
    {
      name: "Mishnah",
      period: "Compiled c. 200 CE",
      description: "Oral law compiled by Rabbi Judah the Prince",
      structure: [
        "Zeraim (Seeds): Agricultural laws and blessings",
        "Moed (Festivals): Sabbath and holiday laws",
        "Nashim (Women): Marriage, divorce, and family law",
        "Nezikin (Damages): Civil and criminal law",
        "Kodashim (Holy Things): Temple and sacrificial laws",
        "Tohorot (Purities): Ritual purity and impurity"
      ],
      significance: "Preserves oral traditions and provides legal framework"
    },
    {
      name: "Babylonian Talmud (Bavli)",
      period: "Compiled c. 500 CE",
      description: "Comprehensive commentary on the Mishnah",
      features: [
        "Gemara: Extensive commentary and discussion",
        "Halakha: Legal rulings and decisions",
        "Aggada: Stories, legends, and moral teachings",
        "Philosophical discussions and debates",
        "Historical and cultural insights"
      ],
      significance: "Primary source for Jewish law and practice"
    },
    {
      name: "Jerusalem Talmud (Yerushalmi)",
      period: "Compiled c. 400 CE",
      description: "Shorter version from the Land of Israel",
      features: [
        "Less comprehensive than Babylonian Talmud",
        "Focus on Palestinian traditions",
        "Earlier compilation date",
        "Different legal perspectives",
        "Historical value for understanding early rabbinic thought"
      ],
      significance: "Important for understanding early rabbinic traditions"
    }
  ]

  const midrash = [
    {
      type: "Halakhic Midrash",
      description: "Legal interpretations and applications",
      examples: [
        "Mekhilta: On Exodus",
        "Sifra: On Leviticus",
        "Sifre: On Numbers and Deuteronomy"
      ],
      purpose: "Derive legal principles from biblical texts"
    },
    {
      type: "Aggadic Midrash",
      description: "Stories, legends, and moral teachings",
      examples: [
        "Midrash Rabbah: Extensive commentary on biblical books",
        "Pirkei de-Rabbi Eliezer: Narrative midrash",
        "Midrash Tanhuma: Popular midrashic collection"
      ],
      purpose: "Provide moral instruction and spiritual insights"
    },
    {
      type: "Contemporary Midrash",
      description: "Modern interpretations and applications",
      examples: [
        "Feminist midrash",
        "Environmental midrash",
        "Social justice midrash",
        "Interfaith midrash"
      ],
      purpose: "Make ancient texts relevant to modern concerns"
    }
  ]

  const otherTexts = [
    {
      category: "Responsa Literature",
      description: "Rabbinic answers to contemporary questions",
      examples: [
        "Responsa of Maimonides",
        "Responsa of Rabbi Joseph Karo",
        "Modern responsa collections"
      ],
      significance: "Ensures Jewish law remains relevant and applicable"
    },
    {
      category: "Kabbalistic Texts",
      description: "Jewish mystical and esoteric literature",
      examples: [
        "Zohar: Central text of Kabbalah",
        "Sefer Yetzirah: Book of Creation",
        "Bahir: Book of Brightness",
        "Works of Isaac Luria"
      ],
      significance: "Provides mystical understanding of divine nature"
    },
    {
      category: "Philosophical Works",
      description: "Jewish philosophical and theological texts",
      examples: [
        "Guide for the Perplexed (Maimonides)",
        "Kuzari (Judah Halevi)",
        "Moreh Nevukhim (Maimonides)",
        "Modern Jewish philosophy"
      ],
      significance: "Integrates Jewish tradition with philosophical inquiry"
    },
    {
      category: "Liturgical Texts",
      description: "Prayer books and liturgical compositions",
      examples: [
        "Siddur: Daily prayer book",
        "Machzor: Holiday prayer book",
        "Piyyutim: Liturgical poetry",
        "Contemporary prayer books"
      ],
      significance: "Guides Jewish worship and spiritual expression"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Jewish Scriptures</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the rich collection of Jewish sacred texts, from the foundational Torah to the extensive 
          Talmud and creative Midrash, forming the comprehensive literary heritage of Judaism.
        </p>
      </div>

      <div className="grid gap-8 mb-12">
        {tanakh.map((section, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-blue-600" />
                <div>
                  <CardTitle className="text-2xl">{section.section}</CardTitle>
                  <CardDescription className="text-lg">{section.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Books and Content
                  </h3>
                  <div className="space-y-4">
                    {section.books.map((book, bookIndex) => (
                      <div key={bookIndex} className="border-l-4 border-blue-200 pl-4">
                        <h4 className="font-semibold text-sm">{book.name} ({book.hebrew})</h4>
                        <p className="text-xs text-muted-foreground mb-1">{book.content}</p>
                        <div className="text-xs">
                          <span className="font-medium">Themes:</span> {book.themes.join(", ")}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    Religious Significance
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {section.significance}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Talmud and Rabbinic Literature</h2>
        <div className="grid gap-6">
          {talmud.map((text, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{text.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {text.period}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Description</h4>
                    <p className="text-sm text-muted-foreground mb-4">{text.description}</p>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {text.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Structure</h4>
                    <ul className="space-y-2">
                      {text.structure?.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">Significance</h4>
                      <p className="text-sm text-muted-foreground">{text.significance}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Midrash and Interpretation</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {midrash.map((type, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{type.type}</CardTitle>
                <CardDescription>{type.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm text-muted-foreground mb-3">Examples</h4>
                <ul className="space-y-2 mb-4">
                  {type.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="font-semibold text-sm text-muted-foreground mb-2">Purpose</h4>
                <p className="text-sm text-muted-foreground">{type.purpose}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Additional Sacred Texts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {otherTexts.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{category.category}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm text-muted-foreground mb-3">Examples</h4>
                <ul className="space-y-2 mb-4">
                  {category.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="font-semibold text-sm text-muted-foreground mb-2">Significance</h4>
                <p className="text-sm text-muted-foreground">{category.significance}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Explore More About Judaism</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/religion/judaism/overview`}>
              Jewish Overview
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/religion/judaism/practices`}>
              Jewish Practices
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/religion/judaism/history`}>
              Jewish History
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/religion/judaism/teachings`}>
              Jewish Teachings
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 