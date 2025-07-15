import React from 'react'
import { Card } from "@/components/ui/card"

export function IslamGlossary() {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-6">Islamic Terms and Scriptures</h2>

      <div className="space-y-8">
        <Card className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Sacred Texts</h3>
          
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-3">The Quran</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold">Structure</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>114 Suras (chapters)</li>
                  <li>Arranged by length (except Al-Fatiha)</li>
                  <li>Meccan and Medinan revelations</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Major Themes</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>Monotheism (Tawhid)</li>
                  <li>Prophetic stories</li>
                  <li>Moral and legal guidance</li>
                  <li>Day of Judgment</li>
                  <li>Paradise and Hell</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-3">Hadith Collections</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold">Sahih al-Bukhari</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>Most authentic collection</li>
                  <li>7,563 hadith</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Sahih Muslim</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>Second most authentic collection</li>
                  <li>7,500 hadith</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Other Collections</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>Sunan Abu Dawood</li>
                  <li>Jami al-Tirmidhi</li>
                  <li>Sunan al-Nasa&apos;i</li>
                  <li>Sunan ibn Majah</li>
                </ul>
              </li>
            </ul>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Essential Islamic Terms</h3>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-xl font-semibold mb-3">Religious Terms</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-semibold">Allah</span> - The One God</li>
                <li><span className="font-semibold">Islam</span> - Submission to Allah</li>
                <li><span className="font-semibold">Iman</span> - Faith</li>
                <li><span className="font-semibold">Ihsan</span> - Excellence in worship</li>
                <li><span className="font-semibold">Tawhid</span> - Divine unity</li>
                <li><span className="font-semibold">Shirk</span> - Associating partners with Allah</li>
                <li><span className="font-semibold">Ummah</span> - Muslim community</li>
                <li><span className="font-semibold">Sunnah</span> - Prophetic tradition</li>
                <li><span className="font-semibold">Shariah</span> - Islamic law</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">Practical Terms</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-semibold">Salah</span> - Prayer</li>
                <li><span className="font-semibold">Sawm</span> - Fasting</li>
                <li><span className="font-semibold">Zakat</span> - Charity</li>
                <li><span className="font-semibold">Hajj</span> - Pilgrimage</li>
                <li><span className="font-semibold">Wudu</span> - Ablution</li>
                <li><span className="font-semibold">Halal</span> - Permissible</li>
                <li><span className="font-semibold">Haram</span> - Forbidden</li>
                <li><span className="font-semibold">Masjid</span> - Mosque</li>
                <li><span className="font-semibold">Dua</span> - Supplication</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Islamic Schools of Thought</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold mb-2">Sunni Schools (Madhabs)</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Hanafi</li>
                <li>Maliki</li>
                <li>Shafi&apos;i</li>
                <li>Hanbali</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Shia Branches</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Twelver</li>
                <li>Ismaili</li>
                <li>Zaidi</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
} 