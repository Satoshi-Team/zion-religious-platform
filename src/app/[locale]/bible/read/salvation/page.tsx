import React from 'react'
import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Target, Lightbulb, Heart, Users, Sparkles, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "What Does It Mean to Be Saved? | Bible Study Curriculum",
  description: "Learn about the meaning and process of salvation in Christian faith.",
  keywords: ["salvation", "saved", "christianity", "bible study", "foundations", "new believer"],
}

export default function SalvationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">What Does It Mean to Be Saved?</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Learn about the meaning and process of salvation in Christian faith.
        </p>

        <Tabs defaultValue="meaning" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="meaning">Meaning</TabsTrigger>
            <TabsTrigger value="process">Process</TabsTrigger>
            <TabsTrigger value="assurance">Assurance</TabsTrigger>
          </TabsList>

          <TabsContent value="meaning" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Meaning of Salvation</CardTitle>
                <CardDescription>Understanding what salvation means</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Biblical Definition</h3>
                    <p className="text-muted-foreground">
                      Understanding salvation in Scripture.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Spiritual Protection</h3>
                    <p className="text-muted-foreground">
                      Salvation as spiritual protection.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Eternal Life</h3>
                    <p className="text-muted-foreground">
                      Salvation and eternal life.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="process" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Process of Salvation</CardTitle>
                <CardDescription>Understanding how salvation works</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Faith and Repentance</h3>
                    <p className="text-muted-foreground">
                      The role of faith and repentance in salvation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">God's Grace</h3>
                    <p className="text-muted-foreground">
                      The role of God's grace in salvation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assurance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Assurance of Salvation</CardTitle>
                <CardDescription>Understanding salvation assurance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Personal Assurance</h3>
                    <p className="text-muted-foreground">
                      How to have assurance of salvation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Life Transformation</h3>
                    <p className="text-muted-foreground">
                      Evidence of salvation in life.
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
              <CardDescription>Tools to help you understand salvation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Salvation Assessment</h3>
                  <p className="text-sm text-muted-foreground">Evaluate your understanding of salvation</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Assurance Planning</h3>
                  <p className="text-sm text-muted-foreground">Plan your assurance of salvation</p>
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
                  <h3 className="font-semibold">Salvation Resources</h3>
                  <p className="text-sm text-muted-foreground">Books and articles about salvation</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Study Guides</h3>
                  <p className="text-sm text-muted-foreground">Resources for understanding salvation</p>
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