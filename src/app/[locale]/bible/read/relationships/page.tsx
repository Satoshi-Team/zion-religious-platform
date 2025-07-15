import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Users, BookOpen, Target, Home, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Biblical Relationships and Family | Bible Study Curriculum",
  description: "Learn about biblical principles for building healthy relationships and strong families.",
  keywords: ["biblical relationships", "family", "marriage", "bible study", "christian living"],
}

export default function RelationshipsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Biblical Relationships and Family</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Discover how to build healthy relationships and strong families based on biblical principles.
        </p>

        <Tabs defaultValue="relationships" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="relationships">Relationships</TabsTrigger>
            <TabsTrigger value="family">Family Life</TabsTrigger>
            <TabsTrigger value="marriage">Marriage</TabsTrigger>
          </TabsList>

          <TabsContent value="relationships" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Relationship Principles</CardTitle>
                <CardDescription>Core principles for biblical relationships</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Love and Respect</h3>
                    <p className="text-muted-foreground">
                      Building relationships on biblical love and respect.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Biblical Foundation</h3>
                    <p className="text-muted-foreground">
                      Scriptural basis for healthy relationships.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Community</h3>
                    <p className="text-muted-foreground">
                      Building meaningful relationships in community.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="family" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Family Life</CardTitle>
                <CardDescription>Building strong biblical families</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Home className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Family Structure</h3>
                    <p className="text-muted-foreground">
                      Understanding biblical family roles and responsibilities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Parenting</h3>
                    <p className="text-muted-foreground">
                      Raising children according to biblical principles.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="marriage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Marriage</CardTitle>
                <CardDescription>Building a strong biblical marriage</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Sparkles className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Marriage Covenant</h3>
                    <p className="text-muted-foreground">
                      Understanding the sacred nature of marriage.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Marital Love</h3>
                    <p className="text-muted-foreground">
                      Cultivating love and intimacy in marriage.
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
              <CardDescription>Tools to help you grow in relationships</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Relationship Assessment</h3>
                  <p className="text-sm text-muted-foreground">Evaluate your relationship skills</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Family Planning</h3>
                  <p className="text-sm text-muted-foreground">Create a family growth strategy</p>
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
                  <h3 className="font-semibold">Relationship Resources</h3>
                  <p className="text-sm text-muted-foreground">Books and articles on relationships</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Family Guides</h3>
                  <p className="text-sm text-muted-foreground">Resources for building strong families</p>
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