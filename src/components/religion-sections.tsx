// Server component - removed 'use client' to allow receiving translation function

import React from 'react'
import { ReligionSection } from "./religion-section"

interface ReligionSectionsProps {
  t: (key: string) => string
}

function safeT(t: (key: string) => string, path: string, fallback: string = ''): string {
  if (!t || typeof t !== 'function') return fallback
  
  try {
    const result = t(path)
    return result !== path ? result : fallback
  } catch (error) {
    console.warn(`Translation error for key "${path}":`, error)
    return fallback
  }
}

const religionIcons = {
  christianity: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"/></svg>
  ),
  islam: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
  ),
  buddhism: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/><path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"/></svg>
  ),
  hinduism: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/><path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"/></svg>
  ),
  ethics: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
  ),
  philosophy: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
  ),
  history: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 8v4l3 3"/><path d="M3.05 11a9 9 0 1 1 .5 4m-.5-4v4h4"/></svg>
  ),
  comparative: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
}

export function ReligionSections({ t }: ReligionSectionsProps) {
  return (
    <div className="space-y-12">
      <ReligionSection
        title={safeT(t, 'home.religions.christianity.title', 'Christianity')}
        icon={religionIcons.christianity}
        description={safeT(t, 'home.religions.christianity.description', 'Description for Christianity')}
        links={[
          { label: safeT(t, 'religions.christianity.links.0', 'Link 1'), href: "/christianity/overview/" },
          { label: safeT(t, 'religions.christianity.links.1', 'Link 2'), href: "/christianity/theology/" },
          { label: safeT(t, 'religions.christianity.links.2', 'Link 3'), href: "/christianity/christology/" },
          { label: safeT(t, 'religions.christianity.links.3', 'Link 4'), href: "/christianity/theology/soteriology/" },
          { label: safeT(t, 'religions.christianity.links.4', 'Link 5'), href: "/christianity/theology/ecclesiology/" },
          { label: safeT(t, 'religions.christianity.links.5', 'Link 6'), href: "/christianity/theology/pneumatology/" },
          { label: safeT(t, 'religions.christianity.links.6', 'Link 7'), href: "/christianity/theology/eschatology/" },
          { label: safeT(t, 'religions.christianity.links.7', 'Link 8'), href: "/christianity/history/" },
          { label: safeT(t, 'religions.christianity.links.8', 'Link 9'), href: "/religion/christianity/history/early-church/" },
          { label: safeT(t, 'religions.christianity.links.9', 'Link 10'), href: "/religion/christianity/history/medieval/" },
          { label: safeT(t, 'religions.christianity.links.10', 'Link 11'), href: "/religion/christianity/history/reformation/" },
          { label: safeT(t, 'religions.christianity.links.11', 'Link 12'), href: "/religion/christianity/history/modern/" },
          { label: safeT(t, 'religions.christianity.links.12', 'Link 13'), href: "/religion/christianity/impact/" },
          { label: safeT(t, 'religions.christianity.links.13', 'Link 14'), href: "/religion/christianity/impact/art/" },
          { label: safeT(t, 'religions.christianity.links.14', 'Link 15'), href: "/religion/christianity/impact/literature/" },
          { label: safeT(t, 'religions.christianity.links.15', 'Link 16'), href: "/religion/christianity/impact/music/" },
          { label: safeT(t, 'religions.christianity.links.16', 'Link 17'), href: "/religion/christianity/impact/science/" },
          { label: safeT(t, 'religions.christianity.links.17', 'Link 18'), href: "/religion/christianity/impact/philosophy/" },
          { label: safeT(t, 'religions.christianity.links.18', 'Link 19'), href: "/blog?category=Christianity" },
        ]}
        featuredPosts={[
          { title: safeT(t, 'religions.christianity.featuredPosts.0.title', 'Featured Post 1'), slug: "faiths-in-dialogue-christianity-islam", description: safeT(t, 'religions.christianity.featuredPosts.0.description', 'Description for Featured Post 1') },
          { title: safeT(t, 'religions.christianity.featuredPosts.1.title', 'Featured Post 2'), slug: "what-is-the-gospel", description: safeT(t, 'religions.christianity.featuredPosts.1.description', 'Description for Featured Post 2') },
          { title: safeT(t, 'religions.christianity.featuredPosts.2.title', 'Featured Post 3'), slug: "who-is-jesus-christ", description: safeT(t, 'religions.christianity.featuredPosts.2.description', 'Description for Featured Post 3') },
          { title: safeT(t, 'religions.christianity.featuredPosts.3.title', 'Featured Post 4'), slug: "early-church-formation-growth", description: safeT(t, 'religions.christianity.featuredPosts.3.description', 'Description for Featured Post 4') },
          { title: safeT(t, 'religions.christianity.featuredPosts.4.title', 'Featured Post 5'), slug: "christian-ethics-modern-society", description: safeT(t, 'religions.christianity.featuredPosts.4.description', 'Description for Featured Post 5') },
        ]}
      />

      <ReligionSection
        title={safeT(t, 'home.religions.islam.title', 'Islam')}
        icon={religionIcons.islam}
        description={safeT(t, 'home.religions.islam.description', 'Description for Islam')}
        links={[
          { label: safeT(t, 'religions.islam.links.0', 'Link 0'), href: "/religion/islam/" },
          { label: safeT(t, 'religions.islam.links.1', 'Link 1'), href: "/religion/islam/history/" },
          { label: safeT(t, 'religions.islam.links.2', 'Link 2'), href: "/religion/islam/history/early-islam/" },
          { label: safeT(t, 'religions.islam.links.3', 'Link 3'), href: "/religion/islam/history/medieval/" },
          { label: safeT(t, 'religions.islam.links.4', 'Link 4'), href: "/religion/islam/history/modern/" },
          { label: safeT(t, 'religions.islam.links.5', 'Link 5'), href: "/religion/islam/impact/" },
          { label: safeT(t, 'religions.islam.links.6', 'Link 6'), href: "/religion/islam/impact/art/" },
          { label: safeT(t, 'religions.islam.links.7', 'Link 7'), href: "/religion/islam/impact/literature/" },
          { label: safeT(t, 'religions.islam.links.8', 'Link 8'), href: "/religion/islam/impact/music/" },
          { label: safeT(t, 'religions.islam.links.9', 'Link 9'), href: "/religion/islam/impact/science/" },
          { label: safeT(t, 'religions.islam.links.10', 'Link 10'), href: "/religion/islam/impact/philosophy/" },
          { label: safeT(t, 'religions.islam.links.11', 'Link 11'), href: "/blog?category=Islam" },
        ]}
        featuredPosts={[
          { title: safeT(t, 'religions.islam.featuredPosts.0.title', 'Featured Post 1'), slug: "islam-and-christianity", description: safeT(t, 'religions.islam.featuredPosts.0.description', 'Description for Featured Post 1') },
          { title: safeT(t, 'religions.islam.featuredPosts.1.title', 'Featured Post 2'), slug: "the-quran", description: safeT(t, 'religions.islam.featuredPosts.1.description', 'Description for Featured Post 2') },
          { title: safeT(t, 'religions.islam.featuredPosts.2.title', 'Featured Post 3'), slug: "islamic-history", description: safeT(t, 'religions.islam.featuredPosts.2.description', 'Description for Featured Post 3') },
          { title: safeT(t, 'religions.islam.featuredPosts.3.title', 'Featured Post 4'), slug: "islamic-art", description: safeT(t, 'religions.islam.featuredPosts.3.description', 'Description for Featured Post 4') },
          { title: safeT(t, 'religions.islam.featuredPosts.4.title', 'Featured Post 5'), slug: "islamic-literature", description: safeT(t, 'religions.islam.featuredPosts.4.description', 'Description for Featured Post 5') },
        ]}
      />

      <ReligionSection
        title={safeT(t, 'home.religions.buddhism.title', 'Buddhism')}
        icon={religionIcons.buddhism}
        description={safeT(t, 'home.religions.buddhism.description', 'Description for Buddhism')}
        links={[
          { label: safeT(t, 'religions.buddhism.links.0', 'Link 0'), href: "/religion/buddhism/" },
          { label: safeT(t, 'religions.buddhism.links.1', 'Link 1'), href: "/religion/buddhism/history/" },
          { label: safeT(t, 'religions.buddhism.links.2', 'Link 2'), href: "/religion/buddhism/history/early-buddhism/" },
          { label: safeT(t, 'religions.buddhism.links.3', 'Link 3'), href: "/religion/buddhism/history/medieval/" },
          { label: safeT(t, 'religions.buddhism.links.4', 'Link 4'), href: "/religion/buddhism/history/modern/" },
          { label: safeT(t, 'religions.buddhism.links.5', 'Link 5'), href: "/religion/buddhism/impact/" },
          { label: safeT(t, 'religions.buddhism.links.6', 'Link 6'), href: "/religion/buddhism/impact/art/" },
          { label: safeT(t, 'religions.buddhism.links.7', 'Link 7'), href: "/religion/buddhism/impact/literature/" },
          { label: safeT(t, 'religions.buddhism.links.8', 'Link 8'), href: "/religion/buddhism/impact/music/" },
          { label: safeT(t, 'religions.buddhism.links.9', 'Link 9'), href: "/religion/buddhism/impact/science/" },
          { label: safeT(t, 'religions.buddhism.links.10', 'Link 10'), href: "/religion/buddhism/impact/philosophy/" },
          { label: safeT(t, 'religions.buddhism.links.11', 'Link 11'), href: "/blog?category=Buddhism" },
        ]}
        featuredPosts={[
          { title: safeT(t, 'religions.buddhism.featuredPosts.0.title', 'Featured Post 1'), slug: "buddhism-and-christianity", description: safeT(t, 'religions.buddhism.featuredPosts.0.description', 'Description for Featured Post 1') },
          { title: safeT(t, 'religions.buddhism.featuredPosts.1.title', 'Featured Post 2'), slug: "the-four-noble-truths", description: safeT(t, 'religions.buddhism.featuredPosts.1.description', 'Description for Featured Post 2') },
          { title: safeT(t, 'religions.buddhism.featuredPosts.2.title', 'Featured Post 3'), slug: "early-buddhism", description: safeT(t, 'religions.buddhism.featuredPosts.2.description', 'Description for Featured Post 3') },
          { title: safeT(t, 'religions.buddhism.featuredPosts.3.title', 'Featured Post 4'), slug: "medieval-buddhism", description: safeT(t, 'religions.buddhism.featuredPosts.3.description', 'Description for Featured Post 4') },
          { title: safeT(t, 'religions.buddhism.featuredPosts.4.title', 'Featured Post 5'), slug: "modern-buddhism", description: safeT(t, 'religions.buddhism.featuredPosts.4.description', 'Description for Featured Post 5') },
        ]}
      />

      <ReligionSection
        title={safeT(t, 'home.religions.hinduism.title', 'Hinduism')}
        icon={religionIcons.hinduism}
        description={safeT(t, 'home.religions.hinduism.description', 'Description for Hinduism')}
        links={[
          { label: safeT(t, 'religions.hinduism.links.0', 'Link 0'), href: "/religion/hinduism/" },
          { label: safeT(t, 'religions.hinduism.links.1', 'Link 1'), href: "/religion/hinduism/history/" },
          { label: safeT(t, 'religions.hinduism.links.2', 'Link 2'), href: "/religion/hinduism/history/early-hinduism/" },
          { label: safeT(t, 'religions.hinduism.links.3', 'Link 3'), href: "/religion/hinduism/history/medieval/" },
          { label: safeT(t, 'religions.hinduism.links.4', 'Link 4'), href: "/religion/hinduism/history/modern/" },
          { label: safeT(t, 'religions.hinduism.links.5', 'Link 5'), href: "/religion/hinduism/impact/" },
          { label: safeT(t, 'religions.hinduism.links.6', 'Link 6'), href: "/religion/hinduism/impact/art/" },
          { label: safeT(t, 'religions.hinduism.links.7', 'Link 7'), href: "/religion/hinduism/impact/literature/" },
          { label: safeT(t, 'religions.hinduism.links.8', 'Link 8'), href: "/religion/hinduism/impact/music/" },
          { label: safeT(t, 'religions.hinduism.links.9', 'Link 9'), href: "/religion/hinduism/impact/science/" },
          { label: safeT(t, 'religions.hinduism.links.10', 'Link 10'), href: "/religion/hinduism/impact/philosophy/" },
          { label: safeT(t, 'religions.hinduism.links.11', 'Link 11'), href: "/blog?category=Hinduism" },
        ]}
        featuredPosts={[
          { title: safeT(t, 'religions.hinduism.featuredPosts.0.title', 'Featured Post 1'), slug: "hinduism-and-christianity", description: safeT(t, 'religions.hinduism.featuredPosts.0.description', 'Description for Featured Post 1') },
          { title: safeT(t, 'religions.hinduism.featuredPosts.1.title', 'Featured Post 2'), slug: "the-trimurti", description: safeT(t, 'religions.hinduism.featuredPosts.1.description', 'Description for Featured Post 2') },
          { title: safeT(t, 'religions.hinduism.featuredPosts.2.title', 'Featured Post 3'), slug: "early-hinduism", description: safeT(t, 'religions.hinduism.featuredPosts.2.description', 'Description for Featured Post 3') },
          { title: safeT(t, 'religions.hinduism.featuredPosts.3.title', 'Featured Post 4'), slug: "medieval-hinduism", description: safeT(t, 'religions.hinduism.featuredPosts.3.description', 'Description for Featured Post 4') },
          { title: safeT(t, 'religions.hinduism.featuredPosts.4.title', 'Featured Post 5'), slug: "modern-hinduism", description: safeT(t, 'religions.hinduism.featuredPosts.4.description', 'Description for Featured Post 5') },
        ]}
      />

      <ReligionSection
        title={safeT(t, 'religions.confucianism.title', 'Confucianism')}
        icon={<span className="text-2xl">📜</span>}
        description={safeT(t, 'religions.confucianism.description', 'Description for Confucianism')}
        links={[
          { label: safeT(t, 'religions.confucianism.links.0', 'Link 0'), href: "/religion/confucianism/" },
          { label: safeT(t, 'religions.confucianism.links.1', 'Link 1'), href: "/religion/confucianism/history/" },
          { label: safeT(t, 'religions.confucianism.links.2', 'Link 2'), href: "/religion/confucianism/history/early-confucianism/" },
          { label: safeT(t, 'religions.confucianism.links.3', 'Link 3'), href: "/religion/confucianism/history/medieval/" },
          { label: safeT(t, 'religions.confucianism.links.4', 'Link 4'), href: "/religion/confucianism/history/modern/" },
          { label: safeT(t, 'religions.confucianism.links.5', 'Link 5'), href: "/religion/confucianism/impact/" },
          { label: safeT(t, 'religions.confucianism.links.6', 'Link 6'), href: "/religion/confucianism/impact/art/" },
          { label: safeT(t, 'religions.confucianism.links.7', 'Link 7'), href: "/religion/confucianism/impact/literature/" },
          { label: safeT(t, 'religions.confucianism.links.8', 'Link 8'), href: "/religion/confucianism/impact/music/" },
          { label: safeT(t, 'religions.confucianism.links.9', 'Link 9'), href: "/religion/confucianism/impact/science/" },
          { label: safeT(t, 'religions.confucianism.links.10', 'Link 10'), href: "/religion/confucianism/impact/philosophy/" },
          { label: safeT(t, 'religions.confucianism.links.11', 'Link 11'), href: "/blog?category=Confucianism" },
        ]}
        featuredPosts={[
          { title: safeT(t, 'religions.confucianism.featuredPosts.0.title', 'Featured Post 1'), slug: "confucianism-and-christianity", description: safeT(t, 'religions.confucianism.featuredPosts.0.description', 'Description for Featured Post 1') },
          { title: safeT(t, 'religions.confucianism.featuredPosts.1.title', 'Featured Post 2'), slug: "the-five-confucian-virtues", description: safeT(t, 'religions.confucianism.featuredPosts.1.description', 'Description for Featured Post 2') },
          { title: safeT(t, 'religions.confucianism.featuredPosts.2.title', 'Featured Post 3'), slug: "early-confucianism", description: safeT(t, 'religions.confucianism.featuredPosts.2.description', 'Description for Featured Post 3') },
          { title: safeT(t, 'religions.confucianism.featuredPosts.3.title', 'Featured Post 4'), slug: "medieval-confucianism", description: safeT(t, 'religions.confucianism.featuredPosts.3.description', 'Description for Featured Post 4') },
          { title: safeT(t, 'religions.confucianism.featuredPosts.4.title', 'Featured Post 5'), slug: "modern-confucianism", description: safeT(t, 'religions.confucianism.featuredPosts.4.description', 'Description for Featured Post 5') },
        ]}
      />

      <ReligionSection
        title={safeT(t, 'religions.jainism.title', 'Jainism')}
        icon={<span className="text-2xl">🔱</span>}
        description={safeT(t, 'religions.jainism.description', 'Description for Jainism')}
        links={[
          { label: safeT(t, 'religions.jainism.links.0', 'Link 0'), href: "/religion/jainism/" },
          { label: safeT(t, 'religions.jainism.links.1', 'Link 1'), href: "/religion/jainism/history/" },
          { label: safeT(t, 'religions.jainism.links.2', 'Link 2'), href: "/religion/jainism/history/early-jainism/" },
          { label: safeT(t, 'religions.jainism.links.3', 'Link 3'), href: "/religion/jainism/history/medieval/" },
          { label: safeT(t, 'religions.jainism.links.4', 'Link 4'), href: "/religion/jainism/history/modern/" },
          { label: safeT(t, 'religions.jainism.links.5', 'Link 5'), href: "/religion/jainism/impact/" },
          { label: safeT(t, 'religions.jainism.links.6', 'Link 6'), href: "/religion/jainism/impact/art/" },
          { label: safeT(t, 'religions.jainism.links.7', 'Link 7'), href: "/religion/jainism/impact/literature/" },
          { label: safeT(t, 'religions.jainism.links.8', 'Link 8'), href: "/religion/jainism/impact/music/" },
          { label: safeT(t, 'religions.jainism.links.9', 'Link 9'), href: "/religion/jainism/impact/science/" },
          { label: safeT(t, 'religions.jainism.links.10', 'Link 10'), href: "/religion/jainism/impact/philosophy/" },
          { label: safeT(t, 'religions.jainism.links.11', 'Link 11'), href: "/blog?category=Jainism" },
        ]}
        featuredPosts={[
          { title: safeT(t, 'religions.jainism.featuredPosts.0.title', 'Featured Post 1'), slug: "jainism-and-christianity", description: safeT(t, 'religions.jainism.featuredPosts.0.description', 'Description for Featured Post 1') },
          { title: safeT(t, 'religions.jainism.featuredPosts.1.title', 'Featured Post 2'), slug: "the-eight-fold-path", description: safeT(t, 'religions.jainism.featuredPosts.1.description', 'Description for Featured Post 2') },
          { title: safeT(t, 'religions.jainism.featuredPosts.2.title', 'Featured Post 3'), slug: "early-jainism", description: safeT(t, 'religions.jainism.featuredPosts.2.description', 'Description for Featured Post 3') },
          { title: safeT(t, 'religions.jainism.featuredPosts.3.title', 'Featured Post 4'), slug: "medieval-jainism", description: safeT(t, 'religions.jainism.featuredPosts.3.description', 'Description for Featured Post 4') },
          { title: safeT(t, 'religions.jainism.featuredPosts.4.title', 'Featured Post 5'), slug: "modern-jainism", description: safeT(t, 'religions.jainism.featuredPosts.4.description', 'Description for Featured Post 5') },
        ]}
      />

      <ReligionSection
        title={safeT(t, 'religions.judaism.title', 'Judaism')}
        icon={<span className="text-2xl">✡️</span>}
        description={safeT(t, 'religions.judaism.description', 'Description for Judaism')}
        links={[
          { label: safeT(t, 'religions.judaism.links.0', 'Link 0'), href: "/religion/judaism/" },
          { label: safeT(t, 'religions.judaism.links.1', 'Link 1'), href: "/religion/judaism/history/" },
          { label: safeT(t, 'religions.judaism.links.2', 'Link 2'), href: "/religion/judaism/history/early-judaism/" },
          { label: safeT(t, 'religions.judaism.links.3', 'Link 3'), href: "/religion/judaism/history/medieval/" },
          { label: safeT(t, 'religions.judaism.links.4', 'Link 4'), href: "/religion/judaism/history/modern/" },
          { label: safeT(t, 'religions.judaism.links.5', 'Link 5'), href: "/religion/judaism/impact/" },
          { label: safeT(t, 'religions.judaism.links.6', 'Link 6'), href: "/religion/judaism/impact/art/" },
          { label: safeT(t, 'religions.judaism.links.7', 'Link 7'), href: "/religion/judaism/impact/literature/" },
          { label: safeT(t, 'religions.judaism.links.8', 'Link 8'), href: "/religion/judaism/impact/music/" },
          { label: safeT(t, 'religions.judaism.links.9', 'Link 9'), href: "/religion/judaism/impact/science/" },
          { label: safeT(t, 'religions.judaism.links.10', 'Link 10'), href: "/religion/judaism/impact/philosophy/" },
          { label: safeT(t, 'religions.judaism.links.11', 'Link 11'), href: "/blog?category=Judaism" },
        ]}
        featuredPosts={[
          { title: safeT(t, 'religions.judaism.featuredPosts.0.title', 'Featured Post 1'), slug: "judaism-and-christianity", description: safeT(t, 'religions.judaism.featuredPosts.0.description', 'Description for Featured Post 1') },
          { title: safeT(t, 'religions.judaism.featuredPosts.1.title', 'Featured Post 2'), slug: "the-torah", description: safeT(t, 'religions.judaism.featuredPosts.1.description', 'Description for Featured Post 2') },
          { title: safeT(t, 'religions.judaism.featuredPosts.2.title', 'Featured Post 3'), slug: "early-judaism", description: safeT(t, 'religions.judaism.featuredPosts.2.description', 'Description for Featured Post 3') },
          { title: safeT(t, 'religions.judaism.featuredPosts.3.title', 'Featured Post 4'), slug: "medieval-judaism", description: safeT(t, 'religions.judaism.featuredPosts.3.description', 'Description for Featured Post 4') },
          { title: safeT(t, 'religions.judaism.featuredPosts.4.title', 'Featured Post 5'), slug: "modern-judaism", description: safeT(t, 'religions.judaism.featuredPosts.4.description', 'Description for Featured Post 5') },
        ]}
      />

      <ReligionSection
        title={safeT(t, 'religions.sikhism.title', 'Sikhism')}
        icon={<span className="text-2xl">🪯</span>}
        description={safeT(t, 'religions.sikhism.description', 'Description for Sikhism')}
        links={[
          { label: safeT(t, 'religions.sikhism.links.0', 'Link 0'), href: "/religion/sikhism/" },
          { label: safeT(t, 'religions.sikhism.links.1', 'Link 1'), href: "/religion/sikhism/history/" },
          { label: safeT(t, 'religions.sikhism.links.2', 'Link 2'), href: "/religion/sikhism/history/early-sikhism/" },
          { label: safeT(t, 'religions.sikhism.links.3', 'Link 3'), href: "/religion/sikhism/history/medieval/" },
          { label: safeT(t, 'religions.sikhism.links.4', 'Link 4'), href: "/religion/sikhism/history/modern/" },
          { label: safeT(t, 'religions.sikhism.links.5', 'Link 5'), href: "/religion/sikhism/impact/" },
          { label: safeT(t, 'religions.sikhism.links.6', 'Link 6'), href: "/religion/sikhism/impact/art/" },
          { label: safeT(t, 'religions.sikhism.links.7', 'Link 7'), href: "/religion/sikhism/impact/literature/" },
          { label: safeT(t, 'religions.sikhism.links.8', 'Link 8'), href: "/religion/sikhism/impact/music/" },
          { label: safeT(t, 'religions.sikhism.links.9', 'Link 9'), href: "/religion/sikhism/impact/science/" },
          { label: safeT(t, 'religions.sikhism.links.10', 'Link 10'), href: "/religion/sikhism/impact/philosophy/" },
          { label: safeT(t, 'religions.sikhism.links.11', 'Link 11'), href: "/blog?category=Sikhism" },
        ]}
        featuredPosts={[
          { title: safeT(t, 'religions.sikhism.featuredPosts.0.title', 'Featured Post 1'), slug: "sikhism-and-christianity", description: safeT(t, 'religions.sikhism.featuredPosts.0.description', 'Description for Featured Post 1') },
          { title: safeT(t, 'religions.sikhism.featuredPosts.1.title', 'Featured Post 2'), slug: "the-five-ks", description: safeT(t, 'religions.sikhism.featuredPosts.1.description', 'Description for Featured Post 2') },
          { title: safeT(t, 'religions.sikhism.featuredPosts.2.title', 'Featured Post 3'), slug: "early-sikhism", description: safeT(t, 'religions.sikhism.featuredPosts.2.description', 'Description for Featured Post 3') },
          { title: safeT(t, 'religions.sikhism.featuredPosts.3.title', 'Featured Post 4'), slug: "medieval-sikhism", description: safeT(t, 'religions.sikhism.featuredPosts.3.description', 'Description for Featured Post 4') },
          { title: safeT(t, 'religions.sikhism.featuredPosts.4.title', 'Featured Post 5'), slug: "modern-sikhism", description: safeT(t, 'religions.sikhism.featuredPosts.4.description', 'Description for Featured Post 5') },
        ]}
      />

      <ReligionSection
        title={safeT(t, 'religions.shinto.title', 'Shinto')}
        icon={<span className="text-2xl">⛩️</span>}
        description={safeT(t, 'religions.shinto.description', 'Description for Shinto')}
        links={[
          { label: safeT(t, 'religions.shinto.links.0', 'Link 0'), href: "/religion/shinto/" },
          { label: safeT(t, 'religions.shinto.links.1', 'Link 1'), href: "/religion/shinto/history/" },
          { label: safeT(t, 'religions.shinto.links.2', 'Link 2'), href: "/religion/shinto/history/early-shinto/" },
          { label: safeT(t, 'religions.shinto.links.3', 'Link 3'), href: "/religion/shinto/history/medieval/" },
          { label: safeT(t, 'religions.shinto.links.4', 'Link 4'), href: "/religion/shinto/history/modern/" },
          { label: safeT(t, 'religions.shinto.links.5', 'Link 5'), href: "/religion/shinto/impact/" },
          { label: safeT(t, 'religions.shinto.links.6', 'Link 6'), href: "/religion/shinto/impact/art/" },
          { label: safeT(t, 'religions.shinto.links.7', 'Link 7'), href: "/religion/shinto/impact/literature/" },
          { label: safeT(t, 'religions.shinto.links.8', 'Link 8'), href: "/religion/shinto/impact/music/" },
          { label: safeT(t, 'religions.shinto.links.9', 'Link 9'), href: "/religion/shinto/impact/science/" },
          { label: safeT(t, 'religions.shinto.links.10', 'Link 10'), href: "/religion/shinto/impact/philosophy/" },
          { label: safeT(t, 'religions.shinto.links.11', 'Link 11'), href: "/blog?category=Shinto" },
        ]}
        featuredPosts={[
          { title: safeT(t, 'religions.shinto.featuredPosts.0.title', 'Featured Post 1'), slug: "shinto-and-christianity", description: safeT(t, 'religions.shinto.featuredPosts.0.description', 'Description for Featured Post 1') },
          { title: safeT(t, 'religions.shinto.featuredPosts.1.title', 'Featured Post 2'), slug: "the-three-principles", description: safeT(t, 'religions.shinto.featuredPosts.1.description', 'Description for Featured Post 2') },
          { title: safeT(t, 'religions.shinto.featuredPosts.2.title', 'Featured Post 3'), slug: "early-shinto", description: safeT(t, 'religions.shinto.featuredPosts.2.description', 'Description for Featured Post 3') },
          { title: safeT(t, 'religions.shinto.featuredPosts.3.title', 'Featured Post 4'), slug: "medieval-shinto", description: safeT(t, 'religions.shinto.featuredPosts.3.description', 'Description for Featured Post 4') },
          { title: safeT(t, 'religions.shinto.featuredPosts.4.title', 'Featured Post 5'), slug: "modern-shinto", description: safeT(t, 'religions.shinto.featuredPosts.4.description', 'Description for Featured Post 5') },
        ]}
      />

      <ReligionSection
        title={safeT(t, 'religions.taoism.title', 'Taoism')}
        icon={<span className="text-2xl">☯️</span>}
        description={safeT(t, 'religions.taoism.description', 'Description for Taoism')}
        links={[
          { label: safeT(t, 'religions.taoism.links.0', 'Link 0'), href: "/religion/taoism/" },
          { label: safeT(t, 'religions.taoism.links.1', 'Link 1'), href: "/religion/taoism/history/" },
          { label: safeT(t, 'religions.taoism.links.2', 'Link 2'), href: "/religion/taoism/history/early-taoism/" },
          { label: safeT(t, 'religions.taoism.links.3', 'Link 3'), href: "/religion/taoism/history/medieval/" },
          { label: safeT(t, 'religions.taoism.links.4', 'Link 4'), href: "/religion/taoism/history/modern/" },
          { label: safeT(t, 'religions.taoism.links.5', 'Link 5'), href: "/religion/taoism/impact/" },
          { label: safeT(t, 'religions.taoism.links.6', 'Link 6'), href: "/religion/taoism/impact/art/" },
          { label: safeT(t, 'religions.taoism.links.7', 'Link 7'), href: "/religion/taoism/impact/literature/" },
          { label: safeT(t, 'religions.taoism.links.8', 'Link 8'), href: "/religion/taoism/impact/music/" },
          { label: safeT(t, 'religions.taoism.links.9', 'Link 9'), href: "/religion/taoism/impact/science/" },
          { label: safeT(t, 'religions.taoism.links.10', 'Link 10'), href: "/religion/taoism/impact/philosophy/" },
          { label: safeT(t, 'religions.taoism.links.11', 'Link 11'), href: "/blog?category=Taoism" },
        ]}
        featuredPosts={[
          { title: safeT(t, 'religions.taoism.featuredPosts.0.title', 'Featured Post 1'), slug: "taoism-and-christianity", description: safeT(t, 'religions.taoism.featuredPosts.0.description', 'Description for Featured Post 1') },
          { title: safeT(t, 'religions.taoism.featuredPosts.1.title', 'Featured Post 2'), slug: "the-tao", description: safeT(t, 'religions.taoism.featuredPosts.1.description', 'Description for Featured Post 2') },
          { title: safeT(t, 'religions.taoism.featuredPosts.2.title', 'Featured Post 3'), slug: "early-taoism", description: safeT(t, 'religions.taoism.featuredPosts.2.description', 'Description for Featured Post 3') },
          { title: safeT(t, 'religions.taoism.featuredPosts.3.title', 'Featured Post 4'), slug: "medieval-taoism", description: safeT(t, 'religions.taoism.featuredPosts.3.description', 'Description for Featured Post 4') },
          { title: safeT(t, 'religions.taoism.featuredPosts.4.title', 'Featured Post 5'), slug: "modern-taoism", description: safeT(t, 'religions.taoism.featuredPosts.4.description', 'Description for Featured Post 5') },
        ]}
      />

      <ReligionSection
        title={safeT(t, 'religions.rastafarianism.title', 'Rastafarianism')}
        icon={<span className="text-2xl">🦁</span>}
        description={safeT(t, 'religions.rastafarianism.description', 'Description for Rastafarianism')}
        links={[
          { label: safeT(t, 'religions.rastafarianism.links.0', 'Link 0'), href: "/religion/rastafarianism/" },
          { label: safeT(t, 'religions.rastafarianism.links.1', 'Link 1'), href: "/religion/rastafarianism/history/" },
          { label: safeT(t, 'religions.rastafarianism.links.2', 'Link 2'), href: "/religion/rastafarianism/history/early-rastafarianism/" },
          { label: safeT(t, 'religions.rastafarianism.links.3', 'Link 3'), href: "/religion/rastafarianism/history/medieval/" },
          { label: safeT(t, 'religions.rastafarianism.links.4', 'Link 4'), href: "/religion/rastafarianism/history/modern/" },
          { label: safeT(t, 'religions.rastafarianism.links.5', 'Link 5'), href: "/religion/rastafarianism/impact/" },
          { label: safeT(t, 'religions.rastafarianism.links.6', 'Link 6'), href: "/religion/rastafarianism/impact/art/" },
          { label: safeT(t, 'religions.rastafarianism.links.7', 'Link 7'), href: "/religion/rastafarianism/impact/literature/" },
          { label: safeT(t, 'religions.rastafarianism.links.8', 'Link 8'), href: "/religion/rastafarianism/impact/music/" },
          { label: safeT(t, 'religions.rastafarianism.links.9', 'Link 9'), href: "/religion/rastafarianism/impact/science/" },
          { label: safeT(t, 'religions.rastafarianism.links.10', 'Link 10'), href: "/religion/rastafarianism/impact/philosophy/" },
          { label: safeT(t, 'religions.rastafarianism.links.11', 'Link 11'), href: "/blog?category=Rastafarianism" },
        ]}
        featuredPosts={[
          { title: safeT(t, 'religions.rastafarianism.featuredPosts.0.title', 'Featured Post 1'), slug: "rastafarianism-and-christianity", description: safeT(t, 'religions.rastafarianism.featuredPosts.0.description', 'Description for Featured Post 1') },
          { title: safeT(t, 'religions.rastafarianism.featuredPosts.1.title', 'Featured Post 2'), slug: "the-five-principles", description: safeT(t, 'religions.rastafarianism.featuredPosts.1.description', 'Description for Featured Post 2') },
          { title: safeT(t, 'religions.rastafarianism.featuredPosts.2.title', 'Featured Post 3'), slug: "early-rastafarianism", description: safeT(t, 'religions.rastafarianism.featuredPosts.2.description', 'Description for Featured Post 3') },
          { title: safeT(t, 'religions.rastafarianism.featuredPosts.3.title', 'Featured Post 4'), slug: "medieval-rastafarianism", description: safeT(t, 'religions.rastafarianism.featuredPosts.3.description', 'Description for Featured Post 4') },
          { title: safeT(t, 'religions.rastafarianism.featuredPosts.4.title', 'Featured Post 5'), slug: "modern-rastafarianism", description: safeT(t, 'religions.rastafarianism.featuredPosts.4.description', 'Description for Featured Post 5') },
        ]}
      />

      <ReligionSection
        title={safeT(t, 'religions.bahai.title', 'Baha\')i')}
        icon={<span className="text-2xl">🌐</span>}
        description={safeT(t, 'religions.bahai.description', 'Description for Baha\')i')}
        links={[
          { label: safeT(t, 'religions.bahai.links.0', 'Link 0'), href: "/religion/bahai/" },
          { label: safeT(t, 'religions.bahai.links.1', 'Link 1'), href: "/religion/bahai/history/" },
          { label: safeT(t, 'religions.bahai.links.2', 'Link 2'), href: "/religion/bahai/history/early-bahai/" },
          { label: safeT(t, 'religions.bahai.links.3', 'Link 3'), href: "/religion/bahai/history/medieval/" },
          { label: safeT(t, 'religions.bahai.links.4', 'Link 4'), href: "/religion/bahai/history/modern/" },
          { label: safeT(t, 'religions.bahai.links.5', 'Link 5'), href: "/religion/bahai/impact/" },
          { label: safeT(t, 'religions.bahai.links.6', 'Link 6'), href: "/religion/bahai/impact/art/" },
          { label: safeT(t, 'religions.bahai.links.7', 'Link 7'), href: "/religion/bahai/impact/literature/" },
          { label: safeT(t, 'religions.bahai.links.8', 'Link 8'), href: "/religion/bahai/impact/music/" },
          { label: safeT(t, 'religions.bahai.links.9', 'Link 9'), href: "/religion/bahai/impact/science/" },
          { label: safeT(t, 'religions.bahai.links.10', 'Link 10'), href: "/religion/bahai/impact/philosophy/" },
          { label: safeT(t, 'religions.bahai.links.11', 'Link 11'), href: "/blog?category=Baha'i" },
        ]}
        featuredPosts={[
          { title: safeT(t, 'religions.bahai.featuredPosts.0.title', 'Featured Post 1'), slug: "bahai-and-christianity", description: safeT(t, 'religions.bahai.featuredPosts.0.description', 'Description for Featured Post 1') },
          { title: safeT(t, 'religions.bahai.featuredPosts.1.title', 'Featured Post 2'), slug: "the-baha'i-faith", description: safeT(t, 'religions.bahai.featuredPosts.1.description', 'Description for Featured Post 2') },
          { title: safeT(t, 'religions.bahai.featuredPosts.2.title', 'Featured Post 3'), slug: "early-bahai", description: safeT(t, 'religions.bahai.featuredPosts.2.description', 'Description for Featured Post 3') },
          { title: safeT(t, 'religions.bahai.featuredPosts.3.title', 'Featured Post 4'), slug: "medieval-bahai", description: safeT(t, 'religions.bahai.featuredPosts.3.description', 'Description for Featured Post 4') },
          { title: safeT(t, 'religions.bahai.featuredPosts.4.title', 'Featured Post 5'), slug: "modern-bahai", description: safeT(t, 'religions.bahai.featuredPosts.4.description', 'Description for Featured Post 5') },
        ]}
      />

      <ReligionSection
        title={safeT(t, 'religions.ethics.title', 'Ethics')}
        icon={religionIcons.ethics}
        description={safeT(t, 'religions.ethics.description', 'Description for Ethics')}
        links={[
          { label: safeT(t, 'religions.ethics.links.0', 'Link 0'), href: "/religion/ethics/" },
          { label: safeT(t, 'religions.ethics.links.1', 'Link 1'), href: "/religion/ethics/history/" },
          { label: safeT(t, 'religions.ethics.links.2', 'Link 2'), href: "/religion/ethics/history/early-ethics/" },
          { label: safeT(t, 'religions.ethics.links.3', 'Link 3'), href: "/religion/ethics/history/medieval/" },
          { label: safeT(t, 'religions.ethics.links.4', 'Link 4'), href: "/religion/ethics/history/modern/" },
          { label: safeT(t, 'religions.ethics.links.5', 'Link 5'), href: "/religion/ethics/impact/" },
          { label: safeT(t, 'religions.ethics.links.6', 'Link 6'), href: "/religion/ethics/impact/art/" },
          { label: safeT(t, 'religions.ethics.links.7', 'Link 7'), href: "/religion/ethics/impact/literature/" },
          { label: safeT(t, 'religions.ethics.links.8', 'Link 8'), href: "/religion/ethics/impact/music/" },
          { label: safeT(t, 'religions.ethics.links.9', 'Link 9'), href: "/religion/ethics/impact/science/" },
          { label: safeT(t, 'religions.ethics.links.10', 'Link 10'), href: "/religion/ethics/impact/philosophy/" },
          { label: safeT(t, 'religions.ethics.links.11', 'Link 11'), href: "/blog?category=Ethics" },
        ]}
        featuredPosts={[
          { title: safeT(t, 'religions.ethics.featuredPosts.0.title', 'Featured Post 1'), slug: "ethics-and-christianity", description: safeT(t, 'religions.ethics.featuredPosts.0.description', 'Description for Featured Post 1') },
          { title: safeT(t, 'religions.ethics.featuredPosts.1.title', 'Featured Post 2'), slug: "the-golden-rule", description: safeT(t, 'religions.ethics.featuredPosts.1.description', 'Description for Featured Post 2') },
          { title: safeT(t, 'religions.ethics.featuredPosts.2.title', 'Featured Post 3'), slug: "early-ethics", description: safeT(t, 'religions.ethics.featuredPosts.2.description', 'Description for Featured Post 3') },
          { title: safeT(t, 'religions.ethics.featuredPosts.3.title', 'Featured Post 4'), slug: "medieval-ethics", description: safeT(t, 'religions.ethics.featuredPosts.3.description', 'Description for Featured Post 4') },
          { title: safeT(t, 'religions.ethics.featuredPosts.4.title', 'Featured Post 5'), slug: "modern-ethics", description: safeT(t, 'religions.ethics.featuredPosts.4.description', 'Description for Featured Post 5') },
        ]}
      />

      <ReligionSection
        title={safeT(t, 'religions.philosophy.title', 'Philosophy')}
        icon={religionIcons.philosophy}
        description={safeT(t, 'religions.philosophy.description', 'Description for Philosophy')}
        links={[
          { label: safeT(t, 'religions.philosophy.links.0', 'Link 0'), href: "/religion/philosophy/" },
          { label: safeT(t, 'religions.philosophy.links.1', 'Link 1'), href: "/religion/philosophy/history/" },
          { label: safeT(t, 'religions.philosophy.links.2', 'Link 2'), href: "/religion/philosophy/history/early-philosophy/" },
          { label: safeT(t, 'religions.philosophy.links.3', 'Link 3'), href: "/religion/philosophy/history/medieval/" },
          { label: safeT(t, 'religions.philosophy.links.4', 'Link 4'), href: "/religion/philosophy/history/modern/" },
          { label: safeT(t, 'religions.philosophy.links.5', 'Link 5'), href: "/religion/philosophy/impact/" },
          { label: safeT(t, 'religions.philosophy.links.6', 'Link 6'), href: "/religion/philosophy/impact/art/" },
          { label: safeT(t, 'religions.philosophy.links.7', 'Link 7'), href: "/religion/philosophy/impact/literature/" },
          { label: safeT(t, 'religions.philosophy.links.8', 'Link 8'), href: "/religion/philosophy/impact/music/" },
          { label: safeT(t, 'religions.philosophy.links.9', 'Link 9'), href: "/religion/philosophy/impact/science/" },
          { label: safeT(t, 'religions.philosophy.links.10', 'Link 10'), href: "/religion/philosophy/impact/philosophy/" },
          { label: safeT(t, 'religions.philosophy.links.11', 'Link 11'), href: "/blog?category=Philosophy" },
        ]}
        featuredPosts={[
          { title: safeT(t, 'religions.philosophy.featuredPosts.0.title', 'Featured Post 1'), slug: "philosophy-and-christianity", description: safeT(t, 'religions.philosophy.featuredPosts.0.description', 'Description for Featured Post 1') },
          { title: safeT(t, 'religions.philosophy.featuredPosts.1.title', 'Featured Post 2'), slug: "the-nature-of-god", description: safeT(t, 'religions.philosophy.featuredPosts.1.description', 'Description for Featured Post 2') },
          { title: safeT(t, 'religions.philosophy.featuredPosts.2.title', 'Featured Post 3'), slug: "early-philosophy", description: safeT(t, 'religions.philosophy.featuredPosts.2.description', 'Description for Featured Post 3') },
          { title: safeT(t, 'religions.philosophy.featuredPosts.3.title', 'Featured Post 4'), slug: "medieval-philosophy", description: safeT(t, 'religions.philosophy.featuredPosts.3.description', 'Description for Featured Post 4') },
          { title: safeT(t, 'religions.philosophy.featuredPosts.4.title', 'Featured Post 5'), slug: "modern-philosophy", description: safeT(t, 'religions.philosophy.featuredPosts.4.description', 'Description for Featured Post 5') },
        ]}
      />

      <ReligionSection
        title={safeT(t, 'religions.history.title', 'History')}
        icon={religionIcons.history}
        description={safeT(t, 'religions.history.description', 'Description for History')}
        links={[
          { label: safeT(t, 'religions.history.links.0', 'Link 0'), href: "/religion/history/" },
          { label: safeT(t, 'religions.history.links.1', 'Link 1'), href: "/religion/history/early-religions/" },
          { label: safeT(t, 'religions.history.links.2', 'Link 2'), href: "/religion/history/medieval-religions/" },
          { label: safeT(t, 'religions.history.links.3', 'Link 3'), href: "/religion/history/modern-religions/" },
          { label: safeT(t, 'religions.history.links.4', 'Link 4'), href: "/religion/history/comparative-religions/" },
        ]}
        featuredPosts={[
          { title: safeT(t, 'religions.history.featuredPosts.0.title', 'Featured Post 1'), slug: "early-religions", description: safeT(t, 'religions.history.featuredPosts.0.description', 'Description for Featured Post 1') },
          { title: safeT(t, 'religions.history.featuredPosts.1.title', 'Featured Post 2'), slug: "medieval-religions", description: safeT(t, 'religions.history.featuredPosts.1.description', 'Description for Featured Post 2') },
          { title: safeT(t, 'religions.history.featuredPosts.2.title', 'Featured Post 3'), slug: "modern-religions", description: safeT(t, 'religions.history.featuredPosts.2.description', 'Description for Featured Post 3') },
          { title: safeT(t, 'religions.history.featuredPosts.3.title', 'Featured Post 4'), slug: "comparative-religions", description: safeT(t, 'religions.history.featuredPosts.3.description', 'Description for Featured Post 4') },
        ]}
      />

      <ReligionSection
        title={safeT(t, 'religions.comparative.title', 'Comparative')}
        icon={religionIcons.comparative}
        description={safeT(t, 'religions.comparative.description', 'Description for Comparative')}
        links={[
          { label: safeT(t, 'religions.comparative.links.0', 'Link 0'), href: "/religion/comparative/" },
          { label: safeT(t, 'religions.comparative.links.1', 'Link 1'), href: "/religion/comparative/history/" },
          { label: safeT(t, 'religions.comparative.links.2', 'Link 2'), href: "/religion/comparative/history/early-comparative/" },
          { label: safeT(t, 'religions.comparative.links.3', 'Link 3'), href: "/religion/comparative/history/medieval-comparative/" },
          { label: safeT(t, 'religions.comparative.links.4', 'Link 4'), href: "/religion/comparative/history/modern-comparative/" },
        ]}
        featuredPosts={[
          { title: safeT(t, 'religions.comparative.featuredPosts.0.title', 'Featured Post 1'), slug: "early-comparative-religions", description: safeT(t, 'religions.comparative.featuredPosts.0.description', 'Description for Featured Post 1') },
          { title: safeT(t, 'religions.comparative.featuredPosts.1.title', 'Featured Post 2'), slug: "medieval-comparative-religions", description: safeT(t, 'religions.comparative.featuredPosts.1.description', 'Description for Featured Post 2') },
          { title: safeT(t, 'religions.comparative.featuredPosts.2.title', 'Featured Post 3'), slug: "modern-comparative-religions", description: safeT(t, 'religions.comparative.featuredPosts.2.description', 'Description for Featured Post 3') },
        ]}
      />
    </div>
  )
} 