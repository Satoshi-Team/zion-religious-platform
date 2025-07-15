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
import { PalmIcon, CupIcon, PrayerIcon } from "@/components/icons/custom-icons"

export const metadata: Metadata = {
  title: "The Passion Week of Jesus | Bible Study Curriculum",
  description: "Study the final week of Jesus' life, from Palm Sunday to Resurrection Sunday.",
  keywords: ["passion week", "holy week", "crucifixion", "resurrection", "gospels", "bible study"],
}

export default function PassionWeekPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">The Passion Week of Jesus</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Study the final week of Jesus' life, from Palm Sunday to Resurrection Sunday.
        </p>

        <Tabs defaultValue="palm-sunday" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="palm-sunday">Palm Sunday</TabsTrigger>
            <TabsTrigger value="last-supper">Last Supper</TabsTrigger>
            <TabsTrigger value="crucifixion">Crucifixion</TabsTrigger>
            <TabsTrigger value="resurrection">Resurrection</TabsTrigger>
          </TabsList>

          <TabsContent value="palm-sunday" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Palm Sunday</CardTitle>
                <CardDescription>The triumphal entry into Jerusalem</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <PalmIcon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Entry</h3>
                    <p className="text-muted-foreground">
                      Jesus' triumphal entry into Jerusalem.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Crowd</h3>
                    <p className="text-muted-foreground">
                      The people's response and expectations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Temple</h3>
                    <p className="text-muted-foreground">
                      Cleansing the temple.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="last-supper" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Last Supper</CardTitle>
                <CardDescription>The final meal with disciples</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <CupIcon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Meal</h3>
                    <p className="text-muted-foreground">
                      The Passover meal and its significance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Disciples</h3>
                    <p className="text-muted-foreground">
                      Jesus' final teachings to his disciples.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <PrayerIcon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Gethsemane</h3>
                    <p className="text-muted-foreground">
                      Jesus' prayer and arrest.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="crucifixion" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Crucifixion</CardTitle>
                <CardDescription>The death of Jesus Christ</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Trial</h3>
                    <p className="text-muted-foreground">
                      Jesus' trial and crucifixion.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Crown className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Crucifixion</h3>
                    <p className="text-muted-foreground">
                      The events of the cross.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Death</h3>
                    <p className="text-muted-foreground">
                      Jesus' death on the cross.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resurrection" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Resurrection</CardTitle>
                <CardDescription>The victory over death</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Sun className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Empty Tomb</h3>
                    <p className="text-muted-foreground">
                      The discovery of the empty tomb.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Appearances</h3>
                    <p className="text-muted-foreground">
                      Jesus' appearances to his followers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Commission</h3>
                    <p className="text-muted-foreground">
                      Jesus' final instructions to his disciples.
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
              <CardDescription>Tools to help you understand the Passion Week</CardDescription>
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
                  <p className="text-sm text-muted-foreground">Study the locations of events</p>
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
                  <p className="text-sm text-muted-foreground">Expert insights on the Passion Week</p>
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