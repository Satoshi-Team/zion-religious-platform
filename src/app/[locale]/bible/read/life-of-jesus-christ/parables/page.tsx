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
import { SeedIcon, TreeIcon, CoinIcon, SheepIcon, DoorIcon } from "@/components/icons/custom-icons"

export const metadata: Metadata = {
  title: "The Parables of Jesus | Bible Study Curriculum",
  description: "Study the parables taught by Jesus Christ and their meaning.",
  keywords: ["parables", "teachings", "kingdom of God", "gospels", "bible study"],
}

export default function ParablesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">The Parables of Jesus</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Study the parables taught by Jesus Christ and their meaning.
        </p>

        <Tabs defaultValue="kingdom" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="kingdom">Kingdom</TabsTrigger>
            <TabsTrigger value="discipleship">Discipleship</TabsTrigger>
            <TabsTrigger value="judgment">Judgment</TabsTrigger>
            <TabsTrigger value="significance">Significance</TabsTrigger>
          </TabsList>

          <TabsContent value="kingdom" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Kingdom Parables</CardTitle>
                <CardDescription>Parables about the kingdom of God</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <SeedIcon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Sower</h3>
                    <p className="text-muted-foreground">
                      The parable of the sower and the soils.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <TreeIcon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Mustard Seed</h3>
                    <p className="text-muted-foreground">
                      The growth and impact of God's kingdom.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CoinIcon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Hidden Treasure</h3>
                    <p className="text-muted-foreground">
                      The value and worth of the kingdom.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="discipleship" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Discipleship Parables</CardTitle>
                <CardDescription>Parables about following Jesus</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <SheepIcon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Lost Sheep</h3>
                    <p className="text-muted-foreground">
                      God's care for each individual.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sun className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Lamp</h3>
                    <p className="text-muted-foreground">
                      Letting your light shine.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <DoorIcon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Narrow Gate</h3>
                    <p className="text-muted-foreground">
                      The path of true discipleship.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="judgment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Judgment Parables</CardTitle>
                <CardDescription>Parables about God's judgment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Ten Virgins</h3>
                    <p className="text-muted-foreground">
                      Being prepared for Christ's return.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Sheep and Goats</h3>
                    <p className="text-muted-foreground">
                      The final judgment of all nations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Talents</h3>
                    <p className="text-muted-foreground">
                      Using God's gifts wisely.
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
                <CardDescription>Understanding the importance of Jesus' parables</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Teaching Method</h3>
                    <p className="text-muted-foreground">
                      Why Jesus taught in parables.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Spiritual Truth</h3>
                    <p className="text-muted-foreground">
                      Revealing God's kingdom.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Application</h3>
                    <p className="text-muted-foreground">
                      How parables apply to our lives today.
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
              <CardDescription>Tools to help you understand Jesus' parables</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Timeline</h3>
                  <p className="text-sm text-muted-foreground">Explore when parables were taught</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Map</h3>
                  <p className="text-sm text-muted-foreground">Study where parables were taught</p>
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
                  <p className="text-sm text-muted-foreground">Expert insights on Jesus' parables</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Video Lessons</h3>
                  <p className="text-sm text-muted-foreground">Visual explanations of key parables</p>
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