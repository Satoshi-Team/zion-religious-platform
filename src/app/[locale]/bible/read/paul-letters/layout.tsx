import { Metadata } from "next"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"

export const metadata: Metadata = {
  title: "The Letters of Paul | Bible Study Curriculum",
  description: "Study Paul's epistles and their teachings in depth.",
}

export default function PaulLettersLayout({
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
          { title: "Paul's Letters", href: "/bible/read/paul-letters" },
        ]}
      />
      {children}
    </div>
  )
} 