import React from 'react'
import { Metadata } from "next"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: "Who Is Jesus Christ? Understanding the Central Figure of Christianity",
  description: "A comprehensive exploration of Jesus Christ, examining His historical life, divine nature, teachings, and enduring impact on human history and individual lives.",
  keywords: "Jesus Christ, Christianity, Messiah, Son of God, historical Jesus, Christian theology, Gospel, salvation, incarnation",
  authors: [{ name: "Theological Research Team" }],
  openGraph: {
    title: "Who Is Jesus Christ? Understanding the Central Figure of Christianity",
    description: "A comprehensive exploration of Jesus Christ, examining His historical life, divine nature, teachings, and enduring impact on human history and individual lives.",
    type: "article",
    url: 'http://localhost:3000/blog/who-is-jesus-christ',
    images: [
      {
        url: '/placeholder-christianity.jpg',
        width: 1200,
        height: 630,
        alt: 'Historical and theological representation of Jesus Christ in Christian art and tradition',
      },
    ],
    siteName: "Religious Studies Blog",
    locale: "en_US",
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Who Is Jesus Christ? Understanding Christianity\'s Central Figure',
    description: 'An in-depth analysis of Jesus Christ, exploring His historical life, divine nature, teachings, and enduring impact on human history and individual lives.',
    images: ['/placeholder-christianity.jpg'],
    creator: '@religiousstudies',
    site: '@religiousstudies',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'http://localhost:3000/blog/who-is-jesus-christ',
  },
}

export default function WhoIsJesusChristPage() {
  return (
    <article className="prose prose-lg dark:prose-invert mx-auto px-4 py-8">
      <h1>Who Is Jesus Christ? Understanding the Central Figure of Christianity</h1>
      
      <p className="lead">
        Jesus Christ stands at the center of the Christian faith, embodying both divine and human nature in a unique way that has shaped human history and transformed countless lives. This exploration examines the historical Jesus, His divine nature, teachings, and enduring impact on the world.
      </p>

      <h2>Historical Context: The Life of Jesus</h2>
      
      <h3>Birth and Early Life</h3>
      <p>
        Jesus was born in Bethlehem during the reign of Herod the Great, in a time of Roman occupation of Judea. The Gospels of Matthew and Luke provide accounts of His miraculous conception by the Holy Spirit and birth to the Virgin Mary. His early years were spent in Nazareth, where He grew in wisdom and stature, preparing for His public ministry. The historical context of first-century Palestine, with its religious diversity and political tensions, shaped the environment in which Jesus would later teach and minister.
      </p>

      <h3>Public Ministry</h3>
      <p>
        Jesus' public ministry began around the age of thirty, marked by His baptism by John the Baptist and subsequent temptation in the wilderness. For approximately three years, He traveled throughout Galilee and Judea, teaching in synagogues, performing miracles, and gathering disciples. His ministry was characterized by compassion for the marginalized, challenging religious authorities, and proclaiming the coming of God's kingdom. The historical records, both biblical and extra-biblical, attest to His significant impact on the society of His time.
      </p>

      <h2>Theological Significance: The Nature of Christ</h2>
      
      <h3>Divine Nature</h3>
      <p>
        The Christian understanding of Jesus as both fully God and fully human is central to the faith. The New Testament presents Jesus as the eternal Word of God who became flesh, sharing in the divine nature while taking on human form. His miracles, authoritative teaching, and claims about His relationship with God point to His divine identity. The early Church, through councils and creeds, developed the doctrine of the hypostatic union, affirming that Jesus is one person with two natures—divine and human—united without confusion or separation.
      </p>

      <h3>Human Nature</h3>
      <p>
        Jesus' full humanity is equally important to Christian theology. He experienced human emotions, physical limitations, and the challenges of human life. His identification with humanity enables Him to serve as a perfect mediator between God and humanity, understanding human weakness while remaining without sin. The incarnation—God becoming human—demonstrates God's love and commitment to redeeming humanity from within the human condition.
      </p>

      <h2>Teachings and Message</h2>
      
      <h3>Kingdom of God</h3>
      <p>
        The central theme of Jesus' teaching was the kingdom of God, which He described as both present and future. Through parables, sermons, and personal interactions, He revealed the nature of God's reign—a reality of justice, peace, and love that transforms individuals and society. His teachings challenged conventional wisdom, emphasizing values such as humility, forgiveness, and love for enemies. The Sermon on the Mount, recorded in Matthew 5-7, provides a comprehensive summary of His ethical teaching and vision for human life.
      </p>

      <h3>Relationship with God</h3>
      <p>
        Jesus' teaching about God emphasized a personal, loving relationship with the Creator. He addressed God as "Father," inviting His followers into an intimate relationship with God. His parables, such as the Prodigal Son, illustrate God's mercy and desire for reconciliation with humanity. Through His life and teaching, Jesus revealed God's character and will, showing that God's primary desire is for people to know and love Him.
      </p>

      <h2>Death and Resurrection</h2>
      
      <h3>The Cross</h3>
      <p>
        Jesus' death by crucifixion represents the central event of Christian theology. The Gospels present His death as a voluntary sacrifice, fulfilling Old Testament prophecies and accomplishing the redemption of humanity. His suffering and death demonstrate the depth of God's love and the seriousness of human sin. The cross stands as both a historical event and a theological symbol of God's justice and mercy meeting in the person of Christ.
      </p>

      <h3>Resurrection</h3>
      <p>
        The resurrection of Jesus is the foundation of Christian hope and faith. The Gospels and early Christian writings present detailed accounts of His appearances to His disciples after His death. The empty tomb and the transformed lives of His followers provide historical evidence for this event. The resurrection confirms Jesus' divine identity, validates His teaching, and demonstrates God's power over death. It is the basis for the Christian hope of eternal life and the transformation of the world.
      </p>

      <h2>Contemporary Significance</h2>
      
      <h3>Personal Impact</h3>
      <p>
        Jesus continues to transform lives today through His teaching, example, and presence. Millions of people around the world find in Him a source of meaning, purpose, and hope. His teaching provides guidance for ethical living, while His life offers a model of love and service. The relationship with God that He makes possible brings comfort, strength, and transformation to individuals in every culture and circumstance.
      </p>

      <h3>Cultural Influence</h3>
      <p>
        The impact of Jesus extends far beyond the religious sphere, influencing art, literature, music, and social movements throughout history. His teaching has inspired movements for justice, peace, and human dignity. The values He taught have shaped educational systems, healthcare, and social services. His life and message continue to challenge and transform cultures around the world, offering a vision of human flourishing that transcends time and place.
      </p>

      <h2>Conclusion: The Living Christ</h2>
      <p>
        Jesus Christ is not merely a historical figure or a religious teacher, but a living presence who continues to transform lives and shape history. His unique combination of divine and human nature, His revolutionary teaching, and His death and resurrection make Him the central figure of Christianity and one of the most influential people in human history. Understanding who Jesus is remains essential for comprehending the Christian faith and its impact on the world.
      </p>

      <div className="mt-8">
        <h3>Further Reading</h3>
        <p>
          For those seeking to deepen their understanding of Jesus Christ, several works provide valuable insights. N.T. Wright's "Simply Jesus" offers a contemporary exploration of Jesus' life and significance. John Stott's "The Incomparable Christ" examines different aspects of Jesus' identity and work. Jaroslav Pelikan's "Jesus Through the Centuries" traces the impact of Jesus on Western culture and thought.
        </p>
      </div>
    </article>
  )
} 