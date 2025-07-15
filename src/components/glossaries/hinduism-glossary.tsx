import React from 'react'
import { Card } from "@/components/ui/card"

export function HinduismGlossary() {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-6">Hindu Terms and Scriptures</h2>

      <div className="space-y-8">
        <Card className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Sacred Texts</h3>
          
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-3">Shruti Texts (Revealed)</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold">Vedas</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>Rig Veda - Hymns and mantras</li>
                  <li>Sama Veda - Musical arrangements</li>
                  <li>Yajur Veda - Sacrificial formulas</li>
                  <li>Atharva Veda - Spells and incantations</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Upanishads</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>Principal Upanishads (Mukhya)</li>
                  <li>Later Upanishads</li>
                  <li>Philosophical discussions</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-3">Smriti Texts (Remembered)</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold">Epics</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>Mahabharata</li>
                  <li>Ramayana</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Puranas</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>Mahapuranas (18 major)</li>
                  <li>Upapuranas (minor)</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Dharma Shastras</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>Manusmriti</li>
                  <li>Other law books</li>
                </ul>
              </li>
            </ul>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Core Concepts</h3>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-xl font-semibold mb-3">Philosophical Concepts</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-semibold">Brahman</span> - Ultimate reality</li>
                <li><span className="font-semibold">Atman</span> - Individual soul</li>
                <li><span className="font-semibold">Dharma</span> - Duty/righteousness</li>
                <li><span className="font-semibold">Karma</span> - Action and consequences</li>
                <li><span className="font-semibold">Maya</span> - Illusion</li>
                <li><span className="font-semibold">Moksha</span> - Liberation</li>
                <li><span className="font-semibold">Samsara</span> - Cycle of rebirth</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">Practices and Paths</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-semibold">Four Paths (Yogas)</span>
                  <ul className="list-circle pl-5 mt-1">
                    <li>Karma Yoga - Action</li>
                    <li>Bhakti Yoga - Devotion</li>
                    <li>Jnana Yoga - Knowledge</li>
                    <li>Raja Yoga - Meditation</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Four Goals (Purusharthas)</span>
                  <ul className="list-circle pl-5 mt-1">
                    <li>Dharma - Righteousness</li>
                    <li>Artha - Wealth</li>
                    <li>Kama - Pleasure</li>
                    <li>Moksha - Liberation</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Schools and Traditions</h3>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-xl font-semibold mb-3">Philosophical Schools</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-semibold">Six Darshanas</span>
                  <ul className="list-circle pl-5 mt-1">
                    <li>Nyaya - Logic</li>
                    <li>Vaisheshika - Atomism</li>
                    <li>Samkhya - Enumeration</li>
                    <li>Yoga - Integration</li>
                    <li>Mimamsa - Investigation</li>
                    <li>Vedanta - Culmination</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">Major Traditions</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Vaishnavism (Vishnu)</li>
                <li>Shaivism (Shiva)</li>
                <li>Shaktism (Divine Mother)</li>
                <li>Smartism (Multiple deities)</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Rituals and Practices</h3>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-xl font-semibold mb-3">Daily Practices</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-semibold">Puja</span> - Worship</li>
                <li><span className="font-semibold">Sandhyavandana</span> - Daily prayers</li>
                <li><span className="font-semibold">Japa</span> - Mantra recitation</li>
                <li><span className="font-semibold">Homa</span> - Fire ritual</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">Life Cycle Rituals</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-semibold">Samskaras</span> - Rites of passage</li>
                <li>Birth ceremonies</li>
                <li>Thread ceremony</li>
                <li>Marriage rituals</li>
                <li>Funeral rites</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Sacred Time and Space</h3>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-xl font-semibold mb-3">Festivals</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Diwali</li>
                <li>Navaratri</li>
                <li>Holi</li>
                <li>Janmashtami</li>
                <li>Maha Shivaratri</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">Sacred Places</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Temples</li>
                <li>Pilgrimage sites</li>
                <li>Holy rivers</li>
                <li>Sacred mountains</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
} 