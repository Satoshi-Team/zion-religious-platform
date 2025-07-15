import quranData from '../data/quran-complete-all.json'

export interface QuranVerse {
  verseNumber: number
  arabicText: string
  englishTranslation: string
  transliteration: string
  tafsir: string
}

export interface QuranSurah {
  surahNumber: number
  name: {
    arabic: string
    english: string
    transliteration: string
  }
  revelationType: 'Meccan' | 'Medinan'
  versesCount: number
  description: string
  verses: QuranVerse[]
}

// Convert the JSON data to our interface
const completeQuranData: QuranSurah[] = quranData as QuranSurah[]

// Function to get surah by number
export function getQuranSurah(number: number): QuranSurah | undefined {
  return completeQuranData.find(surah => surah.surahNumber === number)
}

// Function to get all surahs
export function getAllQuranSurahs(): QuranSurah[] {
  return completeQuranData
}

// Function to get verses for a specific surah
export function getQuranVerses(surahNumber: number): QuranVerse[] {
  const surah = getQuranSurah(surahNumber)
  return surah ? surah.verses : []
}

// Function to get a specific verse
export function getQuranVerse(surahNumber: number, verseNumber: number): QuranVerse | undefined {
  const surah = getQuranSurah(surahNumber)
  return surah ? surah.verses.find(verse => verse.verseNumber === verseNumber) : undefined
}

// Function to get surahs by revelation type
export function getQuranSurahsByRevelation(revelationType: 'Meccan' | 'Medinan'): QuranSurah[] {
  return completeQuranData.filter(surah => surah.revelationType === revelationType)
}

// Function to search surahs by name
export function searchQuranSurahs(query: string): QuranSurah[] {
  const lowercaseQuery = query.toLowerCase()
  return completeQuranData.filter(surah => 
    surah.name.english.toLowerCase().includes(lowercaseQuery) ||
    surah.name.arabic.includes(query) ||
    surah.name.transliteration.toLowerCase().includes(lowercaseQuery)
  )
}

// Function to get surah statistics
export function getQuranStatistics() {
  const totalSurahs = completeQuranData.length
  const totalVerses = completeQuranData.reduce((sum, surah) => sum + surah.versesCount, 0)
  const meccanSurahs = getQuranSurahsByRevelation('Meccan').length
  const medinanSurahs = getQuranSurahsByRevelation('Medinan').length
  
  return {
    totalSurahs,
    totalVerses,
    meccanSurahs,
    medinanSurahs
  }
}

// Function to get popular surahs (first few surahs with real data)
export function getPopularQuranSurahs(): QuranSurah[] {
  return completeQuranData.slice(0, 5) // Return first 5 surahs
}

// Function to get surahs with real verse data
export function getSurahsWithRealData(): QuranSurah[] {
  return completeQuranData.filter(surah => 
    surah.verses.some(verse => !verse.arabicText.includes('['))
  )
}

// Function to get surahs with placeholder data
export function getSurahsWithPlaceholderData(): QuranSurah[] {
  return completeQuranData.filter(surah => 
    surah.verses.every(verse => verse.arabicText.includes('['))
  )
}

// Export the complete data
export { completeQuranData } 