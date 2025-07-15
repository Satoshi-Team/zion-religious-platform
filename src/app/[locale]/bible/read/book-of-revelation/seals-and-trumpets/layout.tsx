import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Seals and Trumpets of Revelation | Bible Study Curriculum",
  description: "Study the prophetic visions of the seven seals and trumpets in Revelation chapters 4-11.",
}

export default function SealsAndTrumpetsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="space-y-6">
      <BreadcrumbNav
        items={[
          { title: "Bible", href: "/bible" },
          { title: "Read", href: "/bible/read" },
          { title: "Book of Revelation", href: "/bible/read/book-of-revelation" },
          { title: "Seals and Trumpets", href: "/bible/read/book-of-revelation/seals-and-trumpets" },
        ]}
      />
      {children}
    </div>
  )
} 