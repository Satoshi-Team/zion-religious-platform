import React from 'react'
import { Card } from "@/components/ui/card"

export function BuddhismGlossary() {
  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold mb-6">Buddhist Terms and Scriptures</h2>

      <div className="space-y-8">
        <Card className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Buddhist Canon</h3>
          
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-3">Tripitaka (Pali Canon)</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold">Vinaya Pitaka</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>Monastic rules and their origins</li>
                  <li>Suttavibhanga - Analysis of monastic rules</li>
                  <li>Khandhaka - Additional regulations</li>
                  <li>Parivara - Summary and analysis</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Sutta Pitaka</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>Digha Nikaya - Long discourses</li>
                  <li>Majjhima Nikaya - Middle-length discourses</li>
                  <li>Samyutta Nikaya - Connected discourses</li>
                  <li>Anguttara Nikaya - Numerical discourses</li>
                  <li>Khuddaka Nikaya - Collection of short texts</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Abhidhamma Pitaka</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>Philosophical and psychological analysis</li>
                  <li>Seven major treatises</li>
                  <li>Systematic presentation of doctrine</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-3">Mahayana Sutras</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold">Perfection of Wisdom Texts</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>Heart Sutra</li>
                  <li>Diamond Sutra</li>
                  <li>Lotus Sutra</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Pure Land Texts</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>Larger Sukhavativyuha Sutra</li>
                  <li>Smaller Sukhavativyuha Sutra</li>
                  <li>Contemplation Sutra</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Other Major Sutras</span>
                <ul className="list-circle pl-5 mt-1">
                  <li>Avatamsaka Sutra</li>
                  <li>Lankavatara Sutra</li>
                  <li>Vimalakirti Sutra</li>
                </ul>
              </li>
            </ul>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Core Buddhist Concepts</h3>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-xl font-semibold mb-3">Fundamental Teachings</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-semibold">Four Noble Truths</span>
                  <ul className="list-circle pl-5 mt-1">
                    <li>Dukkha (Suffering)</li>
                    <li>Samudaya (Origin of suffering)</li>
                    <li>Nirodha (Cessation of suffering)</li>
                    <li>Magga (Path to cessation)</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Noble Eightfold Path</span>
                  <ul className="list-circle pl-5 mt-1">
                    <li>Right View</li>
                    <li>Right Intention</li>
                    <li>Right Speech</li>
                    <li>Right Action</li>
                    <li>Right Livelihood</li>
                    <li>Right Effort</li>
                    <li>Right Mindfulness</li>
                    <li>Right Concentration</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">Key Terms</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-semibold">Karma</span> - Intentional action</li>
                <li><span className="font-semibold">Samsara</span> - Cycle of rebirth</li>
                <li><span className="font-semibold">Nirvana</span> - Liberation</li>
                <li><span className="font-semibold">Dharma</span> - Teaching/truth</li>
                <li><span className="font-semibold">Sangha</span> - Buddhist community</li>
                <li><span className="font-semibold">Bodhisattva</span> - Enlightened being</li>
                <li><span className="font-semibold">Sunyata</span> - Emptiness</li>
                <li><span className="font-semibold">Prajna</span> - Wisdom</li>
                <li><span className="font-semibold">Upaya</span> - Skillful means</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Buddhist Schools and Traditions</h3>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-xl font-semibold mb-3">Theravada</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Sri Lankan tradition</li>
                <li>Thai Forest tradition</li>
                <li>Burmese tradition</li>
                <li>Vipassana movement</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">Mahayana</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Chan/Zen Buddhism</li>
                <li>Pure Land Buddhism</li>
                <li>Tiantai/Tendai</li>
                <li>Huayan/Kegon</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">Vajrayana</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Tibetan Buddhism</li>
                <li>Shingon Buddhism</li>
                <li>Nyingma tradition</li>
                <li>Kagyu tradition</li>
                <li>Sakya tradition</li>
                <li>Gelug tradition</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">Contemporary Movements</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Engaged Buddhism</li>
                <li>Secular Buddhism</li>
                <li>Western Buddhism</li>
                <li>Modernist movements</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-2xl font-semibold mb-4">Buddhist Practices</h3>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-xl font-semibold mb-3">Meditation Practices</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-semibold">Samatha</span> - Calm abiding</li>
                <li><span className="font-semibold">Vipassana</span> - Insight meditation</li>
                <li><span className="font-semibold">Zazen</span> - Zen meditation</li>
                <li><span className="font-semibold">Metta</span> - Loving-kindness</li>
                <li><span className="font-semibold">Tonglen</span> - Giving and taking</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">Rituals and Ceremonies</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Taking refuge</li>
                <li>Offering practices</li>
                <li>Prostrations</li>
                <li>Sutra recitation</li>
                <li>Mantra recitation</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
} 