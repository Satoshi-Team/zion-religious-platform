import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Rastafarianism: History, Beliefs, and Culture',
  description: 'Explore Rastafarianism, a religious and cultural movement originating in Jamaica, including its beliefs, practices, and global influence.'
}

function RastafarianismPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Rastafarianism: History, Beliefs, and Culture</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Rastafarianism is a religious and cultural movement that emerged in Jamaica during the 1930s. 
        It combines elements of Christianity, African spirituality, and Pan-Africanism, emphasizing 
        the divinity of Emperor Haile Selassie I of Ethiopia and the importance of African heritage. 
        This page explores the origins, beliefs, practices, and cultural impact of Rastafarianism.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Core Beliefs</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Divinity of Haile Selassie:</strong> Emperor as the returned Messiah</li>
              <li><strong>African Redemption:</strong> Return to African homeland and identity</li>
              <li><strong>Babylon System:</strong> Oppressive Western society and institutions</li>
              <li><strong>Zion:</strong> Ethiopia as the promised land</li>
              <li><strong>Natural Living:</strong> Connection to nature and organic lifestyle</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sacred Texts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Holy Piby:</strong> "Black Man's Bible"</li>
              <li><strong>Kebra Nagast:</strong> Ethiopian royal chronicles</li>
              <li><strong>Bible:</strong> Interpreted from African perspective</li>
              <li><strong>Rastafarian Writings:</strong> Modern texts and commentaries</li>
              <li><strong>Oral Traditions:</strong> Passed down through generations</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Major Branches</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Bobo Shanti:</strong> Strict observance and self-sufficiency</li>
              <li><strong>Twelve Tribes:</strong> Organized community structure</li>
              <li><strong>Nyabinghi:</strong> Traditional ceremonial practices</li>
              <li><strong>Ethiopian Orthodox:</strong> Connection to Ethiopian Christianity</li>
              <li><strong>Independent:</strong> Individual spiritual paths</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Historical Development</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Early Origins</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Emergence in 1930s Jamaica, influenced by Marcus Garvey's Pan-Africanism 
                and the coronation of Haile Selassie I.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/rastafarianism/history/early-rastafarianism">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Medieval Period</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Development of communities, practices, and the influence of Ethiopian 
                Orthodox Christianity and African traditions.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/rastafarianism/history/medieval">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modern Era</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Global spread through reggae music, cultural influence, and establishment 
                of international communities.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/rastafarianism/history/modern">Learn More</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contemporary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Current practices, global communities, and ongoing influence on music, 
                culture, and spirituality.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/rastafarianism/history">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Religious Practices</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Daily Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>Prayer and meditation</li>
                <li>Reading and studying sacred texts</li>
                <li>Natural living and organic diet</li>
                <li>Community gathering and reasoning</li>
                <li>Music and chanting (Nyabinghi)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Lifestyle</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>Dreadlocks (symbol of strength and identity)</li>
                <li>Ital diet (natural, organic foods)</li>
                <li>Ganja use (sacramental and medicinal)</li>
                <li>Natural clothing and materials</li>
                <li>Connection to nature and environment</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ceremonies</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>Nyabinghi gatherings</li>
                <li>Groundation ceremonies</li>
                <li>Birthday celebrations for Haile Selassie</li>
                <li>Community reasoning sessions</li>
                <li>Music and drumming rituals</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Cultural Impact</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Music & Reggae</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Profound influence on reggae music, with artists like Bob Marley spreading 
                Rastafarian messages globally.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/rastafarianism/impact/music">Explore Music</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Art & Literature</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Visual arts, poetry, and literature expressing Rastafarian themes of 
                liberation, identity, and spirituality.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/rastafarianism/impact/art">Explore Art</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Philosophy & Ethics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Ethical teachings emphasizing peace, love, unity, social justice, 
                and environmental consciousness.
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link href="/religion/rastafarianism/impact/philosophy">Explore Philosophy</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">References & Further Reading</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><a href="https://www.bbc.co.uk/religion/religions/rastafari/" target="_blank" rel="noopener noreferrer" className="underline">BBC Religion: Rastafari</a></li>
          <li><a href="https://www.britannica.com/topic/Rastafari" target="_blank" rel="noopener noreferrer" className="underline">Britannica: Rastafari</a></li>
          <li><a href="https://www.nytimes.com/2019/07/17/arts/music/rastafari-jamaica.html" target="_blank" rel="noopener noreferrer" className="underline">New York Times: Rastafari in Jamaica</a></li>
          <li><a href="https://www.smithsonianmag.com/history/rastafari-roots-reggae-180964098/" target="_blank" rel="noopener noreferrer" className="underline">Smithsonian: Rastafari and Reggae</a></li>
          <li><a href="https://www.ethiopianorthodox.org/" target="_blank" rel="noopener noreferrer" className="underline">Ethiopian Orthodox Tewahedo Church</a></li>
        </ul>
      </section>
    </div>
  )
}

export default RastafarianismPage 