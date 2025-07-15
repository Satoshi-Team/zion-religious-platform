import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RelatedTopics } from "@/components/related-topics"

export const metadata: Metadata = {
  title: "Ethics and Values | Sikh Theology",
  description: "Explore Sikh ethical principles and values, including concepts of righteousness, social justice, equality, and moral conduct in daily life.",
  keywords: "Sikh ethics, Sikh values, Sarbat da Bhala, Kirat Karo, Vand Chakko, Seva, Sikh moral principles, Hukam"
}

interface EthicsContent {
  title: string
  description: string
  keyPoints: string[]
  scriptureRefs: Array<{ text: string; source: string }>
  significance: string
  practices: string[]
  recommendedReading?: Array<{
    title: string
    author: string
    description: string
    amazonLink: string
  }>
}

const ethicsContent: EthicsContent[] = [
  {
    title: "Fundamental Ethical Principles",
    description: "Sikh ethics are grounded in the teachings of the Gurus and the Guru Granth Sahib, emphasizing truthful living, social responsibility, and spiritual development through moral conduct.",
    keyPoints: [
      "Nam Japna (Divine Contemplation)",
      "Kirat Karo (Honest Living)",
      "Vand Chakko (Sharing with Others)",
      "Sarbat da Bhala (Welfare of All)",
      "Equality of All Humans"
    ],
    scriptureRefs: [
      {
        text: "Truth is high, but higher still is truthful living.",
        source: "Guru Nanak Dev Ji, Guru Granth Sahib, Page 62"
      },
      {
        text: "One who performs selfless service without desire for reward finds union with the Lord.",
        source: "Guru Amar Das Ji, Guru Granth Sahib, Page 286"
      }
    ],
    significance: "These principles form the foundation of Sikh ethical life, guiding personal conduct, social interactions, and spiritual growth.",
    practices: [
      "Daily meditation and remembrance",
      "Honest work and income",
      "Charitable giving and sharing",
      "Service to humanity",
      "Fighting against injustice"
    ],
    recommendedReading: [
      {
        title: "Sikhism: An Introduction to the Sikh Religion",
        author: "Nikky-Guninder Kaur Singh",
        description: "Comprehensive overview of Sikh ethical principles and their practical applications",
        amazonLink: "https://www.amazon.com/Introduction-Sikhism-Nikky-Guninder-Kaur-Singh/dp/1848853211/"
      }
    ]
  },
  {
    title: "Social Justice and Equality",
    description: "Sikhism strongly emphasizes social justice, gender equality, and the elimination of caste discrimination, promoting active engagement in creating a just society.",
    keyPoints: [
      "Rejection of caste system",
      "Gender equality in all spheres",
      "Standing against oppression",
      "Economic justice and sharing",
      "Universal brotherhood/sisterhood"
    ],
    scriptureRefs: [
      {
        text: "Recognize the human race as one.",
        source: "Guru Gobind Singh Ji"
      },
      {
        text: "From woman, man is born; within woman, man is conceived... why call her bad? From her, kings are born.",
        source: "Guru Nanak Dev Ji, Guru Granth Sahib, Page 473"
      }
    ],
    significance: "Social justice principles in Sikhism call for active participation in creating an equitable society and standing against all forms of discrimination.",
    practices: [
      "Langar (community kitchen) service",
      "Advocacy for equal rights",
      "Protection of the vulnerable",
      "Economic support for the needy",
      "Fighting discrimination"
    ],
    recommendedReading: [
      {
        title: "The Sikh Vision of Heroic Life",
        author: "Nirbhai Singh",
        description: "Exploration of Sikh principles of social justice and ethical living",
        amazonLink: "https://www.amazon.com/Sikh-Vision-Heroic-Life/dp/8170103215/"
      }
    ]
  },
  {
    title: "Personal Ethics and Moral Conduct",
    description: "Sikhism provides clear guidelines for personal conduct, emphasizing self-discipline, moral character, and the cultivation of virtues in daily life.",
    keyPoints: [
      "Five Evils to overcome (Lust, Anger, Greed, Attachment, Pride)",
      "Five Virtues to cultivate (Truth, Contentment, Compassion, Humility, Love)",
      "Control of mind and desires",
      "Importance of moral character",
      "Balance of spiritual and worldly duties"
    ],
    scriptureRefs: [
      {
        text: "Those who have truth within them, obtain the true honor.",
        source: "Guru Nanak Dev Ji, Guru Granth Sahib, Page 15"
      },
      {
        text: "Practice truth, contentment and kindness; this is the most excellent way of life.",
        source: "Guru Arjan Dev Ji, Guru Granth Sahib, Page 297"
      }
    ],
    significance: "Personal ethics in Sikhism aim at transforming individuals into Gurmukhs (God-oriented beings) through moral excellence and spiritual discipline.",
    practices: [
      "Daily introspection and self-improvement",
      "Practice of virtues",
      "Controlling base instincts",
      "Maintaining moral discipline",
      "Living in divine will (Hukam)"
    ],
    recommendedReading: [
      {
        title: "Ethical Formation in Sikhism",
        author: "Devinder Singh Chahal",
        description: "Detailed examination of personal ethics and moral development in Sikhism",
        amazonLink: "https://www.amazon.com/Nanakian-Philosophy-Basics-Humanity-Peace/dp/0973051507/"
      }
    ]
  },
  {
    title: "Contemporary Applications",
    description: "Sikh ethics provide guidance for addressing modern challenges, from environmental stewardship to technological ethics, while maintaining traditional values.",
    keyPoints: [
      "Environmental responsibility",
      "Business ethics and integrity",
      "Digital age challenges",
      "Bioethical considerations",
      "Interfaith relations"
    ],
    scriptureRefs: [
      {
        text: "The world is the chamber of truth; Truth dwells within it.",
        source: "Guru Nanak Dev Ji, Guru Granth Sahib, Page 463"
      },
      {
        text: "As you plant, so shall you harvest.",
        source: "Guru Granth Sahib, Page 134"
      }
    ],
    significance: "Contemporary application of Sikh ethics helps navigate modern challenges while maintaining spiritual integrity and moral values.",
    practices: [
      "Sustainable living practices",
      "Ethical business conduct",
      "Responsible technology use",
      "Environmental conservation",
      "Interfaith dialogue and cooperation"
    ],
    recommendedReading: [
      {
        title: "Sikhism and the Modern World",
        author: "Daljeet Singh",
        description: "Analysis of Sikh ethical principles applied to contemporary challenges",
        amazonLink: "https://www.amazon.com/Sikhism-Modern-World-Contemporary-Issues/dp/8172052669/"
      }
    ]
  }
]

export default function EthicsValuesPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Ethics and Values in Sikhism</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Explore the ethical principles and moral values of Sikhism, from fundamental teachings to contemporary applications, including social justice, personal conduct, and moral development.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="fundamental" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="fundamental">Fundamental Principles</TabsTrigger>
          <TabsTrigger value="social-justice">Social Justice</TabsTrigger>
          <TabsTrigger value="personal">Personal Ethics</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporary</TabsTrigger>
        </TabsList>

        {ethicsContent.map((content, index) => (
          <TabsContent key={index} value={Object.keys({fundamental: true, "social-justice": true, personal: true, contemporary: true})[index]}>
            <Card>
              <CardHeader>
                <CardTitle>{content.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="font-semibold mb-3">Overview</h3>
                  <p className="text-muted-foreground">{content.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Key Points</h3>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    {content.keyPoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Scripture References</h3>
                  <div className="space-y-4">
                    {content.scriptureRefs.map((ref, i) => (
                      <div key={i} className="pl-6 border-l-2">
                        <p className="italic text-muted-foreground">{ref.text}</p>
                        <p className="text-sm text-muted-foreground mt-1">- {ref.source}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Significance</h3>
                  <p className="text-muted-foreground">{content.significance}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Practices</h3>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    {content.practices.map((practice, i) => (
                      <li key={i}>{practice}</li>
                    ))}
                  </ul>
                </div>

                {content.recommendedReading && (
                  <div>
                    <h3 className="font-semibold mb-3">Recommended Reading</h3>
                    <div className="space-y-4">
                      {content.recommendedReading.map((book, i) => (
                        <Card key={i} className="p-4">
                          <h4 className="font-semibold">{book.title}</h4>
                          <p className="text-sm text-muted-foreground">By {book.author}</p>
                          <p className="text-sm text-muted-foreground mt-2">{book.description}</p>
                          <Button asChild className="mt-4">
                            <a href={book.amazonLink} target="_blank" rel="noopener noreferrer">
                              View on Amazon
                            </a>
                          </Button>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <RelatedTopics
        topics={[
          { title: "The Guru Tradition", href: "/religion/sikhism/theology/guru-tradition" },
          { title: "Sacred Scripture", href: "/religion/sikhism/theology/sacred-scripture" },
          { title: "Khalsa Identity", href: "/religion/sikhism/theology/khalsa-identity" }
        ]}
        className="mt-8"
      />
    </div>
  )
} 