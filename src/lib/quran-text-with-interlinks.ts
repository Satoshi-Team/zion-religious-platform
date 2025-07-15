// Enhanced Quran Data with Interlinks for SEO
// Includes related texts and cross-references to Bible and Torah

import { InterlinkingService } from './interlinking-service'
import { EnhancedQuranVerse, QuranChapter } from './quran-text-enhanced'
import { RelatedText, VerseInterlinks } from '@/types/related-texts'

export interface EnhancedQuranChapter extends QuranChapter {
  versesData: EnhancedQuranVerse[]
}

// Enhanced Quran chapters with interlinks
export const ENHANCED_QURAN_CHAPTERS: EnhancedQuranChapter[] = [
  {
    number: 1,
    name: 'Al-Fatiha',
    arabic: 'الفاتحة',
    english: 'The Opening',
    revelationType: 'Meccan',
    verses: 7,
    juz: [1],
    ruku: 1,
    summary: 'The opening chapter of the Quran, consisting of seven verses that serve as a prayer and introduction to the entire Quran.',
    themes: ['Monotheism', 'Divine Mercy', 'Guidance', 'Worship', 'Supplication'],
    benefits: ['Essential for daily prayers', 'Most recited chapter', 'Foundation of Islamic faith'],
    versesData: [
      {
        number: 1,
        arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        english: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
        transliteration: 'Bismillahi ar-rahmani ar-raheem',
        tafsir: 'This verse, known as the Basmala, opens most chapters of the Quran and is recited before beginning any important task.',
        interlinks: {
          relatedTexts: [
            {
              type: 'bible',
              reference: 'Bible Matthew 6:9',
              title: 'The Lord\'s Prayer',
              description: 'Christian prayer taught by Jesus, similar to Al-Fatiha in structure and purpose',
              relevance: 'parallel',
              keywords: ['prayer', 'worship', 'divine guidance', 'spiritual opening']
            },
            {
              type: 'torah',
              reference: 'Torah Deuteronomy 6:4',
              title: 'Shema Yisrael',
              description: 'Jewish declaration of faith, emphasizing monotheism like Al-Fatiha',
              relevance: 'thematic',
              keywords: ['monotheism', 'faith declaration', 'divine unity']
            }
          ],
          crossReferences: ['Bible Matthew 6:9', 'Torah Deuteronomy 6:4'],
          themes: ['prayer', 'monotheism'],
          keywords: ['Basmala', 'divine opening', 'Islamic prayer', 'Quranic introduction'],
          seoDescription: 'The opening verse of the Quran (Basmala) - compare with Christian Lord\'s Prayer and Jewish Shema'
        }
      },
      {
        number: 2,
        arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
        english: '[All] praise is [due] to Allah, Lord of the worlds.',
        transliteration: 'Al-hamdu lillahi rabbi al-alameen',
        tafsir: 'All praise belongs to Allah alone, who is the Creator and Sustainer of all creation.',
        interlinks: {
          relatedTexts: [
            {
              type: 'bible',
              reference: 'Bible Psalm 100:4',
              title: 'Enter with Thanksgiving',
              description: 'Biblical call to enter God\'s presence with thanksgiving and praise',
              relevance: 'thematic',
              keywords: ['praise', 'thanksgiving', 'divine worship', 'gratitude']
            }
          ],
          crossReferences: ['Bible Psalm 100:4'],
          themes: ['praise', 'worship'],
          keywords: ['divine praise', 'thanksgiving', 'Islamic worship', 'spiritual gratitude'],
          seoDescription: 'Praise to Allah, Lord of the worlds - explore praise and worship across Islamic and Christian traditions'
        }
      },
      {
        number: 3,
        arabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
        english: 'The Entirely Merciful, the Especially Merciful.',
        transliteration: 'Ar-rahmani ar-raheem',
        tafsir: 'Allah is characterized by mercy in both this world and the hereafter.',
        interlinks: {
          relatedTexts: [
            {
              type: 'bible',
              reference: 'Bible Psalm 103:8',
              title: 'The Lord is Merciful',
              description: 'Biblical description of God\'s mercy and compassion',
              relevance: 'thematic',
              keywords: ['mercy', 'compassion', 'divine love', 'forgiveness']
            }
          ],
          crossReferences: ['Bible Psalm 103:8'],
          themes: ['mercy', 'compassion'],
          keywords: ['divine mercy', 'compassion', 'Islamic mercy', 'spiritual forgiveness'],
          seoDescription: 'Allah\'s mercy and compassion - explore divine mercy across Islamic and Christian traditions'
        }
      },
      {
        number: 4,
        arabic: 'مَالِكِ يَوْمِ الدِّينِ',
        english: 'Sovereign of the Day of Recompense.',
        transliteration: 'Maliki yawmi ad-deen',
        tafsir: 'Allah is the Master of the Day of Judgment, when all will be held accountable.',
        interlinks: {
          relatedTexts: [
            {
              type: 'bible',
              reference: 'Bible Revelation 20:11',
              title: 'The Great White Throne',
              description: 'Biblical account of the final judgment',
              relevance: 'thematic',
              keywords: ['judgment', 'accountability', 'divine justice', 'final day']
            }
          ],
          crossReferences: ['Bible Revelation 20:11'],
          themes: ['judgment', 'accountability'],
          keywords: ['divine judgment', 'accountability', 'Islamic eschatology', 'final reckoning'],
          seoDescription: 'Allah as Sovereign of Judgment Day - explore divine judgment across Islamic and Christian eschatology'
        }
      },
      {
        number: 5,
        arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        english: 'It is You we worship and You we ask for help.',
        transliteration: 'Iyyaka na\'budu wa iyyaka nasta\'een',
        tafsir: 'We worship Allah alone and seek help only from Him.',
        interlinks: {
          relatedTexts: [
            {
              type: 'bible',
              reference: 'Bible Matthew 4:10',
              title: 'Worship the Lord Only',
              description: 'Jesus\' response to Satan about worshiping God alone',
              relevance: 'thematic',
              keywords: ['exclusive worship', 'divine service', 'spiritual devotion', 'monotheism']
            }
          ],
          crossReferences: ['Bible Matthew 4:10'],
          themes: ['worship', 'monotheism'],
          keywords: ['exclusive worship', 'divine help', 'Islamic devotion', 'spiritual service'],
          seoDescription: 'Exclusive worship of Allah - explore monotheistic worship across Islamic and Christian traditions'
        }
      },
      {
        number: 6,
        arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
        english: 'Guide us to the straight path.',
        transliteration: 'Ihdina as-sirata al-mustaqeem',
        tafsir: 'We ask Allah to guide us to the correct path of Islam.',
        interlinks: {
          relatedTexts: [
            {
              type: 'bible',
              reference: 'Bible Psalm 25:4',
              title: 'Show Me Your Ways',
              description: 'Biblical prayer for divine guidance and direction',
              relevance: 'parallel',
              keywords: ['divine guidance', 'spiritual direction', 'righteous path', 'prayer']
            }
          ],
          crossReferences: ['Bible Psalm 25:4'],
          themes: ['guidance', 'prayer'],
          keywords: ['divine guidance', 'straight path', 'Islamic direction', 'spiritual guidance'],
          seoDescription: 'Prayer for divine guidance - explore guidance prayers across Islamic and Christian traditions'
        }
      },
      {
        number: 7,
        arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
        english: 'The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.',
        transliteration: 'Sirata allatheena an\'amta alayhim ghayri al-maghdoobi alayhim wa la ad-dalleen',
        tafsir: 'We ask to follow the path of the righteous, avoiding the path of those who earned Allah\'s anger or went astray.',
        interlinks: {
          relatedTexts: [
            {
              type: 'bible',
              reference: 'Bible Psalm 1:6',
              title: 'The Way of the Righteous',
              description: 'Biblical distinction between the way of the righteous and the wicked',
              relevance: 'parallel',
              keywords: ['righteous path', 'divine favor', 'spiritual guidance', 'moral choice']
            }
          ],
          crossReferences: ['Bible Psalm 1:6'],
          themes: ['righteousness', 'guidance'],
          keywords: ['righteous path', 'divine favor', 'Islamic guidance', 'spiritual direction'],
          seoDescription: 'The path of the favored ones - explore righteous guidance across Islamic and Christian traditions'
        }
      }
    ]
  },
  {
    number: 2,
    name: 'Al-Baqarah',
    arabic: 'البقرة',
    english: 'The Cow',
    revelationType: 'Medinan',
    verses: 286,
    juz: [1, 2, 3],
    ruku: 40,
    summary: 'The longest chapter of the Quran, containing comprehensive guidance on faith, law, and morality.',
    themes: ['Faith', 'Law', 'History', 'Guidance', 'Accountability'],
    benefits: ['Contains the greatest verse (Ayat al-Kursi)', 'Comprehensive Islamic law', 'Stories of previous nations'],
    versesData: [
      {
        number: 1,
        arabic: 'الٓمٓ',
        english: 'Alif, Lam, Meem. These are the verses of the Book and that which has been revealed to you from your Lord is the truth, but most of the people do not believe.',
        transliteration: 'Alif-Lam-Meem. Tilka ayatu al-kitabi wa ma unzila ilayka min rabbika al-haqqu wa lakinna akthara an-nasi la yu\'minoon',
        tafsir: 'These are letters from the Arabic alphabet, and Allah knows their meaning. This verse introduces the divine nature of the Quran.',
        interlinks: {
          relatedTexts: [
            {
              type: 'bible',
              reference: 'Bible 2 Timothy 3:16',
              title: 'All Scripture is God-breathed',
              description: 'Biblical affirmation of divine inspiration of scripture',
              relevance: 'thematic',
              keywords: ['divine revelation', 'scripture', 'divine inspiration', 'holy book']
            }
          ],
          crossReferences: ['Bible 2 Timothy 3:16'],
          themes: ['revelation', 'scripture'],
          keywords: ['divine revelation', 'holy book', 'Islamic scripture', 'divine truth'],
          seoDescription: 'Divine revelation in the Quran - explore scripture inspiration across Islamic and Christian traditions'
        }
      },
      {
        number: 2,
        arabic: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ',
        english: 'This is the Book about which there is no doubt, a guidance for those conscious of Allah.',
        transliteration: 'Dhalika al-kitabu la rayba feehi hudal lil-muttaqeen',
        tafsir: 'The Quran is the divine book without any doubt, providing guidance for those who fear Allah.',
        interlinks: {
          relatedTexts: [
            {
              type: 'bible',
              reference: 'Bible Psalm 119:105',
              title: 'Your Word is a Lamp',
              description: 'Biblical description of God\'s word as guidance and light',
              relevance: 'thematic',
              keywords: ['divine guidance', 'holy book', 'spiritual light', 'divine word']
            }
          ],
          crossReferences: ['Bible Psalm 119:105'],
          themes: ['guidance', 'scripture'],
          keywords: ['divine guidance', 'holy book', 'Islamic guidance', 'spiritual direction'],
          seoDescription: 'The Quran as divine guidance - explore holy book guidance across Islamic and Christian traditions'
        }
      }
    ]
  }
]

// Enhanced functions with interlinks
export function getEnhancedQuranChapter(number: number): EnhancedQuranChapter | undefined {
  return ENHANCED_QURAN_CHAPTERS.find(chapter => chapter.number === number)
}

export function getEnhancedQuranVerses(chapterNumber: number): EnhancedQuranVerse[] {
  const chapter = getEnhancedQuranChapter(chapterNumber)
  return chapter ? chapter.versesData : []
}

export function getEnhancedQuranVerse(chapterNumber: number, verseNumber: number): EnhancedQuranVerse | undefined {
  const chapter = getEnhancedQuranChapter(chapterNumber)
  return chapter ? chapter.versesData.find(verse => verse.number === verseNumber) : undefined
}

export function getAllEnhancedQuranChapters(): EnhancedQuranChapter[] {
  return ENHANCED_QURAN_CHAPTERS
}

// SEO-focused functions
export function getQuranVerseSEOData(chapterNumber: number, verseNumber: number) {
  const verse = getEnhancedQuranVerse(chapterNumber, verseNumber)
  if (!verse) return null

  return {
    title: `Quran ${chapterNumber}:${verseNumber} - ${verse.english.substring(0, 50)}...`,
    description: verse.interlinks?.seoDescription || `Quran verse ${chapterNumber}:${verseNumber} with Arabic text, English translation, and transliteration.`,
    keywords: verse.interlinks?.keywords || [],
    relatedTexts: verse.interlinks?.relatedTexts || [],
    crossReferences: verse.interlinks?.crossReferences || [],
    themes: verse.interlinks?.themes || []
  }
} 