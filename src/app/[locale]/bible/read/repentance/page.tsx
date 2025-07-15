import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Target, Lightbulb, Heart, Users, Sparkles, RefreshCw } from "lucide-react"

export const metadata: Metadata = {
  title: "Repentance and Forgiveness | Bible Study Curriculum",
  description: "Learn about repentance and forgiveness in Christian faith.",
  keywords: ["repentance", "forgiveness", "bible study", "foundations", "new believer"],
}

export default function RepentancePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Repentance and Forgiveness</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Learn about repentance and forgiveness in Christian faith.
        </p>

        <Tabs defaultValue="repentance" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="repentance">Repentance</TabsTrigger>
            <TabsTrigger value="forgiveness">Forgiveness</TabsTrigger>
            <TabsTrigger value="practice">Practice</TabsTrigger>
          </TabsList>

          <TabsContent value="repentance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Understanding Repentance</CardTitle>
                <CardDescription>What repentance means and involves</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Biblical Foundation</h3>
                    <p className="text-muted-foreground">
                      Understanding repentance in Scripture.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <RefreshCw className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">True Repentance</h3>
                    <p className="text-muted-foreground">
                      What true repentance looks like.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Repentance Process</h3>
                    <p className="text-muted-foreground">
                      The process of repentance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="forgiveness" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Understanding Forgiveness</CardTitle>
                <CardDescription>What forgiveness means and involves</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">God's Forgiveness</h3>
                    <p className="text-muted-foreground">
                      Understanding God's forgiveness.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Forgiving Others</h3>
                    <p className="text-muted-foreground">
                      Learning to forgive others.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="practice" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Practical Application</CardTitle>
                <CardDescription>Living out repentance and forgiveness</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Daily Practice</h3>
                    <p className="text-muted-foreground">
                      Practicing repentance and forgiveness daily.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Growth in Grace</h3>
                    <p className="text-muted-foreground">
                      Growing in repentance and forgiveness.
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
              <CardDescription>Tools to help you understand repentance and forgiveness</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Repentance Assessment</h3>
                  <p className="text-sm text-muted-foreground">Evaluate your understanding of repentance</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Forgiveness Planning</h3>
                  <p className="text-sm text-muted-foreground">Plan your forgiveness journey</p>
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
                  <h3 className="font-semibold">Repentance Resources</h3>
                  <p className="text-sm text-muted-foreground">Books and articles about repentance</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Study Guides</h3>
                  <p className="text-sm text-muted-foreground">Resources for understanding forgiveness</p>
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