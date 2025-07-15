export function EventsStream() {
  return (
    <div className="rounded-lg border bg-card p-6">
      <h3 className="mb-4 text-lg font-semibold">Family Fun Calendar</h3>
      <ul className="space-y-4">
        <li>
          <a href="#" className="text-sm hover:underline">
            Community Christmas Event
          </a>
        </li>
        <li>
          <a href="#" className="text-sm hover:underline">
            Holiday Concert Series
          </a>
        </li>
        <li>
          <a href="#" className="text-sm hover:underline">
            Youth Ministry Workshop
          </a>
        </li>
        <li>
          <a href="/events" className="text-sm font-medium text-primary hover:underline">
            More Local Events...
          </a>
        </li>
      </ul>
    </div>
  )
} 