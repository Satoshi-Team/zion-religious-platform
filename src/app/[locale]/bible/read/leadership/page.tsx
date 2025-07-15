import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Target, Lightbulb, Heart, Users, Sparkles, Crown } from "lucide-react"

export const metadata: Metadata = {
  title: "Biblical Leadership and Service | Bible Study Curriculum",
  description: "Learn how to develop leadership skills and serve others according to biblical principles.",
  keywords: ["leadership", "service", "ministry", "discipleship", "bible study", "christian living"],
}

export default function LeadershipPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Biblical Leadership and Service</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Learn how to develop leadership skills and serve others according to biblical principles.
        </p>

        <Tabs defaultValue="leadership" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="leadership">Leadership</TabsTrigger>
            <TabsTrigger value="service">Service</TabsTrigger>
            <TabsTrigger value="ministry">Ministry</TabsTrigger>
          </TabsList>

          <TabsContent value="leadership" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Biblical Leadership</CardTitle>
                <CardDescription>Understanding leadership principles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Leadership Foundation</h3>
                    <p className="text-muted-foreground">
                      Biblical principles of leadership.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Crown className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Leadership Development</h3>
                    <p className="text-muted-foreground">
                      Developing leadership skills.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Leadership Growth</h3>
                    <p className="text-muted-foreground">
                      Growing as a leader.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="service" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Service</CardTitle>
                <CardDescription>Understanding service principles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Service Principles</h3>
                    <p className="text-muted-foreground">
                      Biblical principles of service.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Service Types</h3>
                    <p className="text-muted-foreground">
                      Different types of service.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ministry" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Ministry</CardTitle>
                <CardDescription>Understanding ministry principles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Ministry Principles</h3>
                    <p className="text-muted-foreground">
                      Biblical principles of ministry.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Ministry Skills</h3>
                    <p className="text-muted-foreground">
                      Developing ministry skills.
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
              <CardDescription>Tools to help you develop leadership skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Leadership Assessment</h3>
                  <p className="text-sm text-muted-foreground">Evaluate your leadership abilities</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Service Planning</h3>
                  <p className="text-sm text-muted-foreground">Create your service strategy</p>
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
                  <h3 className="font-semibold">Leadership Resources</h3>
                  <p className="text-sm text-muted-foreground">Books and articles on biblical leadership</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Ministry Guides</h3>
                  <p className="text-sm text-muted-foreground">Resources for effective ministry</p>
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