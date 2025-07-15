import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { BookOpen, Heart, Lightbulb, Users, Star, Shield, Globe, Eye } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: 'Jewish Theology | Sacred Texts & Religious Studies',
    description: 'Explore Jewish theological concepts including monotheism, divine attributes, covenant theology, and philosophical developments from biblical to modern times.',
    keywords: 'Jewish theology, monotheism, divine attributes, covenant, Jewish philosophy, God in Judaism, Jewish beliefs, theological concepts',
    openGraph: {
      title: 'Jewish Theology | Sacred Texts & Religious Studies',
      description: 'Explore Jewish theological concepts including monotheism, divine attributes, covenant theology, and philosophical developments from biblical to modern times.',
      type: 'website',
    },
  }
}

export default async function JudaismTheologyPage({ params }: { params: { locale: string } }) {

  const theologicalConcepts = [
    {
      title: "Monotheism (Yichud Hashem)",
      description: "The fundamental belief in one God, unique and indivisible",
      keyAspects: [
        "Absolute unity of God (Echad)",
        "No physical form or limitations",
        "Transcendent yet immanent",
        "Creator and sustainer of all existence",
        "Source of all morality and law"
      ],
      biblicalBasis: "Shema Yisrael: 'Hear, O Israel: The Lord our God, the Lord is One' (Deuteronomy 6:4)",
      significance: "Forms the foundation of Jewish identity and distinguishes Judaism from polytheistic religions"
    },
    {
      title: "Divine Attributes (Sefirot)",
      description: "Understanding God's nature through His revealed characteristics",
      keyAspects: [
        "Mercy (Chesed) and Justice (Din)",
        "Wisdom (Chokhmah) and Understanding (Binah)",
        "Compassion (Rachamim) and Power (Gevurah)",
        "Presence (Shekhinah) and Kingship (Malchut)",
        "Eternality and Omniscience"
      ],
      biblicalBasis: "Exodus 34:6-7: 'The Lord, the Lord, a God merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness'",
      significance: "Provides framework for understanding God's relationship with humanity and creation"
    },
    {
      title: "Covenant (Brit)",
      description: "The sacred agreement between God and the Jewish people",
      keyAspects: [
        "Abrahamic Covenant: Promise of land and descendants",
        "Sinaitic Covenant: Torah and commandments",
        "Davidic Covenant: Eternal dynasty",
        "Mutual obligations and responsibilities",
        "Covenant renewal and faithfulness"
      ],
      biblicalBasis: "Genesis 17:7: 'I will establish my covenant between me and you and your descendants after you throughout their generations'",
      significance: "Defines the special relationship between God and Israel, creating a chosen people with divine purpose"
    },
    {
      title: "Divine Providence (Hashgachah)",
      description: "God's ongoing involvement in human affairs and history",
      keyAspects: [
        "Individual providence and care",
        "Collective providence for the Jewish people",
        "Miracles and natural law",
        "Free will and divine guidance",
        "Reward and punishment"
      ],
      biblicalBasis: "Psalm 145:9: 'The Lord is good to all, and his mercy is over all that he has made'",
      significance: "Assures believers of God's presence and care while maintaining human responsibility"
    },
    {
      title: "Messianic Hope (Mashiach)",
      description: "Belief in a future redeemer and messianic age",
      keyAspects: [
        "Davidic lineage and leadership",
        "Restoration of Israel and Temple",
        "Universal peace and justice",
        "Resurrection of the dead",
        "Divine revelation and knowledge"
      ],
      biblicalBasis: "Isaiah 11:1-9: 'A shoot shall come out from the stump of Jesse, and a branch shall grow out of his roots'",
      significance: "Provides hope for ultimate redemption and the fulfillment of divine promises"
    }
  ]

  const philosophicalSchools = [
    {
      name: "Biblical Theology",
      period: "Biblical Period",
      keyThinkers: "Biblical prophets and sages",
      coreIdeas: [
        "Direct divine revelation and prophecy",
        "Covenant relationship with God",
        "Ethical monotheism and social justice",
        "Divine justice and human responsibility",
        "Messianic hope and eschatology"
      ],
      influence: "Foundation for all subsequent Jewish theological development"
    },
    {
      name: "Rabbinic Theology",
      period: "Talmudic Period (70-500 CE)",
      keyThinkers: "Rabbis of the Mishnah and Talmud",
      coreIdeas: [
        "Oral Torah and rabbinic authority",
        "Halakhic interpretation and application",
        "Divine-human partnership in creation",
        "Study of Torah as divine service",
        "Community and individual responsibility"
      ],
      influence: "Established the framework for Jewish religious practice and interpretation"
    },
    {
      name: "Medieval Jewish Philosophy",
      period: "Medieval Period (800-1500 CE)",
      keyThinkers: "Maimonides, Saadia Gaon, Judah Halevi",
      coreIdeas: [
        "Integration of reason and revelation",
        "Negative theology and divine attributes",
        "Creation ex nihilo and divine unity",
        "Prophetology and divine knowledge",
        "Harmony of Torah and philosophy"
      ],
      influence: "Synthesized Jewish tradition with Greek and Islamic philosophy"
    },
    {
      name: "Kabbalistic Theology",
      period: "Medieval to Early Modern",
      keyThinkers: "Zohar authors, Isaac Luria, Baal Shem Tov",
      coreIdeas: [
        "Divine emanations (Sefirot)",
        "Tzimtzum (divine contraction)",
        "Tikkun Olam (cosmic repair)",
        "Mystical interpretation of Torah",
        "Divine sparks in creation"
      ],
      influence: "Revolutionized Jewish spirituality and mystical experience"
    },
    {
      name: "Modern Jewish Theology",
      period: "19th-21st Centuries",
      keyThinkers: "Hermann Cohen, Martin Buber, Abraham Joshua Heschel",
      coreIdeas: [
        "Ethical monotheism and social justice",
        "I-Thou relationship with God",
        "Prophetic Judaism and human dignity",
        "Interfaith dialogue and pluralism",
        "Jewish peoplehood and continuity"
      ],
      influence: "Adapted Jewish theology to modern challenges and opportunities"
    }
  ]

  const theologicalThemes = [
    {
      theme: "Divine-Human Relationship",
      description: "The dynamic interaction between God and humanity",
      aspects: [
        "Prayer and worship as dialogue",
        "Divine commandments and human response",
        "Partnership in creation and redemption",
        "Divine love and human love of God",
        "Service to God through service to others"
      ]
    },
    {
      theme: "Ethics and Morality",
      description: "The moral dimension of Jewish theology",
      aspects: [
        "Divine commandments as moral guide",
        "Justice and righteousness (Tzedek)",
        "Compassion and loving-kindness (Chesed)",
        "Human dignity and divine image",
        "Social responsibility and community welfare"
      ]
    },
    {
      theme: "Suffering and Theodicy",
      description: "Understanding suffering in light of divine justice",
      aspects: [
        "Free will and divine justice",
        "Suffering as purification and growth",
        "Mystery of divine providence",
        "Collective and individual suffering",
        "Hope and redemption in adversity"
      ]
    },
    {
      theme: "Creation and Purpose",
      description: "Understanding the purpose of creation and human existence",
      aspects: [
        "Creation as divine act of love",
        "Human role as God's partner",
        "Tikkun Olam (repairing the world)",
        "Divine purpose in history",
        "Ultimate redemption and perfection"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Jewish Theology</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the rich theological traditions of Judaism, from biblical monotheism through medieval philosophy 
          to modern theological developments, revealing the depth and complexity of Jewish understanding of God and existence.
        </p>
      </div>

      <div className="grid gap-8 mb-12">
        {theologicalConcepts.map((concept, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950">
              <div className="flex items-center gap-3">
                <Star className="h-6 w-6 text-purple-600" />
                <div>
                  <CardTitle className="text-2xl">{concept.title}</CardTitle>
                  <CardDescription className="text-lg">{concept.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    Key Aspects
                  </h3>
                  <ul className="space-y-2">
                    {concept.keyAspects.map((aspect, aspectIndex) => (
                      <li key={aspectIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{aspect}</span>
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
                    {concept.biblicalBasis}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    Theological Significance
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {concept.significance}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Philosophical Schools</h2>
        <div className="grid gap-6">
          {philosophicalSchools.map((school, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{school.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      {school.period}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">{school.keyThinkers}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Core Ideas</h4>
                    <ul className="space-y-2">
                      {school.coreIdeas.map((idea, ideaIndex) => (
                        <li key={ideaIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{idea}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Historical Influence</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {school.influence}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Theological Themes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {theologicalThemes.map((theme, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Eye className="h-5 w-5 text-green-500" />
                  {theme.theme}
                </CardTitle>
                <CardDescription>{theme.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {theme.aspects.map((aspect, aspectIndex) => (
                    <li key={aspectIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{aspect}</span>
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
        <h2 className="text-3xl font-bold mb-8 text-center">Contemporary Theological Challenges</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-blue-500" />
                Modernity and Tradition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Balancing traditional Jewish beliefs with modern scientific understanding, 
                secular values, and contemporary ethical challenges.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-500" />
                Pluralism and Identity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Maintaining Jewish theological distinctiveness while engaging in interfaith 
                dialogue and respecting religious diversity.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-purple-500" />
                Holocaust and Theodicy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Reconciling belief in a just and loving God with the horrors of the Holocaust 
                and other instances of human suffering.
              </p>
            </CardContent>
          </Card>
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