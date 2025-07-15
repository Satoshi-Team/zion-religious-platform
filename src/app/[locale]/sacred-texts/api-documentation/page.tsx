import React from 'react'
import { Metadata } from "next"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Globe, ExternalLink, Download, Search, BookOpen, Zap } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sacred Texts API Documentation - Free APIs",
  description: "Complete documentation for free, open-source APIs used to access sacred texts. Learn how to use Bible, Quran, Buddhist, Hindu, and Sikh text APIs.",
  keywords: ["API documentation", "sacred texts", "free APIs", "Bible API", "Quran API", "Buddhist API", "Hindu API", "Sikh API"],
  openGraph: {
    title: "Sacred Texts API Documentation - Free APIs",
    description: "Complete documentation for free, open-source APIs used to access sacred texts.",
    type: "website",
  },
}

const apiCategories = [
  {
    id: "bible",
    name: "Bible APIs",
    description: "Free APIs for accessing Christian sacred texts",
    color: "bg-blue-100 text-blue-800",
    apis: [
      {
        name: "Bible API",
        url: "https://bible-api.com",
        description: "Free REST API for Bible texts with multiple translations",
        features: ["REST API", "Multiple translations", "JSON format", "No authentication required"],
        rateLimit: "No strict limits",
        documentation: "https://bible-api.com/",
        example: {
          endpoint: "GET /john/3:16",
          response: `{
  "reference": "John 3:16",
  "text": "For God so loved the world...",
  "translation_name": "World English Bible",
  "translation_note": "Public Domain"
}`
        }
      },
      {
        name: "Bible Gateway",
        url: "https://www.biblegateway.com",
        description: "Comprehensive Bible resource with multiple translations",
        features: ["Multiple translations", "Search functionality", "Audio versions", "Commentaries"],
        rateLimit: "Reasonable use",
        documentation: "https://www.biblegateway.com/usage/terms/",
        example: {
          endpoint: "GET /passage/?search=John+3:16&version=NIV",
          response: "HTML response with formatted text"
        }
      },
      {
        name: "Bible Cloud",
        url: "https://biblecloud.com/api/v1",
        description: "Advanced Bible API with extensive features",
        features: ["Multiple translations", "Search", "Audio", "Commentaries", "Greek/Hebrew"],
        rateLimit: "Generous limits",
        documentation: "https://biblecloud.com/api/docs",
        example: {
          endpoint: "GET /bibles/{bible_id}/verses/{verse_id}",
          response: `{
  "data": {
    "id": "verse_id",
    "text": "For God so loved the world...",
    "translation": "NIV"
  }
}`
        }
      }
    ]
  },
  {
    id: "quran",
    name: "Quran APIs",
    description: "Free APIs for accessing Islamic sacred texts",
    color: "bg-green-100 text-green-800",
    apis: [
      {
        name: "Quran API",
        url: "https://api.quran.com/api/v4",
        description: "Official Quran API with Arabic text and translations",
        features: ["Arabic text", "Multiple translations", "Audio recitations", "Tafsir"],
        rateLimit: "No strict limits",
        documentation: "https://quran.api-docs.io/",
        example: {
          endpoint: "GET /quran/verses/uthmani?chapter_number=1&verse_number=1",
          response: `{
  "verses": [{
    "id": 1,
    "verse_number": 1,
    "text_uthmani": "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    "text_indopak": "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"
  }]
}`
        }
      },
      {
        name: "Quran Cloud",
        url: "https://alquran.cloud/api",
        description: "Comprehensive Quran API with extensive features",
        features: ["Arabic text", "Translations", "Audio", "Tafsir", "Sajda"],
        rateLimit: "No strict limits",
        documentation: "https://alquran.cloud/api",
        example: {
          endpoint: "GET /ayah/1:1",
          response: `{
  "code": 200,
  "status": "OK",
  "data": {
    "number": 1,
    "text": "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    "translation": "In the name of Allah, the Entirely Merciful, the Especially Merciful"
  }
}`
        }
      }
    ]
  },
  {
    id: "buddhist",
    name: "Buddhist APIs",
    description: "Free APIs for accessing Buddhist sacred texts",
    color: "bg-orange-100 text-orange-800",
    apis: [
      {
        name: "SuttaCentral",
        url: "https://suttacentral.net/api",
        description: "Free API for Buddhist texts (Pali Canon)",
        features: ["Pali texts", "Translations", "Commentaries", "Search"],
        rateLimit: "Reasonable use",
        documentation: "https://suttacentral.net/api",
        example: {
          endpoint: "GET /sutta/{sutta_id}?lang=en",
          response: `{
  "sutta": {
    "id": "dn1",
    "title": "Brahmajāla Sutta",
    "text": "Pali text content...",
    "translation": "English translation..."
  }
}`
        }
      },
      {
        name: "Buddhist Digital Resource Center",
        url: "https://www.tbrc.org/api",
        description: "Free API for Tibetan Buddhist texts",
        features: ["Tibetan texts", "Translations", "Manuscripts"],
        rateLimit: "Registration required",
        documentation: "https://www.tbrc.org/api",
        example: {
          endpoint: "GET /text/{text_id}",
          response: `{
  "text": {
    "id": "text_id",
    "title": "Tibetan text title",
    "content": "Tibetan text content...",
    "translation": "English translation..."
  }
}`
        }
      }
    ]
  },
  {
    id: "hindu",
    name: "Hindu APIs",
    description: "Free APIs for accessing Hindu sacred texts",
    color: "bg-red-100 text-red-800",
    apis: [
      {
        name: "Vedic Heritage Portal",
        url: "https://vedicheritage.gov.in/api",
        description: "Free API for Vedic texts",
        features: ["Vedas", "Upanishads", "Sanskrit texts"],
        rateLimit: "No strict limits",
        documentation: "https://vedicheritage.gov.in/api",
        example: {
          endpoint: "GET /text/{text_id}?lang=en",
          response: `{
  "text": {
    "id": "rig_veda_1_1_1",
    "title": "Rig Veda 1.1.1",
    "sanskrit": "अग्निमीळे पुरोहितं...",
    "translation": "I praise Agni, the priest..."
  }
}`
        }
      },
      {
        name: "Sanskrit Documents",
        url: "https://sanskritdocuments.org/api",
        description: "Free API for Sanskrit texts",
        features: ["Sanskrit texts", "Translations", "Grammar"],
        rateLimit: "No strict limits",
        documentation: "https://sanskritdocuments.org/api",
        example: {
          endpoint: "GET /text/{text_id}",
          response: `{
  "text": {
    "id": "text_id",
    "title": "Sanskrit text title",
    "content": "Sanskrit text content...",
    "translation": "English translation..."
  }
}`
        }
      }
    ]
  },
  {
    id: "sikh",
    name: "Sikh APIs",
    description: "Free APIs for accessing Sikh sacred texts",
    color: "bg-yellow-100 text-yellow-800",
    apis: [
      {
        name: "SikhNet",
        url: "https://www.sikhnet.com/api",
        description: "Free API for Sikh texts",
        features: ["Guru Granth Sahib", "Dasam Granth", "Translations"],
        rateLimit: "Reasonable use",
        documentation: "https://www.sikhnet.com/api",
        example: {
          endpoint: "GET /gurbani/{shabad_id}?lang=en",
          response: `{
  "shabad": {
    "id": "shabad_id",
    "title": "Shabad title",
    "gurmukhi": "ਗੁਰਮੁਖੀ text...",
    "translation": "English translation..."
  }
}`
        }
      },
      {
        name: "SearchGurbani",
        url: "https://www.searchgurbani.com/api",
        description: "Free API for Gurbani texts",
        features: ["Gurbani", "Search", "Translations", "Audio"],
        rateLimit: "No strict limits",
        documentation: "https://www.searchgurbani.com/api",
        example: {
          endpoint: "GET /gurbani/{ang_id}",
          response: `{
  "ang": {
    "id": "ang_id",
    "page": 1,
    "gurmukhi": "ਗੁਰਮੁਖੀ text...",
    "translation": "English translation...",
    "audio_url": "https://..."
  }
}`
        }
      }
    ]
  }
]

export default function APIDocumentationPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <Heading 
          title="Sacred Texts API Documentation"
          description="Complete documentation for free, open-source APIs used to access sacred texts from multiple traditions."
          className="flex items-center justify-center gap-3"
        />
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Complete documentation for free, open-source APIs used to access sacred texts from multiple traditions.
        </p>
        <div className="flex items-center justify-center gap-2">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <Zap className="h-3 w-3 mr-1" />
            Free APIs
          </Badge>
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            <BookOpen className="h-3 w-3 mr-1" />
            Open Source
          </Badge>
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            <Search className="h-3 w-3 mr-1" />
            Full Documentation
          </Badge>
        </div>
      </div>

      <Separator />

      {/* API Categories */}
      <Tabs defaultValue="bible" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          {apiCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
              <span className="capitalize">{category.id}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {apiCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="space-y-6">
            {/* Category Overview */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </div>
                  <Badge className={category.color}>
                    {category.apis.length} APIs
                  </Badge>
                </div>
              </CardHeader>
            </Card>

            {/* Individual APIs */}
            {category.apis.map((api, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Globe className="h-5 w-5" />
                        {api.name}
                      </CardTitle>
                      <CardDescription>{api.description}</CardDescription>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={api.documentation} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Docs
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-2">Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {api.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Rate Limit */}
                  <div>
                    <h4 className="font-semibold mb-2">Rate Limit</h4>
                    <p className="text-sm text-muted-foreground">{api.rateLimit}</p>
                  </div>

                  {/* Example */}
                  <div>
                    <h4 className="font-semibold mb-2">Example Request</h4>
                    <div className="bg-muted p-3 rounded-lg">
                      <p className="text-sm font-mono mb-2">{api.example.endpoint}</p>
                      <pre className="text-xs overflow-x-auto">
                        <code>{api.example.response}</code>
                      </pre>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    <Button asChild>
                      <Link href={api.url} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit API
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href={api.documentation} target="_blank">
                        <Download className="h-4 w-4 mr-2" />
                        Documentation
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>

      {/* Usage Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle>API Usage Guidelines</CardTitle>
          <CardDescription>
            Best practices and guidelines for using these free APIs
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">✅ Do's</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Respect rate limits</li>
                <li>• Cache responses when possible</li>
                <li>• Include proper attribution</li>
                <li>• Handle errors gracefully</li>
                <li>• Use HTTPS endpoints</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">❌ Don'ts</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Don't make excessive requests</li>
                <li>• Don't scrape without permission</li>
                <li>• Don't redistribute without license</li>
                <li>• Don't ignore error responses</li>
                <li>• Don't use for commercial purposes without permission</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Implementation Examples</CardTitle>
          <CardDescription>
            Code examples for integrating these APIs into your applications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Tabs defaultValue="javascript" className="w-full">
            <TabsList>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
              <TabsTrigger value="curl">cURL</TabsTrigger>
            </TabsList>
            
            <TabsContent value="javascript" className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Bible API Example</h4>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`// Fetch Bible verse
const response = await fetch('https://bible-api.com/john/3:16');
const data = await response.json();
console.log(data.text);

// Search Bible
const searchResponse = await fetch('https://bible-api.com/search?q=love');
const searchData = await searchResponse.json();
console.log(searchData.results);`}</code>
                </pre>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Quran API Example</h4>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`// Fetch Quran verse
const response = await fetch('https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=1&verse_number=1');
const data = await response.json();
console.log(data.verses[0].text_uthmani);

// Get translation
const translationResponse = await fetch('https://api.quran.com/api/v4/quran/translations/131?chapter_number=1');
const translationData = await translationResponse.json();
console.log(translationData.translations[0].text);`}</code>
                </pre>
              </div>
            </TabsContent>
            
            <TabsContent value="python" className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Python Example</h4>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`import requests

# Fetch Bible verse
response = requests.get('https://bible-api.com/john/3:16')
data = response.json()
print(data['text'])

# Fetch Quran verse
quran_response = requests.get('https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=1&verse_number=1')
quran_data = quran_response.json()
print(quran_data['verses'][0]['text_uthmani'])`}</code>
                </pre>
              </div>
            </TabsContent>
            
            <TabsContent value="curl" className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">cURL Examples</h4>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`# Bible API
curl https://bible-api.com/john/3:16

# Quran API
curl https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=1&verse_number=1

# Buddhist API
curl https://suttacentral.net/api/sutta/dn1?lang=en`}</code>
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
} 