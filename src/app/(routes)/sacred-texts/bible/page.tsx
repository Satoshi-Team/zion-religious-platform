import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export async function generateMetadata() {
  return {
    title: 'Complete Bible Versions & Translations Guide | Historical & Modern Editions',
    description: 'Comprehensive guide to Bible translations: KJV, NIV, ESV, NASB, NRSV, and more. Compare translations, understand differences, and find study resources.',
    openGraph: {
      title: 'Bible Versions & Translations Guide',
      description: 'Compare and explore major Bible translations with detailed historical context',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Bible Versions & Translations Guide',
      description: 'Compare and explore major Bible translations with detailed historical context',
    }
  }
}

const bibleTranslations = [
  {
    id: 'kjv',
    name: 'King James Version (KJV)',
    year: 1611,
    description: 'The most influential English Bible translation, commissioned by King James I of England.',
    translationStyle: 'Formal equivalence (word-for-word)',
    readingLevel: '12th grade',
    features: [
      'Poetic, literary English',
      'Historical significance',
      'Public domain status',
      'Widely used in traditional services'
    ],
    strengths: [
      'Beautiful, classic English prose',
      'Strong influence on English literature and culture',
      'Familiar to many readers',
      'Excellent for memorization'
    ],
    limitations: [
      'Archaic language may be difficult to understand',
      'Based on fewer manuscripts than modern translations',
      'Some words have changed meaning since 1611'
    ],
    resources: [
      {
        title: 'Cambridge KJV',
        url: 'https://www.cambridge.org/bibles/bible-versions/king-james-version',
        type: 'Publisher'
      },
      {
        title: 'Oxford KJV Study Bible',
        url: 'https://global.oup.com/academic/product/the-oxford-study-bible',
        type: 'Study Bible'
      }
    ],
    onlineResources: [
      {
        name: 'Bible Gateway KJV',
        url: 'https://www.biblegateway.com/versions/King-James-Version-KJV-Bible/'
      },
      {
        name: 'Blue Letter Bible KJV',
        url: 'https://www.blueletterbible.org/kjv'
      }
    ],
    scholarlyArticles: [
      {
        title: 'The Making of the King James Bible',
        author: 'Gordon Campbell',
        publication: 'Oxford University Press',
        year: 2011,
        url: 'https://academic.oup.com/book/6485'
      }
    ]
  },
  {
    id: 'niv',
    name: 'New International Version (NIV)',
    year: 1978,
    lastUpdated: 2011,
    description: 'A modern English translation emphasizing clarity and accuracy, balancing literal and dynamic translation.',
    translationStyle: 'Dynamic equivalence with formal elements',
    readingLevel: '7th-8th grade',
    features: [
      'Modern English',
      'Balance of readability and accuracy',
      'Regular updates',
      'Extensive cross-references'
    ],
    strengths: [
      'Clear, contemporary English',
      'Widely used in modern churches',
      'Good for study and preaching',
      'Available in many formats'
    ],
    limitations: [
      'Some argue it takes too many interpretive liberties',
      'Multiple revisions can cause confusion',
      'Less literal than some translations'
    ],
    resources: [
      {
        title: 'Zondervan NIV Study Bible',
        url: 'https://www.zondervan.com/p/niv-study-bible/',
        type: 'Study Bible'
      },
      {
        title: 'NIV Application Commentary',
        url: 'https://www.zondervan.com/p/niv-application-commentary/',
        type: 'Commentary Series'
      }
    ],
    onlineResources: [
      {
        name: 'Bible Gateway NIV',
        url: 'https://www.biblegateway.com/versions/New-International-Version-NIV-Bible/'
      }
    ],
    scholarlyArticles: [
      {
        title: 'The Making of the NIV',
        author: 'Kenneth L. Barker',
        publication: 'Baker Books',
        year: 1991
      }
    ]
  },
  {
    id: 'esv',
    name: 'English Standard Version (ESV)',
    year: 2001,
    lastUpdated: 2016,
    description: 'A modern translation emphasizing word-for-word accuracy while maintaining readability.',
    translationStyle: 'Essentially literal',
    readingLevel: '8th-10th grade',
    features: [
      'Word-for-word translation philosophy',
      'Modern English',
      'Strong concordance',
      'Extensive study resources'
    ],
    strengths: [
      'Balance of accuracy and readability',
      'Strong for in-depth study',
      'Growing scholarly acceptance',
      'Quality digital resources'
    ],
    limitations: [
      'Sometimes sacrifices clarity for literalness',
      'Newer translation with less historical use',
      'Can be challenging for new readers'
    ],
    resources: [
      {
        title: 'ESV Study Bible',
        url: 'https://www.crossway.org/bibles/esv-study-bible/',
        type: 'Study Bible'
      }
    ],
    onlineResources: [
      {
        name: 'ESV Online',
        url: 'https://www.esv.org/'
      }
    ]
  }
]

export default function BibleVersionsPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Complete Bible Versions & Translations Guide</h1>
        <p className="text-xl text-muted-foreground">
          Explore comprehensive information about major Bible translations, their history, features, and study resources
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Major Bible Translations</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {bibleTranslations.map((translation) => (
            <Card key={translation.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl">{translation.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      First Published: {translation.year}
                      {translation.lastUpdated && ` • Last Updated: ${translation.lastUpdated}`}
                    </p>
                  </div>
                </CardTitle>
                <div className="space-y-2">
                  <p className="text-muted-foreground">{translation.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                      {translation.translationStyle}
                    </span>
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                      Reading Level: {translation.readingLevel}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Key Features</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {translation.features.map((feature) => (
                          <li key={feature} className="text-sm">{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Strengths</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {translation.strengths.map((strength) => (
                          <li key={strength} className="text-sm">{strength}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Limitations</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {translation.limitations.map((limitation) => (
                          <li key={limitation} className="text-sm">{limitation}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Study Resources</h4>
                      <div className="space-y-2">
                        {translation.resources.map((resource) => (
                          <a
                            key={resource.title}
                            href={resource.url}
                            className="block p-2 bg-secondary rounded-md hover:bg-secondary/90"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="text-sm font-medium">{resource.title}</span>
                            <span className="text-xs text-muted-foreground ml-2">({resource.type})</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Online Access</h4>
                  <div className="flex flex-wrap gap-2">
                    {translation.onlineResources.map((resource) => (
                      <a
                        key={resource.name}
                        href={resource.url}
                        className="inline-flex items-center px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm hover:bg-primary/90"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {resource.name}
                      </a>
                    ))}
                  </div>
                </div>
                {translation.scholarlyArticles && (
                  <div className="space-y-4">
                    <h4 className="font-semibold">Further Reading</h4>
                    <div className="space-y-2">
                      {translation.scholarlyArticles.map((article) => (
                        <div key={article.title} className="text-sm">
                          <p className="font-medium">{article.title}</p>
                          <p className="text-muted-foreground">
                            {article.author} ({article.year}) • {article.publication}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
} 