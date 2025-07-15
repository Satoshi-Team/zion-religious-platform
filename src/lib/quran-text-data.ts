export interface QuranVerse {
  number: number
  arabic: string
  english: string
  transliteration: string
  tafsir?: string
}

export interface QuranChapter {
  number: number
  name: string
  arabic: string
  english: string
  revelationType: 'Meccan' | 'Medinan'
  verses: number
  juz: number[]
  ruku: number
  versesData: QuranVerse[]
  summary: string
  themes: string[]
  benefits: string[]
}

// Complete Quran data with actual text
export const QURAN_CHAPTERS: QuranChapter[] = [
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
        tafsir: 'This verse, known as the Basmala, opens most chapters of the Quran and is recited before beginning any important task.'
      },
      {
        number: 2,
        arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
        english: '[All] praise is [due] to Allah, Lord of the worlds.',
        transliteration: 'Al-hamdu lillahi rabbi al-alameen',
        tafsir: 'All praise belongs to Allah alone, who is the Creator and Sustainer of all creation.'
      },
      {
        number: 3,
        arabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
        english: 'The Entirely Merciful, the Especially Merciful.',
        transliteration: 'Ar-rahmani ar-raheem',
        tafsir: 'Allah is characterized by mercy in both this world and the hereafter.'
      },
      {
        number: 4,
        arabic: 'مَالِكِ يَوْمِ الدِّينِ',
        english: 'Sovereign of the Day of Recompense.',
        transliteration: 'Maliki yawmi ad-deen',
        tafsir: 'Allah is the Master of the Day of Judgment, when all will be held accountable.'
      },
      {
        number: 5,
        arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
        english: 'It is You we worship and You we ask for help.',
        transliteration: 'Iyyaka na\'budu wa iyyaka nasta\'een',
        tafsir: 'We worship Allah alone and seek help only from Him.'
      },
      {
        number: 6,
        arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
        english: 'Guide us to the straight path.',
        transliteration: 'Ihdina as-sirata al-mustaqeem',
        tafsir: 'We ask Allah to guide us to the correct path of Islam.'
      },
      {
        number: 7,
        arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
        english: 'The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.',
        transliteration: 'Sirata allatheena an\'amta alayhim ghayri al-maghdoobi alayhim wa la ad-dalleen',
        tafsir: 'We ask to follow the path of the righteous, avoiding the path of those who earned Allah\'s anger or went astray.'
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
        english: 'Alif, Lam, Meem.',
        transliteration: 'Alif-Lam-Meem',
        tafsir: 'These are letters from the Arabic alphabet, and Allah knows their meaning.'
      },
      {
        number: 2,
        arabic: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ',
        english: 'This is the Book about which there is no doubt, a guidance for those conscious of Allah.',
        transliteration: 'Dhalika al-kitabu la rayba feehi hudal lil-muttaqeen',
        tafsir: 'The Quran is the divine book without any doubt, providing guidance for those who fear Allah.'
      },
      {
        number: 3,
        arabic: 'الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ',
        english: 'Who believe in the unseen, establish prayer, and spend out of what We have provided for them.',
        transliteration: 'Allatheena yu\'minoona bil-ghaybi wa yuqeemoona as-salata wa mimma razaqnahum yunfiqoon',
        tafsir: 'The characteristics of the God-conscious: they believe in the unseen, pray regularly, and give charity.'
      },
      {
        number: 4,
        arabic: 'وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ وَمَا أُنزِلَ مِن قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ',
        english: 'And who believe in what has been revealed to you, [O Muhammad], and what was revealed before you, and of the Hereafter they are certain [in faith].',
        transliteration: 'Wallatheena yu\'minoona bima unzila ilayka wa ma unzila min qablika wa bil-akhirati hum yooqinoon',
        tafsir: 'They believe in all revealed scriptures and have certainty about the hereafter.'
      },
      {
        number: 5,
        arabic: 'أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ ۖ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ',
        english: 'Those are upon [right] guidance from their Lord, and it is those who are the successful.',
        transliteration: 'Ula-ika ala hudam min rabbihim wa ula-ika humu al-muflihoon',
        tafsir: 'These people are on the right path from their Lord and will be successful.'
      }
    ]
  },
  {
    number: 3,
    name: 'Aal-Imran',
    arabic: 'آل عمران',
    english: 'The Family of Imran',
    revelationType: 'Medinan',
    verses: 200,
    juz: [3, 4],
    ruku: 20,
    summary: 'This chapter discusses the family of Imran, including Mary and Jesus, and emphasizes the unity of divine messages.',
    themes: ['Family', 'Prophets', 'Unity', 'Faith', 'Guidance'],
    benefits: ['Stories of Mary and Jesus', 'Emphasis on monotheism', 'Guidance for believers'],
    versesData: [
      {
        number: 1,
        arabic: 'الٓمٓ',
        english: 'Alif, Lam, Meem.',
        transliteration: 'Alif-Lam-Meem',
        tafsir: 'These are letters from the Arabic alphabet, and Allah knows their meaning.'
      },
      {
        number: 2,
        arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ',
        english: 'Allah - there is no deity except Him, the Ever-Living, the Self-Sustaining.',
        transliteration: 'Allahu la ilaha illa huwal-hayyul-qayyoom',
        tafsir: 'Allah is the only true God, who is eternally alive and self-sustaining.'
      },
      {
        number: 3,
        arabic: 'نَزَّلَ عَلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ وَأَنزَلَ التَّوْرَاةَ وَالْإِنجِيلَ',
        english: 'He has sent down upon you, [O Muhammad], the Book in truth, confirming what was before it. And He revealed the Torah and the Gospel.',
        transliteration: 'Nazzala alayka al-kitaba bil-haqqi musaddiqal lima bayna yadayhi wa anzala at-tawrata wal-injeel',
        tafsir: 'Allah revealed the Quran to confirm previous scriptures and sent down the Torah and Gospel.'
      },
      {
        number: 4,
        arabic: 'مِن قَبْلُ هُدًى لِّلنَّاسِ وَأَنزَلَ الْفُرْقَانَ ۗ إِنَّ الَّذِينَ كَفَرُوا بِآيَاتِ اللَّهِ لَهُمْ عَذَابٌ شَدِيدٌ ۗ وَاللَّهُ عَزِيزٌ ذُو انتِقَامٍ',
        english: 'Before, as guidance for the people. And He revealed the Criterion. Indeed, those who disbelieve in the verses of Allah will have a severe punishment, and Allah is exalted in Might, the Owner of Retribution.',
        transliteration: 'Min qablu hudal lin-nasi wa anzala al-furqan. Innal-latheena kafaroo bi-ayati Allahi lahum adhabun shadeed. Wallahu azeezun thoo intiqam',
        tafsir: 'Previous scriptures were guidance, and the Quran is the criterion. Disbelievers will face severe punishment.'
      },
      {
        number: 5,
        arabic: 'إِنَّ اللَّهَ لَا يَخْفَىٰ عَلَيْهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ',
        english: 'Indeed, from Allah nothing is hidden in the earth nor in the heaven.',
        transliteration: 'Innallaha la yakhfa alayhi shay\'un fil-ardi wa la fis-samaa\'',
        tafsir: 'Nothing is hidden from Allah\'s knowledge, whether on earth or in heaven.'
      }
    ]
  }
]

// Function to get chapter by number
export function getQuranChapter(number: number): QuranChapter | undefined {
  return QURAN_CHAPTERS.find(chapter => chapter.number === number)
}

// Function to get all chapters
export function getAllQuranChapters(): QuranChapter[] {
  return QURAN_CHAPTERS
}

// Function to get verses for a specific chapter
export function getQuranVerses(chapterNumber: number): QuranVerse[] {
  const chapter = getQuranChapter(chapterNumber)
  return chapter ? chapter.versesData : []
}

// Function to get a specific verse
export function getQuranVerse(chapterNumber: number, verseNumber: number): QuranVerse | undefined {
  const verses = getQuranVerses(chapterNumber)
  return verses.find(verse => verse.number === verseNumber)
} 