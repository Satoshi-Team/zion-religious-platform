import React from 'react'
import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Target, Lightbulb, Heart, Users, Sparkles, Gift } from "lucide-react"

export const metadata: Metadata = {
  title: "Grace vs. Works | Bible Study Curriculum",
  description: "Learn about the relationship between grace and works in Christian faith.",
  keywords: ["grace", "works", "salvation", "bible study", "foundations", "new believer"],
}

export default function GraceWorksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Grace vs. Works</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Learn about the relationship between grace and works in Christian faith.
        </p>

        <Tabs defaultValue="grace" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="grace">Grace</TabsTrigger>
            <TabsTrigger value="works">Works</TabsTrigger>
            <TabsTrigger value="balance">Balance</TabsTrigger>
          </TabsList>

          <TabsContent value="grace" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Understanding Grace</CardTitle>
                <CardDescription>What grace means and involves</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Biblical Foundation</h3>
                    <p className="text-muted-foreground">
                      Understanding grace in Scripture.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Gift className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">God's Grace</h3>
                    <p className="text-muted-foreground">
                      Understanding God's grace.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Grace in Salvation</h3>
                    <p className="text-muted-foreground">
                      Grace's role in salvation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="works" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Understanding Works</CardTitle>
                <CardDescription>What works mean and involve</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Good Works</h3>
                    <p className="text-muted-foreground">
                      Understanding good works.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Works and Faith</h3>
                    <p className="text-muted-foreground">
                      The relationship between works and faith.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="balance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Balancing Grace and Works</CardTitle>
                <CardDescription>Understanding the balance between grace and works</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Practical Balance</h3>
                    <p className="text-muted-foreground">
                      Living in the balance of grace and works.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Growth in Grace</h3>
                    <p className="text-muted-foreground">
                      Growing in grace while doing good works.
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
              <CardDescription>Tools to help you understand grace and works</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Grace Assessment</h3>
                  <p className="text-sm text-muted-foreground">Evaluate your understanding of grace</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Works Planning</h3>
                  <p className="text-sm text-muted-foreground">Plan your good works journey</p>
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
                  <h3 className="font-semibold">Grace Resources</h3>
                  <p className="text-sm text-muted-foreground">Books and articles about grace</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Study Guides</h3>
                  <p className="text-sm text-muted-foreground">Resources for understanding works</p>
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