import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { HeartIcon, SearchIcon } from "lucide-react"

interface CharityOrg {
  id: string
  name: string
  category: string
  description: string
  website: string
  rating?: number
}

export function DonationPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("all")

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Support Educational Resources</h1>
        <p className="text-xl text-gray-600">Help spread knowledge and wisdom worldwide</p>
      </div>

      {/* Support Educational Organizations section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Support Educational Organizations</h2>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search organizations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
          <Tabs value={category} onValueChange={setCategory}>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHARITABLE_ORGS.filter(org => 
            (category === "all" || org.category === category) &&
            (org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
             org.description.toLowerCase().includes(searchTerm.toLowerCase()))
          ).map(org => (
            <CharityCard key={org.id} organization={org} />
          ))}
        </div>
      </div>
    </div>
  )
}

function CharityCard({ organization }: { organization: CharityOrg }) {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-2">{organization.name}</h3>
      <p className="text-sm text-gray-600 mb-4">{organization.description}</p>
      <div className="flex justify-between items-center">
        <Badge variant="secondary">{organization.category}</Badge>
        <Button asChild variant="outline" size="sm">
          <a href={organization.website} target="_blank" rel="noopener noreferrer">
            Donate
          </a>
        </Button>
      </div>
    </Card>
  )
}

const CHARITABLE_ORGS: CharityOrg[] = [
  {
    id: "1",
    name: "Global Education Fund",
    category: "education",
    description: "Supporting education initiatives worldwide",
    website: "https://example.com/gef",
    rating: 4.5
  },
  // Add more organizations as needed
] 