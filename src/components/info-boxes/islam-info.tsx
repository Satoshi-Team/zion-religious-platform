import React from 'react'
import { Card } from "@/components/ui/card"
import Link from "next/link"

export function IslamInfoBox() {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-6">Common Questions About Islam</h2>
      
      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What is Islam?</h3>
          <p className="mb-4">
            Islam is a monotheistic religion founded in the 7th century CE by Prophet Muhammad. 
            Muslims believe that Muhammad was the final prophet of God (Allah) and that the Quran 
            is God&apos;s direct revelation.
          </p>
          <Link href="https://www.britannica.com/topic/Islam" 
                className="text-blue-600 hover:underline" 
                target="_blank" 
                rel="noopener noreferrer">
            Source: Britannica
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are the Five Pillars of Islam?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Shahada: Declaration of faith</li>
            <li>Salah: Five daily prayers</li>
            <li>Zakat: Charitable giving</li>
            <li>Sawm: Fasting during Ramadan</li>
            <li>Hajj: Pilgrimage to Mecca</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What is the Quran?</h3>
          <p className="mb-4">
            The Quran is the holy book of Islam, believed to be the direct word of Allah revealed 
            to Prophet Muhammad through the angel Gabriel over 23 years. It consists of 114 chapters 
            (suras) and serves as the primary source of Islamic law and guidance.
          </p>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Key aspects:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Written in Arabic</li>
              <li>Preserved in its original form</li>
              <li>Recited in daily prayers</li>
              <li>Translated into many languages</li>
            </ul>
          </div>
        </Card>
      </div>
    </section>
  )
} 