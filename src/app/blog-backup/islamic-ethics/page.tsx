import React from 'react'
import { Metadata } from "next"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Islamic Ethics: Foundations, Principles, and Contemporary Applications",
  description: "A comprehensive exploration of Islamic ethical thought, from its Quranic and Prophetic foundations to its application in modern contexts, including bioethics, business ethics, and social justice.",
  openGraph: {
    title: "Islamic Ethics: Foundations, Principles, and Contemporary Applications",
    description: "A comprehensive exploration of Islamic ethical thought, from its Quranic and Prophetic foundations to its application in modern contexts, including bioethics, business ethics, and social justice.",
    type: "article",
    url: 'http://localhost:3000/blog/islamic-ethics',
    images: [
      {
        url: '/placeholder-islam.jpg',
        width: 1200,
        height: 630,
        alt: 'Islamic ethical principles and their application',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Islamic Ethics: A Comprehensive Guide',
    description: 'Explore the foundations and applications of Islamic ethical thought in contemporary contexts.',
    images: ['/placeholder-islam.jpg'],
  },
}

export default function IslamicEthicsPage() {
  return (
    <article className="prose prose-lg dark:prose-invert mx-auto px-4 py-8">
      <h1>Islamic Ethics: Foundations, Principles, and Contemporary Applications</h1>
      
      <p className="lead">
        Islamic ethics represents a comprehensive moral framework derived from divine revelation, prophetic tradition, and centuries of scholarly interpretation. This system of moral thought continues to guide Muslims in navigating complex ethical challenges in the modern world.
      </p>

      <h2>Foundations of Islamic Ethics</h2>
      
      <h3>Primary Sources</h3>
      <p>
        Islamic ethics draws from two primary sources:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <Card>
          <CardHeader>
            <CardTitle>The Quran</CardTitle>
          </CardHeader>
          <CardContent>
            <p>The divine revelation serves as the ultimate source of ethical guidance, providing both general principles and specific injunctions for moral conduct.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>The Prophetic Tradition (Sunnah)</CardTitle>
          </CardHeader>
          <CardContent>
            <p>The recorded sayings, actions, and approvals of Prophet Muhammad (peace be upon him) offer practical examples of ethical implementation.</p>
          </CardContent>
        </Card>
      </div>

      <h3>Secondary Sources</h3>
      <p>
        Islamic ethical thought is further developed through:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
        <Card>
          <CardHeader>
            <CardTitle>Ijma (Consensus)</CardTitle>
          </CardHeader>
          <CardContent>
            <p>The agreement of qualified scholars on matters of ethical significance.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Qiyas (Analogical Reasoning)</CardTitle>
          </CardHeader>
          <CardContent>
            <p>The application of established principles to new situations through careful reasoning.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Maslaha (Public Interest)</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Consideration of the common good in ethical decision-making.</p>
          </CardContent>
        </Card>
      </div>

      <h2>Core Ethical Principles</h2>
      
      <h3>Divine Command Theory</h3>
      <p>
        Islamic ethics is fundamentally grounded in divine command, where moral obligations arise from God's will as expressed in revelation. This framework emphasizes:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <Card>
          <CardHeader>
            <CardTitle>Obligatory Acts (Fard)</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Required actions that form the foundation of moral duty.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Prohibited Acts (Haram)</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Actions that are categorically forbidden in Islamic ethics.</p>
          </CardContent>
        </Card>
      </div>

      <h3>Virtue Ethics</h3>
      <p>
        Islamic tradition emphasizes the cultivation of moral virtues, including:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
        <Card>
          <CardHeader>
            <CardTitle>Ihsan (Excellence)</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Striving for excellence in all actions and worship.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Adl (Justice)</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Maintaining balance and fairness in all dealings.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Rahma (Mercy)</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Showing compassion and kindness to all creation.</p>
          </CardContent>
        </Card>
      </div>

      <h2>Contemporary Applications</h2>
      
      <h3>Bioethics</h3>
      <p>
        Islamic ethical principles guide decision-making in modern medical contexts:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <Card>
          <CardHeader>
            <CardTitle>Beginning of Life</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Ethical considerations regarding assisted reproduction, genetic testing, and abortion.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>End of Life</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Guidelines for palliative care, euthanasia, and organ donation.</p>
          </CardContent>
        </Card>
      </div>

      <h3>Business Ethics</h3>
      <p>
        Islamic principles shape commercial conduct through:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
        <Card>
          <CardHeader>
            <CardTitle>Prohibition of Riba</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Ethical guidelines for financial transactions and interest-free banking.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Fair Trade</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Principles of just pricing and fair business practices.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Corporate Social Responsibility</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Obligations toward employees, society, and the environment.</p>
          </CardContent>
        </Card>
      </div>

      <h2>Social Ethics</h2>
      
      <h3>Family and Society</h3>
      <p>
        Islamic ethics provides guidance for social relationships:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <Card>
          <CardHeader>
            <CardTitle>Family Values</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Ethical principles governing marriage, parenting, and family life.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Social Justice</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Guidelines for addressing poverty, inequality, and social welfare.</p>
          </CardContent>
        </Card>
      </div>

      <h2>Contemporary Challenges</h2>
      
      <h3>Modern Ethical Dilemmas</h3>
      <p>
        Islamic scholars and communities face new ethical challenges:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
        <Card>
          <CardHeader>
            <CardTitle>Technology</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Ethical implications of artificial intelligence, social media, and digital privacy.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Environment</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Islamic perspectives on climate change and environmental stewardship.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Globalization</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Navigating cultural diversity and maintaining ethical standards in a global context.</p>
          </CardContent>
        </Card>
      </div>

      <h2>Conclusion: Living Ethics</h2>
      <p>
        Islamic ethics continues to evolve while maintaining its foundational principles. The tradition's emphasis on both divine command and human reasoning allows for dynamic engagement with contemporary challenges while preserving core moral values.
      </p>

      <div className="mt-8">
        <h3>Further Reading</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Primary Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                <li>Al-Ghazali, "The Revival of Religious Sciences"</li>
                <li>Ibn Miskawayh, "The Refinement of Character"</li>
                <li>Al-Mawardi, "The Ordinances of Government"</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Contemporary Studies</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                <li>Mohammed Hashim Kamali, "Principles of Islamic Jurisprudence"</li>
                <li>Tariq Ramadan, "Radical Reform: Islamic Ethics and Liberation"</li>
                <li>Abdulaziz Sachedina, "Islamic Biomedical Ethics"</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </article>
  )
} 