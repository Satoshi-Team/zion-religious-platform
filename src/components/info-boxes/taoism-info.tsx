import React from 'react'
import { Card } from "@/components/ui/card"
import Link from "next/link"

export function TaoismInfoBox() {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-6">Common Questions About Taoism</h2>
      
      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What is Taoism?</h3>
          <p className="mb-4">
            Taoism is a Chinese philosophical and religious tradition emphasizing living in harmony 
            with the Tao (the Way). It focuses on naturalness, spontaneity, and the relationship 
            between humanity and the cosmos.
          </p>
          <Link href="https://plato.stanford.edu/entries/taoism" 
                className="text-blue-600 hover:underline" 
                target="_blank" 
                rel="noopener noreferrer">
            Source: Stanford Encyclopedia of Philosophy
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are core Taoist concepts?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Tao (The Way)</li>
            <li>Wu Wei (Non-action)</li>
            <li>Yin and Yang</li>
            <li>Te (Virtue/Power)</li>
            <li>Qi (Life force)</li>
            <li>Harmony with nature</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are the main texts?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Tao Te Ching (Daodejing)</li>
            <li>Zhuangzi</li>
            <li>Daozang (Taoist Canon)</li>
            <li>Liezi</li>
            <li>Huainanzi</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are Taoist practices?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Meditation</li>
            <li>Qigong exercises</li>
            <li>Feng Shui</li>
            <li>Internal alchemy</li>
            <li>Temple worship</li>
            <li>Ritual and ceremony</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are the main schools?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Quanzhen (Complete Reality)</li>
            <li>Zhengyi (Orthodox Unity)</li>
            <li>Philosophical Taoism</li>
            <li>Religious Taoism</li>
            <li>Folk Taoism</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are Taoist arts?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Traditional Chinese Medicine</li>
            <li>Martial arts (Tai Chi, etc.)</li>
            <li>Calligraphy</li>
            <li>Painting</li>
            <li>Poetry</li>
            <li>Music</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are key Taoist deities?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Three Pure Ones</li>
            <li>Jade Emperor</li>
            <li>Eight Immortals</li>
            <li>Local deities</li>
            <li>Nature spirits</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">Modern Applications</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Health and wellness practices</li>
            <li>Environmental philosophy</li>
            <li>Mindfulness techniques</li>
            <li>Alternative medicine</li>
            <li>Personal development</li>
          </ul>
        </Card>
      </div>
    </section>
  )
} 