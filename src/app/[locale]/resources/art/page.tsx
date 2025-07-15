import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { BookOpen, Users, Clock, Target, Heart, Lightbulb, MapPin, Calendar, Award, BookMarked, PlayCircle, FileText, Globe, Star, Palette, Camera, Museum, Brush } from 'lucide-react'
import Link from 'next/link'

interface ReligiousArtPageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: ReligiousArtPageProps): Promise<Metadata> {
  
  return {
    title: 'Religious Art - Sacred Art Resources & Cultural Heritage | Sacred Texts',
    description: 'Explore religious art from various traditions, including sacred paintings, sculptures, architecture, and artistic techniques that express spiritual beliefs and cultural heritage.',
    keywords: 'religious art, sacred art, religious paintings, religious sculpture, religious architecture, spiritual art, cultural heritage, religious iconography, religious symbolism, religious artists',
    openGraph: {
      title: 'Religious Art - Sacred Art Resources & Cultural Heritage',
      description: 'Explore religious art from various traditions, including sacred paintings, sculptures, and architecture.',
      type: 'website',
    },
  }
}

export default async function ReligiousArtPage({ params }: ReligiousArtPageProps) {

  const artTraditions = [
    {
      title: 'Christian Art',
      description: 'Sacred art expressing Christian beliefs and biblical narratives',
      icon: Heart,
      forms: ['Icon Painting', 'Frescoes', 'Stained Glass', 'Religious Sculpture', 'Church Architecture'],
      periods: ['Early Christian', 'Byzantine', 'Medieval', 'Renaissance', 'Baroque', 'Modern'],
      color: 'bg-blue-50 dark:bg-blue-950'
    },
    {
      title: 'Islamic Art',
      description: 'Artistic expression within Islamic cultural and religious traditions',
      icon: Star,
      forms: ['Calligraphy', 'Geometric Patterns', 'Arabesque', 'Islamic Architecture', 'Miniature Painting'],
      periods: ['Umayyad', 'Abbasid', 'Ottoman', 'Mughal', 'Safavid', 'Contemporary'],
      color: 'bg-green-50 dark:bg-green-950'
    },
    {
      title: 'Hindu Art',
      description: 'Sacred art depicting Hindu deities and spiritual concepts',
      icon: Palette,
      forms: ['Temple Sculpture', 'Miniature Paintings', 'Mandalas', 'Religious Architecture', 'Ritual Objects'],
      periods: ['Ancient', 'Classical', 'Medieval', 'Mughal', 'Colonial', 'Modern'],
      color: 'bg-orange-50 dark:bg-orange-950'
    },
    {
      title: 'Buddhist Art',
      description: 'Artistic expression of Buddhist teachings and spiritual ideals',
      icon: Lotus,
      forms: ['Buddha Statues', 'Thangka Paintings', 'Stupas', 'Temple Architecture', 'Mandala Art'],
      periods: ['Early Buddhist', 'Mahayana', 'Vajrayana', 'Theravada', 'Contemporary'],
      color: 'bg-purple-50 dark:bg-purple-950'
    }
  ]

  const artisticForms = [
    {
      title: 'Sacred Architecture',
      description: 'Religious buildings and structures designed for spiritual purposes',
      examples: [
        {
          name: 'Christian Cathedrals',
          description: 'Gothic and Romanesque church architecture',
          features: ['Flying Buttresses', 'Stained Glass Windows', 'Nave and Aisle Design', 'Bell Towers', 'Sacred Geometry']
        },
        {
          name: 'Islamic Mosques',
          description: 'Places of worship in Islamic tradition',
          features: ['Minarets', 'Domes', 'Mihrab (Prayer Niche)', 'Courtyards', 'Calligraphic Decorations']
        },
        {
          name: 'Hindu Temples',
          description: 'Sacred structures for Hindu worship',
          features: ['Gopurams (Tower Gates)', 'Mandapas (Pavilions)', 'Garbhagriha (Sanctum)', 'Temple Tanks', 'Sculptural Reliefs']
        },
        {
          name: 'Buddhist Stupas',
          description: 'Religious monuments containing relics',
          features: ['Dome Structure', 'Harmika (Square Platform)', 'Chattra (Umbrella)', 'Circumambulation Path', 'Relic Chambers']
        }
      ]
    },
    {
      title: 'Sacred Paintings',
      description: 'Religious artwork created through various painting techniques',
      examples: [
        {
          name: 'Christian Icons',
          description: 'Sacred images in Orthodox Christian tradition',
          features: ['Egg Tempera Technique', 'Gold Leaf Background', 'Symbolic Colors', 'Reverse Perspective', 'Spiritual Portraits']
        },
        {
          name: 'Islamic Miniatures',
          description: 'Detailed paintings in Islamic manuscript tradition',
          features: ['Fine Detail Work', 'Persian Influence', 'Narrative Scenes', 'Decorative Borders', 'Calligraphic Elements']
        },
        {
          name: 'Hindu Miniatures',
          description: 'Small-scale paintings depicting Hindu themes',
          features: ['Rajput Style', 'Mughal Influence', 'Deity Portraits', 'Mythological Scenes', 'Rich Colors']
        },
        {
          name: 'Buddhist Thangkas',
          description: 'Tibetan scroll paintings',
          features: ['Scroll Format', 'Religious Imagery', 'Meditation Aids', 'Portable Art', 'Symbolic Elements']
        }
      ]
    },
    {
      title: 'Religious Sculpture',
      description: 'Three-dimensional religious artwork and carvings',
      examples: [
        {
          name: 'Christian Statues',
          description: 'Sculptures of saints and biblical figures',
          features: ['Marble and Stone', 'Realistic Proportions', 'Emotional Expression', 'Religious Symbolism', 'Architectural Integration']
        },
        {
          name: 'Hindu Temple Sculptures',
          description: 'Stone carvings on temple walls and pillars',
          features: ['Narrative Reliefs', 'Deity Images', 'Mythological Scenes', 'Ornamental Details', 'Symbolic Meanings']
        },
        {
          name: 'Buddhist Statues',
          description: 'Sculptures of Buddha and bodhisattvas',
          features: ['Meditation Postures', 'Mudras (Hand Gestures)', 'Serene Expressions', 'Lotus Thrones', 'Aureoles']
        },
        {
          name: 'Islamic Calligraphy',
          description: 'Sacred text as artistic expression',
          features: ['Arabic Script', 'Geometric Patterns', 'Religious Texts', 'Decorative Elements', 'Spiritual Significance']
        }
      ]
    }
  ]

  const culturalSignificance = [
    {
      title: 'Spiritual Expression',
      description: 'How religious art expresses spiritual beliefs and experiences',
      aspects: [
        'Visual representation of divine concepts',
        'Aid to meditation and prayer',
        'Teaching religious stories and morals',
        'Creating sacred spaces and atmosphere',
        'Connecting with the divine through beauty'
      ]
    },
    {
      title: 'Cultural Heritage',
      description: 'Religious art as cultural and historical documentation',
      aspects: [
        'Preserving cultural traditions and values',
        'Historical documentation of religious practices',
        'Cross-cultural artistic influences',
        'Evolution of artistic styles and techniques',
        'Cultural identity and community expression'
      ]
    },
    {
      title: 'Educational Value',
      description: 'Religious art as a tool for learning and understanding',
      aspects: [
        'Teaching religious history and doctrine',
        'Understanding cultural contexts and values',
        'Learning artistic techniques and styles',
        'Appreciating diverse religious traditions',
        'Promoting interfaith understanding and dialogue'
      ]
    }
  ]

  const museumsAndCollections = [
    {
      title: 'Major Museums',
      items: [
        { name: 'The Metropolitan Museum of Art', location: 'New York, USA', focus: 'Comprehensive religious art collection' },
        { name: 'The British Museum', location: 'London, UK', focus: 'Ancient and world religious art' },
        { name: 'The Louvre', location: 'Paris, France', focus: 'Christian and Islamic art' },
        { name: 'The Vatican Museums', location: 'Vatican City', focus: 'Christian art and artifacts' }
      ]
    },
    {
      title: 'Specialized Collections',
      items: [
        { name: 'Museum of Islamic Art', location: 'Doha, Qatar', focus: 'Islamic art and culture' },
        { name: 'National Museum of India', location: 'New Delhi, India', focus: 'Hindu and Buddhist art' },
        { name: 'Rubin Museum of Art', location: 'New York, USA', focus: 'Himalayan and Buddhist art' },
        { name: 'Benaki Museum', location: 'Athens, Greece', focus: 'Byzantine and Orthodox art' }
      ]
    },
    {
      title: 'Online Resources',
      items: [
        { name: 'Google Arts & Culture', type: 'Digital Platform', focus: 'Virtual museum tours and collections' },
        { name: 'The Art Institute of Chicago', type: 'Online Collection', focus: 'Religious art database' },
        { name: 'Sacred Art Archive', type: 'Digital Library', focus: 'Religious art documentation' },
        { name: 'UNESCO World Heritage', type: 'Cultural Heritage', focus: 'Sacred sites and monuments' }
      ]
    }
  ]

  const contemporaryReligiousArt = [
    {
      title: 'Modern Interpretations',
      description: 'Contemporary artists exploring religious themes',
      artists: [
        {
          name: 'Marc Chagall',
          style: 'Modernist religious paintings',
          focus: 'Jewish themes and biblical stories'
        },
        {
          name: 'Salvador Dalí',
          style: 'Surrealist religious art',
          focus: 'Christian symbolism and mysticism'
        },
        {
          name: 'Anish Kapoor',
          style: 'Contemporary sculpture',
          focus: 'Spiritual and metaphysical themes'
        },
        {
          name: 'Bill Viola',
          style: 'Video art installations',
          focus: 'Religious and spiritual experiences'
        }
      ]
    },
    {
      title: 'Digital Religious Art',
      description: 'Modern technology in religious artistic expression',
      forms: [
        'Digital iconography and sacred images',
        'Virtual reality religious experiences',
        'Interactive religious art installations',
        'Social media religious art communities',
        'Digital preservation of sacred art'
      ]
    },
    {
      title: 'Interfaith Art Projects',
      description: 'Collaborative art projects promoting religious understanding',
      initiatives: [
        'Multi-faith art exhibitions',
        'Interfaith artist collaborations',
        'Community art projects',
        'Religious art education programs',
        'Cultural exchange through art'
      ]
    }
  ]

  const learningResources = [
    {
      title: 'Books and Publications',
      items: [
        { name: 'The Art of the Sacred', author: 'Graham Howes', focus: 'Introduction to religious art' },
        { name: 'Islamic Art and Architecture', author: 'Robert Hillenbrand', focus: 'Comprehensive Islamic art guide' },
        { name: 'Hindu Art and Architecture', author: 'George Michell', focus: 'Hindu artistic traditions' },
        { name: 'Buddhist Art and Architecture', author: 'Robert E. Fisher', focus: 'Buddhist artistic heritage' }
      ]
    },
    {
      title: 'Online Courses',
      items: [
        { name: 'Coursera - Art History', type: 'Online Course', focus: 'Religious art in art history' },
        { name: 'edX - Islamic Art', type: 'Online Course', focus: 'Islamic artistic traditions' },
        { name: 'Khan Academy', type: 'Educational Platform', focus: 'Religious art tutorials' },
        { name: 'YouTube Art Channels', type: 'Video Content', focus: 'Religious art documentaries' }
      ]
    },
    {
      title: 'Art Workshops',
      items: [
        { name: 'Icon Painting Workshops', type: 'Hands-on Learning', focus: 'Traditional icon techniques' },
        { name: 'Calligraphy Classes', type: 'Skill Development', focus: 'Islamic and other calligraphy' },
        { name: 'Sacred Geometry', type: 'Mathematical Art', focus: 'Geometric patterns in religious art' },
        { name: 'Temple Architecture', type: 'Design Study', focus: 'Religious building design' }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Religious Art
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore the rich world of religious art from various traditions, including sacred paintings, sculptures, 
          architecture, and artistic techniques that express spiritual beliefs and cultural heritage.
        </p>
      </div>

      {/* Art Traditions */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Major Religious Art Traditions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {artTraditions.map((tradition, index) => (
            <Card key={index} className={`${tradition.color} border-0`}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <tradition.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <CardTitle className="text-xl">{tradition.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {tradition.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Art Forms:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tradition.forms.map((form, formIndex) => (
                        <Badge key={formIndex} variant="secondary">{form}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Historical Periods:</h4>
                    <div className="space-y-1">
                      {tradition.periods.map((period, periodIndex) => (
                        <div key={periodIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{period}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Artistic Forms */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Forms of Religious Art
        </h2>
        <div className="space-y-8">
          {artisticForms.map((form, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {form.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {form.description}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {form.examples.map((example, exampleIndex) => (
                  <Card key={exampleIndex} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{example.name}</CardTitle>
                      <CardDescription className="text-base">
                        {example.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {example.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cultural Significance */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Cultural and Spiritual Significance
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {culturalSignificance.map((significance, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{significance.title}</CardTitle>
                <CardDescription className="text-base">
                  {significance.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {significance.aspects.map((aspect, aspectIndex) => (
                    <div key={aspectIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{aspect}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Museums and Collections */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Museums and Collections
        </h2>
        <div className="space-y-8">
          {museumsAndCollections.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{item.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {item.location || item.type}
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                            {item.focus}
                          </p>
                        </div>
                        <Museum className="h-5 w-5 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contemporary Religious Art */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Contemporary Religious Art
        </h2>
        <div className="space-y-8">
          {contemporaryReligiousArt.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {category.description}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {(category.artists || category.forms || category.initiatives).map((item, itemIndex) => (
                  <Card key={itemIndex} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.name || item}</CardTitle>
                      {item.style && (
                        <CardDescription className="text-base">
                          {item.style}
                        </CardDescription>
                      )}
                    </CardHeader>
                    {item.focus && (
                      <CardContent>
                        <p className="text-gray-700 dark:text-gray-300">
                          {item.focus}
                        </p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Resources */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Learning Resources
        </h2>
        <div className="space-y-8">
          {learningResources.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{item.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {item.author || item.type}
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                            {item.focus}
                          </p>
                        </div>
                        <BookOpen className="h-5 w-5 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-0">
          <CardContent className="pt-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Explore Religious Art
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Religious art offers a unique window into spiritual beliefs, cultural heritage, and human creativity. 
              Whether through ancient masterpieces or contemporary expressions, it continues to inspire and connect people across traditions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/resources">
                  <BookOpen className="mr-2 h-5 w-5" />
                  All Resources
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/studies">
                  <Globe className="mr-2 h-5 w-5" />
                  Study Resources
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
} 