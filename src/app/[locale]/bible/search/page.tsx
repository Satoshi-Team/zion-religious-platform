import { VerseSearch } from "@/components/bible/verse-search"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"

export default function VerseSearchPage() {
  const breadcrumbItems = [
    { label: "Bible", href: "/bible" },
    { label: "Search Verses" }
  ]

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <Breadcrumbs items={breadcrumbItems} />
      <VerseSearch />
    </div>
  )
} 