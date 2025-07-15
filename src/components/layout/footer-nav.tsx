import React from 'react'
import Link from "next/link"

const footerSections = [
  {
    title: "Sacred Texts",
    items: [
      { title: "Bible Versions", href: "/sacred-texts/bible" },
      { title: "Quran Studies", href: "/sacred-texts/quran" },
      { title: "Torah Insights", href: "/sacred-texts/torah" },
      { title: "Buddhist Scriptures", href: "/sacred-texts/buddhist" }
    ]
  },
  {
    title: "Meditation",
    items: [
      { title: "Christian Meditation", href: "/meditation/christian" },
      { title: "Buddhist Meditation", href: "/meditation/buddhist" },
      { title: "Islamic Meditation", href: "/meditation/islamic" },
      { title: "Hindu Meditation", href: "/meditation/hindu" },
      { title: "Modern Practices", href: "/meditation/modern" },
      { title: "All Meditation", href: "/meditation" }
    ]
  },
  {
    title: "Study",
    items: [
      { title: "Study Guides", href: "/study/guides" },
      { title: "Commentaries", href: "/study/commentaries" },
      { title: "Historical Context", href: "/study/history" },
      { title: "Comparative Studies", href: "/study/comparative" },
      { title: "Academic Resources", href: "/study/academic" }
    ]
  },
  {
    title: "Resources",
    items: [
      { title: "Religious History", href: "/resources/history" },
      { title: "Sacred Places", href: "/resources/places" },
      { title: "Religious Art", href: "/resources/art" },
      { title: "Religious Music", href: "/resources/music" },
      { title: "Religious Calendar", href: "/resources/calendar" }
    ]
  }
] 