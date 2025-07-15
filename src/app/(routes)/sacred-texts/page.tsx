import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shell } from "@/components/shells/shell"

export async function generateMetadata() {
  return {
    title: 'Sacred Texts & Religious Resources | Complete Collection',
    description: 'Comprehensive collection of sacred texts, including Bibles, Quran, Torah, Buddhist texts, and more. Find authoritative sources and translations.',
    openGraph: {
      title: 'Sacred Texts & Religious Resources',
      description: 'Explore our comprehensive collection of religious texts and spiritual resources',
      type: 'website',
      images: [{ url: '/images/og/sacred-texts.jpg' }]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Sacred Texts & Religious Resources',
      description: 'Explore our comprehensive collection of religious texts and spiritual resources',
    }
  }
}

const bibleVersions = [
  {
    id: 'kjv',
    name: 'King James Version (KJV)',
    year: 1611,
    description: 'The most well-known English translation of the Bible, commissioned by King James I.',
    links: {
      purchase: 'https://www.amazon.com/Holy-Bible-James-Version-Burgundy/dp/0834003619?tag=ngp0ba-20',
      online: 'https://www.biblegateway.com/versions/King-James-Version-KJV-Bible/',
      study: 'https://www.blueletterbible.org/kjv'
    },
    languages: ['English'],
    features: ['Poetic language', 'Historical significance', 'Public domain']
  },
  {
    id: 'niv',
    name: 'New International Version (NIV)',
    year: 1978,
    description: 'Modern English translation emphasizing clarity and accuracy.',
    links: {
      purchase: 'https://www.amazon.com/NIV-Study-Bible-Fully-Revised/dp/0310448948?tag=ngp0ba-20',
      online: 'https://www.biblegateway.com/versions/New-International-Version-NIV-Bible/',
      study: 'https://www.biblestudytools.com/niv/'
    },
    languages: ['English'],
    features: ['Modern language', 'Study resources', 'Multiple formats']
  },
  {
    id: 'esv',
    name: 'English Standard Version (ESV)',
    year: 2001,
    description: 'A literal translation that emphasizes word-for-word accuracy and literary excellence.',
    links: {
      purchase: 'https://www.amazon.com/ESV-Study-Bible-Bibles-Crossway/dp/1433502410?tag=ngp0ba-20',
      online: 'https://www.biblegateway.com/versions/English-Standard-Version-ESV-Bible/',
      study: 'https://www.esv.org/'
    },
    languages: ['English'],
    features: ['Word-for-word translation', 'Literary quality', 'Study resources']
  }
]

const quranEditions = [
  {
    id: 'oxford',
    name: 'The Oxford World\'s Classics Qur\'an',
    translator: 'M. A. S. Abdel Haleem',
    year: 2004,
    description: 'A clear modern English translation with explanatory notes.',
    links: {
      purchase: 'https://www.amazon.com/Quran-Oxford-Worlds-Classics-ebook/dp/B001ODEPPI?tag=ngp0ba-20',
      online: 'https://quran.com/',
      study: 'https://corpus.quran.com/'
    },
    features: ['Modern English', 'Explanatory notes', 'Scholarly introduction']
  },
  {
    id: 'study-quran',
    name: 'The Study Quran',
    translator: 'Seyyed Hossein Nasr et al.',
    year: 2015,
    description: 'A comprehensive study edition with extensive commentary.',
    links: {
      purchase: 'https://www.amazon.com/Study-Quran-New-Translation-Commentary/dp/0061125873?tag=ngp0ba-20',
      online: 'https://quran.com/',
      study: 'https://corpus.quran.com/'
    },
    features: ['Detailed commentary', 'Multiple perspectives', 'Academic research']
  }
]

const torahEditions = [
  {
    id: 'artscroll',
    name: 'ArtScroll Stone Edition Torah',
    year: 1993,
    description: 'Complete Hebrew-English edition with commentary.',
    links: {
      purchase: 'https://www.amazon.com/Artscroll-English-Translation-Commentary-Presented/dp/0899060145?tag=ngp0ba-20',
      online: 'https://www.sefaria.org/texts/Tanakh',
      study: 'https://www.chabad.org/library/bible_cdo/aid/63255/jewish/The-Bible-with-Rashi.htm'
    },
    features: ['Hebrew-English text', 'Rashi commentary', 'Study aids']
  },
  {
    id: 'jps',
    name: 'JPS Hebrew-English TANAKH',
    year: 1985,
    description: 'The Jewish Publication Society\'s modern English translation.',
    links: {
      purchase: 'https://www.amazon.com/Hebrew-English-TANAKH-Jewish-Publication-Society/dp/0827606974?tag=ngp0ba-20',
      online: 'https://www.sefaria.org/texts/Tanakh',
      study: 'https://www.jewishvirtuallibrary.org/the-tanakh-full-text'
    },
    features: ['Academic translation', 'Modern English', 'Study notes']
  }
]

const buddhistTexts = [
  {
    id: 'dhammapada',
    name: 'The Dhammapada',
    translator: 'Gil Fronsdal',
    year: 2005,
    description: 'A new translation of the Buddhist classic text.',
    links: {
      purchase: 'https://www.amazon.com/Dhammapada-Translation-Buddhist-Classic-Annotations/dp/1590303806?tag=ngp0ba-20',
      online: 'https://www.accesstoinsight.org/tipitaka/kn/dhp/index.html',
      study: 'https://www.buddhanet.net/e-learning/buddhism/dp00.htm'
    },
    features: ['Verse translation', 'Study notes', 'Historical context']
  },
  {
    id: 'heart-sutra',
    name: 'The Heart Sutra',
    translator: 'Red Pine',
    year: 2004,
    description: 'Translation and commentary on this fundamental Mahayana text.',
    links: {
      purchase: 'https://www.amazon.com/Heart-Sutra-Translation-Commentary-Red/dp/1593760825?tag=ngp0ba-20',
      online: 'https://plumvillage.org/sutra/the-heart-sutra/',
      study: 'https://www.buddhanet.net/e-learning/heartstr.htm'
    },
    features: ['Line-by-line commentary', 'Historical analysis', 'Practice guidance']
  }
]

const hinduTexts = [
  {
    id: 'bhagavad-gita',
    name: 'The Bhagavad Gita',
    translator: 'Eknath Easwaran',
    year: 2007,
    description: 'A classic translation of the sacred Hindu text.',
    links: {
      purchase: 'https://www.amazon.com/Bhagavad-Gita-Classic-Indian-Spirituality/dp/1586380192?tag=ngp0ba-20',
      online: 'https://www.sacred-texts.com/hin/gita/',
      study: 'https://vedabase.io/en/library/bg/'
    },
    features: ['Verse translation', 'Commentary', 'Study guide']
  },
  {
    id: 'upanishads',
    name: 'The Upanishads',
    translator: 'Eknath Easwaran',
    year: 2007,
    description: 'Translation of the principal Upanishads.',
    links: {
      purchase: 'https://www.amazon.com/Upanishads-Classic-Indian-Spirituality-Easwaran/dp/1586380214?tag=ngp0ba-20',
      online: 'https://www.sacred-texts.com/hin/upan/',
      study: 'https://vedabase.io/en/library/upanishads/'
    },
    features: ['Philosophical texts', 'Vedantic wisdom', 'Spiritual guidance']
  }
]

const sikhTexts = [
  {
    id: 'guru-granth-sahib',
    name: 'Guru Granth Sahib',
    translator: 'Various',
    year: 1708,
    description: 'The central religious scripture of Sikhism.',
    links: {
      purchase: 'https://www.amazon.com/Guru-Granth-Sahib-Complete-Translation/dp/0143101435?tag=ngp0ba-20',
      online: 'https://www.srigranth.org',
      study: 'https://www.sikhnet.com/gurbani'
    },
    features: ['Complete scripture', 'Multiple translations', 'Audio recitations']
  },
  {
    id: 'dasam-granth',
    name: 'Dasam Granth',
    translator: 'Various',
    year: 1708,
    description: 'Compositions of Guru Gobind Singh Ji.',
    links: {
      purchase: 'https://www.amazon.com/Dasam-Granth-Sacred-Scripture-Sikhism/dp/8170101786?tag=ngp0ba-20',
      online: 'https://www.srigranth.org/dasam',
      study: 'https://www.sikhnet.com/dasam-granth'
    },
    features: ['Guru\'s compositions', 'Historical accounts', 'Philosophical teachings']
  }
]

export default function SacredTextsPage() {
  return (
    <Shell>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Sacred Texts & Religious Resources</h1>
          <p className="text-xl text-muted-foreground">
            Explore our comprehensive collection of religious texts and spiritual resources
          </p>
        </section>

        <Tabs defaultValue="bible" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
            <TabsTrigger value="bible">Bible</TabsTrigger>
            <TabsTrigger value="quran">Quran</TabsTrigger>
            <TabsTrigger value="torah">Torah</TabsTrigger>
            <TabsTrigger value="buddhist">Buddhist</TabsTrigger>
            <TabsTrigger value="hindu">Hindu</TabsTrigger>
            <TabsTrigger value="sikh">Sikh</TabsTrigger>
          </TabsList>

          <TabsContent value="bible" className="space-y-8">
            <h2 className="text-3xl font-semibold">Bible Translations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bibleVersions.map((version) => (
                <Card key={version.id}>
                  <CardHeader>
                    <CardTitle>{version.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">Published: {version.year}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>{version.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Available in:</h4>
                        <ul className="list-disc list-inside">
                          {version.languages.map((lang) => (
                            <li key={lang}>{lang}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Features:</h4>
                        <ul className="list-disc list-inside">
                          {version.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2 pt-4">
                        <a 
                          href={version.links.purchase}
                          className="block w-full text-center bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View on Amazon
                        </a>
                        <div className="flex gap-2">
                          <a 
                            href={version.links.online}
                            className="flex-1 text-center bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read Online
                          </a>
                          <a 
                            href={version.links.study}
                            className="flex-1 text-center bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Study Resources
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="quran" className="space-y-8">
            <h2 className="text-3xl font-semibold">Quran Editions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quranEditions.map((edition) => (
                <Card key={edition.id}>
                  <CardHeader>
                    <CardTitle>{edition.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Translated by {edition.translator} ({edition.year})
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>{edition.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Features:</h4>
                        <ul className="list-disc list-inside">
                          {edition.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2 pt-4">
                        <a 
                          href={edition.links.purchase}
                          className="block w-full text-center bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View on Amazon
                        </a>
                        <div className="flex gap-2">
                          <a 
                            href={edition.links.online}
                            className="flex-1 text-center bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read Online
                          </a>
                          <a 
                            href={edition.links.study}
                            className="flex-1 text-center bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Study Resources
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="torah" className="space-y-8">
            <h2 className="text-3xl font-semibold">Torah Editions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {torahEditions.map((edition) => (
                <Card key={edition.id}>
                  <CardHeader>
                    <CardTitle>{edition.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Published: {edition.year}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>{edition.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Features:</h4>
                        <ul className="list-disc list-inside">
                          {edition.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2 pt-4">
                        <a 
                          href={edition.links.purchase}
                          className="block w-full text-center bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View on Amazon
                        </a>
                        <div className="flex gap-2">
                          <a 
                            href={edition.links.online}
                            className="flex-1 text-center bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read Online
                          </a>
                          <a 
                            href={edition.links.study}
                            className="flex-1 text-center bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Study Resources
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="buddhist" className="space-y-8">
            <h2 className="text-3xl font-semibold">Buddhist Texts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {buddhistTexts.map((text) => (
                <Card key={text.id}>
                  <CardHeader>
                    <CardTitle>{text.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Translated by {text.translator} ({text.year})
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>{text.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Features:</h4>
                        <ul className="list-disc list-inside">
                          {text.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2 pt-4">
                        <a 
                          href={text.links.purchase}
                          className="block w-full text-center bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View on Amazon
                        </a>
                        <div className="flex gap-2">
                          <a 
                            href={text.links.online}
                            className="flex-1 text-center bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read Online
                          </a>
                          <a 
                            href={text.links.study}
                            className="flex-1 text-center bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Study Resources
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hindu" className="space-y-8">
            <h2 className="text-3xl font-semibold">Hindu Scriptures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hinduTexts.map((text) => (
                <Card key={text.id}>
                  <CardHeader>
                    <CardTitle>{text.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Translated by {text.translator} ({text.year})
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>{text.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Features:</h4>
                        <ul className="list-disc list-inside">
                          {text.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2 pt-4">
                        <a 
                          href={text.links.purchase}
                          className="block w-full text-center bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View on Amazon
                        </a>
                        <div className="flex gap-2">
                          <a 
                            href={text.links.online}
                            className="flex-1 text-center bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read Online
                          </a>
                          <a 
                            href={text.links.study}
                            className="flex-1 text-center bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Study Resources
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sikh" className="space-y-8">
            <h2 className="text-3xl font-semibold">Sikh Scriptures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sikhTexts.map((text) => (
                <Card key={text.id}>
                  <CardHeader>
                    <CardTitle>{text.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {text.translator} ({text.year})
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>{text.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Features:</h4>
                        <ul className="list-disc list-inside">
                          {text.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2 pt-4">
                        <a 
                          href={text.links.purchase}
                          className="block w-full text-center bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View on Amazon
                        </a>
                        <div className="flex gap-2">
                          <a 
                            href={text.links.online}
                            className="flex-1 text-center bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read Online
                          </a>
                          <a 
                            href={text.links.study}
                            className="flex-1 text-center bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Study Resources
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Shell>
  )
} 