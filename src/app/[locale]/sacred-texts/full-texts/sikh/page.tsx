import { Metadata } from "next"
import { FullTextReader } from "@/components/sacred-texts/full-text-reader"

export const metadata: Metadata = {
  title: "Sikh Texts Full Reader - Free API Access",
  description: "Read complete Sikh texts using free, open-source APIs. Access Guru Granth Sahib, Dasam Granth, and translations with full text search capabilities.",
  keywords: ["Sikh texts", "full text", "free API", "Guru Granth Sahib", "Dasam Granth", "Gurbani", "Sikh scriptures", "Sikh search"],
  openGraph: {
    title: "Sikh Texts Full Reader - Free API Access",
    description: "Read complete Sikh texts using free, open-source APIs with Gurbani and translations.",
    type: "website",
  },
}

export default function SikhFullTextPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <FullTextReader 
        tradition="sikh" 
        showSearch={true}
        showMetadata={true}
      />
    </div>
  )
} 