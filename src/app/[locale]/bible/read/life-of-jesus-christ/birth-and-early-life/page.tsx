import React from 'react'
import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight,
  Star,
  Heart,
  Crown,
  Zap,
  Sun,
  Moon,
  MapPin,
  Calendar,
  Building,
  Cross,
  Shield,
  Users,
  Globe,
  Scroll,
  Target,
  Eye,
  Baby,
  School,
  Home
} from "lucide-react"

export const metadata: Metadata = {
  title: "The Birth and Early Life of Jesus | Bible Study Curriculum",
  description: "Study the birth, childhood, and early years of Jesus Christ.",
  keywords: ["birth", "nativity", "childhood", "early life", "gospels", "bible study"],
}

export default function BirthAndEarlyLifePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">The Birth and Early Life of Jesus</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Study the birth, childhood, and early years of Jesus Christ.
        </p>

        <Tabs defaultValue="birth" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="birth">Birth</TabsTrigger>
            <TabsTrigger value="childhood">Childhood</TabsTrigger>
            <TabsTrigger value="family">Family</TabsTrigger>
            <TabsTrigger value="significance">Significance</TabsTrigger>
          </TabsList>

          <TabsContent value="birth" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>The Nativity</CardTitle>
                <CardDescription>Jesus' birth and early days</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Star className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Birth</h3>
                    <p className="text-muted-foreground">
                      The miraculous birth of Jesus in Bethlehem.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Setting</h3>
                    <p className="text-muted-foreground">
                      The historical and cultural context of Jesus' birth.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Timeline</h3>
                    <p className="text-muted-foreground">
                      Key events surrounding Jesus' birth.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="childhood" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Early Years</CardTitle>
                <CardDescription>Jesus' childhood and development</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Baby className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Infancy</h3>
                    <p className="text-muted-foreground">
                      Jesus' early years and family life.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <School className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Education</h3>
                    <p className="text-muted-foreground">
                      Jesus' learning and spiritual development.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Home className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Home Life</h3>
                    <p className="text-muted-foreground">
                      Jesus' family relationships and daily life.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="family" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Family Context</CardTitle>
                <CardDescription>Jesus' family and relationships</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Parents</h3>
                    <p className="text-muted-foreground">
                      Mary and Joseph's role in Jesus' life.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Building className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Community</h3>
                    <p className="text-muted-foreground">
                      Jesus' relationship with his extended family and community.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Cultural Setting</h3>
                    <p className="text-muted-foreground">
                      The social and religious environment of Jesus' upbringing.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="significance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Significance</CardTitle>
                <CardDescription>Understanding the importance of Jesus' early life</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Divine Purpose</h3>
                    <p className="text-muted-foreground">
                      How Jesus' early life fulfilled God's plan.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Crown className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Human Experience</h3>
                    <p className="text-muted-foreground">
                      Jesus' identification with humanity through his early life.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Spiritual Impact</h3>
                    <p className="text-muted-foreground">
                      The lasting significance of Jesus' birth and early years.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Learning</CardTitle>
              <CardDescription>Tools to help you understand Jesus' early life</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Timeline</h3>
                  <p className="text-sm text-muted-foreground">Explore key events in Jesus' early life</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Map</h3>
                  <p className="text-sm text-muted-foreground">Study the locations of Jesus' early life</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Study Resources</CardTitle>
              <CardDescription>Additional materials for deeper study</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Commentary Resources</h3>
                  <p className="text-sm text-muted-foreground">Expert insights on Jesus' early life</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Video Lessons</h3>
                  <p className="text-sm text-muted-foreground">Visual explanations of key events</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 