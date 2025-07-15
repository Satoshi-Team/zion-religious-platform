import React from 'react'
import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Shield, Target, Lightbulb, Heart, Users, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Biblical Apologetics and Evangelism | Bible Study Curriculum",
  description: "Learn how to defend your faith and share the gospel effectively through biblical apologetics and evangelism.",
  keywords: ["apologetics", "evangelism", "faith", "gospel", "bible study", "christian living"],
}

export default function ApologeticsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Biblical Apologetics and Evangelism</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Learn how to defend your faith and share the gospel effectively through biblical apologetics and evangelism.
        </p>

        <Tabs defaultValue="apologetics" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="apologetics">Apologetics</TabsTrigger>
            <TabsTrigger value="evangelism">Evangelism</TabsTrigger>
            <TabsTrigger value="defense">Faith Defense</TabsTrigger>
          </TabsList>

          <TabsContent value="apologetics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Biblical Apologetics</CardTitle>
                <CardDescription>Understanding apologetics principles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Apologetics Foundation</h3>
                    <p className="text-muted-foreground">
                      Biblical principles of apologetics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Defense Methods</h3>
                    <p className="text-muted-foreground">
                      Effective methods for defending faith.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Apologetics Development</h3>
                    <p className="text-muted-foreground">
                      Growing in apologetics skills.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="evangelism" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Evangelism</CardTitle>
                <CardDescription>Sharing the gospel effectively</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Evangelism Principles</h3>
                    <p className="text-muted-foreground">
                      Understanding biblical evangelism.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Evangelism Practice</h3>
                    <p className="text-muted-foreground">
                      Developing effective evangelism skills.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="defense" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Faith Defense</CardTitle>
                <CardDescription>Addressing common challenges</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Common Objections</h3>
                    <p className="text-muted-foreground">
                      Responding to faith challenges.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Defense Strategies</h3>
                    <p className="text-muted-foreground">
                      Developing effective responses.
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
              <CardDescription>Tools to help you develop your skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Apologetics Assessment</h3>
                  <p className="text-sm text-muted-foreground">Evaluate your apologetics skills</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Evangelism Planning</h3>
                  <p className="text-sm text-muted-foreground">Create your evangelism strategy</p>
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
                  <h3 className="font-semibold">Apologetics Resources</h3>
                  <p className="text-sm text-muted-foreground">Books and articles on apologetics</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Evangelism Guides</h3>
                  <p className="text-sm text-muted-foreground">Resources for effective evangelism</p>
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