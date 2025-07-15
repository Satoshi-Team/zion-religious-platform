import { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://zion.fm'),
  title: "Zion.FM - Your Faith, Your Music, Your Station",
  description: "Listen to free religious radio stations, access meditation guides, and explore religious resources"
} 