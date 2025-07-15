import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Hindu Music and Dance: Sacred Arts and Devotional Expressions",
  description: "Explore the profound artistic traditions of Hindu music and dance - from classical ragas to sacred temple dances. Discover how these divine arts express spiritual wisdom and connect devotees with the divine.",
  openGraph: {
    title: "Hindu Music and Dance: Sacred Arts and Devotional Expressions",
    description: "Explore the profound artistic traditions of Hindu music and dance - from classical ragas to sacred temple dances. Discover how these divine arts express spiritual wisdom and connect devotees with the divine.",
    type: "article",
  },
}

export default function HinduMusicAndDancePage() {
  return (
    <article className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-muted-foreground">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>/</li>
            <li>Hindu Music and Dance: Sacred Arts and Devotional Expressions</li>
          </ol>
        </nav>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1>Hindu Music and Dance: Sacred Arts and Devotional Expressions</h1>
          
          <section>
            <h2>Classical Music Traditions</h2>
            <ul>
              <li>
                <strong>Raga System:</strong> The sophisticated melodic framework of Indian classical music, as detailed in the Natya Shastra and Sangita Ratnakara, expressing divine emotions and cosmic harmony
              </li>
              <li>
                <strong>Dhrupad:</strong> The ancient form of devotional music, preserving the purest traditions of Vedic chanting and temple music, as documented in the Brihaddeshi and other classical texts
              </li>
              <li>
                <strong>Kirtan:</strong> Devotional singing, as practiced in the Bhakti movement, combining music with spiritual storytelling, as exemplified in the works of saint-poets like Tulsidas and Surdas
              </li>
              <li>
                <strong>Bhajans:</strong> Simple devotional songs, expressing love and devotion to the divine, as popularized by saint-poets and preserved in regional traditions
              </li>
            </ul>
          </section>

          <section>
            <h2>Sacred Dance Forms</h2>
            <ul>
              <li>
                <strong>Bharatanatyam:</strong> The classical dance form of Tamil Nadu, as described in the Natya Shastra and Abhinaya Darpana, expressing divine stories through precise movements and mudras
              </li>
              <li>
                <strong>Kathak:</strong> The storytelling dance of North India, combining Hindu and Persian influences, as preserved in temple traditions and Mughal courts
              </li>
              <li>
                <strong>Odissi:</strong> The graceful dance of Odisha, depicting divine love and devotion, as documented in temple sculptures and the Abhinaya Chandrika
              </li>
              <li>
                <strong>Kuchipudi:</strong> The dance-drama tradition of Andhra Pradesh, combining music, dance, and acting to portray divine stories from the Puranas
              </li>
            </ul>
          </section>

          <section>
            <h2>Musical Instruments</h2>
            <ul>
              <li>
                <strong>Veena:</strong> The ancient string instrument, associated with Saraswati and divine knowledge, as mentioned in the Vedas and depicted in temple sculptures
              </li>
              <li>
                <strong>Mridangam:</strong> The classical percussion instrument, essential in temple music and dance performances, as described in the Sangita Ratnakara
              </li>
              <li>
                <strong>Flute:</strong> The divine instrument of Krishna, symbolizing the call of the divine to the human soul, as celebrated in the Bhagavata Purana
              </li>
              <li>
                <strong>Tabla:</strong> The versatile percussion instrument, combining rhythm with spiritual expression, as developed in the Hindustani classical tradition
              </li>
            </ul>
          </section>

          <section>
            <h2>Spiritual Significance</h2>
            <ul>
              <li>
                <strong>Nada Brahma:</strong> The concept of sound as divine, as expounded in the Upanishads and Tantric texts, emphasizing the vibrational nature of reality
              </li>
              <li>
                <strong>Rasa Theory:</strong> The aesthetic experience of divine emotions, as detailed in the Natya Shastra and Abhinavabharati, guiding artistic expression
              </li>
              <li>
                <strong>Devotional Expression:</strong> The use of music and dance in worship, as practiced in temples and spiritual gatherings, fostering divine connection
              </li>
              <li>
                <strong>Spiritual Transformation:</strong> The power of sacred arts to elevate consciousness and connect with the divine, as described in the Yoga Sutras and Bhakti texts
              </li>
            </ul>
          </section>

          {/* Related Topics */}
          <section>
            <h2>Related Topics</h2>
            <ul>
              <li>
                <Link href="/blog/hindu-scriptures" className="hover:underline">
                  Hindu Scriptures: Sacred Texts and Their Significance
                </Link>
              </li>
              <li>
                <Link href="/blog/hindu-spiritual-practices" className="hover:underline">
                  Hindu Spiritual Practices: Paths to Enlightenment
                </Link>
              </li>
              <li>
                <Link href="/blog/hindu-art-and-architecture" className="hover:underline">
                  Hindu Art and Architecture: Sacred Expressions
                </Link>
              </li>
            </ul>
          </section>

          {/* Further Study */}
          <section>
            <h2>Further Study</h2>
            <ul>
              <li>
                <Link href="/religion/hinduism" className="hover:underline">
                  Hinduism Learning Path
                </Link>
              </li>
              <li>
                <Link href="/religion/comparative" className="hover:underline">
                  Comparative Religion
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  )
} 