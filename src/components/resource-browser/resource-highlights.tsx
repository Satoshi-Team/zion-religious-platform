'use client'

import { Card } from "@/components/ui/card"

export function ResourceHighlights() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">Featured Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="p-4">
          <h3 className="font-semibold">Bible Gateway</h3>
          <p className="text-sm text-gray-600">Multiple translations of the Bible with study resources</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Blue Letter Bible</h3>
          <p className="text-sm text-gray-600">In-depth Bible study tools and commentaries</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold">Christian Classics</h3>
          <p className="text-sm text-gray-600">Historical Christian texts and resources</p>
        </Card>
      </div>
    </section>
  )
} 