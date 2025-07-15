import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Target, Lightbulb, Heart, Users, Sparkles, Cross } from "lucide-react"

export const metadata: Metadata = {
  title: "What Is the Gospel? | Bible Study Curriculum",
  description: "Learn about the core message of the Gospel and its significance in Christian faith.",
  keywords: ["gospel", "salvation", "christianity", "bible study", "foundations", "new believer"],
}

export default function GospelPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">What Is the Gospel?</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Learn about the core message of the Gospel and its significance in Christian faith.
        </p>

        <Tabs defaultValue="foundation" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="foundation">Foundation</TabsTrigger>
            <TabsTrigger value="message">Message</TabsTrigger>
            <TabsTrigger value="response">Response</TabsTrigger>
          </TabsList>

          <TabsContent value="foundation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Gospel Foundation</CardTitle>
                <CardDescription>Understanding the basics of the Gospel</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Biblical Definition</h3>
                    <p className="text-muted-foreground">
                      Understanding what the Gospel means in Scripture.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Cross className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Core Elements</h3>
                    <p className="text-muted-foreground">
                      Key components of the Gospel message.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Historical Context</h3>
                    <p className="text-muted-foreground">
                      The Gospel in its historical setting.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="message" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Gospel Message</CardTitle>
                <CardDescription>Understanding the Gospel message</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">God's Love</h3>
                    <p className="text-muted-foreground">
                      God's love demonstrated in the Gospel.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Salvation Plan</h3>
                    <p className="text-muted-foreground">
                      God's plan of salvation through Christ.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="response" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Gospel Response</CardTitle>
                <CardDescription>Understanding how to respond to the Gospel</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Personal Response</h3>
                    <p className="text-muted-foreground">
                      How to respond to the Gospel personally.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Life Application</h3>
                    <p className="text-muted-foreground">
                      Applying the Gospel to daily life.
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
              <CardDescription>Tools to help you understand the Gospel</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Gospel Assessment</h3>
                  <p className="text-sm text-muted-foreground">Evaluate your understanding of the Gospel</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Response Planning</h3>
                  <p className="text-sm text-muted-foreground">Plan your response to the Gospel</p>
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
                  <h3 className="font-semibold">Gospel Resources</h3>
                  <p className="text-sm text-muted-foreground">Books and articles on the Gospel</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Study Guides</h3>
                  <p className="text-sm text-muted-foreground">Resources for understanding the Gospel</p>
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