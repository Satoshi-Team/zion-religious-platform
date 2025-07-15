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
  Users,
  Globe,
  Target,
  Clock,
  Book
} from "lucide-react"

export const metadata: Metadata = {
  title: "The Holy Spirit | Bible Study Curriculum",
  description: "Study the Holy Spirit and its significance.",
  keywords: ["holy spirit", "spirit of god", "pentecost", "bible study"],
}

export default function HolySpiritPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">The Holy Spirit</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Study the Holy Spirit and its significance.
        </p>

        <Tabs defaultValue="nature" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="nature">Nature</TabsTrigger>
            <TabsTrigger value="work">Work</TabsTrigger>
            <TabsTrigger value="gifts">Gifts</TabsTrigger>
            <TabsTrigger value="fruit">Fruit</TabsTrigger>
          </TabsList>

          <TabsContent value="nature" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Nature of the Spirit</CardTitle>
                <CardDescription>Understanding the Holy Spirit</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Zap className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Person of the Spirit</h3>
                    <p className="text-muted-foreground">
                      The Holy Spirit as a divine person.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Relationship with God</h3>
                    <p className="text-muted-foreground">
                      The Spirit's role in the Trinity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Universal Presence</h3>
                    <p className="text-muted-foreground">
                      The Spirit's work in all creation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="work" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Work of the Spirit</CardTitle>
                <CardDescription>The Spirit's activities in the world</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Regeneration</h3>
                    <p className="text-muted-foreground">
                      Bringing new life to believers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Sanctification</h3>
                    <p className="text-muted-foreground">
                      Making believers holy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Empowerment</h3>
                    <p className="text-muted-foreground">
                      Enabling believers for service.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gifts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Spiritual Gifts</CardTitle>
                <CardDescription>Gifts given by the Holy Spirit</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Service Gifts</h3>
                    <p className="text-muted-foreground">
                      Gifts for serving others.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Leadership Gifts</h3>
                    <p className="text-muted-foreground">
                      Gifts for leading the church.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Sign Gifts</h3>
                    <p className="text-muted-foreground">
                      Gifts that demonstrate God's power.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fruit" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Fruit of the Spirit</CardTitle>
                <CardDescription>The character produced by the Spirit</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Love</h3>
                    <p className="text-muted-foreground">
                      The foundation of all fruit.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Joy and Peace</h3>
                    <p className="text-muted-foreground">
                      Inner qualities of the Spirit.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Self-Control</h3>
                    <p className="text-muted-foreground">
                      The Spirit's work in character.
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
              <CardDescription>Tools to help you understand the Spirit</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Timeline</h3>
                  <p className="text-sm text-muted-foreground">Explore the Spirit's work in history</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Map</h3>
                  <p className="text-sm text-muted-foreground">Study the Spirit's global impact</p>
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
                  <p className="text-sm text-muted-foreground">Expert insights on the Spirit</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Video Lessons</h3>
                  <p className="text-sm text-muted-foreground">Visual explanations of key concepts</p>
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