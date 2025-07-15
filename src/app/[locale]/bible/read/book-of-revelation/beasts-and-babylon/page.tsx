import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Target, Lightbulb, Heart, Users, Sparkles, Scroll, Eye, Crown, Star, Flame, Building2, Sword } from "lucide-react"
import { DragonIcon } from "@/components/icons/custom-icons"

export const metadata: Metadata = {
  title: "The Beasts and Babylon | Bible Study Curriculum",
  description: "Study the prophetic visions of the beasts, Babylon, and the final battle in Revelation chapters 12-20.",
  keywords: ["revelation", "beasts", "babylon", "apocalypse", "prophecy", "bible study"],
}

export default function BeastsAndBabylonPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">The Beasts and Babylon</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Study the prophetic visions of the beasts, Babylon, and the final battle in Revelation chapters 12-20.
        </p>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="beasts">Beasts</TabsTrigger>
            <TabsTrigger value="babylon">Babylon</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Overview of the Visions</CardTitle>
                <CardDescription>Understanding the context and sequence</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <DragonIcon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Dragon</h3>
                    <p className="text-muted-foreground">
                      Satan's role in the cosmic conflict.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Building2 className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Babylon</h3>
                    <p className="text-muted-foreground">
                      The great city and its fall.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sword className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Final Battle</h3>
                    <p className="text-muted-foreground">
                      The ultimate victory of Christ.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="beasts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>The Two Beasts</CardTitle>
                <CardDescription>Study each beast in detail</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <DragonIcon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">First Beast</h3>
                    <p className="text-muted-foreground">
                      The beast from the sea and its authority.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Flame className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Second Beast</h3>
                    <p className="text-muted-foreground">
                      The beast from the earth and false worship.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Star className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Mark</h3>
                    <p className="text-muted-foreground">
                      The mark of the beast and its significance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="babylon" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Babylon the Great</CardTitle>
                <CardDescription>Understanding the fall of Babylon</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Building2 className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Great City</h3>
                    <p className="text-muted-foreground">
                      Babylon's influence and corruption.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Flame className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Fall</h3>
                    <p className="text-muted-foreground">
                      The judgment and destruction of Babylon.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Heaven's Response</h3>
                    <p className="text-muted-foreground">
                      The celebration of God's victory.
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
              <CardDescription>Tools to help you understand the Beasts and Babylon</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Symbol Guide</h3>
                  <p className="text-sm text-muted-foreground">Understand the symbolic language</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Timeline Study</h3>
                  <p className="text-sm text-muted-foreground">Explore the sequence of events</p>
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
                  <p className="text-sm text-muted-foreground">Expert insights on the Beasts and Babylon</p>
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