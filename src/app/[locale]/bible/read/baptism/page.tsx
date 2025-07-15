import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Target, Lightbulb, Heart, Users, Sparkles, Droplets } from "lucide-react"

export const metadata: Metadata = {
  title: "What Is Baptism? | Bible Study Curriculum",
  description: "Learn about the meaning and significance of baptism in Christian faith.",
  keywords: ["baptism", "water baptism", "bible study", "foundations", "new believer"],
}

export default function BaptismPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">What Is Baptism?</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Learn about the meaning and significance of baptism in Christian faith.
        </p>

        <Tabs defaultValue="meaning" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="meaning">Meaning</TabsTrigger>
            <TabsTrigger value="significance">Significance</TabsTrigger>
            <TabsTrigger value="practice">Practice</TabsTrigger>
          </TabsList>

          <TabsContent value="meaning" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Understanding Baptism</CardTitle>
                <CardDescription>What baptism means and involves</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Biblical Foundation</h3>
                    <p className="text-muted-foreground">
                      Understanding baptism in Scripture.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Droplets className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Water Baptism</h3>
                    <p className="text-muted-foreground">
                      Understanding water baptism.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Spiritual Baptism</h3>
                    <p className="text-muted-foreground">
                      Understanding spiritual baptism.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="significance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Significance of Baptism</CardTitle>
                <CardDescription>What baptism means for believers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Symbolic Meaning</h3>
                    <p className="text-muted-foreground">
                      Understanding baptism's symbolism.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Spiritual Significance</h3>
                    <p className="text-muted-foreground">
                      Understanding baptism's spiritual impact.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="practice" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Baptism Practice</CardTitle>
                <CardDescription>Understanding baptism practice</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Baptism Process</h3>
                    <p className="text-muted-foreground">
                      Understanding the baptism process.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">After Baptism</h3>
                    <p className="text-muted-foreground">
                      Life after baptism.
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
              <CardDescription>Tools to help you understand baptism</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Baptism Assessment</h3>
                  <p className="text-sm text-muted-foreground">Evaluate your understanding of baptism</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Baptism Planning</h3>
                  <p className="text-sm text-muted-foreground">Plan your baptism journey</p>
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
                  <h3 className="font-semibold">Baptism Resources</h3>
                  <p className="text-sm text-muted-foreground">Books and articles about baptism</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Study Guides</h3>
                  <p className="text-sm text-muted-foreground">Resources for understanding baptism</p>
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