import { Metadata } from "next"
import { Shell } from "@/components/shells/shell"
import { RadioGrid } from "@/components/radio-grid"
import { verifiedStations } from "@/config/radio-stations"

export const metadata: Metadata = {
  title: "Listen - Religious Radio Streams",
  description: "Listen to verified religious radio stations from around the world",
}

export default function ListenPage() {
  return (
    <Shell>
      <div className="container flex flex-col gap-8 py-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Religious Radio Stations</h1>
          <p className="text-muted-foreground">
            Listen to verified religious radio stations from around the world
          </p>
        </div>
        <RadioGrid stations={verifiedStations} />
      </div>
    </Shell>
  )
} 