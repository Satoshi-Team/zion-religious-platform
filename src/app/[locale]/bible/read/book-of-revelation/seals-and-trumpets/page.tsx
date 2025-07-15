import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Target, Lightbulb, Heart, Users, Sparkles, Scroll, Eye, Crown, Star, Flame } from "lucide-react"
import { SealIcon, TrumpetIcon } from "@/components/icons/custom-icons"

export const metadata: Metadata = {
  title: "The Seals and Trumpets of Revelation | Bible Study Curriculum",
  description: "Study the prophetic visions of the seven seals and trumpets in Revelation chapters 4-11.",
  keywords: ["revelation", "seven seals", "seven trumpets", "apocalypse", "prophecy", "bible study"],
}

export default function SealsAndTrumpetsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">The Seals and Trumpets of Revelation</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Study the prophetic visions of the seven seals and trumpets in Revelation chapters 4-11.
        </p>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="seals">Seals</TabsTrigger>
            <TabsTrigger value="trumpets">Trumpets</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Overview of the Visions</CardTitle>
                <CardDescription>Understanding the context and sequence</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Eye className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Heavenly Vision</h3>
                    <p className="text-muted-foreground">
                      The throne room of God and the Lamb.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Scroll className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Scroll</h3>
                    <p className="text-muted-foreground">
                      The sealed book of God's purposes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Crown className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Divine Authority</h3>
                    <p className="text-muted-foreground">
                      God's sovereign control over history.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="seals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>The Seven Seals</CardTitle>
                <CardDescription>Study each seal in detail</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <SealIcon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">First Four Seals</h3>
                    <p className="text-muted-foreground">
                      The four horsemen and their significance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Fifth Seal</h3>
                    <p className="text-muted-foreground">
                      The cry of the martyrs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Star className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Sixth and Seventh Seals</h3>
                    <p className="text-muted-foreground">
                      Cosmic disturbances and the silence in heaven.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trumpets" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>The Seven Trumpets</CardTitle>
                <CardDescription>Understanding the trumpet judgments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <TrumpetIcon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">First Four Trumpets</h3>
                    <p className="text-muted-foreground">
                      Judgments on the natural world.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Flame className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Fifth and Sixth Trumpets</h3>
                    <p className="text-muted-foreground">
                      The demonic locusts and the four angels.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Seventh Trumpet</h3>
                    <p className="text-muted-foreground">
                      The kingdom of the world becomes the kingdom of Christ.
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
              <CardDescription>Tools to help you understand the Seals and Trumpets</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Timeline Study</h3>
                  <p className="text-sm text-muted-foreground">Explore the sequence of events</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Symbol Guide</h3>
                  <p className="text-sm text-muted-foreground">Understand the symbolic language</p>
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
                  <p className="text-sm text-muted-foreground">Expert insights on the Seals and Trumpets</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Study Guides</h3>
                  <p className="text-sm text-muted-foreground">In-depth guides for each vision</p>
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