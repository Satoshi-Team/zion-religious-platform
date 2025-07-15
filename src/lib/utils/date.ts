/**
 * Formats a date string or Date object into a human-readable format
 * @param date The date to format (string or Date object)
 * @returns Formatted date string
 */
export function formatDate(date: string | Date): string {
  const dateObj = typeof date === "string" ? new Date(date) : date
  
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(dateObj)
}

/**
 * Formats a date string or Date object into a relative time format (e.g., "2 days ago")
 * @param date The date to format (string or Date object)
 * @returns Relative time string
 */
export function formatRelativeDate(date: string | Date): string {
  const dateObj = typeof date === "string" ? new Date(date) : date
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" })
  
  const diffInMs = dateObj.getTime() - new Date().getTime()
  const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24))
  
  if (Math.abs(diffInDays) < 1) return "today"
  return rtf.format(diffInDays, "day")
}

/**
 * Checks if a date is in the past
 * @param date The date to check (string or Date object)
 * @returns boolean indicating if the date is in the past
 */
export function isPastDate(date: string | Date): boolean {
  const dateObj = typeof date === "string" ? new Date(date) : date
  return dateObj.getTime() < new Date().getTime()
} 