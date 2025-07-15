import { Metadata } from 'next'
import Link from 'next/link'
import { getQuranData } from '@/lib/quran-data'

export const metadata: Metadata = {
  title: 'Quran - Sacred Texts | ZION.FM',
  description: 'Explore the complete Quran with all 114 surahs. Read Arabic text, English translations, and transliterations.',
}

export default function QuranPage() {
  const quranData = getQuranData()
  
  // Group surahs by revelation type
  const meccanSurahs = Object.entries(quranData)
    .filter(([_, surah]) => surah.revelation_type === 'Meccan')
    .sort(([a], [b]) => parseInt(a) - parseInt(b))
  
  const medinanSurahs = Object.entries(quranData)
    .filter(([_, surah]) => surah.revelation_type === 'Medinan')
    .sort(([a], [b]) => parseInt(a) - parseInt(b))

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">The Holy Quran</h1>
          <p className="text-lg text-muted-foreground mb-6">
            The sacred scripture of Islam, containing 114 surahs (chapters) revealed to Prophet Muhammad (ﷺ)
          </p>
          <div className="flex justify-center gap-4 text-sm text-muted-foreground">
            <span>📖 {Object.keys(quranData).length} Surahs</span>
            <span>📝 {Object.values(quranData).reduce((sum, surah) => sum + surah.verses_count, 0)} Verses</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Meccan Surahs */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-green-600">
              Meccan Surahs ({meccanSurahs.length})
            </h2>
            <div className="grid gap-2">
              {meccanSurahs.map(([number, surah]) => (
                <Link
                  key={number}
                  href={`/quran/${number}`}
                  className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-muted-foreground w-8">
                      {number.padStart(3, '0')}
                    </span>
                    <div>
                      <div className="font-medium">{surah.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {surah.name_arabic} • {surah.name_translation}
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {surah.verses_count} verses
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Medinan Surahs */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Medinan Surahs ({medinanSurahs.length})
            </h2>
            <div className="grid gap-2">
              {medinanSurahs.map(([number, surah]) => (
                <Link
                  key={number}
                  href={`/quran/${number}`}
                  className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-muted-foreground w-8">
                      {number.padStart(3, '0')}
                    </span>
                    <div>
                      <div className="font-medium">{surah.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {surah.name_arabic} • {surah.name_translation}
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {surah.verses_count} verses
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-muted rounded-lg">
          <h3 className="text-lg font-semibold mb-3">About the Quran</h3>
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              The Quran is the central religious text of Islam, believed by Muslims to be a revelation from God (Allah). 
              It is organized into 114 surahs (chapters), which are classified as either Meccan or Medinan based on 
              where and when they were revealed to Prophet Muhammad (ﷺ).
            </p>
            <p>
              <strong>Meccan Surahs:</strong> Revealed in Mecca before the Hijra (migration to Medina). 
              These surahs typically focus on theological themes, monotheism, and the Day of Judgment.
            </p>
            <p>
              <strong>Medinan Surahs:</strong> Revealed in Medina after the Hijra. These surahs often 
              contain legal rulings, social regulations, and guidance for the Muslim community.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 