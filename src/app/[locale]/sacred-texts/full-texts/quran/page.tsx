import { Metadata } from "next"
import { FullTextReader } from "@/components/sacred-texts/full-text-reader"

export const metadata: Metadata = {
  title: "Quran Full Text Reader - Free API Access",
  description: "Read the complete Quran using free, open-source APIs. Access Arabic text, translations, and transliterations with full text search capabilities.",
  keywords: ["Quran", "full text", "free API", "Islamic texts", "Arabic text", "Quran translations", "Quran search"],
  openGraph: {
    title: "Quran Full Text Reader - Free API Access",
    description: "Read the complete Quran using free, open-source APIs with Arabic text and translations.",
    type: "website",
  },
}

export default function QuranFullTextPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <FullTextReader 
        tradition="quran" 
        showSearch={true}
        showMetadata={true}
      />
    </div>
  )
} 