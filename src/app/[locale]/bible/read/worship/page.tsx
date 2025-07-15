import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Music, Target, Lightbulb, Heart, Users, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Biblical Worship and Prayer | Bible Study Curriculum",
  description: "Learn how to develop a meaningful worship and prayer life according to biblical principles.",
  keywords: ["worship", "prayer", "spiritual life", "devotion", "bible study", "christian living"],
}

export default function WorshipPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Biblical Worship and Prayer</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Learn how to develop a meaningful worship and prayer life according to biblical principles.
        </p>

        <Tabs defaultValue="worship" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="worship">Worship</TabsTrigger>
            <TabsTrigger value="prayer">Prayer</TabsTrigger>
            <TabsTrigger value="devotion">Devotion</TabsTrigger>
          </TabsList>

          <TabsContent value="worship" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Biblical Worship</CardTitle>
                <CardDescription>Understanding worship principles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Worship Foundation</h3>
                    <p className="text-muted-foreground">
                      Biblical principles of worship.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Music className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Worship Expression</h3>
                    <p className="text-muted-foreground">
                      Expressing worship in different ways.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Worship Growth</h3>
                    <p className="text-muted-foreground">
                      Growing in worship.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="prayer" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Prayer</CardTitle>
                <CardDescription>Understanding prayer principles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Prayer Principles</h3>
                    <p className="text-muted-foreground">
                      Biblical principles of prayer.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Prayer Types</h3>
                    <p className="text-muted-foreground">
                      Different types of prayer.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="devotion" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Devotion</CardTitle>
                <CardDescription>Understanding devotion principles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Devotion Principles</h3>
                    <p className="text-muted-foreground">
                      Biblical principles of devotion.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Devotion Practices</h3>
                    <p className="text-muted-foreground">
                      Developing devotion practices.
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
              <CardDescription>Tools to help you develop worship and prayer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Worship Assessment</h3>
                  <p className="text-sm text-muted-foreground">Evaluate your worship life</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Prayer Planning</h3>
                  <p className="text-sm text-muted-foreground">Create your prayer strategy</p>
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
                  <h3 className="font-semibold">Worship Resources</h3>
                  <p className="text-sm text-muted-foreground">Books and articles on biblical worship</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Prayer Guides</h3>
                  <p className="text-sm text-muted-foreground">Resources for effective prayer</p>
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