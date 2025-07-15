export function NewsStream() {
  return (
    <div className="rounded-lg border bg-card p-6">
      <h3 className="mb-4 text-lg font-semibold">Latest News</h3>
      <ul className="space-y-4">
        <li>
          <a href="#" className="text-sm hover:underline">
            Local Church Outreach Program Launches
          </a>
        </li>
        <li>
          <a href="#" className="text-sm hover:underline">
            Community Prayer Event This Weekend
          </a>
        </li>
        <li>
          <a href="#" className="text-sm hover:underline">
            New Christian Music Releases
          </a>
        </li>
        <li>
          <a href="/news" className="text-sm font-medium text-primary hover:underline">
            More News...
          </a>
        </li>
      </ul>
    </div>
  )
} 