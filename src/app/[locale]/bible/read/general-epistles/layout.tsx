import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The General Epistles | Bible Study Curriculum",
  description: "Study the non-Pauline letters of the New Testament in depth.",
}

export default function GeneralEpistlesLayout({
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
          { title: "General Epistles", href: "/bible/read/general-epistles" },
        ]}
      />
      {children}
    </div>
  )
} 