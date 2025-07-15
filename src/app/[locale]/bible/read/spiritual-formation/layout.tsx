import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "Biblical Spiritual Formation | Bible Study Curriculum",
  description: "Learn how to develop a deeper spiritual life and grow in your relationship with God through biblical practices.",
}

export default function SpiritualFormationLayout({
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
          { title: "Spiritual Formation", href: "/bible/read/spiritual-formation" },
        ]}
      />
      {children}
    </div>
  )
} 