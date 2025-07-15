import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Second Coming | Bible Study Curriculum",
  description: "Study the Second Coming and its significance.",
}

export default function SecondComingLayout({
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
          { title: "Second Coming", href: "/bible/read/life-of-jesus-christ/second-coming" },
        ]}
      />
      {children}
    </div>
  )
} 