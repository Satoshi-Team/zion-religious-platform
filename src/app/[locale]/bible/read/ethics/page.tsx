import React from 'react'
import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Scale, Target, Lightbulb, Heart, Users, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Biblical Ethics and Decision Making | Bible Study Curriculum",
  description: "Learn how to make godly decisions and live according to biblical ethical principles in all areas of life.",
  keywords: ["ethics", "decision making", "morality", "values", "bible study", "christian living"],
}

export default function EthicsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Biblical Ethics and Decision Making</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Learn how to make godly decisions and live according to biblical ethical principles in all areas of life.
        </p>

        <Tabs defaultValue="ethics" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="ethics">Ethics</TabsTrigger>
            <TabsTrigger value="decisions">Decisions</TabsTrigger>
            <TabsTrigger value="application">Application</TabsTrigger>
          </TabsList>

          <TabsContent value="ethics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Biblical Ethics</CardTitle>
                <CardDescription>Understanding ethical principles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Ethical Foundation</h3>
                    <p className="text-muted-foreground">
                      Biblical principles of ethics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Scale className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Moral Framework</h3>
                    <p className="text-muted-foreground">
                      Developing a biblical worldview.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Ethical Growth</h3>
                    <p className="text-muted-foreground">
                      Growing in ethical understanding.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="decisions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Decision Making</CardTitle>
                <CardDescription>Making godly decisions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Decision Principles</h3>
                    <p className="text-muted-foreground">
                      Biblical principles for decisions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Decision Process</h3>
                    <p className="text-muted-foreground">
                      Steps to godly decision making.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="application" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Practical Application</CardTitle>
                <CardDescription>Applying ethics in daily life</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Life Areas</h3>
                    <p className="text-muted-foreground">
                      Ethics in different life contexts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Practical Skills</h3>
                    <p className="text-muted-foreground">
                      Developing ethical decision skills.
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
              <CardDescription>Tools to help you develop ethical thinking</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Ethics Assessment</h3>
                  <p className="text-sm text-muted-foreground">Evaluate your ethical framework</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Decision Planning</h3>
                  <p className="text-sm text-muted-foreground">Create your decision-making strategy</p>
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
                  <h3 className="font-semibold">Ethics Resources</h3>
                  <p className="text-sm text-muted-foreground">Books and articles on biblical ethics</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Decision Guides</h3>
                  <p className="text-sm text-muted-foreground">Resources for godly decision making</p>
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