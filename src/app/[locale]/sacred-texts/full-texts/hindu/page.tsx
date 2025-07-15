import { Metadata } from "next"
import { FullTextReader } from "@/components/sacred-texts/full-text-reader"

export const metadata: Metadata = {
  title: "Hindu Texts Full Reader - Free API Access",
  description: "Read complete Hindu texts using free, open-source APIs. Access Vedas, Upanishads, Sanskrit texts, and translations with full text search capabilities.",
  keywords: ["Hindu texts", "full text", "free API", "Vedas", "Upanishads", "Sanskrit texts", "Hindu scriptures", "Hindu search"],
  openGraph: {
    title: "Hindu Texts Full Reader - Free API Access",
    description: "Read complete Hindu texts using free, open-source APIs with Sanskrit texts and translations.",
    type: "website",
  },
}

export default function HinduFullTextPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <FullTextReader 
        tradition="hindu" 
        showSearch={true}
        showMetadata={true}
      />
    </div>
  )
} 