import { Card } from "@/components/ui/card"

export function ChristianityGlossary() {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-6">Christian Terms and Scriptures</h2>

      <div className="space-y-8">
        <Card className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Key Biblical Texts</h3>
          
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-3">Old Testament</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold">Pentateuch (Torah)</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>Genesis - Creation, early history of Israel</li>
                  <li>Exodus - Liberation from Egypt, Ten Commandments</li>
                  <li>Leviticus - Priestly laws and regulations</li>
                  <li>Numbers - Wilderness journey</li>
                  <li>Deuteronomy - Moses&apos; final speeches</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Historical Books</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>Joshua through Esther - Israel&apos;s history</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Wisdom Literature</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>Psalms - Prayers and hymns</li>
                  <li>Proverbs - Wisdom sayings</li>
                  <li>Ecclesiastes - Philosophical reflection</li>
                  <li>Song of Solomon - Love poetry</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Prophetic Books</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>Major Prophets (Isaiah, Jeremiah, Ezekiel, Daniel)</li>
                  <li>Minor Prophets (Hosea through Malachi)</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-3">New Testament</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold">Gospels</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>Matthew - Jesus as fulfillment of Jewish prophecy</li>
                  <li>Mark - Concise account of Jesus&apos; ministry</li>
                  <li>Luke - Detailed historical account</li>
                  <li>John - Theological reflection on Jesus</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Acts of the Apostles</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>Early church history</li>
                  <li>Spread of Christianity</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Pauline Epistles</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>Romans through Philemon</li>
                  <li>Theological teachings and pastoral guidance</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">General Epistles</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>Hebrews through Jude</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Revelation</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>Apocalyptic prophecy</li>
                </ul>
              </li>
            </ul>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Essential Christian Terms</h3>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-xl font-semibold mb-3">Theological Terms</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-semibold">Trinity</span> - One God in three persons: Father, Son, and Holy Spirit</li>
                <li><span className="font-semibold">Incarnation</span> - God becoming human in Jesus Christ</li>
                <li><span className="font-semibold">Atonement</span> - Christ&apos;s death reconciling humanity with God</li>
                <li><span className="font-semibold">Grace</span> - God&apos;s unmerited favor and love</li>
                <li><span className="font-semibold">Salvation</span> - Deliverance from sin and death</li>
                <li><span className="font-semibold">Resurrection</span> - Rising from death to life</li>
                <li><span className="font-semibold">Redemption</span> - Being saved from sin</li>
                <li><span className="font-semibold">Justification</span> - Being made right with God</li>
                <li><span className="font-semibold">Sanctification</span> - Process of becoming holy</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">Church Terms</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-semibold">Sacrament</span> - Sacred rite (baptism, communion)</li>
                <li><span className="font-semibold">Eucharist</span> - Holy Communion/Lord&apos;s Supper</li>
                <li><span className="font-semibold">Baptism</span> - Initiation rite using water</li>
                <li><span className="font-semibold">Liturgy</span> - Order of worship service</li>
                <li><span className="font-semibold">Creed</span> - Statement of beliefs</li>
                <li><span className="font-semibold">Denomination</span> - Branch of Christianity</li>
                <li><span className="font-semibold">Ecclesiology</span> - Study of church</li>
                <li><span className="font-semibold">Eschatology</span> - Study of end times</li>
                <li><span className="font-semibold">Hermeneutics</span> - Biblical interpretation</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Important Christian Creeds</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><span className="font-semibold">Apostles&apos; Creed</span> - Early statement of Christian belief</li>
            <li><span className="font-semibold">Nicene Creed</span> - Definitive statement of orthodox Christianity</li>
            <li><span className="font-semibold">Athanasian Creed</span> - Detailed explanation of Trinity</li>
            <li><span className="font-semibold">Chalcedonian Definition</span> - Statement on Christ&apos;s nature</li>
          </ul>
        </Card>
      </div>
    </section>
  )
} 