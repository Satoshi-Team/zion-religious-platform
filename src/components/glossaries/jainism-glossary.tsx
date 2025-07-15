import React from 'react'
import { Card } from "@/components/ui/card"

export function JainismGlossary() {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-6">Jain Terms and Scriptures</h2>

      <div className="space-y-8">
        <Card className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Sacred Texts</h3>
          
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-3">Agamas and Canonical Texts</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold">Svetambara Canon</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>12 Angas - Principal texts</li>
                  <li>12 Upangas - Explanatory texts</li>
                  <li>6 Chhedasutras - Monastic conduct</li>
                  <li>4 Mulasutras - Basic texts</li>
                  <li>10 Prakirnakas - Miscellaneous texts</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Digambara Texts</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>Karmaprabhrita</li>
                  <li>Kashayaprabhrita</li>
                  <li>Shatkhandagama</li>
                  <li>Samayasara</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-3">Important Philosophical Texts</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Tattvartha Sutra</li>
              <li>Niyamasara</li>
              <li>Pravachanasara</li>
              <li>Pancastikayasara</li>
            </ul>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Core Concepts</h3>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-xl font-semibold mb-3">Fundamental Principles</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-semibold">Five Vows (Mahavratas)</span>
                  <ul className="list-circle pl-5 mt-1">
                    <li>Ahimsa - Non-violence</li>
                    <li>Satya - Truthfulness</li>
                    <li>Asteya - Non-stealing</li>
                    <li>Brahmacharya - Celibacy</li>
                    <li>Aparigraha - Non-possession</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Three Jewels (Ratnatraya)</span>
                  <ul className="list-circle pl-5 mt-1">
                    <li>Right Faith (Samyak Darshana)</li>
                    <li>Right Knowledge (Samyak Jnana)</li>
                    <li>Right Conduct (Samyak Charitra)</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">Key Philosophical Terms</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-semibold">Jiva</span> - Soul/consciousness</li>
                <li><span className="font-semibold">Ajiva</span> - Non-living substances</li>
                <li><span className="font-semibold">Karma</span> - Cause and effect</li>
                <li><span className="font-semibold">Moksha</span> - Liberation</li>
                <li><span className="font-semibold">Kevala Jnana</span> - Omniscience</li>
                <li><span className="font-semibold">Anekantavada</span> - Many-sided reality</li>
                <li><span className="font-semibold">Syadvada</span> - Conditional predication</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Traditions and Practices</h3>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-xl font-semibold mb-3">Major Sects</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-semibold">Svetambara</span>
                  <ul className="list-circle pl-5 mt-1">
                    <li>Murtipujaka</li>
                    <li>Sthanakvasi</li>
                    <li>Terapanthi</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Digambara</span>
                  <ul className="list-circle pl-5 mt-1">
                    <li>Bisapantha</li>
                    <li>Terapantha</li>
                    <li>Taranapantha</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">Religious Practices</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-semibold">Samayika</span> - Meditation</li>
                <li><span className="font-semibold">Pratikramana</span> - Confession</li>
                <li><span className="font-semibold">Puja</span> - Worship</li>
                <li><span className="font-semibold">Pratyakhyana</span> - Renunciation</li>
                <li><span className="font-semibold">Kayotsarga</span> - Body abandonment</li>
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
                <li>Paryushana</li>
                <li>Mahavir Janma Kalyanak</li>
                <li>Diwali</li>
                <li>Akshaya Tritiya</li>
                <li>Das Lakshana</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">Sacred Places</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Shatrunjaya</li>
                <li>Girnar</li>
                <li>Mount Abu</li>
                <li>Pavapuri</li>
                <li>Shravanabelagola</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
} 