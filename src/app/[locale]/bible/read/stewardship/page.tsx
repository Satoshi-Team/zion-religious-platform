import React from 'react'
import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Target, Lightbulb, Heart, Users, Sparkles, Gift } from "lucide-react"

export const metadata: Metadata = {
  title: "Biblical Stewardship and Giving | Bible Study Curriculum",
  description: "Learn how to practice biblical stewardship and develop a generous heart according to God's principles.",
  keywords: ["stewardship", "giving", "finances", "generosity", "bible study", "christian living"],
}

export default function StewardshipPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Biblical Stewardship and Giving</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Learn how to practice biblical stewardship and develop a generous heart according to God's principles.
        </p>

        <Tabs defaultValue="stewardship" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="stewardship">Stewardship</TabsTrigger>
            <TabsTrigger value="giving">Giving</TabsTrigger>
            <TabsTrigger value="management">Management</TabsTrigger>
          </TabsList>

          <TabsContent value="stewardship" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Biblical Stewardship</CardTitle>
                <CardDescription>Understanding stewardship principles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Stewardship Foundation</h3>
                    <p className="text-muted-foreground">
                      Biblical principles of stewardship.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Gift className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Resource Management</h3>
                    <p className="text-muted-foreground">
                      Managing God's resources wisely.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Stewardship Growth</h3>
                    <p className="text-muted-foreground">
                      Growing in stewardship.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="giving" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Giving</CardTitle>
                <CardDescription>Understanding giving principles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Giving Principles</h3>
                    <p className="text-muted-foreground">
                      Biblical principles of giving.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Giving Types</h3>
                    <p className="text-muted-foreground">
                      Different types of giving.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="management" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Financial Management</CardTitle>
                <CardDescription>Understanding financial principles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Financial Principles</h3>
                    <p className="text-muted-foreground">
                      Biblical principles of finances.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Financial Skills</h3>
                    <p className="text-muted-foreground">
                      Developing financial management skills.
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
              <CardDescription>Tools to help you develop stewardship skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Stewardship Assessment</h3>
                  <p className="text-sm text-muted-foreground">Evaluate your stewardship practices</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Giving Planning</h3>
                  <p className="text-sm text-muted-foreground">Create your giving strategy</p>
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
                  <h3 className="font-semibold">Stewardship Resources</h3>
                  <p className="text-sm text-muted-foreground">Books and articles on biblical stewardship</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Financial Guides</h3>
                  <p className="text-sm text-muted-foreground">Resources for biblical financial management</p>
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