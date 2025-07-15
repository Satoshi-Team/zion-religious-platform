import { Metadata } from "next"
import { FullTextReader } from "@/components/sacred-texts/full-text-reader"

export const metadata: Metadata = {
  title: "Bible Full Text Reader - Free API Access",
  description: "Read the complete Bible using free, open-source APIs. Access multiple translations including NIV, ESV, KJV, and more with full text search capabilities.",
  keywords: ["Bible", "full text", "free API", "scripture", "Christian texts", "Bible translations", "Bible search"],
  openGraph: {
    title: "Bible Full Text Reader - Free API Access",
    description: "Read the complete Bible using free, open-source APIs with multiple translations.",
    type: "website",
  },
}

export default function BibleFullTextPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <FullTextReader 
        tradition="bible" 
        showSearch={true}
        showMetadata={true}
      />
    </div>
  )
} 