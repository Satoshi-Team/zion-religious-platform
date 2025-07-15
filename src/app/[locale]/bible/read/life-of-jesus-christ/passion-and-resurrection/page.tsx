import React from 'react'
import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cross, Crown, Heart, Star, Flame, Sparkles, Shield, Zap, Sun, Moon, Clock, Calendar, MapPin, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "The Passion and Resurrection of Jesus | Bible Study Curriculum",
  description: "Study the final events of Jesus' life, His death, and resurrection from the Gospels.",
  keywords: ["jesus", "passion", "crucifixion", "resurrection", "easter", "gospels", "bible study"],
}

export default function PassionAndResurrectionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">The Passion and Resurrection</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Study the final events of Jesus' life, His death, and resurrection from the Gospels.
        </p>

        <Tabs defaultValue="passion" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="passion">Passion</TabsTrigger>
            <TabsTrigger value="crucifixion">Crucifixion</TabsTrigger>
            <TabsTrigger value="resurrection">Resurrection</TabsTrigger>
            <TabsTrigger value="significance">Significance</TabsTrigger>
          </TabsList>

          <TabsContent value="passion" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>The Passion of Christ</CardTitle>
                <CardDescription>Events leading to the crucifixion</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Last Supper</h3>
                    <p className="text-muted-foreground">
                      The Passover meal and institution of the Lord's Supper.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Gethsemane</h3>
                    <p className="text-muted-foreground">
                      Jesus' prayer and arrest in the garden.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Trials</h3>
                    <p className="text-muted-foreground">
                      Religious and civil trials before crucifixion.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="crucifixion" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>The Crucifixion</CardTitle>
                <CardDescription>Jesus' death on the cross</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Cross className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Cross</h3>
                    <p className="text-muted-foreground">
                      Jesus' crucifixion and final words.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Hours</h3>
                    <p className="text-muted-foreground">
                      Events during the six hours on the cross.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Burial</h3>
                    <p className="text-muted-foreground">
                      Jesus' burial in Joseph's tomb.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resurrection" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>The Resurrection</CardTitle>
                <CardDescription>Jesus' victory over death</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Sun className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Easter Morning</h3>
                    <p className="text-muted-foreground">
                      The empty tomb and angelic announcement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Appearances</h3>
                    <p className="text-muted-foreground">
                      Jesus' post-resurrection appearances.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Crown className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Ascension</h3>
                    <p className="text-muted-foreground">
                      Jesus' return to heaven and Great Commission.
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
                <CardDescription>Understanding the meaning and impact</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Flame className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Atonement</h3>
                    <p className="text-muted-foreground">
                      Jesus' death as payment for sin.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Star className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Victory</h3>
                    <p className="text-muted-foreground">
                      Triumph over sin, death, and the devil.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">New Life</h3>
                    <p className="text-muted-foreground">
                      The promise of resurrection for believers.
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
              <CardDescription>Tools to help you understand these events</CardDescription>
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
                  <p className="text-sm text-muted-foreground">Study the locations of key events</p>
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
                  <p className="text-sm text-muted-foreground">Expert insights on these events</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Study Guides</h3>
                  <p className="text-sm text-muted-foreground">In-depth guides for each event</p>
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