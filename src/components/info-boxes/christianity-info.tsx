import React from 'react'
import { Card } from "@/components/ui/card"
import Link from "next/link"

export function ChristianityInfoBox() {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-6">Common Questions About Christianity</h2>
      
      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What is Christianity?</h3>
          <p className="mb-4">
            Christianity is a monotheistic religion based on the life and teachings of Jesus Christ. 
            Christians believe Jesus is the Son of God and the savior of humanity whose coming was 
            prophesied in the Old Testament of the Bible.
          </p>
          <Link href="https://www.britannica.com/topic/Christianity" 
                className="text-blue-600 hover:underline" 
                target="_blank" 
                rel="noopener noreferrer">
            Source: Britannica
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What do Christians believe?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>The Trinity: One God exists in three persons - Father, Son, and Holy Spirit</li>
            <li>Salvation through faith in Jesus Christ</li>
            <li>The Bible as God&apos;s inspired word</li>
            <li>The resurrection of Jesus</li>
            <li>Life after death</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are the main Christian denominations?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Roman Catholic Church</li>
            <li>Eastern Orthodox Church</li>
            <li>Protestant Churches:
              <ul className="list-circle pl-5 mt-2">
                <li>Lutheran</li>
                <li>Anglican/Episcopal</li>
                <li>Baptist</li>
                <li>Methodist</li>
                <li>Presbyterian</li>
              </ul>
            </li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are the key Christian practices?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Prayer and worship</li>
            <li>Baptism</li>
            <li>Holy Communion/Eucharist</li>
            <li>Bible study</li>
            <li>Church attendance</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What is the Bible?</h3>
          <p className="mb-4">
            The Bible is the sacred text of Christianity, consisting of the Old Testament (Hebrew 
            scriptures) and the New Testament. It contains 66 books in Protestant versions, with 
            additional books in Catholic and Orthodox versions.
          </p>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Key sections:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Old Testament: Creation, Jewish history, prophecies</li>
              <li>Gospels: Life and teachings of Jesus</li>
              <li>Acts: Early Christian church history</li>
              <li>Epistles: Letters to early churches</li>
              <li>Revelation: Apocalyptic prophecies</li>
            </ul>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are major Christian holidays?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Christmas: Celebration of Jesus&apos; birth</li>
            <li>Easter: Commemoration of Jesus&apos; resurrection</li>
            <li>Good Friday: Remembrance of Jesus&apos; crucifixion</li>
            <li>Advent: Preparation for Christmas</li>
            <li>Lent: 40-day period of fasting and reflection</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What is Christian worship?</h3>
          <p className="mb-4">
            Christian worship typically includes:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Congregational gathering</li>
            <li>Prayer and praise</li>
            <li>Scripture reading</li>
            <li>Preaching/sermon</li>
            <li>Music and hymns</li>
            <li>Sacraments (varying by denomination)</li>
          </ul>
        </Card>
      </div>
    </section>
  )
} 