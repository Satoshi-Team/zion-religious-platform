import React from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Teachings | Islam',
  description: 'Comprehensive guide to Islamic teachings, including the Five Pillars, Six Articles of Faith, and core principles',
  keywords: 'Islam, Islamic teachings, Five Pillars, Six Articles of Faith, Quran, Hadith, Sharia, Tawhid',
  openGraph: {
    title: 'Teachings | Islam',
    description: 'Comprehensive guide to Islamic teachings, including the Five Pillars, Six Articles of Faith, and core principles',
    images: [{ url: '/images/islam-teachings.jpg', width: 1200, height: 630 }]
  }
}

interface PageProps {
  params: {
    locale: string
  }
}

export default function IslamTeachingsPage({ params }: PageProps) {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">Islamic Teachings</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive guide to Islamic teachings, including the Five Pillars, Six Articles of Faith, and core principles
        </p>
        <p className="text-sm text-muted-foreground">Locale: {params.locale}</p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Teachings in Islam</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          
          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Introduction</h3>
            <p className="text-muted-foreground leading-relaxed">
              Islamic teachings form a comprehensive system of belief and practice that guides every aspect of Muslim life. 
              These teachings are derived from the Quran (the divine revelation), the Hadith (the sayings and actions of Prophet Muhammad), 
              and the scholarly tradition of Islamic jurisprudence. The core teachings emphasize monotheism (Tawhid), 
              social justice, personal responsibility, and spiritual development, creating a holistic framework for individual 
              and community life.
            </p>
          </section>

          <Separator />

          <section className="space-y-6">
            <h3 className="text-xl font-semibold">The Five Pillars of Islam (أركان الإسلام)</h3>
            <p className="text-muted-foreground">
              The Five Pillars represent the core practices and obligations of Islamic faith, forming the framework of Muslim life.
            </p>
            
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">1. Shahada (Declaration of Faith)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    The testimony that there is no deity worthy of worship except Allah and that Muhammad is His messenger.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Arabic Text:</h4>
                    <p className="text-lg font-semibold text-right" dir="rtl">
                      لا إله إلا الله محمد رسول الله
                    </p>
                    <p className="text-sm">"La ilaha illa Allah, Muhammad rasul Allah"</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Requirements:</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Understanding its meaning</li>
                      <li>Sincere belief</li>
                      <li>Verbal proclamation</li>
                      <li>Acting upon its implications</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Quranic Reference:</h4>
                    <p className="text-sm"><strong>Quran 3:18:</strong> "Allah witnesses that there is no deity except Him"</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">2. Salah (Prayer)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    The five daily prescribed prayers that establish regular communion with Allah.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Prayer Times:</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li><strong>Fajr:</strong> Dawn prayer</li>
                      <li><strong>Dhuhr:</strong> Noon prayer</li>
                      <li><strong>Asr:</strong> Afternoon prayer</li>
                      <li><strong>Maghrib:</strong> Sunset prayer</li>
                      <li><strong>Isha:</strong> Night prayer</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Requirements:</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Ritual purity (wudu)</li>
                      <li>Proper timing</li>
                      <li>Facing Qibla (Mecca)</li>
                      <li>Covering awrah</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Quranic Reference:</h4>
                    <p className="text-sm"><strong>Quran 2:43:</strong> "And establish prayer and give zakat"</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">3. Zakat (Charity)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Obligatory giving of a portion of wealth to those in need, typically 2.5% of accumulated wealth.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Recipients:</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>The poor and needy</li>
                      <li>Those in debt</li>
                      <li>Travelers</li>
                      <li>New Muslims</li>
                      <li>Those working for Allah's cause</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Conditions:</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Muslim ownership</li>
                      <li>Wealth above nisab threshold</li>
                      <li>Full lunar year ownership</li>
                      <li>Wealth that grows or produces profit</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Quranic Reference:</h4>
                    <p className="text-sm"><strong>Quran 2:177:</strong> "Righteousness is... giving wealth, in spite of love for it, to relatives, orphans, the needy"</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">4. Sawm (Fasting)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Fasting during the month of Ramadan from dawn to sunset.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Requirements:</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Abstaining from food and drink</li>
                      <li>Abstaining from sexual relations</li>
                      <li>Abstaining from smoking</li>
                      <li>Maintaining good behavior</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Benefits:</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Spiritual purification</li>
                      <li>Self-discipline</li>
                      <li>Empathy for the poor</li>
                      <li>Community solidarity</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Quranic Reference:</h4>
                    <p className="text-sm"><strong>Quran 2:183:</strong> "O you who have believed, decreed upon you is fasting"</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">5. Hajj (Pilgrimage)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Pilgrimage to Mecca at least once in a lifetime for those who are physically and financially able.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Key Rituals:</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Tawaf (circumambulation of Kaaba)</li>
                      <li>Sa'i (walking between Safa and Marwa)</li>
                      <li>Standing at Arafat</li>
                      <li>Stoning of the devil</li>
                      <li>Sacrifice of an animal</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Significance:</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Unity of the Muslim community</li>
                      <li>Remembrance of Prophet Abraham</li>
                      <li>Spiritual renewal</li>
                      <li>Global gathering of believers</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Quranic Reference:</h4>
                    <p className="text-sm"><strong>Quran 3:97:</strong> "And [due] to Allah from the people is a pilgrimage to the House"</p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </section>

          <Separator />

          <section className="space-y-6">
            <h3 className="text-xl font-semibold">The Six Articles of Faith (أركان الإيمان)</h3>
            <p className="text-muted-foreground">
              The fundamental beliefs that form the foundation of Islamic theology and worldview.
            </p>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">1. Belief in Allah</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Belief in the absolute oneness and uniqueness of Allah (Tawhid).
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Key Aspects:</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Divine unity (Tawhid al-Rububiyyah)</li>
                      <li>Unity of worship (Tawhid al-Uluhiyyah)</li>
                      <li>Unity of names and attributes (Tawhid al-Asma was-Sifat)</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Quranic Reference:</h4>
                    <p className="text-sm"><strong>Quran 112:1-4:</strong> "Say: He is Allah, the One and Only"</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">2. Belief in Angels</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Belief in the existence of angels as spiritual beings created by Allah.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Key Angels:</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Jibril (Gabriel) - revelation</li>
                      <li>Mikail (Michael) - sustenance</li>
                      <li>Israfil - trumpet</li>
                      <li>Azrael - death</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Quranic Reference:</h4>
                    <p className="text-sm"><strong>Quran 2:285:</strong> "The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allah and His angels"</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">3. Belief in Divine Books</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Belief in the divine revelation sent to various prophets throughout history.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Major Books:</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Torah (Tawrat) - Moses</li>
                      <li>Psalms (Zabur) - David</li>
                      <li>Gospel (Injil) - Jesus</li>
                      <li>Quran - Muhammad</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Quranic Reference:</h4>
                    <p className="text-sm"><strong>Quran 2:136:</strong> "We believe in Allah and what has been revealed to us and what has been revealed to Abraham and Ishmael and Isaac and Jacob"</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">4. Belief in Prophets</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Belief in all prophets sent by Allah to guide humanity.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Key Prophets:</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Adam - first prophet</li>
                      <li>Noah - flood</li>
                      <li>Abraham - monotheism</li>
                      <li>Moses - law</li>
                      <li>Jesus - gospel</li>
                      <li>Muhammad - final prophet</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Quranic Reference:</h4>
                    <p className="text-sm"><strong>Quran 4:136:</strong> "We have made no distinction between any of His messengers"</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">5. Belief in Day of Judgment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Belief in the resurrection and final judgment of all human beings.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Key Concepts:</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Resurrection of the dead</li>
                      <li>Accountability for actions</li>
                      <li>Heaven and Hell</li>
                      <li>Eternal consequences</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Quranic Reference:</h4>
                    <p className="text-sm"><strong>Quran 3:185:</strong> "Every soul will taste death, and you will only be given your [full] compensation on the Day of Resurrection"</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">6. Belief in Divine Decree</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Belief in Allah's complete knowledge and control over all events (Qadar).
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Key Aspects:</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Allah's knowledge of all things</li>
                      <li>Allah's will and power</li>
                      <li>Human free will</li>
                      <li>Balance of predestination and choice</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Quranic Reference:</h4>
                    <p className="text-sm"><strong>Quran 57:22:</strong> "No disaster strikes upon the earth or among yourselves except that it is in a register before We bring it into being"</p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </section>

          <Separator />

          <section className="space-y-6">
            <h3 className="text-xl font-semibold">Core Islamic Principles</h3>
            
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tawhid (Divine Unity)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    The most fundamental principle of Islamic theology, asserting the absolute oneness and unity of Allah.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Three Aspects:</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li><strong>Tawhid al-Rububiyyah:</strong> Unity of Lordship</li>
                      <li><strong>Tawhid al-Uluhiyyah:</strong> Unity of Worship</li>
                      <li><strong>Tawhid al-Asma was-Sifat:</strong> Unity of Names and Attributes</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Quranic Reference:</h4>
                    <p className="text-sm"><strong>Quran 112:1-4:</strong> "Say: He is Allah, the One and Only; Allah, the Eternal, Absolute; He begets not, nor is He begotten; And there is none like unto Him."</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Sharia (Islamic Law)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    The comprehensive system of Islamic law derived from the Quran and Hadith.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Sources:</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Quran - primary source</li>
                      <li>Hadith - prophetic tradition</li>
                      <li>Ijma - scholarly consensus</li>
                      <li>Qiyas - analogical reasoning</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Objectives:</h4>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Protection of faith</li>
                      <li>Protection of life</li>
                      <li>Protection of intellect</li>
                      <li>Protection of property</li>
                      <li>Protection of lineage</li>
            </ul>
                  </div>
                </CardContent>
              </Card>

            </div>
          </section>

          <Separator />

          <section className="space-y-6">
            <h3 className="text-xl font-semibold">Contemporary Significance</h3>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Social Justice</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Islamic teachings emphasize social justice, equality, and care for the marginalized through zakat, charity, and community responsibility.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Environmental Stewardship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    The concept of khalifa (stewardship) teaches Muslims to care for the environment as Allah's representatives on earth.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Interfaith Relations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Islamic teachings promote respectful dialogue with people of other faiths while maintaining core beliefs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Personal Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    The Five Pillars and Articles of Faith provide a framework for spiritual growth and moral development.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Community Building</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Islamic teachings foster strong community bonds through shared worship, charity, and mutual support.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Global Unity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    The universal nature of Islamic teachings creates a global community of believers united by common practices and beliefs.
                  </p>
                </CardContent>
              </Card>

            </div>
          </section>

          <Separator />

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Further Exploration</h3>
            <p className="text-muted-foreground">
              This content is part of our comprehensive guide to Islam. For more detailed information, explore the related sections:
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Link href="/en/religion/islam/overview" className="text-blue-600 hover:underline">
                Islam Overview
              </Link>
              <Link href="/en/religion/islam/history" className="text-blue-600 hover:underline">
                Islamic History
              </Link>
              <Link href="/blog-backup/the-five-pillars-of-islam" className="text-blue-600 hover:underline">
                Five Pillars of Islam
              </Link>
              <Link href="/blog-backup/the-six-articles-of-faith" className="text-blue-600 hover:underline">
                Six Articles of Faith
              </Link>
              <Link href="/en/sacred-texts/quran" className="text-blue-600 hover:underline">
                Quran Study
              </Link>
              <Link href="/en/studies/philosophy" className="text-blue-600 hover:underline">
                Islamic Philosophy
              </Link>
            </div>
          </section>

        </CardContent>
      </Card>
    </div>
  )
}