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
  Flame
} from "lucide-react"
import { WaterIcon, DoveIcon } from "@/components/icons/custom-icons"

export const metadata: Metadata = {
  title: "The Ministry Begins | Bible Study Curriculum",
  description: "Study the beginning of Jesus' public ministry, including his baptism, temptation, and early teachings.",
  keywords: ["ministry", "baptism", "temptation", "disciples", "gospels", "bible study"],
}

export default function MinistryBeginsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">The Ministry Begins</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Study the beginning of Jesus' public ministry, including his baptism, temptation, and early teachings.
        </p>

        <Tabs defaultValue="baptism" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="baptism">Baptism</TabsTrigger>
            <TabsTrigger value="temptation">Temptation</TabsTrigger>
            <TabsTrigger value="disciples">Disciples</TabsTrigger>
            <TabsTrigger value="significance">Significance</TabsTrigger>
          </TabsList>

          <TabsContent value="baptism" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>The Baptism</CardTitle>
                <CardDescription>Jesus' baptism by John</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <WaterIcon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Event</h3>
                    <p className="text-muted-foreground">
                      Jesus' baptism in the Jordan River.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <DoveIcon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Spirit</h3>
                    <p className="text-muted-foreground">
                      The Holy Spirit descending like a dove.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Crown className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Voice</h3>
                    <p className="text-muted-foreground">
                      The Father's affirmation of Jesus.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="temptation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>The Temptation</CardTitle>
                <CardDescription>Jesus' testing in the wilderness</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Flame className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Setting</h3>
                    <p className="text-muted-foreground">
                      Forty days in the wilderness.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Tests</h3>
                    <p className="text-muted-foreground">
                      The three temptations of Jesus.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Victory</h3>
                    <p className="text-muted-foreground">
                      Jesus' triumph over temptation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="disciples" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>The First Disciples</CardTitle>
                <CardDescription>Jesus' calling of his followers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Call</h3>
                    <p className="text-muted-foreground">
                      Jesus' invitation to follow him.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Mission</h3>
                    <p className="text-muted-foreground">
                      The purpose of discipleship.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Scroll className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">The Training</h3>
                    <p className="text-muted-foreground">
                      Jesus' preparation of his disciples.
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
                <CardDescription>Understanding the importance of Jesus' early ministry</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Star className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Divine Authority</h3>
                    <p className="text-muted-foreground">
                      Jesus' demonstration of his power and authority.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Human Example</h3>
                    <p className="text-muted-foreground">
                      Jesus as a model for overcoming temptation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Spiritual Impact</h3>
                    <p className="text-muted-foreground">
                      The lasting significance of Jesus' early ministry.
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
              <CardDescription>Tools to help you understand Jesus' early ministry</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Timeline</h3>
                  <p className="text-sm text-muted-foreground">Explore key events in Jesus' early ministry</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Map</h3>
                  <p className="text-sm text-muted-foreground">Study the locations of Jesus' early ministry</p>
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
                  <p className="text-sm text-muted-foreground">Expert insights on Jesus' early ministry</p>
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