import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, MessageSquare, BookOpen, Target, Users, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Biblical Missions and Evangelism | Bible Study Curriculum",
  description: "Learn how to share your faith effectively and engage in missions work based on biblical principles.",
  keywords: ["biblical missions", "evangelism", "faith sharing", "bible study", "christian living"],
}

export default function MissionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Biblical Missions and Evangelism</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Discover how to share your faith effectively and engage in missions work based on biblical principles.
        </p>

        <Tabs defaultValue="missions" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="missions">Missions</TabsTrigger>
            <TabsTrigger value="evangelism">Evangelism</TabsTrigger>
            <TabsTrigger value="outreach">Outreach</TabsTrigger>
          </TabsList>

          <TabsContent value="missions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Missions</CardTitle>
                <CardDescription>Understanding biblical missions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Global Missions</h3>
                    <p className="text-muted-foreground">
                      Understanding the biblical call to global missions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Biblical Foundation</h3>
                    <p className="text-muted-foreground">
                      Scriptural basis for missions work.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Cross-Cultural Ministry</h3>
                    <p className="text-muted-foreground">
                      Engaging in effective cross-cultural ministry.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="evangelism" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Evangelism</CardTitle>
                <CardDescription>Sharing your faith effectively</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <MessageSquare className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Faith Sharing</h3>
                    <p className="text-muted-foreground">
                      Learning to share your faith naturally.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Personal Testimony</h3>
                    <p className="text-muted-foreground">
                      Developing and sharing your personal testimony.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="outreach" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Outreach</CardTitle>
                <CardDescription>Engaging in community outreach</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Sparkles className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Community Service</h3>
                    <p className="text-muted-foreground">
                      Serving your community as a witness.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Relationship Building</h3>
                    <p className="text-muted-foreground">
                      Building relationships for effective outreach.
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
              <CardDescription>Tools to help you develop evangelism skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Evangelism Assessment</h3>
                  <p className="text-sm text-muted-foreground">Evaluate your evangelism skills</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Practice Scenarios</h3>
                  <p className="text-sm text-muted-foreground">Practice sharing your faith</p>
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
                  <h3 className="font-semibold">Missions Resources</h3>
                  <p className="text-sm text-muted-foreground">Books and articles on missions</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Evangelism Guides</h3>
                  <p className="text-sm text-muted-foreground">Resources for effective evangelism</p>
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