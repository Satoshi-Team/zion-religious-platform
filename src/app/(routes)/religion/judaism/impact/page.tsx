import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { BookOpen, Heart, Lightbulb, Users, Star, Shield, Globe, Eye, Target, Scale, Award, Zap } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: 'Jewish Impact | Sacred Texts & Religious Studies',
    description: 'Explore Judaism\'s profound impact on world civilization, including its influence on monotheism, ethics, culture, science, philosophy, and social justice movements.',
    keywords: 'Jewish impact, Jewish contributions, monotheism, Jewish culture, Jewish philosophy, social justice, Jewish influence, world civilization',
    openGraph: {
      title: 'Jewish Impact | Sacred Texts & Religious Studies',
      description: 'Explore Judaism\'s profound impact on world civilization, including its influence on monotheism, ethics, culture, science, philosophy, and social justice movements.',
      type: 'website',
    },
  }
}

export default async function JudaismImpactPage({ params }: { params: { locale: string } }) {

  const religiousImpact = [
    {
      title: "Monotheism",
      description: "Judaism introduced the revolutionary concept of one God to the world",
      contributions: [
        "First systematic monotheistic religion",
        "Influenced Christianity and Islam",
        "Concept of ethical monotheism",
        "Divine unity and transcendence",
        "Covenant relationship with God"
      ],
      globalInfluence: "Formed the foundation for the world's three major monotheistic religions",
      significance: "Transformed human understanding of divinity and religious practice"
    },
    {
      title: "Sacred Text Tradition",
      description: "Established the model for sacred scripture and textual interpretation",
      contributions: [
        "Development of written sacred texts",
        "Oral tradition and interpretation",
        "Commentary and exegesis methods",
        "Textual preservation and transmission",
        "Study as religious practice"
      ],
      globalInfluence: "Influenced how other religions approach sacred texts and learning",
      significance: "Created enduring methods for preserving and interpreting religious knowledge"
    },
    {
      title: "Ethical Monotheism",
      description: "Connected religious belief with moral behavior and social justice",
      contributions: [
        "Divine commandments as moral guide",
        "Social justice and righteousness",
        "Care for the poor and vulnerable",
        "Universal moral standards",
        "Prophetic tradition of justice"
      ],
      globalInfluence: "Shaped ethical frameworks in Christianity, Islam, and secular humanism",
      significance: "Established the principle that religion must promote ethical behavior"
    },
    {
      title: "Covenant Theology",
      description: "Developed the concept of sacred agreements between God and humanity",
      contributions: [
        "Mutual obligations and responsibilities",
        "Divine-human partnership",
        "Chosen people concept",
        "Covenant renewal and faithfulness",
        "Religious community formation"
      ],
      globalInfluence: "Influenced Christian and Islamic concepts of divine-human relationships",
      significance: "Provided framework for understanding religious community and purpose"
    }
  ]

  const culturalContributions = [
    {
      category: "Literature and Language",
      contributions: [
        "Hebrew Bible as literary masterpiece",
        "Development of Hebrew language and script",
        "Jewish storytelling traditions",
        "Poetry and liturgical texts",
        "Yiddish and Ladino literature"
      ],
      notableFigures: "Sholem Aleichem, Isaac Bashevis Singer, Franz Kafka, Primo Levi",
      influence: "Enriched world literature with unique perspectives and storytelling traditions"
    },
    {
      category: "Music and Arts",
      contributions: [
        "Liturgical music and cantorial tradition",
        "Jewish folk music and klezmer",
        "Jewish visual arts and iconography",
        "Synagogue architecture and design",
        "Jewish film and theater"
      ],
      notableFigures: "Leonard Bernstein, George Gershwin, Marc Chagall, Barbra Streisand",
      influence: "Contributed diverse musical and artistic traditions to world culture"
    },
    {
      category: "Cuisine and Traditions",
      contributions: [
        "Kosher dietary laws and food traditions",
        "Jewish holiday foods and customs",
        "Sabbath and festival celebrations",
        "Life cycle rituals and ceremonies",
        "Jewish humor and storytelling"
      ],
      notableFigures: "Jewish communities worldwide",
      influence: "Enriched global cuisine and cultural traditions with unique practices"
    },
    {
      category: "Education and Learning",
      contributions: [
        "Emphasis on literacy and education",
        "Study as religious obligation",
        "Jewish schools and academies",
        "Preservation of knowledge",
        "Intellectual tradition and scholarship"
      ],
      notableFigures: "Jewish scholars and educators throughout history",
      influence: "Promoted universal education and intellectual development"
    }
  ]

  const scientificAchievements = [
    {
      field: "Medicine and Healthcare",
      contributions: [
        "Medical ethics and patient care",
        "Psychiatry and mental health",
        "Public health and hygiene",
        "Medical research and innovation",
        "Healthcare accessibility"
      ],
      notableFigures: "Sigmund Freud, Jonas Salk, Albert Sabin, Gertrude Elion",
      impact: "Revolutionized medical treatment and understanding of human health"
    },
    {
      field: "Physics and Mathematics",
      contributions: [
        "Theoretical physics and relativity",
        "Quantum mechanics",
        "Mathematical theory and applications",
        "Nuclear physics",
        "Computer science foundations"
      ],
      notableFigures: "Albert Einstein, Niels Bohr, John von Neumann, Richard Feynman",
      impact: "Transformed understanding of the physical universe and mathematical concepts"
    },
    {
      field: "Psychology and Psychiatry",
      contributions: [
        "Psychoanalysis and psychotherapy",
        "Child development theory",
        "Social psychology",
        "Cognitive psychology",
        "Mental health treatment"
      ],
      notableFigures: "Sigmund Freud, Erik Erikson, Abraham Maslow, Viktor Frankl",
      impact: "Revolutionized understanding of human mind and behavior"
    },
    {
      field: "Economics and Social Sciences",
      contributions: [
        "Economic theory and policy",
        "Social justice and welfare",
        "Political science and philosophy",
        "Sociology and anthropology",
        "International relations"
      ],
      notableFigures: "Karl Marx, Milton Friedman, Noam Chomsky, Daniel Kahneman",
      impact: "Shaped economic and social policy worldwide"
    }
  ]

  const socialJusticeMovements = [
    {
      movement: "Civil Rights Movement",
      description: "Jewish participation in the struggle for racial equality",
      contributions: [
        "Legal advocacy and representation",
        "Organizational leadership and support",
        "Interfaith cooperation and dialogue",
        "Educational initiatives",
        "Community organizing"
      ],
      notableFigures: "Abraham Joshua Heschel, Rabbi Joachim Prinz, Jewish civil rights activists",
      impact: "Significantly advanced civil rights and racial equality in America"
    },
    {
      movement: "Labor Rights",
      description: "Jewish involvement in workers' rights and union movements",
      contributions: [
        "Union organizing and leadership",
        "Workplace safety and conditions",
        "Fair wages and benefits",
        "Worker education and empowerment",
        "Social welfare programs"
      ],
      notableFigures: "Samuel Gompers, Sidney Hillman, Jewish labor activists",
      impact: "Improved working conditions and labor rights worldwide"
    },
    {
      movement: "Women's Rights",
      description: "Jewish contributions to feminism and gender equality",
      contributions: [
        "Feminist theory and activism",
        "Gender equality in religious practice",
        "Women's education and leadership",
        "Reproductive rights advocacy",
        "Intersectional feminism"
      ],
      notableFigures: "Betty Friedan, Gloria Steinem, Jewish feminist leaders",
      impact: "Advanced women's rights and gender equality globally"
    },
    {
      movement: "Human Rights",
      description: "Jewish advocacy for universal human rights and dignity",
      contributions: [
        "International human rights law",
        "Refugee and immigration rights",
        "Anti-discrimination advocacy",
        "Humanitarian aid and relief",
        "Interfaith human rights cooperation"
      ],
      notableFigures: "Jewish human rights organizations and activists",
      impact: "Promoted universal human rights and dignity worldwide"
    }
  ]

  const philosophicalInfluence = [
    {
      philosopher: "Maimonides (1138-1204)",
      contributions: [
        "Integration of Jewish tradition with Aristotelian philosophy",
        "Negative theology and divine attributes",
        "Ethical monotheism and moral philosophy",
        "Medical ethics and human dignity",
        "Harmony of reason and revelation"
      ],
      influence: "Influenced both Jewish and Islamic philosophy, shaped medieval thought"
    },
    {
      philosopher: "Baruch Spinoza (1632-1677)",
      contributions: [
        "Modern biblical criticism",
        "Pantheism and natural theology",
        "Separation of religion and state",
        "Ethical philosophy and human freedom",
        "Rational approach to religion"
      ],
      influence: "Pioneered modern philosophy and influenced Enlightenment thought"
    },
    {
      philosopher: "Martin Buber (1878-1965)",
      contributions: [
        "I-Thou relationship philosophy",
        "Dialogical philosophy and humanism",
        "Zionism and Jewish nationalism",
        "Interfaith dialogue and understanding",
        "Existentialist religious thought"
      ],
      influence: "Shaped modern religious philosophy and interfaith relations"
    },
    {
      philosopher: "Emmanuel Levinas (1906-1995)",
      contributions: [
        "Ethics as first philosophy",
        "Face-to-face encounter and responsibility",
        "Jewish ethics and otherness",
        "Post-Holocaust philosophy",
        "Intersubjectivity and human dignity"
      ],
      influence: "Revolutionized ethical philosophy and influenced postmodern thought"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Jewish Impact on World Civilization</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover Judaism's profound influence on world civilization, from religious and ethical foundations 
          to cultural, scientific, and social justice contributions that have shaped human history and progress.
        </p>
      </div>

      <div className="grid gap-8 mb-12">
        {religiousImpact.map((impact, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
              <div className="flex items-center gap-3">
                <Star className="h-6 w-6 text-blue-600" />
                <div>
                  <CardTitle className="text-2xl">{impact.title}</CardTitle>
                  <CardDescription className="text-lg">{impact.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    Key Contributions
                  </h3>
                  <ul className="space-y-2">
                    {impact.contributions.map((contribution, contribIndex) => (
                      <li key={contribIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-green-500" />
                    Global Influence
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {impact.globalInfluence}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Award className="h-5 w-5 text-purple-500" />
                    Historical Significance
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {impact.significance}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Cultural Contributions</h2>
        <div className="grid gap-6">
          {culturalContributions.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Cultural Impact
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">{category.notableFigures}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Contributions</h4>
                    <ul className="space-y-2">
                      {category.contributions.map((contribution, contribIndex) => (
                        <li key={contribIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Global Influence</h4>
                    <p className="text-sm text-muted-foreground">{category.influence}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Scientific Achievements</h2>
        <div className="grid gap-6">
          {scientificAchievements.map((field, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{field.field}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Scientific Innovation
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">{field.notableFigures}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Contributions</h4>
                    <ul className="space-y-2">
                      {field.contributions.map((contribution, contribIndex) => (
                        <li key={contribIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Global Impact</h4>
                    <p className="text-sm text-muted-foreground">{field.impact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Social Justice Movements</h2>
        <div className="grid gap-6">
          {socialJusticeMovements.map((movement, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{movement.movement}</CardTitle>
                <CardDescription>{movement.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Contributions</h4>
                    <ul className="space-y-2">
                      {movement.contributions.map((contribution, contribIndex) => (
                        <li key={contribIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Notable Figures</h4>
                    <p className="text-sm text-muted-foreground mb-3">{movement.notableFigures}</p>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Global Impact</h4>
                    <p className="text-sm text-muted-foreground">{movement.impact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Philosophical Influence</h2>
        <div className="grid gap-6">
          {philosophicalInfluence.map((philosopher, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{philosopher.philosopher}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Philosophical Contributions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Key Contributions</h4>
                    <ul className="space-y-2">
                      {philosopher.contributions.map((contribution, contribIndex) => (
                        <li key={contribIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-3">Historical Influence</h4>
                    <p className="text-sm text-muted-foreground">{philosopher.influence}</p>
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