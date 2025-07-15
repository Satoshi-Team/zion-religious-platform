import React from 'react'
import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Heart, Lightbulb, Sparkles, Target, Users } from "lucide-react"
import { HandshakeIcon } from "@/components/icons/custom-icons"

export const metadata: Metadata = {
  title: "Biblical Community and Fellowship | Bible Study Curriculum",
  description: "Learn how to build and maintain meaningful relationships within the body of Christ according to biblical principles.",
  keywords: ["community", "fellowship", "relationships", "church", "bible study", "christian living"],
}

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Biblical Community and Fellowship</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Learn how to build and maintain meaningful relationships within the body of Christ according to biblical principles.
        </p>

        <Tabs defaultValue="community" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="fellowship">Fellowship</TabsTrigger>
            <TabsTrigger value="relationships">Relationships</TabsTrigger>
          </TabsList>

          <TabsContent value="community" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Biblical Community</CardTitle>
                <CardDescription>Understanding community principles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Community Foundation</h3>
                    <p className="text-muted-foreground">
                      Biblical principles of community.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <HandshakeIcon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Community Building</h3>
                    <p className="text-muted-foreground">
                      Building strong communities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Community Growth</h3>
                    <p className="text-muted-foreground">
                      Growing in community.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fellowship" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Fellowship</CardTitle>
                <CardDescription>Understanding fellowship principles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Fellowship Principles</h3>
                    <p className="text-muted-foreground">
                      Biblical principles of fellowship.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Fellowship Types</h3>
                    <p className="text-muted-foreground">
                      Different types of fellowship.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="relationships" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Relationships</CardTitle>
                <CardDescription>Understanding relationship principles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Relationship Principles</h3>
                    <p className="text-muted-foreground">
                      Biblical principles of relationships.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lightbulb className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Relationship Skills</h3>
                    <p className="text-muted-foreground">
                      Developing relationship skills.
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
              <CardDescription>Tools to help you develop community skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Community Assessment</h3>
                  <p className="text-sm text-muted-foreground">Evaluate your community involvement</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Fellowship Planning</h3>
                  <p className="text-sm text-muted-foreground">Create your fellowship strategy</p>
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
                  <h3 className="font-semibold">Community Resources</h3>
                  <p className="text-sm text-muted-foreground">Books and articles on biblical community</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Relationship Guides</h3>
                  <p className="text-sm text-muted-foreground">Resources for building godly relationships</p>
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