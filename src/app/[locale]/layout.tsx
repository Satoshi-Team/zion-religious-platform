import { Inter } from "next/font/google"
import { MobileSidebar } from "@/components/mobile-sidebar"
import { cn } from "@/lib/utils"
import "@/styles/globals.css"
import { type Locale } from "@/config/i18n"
import ClientLayout from './client-layout'

const inter = Inter({ subsets: ["latin"] })

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ru" }]
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  console.log("[LocaleLayout] Rendering with locale:", locale)
  return (
    <ClientLayout>
      {children}
    </ClientLayout>
  )
} 