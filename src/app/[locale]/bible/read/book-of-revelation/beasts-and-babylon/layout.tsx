import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Beasts and Babylon | Bible Study Curriculum",
  description: "Study the prophetic visions of the beasts, Babylon, and the final battle in Revelation chapters 12-20.",
}

export default function BeastsAndBabylonLayout({
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
          { title: "Beasts and Babylon", href: "/bible/read/book-of-revelation/beasts-and-babylon" },
        ]}
      />
      {children}
    </div>
  )
} 