import { Metadata } from "next"
import { FullTextReader } from "@/components/sacred-texts/full-text-reader"

export const metadata: Metadata = {
  title: "Buddhist Texts Full Reader - Free API Access",
  description: "Read complete Buddhist texts using free, open-source APIs. Access Pali Canon, Tibetan texts, and translations with full text search capabilities.",
  keywords: ["Buddhist texts", "full text", "free API", "Pali Canon", "Tibetan texts", "Buddhist scriptures", "Buddhist search"],
  openGraph: {
    title: "Buddhist Texts Full Reader - Free API Access",
    description: "Read complete Buddhist texts using free, open-source APIs with Pali and Tibetan texts.",
    type: "website",
  },
}

export default function BuddhistFullTextPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <FullTextReader 
        tradition="buddhist" 
        showSearch={true}
        showMetadata={true}
      />
    </div>
  )
} 