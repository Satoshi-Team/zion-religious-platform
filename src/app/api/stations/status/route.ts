import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({ 
    status: "operational",
    activeStations: 100,
    lastUpdated: new Date().toISOString()
  })
} 