import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Target, Lightbulb, Heart, GraduationCap } from "lucide-react"

export const metadata: Metadata = {
  title: "Biblical Discipleship and Mentoring | Bible Study Curriculum",
  description: "Learn how to make disciples and mentor others effectively through biblical principles and practical strategies.",
  keywords: ["discipleship", "mentoring", "spiritual growth", "bible study", "christian leadership"],
}

export default function DiscipleshipPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Biblical Discipleship and Mentoring</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Discover how to make disciples and mentor others effectively through biblical principles and practical strategies.
        </p>

        <Tabs defaultValue="discipleship" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="discipleship">Discipleship</TabsTrigger>
            <TabsTrigger value="mentoring">Mentoring</TabsTrigger>
            <TabsTrigger value="growth">Growth</TabsTrigger>
          </TabsList>

          <TabsContent value="discipleship" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Biblical Discipleship</CardTitle>
                <CardDescription>Understanding discipleship principles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Biblical Foundation</h3>
                    <p className="text-muted-foreground">
                      Scriptural basis for discipleship.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Making Disciples</h3>
                    <p className="text-muted-foreground">
                      Process of disciple-making.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Discipleship Goals</h3>
                    <p className="text-muted-foreground">
                      Setting and achieving spiritual goals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mentoring" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Spiritual Mentoring</CardTitle>
                <CardDescription>Developing mentoring relationships</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Mentoring Relationships</h3>
                    <p className="text-muted-foreground">
                      Building effective mentoring relationships.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Mentoring Skills</h3>
                    <p className="text-muted-foreground">
                      Developing essential mentoring skills.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="growth" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Spiritual Growth</CardTitle>
                <CardDescription>Fostering spiritual development</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <GraduationCap className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Growth Assessment</h3>
                    <p className="text-muted-foreground">
                      Evaluating spiritual growth progress.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Growth Planning</h3>
                    <p className="text-muted-foreground">
                      Creating spiritual growth plans.
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
              <CardDescription>Tools to help you develop discipleship skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Discipleship Assessment</h3>
                  <p className="text-sm text-muted-foreground">Evaluate your discipleship skills</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Growth Planning</h3>
                  <p className="text-sm text-muted-foreground">Create spiritual growth strategies</p>
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
                  <h3 className="font-semibold">Discipleship Resources</h3>
                  <p className="text-sm text-muted-foreground">Books and articles on discipleship</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Mentoring Guides</h3>
                  <p className="text-sm text-muted-foreground">Resources for effective mentoring</p>
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