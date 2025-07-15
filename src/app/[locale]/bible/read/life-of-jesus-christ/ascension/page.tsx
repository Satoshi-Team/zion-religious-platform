import React from 'react'
import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Heart,
  Crown,
  Cloud,
  Eye,
  Target,
  Users,
  Globe,
  ArrowRight
} from "lucide-react"

export const metadata: Metadata = {
  title: "The Ascension | Bible Study Curriculum",
  description: "Study the Ascension and its significance.",
  keywords: ["ascension", "jesus ascension", "bible study"],
}

export default function AscensionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">The Ascension</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Study the Ascension and its significance.
        </p>

        <Tabs defaultValue="nature" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="nature">Nature</TabsTrigger>
            <TabsTrigger value="purpose">Purpose</TabsTrigger>
            <TabsTrigger value="significance">Significance</TabsTrigger>
            <TabsTrigger value="promise">Promise</TabsTrigger>
          </TabsList>

          <TabsContent value="nature" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Nature of Ascension</CardTitle>
                <CardDescription>Understanding the Ascension</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Physical Departure</h3>
                    <p className="text-muted-foreground">
                      Jesus' bodily ascension to heaven.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Cloud className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Cloud Reception</h3>
                    <p className="text-muted-foreground">
                      Received into the clouds of heaven.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Eye className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Witnessed Event</h3>
                    <p className="text-muted-foreground">
                      Seen by the disciples.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="purpose" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Purpose</CardTitle>
                <CardDescription>The purpose of the Ascension</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Crown className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Exaltation</h3>
                    <p className="text-muted-foreground">
                      Jesus' return to glory.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Intercession</h3>
                    <p className="text-muted-foreground">
                      Jesus' ongoing work for believers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Empowerment</h3>
                    <p className="text-muted-foreground">
                      Sending of the Holy Spirit.
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
                <CardDescription>Meaning of the Ascension</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Crown className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Kingship</h3>
                    <p className="text-muted-foreground">
                      Jesus' reign over all creation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Priesthood</h3>
                    <p className="text-muted-foreground">
                      Jesus' ongoing priestly work.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Victory</h3>
                    <p className="text-muted-foreground">
                      Triumph over all enemies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="promise" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Promise</CardTitle>
                <CardDescription>The promise of return</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Cloud className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Return</h3>
                    <p className="text-muted-foreground">
                      Promise of Jesus' second coming.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Rapture</h3>
                    <p className="text-muted-foreground">
                      Gathering of believers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Kingdom</h3>
                    <p className="text-muted-foreground">
                      Establishment of God's kingdom.
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
              <CardDescription>Tools to help you understand the Ascension</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Timeline</h3>
                  <p className="text-sm text-muted-foreground">Explore the sequence of events</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Map</h3>
                  <p className="text-sm text-muted-foreground">Study the ascension's features</p>
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
                  <p className="text-sm text-muted-foreground">Expert insights on the Ascension</p>
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