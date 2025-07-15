import React from 'react'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: t('medievalJudaism.title'),
    description: t('medievalJudaism.description'),
    keywords: t('medievalJudaism.keywords'),
    openGraph: {
      title: t('medievalJudaism.title'),
      description: t('medievalJudaism.description'),
      type: 'article',
      locale: locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('medievalJudaism.title'),
      description: t('medievalJudaism.description'),
    },
  }
}

export default function MedievalJudaismPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-center mb-8">Medieval Judaism: 500-1500 CE</h1>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 p-6 rounded-lg mb-8">
          <p className="text-lg leading-relaxed">
            The medieval period in Jewish history spans from the 5th to the 15th century, encompassing the rise of rabbinic Judaism, 
            the development of Jewish philosophy and mysticism, and the complex relationship between Jewish communities and their 
            Christian and Muslim neighbors. This era saw the creation of foundational texts and the establishment of enduring 
            religious and cultural traditions.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Historical Context</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Early Medieval Period (500-1000 CE)</h3>
              <ul className="space-y-3">
                <li><strong>Babylonian Talmud Completion:</strong> The Talmud Bavli was completed around 500 CE, becoming the authoritative text for Jewish law and practice</li>
                <li><strong>Geonim Period:</strong> Jewish academies in Babylonia (Sura and Pumbedita) became centers of Jewish learning and authority</li>
                <li><strong>Islamic Conquest:</strong> The rise of Islam in the 7th century created new opportunities and challenges for Jewish communities</li>
                <li><strong>Karaites:</strong> A Jewish sect emerged that rejected rabbinic authority and focused solely on biblical interpretation</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">High Medieval Period (1000-1300 CE)</h3>
              <ul className="space-y-3">
                <li><strong>Golden Age of Spain:</strong> Jewish communities flourished under Muslim rule in Al-Andalus</li>
                <li><strong>Jewish Philosophy:</strong> Great thinkers like Maimonides integrated Greek philosophy with Jewish tradition</li>
                <li><strong>Crusades:</strong> European Jewish communities faced persecution and violence during the Crusades</li>
                <li><strong>Kabbalah Development:</strong> Jewish mysticism began to develop in Provence and Spain</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Key Figures and Thinkers</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Maimonides (1138-1204)</h3>
              <p className="mb-4">
                Rabbi Moses ben Maimon, known as Maimonides or Rambam, was one of the most influential Jewish philosophers and legal scholars. 
                Born in Cordoba, Spain, he fled to Egypt due to Almohad persecution and became a physician to the Sultan.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Major Works:</h4>
                  <ul className="space-y-2">
                    <li><strong>Mishneh Torah:</strong> Comprehensive codification of Jewish law</li>
                    <li><strong>Guide for the Perplexed:</strong> Philosophical work reconciling Judaism with Aristotelian philosophy</li>
                    <li><strong>Commentary on the Mishnah:</strong> Detailed commentary on rabbinic texts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Philosophical Contributions:</h4>
                  <ul className="space-y-2">
                    <li>Integration of Greek philosophy with Jewish theology</li>
                    <li>Thirteen Principles of Faith</li>
                    <li>Rational approach to religious belief</li>
                    <li>Influence on both Jewish and Islamic philosophy</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Rashi (1040-1105)</h3>
              <p className="mb-4">
                Rabbi Shlomo Yitzchaki, known as Rashi, was the preeminent commentator on the Hebrew Bible and Talmud. 
                His commentaries remain essential for Jewish study to this day.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Commentary Style:</h4>
                  <ul className="space-y-2">
                    <li>Clear, concise explanations of difficult passages</li>
                    <li>Integration of midrashic and halakhic insights</li>
                    <li>Accessible to both beginners and advanced students</li>
                    <li>Preservation of oral traditions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Legacy:</h4>
                  <ul className="space-y-2">
                    <li>Standard commentary printed with most Hebrew Bibles</li>
                    <li>Foundation for later commentators (Tosafot)</li>
                    <li>Influence on Christian biblical scholarship</li>
                    <li>Model for clear religious instruction</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Judah Halevi (1075-1141)</h3>
              <p className="mb-4">
                A Spanish Jewish physician, poet, and philosopher, Judah Halevi is best known for his philosophical work 
                "The Kuzari" and his beautiful Hebrew poetry.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">The Kuzari:</h4>
                  <ul className="space-y-2">
                    <li>Dialogue between a Jewish scholar and the King of the Khazars</li>
                    <li>Defense of Judaism against philosophy and other religions</li>
                    <li>Emphasis on Jewish peoplehood and land of Israel</li>
                    <li>Integration of rational and mystical elements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Poetry:</h4>
                  <ul className="space-y-2">
                    <li>Religious and secular Hebrew poetry</li>
                    <li>Zionide poems expressing longing for Jerusalem</li>
                    <li>Influence on Hebrew literature</li>
                    <li>Integration of Arabic poetic forms</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Development of Jewish Law and Literature</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Responsa Literature</h3>
              <p className="mb-4">
                The medieval period saw the development of responsa (she'elot u-teshuvot), written answers to legal questions 
                posed to rabbinic authorities. This literature provides insight into Jewish life and legal development.
              </p>
              <ul className="space-y-2">
                <li><strong>Geonic Responsa:</strong> Early responsa from Babylonian academies</li>
                <li><strong>Spanish Responsa:</strong> Legal decisions from Spanish Jewish communities</li>
                <li><strong>Ashkenazi Responsa:</strong> German and French rabbinic rulings</li>
                <li><strong>Practical Application:</strong> Responsa addressed real-life situations and community needs</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Commentary Tradition</h3>
              <p className="mb-4">
                Medieval Jewish scholars created extensive commentaries on biblical and rabbinic texts, establishing 
                methods of interpretation that continue to influence Jewish study.
              </p>
              <ul className="space-y-2">
                <li><strong>Biblical Commentaries:</strong> Rashi, Ibn Ezra, Ramban, and others</li>
                <li><strong>Talmudic Commentaries:</strong> Tosafot, Ritva, Ran, and others</li>
                <li><strong>Legal Codification:</strong> Mishneh Torah, Arba'ah Turim, Shulchan Aruch</li>
                <li><strong>Educational Methods:</strong> Development of systematic approaches to Jewish learning</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Jewish Communities and Social Life</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Sephardic Communities</h3>
              <ul className="space-y-3">
                <li><strong>Al-Andalus:</strong> Flourishing Jewish culture under Muslim rule</li>
                <li><strong>Court Jews:</strong> Jewish advisors and officials in Muslim and Christian courts</li>
                <li><strong>Intellectual Exchange:</strong> Translation of Greek and Arabic texts into Hebrew</li>
                <li><strong>Economic Roles:</strong> Trade, medicine, finance, and administration</li>
                <li><strong>Cultural Integration:</strong> Adoption of Arabic language and culture while maintaining Jewish identity</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Ashkenazi Communities</h3>
              <ul className="space-y-3">
                <li><strong>German Lands:</strong> Jewish communities in the Rhineland and beyond</li>
                <li><strong>Hasidei Ashkenaz:</strong> Pietistic movement emphasizing ethical behavior</li>
                <li><strong>Economic Restrictions:</strong> Limited to money-lending and trade</li>
                <li><strong>Persecution:</strong> Crusades, blood libels, and expulsions</li>
                <li><strong>Cultural Isolation:</strong> Distinct customs and liturgical practices</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Mysticism and Kabbalah</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Early Kabbalah</h3>
              <p className="mb-4">
                Jewish mysticism began to develop in the medieval period, particularly in Provence and Spain, 
                leading to the creation of foundational kabbalistic texts.
              </p>
              <ul className="space-y-2">
                <li><strong>Sefer Yetzirah:</strong> Ancient text on creation and divine names</li>
                <li><strong>Bahir:</strong> Early kabbalistic work from Provence</li>
                <li><strong>Zohar:</strong> Central text of Kabbalah, attributed to Rabbi Shimon bar Yochai</li>
                <li><strong>Practical Kabbalah:</strong> Use of divine names and mystical practices</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Hasidei Ashkenaz</h3>
              <p className="mb-4">
                The German Pietists developed their own mystical tradition, emphasizing ethical behavior, 
                prayer, and mystical practices.
              </p>
              <ul className="space-y-2">
                <li><strong>Sefer Hasidim:</strong> Guide to ethical behavior and mystical practices</li>
                <li><strong>Prayer Practices:</strong> Intense concentration and mystical intentions</li>
                <li><strong>Ethical Emphasis:</strong> Focus on personal piety and community welfare</li>
                <li><strong>Influence:</strong> Impact on later Jewish ethical literature</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Challenges and Persecutions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Crusades and Violence</h3>
              <ul className="space-y-3">
                <li><strong>First Crusade (1096):</strong> Massacres of Jewish communities in the Rhineland</li>
                <li><strong>Later Crusades:</strong> Continued violence and persecution</li>
                <li><strong>Blood Libels:</strong> False accusations of ritual murder</li>
                <li><strong>Host Desecration:</strong> Accusations of profaning Christian sacraments</li>
                <li><strong>Jewish Responses:</strong> Martyrdom (kiddush hashem) and religious poetry</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Economic and Legal Restrictions</h3>
              <ul className="space-y-3">
                <li><strong>Usury Laws:</strong> Restrictions on Jewish economic activities</li>
                <li><strong>Special Taxes:</strong> Heavy taxation of Jewish communities</li>
                <li><strong>Ghettoization:</strong> Forced residence in specific areas</li>
                <li><strong>Occupational Restrictions:</strong> Limited to money-lending and trade</li>
                <li><strong>Expulsions:</strong> England (1290), France (1306, 1394), Spain (1492)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Cultural and Intellectual Achievements</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Literature and Poetry</h3>
              <ul className="space-y-3">
                <li><strong>Hebrew Poetry:</strong> Religious and secular poetry in Spain</li>
                <li><strong>Piyyutim:</strong> Liturgical poetry for synagogue services</li>
                <li><strong>Historical Chronicles:</strong> Accounts of Jewish communities and events</li>
                <li><strong>Travel Literature:</strong> Accounts of Jewish travelers and merchants</li>
                <li><strong>Scientific Works:</strong> Medicine, astronomy, and mathematics</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Translation and Transmission</h3>
              <ul className="space-y-3">
                <li><strong>Greek to Arabic:</strong> Translation of classical texts</li>
                <li><strong>Arabic to Hebrew:</strong> Translation of Islamic scholarship</li>
                <li><strong>Hebrew to Latin:</strong> Translation for Christian scholars</li>
                <li><strong>Preservation:</strong> Saving classical knowledge during European Dark Ages</li>
                <li><strong>Cultural Bridge:</strong> Facilitating exchange between cultures</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Legacy and Impact</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Religious Development</h3>
              <ul className="space-y-3">
                <li><strong>Halakhic Authority:</strong> Establishment of rabbinic authority and legal codes</li>
                <li><strong>Liturgical Development:</strong> Standardization of prayer services and customs</li>
                <li><strong>Educational Methods:</strong> Systematic approaches to Jewish learning</li>
                <li><strong>Philosophical Integration:</strong> Reconciliation of faith and reason</li>
                <li><strong>Mystical Traditions:</strong> Foundation for later kabbalistic development</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Cultural Heritage</h3>
              <ul className="space-y-3">
                <li><strong>Textual Tradition:</strong> Preservation and transmission of Jewish texts</li>
                <li><strong>Commentary Methods:</strong> Approaches to biblical and rabbinic interpretation</li>
                <li><strong>Community Organization:</strong> Models for Jewish communal life</li>
                <li><strong>Intellectual Exchange:</strong> Contribution to medieval scholarship</li>
                <li><strong>Resilience:</strong> Models of survival and adaptation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Study Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Primary Sources</h3>
              <ul className="space-y-3">
                <li><strong>Mishneh Torah:</strong> Maimonides' comprehensive legal code</li>
                <li><strong>Guide for the Perplexed:</strong> Philosophical work by Maimonides</li>
                <li><strong>Rashi's Commentaries:</strong> Biblical and Talmudic commentaries</li>
                <li><strong>The Kuzari:</strong> Judah Halevi's philosophical dialogue</li>
                <li><strong>Zohar:</strong> Central text of Kabbalah</li>
                <li><strong>Sefer Hasidim:</strong> Guide to pietistic practices</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Modern Scholarship</h3>
              <ul className="space-y-3">
                <li><strong>Historical Studies:</strong> Research on medieval Jewish communities</li>
                <li><strong>Philosophical Analysis:</strong> Studies of medieval Jewish thought</li>
                <li><strong>Legal Development:</strong> Research on halakhic evolution</li>
                <li><strong>Cultural Exchange:</strong> Studies of Jewish-Muslim-Christian interaction</li>
                <li><strong>Mystical Traditions:</strong> Research on early Kabbalah</li>
                <li><strong>Social History:</strong> Studies of daily life and community organization</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">Continuing the Journey</h3>
          <p className="text-center mb-4">
            The medieval period laid the foundation for modern Judaism, establishing the texts, practices, and 
            intellectual traditions that continue to guide Jewish life today. The resilience and creativity of 
            medieval Jewish communities serve as a model for maintaining religious and cultural identity in 
            challenging circumstances.
          </p>
          <div className="text-center">
            <a 
              href="/religion/judaism/history/modern" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Continue to Modern Judaism →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 