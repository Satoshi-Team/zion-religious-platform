import { Card } from "@/components/ui/card"
import Link from "next/link"

export function SikhismInfoBox() {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-6">Common Questions About Sikhism</h2>
      
      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What is Sikhism?</h3>
          <p className="mb-4">
            Sikhism is a monotheistic religion founded by Guru Nanak in the Punjab region of the 
            Indian subcontinent in the late 15th century. It emphasizes devotion to one God, 
            equality of all people, and service to humanity.
          </p>
          <Link href="https://www.sikhnet.com/what-is-sikhism" 
                className="text-blue-600 hover:underline" 
                target="_blank" 
                rel="noopener noreferrer">
            Source: SikhNet
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">Who are the Ten Gurus?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Guru Nanak Dev Ji (1469-1539)</li>
            <li>Guru Angad Dev Ji (1504-1552)</li>
            <li>Guru Amar Das Ji (1479-1574)</li>
            <li>Guru Ram Das Ji (1534-1581)</li>
            <li>Guru Arjan Dev Ji (1563-1606)</li>
            <li>Guru Hargobind Ji (1595-1644)</li>
            <li>Guru Har Rai Ji (1630-1661)</li>
            <li>Guru Har Krishan Ji (1656-1664)</li>
            <li>Guru Tegh Bahadur Ji (1621-1675)</li>
            <li>Guru Gobind Singh Ji (1666-1708)</li>
        </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are the Five Ks?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Kesh (uncut hair)</li>
            <li>Kangha (wooden comb)</li>
            <li>Kara (steel bracelet)</li>
            <li>Kachera (cotton underwear)</li>
            <li>Kirpan (steel sword)</li>
          </ul>
          <p className="text-sm text-muted-foreground">
            These are the five articles of faith worn by initiated (Khalsa) Sikhs.
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What is the Guru Granth Sahib?</h3>
          <p className="mb-4">
            The Guru Granth Sahib is the eternal living Guru and holy scripture of Sikhism. It contains:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Teachings of the Sikh Gurus</li>
            <li>Writings of Hindu and Muslim saints</li>
            <li>Divine hymns and poetry</li>
            <li>Guidance for spiritual life</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are key Sikh practices?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Naam Japna (meditation on God&apos;s name)</li>
            <li>Kirat Karni (honest living)</li>
            <li>Vand Chakna (sharing with others)</li>
            <li>Seva (selfless service)</li>
            <li>Langar (community kitchen)</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What are important Sikh festivals?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Vaisakhi (formation of the Khalsa)</li>
            <li>Gurpurabs (Guru birthdays)</li>
            <li>Hola Mohalla (martial arts festival)</li>
            <li>Bandi Chhor Divas (day of liberation)</li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-3">What is the Sikh concept of God?</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>One Universal Creator (Waheguru)</li>
            <li>Formless, eternal, and infinite</li>
            <li>Present in all creation</li>
            <li>Beyond gender and form</li>
            <li>Accessible through meditation and devotion</li>
          </ul>
        </Card>
      </div>
    </section>
  )
} 