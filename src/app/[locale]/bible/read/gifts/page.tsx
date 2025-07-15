import React from 'react'
import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Gift, Target, Lightbulb, Heart, Users, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Biblical Spiritual Gifts and Service | Bible Study Curriculum",
  description: "Learn how to discover, develop, and use your spiritual gifts effectively for serving God and others in ministry.",
  keywords: ["spiritual gifts", "ministry", "service", "church", "bible study", "christian living"],
}

export default function GiftsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Biblical Spiritual Gifts and Service</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Discover how to identify, develop, and use your spiritual gifts effectively for serving God and others in ministry.
        </p>

        <Tabs defaultValue="gifts" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="gifts">Gifts</TabsTrigger>
            <TabsTrigger value="service">Service</TabsTrigger>
            <TabsTrigger value="ministry">Ministry</TabsTrigger>
          </TabsList>

          <TabsContent value="gifts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Spiritual Gifts</CardTitle>
                <CardDescription>Understanding spiritual gifts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Biblical Foundation</h3>
                    <p className="text-muted-foreground">
                      Scriptural basis for spiritual gifts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Gift className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Gift Discovery</h3>
                    <p className="text-muted-foreground">
                      Identifying your spiritual gifts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Gift Development</h3>
                    <p className="text-muted-foreground">
                      Growing in your spiritual gifts.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="service" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Christian Service</CardTitle>
                <CardDescription>Serving God and others</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Service Principles</h3>
                    <p className="text-muted-foreground">
                      Understanding biblical service.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Service Opportunities</h3>
                    <p className="text-muted-foreground">
                      Finding ways to serve effectively.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ministry" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Ministry Development</CardTitle>
                <CardDescription>Growing in ministry effectiveness</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Team Ministry</h3>
                    <p className="text-muted-foreground">
                      Working together in ministry.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Ministry Skills</h3>
                    <p className="text-muted-foreground">
                      Developing effective ministry skills.
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
              <CardDescription>Tools to help you develop your gifts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Gifts Assessment</h3>
                  <p className="text-sm text-muted-foreground">Discover your spiritual gifts</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Ministry Planning</h3>
                  <p className="text-sm text-muted-foreground">Create your ministry strategy</p>
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
                  <h3 className="font-semibold">Gifts Resources</h3>
                  <p className="text-sm text-muted-foreground">Books and articles on spiritual gifts</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Ministry Guides</h3>
                  <p className="text-sm text-muted-foreground">Resources for effective ministry</p>
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