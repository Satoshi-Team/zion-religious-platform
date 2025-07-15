import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Life of Jesus Christ | Bible Study Curriculum",
  description: "Explore the life, ministry, and teachings of Jesus Christ in depth.",
}

export default function LifeOfJesusLayout({
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
          { title: "Life of Jesus", href: "/bible/read/life-of-jesus" },
        ]}
      />
      {children}
    </div>
  )
} 