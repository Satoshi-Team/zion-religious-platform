import { LucideProps } from "lucide-react"

export function ChristRedeemerIcon({ className, ...props }: LucideProps) {
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
      {/* Base/Pedestal */}
      <path d="M12 22V19" />
      <path d="M10 22h4" />
      
      {/* Robe */}
      <path d="M8 19c0-2 4-3 4-3s4 1 4 3" />
      <path d="M12 16v-4" />
      
      {/* Arms */}
      <path d="M12 14h-6" />
      <path d="M12 14h6" />
      <path d="M6 14c0-1 1-2 1-2" />
      <path d="M18 14c0-1 -1-2 -1-2" />
      
      {/* Head and Halo */}
      <circle cx="12" cy="8" r="2" />
      <circle cx="12" cy="8" r="4" strokeDasharray="1 2" />
    </svg>
  )
} 