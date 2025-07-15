import { Metadata } from "next"
import { Inter } from "next/font/google"
import { BlogSidebar } from "@/components/layout/blog-sidebar"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Blog | Religious Studies",
  description: "Explore in-depth articles about various religious traditions, practices, and teachings.",
  openGraph: {
    title: "Blog | Religious Studies",
    description: "Explore in-depth articles about various religious traditions, practices, and teachings.",
    type: "website",
  },
}

interface BlogLayoutProps {
  children: React.ReactNode
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className={`${inter.className} min-h-screen bg-background`}>
      <main className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Blog", href: "/blog" }
          ]}
          className="mb-6"
        />
        
        <div className="grid gap-6 md:grid-cols-[1fr_300px]">
          <main>{children}</main>
          <aside>
            <BlogSidebar />
          </aside>
        </div>
      </main>
    </div>
  )
} 