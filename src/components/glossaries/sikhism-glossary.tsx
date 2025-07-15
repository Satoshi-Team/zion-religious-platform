import React from 'react'
import { Card } from "@/components/ui/card"

export function SikhismGlossary() {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-6">Sikh Terms and Scriptures</h2>

      <div className="space-y-8">
        <Card className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Sacred Texts</h3>
          
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-3">Guru Granth Sahib</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold">Structure</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>31 Ragas (musical measures)</li>
                  <li>1430 pages (Angs)</li>
                  <li>Compositions of Gurus and Bhagats</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Major Sections</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>Japji Sahib</li>
                  <li>Rehras Sahib</li>
                  <li>Kirtan Sohila</li>
                  <li>Asa di Var</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-3">Other Sacred Texts</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Dasam Granth</li>
              <li>Vars of Bhai Gurdas</li>
              <li>Janamsakhis</li>
              <li>Rahitnamas</li>
            </ul>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Core Concepts</h3>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-xl font-semibold mb-3">Fundamental Beliefs</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-semibold">Ik Onkar</span> - One God</li>
                <li><span className="font-semibold">Naam Japna</span> - Meditation</li>
                <li><span className="font-semibold">Kirat Karni</span> - Honest work</li>
                <li><span className="font-semibold">Vand Chakna</span> - Sharing</li>
                <li><span className="font-semibold">Sewa</span> - Selfless service</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">Five Ks</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Kesh - Uncut hair</li>
                <li>Kangha - Wooden comb</li>
                <li>Kara - Steel bracelet</li>
                <li>Kachera - Cotton underwear</li>
                <li>Kirpan - Steel sword</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Practices and Institutions</h3>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-xl font-semibold mb-3">Daily Practices</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-semibold">Nitnem</span>
                  <ul className="list-circle pl-5 mt-1">
                    <li>Japji Sahib</li>
                    <li>Jaap Sahib</li>
                    <li>Tav Prasad Savaiye</li>
                    <li>Chaupai Sahib</li>
                    <li>Anand Sahib</li>
                  </ul>
                </li>
                <li><span className="font-semibold">Kirtan</span> - Devotional music</li>
                <li><span className="font-semibold">Ardas</span> - Prayer</li>
                <li><span className="font-semibold">Langar</span> - Community kitchen</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">Institutions</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Gurdwara</li>
                <li>Akal Takht</li>
                <li>SGPC</li>
                <li>Khalsa Panth</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Historical and Cultural Elements</h3>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-xl font-semibold mb-3">Festivals</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Vaisakhi</li>
                <li>Gurpurabs</li>
                <li>Hola Mohalla</li>
                <li>Bandi Chhor Divas</li>
                <li>Maghi</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">Sacred Places</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Harmandir Sahib</li>
                <li>Anandpur Sahib</li>
                <li>Patna Sahib</li>
                <li>Hazur Sahib</li>
                <li>Damdama Sahib</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
} 