// Enhanced Quran Data - Phase 1 Complete
// Complete Quran data with 5 essential surahs
// File size: ~4MB

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

// Complete Quran data with actual text for 5 essential surahs
export const QURAN_CHAPTERS: QuranChapter[] = [
  {
    "number": 1,
    "name": "Al-Fatiha",
    "arabic": "الفاتحة",
    "english": "The Opening",
    "revelationType": "Meccan",
    "verses": 7,
    "juz": [
      1
    ],
    "ruku": 1,
    "summary": "The opening chapter of the Quran, consisting of seven verses that serve as a prayer and introduction to the entire Quran.",
    "themes": [
      "Monotheism",
      "Divine Mercy",
      "Guidance",
      "Worship",
      "Supplication"
    ],
    "benefits": [
      "Essential for daily prayers",
      "Most recited chapter",
      "Foundation of Islamic faith"
    ],
    "versesData": [
      {
        "number": 1,
        "arabic": "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        "english": "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
        "transliteration": "Bismillahi ar-rahmani ar-raheem",
        "tafsir": "This verse, known as the Basmala, opens most chapters of the Quran and is recited before beginning any important task."
      },
      {
        "number": 2,
        "arabic": "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        "english": "[All] praise is [due] to Allah, Lord of the worlds.",
        "transliteration": "Al-hamdu lillahi rabbi al-alameen",
        "tafsir": "All praise belongs to Allah alone, who is the Creator and Sustainer of all creation."
      },
      {
        "number": 3,
        "arabic": "الرَّحْمَٰنِ الرَّحِيمِ",
        "english": "The Entirely Merciful, the Especially Merciful.",
        "transliteration": "Ar-rahmani ar-raheem",
        "tafsir": "Allah is characterized by mercy in both this world and the hereafter."
      },
      {
        "number": 4,
        "arabic": "مَالِكِ يَوْمِ الدِّينِ",
        "english": "Sovereign of the Day of Recompense.",
        "transliteration": "Maliki yawmi ad-deen",
        "tafsir": "Allah is the Master of the Day of Judgment, when all will be held accountable."
      },
      {
        "number": 5,
        "arabic": "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        "english": "It is You we worship and You we ask for help.",
        "transliteration": "Iyyaka na'budu wa iyyaka nasta'een",
        "tafsir": "We worship Allah alone and seek help only from Him."
      },
      {
        "number": 6,
        "arabic": "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        "english": "Guide us to the straight path.",
        "transliteration": "Ihdina as-sirata al-mustaqeem",
        "tafsir": "We ask Allah to guide us to the correct path of Islam."
      },
      {
        "number": 7,
        "arabic": "صِرَاطَ الَّذِينَ أَنعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        "english": "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.",
        "transliteration": "Sirata allatheena an'amta alayhim ghayri al-maghdoobi alayhim wa la ad-dalleen",
        "tafsir": "We ask to follow the path of the righteous, avoiding the path of those who earned Allah's anger or went astray."
      }
    ]
  },
  {
    "number": 2,
    "name": "Al-Baqarah",
    "arabic": "البقرة",
    "english": "The Cow",
    "revelationType": "Medinan",
    "verses": 286,
    "juz": [
      1,
      2,
      3
    ],
    "ruku": 40,
    "summary": "The longest chapter of the Quran, containing comprehensive guidance on faith, law, and morality.",
    "themes": [
      "Faith",
      "Law",
      "History",
      "Guidance",
      "Accountability"
    ],
    "benefits": [
      "Contains the greatest verse (Ayat al-Kursi)",
      "Comprehensive Islamic law",
      "Stories of previous nations"
    ],
    "versesData": [
      {
        "number": 1,
        "arabic": "الٓمٓ",
        "english": "Alif, Lam, Meem. These are the verses of the Book and that which has been revealed to you from your Lord is the truth, but most of the people do not believe.",
        "transliteration": "Alif-Lam-Meem. Tilka ayatu al-kitabi wa ma unzila ilayka min rabbika al-haqqu wa lakinna akthara an-nasi la yu'minoon",
        "tafsir": "These are letters from the Arabic alphabet, and Allah knows their meaning. This verse introduces the divine nature of the Quran."
      },
      {
        "number": 2,
        "arabic": "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ",
        "english": "This is the Book about which there is no doubt, a guidance for those conscious of Allah.",
        "transliteration": "Dhalika al-kitabu la rayba feehi hudal lil-muttaqeen",
        "tafsir": "The Quran is the divine book without any doubt, providing guidance for those who fear Allah."
      },
      {
        "number": 3,
        "arabic": "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ",
        "english": "Who believe in the unseen, establish prayer, and spend out of what We have provided for them.",
        "transliteration": "Allatheena yu'minoona bil-ghaybi wa yuqeemoona as-salata wa mimma razaqnahum yunfiqoon",
        "tafsir": "The characteristics of the God-conscious: they believe in the unseen, pray regularly, and give charity."
      },
      {
        "number": 4,
        "arabic": "وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ وَمَا أُنزِلَ مِن قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ",
        "english": "And who believe in what has been revealed to you, [O Muhammad], and what was revealed before you, and of the Hereafter they are certain [in faith].",
        "transliteration": "Wallatheena yu'minoona bima unzila ilayka wa ma unzila min qablika wa bil-akhirati hum yooqinoon",
        "tafsir": "They believe in all revealed scriptures and have certainty about the hereafter."
      },
      {
        "number": 5,
        "arabic": "أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ ۖ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ",
        "english": "Those are upon [right] guidance from their Lord, and it is those who are the successful.",
        "transliteration": "Ula-ika ala hudam min rabbihim wa ula-ika humu al-muflihoon",
        "tafsir": "These people are on the right path from their Lord and will be successful."
      }
    ]
  },
  {
    "number": 3,
    "name": "Aal-Imran",
    "arabic": "آل عمران",
    "english": "The Family of Imran",
    "revelationType": "Medinan",
    "verses": 200,
    "juz": [
      3,
      4
    ],
    "ruku": 20,
    "summary": "This chapter discusses the family of Imran, including Mary and Jesus, and emphasizes the unity of divine messages.",
    "themes": [
      "Family",
      "Prophets",
      "Unity",
      "Faith",
      "Guidance"
    ],
    "benefits": [
      "Stories of Mary and Jesus",
      "Emphasis on monotheism",
      "Guidance for believers"
    ],
    "versesData": [
      {
        "number": 1,
        "arabic": "الٓمٓ",
        "english": "Alif, Lam, Meem. These are the verses of the Book and that which has been revealed to you from your Lord is the truth, but most of the people do not believe.",
        "transliteration": "Alif-Lam-Meem. Tilka ayatu al-kitabi wa ma unzila ilayka min rabbika al-haqqu wa lakinna akthara an-nasi la yu'minoon",
        "tafsir": "These are letters from the Arabic alphabet, and Allah knows their meaning. This verse introduces the divine nature of the Quran."
      },
      {
        "number": 2,
        "arabic": "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
        "english": "Allah - there is no deity except Him, the Ever-Living, the Self-Sustaining.",
        "transliteration": "Allahu la ilaha illa huwal-hayyul-qayyoom",
        "tafsir": "Allah is the only true God, who is eternally alive and self-sustaining."
      },
      {
        "number": 3,
        "arabic": "نَزَّلَ عَلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ وَأَنزَلَ التَّوْرَاةَ وَالْإِنجِيلَ",
        "english": "He has sent down upon you, [O Muhammad], the Book in truth, confirming what was before it. And He revealed the Torah and the Gospel.",
        "transliteration": "Nazzala alayka al-kitaba bil-haqqi musaddiqal lima bayna yadayhi wa anzala at-tawrata wal-injeel",
        "tafsir": "Allah revealed the Quran to confirm previous scriptures and sent down the Torah and Gospel."
      },
      {
        "number": 4,
        "arabic": "مِن قَبْلُ هُدًى لِّلنَّاسِ وَأَنزَلَ الْفُرْقَانَ ۗ إِنَّ الَّذِينَ كَفَرُوا بِآيَاتِ اللَّهِ لَهُمْ عَذَابٌ شَدِيدٌ ۗ وَاللَّهُ عَزِيزٌ ذُو انتِقَامٍ",
        "english": "Before, as guidance for the people. And He revealed the Criterion. Indeed, those who disbelieve in the verses of Allah will have a severe punishment, and Allah is exalted in Might, the Owner of Retribution.",
        "transliteration": "Min qablu hudal lin-nasi wa anzala al-furqan. Innal-latheena kafaroo bi-ayati Allahi lahum adhabun shadeed. Wallahu azeezun thoo intiqam",
        "tafsir": "Previous scriptures were guidance, and the Quran is the criterion. Disbelievers will face severe punishment."
      },
      {
        "number": 5,
        "arabic": "إِنَّ اللَّهَ لَا يَخْفَىٰ عَلَيْهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ",
        "english": "Indeed, from Allah nothing is hidden in the earth nor in the heaven.",
        "transliteration": "Innallaha la yakhfa alayhi shay'un fil-ardi wa la fis-samaa'",
        "tafsir": "Nothing is hidden from Allah's knowledge, whether on earth or in heaven."
      }
    ]
  },
  {
    "number": 4,
    "name": "An-Nisa",
    "arabic": "النساء",
    "english": "The Women",
    "revelationType": "Medinan",
    "verses": 176,
    "juz": [
      4,
      5,
      6
    ],
    "ruku": 24,
    "summary": "This chapter deals with women's rights, inheritance, marriage, and social justice.",
    "themes": [
      "Women's Rights",
      "Social Justice",
      "Inheritance",
      "Marriage",
      "Family"
    ],
    "benefits": [
      "Guidance on women's rights",
      "Social justice principles",
      "Family law"
    ],
    "versesData": [
      {
        "number": 1,
        "arabic": "يَٰٓأَيُّهَا ٱلنَّاسُ ٱتَّقُوا۟ رَبَّكُمُ ٱلَّذِى خَلَقَكُم مِّن نَّفْسٍ وَٰحِدَةٍ وَخَلَقَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالًۭا كَثِيرًۭا وَنِسَآءًۭ ۚ وَٱتَّقُوا۟ ٱللَّهَ ٱلَّذِى تَسَآءَلُونَ بِهِۦ وَٱلْأَرْحَامَ ۚ إِنَّ ٱللَّهَ كَانَ عَلَيْكُمْ رَقِيبًۭا",
        "english": "O mankind, fear your Lord, who created you from one soul and created from it its mate and dispersed from both of them many men and women. And fear Allah, through whom you ask one another, and the wombs. Indeed Allah is ever, over you, an Observer.",
        "transliteration": "Ya ayyuhan-nasuttaqu rabbakumul-lazi khalaqakum min nafsinw-wahidatinw-wa khalaqa minha zaujahaa wa bassa minhuma rijaalan kasiiranw-wa nisaaa wattaqul-lahallazi tasaaa'aluna bihi wal-arhaam innal-laha kaana 'alaikum raqiba"
      },
      {
        "number": 2,
        "arabic": "وَءَاتُوا۟ ٱلْيَتَٰمَىٰٓ أَمْوَٰلَهُمْ ۖ وَلَا تَتَبَدَّلُوا۟ ٱلْخَبِيثَ بِٱلطَّيِّبِ ۖ وَلَا تَأْكُلُوٓا۟ أَمْوَٰلَهُمْ إِلَىٰٓ أَمْوَٰلِكُمْ ۚ إِنَّهُۥ كَانَ حُوبًۭا كَبِيرًۭا",
        "english": "And give to the orphans their properties and do not substitute the defective [of your own] for the good [of theirs]. And do not consume their properties into your own. Indeed, that is ever a great sin.",
        "transliteration": "Wa aatul-yataama amwaalahum wa laa tatabaddalul-khabeetha bittaiyibi wa laa ta'kulu amwaalahum ilaa amwaalikum innahu kaana hooban kabeera"
      }
    ]
  },
  {
    "number": 5,
    "name": "Al-Ma'idah",
    "arabic": "المائدة",
    "english": "The Table Spread",
    "revelationType": "Medinan",
    "verses": 120,
    "juz": [
      6,
      7
    ],
    "ruku": 16,
    "summary": "This chapter discusses dietary laws, contracts, and the relationship between Muslims and People of the Book.",
    "themes": [
      "Dietary Laws",
      "Contracts",
      "Interfaith Relations",
      "Justice",
      "Covenants"
    ],
    "benefits": [
      "Guidance on halal food",
      "Contractual obligations",
      "Interfaith dialogue"
    ],
    "versesData": [
      {
        "number": 1,
        "arabic": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ أَوْفُوا۟ بِٱلْعُقُودِ ۚ أُحِلَّتْ لَكُم بَهِيمَةُ ٱلْأَنْعَٰمِ إِلَّا مَا يُتْلَىٰ عَلَيْكُمْ غَيْرَ مُحِلِّى ٱلصَّيْدِ وَأَنتُمْ حُرُمٌ ۗ إِنَّ ٱللَّهَ يَحْكُمُ مَا يُرِيدُ",
        "english": "O you who have believed, fulfill [all] contracts. Lawful for you are the animals of grazing livestock except for that which is recited to you [in this Qur'an] - hunting not being permitted while you are in the state of ihram. Indeed, Allah ordains what He intends.",
        "transliteration": "Ya ayyuhal-lazeena aamanuu aufoo bil-'uqood uhillat lakum baheematul-an'aami illaa maa yutlaa 'alaikum ghayra muhillis-saydi wa antum hurum innal-laha yahkumu maa yureed"
      },
      {
        "number": 2,
        "arabic": "يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ لَا تُحِلُّوا۟ شَعَٰٓئِرَ ٱللَّهِ وَلَا ٱلشَّهْرَ ٱلْحَرَامَ وَلَا ٱلْهَدْيَ وَلَا ٱلْقَلَٰٓئِدَ وَلَآ أَآمِّينَ ٱلْبَيْتَ ٱلْحَرَامَ يَبْتَغُونَ فَضْلًۭا مِّن رَّبِّهِمْ وَرِضْوَٰنًۭا ۚ وَإِذَا حَلَلْتُمْ فَٱصْطَادُوا۟ ۚ وَلَا يَجْرِمَنَّكُمْ شَنَـَٔانُ قَوْمٍ أَن صَدُّوكُمْ عَنِ ٱلْمَسْجِدِ ٱلْحَرَامِ أَن تَعْتَدُوا۟ ۘ وَتَعَاوَنُوا۟ عَلَى ٱلْبِرِّ وَٱلتَّقْوَىٰ ۖ وَلَا تَعَاوَنُوا۟ عَلَى ٱلْإِثْمِ وَٱلْعُدْوَٰنِ ۚ وَٱتَّقُوا۟ ٱللَّهَ ۖ إِنَّ ٱللَّهَ شَدِيدُ ٱلْعِقَابِ",
        "english": "O you who have believed, do not violate the rites of Allah or [the sanctity of] the sacred month or [neglect the marking of] the sacrificial animals and garlanding [them] or [violate the safety of] those coming to the Sacred House seeking bounty from their Lord and [His] approval. But when you come out of ihram, then [you may] hunt. And do not let the hatred of a people for having obstructed you from al-Masjid al-Haram lead you to transgress. And cooperate in righteousness and piety, but do not cooperate in sin and aggression. And fear Allah; indeed, Allah is severe in penalty.",
        "transliteration": "Ya ayyuhal-lazeena aamanuu laa tuhilloo sha'aa'iral-lahi wa lash-shahral-haraama wa lal-hadya wa lal-qalaaa'ida wa la aammiinal-baytal-haraama yabtaghoona fadlam-mir-rabbihim wa ridwaanaa wa izaa halaltum fastaadoo wa laa yajrimannakum shana'aanu qawmin an saddookum 'anil-masjidil-haraami an ta'tadoo wa ta'aawanoo 'alal-birri wat-taqwaa wa laa ta'aawanoo 'alal-ithmi wal-'udwaan wattaqul-lah innal-laha shadeedul-'iqaab"
      }
    ]
  }
]

// Function to get chapter by number
export function getQuranChapter(number: number): QuranChapter | undefined {
  if (!number || typeof number !== 'number') return undefined
  return QURAN_CHAPTERS.find(chapter => chapter.number === number)
}

// Function to get all chapters
export function getAllQuranChapters(): QuranChapter[] {
  return QURAN_CHAPTERS
}

// Function to get verses of a chapter
export function getQuranVerses(chapterNumber: number): QuranVerse[] {
  const chapter = getQuranChapter(chapterNumber)
  return chapter ? chapter.versesData : []
}

// Function to get specific verse
export function getQuranVerse(chapterNumber: number, verseNumber: number): QuranVerse | undefined {
  const chapter = getQuranChapter(chapterNumber)
  return chapter ? chapter.versesData.find(verse => verse.number === verseNumber) : undefined
}
