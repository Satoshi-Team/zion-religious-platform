import React from 'react'
import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Book, Heart, Crown, Zap, Sun, Moon, MapPin, Calendar, Building, Cross, Shield, Star, Users, Globe, Scroll, Target, Eye } from "lucide-react"

export const metadata: Metadata = {
  title: "The Prophecies of Jesus | Bible Study Curriculum",
  description: "Study the Old Testament prophecies about Jesus and their fulfillment in the New Testament.",
  keywords: ["prophecies", "messiah", "old testament", "new testament", "fulfillment", "bible study"],
}

export default function PropheciesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">The Prophecies of Jesus</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Study the Old Testament prophecies about Jesus and their fulfillment in the New Testament.
        </p>

        <Tabs defaultValue="birth" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="birth">Birth</TabsTrigger>
            <TabsTrigger value="ministry">Ministry</TabsTrigger>
            <TabsTrigger value="passion">Passion</TabsTrigger>
            <TabsTrigger value="significance">Significance</TabsTrigger>
          </TabsList>

          <TabsContent value="birth" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Birth Prophecies</CardTitle>
                <CardDescription>Prophecies about Jesus' coming</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Star className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Messianic Lineage</h3>
                    <p className="text-muted-foreground">
                      Prophecies about Jesus' family line and birth.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Birthplace</h3>
                    <p className="text-muted-foreground">
                      Prophecies about Bethlehem and the Messiah's origin.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Timing</h3>
                    <p className="text-muted-foreground">
                      Prophecies about when the Messiah would come.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ministry" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Ministry Prophecies</CardTitle>
                <CardDescription>Prophecies about Jesus' work</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Eye className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Miracles</h3>
                    <p className="text-muted-foreground">
                      Prophecies about the Messiah's miraculous works.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Scroll className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Teaching</h3>
                    <p className="text-muted-foreground">
                      Prophecies about the Messiah's message and wisdom.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Purpose</h3>
                    <p className="text-muted-foreground">
                      Prophecies about the Messiah's mission and goals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="passion" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Passion Prophecies</CardTitle>
                <CardDescription>Prophecies about Jesus' death and resurrection</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Cross className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Suffering</h3>
                    <p className="text-muted-foreground">
                      Prophecies about the Messiah's suffering and death.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sun className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Resurrection</h3>
                    <p className="text-muted-foreground">
                      Prophecies about the Messiah's victory over death.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Crown className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Exaltation</h3>
                    <p className="text-muted-foreground">
                      Prophecies about the Messiah's glory and reign.
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
                <CardDescription>Understanding the importance of fulfilled prophecy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Divine Authority</h3>
                    <p className="text-muted-foreground">
                      How fulfilled prophecy validates Jesus' identity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Historical Impact</h3>
                    <p className="text-muted-foreground">
                      The influence of messianic prophecy on history.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Faith Response</h3>
                    <p className="text-muted-foreground">
                      How prophecy calls for faith and trust.
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
              <CardDescription>Tools to help you understand biblical prophecy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Timeline</h3>
                  <p className="text-sm text-muted-foreground">Explore prophecy and fulfillment</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Study Guide</h3>
                  <p className="text-sm text-muted-foreground">In-depth analysis of key prophecies</p>
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
                  <p className="text-sm text-muted-foreground">Expert insights on biblical prophecy</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Video Lessons</h3>
                  <p className="text-sm text-muted-foreground">Visual explanations of key prophecies</p>
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