import React from 'react'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Calendar, BookOpen, Users, Globe, Lightbulb, Heart } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'article',
      publishedTime: '2024-01-01T00:00:00.000Z',
      authors: ['ZION.FM'],
      section: 'Taoism',
      tags: ['Taoism', 'Early History', 'Chinese Philosophy', 'Laozi', 'Zhuangzi', 'Dao De Jing']
    }
  }
}

export default async function EarlyTaoismPage({ params: { locale } }: { params: { locale: string } }) {

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          Early Taoism
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          The origins and early development of Taoism, from the legendary Laozi to the philosophical 
          schools that shaped this ancient Chinese tradition.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Badge variant="secondary" className="text-sm">
            <Calendar className="w-3 h-3 mr-1" />
            6th-3rd Century BCE
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Globe className="w-3 h-3 mr-1" />
            Ancient China
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Lightbulb className="w-3 h-3 mr-1" />
            Philosophical Origins
          </Badge>
        </div>
      </div>

      {/* Timeline Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Historical Timeline
          </CardTitle>
          <CardDescription>
            Key periods in the early development of Taoism
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-green-600">Spring and Autumn Period (770-476 BCE)</h4>
                <p className="text-sm text-muted-foreground">
                  Emergence of early Taoist thought and the legendary Laozi
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-600">Warring States Period (475-221 BCE)</h4>
                <p className="text-sm text-muted-foreground">
                  Development of Taoist philosophy and the Zhuangzi
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-600">Early Han Dynasty (206 BCE-220 CE)</h4>
                <p className="text-sm text-muted-foreground">
                  Institutionalization and early religious developments
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Sections */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Origins and Laozi */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Origins and Laozi
            </CardTitle>
            <CardDescription>The legendary founder and the Dao De Jing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">The Legendary Laozi</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Laozi, traditionally dated to the 6th century BCE, is considered the founder of Taoism. 
                His life is shrouded in legend, with stories describing him as a wise sage who served 
                as a keeper of archives in the Zhou court.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Traditional dating: 6th century BCE</li>
                <li>• Occupation: Keeper of archives in Zhou court</li>
                <li>• Journey to the west and the writing of Dao De Jing</li>
                <li>• Influence on Chinese philosophy and culture</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">The Dao De Jing</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Also known as the Tao Te Ching, this foundational text consists of 81 short chapters 
                that explore the nature of the Dao (Way) and its manifestation in the world.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• 81 chapters of poetic wisdom</li>
                <li>• Central concept of the Dao (Way)</li>
                <li>• Principles of wu-wei (non-action)</li>
                <li>• Emphasis on naturalness and simplicity</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Zhuangzi and Philosophical Development */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Zhuangzi and Philosophical Development
            </CardTitle>
            <CardDescription>The second great Taoist philosopher</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Zhuangzi (c. 369-286 BCE)</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Zhuangzi, also known as Chuang Tzu, was a major Taoist philosopher who lived during 
                the Warring States period. His work expanded on Laozi's ideas with wit, humor, and 
                profound insights.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Lived during the Warring States period</li>
                <li>• Author of the Zhuangzi (Chuang Tzu)</li>
                <li>• Known for parables and allegories</li>
                <li>• Emphasis on relativity and perspective</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Philosophical Themes</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Zhuangzi's philosophy explores themes of relativity, transformation, and the 
                interconnectedness of all things.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• The relativity of perspectives and judgments</li>
                <li>• Transformation and change as natural processes</li>
                <li>• Freedom from conventional thinking</li>
                <li>• The unity of opposites</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Core Concepts */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            Core Concepts of Early Taoism
          </CardTitle>
          <CardDescription>Fundamental principles and ideas</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-600">The Dao (Way)</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The central concept of Taoism, the Dao is the ultimate reality that underlies 
                and unifies all existence.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Ineffable and beyond description</li>
                <li>• Source of all things</li>
                <li>• Natural order and harmony</li>
                <li>• Both transcendent and immanent</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Wu-wei (Non-action)</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The principle of effortless action, aligning oneself with the natural flow 
                of the Dao rather than forcing outcomes.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Acting in harmony with nature</li>
                <li>• Avoiding unnecessary effort</li>
                <li>• Spontaneous and intuitive action</li>
                <li>• Effectiveness through alignment</li>
              </ul>
            </div>
          </div>
          
          <Separator />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Naturalness (Ziran)</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The quality of being natural and spontaneous, following one's true nature 
                without artificial constraints.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Authenticity and genuineness</li>
                <li>• Freedom from artificiality</li>
                <li>• Spontaneous expression</li>
                <li>• Harmony with natural processes</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Simplicity (Pu)</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The uncarved block, representing the state of natural simplicity before 
                artificial distinctions and complications.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Return to natural simplicity</li>
                <li>• Freedom from complexity</li>
                <li>• Unpretentious and genuine</li>
                <li>• Source of true wisdom</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Historical Context */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Historical Context
          </CardTitle>
          <CardDescription>The social and political environment of early Taoism</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Spring and Autumn Period</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The period when Laozi is traditionally said to have lived was marked by 
                political instability and social change.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Decline of Zhou dynasty authority</li>
                <li>• Rise of competing states</li>
                <li>• Social and political turmoil</li>
                <li>• Search for new philosophical solutions</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Warring States Period</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The era of Zhuangzi was characterized by intense warfare and political 
                competition between states.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Constant warfare between states</li>
                <li>• Political intrigue and power struggles</li>
                <li>• Intellectual flourishing and debate</li>
                <li>• Development of various philosophical schools</li>
              </ul>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-semibold mb-3 text-green-600">Intellectual Environment</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Early Taoism developed alongside other major philosophical traditions, 
              creating a rich intellectual environment.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Confucianism</h5>
                <p className="text-xs text-muted-foreground">
                  Emphasis on social order and moral cultivation
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Legalism</h5>
                <p className="text-xs text-muted-foreground">
                  Focus on strict laws and centralized authority
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Mohism</h5>
                <p className="text-xs text-muted-foreground">
                  Universal love and utilitarian ethics
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Texts */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Key Early Texts
          </CardTitle>
          <CardDescription>Foundational works of Taoist philosophy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Dao De Jing (Tao Te Ching)</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  The foundational text of Taoism, traditionally attributed to Laozi.
                </p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• 81 chapters of poetic wisdom</li>
                  <li>• Explores the nature of the Dao</li>
                  <li>• Principles of wu-wei and naturalness</li>
                  <li>• Guidance for rulers and individuals</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Zhuangzi (Chuang Tzu)</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  A collection of philosophical writings attributed to Zhuangzi.
                </p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Parables and allegories</li>
                  <li>• Exploration of relativity and perspective</li>
                  <li>• Celebration of natural freedom</li>
                  <li>• Critique of conventional thinking</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Liezi</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  A collection of stories and philosophical discussions.
                </p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Stories of sages and immortals</li>
                  <li>• Exploration of transformation</li>
                  <li>• Discussion of fate and free will</li>
                  <li>• Emphasis on inner cultivation</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Guanzi</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  A diverse collection of philosophical and political writings.
                </p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Political philosophy</li>
                  <li>• Economic thought</li>
                  <li>• Military strategy</li>
                  <li>• Integration of various traditions</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Early Schools and Traditions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Early Schools and Traditions
          </CardTitle>
          <CardDescription>Diverse approaches to Taoist philosophy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Philosophical Taoism</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  The early philosophical tradition focused on understanding the Dao 
                  and living in harmony with nature.
                </p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Emphasis on natural philosophy</li>
                  <li>• Focus on individual cultivation</li>
                  <li>• Rejection of artificial social structures</li>
                  <li>• Celebration of natural freedom</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Political Taoism</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Applications of Taoist principles to governance and political theory.
                </p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Principles of good governance</li>
                  <li>• Emphasis on minimal interference</li>
                  <li>• Natural order in society</li>
                  <li>• Leadership through example</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Hermit Traditions</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Individuals who withdrew from society to pursue Taoist cultivation.
                </p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Withdrawal from worldly concerns</li>
                  <li>• Focus on inner cultivation</li>
                  <li>• Connection with nature</li>
                  <li>• Pursuit of immortality</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Early Religious Elements</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  The beginnings of religious Taoism with practices and beliefs.
                </p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Quest for immortality</li>
                  <li>• Alchemical practices</li>
                  <li>• Meditation and breathing techniques</li>
                  <li>• Connection with spirits and deities</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Influence and Legacy */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5" />
            Influence and Legacy
          </CardTitle>
          <CardDescription>The lasting impact of early Taoism</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Chinese Culture</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Early Taoism has profoundly influenced Chinese culture, art, and literature.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Influence on Chinese poetry and literature</li>
                <li>• Impact on traditional Chinese medicine</li>
                <li>• Contribution to Chinese art and aesthetics</li>
                <li>• Influence on martial arts and qigong</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Global Philosophy</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Taoist ideas have influenced philosophical thought worldwide.
              </p>
              <ul className="text-sm space-y-1 ml-4">
                <li>• Influence on Western philosophy and psychology</li>
                <li>• Impact on environmental philosophy</li>
                <li>• Contribution to interfaith dialogue</li>
                <li>• Influence on modern spirituality</li>
              </ul>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-semibold mb-3 text-green-600">Contemporary Relevance</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Early Taoist principles remain relevant to modern challenges and concerns.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Environmental Ethics</h5>
                <p className="text-xs text-muted-foreground">
                  Harmony with nature and environmental stewardship
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Personal Development</h5>
                <p className="text-xs text-muted-foreground">
                  Inner cultivation and authentic living
                </p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <h5 className="font-semibold mb-2">Social Harmony</h5>
                <p className="text-xs text-muted-foreground">
                  Natural order and minimal interference
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Study Resources */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Study Resources
          </CardTitle>
          <CardDescription>Further reading and research materials</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Primary Sources</h4>
              <ul className="text-sm space-y-2">
                <li>• <em>Dao De Jing</em> - Laozi's foundational text</li>
                <li>• <em>Zhuangzi</em> - Philosophical writings and parables</li>
                <li>• <em>Liezi</em> - Stories and philosophical discussions</li>
                <li>• <em>Guanzi</em> - Political and philosophical writings</li>
                <li>• <em>Huainanzi</em> - Han dynasty synthesis</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-green-600">Modern Scholarship</h4>
              <ul className="text-sm space-y-2">
                <li>• <em>Taoism: An Essential Guide</em> by Eva Wong</li>
                <li>• <em>The Tao and the Daimon</em> by Jordan Paper</li>
                <li>• <em>Early Chinese Mysticism</em> by Livia Kohn</li>
                <li>• <em>Taoism: Growth of a Religion</em> by Isabelle Robinet</li>
                <li>• <em>The Way and Its Power</em> by Arthur Waley</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Links */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild variant="outline">
          <Link href="/religion/taoism/history/medieval">
            Medieval Taoism
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/religion/taoism/history/modern">
            Modern Taoism
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/religion/taoism/overview">
            Taoism Overview
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/studies/guides">
            Study Guides
          </Link>
        </Button>
      </div>
    </div>
  )
}

// Static content for translations
const content = {
  title: 'Early Taoism - Origins and Philosophical Development',
  description: 'Explore the origins and early development of Taoism, from the legendary Laozi to the philosophical schools that shaped this ancient Chinese tradition.',
  keywords: 'Early Taoism, Laozi, Zhuangzi, Dao De Jing, Chinese Philosophy, Ancient China, Taoist Origins, Philosophical Taoism'
} 