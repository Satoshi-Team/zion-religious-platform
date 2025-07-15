import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({ status: "healthy" })
}

export async function HEAD() {
  return NextResponse.json({ status: "healthy" })
} 