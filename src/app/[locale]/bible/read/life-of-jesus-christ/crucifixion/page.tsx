import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Star, 
  Heart, 
  Crown, 
  Zap, 
  Sun, 
  Moon, 
  MapPin, 
  Calendar, 
  Building, 
  Cross, 
  Shield, 
  Users, 
  Globe, 
  Scroll, 
  Target, 
  Eye, 
  Sword, 
  Clock, 
  Book, 
  ThumbsUp, 
  ThumbsDown 
} from "lucide-react"
import { PrayerIcon } from "@/components/icons/custom-icons"

export const metadata: Metadata = {
  title: "The Crucifixion of Jesus | Bible Study Curriculum",
  description: "Study the crucifixion of Jesus Christ and its significance for salvation.",
  keywords: ["crucifixion", "cross", "sacrifice", "salvation", "gospels", "bible study"],
}

export default function CrucifixionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">The Crucifixion of Jesus</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Study the crucifixion of Jesus Christ and its significance for salvation.
        </p>

        <Tabs defaultValue="trial" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="trial">Trial</TabsTrigger>
            <TabsTrigger value="crucifixion">Crucifixion</TabsTrigger>
            <TabsTrigger value="death">Death</TabsTrigger>
            <TabsTrigger value="significance">Significance</TabsTrigger>
          </TabsList>

          <TabsContent value="trial" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>The Trial</CardTitle>
                <CardDescription>Jesus' trial before Pilate and the Sanhedrin</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Crown className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Accusations</h3>
                    <p className="text-muted-foreground">
                      The charges brought against Jesus.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ThumbsDown className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Verdict</h3>
                    <p className="text-muted-foreground">
                      Pilate's decision and the crowd's response.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sword className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Sentence</h3>
                    <p className="text-muted-foreground">
                      The decision to crucify Jesus.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="crucifixion" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>The Crucifixion</CardTitle>
                <CardDescription>Jesus' suffering on the cross</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Cross className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Process</h3>
                    <p className="text-muted-foreground">
                      The physical and emotional suffering of crucifixion.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Witnesses</h3>
                    <p className="text-muted-foreground">
                      Those present at the crucifixion.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <PrayerIcon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Words</h3>
                    <p className="text-muted-foreground">
                      Jesus' final statements from the cross.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="death" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>The Death</CardTitle>
                <CardDescription>Jesus' final moments and burial</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Moment</h3>
                    <p className="text-muted-foreground">
                      The events surrounding Jesus' death.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Building className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Burial</h3>
                    <p className="text-muted-foreground">
                      Jesus' burial in Joseph's tomb.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Guard</h3>
                    <p className="text-muted-foreground">
                      The Roman guard at the tomb.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="significance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Significance</CardTitle>
                <CardDescription>Understanding the importance of Jesus' crucifixion</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Sacrificial Love</h3>
                    <p className="text-muted-foreground">
                      Jesus willingly gave His life for humanity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Crown className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Victory</h3>
                    <p className="text-muted-foreground">
                      Jesus' triumph over sin and death.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Salvation</h3>
                    <p className="text-muted-foreground">
                      The eternal significance of the cross.
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
              <CardDescription>Tools to help you understand the crucifixion</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Timeline</h3>
                  <p className="text-sm text-muted-foreground">Explore the sequence of events</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Map</h3>
                  <p className="text-sm text-muted-foreground">Study the locations of key events</p>
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
                  <h3 className="font-semibold">Commentary Resources</h3>
                  <p className="text-sm text-muted-foreground">Expert insights on the crucifixion</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Video Lessons</h3>
                  <p className="text-sm text-muted-foreground">Visual explanations of key events</p>
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