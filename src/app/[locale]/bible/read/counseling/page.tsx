import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, MessageSquare, BookOpen, Target, Users, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Biblical Counseling and Care | Bible Study Curriculum",
  description: "Learn how to provide biblical counsel and care to others through scriptural principles and practical wisdom.",
  keywords: ["biblical counseling", "pastoral care", "christian counseling", "bible study", "christian living"],
}

export default function CounselingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Biblical Counseling and Care</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Discover how to provide biblical counsel and care to others through scriptural principles and practical wisdom.
        </p>

        <Tabs defaultValue="counseling" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="counseling">Counseling</TabsTrigger>
            <TabsTrigger value="care">Pastoral Care</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
          </TabsList>

          <TabsContent value="counseling" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Biblical Counseling</CardTitle>
                <CardDescription>Understanding biblical counseling principles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Biblical Foundation</h3>
                    <p className="text-muted-foreground">
                      Scriptural basis for counseling and care.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MessageSquare className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Counseling Skills</h3>
                    <p className="text-muted-foreground">
                      Developing effective counseling skills.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Compassionate Care</h3>
                    <p className="text-muted-foreground">
                      Providing care with biblical compassion.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="care" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Pastoral Care</CardTitle>
                <CardDescription>Providing spiritual care and support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Spiritual Guidance</h3>
                    <p className="text-muted-foreground">
                      Offering spiritual direction and guidance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Crisis Support</h3>
                    <p className="text-muted-foreground">
                      Providing support during difficult times.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="support" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Support Ministry</CardTitle>
                <CardDescription>Building effective support systems</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Support Groups</h3>
                    <p className="text-muted-foreground">
                      Creating and leading support groups.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Care Ministry</h3>
                    <p className="text-muted-foreground">
                      Developing effective care ministries.
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
              <CardDescription>Tools to help you develop counseling skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Counseling Assessment</h3>
                  <p className="text-sm text-muted-foreground">Evaluate your counseling skills</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Practice Scenarios</h3>
                  <p className="text-sm text-muted-foreground">Practice counseling skills</p>
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
                  <h3 className="font-semibold">Counseling Resources</h3>
                  <p className="text-sm text-muted-foreground">Books and articles on biblical counseling</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Care Guides</h3>
                  <p className="text-sm text-muted-foreground">Resources for pastoral care</p>
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