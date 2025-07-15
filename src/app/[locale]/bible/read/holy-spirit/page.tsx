import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Target, Lightbulb, Heart, Users, Sparkles, Wind } from "lucide-react"

export const metadata: Metadata = {
  title: "Who Is the Holy Spirit? | Bible Study Curriculum",
  description: "Learn about the Holy Spirit's role and significance in Christian faith.",
  keywords: ["holy spirit", "spirit of god", "bible study", "foundations", "new believer"],
}

export default function HolySpiritPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Who Is the Holy Spirit?</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Learn about the Holy Spirit's role and significance in Christian faith.
        </p>

        <Tabs defaultValue="identity" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="identity">Identity</TabsTrigger>
            <TabsTrigger value="role">Role</TabsTrigger>
            <TabsTrigger value="gifts">Gifts</TabsTrigger>
          </TabsList>

          <TabsContent value="identity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Identity of the Holy Spirit</CardTitle>
                <CardDescription>Understanding who the Holy Spirit is</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Biblical Foundation</h3>
                    <p className="text-muted-foreground">
                      Understanding the Holy Spirit in Scripture.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Wind className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Divine Nature</h3>
                    <p className="text-muted-foreground">
                      The Holy Spirit as God.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Personhood</h3>
                    <p className="text-muted-foreground">
                      The Holy Spirit as a person.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="role" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Role of the Holy Spirit</CardTitle>
                <CardDescription>Understanding the Holy Spirit's work</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Helper and Comforter</h3>
                    <p className="text-muted-foreground">
                      The Holy Spirit as our helper.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Guide and Teacher</h3>
                    <p className="text-muted-foreground">
                      The Holy Spirit as our guide.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gifts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Gifts of the Holy Spirit</CardTitle>
                <CardDescription>Understanding spiritual gifts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Spiritual Gifts</h3>
                    <p className="text-muted-foreground">
                      Understanding spiritual gifts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Fruit of the Spirit</h3>
                    <p className="text-muted-foreground">
                      Understanding the fruit of the Spirit.
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
              <CardDescription>Tools to help you understand the Holy Spirit</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Spirit Assessment</h3>
                  <p className="text-sm text-muted-foreground">Evaluate your understanding of the Holy Spirit</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Study Planning</h3>
                  <p className="text-sm text-muted-foreground">Plan your Holy Spirit study</p>
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
                  <h3 className="font-semibold">Spirit Resources</h3>
                  <p className="text-sm text-muted-foreground">Books and articles about the Holy Spirit</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Study Guides</h3>
                  <p className="text-sm text-muted-foreground">Resources for understanding the Holy Spirit</p>
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