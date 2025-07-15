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
  Sword, 
  Clock, 
  Book, 
  ThumbsUp, 
  ThumbsDown, 
  Fish, 
  Mountain
} from "lucide-react"
import { WaterIcon, DoveIcon } from "@/components/icons/custom-icons"

export const metadata: Metadata = {
  title: "The Early Ministry of Jesus | Bible Study Curriculum",
  description: "Study the beginning of Jesus' ministry, including his baptism, temptation, and early teachings.",
  keywords: ["early ministry", "baptism", "temptation", "sermon on the mount", "gospels", "bible study"],
}

export default function EarlyMinistryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">The Early Ministry of Jesus</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Study the beginning of Jesus' ministry, including his baptism, temptation, and early teachings.
        </p>

        <Tabs defaultValue="baptism" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="baptism">Baptism</TabsTrigger>
            <TabsTrigger value="temptation">Temptation</TabsTrigger>
            <TabsTrigger value="teachings">Teachings</TabsTrigger>
            <TabsTrigger value="significance">Significance</TabsTrigger>
          </TabsList>

          <TabsContent value="baptism" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>The Baptism</CardTitle>
                <CardDescription>Jesus' baptism by John the Baptist</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <WaterIcon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Event</h3>
                    <p className="text-muted-foreground">
                      Jesus' baptism in the Jordan River.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <DoveIcon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Spirit</h3>
                    <p className="text-muted-foreground">
                      The Holy Spirit descending like a dove.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Star className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Voice</h3>
                    <p className="text-muted-foreground">
                      God's declaration of Jesus as his Son.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="temptation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>The Temptation</CardTitle>
                <CardDescription>Jesus' temptation in the wilderness</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mountain className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Setting</h3>
                    <p className="text-muted-foreground">
                      Jesus' 40 days in the wilderness.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sword className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Tests</h3>
                    <p className="text-muted-foreground">
                      The three temptations by Satan.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Scroll className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Response</h3>
                    <p className="text-muted-foreground">
                      Jesus' use of Scripture to resist temptation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="teachings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Early Teachings</CardTitle>
                <CardDescription>Jesus' initial ministry and teachings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mountain className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Sermon on the Mount</h3>
                    <p className="text-muted-foreground">
                      Jesus' foundational teaching on discipleship.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Disciples</h3>
                    <p className="text-muted-foreground">
                      Calling and training of the first disciples.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Fish className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Early Miracles</h3>
                    <p className="text-muted-foreground">
                      Jesus' first miracles and their significance.
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
                <CardDescription>Understanding the importance of Jesus' early ministry</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Crown className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Divine Identity</h3>
                    <p className="text-muted-foreground">
                      Jesus' identity as the Son of God.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Human Example</h3>
                    <p className="text-muted-foreground">
                      Jesus' example of obedience and faithfulness.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Kingdom Message</h3>
                    <p className="text-muted-foreground">
                      The beginning of Jesus' kingdom proclamation.
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
              <CardDescription>Tools to help you understand Jesus' early ministry</CardDescription>
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
                  <p className="text-sm text-muted-foreground">Expert insights on Jesus' early ministry</p>
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