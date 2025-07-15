"use client"

import React from 'react'
import { useState } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"
import { toast } from "sonner"

export function ContactForm() {
  const t = useTranslations("contact.form")
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "cf0aae41-743d-4e91-af78-8b65ab752f12",
          ...data,
        }),
      })

      const result = await response.json()

      if (result.success) {
        toast.success(t("successMessage"))
        event.currentTarget.reset()
      } else {
        toast.error(t("errorMessage"))
      }
    } catch (error) {
      toast.error(t("errorMessage"))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">{t("name.label")}</Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          placeholder={t("name.placeholder")}
          disabled={isLoading}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">{t("email.label")}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder={t("email.placeholder")}
          disabled={isLoading}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">{t("subject.label")}</Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder={t("subject.placeholder")}
          disabled={isLoading}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t("message.label")}</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder={t("message.placeholder")}
          disabled={isLoading}
          className="min-h-[150px]"
        />
      </div>

      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? (
          <span className="flex items-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            {t("sending")}
          </span>
        ) : (
          <span className="flex items-center">
            {t("submit")}
            <Send className="ml-2 h-4 w-4" />
          </span>
        )}
      </Button>
    </form>
  )
} 