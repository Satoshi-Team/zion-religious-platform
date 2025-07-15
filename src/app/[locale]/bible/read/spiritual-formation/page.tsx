import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, BookOpen, Target, Sparkles, Users, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Biblical Spiritual Formation | Bible Study Curriculum",
  description: "Learn how to develop a deeper spiritual life and grow in your relationship with God through biblical practices.",
  keywords: ["spiritual formation", "spiritual growth", "spiritual disciplines", "bible study", "christian living"],
}

export default function SpiritualFormationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Biblical Spiritual Formation</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Discover how to develop a deeper spiritual life and grow in your relationship with God through biblical practices.
        </p>

        <Tabs defaultValue="formation" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="formation">Spiritual Formation</TabsTrigger>
            <TabsTrigger value="disciplines">Spiritual Disciplines</TabsTrigger>
            <TabsTrigger value="growth">Spiritual Growth</TabsTrigger>
          </TabsList>

          <TabsContent value="formation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Spiritual Formation</CardTitle>
                <CardDescription>Understanding spiritual formation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Heart Transformation</h3>
                    <p className="text-muted-foreground">
                      Understanding the process of heart transformation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Biblical Foundation</h3>
                    <p className="text-muted-foreground">
                      Scriptural basis for spiritual formation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Community Impact</h3>
                    <p className="text-muted-foreground">
                      How spiritual formation affects community.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="disciplines" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Spiritual Disciplines</CardTitle>
                <CardDescription>Practices for spiritual growth</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Prayer & Meditation</h3>
                    <p className="text-muted-foreground">
                      Developing a deeper prayer life.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Scripture Study</h3>
                    <p className="text-muted-foreground">
                      Engaging with God's Word effectively.
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
                <CardDescription>Growing in your relationship with God</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Sparkles className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Character Development</h3>
                    <p className="text-muted-foreground">
                      Growing in Christ-like character.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Spiritual Maturity</h3>
                    <p className="text-muted-foreground">
                      Developing spiritual maturity over time.
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
              <CardDescription>Tools to help you grow spiritually</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Spiritual Assessment</h3>
                  <p className="text-sm text-muted-foreground">Evaluate your spiritual growth</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Growth Plan</h3>
                  <p className="text-sm text-muted-foreground">Create your spiritual growth plan</p>
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
                  <h3 className="font-semibold">Formation Resources</h3>
                  <p className="text-sm text-muted-foreground">Books and articles on spiritual formation</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Discipline Guides</h3>
                  <p className="text-sm text-muted-foreground">Resources for spiritual disciplines</p>
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