import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Eternal Kingdom | Bible Study Curriculum",
  description: "Study the Eternal Kingdom and its significance.",
}

export default function EternalKingdomLayout({
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
          { title: "Life of Jesus Christ", href: "/bible/read/life-of-jesus-christ" },
          { title: "Eternal Kingdom", href: "/bible/read/life-of-jesus-christ/eternal-kingdom" },
        ]}
      />
      {children}
    </div>
  )
} 