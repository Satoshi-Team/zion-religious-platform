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
  Target
} from "lucide-react"

export const metadata: Metadata = {
  title: "The Eternal Kingdom | Bible Study Curriculum",
  description: "Study the Eternal Kingdom and its significance.",
  keywords: ["eternal kingdom", "god's kingdom", "heaven", "bible study"],
}

export default function EternalKingdomPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">The Eternal Kingdom</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Study the Eternal Kingdom and its significance.
        </p>

        <Tabs defaultValue="nature" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="nature">Nature</TabsTrigger>
            <TabsTrigger value="king">King</TabsTrigger>
            <TabsTrigger value="subjects">Subjects</TabsTrigger>
            <TabsTrigger value="glory">Glory</TabsTrigger>
          </TabsList>

          <TabsContent value="nature" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Nature of the Kingdom</CardTitle>
                <CardDescription>Understanding the Eternal Kingdom</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Crown className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">God's Rule</h3>
                    <p className="text-muted-foreground">
                      The perfect reign of God.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Perfect Order</h3>
                    <p className="text-muted-foreground">
                      Complete harmony and peace.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Universal Scope</h3>
                    <p className="text-muted-foreground">
                      The kingdom's impact on all creation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="king" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>The King</CardTitle>
                <CardDescription>Jesus Christ as Eternal King</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Crown className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Sovereignty</h3>
                    <p className="text-muted-foreground">
                      Christ's absolute authority.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Love</h3>
                    <p className="text-muted-foreground">
                      The king's perfect love for his subjects.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Justice</h3>
                    <p className="text-muted-foreground">
                      Perfect judgment and righteousness.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="subjects" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>The Subjects</CardTitle>
                <CardDescription>Citizens of the Eternal Kingdom</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Redeemed</h3>
                    <p className="text-muted-foreground">
                      Those saved by Christ.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Perfect Obedience</h3>
                    <p className="text-muted-foreground">
                      Complete submission to the king.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Perfect Joy</h3>
                    <p className="text-muted-foreground">
                      Eternal happiness in the kingdom.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="glory" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>The Glory</CardTitle>
                <CardDescription>The splendor of the Eternal Kingdom</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Star className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Divine Presence</h3>
                    <p className="text-muted-foreground">
                      God's glory filling the kingdom.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sun className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Perfect Light</h3>
                    <p className="text-muted-foreground">
                      No darkness or shadow.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Perfect Love</h3>
                    <p className="text-muted-foreground">
                      Love flowing throughout the kingdom.
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
              <CardDescription>Tools to help you understand the Eternal Kingdom</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Timeline</h3>
                  <p className="text-sm text-muted-foreground">Explore the kingdom's development</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Map</h3>
                  <p className="text-sm text-muted-foreground">Study the kingdom's features</p>
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
                  <p className="text-sm text-muted-foreground">Expert insights on the Eternal Kingdom</p>
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