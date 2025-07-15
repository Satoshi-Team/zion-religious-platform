import React from 'react'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  
  return {
    title: t('modernJudaism.title'),
    description: t('modernJudaism.description'),
    keywords: t('modernJudaism.keywords'),
    openGraph: {
      title: t('modernJudaism.title'),
      description: t('modernJudaism.description'),
      type: 'article',
      locale: locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('modernJudaism.title'),
      description: t('modernJudaism.description'),
    },
  }
}

export default function ModernJudaismPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-center mb-8">Modern Judaism: 1500-Present</h1>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 p-6 rounded-lg mb-8">
          <p className="text-lg leading-relaxed">
            The modern period in Jewish history encompasses dramatic changes including the Enlightenment, 
            emancipation, the rise of different Jewish movements, the Holocaust, and the establishment 
            of the State of Israel. This era has seen both unprecedented challenges and remarkable 
            achievements in Jewish life and culture.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Early Modern Period (1500-1800)</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Expulsions and Dispersal</h3>
              <ul className="space-y-3">
                <li><strong>Spanish Expulsion (1492):</strong> Forced conversion or expulsion of Jews from Spain</li>
                <li><strong>Portuguese Expulsion (1497):</strong> Similar expulsion from Portugal</li>
                <li><strong>Sephardic Diaspora:</strong> Jewish communities established in Ottoman Empire, Netherlands, and Americas</li>
                <li><strong>Marranos:</strong> Crypto-Jews who practiced Judaism secretly</li>
                <li><strong>Economic Networks:</strong> Jewish merchants established international trade networks</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Central and Eastern Europe</h3>
              <ul className="space-y-3">
                <li><strong>Polish-Lithuanian Commonwealth:</strong> Largest Jewish population in Europe</li>
                <li><strong>Council of Four Lands:</strong> Jewish self-government in Poland</li>
                <li><strong>Hasidism:</strong> Mystical movement founded by Baal Shem Tov</li>
                <li><strong>Mitnagdim:</strong> Opposition to Hasidism led by Vilna Gaon</li>
                <li><strong>Yeshiva Movement:</strong> Advanced Talmudic study institutions</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400">The Enlightenment and Emancipation</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Haskalah (Jewish Enlightenment)</h3>
              <p className="mb-4">
                The Jewish Enlightenment movement, led by Moses Mendelssohn, sought to integrate Jews into 
                European society while maintaining Jewish identity and religious practice.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Principles:</h4>
                  <ul className="space-y-2">
                    <li>Integration with European culture</li>
                    <li>Modern education and secular learning</li>
                    <li>Reform of Jewish education</li>
                    <li>Emphasis on reason and tolerance</li>
                    <li>Translation of Jewish texts into European languages</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Impact:</h4>
                  <ul className="space-y-2">
                    <li>Foundation for Reform Judaism</li>
                    <li>Modern Jewish education</li>
                    <li>Jewish participation in European culture</li>
                    <li>Development of modern Hebrew literature</li>
                    <li>Zionist movement inspiration</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Emancipation and Citizenship</h3>
              <p className="mb-4">
                The gradual granting of civil rights to Jews in European countries, beginning with the 
                French Revolution and spreading throughout the 19th century.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Legal Changes:</h4>
                  <ul className="space-y-2">
                    <li>French Revolution (1789): Jews granted citizenship</li>
                    <li>Napoleonic reforms across Europe</li>
                    <li>German states gradual emancipation</li>
                    <li>British emancipation (1858)</li>
                    <li>Russian restrictions and pogroms</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Social Impact:</h4>
                  <ul className="space-y-2">
                    <li>Jewish participation in politics and society</li>
                    <li>Professional and educational opportunities</li>
                    <li>Urbanization and social mobility</li>
                    <li>Intermarriage and assimilation</li>
                    <li>New challenges to Jewish identity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Development of Jewish Movements</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Reform Judaism</h3>
              <p className="mb-4">
                Founded in Germany in the early 19th century, Reform Judaism sought to modernize Jewish 
                practice and adapt to contemporary society while maintaining Jewish identity.
              </p>
              <ul className="space-y-2">
                <li><strong>Key Principles:</strong> Progressive revelation, ethical monotheism, universal mission</li>
                <li><strong>Liturgical Changes:</strong> Vernacular prayers, mixed seating, instrumental music</li>
                <li><strong>Halakhic Approach:</strong> Historical-critical study, selective observance</li>
                <li><strong>Social Justice:</strong> Emphasis on ethical behavior and social reform</li>
                <li><strong>Global Spread:</strong> Particularly strong in United States and United Kingdom</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Conservative Judaism</h3>
              <p className="mb-4">
                Emerging in the late 19th century as a middle path between Orthodoxy and Reform, 
                Conservative Judaism emphasizes traditional practice with modern scholarship.
              </p>
              <ul className="space-y-2">
                <li><strong>Key Principles:</strong> Historical development, halakhic flexibility, Jewish peoplehood</li>
                <li><strong>Halakhic Approach:</strong> Traditional observance with modern interpretation</li>
                <li><strong>Gender Equality:</strong> Ordination of women, egalitarian practices</li>
                <li><strong>Zionism:</strong> Strong support for Jewish state</li>
                <li><strong>Education:</strong> Emphasis on Jewish learning and scholarship</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Orthodox Judaism</h3>
              <p className="mb-4">
                Orthodox Judaism maintains traditional Jewish practice and belief, adapting to modern 
                circumstances while preserving halakhic authority.
              </p>
              <ul className="space-y-2">
                <li><strong>Key Principles:</strong> Divine revelation, halakhic authority, traditional practice</li>
                <li><strong>Modern Orthodoxy:</strong> Integration of secular education with religious observance</li>
                <li><strong>Haredi Judaism:</strong> Ultra-Orthodox communities emphasizing separation</li>
                <li><strong>Yeshiva Movement:</strong> Advanced religious education for men</li>
                <li><strong>Halakhic Innovation:</strong> Responsa addressing modern issues</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Reconstructionist Judaism</h3>
              <p className="mb-4">
                Founded by Mordecai Kaplan in the 20th century, Reconstructionism views Judaism as 
                an evolving religious civilization.
              </p>
              <ul className="space-y-2">
                <li><strong>Key Principles:</strong> Judaism as civilization, democratic process, naturalistic theology</li>
                <li><strong>Theological Approach:</strong> Naturalistic rather than supernatural</li>
                <li><strong>Community Focus:</strong> Emphasis on Jewish peoplehood and culture</li>
                <li><strong>Gender Equality:</strong> Full equality in religious practice</li>
                <li><strong>Interfaith Dialogue:</strong> Openness to other religious traditions</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Zionism and the State of Israel</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">The Zionist Movement</h3>
              <p className="mb-4">
                Zionism emerged in the late 19th century as a response to antisemitism and the desire 
                for Jewish self-determination in the historic homeland.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Political Zionism:</h4>
                  <ul className="space-y-2">
                    <li>Theodor Herzl's "The Jewish State" (1896)</li>
                    <li>First Zionist Congress (1897)</li>
                    <li>Balfour Declaration (1917)</li>
                    <li>British Mandate period</li>
                    <li>United Nations partition plan</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cultural Zionism:</h4>
                  <ul className="space-y-2">
                    <li>Revival of Hebrew language</li>
                    <li>Jewish cultural renaissance</li>
                    <li>Agricultural settlements</li>
                    <li>Educational institutions</li>
                    <li>Literary and artistic revival</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">Establishment of Israel</h3>
              <p className="mb-4">
                The declaration of Israeli independence in 1948 marked a new era in Jewish history, 
                creating a sovereign Jewish state for the first time in nearly 2,000 years.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Early Years:</h4>
                  <ul className="space-y-2">
                    <li>Declaration of Independence (1948)</li>
                    <li>War of Independence</li>
                    <li>Mass immigration (aliyah)</li>
                    <li>Building of institutions</li>
                    <li>Integration of diverse Jewish communities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Modern Israel:</h4>
                  <ul className="space-y-2">
                    <li>Democratic government</li>
                    <li>Technological innovation</li>
                    <li>Cultural diversity</li>
                    <li>Religious pluralism</li>
                    <li>International relations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400">The Holocaust and Its Impact</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Shoah (Holocaust)</h3>
              <p className="mb-4">
                The systematic murder of six million Jews by Nazi Germany and its collaborators 
                during World War II represents the darkest chapter in Jewish history.
              </p>
              <ul className="space-y-2">
                <li><strong>Nazi Ideology:</strong> Antisemitic racial theories and policies</li>
                <li><strong>Systematic Persecution:</strong> Nuremberg Laws, Kristallnacht, ghettos</li>
                <li><strong>Final Solution:</strong> Mass murder in concentration and death camps</li>
                <li><strong>Resistance:</strong> Jewish armed resistance and spiritual resistance</li>
                <li><strong>Righteous Among Nations:</strong> Non-Jews who risked their lives to save Jews</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Post-Holocaust Impact</h3>
              <ul className="space-y-2">
                <li><strong>Demographic Impact:</strong> Destruction of European Jewish communities</li>
                <li><strong>Cultural Loss:</strong> Irreplaceable loss of Jewish culture and scholarship</li>
                <li><strong>Psychological Trauma:</strong> Intergenerational impact on survivors and families</li>
                <li><strong>Religious Questions:</strong> Theological challenges to Jewish faith</li>
                <li><strong>Memory and Education:</strong> Holocaust education and memorialization</li>
                <li><strong>Never Again:</strong> Commitment to prevent future genocides</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Contemporary Jewish Life</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Global Jewish Communities</h3>
              <ul className="space-y-3">
                <li><strong>United States:</strong> Largest Jewish population outside Israel</li>
                <li><strong>Israel:</strong> Jewish majority state and cultural center</li>
                <li><strong>Europe:</strong> Rebuilding communities after Holocaust</li>
                <li><strong>Former Soviet Union:</strong> Revival of Jewish life after communism</li>
                <li><strong>Latin America:</strong> Growing Jewish communities</li>
                <li><strong>Australia and South Africa:</strong> Established Jewish communities</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Contemporary Challenges</h3>
              <ul className="space-y-3">
                <li><strong>Assimilation:</strong> Intermarriage and declining religious observance</li>
                <li><strong>Antisemitism:</strong> Continued prejudice and discrimination</li>
                <li><strong>Religious Pluralism:</strong> Diversity within Jewish community</li>
                <li><strong>Israel-Diaspora Relations:</strong> Complex relationship with Jewish state</li>
                <li><strong>Technology:</strong> Impact of digital age on Jewish life</li>
                <li><strong>Interfaith Relations:</strong> Dialogue with other religious communities</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Jewish Contributions to Modern Society</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Science and Technology</h3>
              <ul className="space-y-2">
                <li><strong>Physics:</strong> Einstein, Bohr, Feynman, and others</li>
                <li><strong>Medicine:</strong> Medical research and pharmaceutical development</li>
                <li><strong>Computer Science:</strong> Contributions to software and hardware development</li>
                <li><strong>Mathematics:</strong> Theoretical and applied mathematics</li>
                <li><strong>Psychology:</strong> Freud, Erikson, and psychological theory</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Arts and Culture</h3>
              <ul className="space-y-2">
                <li><strong>Literature:</strong> Nobel laureates and influential writers</li>
                <li><strong>Music:</strong> Classical, jazz, and popular music</li>
                <li><strong>Film:</strong> Hollywood and international cinema</li>
                <li><strong>Visual Arts:</strong> Painting, sculpture, and photography</li>
                <li><strong>Philosophy:</strong> Continental and analytic philosophy</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Social Justice and Activism</h3>
              <ul className="space-y-2">
                <li><strong>Civil Rights:</strong> Participation in civil rights movements</li>
                <li><strong>Labor Rights:</strong> Union organizing and workers' rights</li>
                <li><strong>Human Rights:</strong> International human rights advocacy</li>
                <li><strong>Environmental Justice:</strong> Environmental protection and sustainability</li>
                <li><strong>Refugee Support:</strong> Assistance to displaced persons</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Future Directions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Religious Innovation</h3>
              <ul className="space-y-2">
                <li><strong>Digital Judaism:</strong> Online communities and virtual services</li>
                <li><strong>Interfaith Families:</strong> Programs for mixed-faith families</li>
                <li><strong>Jewish Renewal:</strong> Spiritual and mystical revival</li>
                <li><strong>Social Justice:</strong> Integration of activism and religious practice</li>
                <li><strong>Environmental Ethics:</strong> Jewish environmentalism and sustainability</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Community Building</h3>
              <ul className="space-y-2">
                <li><strong>Young Adult Engagement:</strong> Programs for millennials and Gen Z</li>
                <li><strong>Jewish Education:</strong> Innovative approaches to Jewish learning</li>
                <li><strong>Cultural Programming:</strong> Arts, music, and cultural events</li>
                <li><strong>Intergenerational Connection:</strong> Bridging age gaps in communities</li>
                <li><strong>Global Jewish Networks:</strong> International Jewish connections</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Study Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Historical Sources</h3>
              <ul className="space-y-3">
                <li><strong>Primary Documents:</strong> Emancipation decrees, Zionist writings</li>
                <li><strong>Memoirs:</strong> Holocaust survivor accounts</li>
                <li><strong>Religious Texts:</strong> Modern responsa and halakhic works</li>
                <li><strong>Political Documents:</strong> Zionist congress proceedings</li>
                <li><strong>Literary Works:</strong> Modern Hebrew and Yiddish literature</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Modern Scholarship</h3>
              <ul className="space-y-3">
                <li><strong>Historical Research:</strong> Studies of modern Jewish history</li>
                <li><strong>Sociological Studies:</strong> Contemporary Jewish communities</li>
                <li><strong>Theological Works:</strong> Modern Jewish thought and philosophy</li>
                <li><strong>Holocaust Studies:</strong> Research on the Shoah</li>
                <li><strong>Israel Studies:</strong> Research on Israeli society and politics</li>
                <li><strong>Diaspora Studies:</strong> Global Jewish communities</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">A Living Tradition</h3>
          <p className="text-center mb-4">
            Modern Judaism continues to evolve and adapt to changing circumstances while maintaining 
            its core values and traditions. The Jewish people have demonstrated remarkable resilience 
            and creativity in the face of unprecedented challenges and opportunities.
          </p>
          <div className="text-center">
            <a 
              href="/religion/judaism/overview" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Return to Judaism Overview →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 