import React from 'react'
import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Heart, Home, Target, Lightbulb, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Biblical Family and Relationships | Bible Study Curriculum",
  description: "Learn how to build strong family relationships and create a godly home through biblical principles and practical wisdom.",
  keywords: ["family", "relationships", "marriage", "parenting", "bible study", "christian living"],
}

export default function FamilyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Biblical Family and Relationships</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Discover how to build strong family relationships and create a godly home through biblical principles and practical wisdom.
        </p>

        <Tabs defaultValue="family" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="family">Family</TabsTrigger>
            <TabsTrigger value="relationships">Relationships</TabsTrigger>
            <TabsTrigger value="parenting">Parenting</TabsTrigger>
          </TabsList>

          <TabsContent value="family" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Biblical Family</CardTitle>
                <CardDescription>Understanding family principles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Biblical Foundation</h3>
                    <p className="text-muted-foreground">
                      Scriptural basis for family life.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Home className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Family Structure</h3>
                    <p className="text-muted-foreground">
                      Building a godly family structure.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Family Protection</h3>
                    <p className="text-muted-foreground">
                      Guarding and nurturing family relationships.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="relationships" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Family Relationships</CardTitle>
                <CardDescription>Building strong relationships</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Marriage</h3>
                    <p className="text-muted-foreground">
                      Building a strong marital relationship.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Extended Family</h3>
                    <p className="text-muted-foreground">
                      Nurturing relationships with extended family.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="parenting" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Biblical Parenting</CardTitle>
                <CardDescription>Raising children in the faith</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Parenting Goals</h3>
                    <p className="text-muted-foreground">
                      Setting godly parenting objectives.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Parenting Skills</h3>
                    <p className="text-muted-foreground">
                      Developing effective parenting strategies.
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
              <CardDescription>Tools to help you develop family skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Family Assessment</h3>
                  <p className="text-sm text-muted-foreground">Evaluate your family relationships</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Parenting Planning</h3>
                  <p className="text-sm text-muted-foreground">Create effective parenting strategies</p>
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
                  <h3 className="font-semibold">Family Resources</h3>
                  <p className="text-sm text-muted-foreground">Books and articles on family life</p>
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