import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, BookOpen, Users, Target, Shield, Lightbulb } from "lucide-react"

export const metadata: Metadata = {
  title: "Biblical Prayer and Intercession | Bible Study Curriculum",
  description: "Learn how to develop a deeper prayer life and intercede effectively through biblical principles and spiritual practices.",
  keywords: ["prayer", "intercession", "spiritual life", "bible study", "christian prayer"],
}

export default function PrayerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Biblical Prayer and Intercession</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Discover how to develop a deeper prayer life and intercede effectively through biblical principles and spiritual practices.
        </p>

        <Tabs defaultValue="prayer" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="prayer">Prayer</TabsTrigger>
            <TabsTrigger value="intercession">Intercession</TabsTrigger>
            <TabsTrigger value="practice">Practice</TabsTrigger>
          </TabsList>

          <TabsContent value="prayer" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Biblical Prayer</CardTitle>
                <CardDescription>Understanding prayer principles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Biblical Foundation</h3>
                    <p className="text-muted-foreground">
                      Scriptural basis for prayer.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Personal Prayer</h3>
                    <p className="text-muted-foreground">
                      Developing a personal prayer life.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Corporate Prayer</h3>
                    <p className="text-muted-foreground">
                      Praying together as a community.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="intercession" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Intercessory Prayer</CardTitle>
                <CardDescription>Praying for others effectively</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Spiritual Warfare</h3>
                    <p className="text-muted-foreground">
                      Understanding spiritual warfare in prayer.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Strategic Prayer</h3>
                    <p className="text-muted-foreground">
                      Developing strategic prayer approaches.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="practice" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Prayer Practice</CardTitle>
                <CardDescription>Developing effective prayer habits</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Prayer Methods</h3>
                    <p className="text-muted-foreground">
                      Different approaches to prayer.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Spiritual Growth</h3>
                    <p className="text-muted-foreground">
                      Growing through prayer and intercession.
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
              <CardDescription>Tools to help you develop prayer skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Prayer Assessment</h3>
                  <p className="text-sm text-muted-foreground">Evaluate your prayer life</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Prayer Journal</h3>
                  <p className="text-sm text-muted-foreground">Track your prayer journey</p>
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
                  <h3 className="font-semibold">Prayer Resources</h3>
                  <p className="text-sm text-muted-foreground">Books and articles on prayer</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Intercession Guides</h3>
                  <p className="text-sm text-muted-foreground">Resources for effective intercession</p>
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