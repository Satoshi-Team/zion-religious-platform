import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { BookOpen, Heart, Lightbulb, Users, Star, Shield, Globe, Eye, Target, Scale, Calendar, MapPin } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: 'Judaism Overview | Sacred Texts & Religious Studies',
    description: 'Explore Judaism, one of the world\'s oldest monotheistic religions, including its beliefs, practices, history, and profound influence on world civilization.',
    keywords: 'Judaism, Jewish religion, monotheism, Jewish beliefs, Jewish practices, Torah, Jewish history, Jewish culture',
    openGraph: {
      title: 'Judaism Overview | Sacred Texts & Religious Studies',
      description: 'Explore Judaism, one of the world\'s oldest monotheistic religions, including its beliefs, practices, history, and profound influence on world civilization.',
      type: 'website',
    },
  }
}

export default async function JudaismOverviewPage({ params }: { params: { locale: string } }) {

  const coreBeliefs = [
    {
      belief: "Monotheism (Yichud Hashem)",
      description: "Belief in one God, unique and indivisible",
      details: [
        "Absolute unity of God (Echad)",
        "No physical form or limitations",
        "Transcendent yet immanent",
        "Creator and sustainer of all existence",
        "Source of all morality and law"
      ],
      significance: "Forms the foundation of Jewish identity and distinguishes Judaism from polytheistic religions"
    },
    {
      belief: "Covenant (Brit)",
      description: "Sacred agreement between God and the Jewish people",
      details: [
        "Abrahamic Covenant: Promise of land and descendants",
        "Sinaitic Covenant: Torah and commandments",
        "Davidic Covenant: Eternal dynasty",
        "Mutual obligations and responsibilities",
        "Covenant renewal and faithfulness"
      ],
      significance: "Defines the special relationship between God and Israel, creating a chosen people with divine purpose"
    },
    {
      belief: "Torah Study (Talmud Torah)",
      description: "Lifelong pursuit of learning and wisdom",
      details: [
        "Study as divine commandment",
        "Written Torah (Five Books of Moses)",
        "Oral Torah (Talmud and commentaries)",
        "Teaching others what one learns",
        "Integration of study and practice"
      ],
      significance: "Preserves and transmits Jewish knowledge and values across generations"
    },
    {
      belief: "Tikkun Olam (Repairing the World)",
      description: "Responsibility to improve and perfect the world",
      details: [
        "Social justice and community welfare",
        "Environmental stewardship",
        "Charity and acts of loving-kindness",
        "Education and knowledge sharing",
        "Peace and reconciliation"
      ],
      significance: "Calls Jews to be active partners in God's ongoing creation"
    },
    {
      belief: "Messianic Hope (Mashiach)",
      description: "Belief in a future redeemer and messianic age",
      details: [
        "Davidic lineage and leadership",
        "Restoration of Israel and Temple",
        "Universal peace and justice",
        "Resurrection of the dead",
        "Divine revelation and knowledge"
      ],
      significance: "Provides hope for ultimate redemption and the fulfillment of divine promises"
    }
  ]

  const sacredTexts = [
    {
      text: "Tanakh (Hebrew Bible)",
      description: "The sacred scriptures of Judaism",
      components: [
        "Torah (Five Books of Moses): Genesis, Exodus, Leviticus, Numbers, Deuteronomy",
        "Nevi'im (Prophets): Historical and prophetic books",
        "Ketuvim (Writings): Psalms, Proverbs, Job, and other wisdom literature"
      ],
      significance: "Foundation of Jewish belief, practice, and identity"
    },
    {
      text: "Talmud",
      description: "The central text of rabbinic Judaism",
      components: [
        "Mishnah: Oral law compiled by Rabbi Judah the Prince (c. 200 CE)",
        "Gemara: Commentary and discussion on the Mishnah",
        "Babylonian Talmud: More comprehensive and authoritative",
        "Jerusalem Talmud: Shorter version from the Land of Israel"
      ],
      significance: "Guides Jewish practice and provides framework for interpretation"
    },
    {
      text: "Midrash",
      description: "Creative interpretation and commentary on biblical texts",
      components: [
        "Halakhic Midrash: Legal interpretations and applications",
        "Aggadic Midrash: Stories, legends, and moral teachings",
        "Multiple layers of meaning and contemporary relevance",
        "Preservation of oral traditions and wisdom"
      ],
      significance: "Keeps ancient texts relevant and meaningful for each generation"
    },
    {
      text: "Responsa Literature",
      description: "Rabbinic answers to contemporary questions",
      components: [
        "Application of Jewish law to new situations",
        "Adaptation to changing circumstances",
        "Preservation of halakhic tradition",
        "Guidance for Jewish communities worldwide"
      ],
      significance: "Ensures Jewish law remains relevant and applicable"
    }
  ]

  const religiousPractices = [
    {
      practice: "Daily Prayer (Tefillah)",
      description: "Three daily prayer services",
      details: [
        "Shacharit: Morning prayer service",
        "Mincha: Afternoon prayer service",
        "Ma'ariv: Evening prayer service",
        "Amidah: Central prayer with 19 blessings",
        "Shema: Declaration of faith recited twice daily"
      ],
      significance: "Maintains connection with God and community"
    },
    {
      practice: "Sabbath (Shabbat)",
      description: "Day of rest and spiritual renewal",
      details: [
        "Observed from Friday sunset to Saturday night",
        "Candle lighting and kiddush (sanctification)",
        "Three festive meals with family and community",
        "Study of Torah and Jewish texts",
        "Rest from creative work and technology"
      ],
      significance: "Sanctifies time and provides spiritual refreshment"
    },
    {
      practice: "Kashrut (Dietary Laws)",
      description: "Jewish dietary regulations",
      details: [
        "Separation of meat and dairy products",
        "Only kosher animals (split hooves, chew cud)",
        "Ritual slaughter (shechita) requirements",
        "Passover dietary restrictions",
        "Certification and supervision systems"
      ],
      significance: "Elevates eating to a spiritual act and maintains Jewish identity"
    },
    {
      practice: "Life Cycle Rituals",
      description: "Sacred ceremonies marking life transitions",
      details: [
        "Brit Milah: Circumcision for boys on 8th day",
        "Bar/Bat Mitzvah: Coming of age at 13/12",
        "Marriage: Kiddushin and nissuin ceremonies",
        "Death and mourning: Shiva, shloshim, yahrzeit",
        "Conversion: Process of joining the Jewish people"
      ],
      significance: "Marks important transitions and strengthens community bonds"
    }
  ]

  const majorHolidays = [
    {
      holiday: "Rosh Hashanah",
      period: "September/October",
      description: "Jewish New Year and Day of Judgment",
      practices: [
        "Blowing the shofar (ram's horn)",
        "Special prayers and synagogue services",
        "Tashlich: Casting sins into water",
        "Festive meals with symbolic foods",
        "Reflection and repentance"
      ]
    },
    {
      holiday: "Yom Kippur",
      period: "September/October",
      description: "Day of Atonement and fasting",
      practices: [
        "25-hour fast from food and drink",
        "Intensive prayer and repentance",
        "White clothing symbolizing purity",
        "Kol Nidre service on eve",
        "Neilah: Closing service"
      ]
    },
    {
      holiday: "Sukkot",
      period: "September/October",
      description: "Festival of Booths and harvest",
      practices: [
        "Building and dwelling in sukkah",
        "Four species (lulav, etrog, hadass, aravah)",
        "Festive meals in the sukkah",
        "Simchat Torah: Rejoicing with the Torah",
        "Harvest celebration and gratitude"
      ]
    },
    {
      holiday: "Passover (Pesach)",
      period: "March/April",
      description: "Festival of freedom and redemption",
      practices: [
        "Seder meal with symbolic foods",
        "Matzah: Unleavened bread",
        "Retelling of Exodus story",
        "Removal of chametz (leavened products)",
        "Family gatherings and traditions"
      ]
    },
    {
      holiday: "Shavuot",
      period: "May/June",
      description: "Festival of Weeks and receiving Torah",
      practices: [
        "All-night Torah study (Tikkun Leil Shavuot)",
        "Reading of Book of Ruth",
        "Dairy foods and special meals",
        "Decoration with flowers and greenery",
        "Celebration of Torah and learning"
      ]
    }
  ]

  const denominations = [
    {
      denomination: "Orthodox Judaism",
      description: "Traditional observance of Jewish law",
      characteristics: [
        "Strict adherence to halakha (Jewish law)",
        "Separation of men and women in prayer",
        "Traditional gender roles and practices",
        "Emphasis on Torah study and observance",
        "Resistance to modern innovations"
      ],
      population: "Approximately 10% of world Jewry"
    },
    {
      denomination: "Conservative Judaism",
      description: "Balanced approach to tradition and modernity",
      characteristics: [
        "Historical-critical approach to texts",
        "Egalitarian prayer services",
        "Selective adaptation to modernity",
        "Emphasis on Jewish peoplehood",
        "Commitment to halakha with flexibility"
      ],
      population: "Approximately 18% of American Jewry"
    },
    {
      denomination: "Reform Judaism",
      description: "Progressive approach emphasizing individual choice",
      characteristics: [
        "Individual autonomy in religious practice",
        "Egalitarian and inclusive approach",
        "Emphasis on social justice and ethics",
        "Modern interpretation of tradition",
        "Integration with contemporary culture"
      ],
      population: "Approximately 35% of American Jewry"
    },
    {
      denomination: "Reconstructionist Judaism",
      description: "Judaism as evolving religious civilization",
      characteristics: [
        "Judaism as culture and civilization",
        "Democratic approach to religious decisions",
        "Emphasis on community and peoplehood",
        "Integration of tradition and modernity",
        "Focus on Jewish values and ethics"
      ],
      population: "Small but growing movement"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Judaism Overview</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover Judaism, one of the world's oldest monotheistic religions, with its rich traditions, 
          profound ethical teachings, and enduring influence on human civilization and spiritual thought.
        </p>
      </div>

      <div className="grid gap-8 mb-12">
        {coreBeliefs.map((belief, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
              <div className="flex items-center gap-3">
                <Star className="h-6 w-6 text-blue-600" />
                <div>
                  <CardTitle className="text-2xl">{belief.belief}</CardTitle>
                  <CardDescription className="text-lg">{belief.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    Key Elements
                  </h3>
                  <ul className="space-y-2">
                    {belief.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    Religious Significance
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {belief.significance}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Sacred Texts</h2>
        <div className="grid gap-6">
          {sacredTexts.map((text, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{text.text}</CardTitle>
                <CardDescription>{text.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Components</h4>
                    <ul className="space-y-2">
                      {text.components.map((component, compIndex) => (
                        <li key={compIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{component}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Significance</h4>
                    <p className="text-sm text-muted-foreground">{text.significance}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Religious Practices</h2>
        <div className="grid gap-6">
          {religiousPractices.map((practice, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{practice.practice}</CardTitle>
                <CardDescription>{practice.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Key Elements</h4>
                    <ul className="space-y-2">
                      {practice.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Spiritual Significance</h4>
                    <p className="text-sm text-muted-foreground">{practice.significance}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Major Holidays</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {majorHolidays.map((holiday, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{holiday.holiday}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {holiday.period}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{holiday.description}</p>
                <h4 className="font-semibold text-sm text-muted-foreground mb-2">Practices</h4>
                <ul className="space-y-1">
                  {holiday.practices.map((practice, practiceIndex) => (
                    <li key={practiceIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-xs">{practice}</span>
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
        <h2 className="text-3xl font-bold mb-8 text-center">Jewish Denominations</h2>
        <div className="grid gap-6">
          {denominations.map((denomination, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{denomination.denomination}</CardTitle>
                    <CardDescription>{denomination.description}</CardDescription>
                  </div>
                  <Badge variant="secondary">{denomination.population}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-sm text-muted-foreground mb-3">Characteristics</h4>
                <ul className="space-y-2">
                  {denomination.characteristics.map((characteristic, charIndex) => (
                    <li key={charIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{characteristic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Explore More About Judaism</h2>
        <div className="flex flex-wrap justify-center gap-4">
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