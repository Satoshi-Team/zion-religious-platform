import { Metadata } from "next"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Globe, Search, Download, Share2, ExternalLink } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Full Sacred Texts - Free API Access",
  description: "Access complete sacred texts from multiple traditions using free, open-source APIs. Read full texts of Bible, Quran, Buddhist, Hindu, and Sikh scriptures.",
  keywords: ["sacred texts", "full texts", "free API", "Bible", "Quran", "Buddhist texts", "Hindu texts", "Sikh texts", "scriptures"],
  openGraph: {
    title: "Full Sacred Texts - Free API Access",
    description: "Access complete sacred texts from multiple traditions using free, open-source APIs.",
    type: "website",
  },
}

const traditions = [
  {
    id: "bible",
    name: "Bible",
    description: "Christian sacred texts including Old and New Testaments",
    color: "bg-blue-100 text-blue-800",
    icon: "📖",
    apis: [
      "Bible API (bible-api.com)",
      "Bible Gateway",
      "Bible Cloud"
    ],
    features: [
      "Multiple translations",
      "Search functionality",
      "Audio versions",
      "Commentaries"
    ],
    sampleReferences: [
      "John 3:16",
      "Genesis 1:1",
      "Psalm 23:1",
      "Matthew 5:1-12"
    ]
  },
  {
    id: "quran",
    name: "Quran",
    description: "Islamic sacred text, the central religious text of Islam",
    color: "bg-green-100 text-green-800",
    icon: "☪️",
    apis: [
      "Quran API (api.quran.com)",
      "Quran Cloud (alquran.cloud)"
    ],
    features: [
      "Arabic text",
      "Multiple translations",
      "Audio recitations",
      "Tafsir (commentary)"
    ],
    sampleReferences: [
      "1:1-7",
      "2:255",
      "36:1-10",
      "112:1-4"
    ]
  },
  {
    id: "buddhist",
    name: "Buddhist Texts",
    description: "Sacred texts from various Buddhist traditions",
    color: "bg-orange-100 text-orange-800",
    icon: "🕉️",
    apis: [
      "SuttaCentral",
      "Buddhist Digital Resource Center"
    ],
    features: [
      "Pali Canon",
      "Tibetan texts",
      "Translations",
      "Commentaries"
    ],
    sampleReferences: [
      "DN 1",
      "MN 1",
      "SN 1.1",
      "Dhammapada 1"
    ]
  },
  {
    id: "hindu",
    name: "Hindu Texts",
    description: "Sacred texts from Hindu traditions including Vedas and Upanishads",
    color: "bg-red-100 text-red-800",
    icon: "🕉️",
    apis: [
      "Vedic Heritage Portal",
      "Sanskrit Documents"
    ],
    features: [
      "Vedas",
      "Upanishads",
      "Sanskrit texts",
      "Translations"
    ],
    sampleReferences: [
      "Rig Veda 1.1.1",
      "Bhagavad Gita 1.1",
      "Upanishads",
      "Ramayana"
    ]
  },
  {
    id: "sikh",
    name: "Sikh Texts",
    description: "Sacred texts from Sikh tradition including Guru Granth Sahib",
    color: "bg-yellow-100 text-yellow-800",
    icon: "☬",
    apis: [
      "SikhNet",
      "SearchGurbani"
    ],
    features: [
      "Guru Granth Sahib",
      "Dasam Granth",
      "Translations",
      "Audio recitations"
    ],
    sampleReferences: [
      "Japji Sahib",
      "Guru Granth Sahib 1:1",
      "Dasam Granth",
      "Rehras Sahib"
    ]
  }
]

export default function FullTextsPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <Heading 
          title="Full Sacred Texts"
          description="Access complete sacred texts from multiple traditions using free, open-source APIs. Read full texts instead of just excerpts with our comprehensive text reader."
          className="flex items-center justify-center gap-3"
        />
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Access complete sacred texts from multiple traditions using free, open-source APIs. 
          Read full texts instead of just excerpts with our comprehensive text reader.
        </p>
        <div className="flex items-center justify-center gap-2">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <Globe className="h-3 w-3 mr-1" />
            Free APIs
          </Badge>
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            <Search className="h-3 w-3 mr-1" />
            Full Text Search
          </Badge>
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            <Download className="h-3 w-3 mr-1" />
            Download Available
          </Badge>
        </div>
      </div>

      <Separator />

      {/* Main Content */}
      <Tabs defaultValue="bible" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          {traditions.map((tradition) => (
            <TabsTrigger key={tradition.id} value={tradition.id} className="flex items-center gap-2">
              <span>{tradition.icon}</span>
              <span className="hidden sm:inline">{tradition.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {traditions.map((tradition) => (
          <TabsContent key={tradition.id} value={tradition.id} className="space-y-6">
            {/* Tradition Overview */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <span>{tradition.icon}</span>
                      {tradition.name}
                    </CardTitle>
                    <CardDescription>{tradition.description}</CardDescription>
                  </div>
                  <Badge className={tradition.color}>
                    {tradition.id.toUpperCase()}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-2">Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {tradition.features.map((feature, index) => (
                      <Badge key={index} variant="outline">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* APIs */}
                <div>
                  <h4 className="font-semibold mb-2">Available APIs</h4>
                  <div className="space-y-2">
                    {tradition.apis.map((api, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <ExternalLink className="h-3 w-3" />
                        <span>{api}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sample References */}
                <div>
                  <h4 className="font-semibold mb-2">Sample References</h4>
                  <div className="flex flex-wrap gap-2">
                    {tradition.sampleReferences.map((ref, index) => (
                      <Button key={index} variant="outline" size="sm" asChild>
                        <Link href={`/en/sacred-texts/full-texts/${tradition.id}?ref=${encodeURIComponent(ref)}`}>
                          {ref}
                        </Link>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4">
                  <Button asChild>
                    <Link href={`/en/sacred-texts/full-texts/${tradition.id}`}>
                      <BookOpen className="h-4 w-4 mr-2" />
                      Open Full Text Reader
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={`/en/sacred-texts/${tradition.id}`}>
                      <Globe className="h-4 w-4 mr-2" />
                      View Overview
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* API Information */}
            <Card>
              <CardHeader>
                <CardTitle>API Information</CardTitle>
                <CardDescription>
                  Technical details about the free APIs used for {tradition.name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {tradition.apis.map((api, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">{api}</h5>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>• Free to use</p>
                        <p>• No registration required</p>
                        <p>• JSON API format</p>
                        <p>• Rate limiting applies</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Additional Information */}
      <Card>
        <CardHeader>
          <CardTitle>About Free Sacred Text APIs</CardTitle>
          <CardDescription>
            Learn more about the free, open-source APIs powering this text reader
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">🆓 Free Access</h4>
              <p className="text-sm text-muted-foreground">
                All APIs used are completely free and open-source, providing access to sacred texts without cost.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🔍 Full Text Search</h4>
              <p className="text-sm text-muted-foreground">
                Search across multiple traditions and texts to find specific passages or themes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📱 Multiple Formats</h4>
              <p className="text-sm text-muted-foreground">
                Access texts in original languages, translations, and transliterations.
              </p>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-semibold mb-2">API Sources</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-medium">Bible APIs</h5>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>bible-api.com - REST API for Bible texts</li>
                  <li>Bible Gateway - Multiple translations</li>
                  <li>Bible Cloud - Extended features</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium">Quran APIs</h5>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>api.quran.com - Official Quran API</li>
                  <li>alquran.cloud - Comprehensive Quran API</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium">Buddhist APIs</h5>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>SuttaCentral - Pali Canon texts</li>
                  <li>TBRC - Tibetan Buddhist texts</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium">Hindu & Sikh APIs</h5>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Vedic Heritage Portal - Vedic texts</li>
                  <li>SikhNet - Sikh scriptures</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 