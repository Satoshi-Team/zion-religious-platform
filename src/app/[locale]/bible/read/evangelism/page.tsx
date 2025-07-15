import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Heart, BookOpen, Users, Target, Lightbulb } from "lucide-react"

export const metadata: Metadata = {
  title: "Biblical Evangelism and Missions | Bible Study Curriculum",
  description: "Learn how to share your faith effectively and engage in missions work through biblical principles and practical strategies.",
  keywords: ["evangelism", "missions", "outreach", "bible study", "christian witness"],
}

export default function EvangelismPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Biblical Evangelism and Missions</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Discover how to share your faith effectively and engage in missions work through biblical principles and practical strategies.
        </p>

        <Tabs defaultValue="evangelism" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="evangelism">Evangelism</TabsTrigger>
            <TabsTrigger value="missions">Missions</TabsTrigger>
            <TabsTrigger value="outreach">Outreach</TabsTrigger>
          </TabsList>

          <TabsContent value="evangelism" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Biblical Evangelism</CardTitle>
                <CardDescription>Understanding evangelism principles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Biblical Foundation</h3>
                    <p className="text-muted-foreground">
                      Scriptural basis for evangelism.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Personal Witness</h3>
                    <p className="text-muted-foreground">
                      Sharing your faith effectively.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Relational Evangelism</h3>
                    <p className="text-muted-foreground">
                      Building relationships for evangelism.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="missions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Global Missions</CardTitle>
                <CardDescription>Engaging in missions work</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Cross-Cultural Ministry</h3>
                    <p className="text-muted-foreground">
                      Understanding and adapting to different cultures.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Strategic Planning</h3>
                    <p className="text-muted-foreground">
                      Developing effective mission strategies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="outreach" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Community Outreach</CardTitle>
                <CardDescription>Engaging with your community</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Outreach Methods</h3>
                    <p className="text-muted-foreground">
                      Different approaches to community outreach.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Service Evangelism</h3>
                    <p className="text-muted-foreground">
                      Sharing faith through acts of service.
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
                  <h3 className="font-semibold">Outreach Planning</h3>
                  <p className="text-sm text-muted-foreground">Create effective outreach strategies</p>
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
                  <h3 className="font-semibold">Evangelism Resources</h3>
                  <p className="text-sm text-muted-foreground">Books and articles on evangelism</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Missions Guides</h3>
                  <p className="text-sm text-muted-foreground">Resources for effective missions work</p>
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