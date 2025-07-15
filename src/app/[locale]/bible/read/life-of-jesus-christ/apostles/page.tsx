import React from 'react'
import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Book, Globe, Star, Crown, Heart, Zap, Sun, Moon, MapPin, Calendar, Building, Cross, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "The Apostles | Bible Study Curriculum",
  description: "Study the lives, ministries, and legacies of Jesus' twelve apostles and other key disciples.",
  keywords: ["apostles", "disciples", "peter", "paul", "john", "gospels", "bible study"],
}

export default function ApostlesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">The Apostles</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Study the lives, ministries, and legacies of Jesus' twelve apostles and other key disciples.
        </p>

        <Tabs defaultValue="twelve" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="twelve">The Twelve</TabsTrigger>
            <TabsTrigger value="ministries">Ministries</TabsTrigger>
            <TabsTrigger value="writings">Writings</TabsTrigger>
            <TabsTrigger value="legacy">Legacy</TabsTrigger>
          </TabsList>

          <TabsContent value="twelve" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>The Twelve Apostles</CardTitle>
                <CardDescription>Jesus' chosen disciples</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Star className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Peter, James, and John</h3>
                    <p className="text-muted-foreground">
                      The inner circle of Jesus' disciples.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Other Apostles</h3>
                    <p className="text-muted-foreground">
                      Andrew, Philip, Bartholomew, Matthew, Thomas, James, Thaddeus, Simon, and Judas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Matthias and Paul</h3>
                    <p className="text-muted-foreground">
                      The replacement for Judas and the apostle to the Gentiles.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ministries" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Their Ministries</CardTitle>
                <CardDescription>The work of the apostles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Missionary Work</h3>
                    <p className="text-muted-foreground">
                      Spreading the gospel throughout the known world.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Building className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Church Planting</h3>
                    <p className="text-muted-foreground">
                      Establishing and nurturing Christian communities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Cross className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Martyrdom</h3>
                    <p className="text-muted-foreground">
                      Their ultimate sacrifice for the faith.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="writings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Their Writings</CardTitle>
                <CardDescription>New Testament contributions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Book className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Gospels</h3>
                    <p className="text-muted-foreground">
                      Matthew, Mark, Luke, and John's accounts of Jesus' life.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sun className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Epistles</h3>
                    <p className="text-muted-foreground">
                      Letters to early churches and individuals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Moon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Revelation</h3>
                    <p className="text-muted-foreground">
                      John's apocalyptic vision.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="legacy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Their Legacy</CardTitle>
                <CardDescription>Impact on Christianity</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Faith Foundation</h3>
                    <p className="text-muted-foreground">
                      Their role in establishing Christian doctrine.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Crown className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Leadership Model</h3>
                    <p className="text-muted-foreground">
                      Examples of servant leadership and discipleship.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Modern Influence</h3>
                    <p className="text-muted-foreground">
                      Their continuing impact on the church today.
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
              <CardDescription>Tools to help you understand the apostles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Timeline</h3>
                  <p className="text-sm text-muted-foreground">Explore the lives of the apostles</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Map</h3>
                  <p className="text-sm text-muted-foreground">Study their missionary journeys</p>
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
                  <p className="text-sm text-muted-foreground">Expert insights on the apostles</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Study Guides</h3>
                  <p className="text-sm text-muted-foreground">In-depth guides for each apostle</p>
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