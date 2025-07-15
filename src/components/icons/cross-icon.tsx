import { LucideProps } from "lucide-react"

export function CrossIcon({ className, ...props }: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Vertical line */}
      <path d="M12 4v16" />
      {/* Horizontal line */}
      <path d="M6 10h12" />
    </svg>
  )
} 