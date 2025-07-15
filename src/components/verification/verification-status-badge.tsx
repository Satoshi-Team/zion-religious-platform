'use client'

import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { CheckCircle, AlertCircle, Clock } from "lucide-react"
import { VerificationStatus } from "@/lib/verification/types"

// Rename the local interface to avoid conflict
interface VerificationStatusProps {
  status: 'verified' | 'pending' | 'failed'
  lastChecked?: Date
  nextCheck?: Date
  notes?: string
}

interface VerificationStatusBadgeProps {
  status: VerificationStatusProps
  showDetails?: boolean
}

export function VerificationStatusBadge({ status, showDetails = false }: VerificationStatusBadgeProps) {
  const variants = {
    verified: {
      icon: CheckCircle,
      className: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
      label: "Verified"
    },
    pending: {
      icon: Clock,
      className: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
      label: "Pending"
    },
    failed: {
      icon: AlertCircle,
      className: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
      label: "Failed"
    }
  }

  const { icon: Icon, className, label } = variants[status.status]

  return (
    <Tooltip>
      <TooltipTrigger>
        <Badge variant="outline" className={`${className} flex items-center gap-1`}>
          <Icon className="h-3 w-3" />
          <span>{label}</span>
        </Badge>
      </TooltipTrigger>
      {showDetails && (
        <TooltipContent>
          <p>Last checked: {status.lastChecked ? new Date(status.lastChecked).toLocaleDateString() : 'Never'}</p>
          <p>Next check: {status.nextCheck ? new Date(status.nextCheck).toLocaleDateString() : 'Not scheduled'}</p>
          {status.notes && <p>{status.notes}</p>}
        </TooltipContent>
      )}
    </Tooltip>
  )
} 