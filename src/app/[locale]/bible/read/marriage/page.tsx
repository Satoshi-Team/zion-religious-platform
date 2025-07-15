import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Heart, Target, Lightbulb, Users, Home, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Biblical Marriage and Family | Bible Study Curriculum",
  description: "Learn how to build and maintain strong, godly marriages and families according to biblical principles.",
  keywords: ["marriage", "family", "relationships", "parenting", "bible study", "christian living"],
}

export default function MarriagePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Biblical Marriage and Family</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Learn how to build and maintain strong, godly marriages and families according to biblical principles.
        </p>

        <Tabs defaultValue="marriage" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="marriage">Marriage</TabsTrigger>
            <TabsTrigger value="family">Family</TabsTrigger>
            <TabsTrigger value="parenting">Parenting</TabsTrigger>
          </TabsList>

          <TabsContent value="marriage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Biblical Marriage</CardTitle>
                <CardDescription>Understanding marriage principles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Marriage Foundation</h3>
                    <p className="text-muted-foreground">
                      Biblical principles of marriage.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Marriage Relationship</h3>
                    <p className="text-muted-foreground">
                      Building a strong marriage.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Marriage Growth</h3>
                    <p className="text-muted-foreground">
                      Growing together in marriage.
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
                <CardDescription>Building a godly family</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Home className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Family Principles</h3>
                    <p className="text-muted-foreground">
                      Understanding biblical family values.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Family Dynamics</h3>
                    <p className="text-muted-foreground">
                      Managing family relationships.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="parenting" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Parenting</CardTitle>
                <CardDescription>Raising children biblically</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Parenting Principles</h3>
                    <p className="text-muted-foreground">
                      Biblical principles for parenting.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Parenting Skills</h3>
                    <p className="text-muted-foreground">
                      Developing effective parenting skills.
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
              <CardDescription>Tools to help you strengthen relationships</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Marriage Assessment</h3>
                  <p className="text-sm text-muted-foreground">Evaluate your marriage relationship</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Parenting Planning</h3>
                  <p className="text-sm text-muted-foreground">Create your parenting strategy</p>
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
                  <h3 className="font-semibold">Marriage Resources</h3>
                  <p className="text-sm text-muted-foreground">Books and articles on biblical marriage</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Parenting Guides</h3>
                  <p className="text-sm text-muted-foreground">Resources for biblical parenting</p>
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