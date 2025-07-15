import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { BookOpen, Heart, Lightbulb, Users, Star, Shield, Globe, Eye, Target, Scale } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: 'Jewish Teachings | Sacred Texts & Religious Studies',
    description: 'Explore Jewish ethical teachings, moral principles, wisdom literature, and educational traditions that guide Jewish life and values.',
    keywords: 'Jewish teachings, Jewish ethics, moral principles, wisdom literature, Jewish values, ethical monotheism, Jewish education',
    openGraph: {
      title: 'Jewish Teachings | Sacred Texts & Religious Studies',
      description: 'Explore Jewish ethical teachings, moral principles, wisdom literature, and educational traditions that guide Jewish life and values.',
      type: 'website',
    },
  }
}

export default async function JudaismTeachingsPage({ params }: { params: { locale: string } }) {

  const coreTeachings = [
    {
      title: "Ethical Monotheism",
      description: "The belief that ethical behavior is central to serving the one God",
      keyPrinciples: [
        "God as the source of all morality",
        "Divine commandments as moral guide",
        "Justice and righteousness as divine attributes",
        "Human responsibility for ethical action",
        "Universal moral standards"
      ],
      biblicalBasis: "Micah 6:8: 'What does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God?'",
      significance: "Establishes the foundation for Jewish moral and ethical behavior"
    },
    {
      title: "Tikkun Olam (Repairing the World)",
      description: "The responsibility to improve and perfect the world",
      keyPrinciples: [
        "Social justice and community welfare",
        "Environmental stewardship",
        "Charity and acts of loving-kindness",
        "Education and knowledge sharing",
        "Peace and reconciliation"
      ],
      biblicalBasis: "Genesis 1:28: 'Be fruitful and multiply, and fill the earth and subdue it'",
      significance: "Calls Jews to be active partners in God's ongoing creation"
    },
    {
      title: "Kedushah (Holiness)",
      description: "Striving for holiness in everyday life",
      keyPrinciples: [
        "Sanctification of time and space",
        "Elevation of mundane activities",
        "Separation for divine purpose",
        "Moral purity and ethical behavior",
        "Spiritual growth and development"
      ],
      biblicalBasis: "Leviticus 19:2: 'You shall be holy, for I the Lord your God am holy'",
      significance: "Transforms ordinary life into sacred service"
    },
    {
      title: "Tzedakah (Righteousness)",
      description: "The obligation to give charity and pursue justice",
      keyPrinciples: [
        "Mandatory giving to those in need",
        "Justice for the poor and vulnerable",
        "Fair business practices",
        "Community responsibility",
        "Anonymous giving preferred"
      ],
      biblicalBasis: "Deuteronomy 15:7-8: 'If there is among you anyone in need... do not be hard-hearted or tight-fisted toward your needy neighbor'",
      significance: "Ensures social justice and community welfare"
    },
    {
      title: "Torah Study (Talmud Torah)",
      description: "The lifelong pursuit of learning and wisdom",
      keyPrinciples: [
        "Study as divine commandment",
        "Lifelong learning and growth",
        "Teaching others what one learns",
        "Integration of study and practice",
        "Respect for teachers and scholars"
      ],
      biblicalBasis: "Deuteronomy 6:7: 'Recite them to your children and talk about them when you are at home and when you are away'",
      significance: "Preserves and transmits Jewish knowledge and values"
    }
  ]

  const wisdomLiterature = [
    {
      title: "Proverbs (Mishlei)",
      period: "Biblical Period",
      keyThemes: [
        "Practical wisdom for daily living",
        "Fear of the Lord as beginning of wisdom",
        "Righteousness vs. wickedness",
        "Family relationships and parenting",
        "Work ethic and financial responsibility"
      ],
      famousPassages: [
        "Proverbs 1:7: 'The fear of the Lord is the beginning of knowledge'",
        "Proverbs 3:5-6: 'Trust in the Lord with all your heart'",
        "Proverbs 22:6: 'Train children in the right way'"
      ],
      influence: "Foundation for Jewish practical wisdom and ethical living"
    },
    {
      title: "Ecclesiastes (Kohelet)",
      period: "Biblical Period",
      keyThemes: [
        "Meaning and purpose in life",
        "Vanity of material pursuits",
        "Acceptance of life's mysteries",
        "Joy in simple pleasures",
        "Fear of God as ultimate wisdom"
      ],
      famousPassages: [
        "Ecclesiastes 1:2: 'Vanity of vanities, all is vanity'",
        "Ecclesiastes 3:1: 'For everything there is a season'",
        "Ecclesiastes 12:13: 'Fear God, and keep his commandments'"
      ],
      influence: "Teaches acceptance and finding meaning in life's cycles"
    },
    {
      title: "Pirkei Avot (Ethics of the Fathers)",
      period: "Talmudic Period",
      keyThemes: [
        "Rabbinic wisdom and ethical teachings",
        "Character development and moral virtues",
        "Study and teaching of Torah",
        "Interpersonal relationships",
        "Spiritual growth and self-improvement"
      ],
      famousPassages: [
        "Pirkei Avot 1:2: 'The world stands on three things: Torah, worship, and acts of loving-kindness'",
        "Pirkei Avot 2:5: 'In a place where there are no men, strive to be a man'",
        "Pirkei Avot 4:1: 'Who is wise? One who learns from everyone'"
      ],
      influence: "Core text for Jewish ethical education and character development"
    },
    {
      title: "Psalms (Tehillim)",
      period: "Biblical Period",
      keyThemes: [
        "Prayer and spiritual expression",
        "Trust in God during adversity",
        "Gratitude and thanksgiving",
        "Justice and divine protection",
        "Personal and communal worship"
      ],
      famousPassages: [
        "Psalm 23: 'The Lord is my shepherd'",
        "Psalm 27: 'The Lord is my light and my salvation'",
        "Psalm 100: 'Make a joyful noise to the Lord'"
      ],
      influence: "Model for Jewish prayer and spiritual expression"
    }
  ]

  const moralPrinciples = [
    {
      principle: "Kavod HaBriyot (Human Dignity)",
      description: "Respect for the inherent dignity of every human being",
      applications: [
        "Treating all people with respect regardless of status",
        "Protecting human rights and dignity",
        "Avoiding embarrassment or humiliation",
        "Honoring the elderly and vulnerable",
        "Respecting differences and diversity"
      ]
    },
    {
      principle: "Shalom Bayit (Peace in the Home)",
      description: "Promoting harmony and peace in family and community",
      applications: [
        "Resolving conflicts peacefully",
        "Maintaining family harmony",
        "Building strong relationships",
        "Avoiding gossip and slander",
        "Promoting community unity"
      ]
    },
    {
      principle: "Bal Tashchit (Do Not Destroy)",
      description: "Environmental stewardship and responsible resource use",
      applications: [
        "Conserving natural resources",
        "Avoiding unnecessary waste",
        "Protecting the environment",
        "Sustainable living practices",
        "Respect for God's creation"
      ]
    },
    {
      principle: "Pikuach Nefesh (Saving Life)",
      description: "The supreme value of preserving human life",
      applications: [
        "Medical care and healing",
        "Emergency assistance",
        "Protecting life over ritual observance",
        "Suicide prevention",
        "Public health and safety"
      ]
    }
  ]

  const educationalTraditions = [
    {
      tradition: "Cheder and Yeshiva",
      description: "Traditional Jewish educational institutions",
      features: [
        "Torah study from early childhood",
        "Memorization and recitation",
        "Rabbinic mentorship and guidance",
        "Textual analysis and interpretation",
        "Integration of study and prayer"
      ],
      significance: "Preserves Jewish learning and creates knowledgeable community members"
    },
    {
      tradition: "Chavruta Study",
      description: "Paired learning and collaborative study",
      features: [
        "Study partners working together",
        "Active discussion and debate",
        "Mutual teaching and learning",
        "Deep textual engagement",
        "Building relationships through study"
      ],
      significance: "Fosters deep understanding and community bonds"
    },
    {
      tradition: "Midrash and Interpretation",
      description: "Creative interpretation of sacred texts",
      features: [
        "Multiple layers of meaning",
        "Application to contemporary life",
        "Storytelling and narrative",
        "Ethical and moral lessons",
        "Continuous relevance of ancient texts"
      ],
      significance: "Keeps ancient texts relevant and meaningful"
    },
    {
      tradition: "Lifelong Learning",
      description: "Continuous education throughout life",
      features: [
        "Study at all ages and stages",
        "Integration of learning and practice",
        "Teaching others what one learns",
        "Adaptation to changing circumstances",
        "Preservation of wisdom for future generations"
      ],
      significance: "Ensures transmission of Jewish knowledge and values"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Jewish Teachings</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover the rich ethical teachings, moral principles, and wisdom traditions of Judaism that guide 
          Jewish life and provide timeless insights for human flourishing and spiritual growth.
        </p>
      </div>

      <div className="grid gap-8 mb-12">
        {coreTeachings.map((teaching, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6 text-green-600" />
                <div>
                  <CardTitle className="text-2xl">{teaching.title}</CardTitle>
                  <CardDescription className="text-lg">{teaching.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    Key Principles
                  </h3>
                  <ul className="space-y-2">
                    {teaching.keyPrinciples.map((principle, principleIndex) => (
                      <li key={principleIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-blue-500" />
                    Biblical Basis
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    {teaching.biblicalBasis}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    Significance
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {teaching.significance}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Wisdom Literature</h2>
        <div className="grid gap-6">
          {wisdomLiterature.map((text, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{text.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      {text.period}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">{text.keyThemes.length} Themes</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Key Themes</h4>
                    <ul className="space-y-2">
                      {text.keyThemes.map((theme, themeIndex) => (
                        <li key={themeIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{theme}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Famous Passages</h4>
                    <ul className="space-y-2">
                      {text.famousPassages.map((passage, passageIndex) => (
                        <li key={passageIndex} className="text-sm italic text-muted-foreground">
                          "{passage}"
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">Influence</h4>
                  <p className="text-sm text-muted-foreground">{text.influence}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Moral Principles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {moralPrinciples.map((principle, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Scale className="h-5 w-5 text-purple-500" />
                  {principle.principle}
                </CardTitle>
                <CardDescription>{principle.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm text-muted-foreground mb-3">Practical Applications</h4>
                <ul className="space-y-2">
                  {principle.applications.map((application, appIndex) => (
                    <li key={appIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{application}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Educational Traditions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {educationalTraditions.map((tradition, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-500" />
                  {tradition.tradition}
                </CardTitle>
                <CardDescription>{tradition.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {tradition.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">Significance</h4>
                    <p className="text-sm text-muted-foreground">{tradition.significance}</p>
                  </div>
                </div>
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
            <Link href={`/${params.locale}/religion/judaism/scriptures`}>
              Jewish Scriptures
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
        </div>
      </div>
    </div>
  )
} 