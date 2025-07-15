import quranDataJson from '@/data/quran-data.json'

export interface QuranSurah {
  id: number
  name: string
  arabicName: string
  englishName: string
  revelationType: 'Meccan' | 'Medinan'
  verses: number
  juz: number[]
  ruku: number
}

export interface QuranVerse {
  arabic: string
  translation: string
  transliteration: string
}

export interface ComprehensiveQuranSurah {
  name: string
  name_arabic: string
  name_translation: string
  revelation_type: 'Meccan' | 'Medinan'
  verses_count: number
  verses: Record<string, QuranVerse>
}

export interface ComprehensiveQuranData {
  [surahNumber: string]: ComprehensiveQuranSurah
}

export const QURAN_SURAHS: QuranSurah[] = [
  { id: 1, name: 'al-fatiha', arabicName: 'الفاتحة', englishName: 'The Opening', revelationType: 'Meccan', verses: 7, juz: [1], ruku: 1 },
  { id: 2, name: 'al-baqarah', arabicName: 'البقرة', englishName: 'The Cow', revelationType: 'Medinan', verses: 286, juz: [1, 2, 3], ruku: 40 },
  { id: 3, name: 'al-imran', arabicName: 'آل عمران', englishName: 'The Family of Imran', revelationType: 'Medinan', verses: 200, juz: [3, 4], ruku: 20 },
  { id: 4, name: 'an-nisa', arabicName: 'النساء', englishName: 'The Women', revelationType: 'Medinan', verses: 176, juz: [4, 5, 6], ruku: 24 },
  { id: 5, name: 'al-maidah', arabicName: 'المائدة', englishName: 'The Table Spread', revelationType: 'Medinan', verses: 120, juz: [6, 7], ruku: 16 },
  { id: 6, name: 'al-anam', arabicName: 'الأنعام', englishName: 'The Cattle', revelationType: 'Meccan', verses: 165, juz: [7, 8], ruku: 20 },
  { id: 7, name: 'al-araf', arabicName: 'الأعراف', englishName: 'The Heights', revelationType: 'Meccan', verses: 206, juz: [8, 9], ruku: 24 },
  { id: 8, name: 'al-anfal', arabicName: 'الأنفال', englishName: 'The Spoils of War', revelationType: 'Medinan', verses: 75, juz: [9, 10], ruku: 10 },
  { id: 9, name: 'at-tawbah', arabicName: 'التوبة', englishName: 'The Repentance', revelationType: 'Medinan', verses: 129, juz: [10, 11], ruku: 16 },
  { id: 10, name: 'yunus', arabicName: 'يونس', englishName: 'Jonah', revelationType: 'Meccan', verses: 109, juz: [11], ruku: 11 },
  { id: 11, name: 'hud', arabicName: 'هود', englishName: 'Hud', revelationType: 'Meccan', verses: 123, juz: [11, 12], ruku: 10 },
  { id: 12, name: 'yusuf', arabicName: 'يوسف', englishName: 'Joseph', revelationType: 'Meccan', verses: 111, juz: [12, 13], ruku: 12 },
  { id: 13, name: 'ar-rad', arabicName: 'الرعد', englishName: 'The Thunder', revelationType: 'Medinan', verses: 43, juz: [13], ruku: 6 },
  { id: 14, name: 'ibrahim', arabicName: 'إبراهيم', englishName: 'Abraham', revelationType: 'Meccan', verses: 52, juz: [13], ruku: 7 },
  { id: 15, name: 'al-hijr', arabicName: 'الحجر', englishName: 'The Rocky Tract', revelationType: 'Meccan', verses: 99, juz: [14], ruku: 6 },
  { id: 16, name: 'an-nahl', arabicName: 'النحل', englishName: 'The Bee', revelationType: 'Meccan', verses: 128, juz: [14], ruku: 16 },
  { id: 17, name: 'al-isra', arabicName: 'الإسراء', englishName: 'The Night Journey', revelationType: 'Meccan', verses: 111, juz: [15], ruku: 12 },
  { id: 18, name: 'al-kahf', arabicName: 'الكهف', englishName: 'The Cave', revelationType: 'Meccan', verses: 110, juz: [15, 16], ruku: 12 },
  { id: 19, name: 'maryam', arabicName: 'مريم', englishName: 'Mary', revelationType: 'Meccan', verses: 98, juz: [16], ruku: 6 },
  { id: 20, name: 'ta-ha', arabicName: 'طه', englishName: 'Ta-Ha', revelationType: 'Meccan', verses: 135, juz: [16], ruku: 8 },
  { id: 21, name: 'al-anbiya', arabicName: 'الأنبياء', englishName: 'The Prophets', revelationType: 'Meccan', verses: 112, juz: [17], ruku: 7 },
  { id: 22, name: 'al-hajj', arabicName: 'الحج', englishName: 'The Pilgrimage', revelationType: 'Medinan', verses: 78, juz: [17], ruku: 10 },
  { id: 23, name: 'al-muminun', arabicName: 'المؤمنون', englishName: 'The Believers', revelationType: 'Meccan', verses: 118, juz: [18], ruku: 6 },
  { id: 24, name: 'an-nur', arabicName: 'النور', englishName: 'The Light', revelationType: 'Medinan', verses: 64, juz: [18], ruku: 9 },
  { id: 25, name: 'al-furqan', arabicName: 'الفرقان', englishName: 'The Criterion', revelationType: 'Meccan', verses: 77, juz: [19], ruku: 6 },
  { id: 26, name: 'ash-shuara', arabicName: 'الشعراء', englishName: 'The Poets', revelationType: 'Meccan', verses: 227, juz: [19], ruku: 11 },
  { id: 27, name: 'an-naml', arabicName: 'النمل', englishName: 'The Ant', revelationType: 'Meccan', verses: 93, juz: [19, 20], ruku: 7 },
  { id: 28, name: 'al-qasas', arabicName: 'القصص', englishName: 'The Stories', revelationType: 'Meccan', verses: 88, juz: [20], ruku: 9 },
  { id: 29, name: 'al-ankabut', arabicName: 'العنكبوت', englishName: 'The Spider', revelationType: 'Meccan', verses: 69, juz: [20, 21], ruku: 7 },
  { id: 30, name: 'ar-rum', arabicName: 'الروم', englishName: 'The Romans', revelationType: 'Meccan', verses: 60, juz: [21], ruku: 6 },
  { id: 31, name: 'luqman', arabicName: 'لقمان', englishName: 'Luqman', revelationType: 'Meccan', verses: 34, juz: [21], ruku: 4 },
  { id: 32, name: 'as-sajdah', arabicName: 'السجدة', englishName: 'The Prostration', revelationType: 'Meccan', verses: 30, juz: [21], ruku: 3 },
  { id: 33, name: 'al-ahzab', arabicName: 'الأحزاب', englishName: 'The Combined Forces', revelationType: 'Medinan', verses: 73, juz: [21, 22], ruku: 9 },
  { id: 34, name: 'saba', arabicName: 'سبإ', englishName: 'Sheba', revelationType: 'Meccan', verses: 54, juz: [22], ruku: 6 },
  { id: 35, name: 'fatir', arabicName: 'فاطر', englishName: 'Originator', revelationType: 'Meccan', verses: 45, juz: [22], ruku: 5 },
  { id: 36, name: 'ya-sin', arabicName: 'يس', englishName: 'Ya-Sin', revelationType: 'Meccan', verses: 83, juz: [22, 23], ruku: 5 },
  { id: 37, name: 'as-saffat', arabicName: 'الصافات', englishName: 'Those Who Set The Ranks', revelationType: 'Meccan', verses: 182, juz: [23], ruku: 5 },
  { id: 38, name: 'sad', arabicName: 'ص', englishName: 'The Letter "Saad"', revelationType: 'Meccan', verses: 88, juz: [23], ruku: 5 },
  { id: 39, name: 'az-zumar', arabicName: 'الزمر', englishName: 'The Troops', revelationType: 'Meccan', verses: 75, juz: [23, 24], ruku: 8 },
  { id: 40, name: 'ghafir', arabicName: 'غافر', englishName: 'The Forgiver', revelationType: 'Meccan', verses: 85, juz: [24], ruku: 9 },
  { id: 41, name: 'fussilat', arabicName: 'فصلت', englishName: 'Explained in Detail', revelationType: 'Meccan', verses: 54, juz: [24, 25], ruku: 6 },
  { id: 42, name: 'ash-shura', arabicName: 'الشورى', englishName: 'The Consultation', revelationType: 'Meccan', verses: 53, juz: [25], ruku: 5 },
  { id: 43, name: 'az-zukhruf', arabicName: 'الزخرف', englishName: 'The Ornaments of Gold', revelationType: 'Meccan', verses: 89, juz: [25], ruku: 7 },
  { id: 44, name: 'ad-dukhan', arabicName: 'الدخان', englishName: 'The Smoke', revelationType: 'Meccan', verses: 59, juz: [25], ruku: 3 },
  { id: 45, name: 'al-jathiyah', arabicName: 'الجاثية', englishName: 'The Kneeling', revelationType: 'Meccan', verses: 37, juz: [25], ruku: 4 },
  { id: 46, name: 'al-ahqaf', arabicName: 'الأحقاف', englishName: 'The Wind-Curved Sandhills', revelationType: 'Meccan', verses: 35, juz: [26], ruku: 4 },
  { id: 47, name: 'muhammad', arabicName: 'محمد', englishName: 'Muhammad', revelationType: 'Medinan', verses: 38, juz: [26], ruku: 4 },
  { id: 48, name: 'al-fath', arabicName: 'الفتح', englishName: 'The Victory', revelationType: 'Medinan', verses: 29, juz: [26], ruku: 4 },
  { id: 49, name: 'al-hujurat', arabicName: 'الحجرات', englishName: 'The Private Apartments', revelationType: 'Medinan', verses: 18, juz: [26], ruku: 2 },
  { id: 50, name: 'qaf', arabicName: 'ق', englishName: 'The Letter "Qaf"', revelationType: 'Meccan', verses: 45, juz: [26], ruku: 3 },
  { id: 51, name: 'ad-dhariyat', arabicName: 'الذاريات', englishName: 'The Winnowing Winds', revelationType: 'Meccan', verses: 60, juz: [26, 27], ruku: 3 },
  { id: 52, name: 'at-tur', arabicName: 'الطور', englishName: 'The Mount', revelationType: 'Meccan', verses: 49, juz: [27], ruku: 2 },
  { id: 53, name: 'an-najm', arabicName: 'النجم', englishName: 'The Star', revelationType: 'Meccan', verses: 62, juz: [27], ruku: 3 },
  { id: 54, name: 'al-qamar', arabicName: 'القمر', englishName: 'The Moon', revelationType: 'Meccan', verses: 55, juz: [27], ruku: 3 },
  { id: 55, name: 'ar-rahman', arabicName: 'الرحمن', englishName: 'The Beneficent', revelationType: 'Medinan', verses: 78, juz: [27], ruku: 3 },
  { id: 56, name: 'al-waqiah', arabicName: 'الواقعة', englishName: 'The Inevitable', revelationType: 'Meccan', verses: 96, juz: [27], ruku: 3 },
  { id: 57, name: 'al-hadid', arabicName: 'الحديد', englishName: 'The Iron', revelationType: 'Medinan', verses: 29, juz: [27], ruku: 4 },
  { id: 58, name: 'al-mujadila', arabicName: 'المجادلة', englishName: 'The Pleading Woman', revelationType: 'Medinan', verses: 22, juz: [28], ruku: 3 },
  { id: 59, name: 'al-hashr', arabicName: 'الحشر', englishName: 'The Exile', revelationType: 'Medinan', verses: 24, juz: [28], ruku: 3 },
  { id: 60, name: 'al-mumtahanah', arabicName: 'الممتحنة', englishName: 'The Woman to be Examined', revelationType: 'Medinan', verses: 13, juz: [28], ruku: 2 },
  { id: 61, name: 'as-saf', arabicName: 'الصف', englishName: 'The Ranks', revelationType: 'Medinan', verses: 14, juz: [28], ruku: 2 },
  { id: 62, name: 'al-jumuah', arabicName: 'الجمعة', englishName: 'The Congregation, Friday', revelationType: 'Medinan', verses: 11, juz: [28], ruku: 2 },
  { id: 63, name: 'al-munafiqun', arabicName: 'المنافقون', englishName: 'The Hypocrites', revelationType: 'Medinan', verses: 11, juz: [28], ruku: 2 },
  { id: 64, name: 'at-taghabun', arabicName: 'التغابن', englishName: 'The Mutual Disillusion', revelationType: 'Medinan', verses: 18, juz: [28], ruku: 2 },
  { id: 65, name: 'at-talaq', arabicName: 'الطلاق', englishName: 'Divorce', revelationType: 'Medinan', verses: 12, juz: [28], ruku: 2 },
  { id: 66, name: 'at-tahrim', arabicName: 'التحريم', englishName: 'The Prohibition', revelationType: 'Medinan', verses: 12, juz: [28], ruku: 2 },
  { id: 67, name: 'al-mulk', arabicName: 'الملك', englishName: 'The Sovereignty', revelationType: 'Meccan', verses: 30, juz: [29], ruku: 2 },
  { id: 68, name: 'al-qalam', arabicName: 'القلم', englishName: 'The Pen', revelationType: 'Meccan', verses: 52, juz: [29], ruku: 2 },
  { id: 69, name: 'al-haqqah', arabicName: 'الحاقة', englishName: 'The Reality', revelationType: 'Meccan', verses: 52, juz: [29], ruku: 2 },
  { id: 70, name: 'al-maarij', arabicName: 'المعارج', englishName: 'The Ascending Stairways', revelationType: 'Meccan', verses: 44, juz: [29], ruku: 2 },
  { id: 71, name: 'nuh', arabicName: 'نوح', englishName: 'Noah', revelationType: 'Meccan', verses: 28, juz: [29], ruku: 2 },
  { id: 72, name: 'al-jinn', arabicName: 'الجن', englishName: 'The Jinn', revelationType: 'Meccan', verses: 28, juz: [29], ruku: 2 },
  { id: 73, name: 'al-muzzammil', arabicName: 'المزمل', englishName: 'The Enshrouded One', revelationType: 'Meccan', verses: 20, juz: [29], ruku: 2 },
  { id: 74, name: 'al-muddathir', arabicName: 'المدثر', englishName: 'The Cloaked One', revelationType: 'Meccan', verses: 56, juz: [29], ruku: 2 },
  { id: 75, name: 'al-qiyamah', arabicName: 'القيامة', englishName: 'The Resurrection', revelationType: 'Meccan', verses: 40, juz: [29], ruku: 2 },
  { id: 76, name: 'al-insan', arabicName: 'الإنسان', englishName: 'Man', revelationType: 'Medinan', verses: 31, juz: [29], ruku: 2 },
  { id: 77, name: 'al-mursalat', arabicName: 'المرسلات', englishName: 'The Emissaries', revelationType: 'Meccan', verses: 50, juz: [29], ruku: 2 },
  { id: 78, name: 'an-naba', arabicName: 'النبإ', englishName: 'The Tidings', revelationType: 'Meccan', verses: 40, juz: [30], ruku: 2 },
  { id: 79, name: 'an-naziat', arabicName: 'النازعات', englishName: 'Those Who Drag Forth', revelationType: 'Meccan', verses: 46, juz: [30], ruku: 2 },
  { id: 80, name: 'abasa', arabicName: 'عبس', englishName: 'He Frowned', revelationType: 'Meccan', verses: 42, juz: [30], ruku: 1 },
  { id: 81, name: 'at-takwir', arabicName: 'التكوير', englishName: 'The Overthrowing', revelationType: 'Meccan', verses: 29, juz: [30], ruku: 1 },
  { id: 82, name: 'al-infitar', arabicName: 'الإنفطار', englishName: 'The Cleaving', revelationType: 'Meccan', verses: 19, juz: [30], ruku: 1 },
  { id: 83, name: 'al-mutaffifin', arabicName: 'المطففين', englishName: 'The Defrauding', revelationType: 'Meccan', verses: 36, juz: [30], ruku: 1 },
  { id: 84, name: 'al-inshiqaq', arabicName: 'الإنشقاق', englishName: 'The Splitting Open', revelationType: 'Meccan', verses: 25, juz: [30], ruku: 1 },
  { id: 85, name: 'al-buruj', arabicName: 'البروج', englishName: 'The Mansions of the Stars', revelationType: 'Meccan', verses: 22, juz: [30], ruku: 1 },
  { id: 86, name: 'at-tariq', arabicName: 'الطارق', englishName: 'The Morning Star', revelationType: 'Meccan', verses: 17, juz: [30], ruku: 1 },
  { id: 87, name: 'al-ala', arabicName: 'الأعلى', englishName: 'The Most High', revelationType: 'Meccan', verses: 19, juz: [30], ruku: 1 },
  { id: 88, name: 'al-ghashiyah', arabicName: 'الغاشية', englishName: 'The Overwhelming', revelationType: 'Meccan', verses: 26, juz: [30], ruku: 1 },
  { id: 89, name: 'al-fajr', arabicName: 'الفجر', englishName: 'The Dawn', revelationType: 'Meccan', verses: 30, juz: [30], ruku: 1 },
  { id: 90, name: 'al-balad', arabicName: 'البلد', englishName: 'The City', revelationType: 'Meccan', verses: 20, juz: [30], ruku: 1 },
  { id: 91, name: 'ash-shams', arabicName: 'الشمس', englishName: 'The Sun', revelationType: 'Meccan', verses: 15, juz: [30], ruku: 1 },
  { id: 92, name: 'al-layl', arabicName: 'الليل', englishName: 'The Night', revelationType: 'Meccan', verses: 21, juz: [30], ruku: 1 },
  { id: 93, name: 'ad-duha', arabicName: 'الضحى', englishName: 'The Morning Hours', revelationType: 'Meccan', verses: 11, juz: [30], ruku: 1 },
  { id: 94, name: 'ash-sharh', arabicName: 'الشرح', englishName: 'The Relief', revelationType: 'Meccan', verses: 8, juz: [30], ruku: 1 },
  { id: 95, name: 'at-tin', arabicName: 'التين', englishName: 'The Fig', revelationType: 'Meccan', verses: 8, juz: [30], ruku: 1 },
  { id: 96, name: 'al-alaq', arabicName: 'العلق', englishName: 'The Clot', revelationType: 'Meccan', verses: 19, juz: [30], ruku: 1 },
  { id: 97, name: 'al-qadr', arabicName: 'القدر', englishName: 'The Power', revelationType: 'Meccan', verses: 5, juz: [30], ruku: 1 },
  { id: 98, name: 'al-bayyinah', arabicName: 'البينة', englishName: 'The Clear Proof', revelationType: 'Medinan', verses: 8, juz: [30], ruku: 1 },
  { id: 99, name: 'az-zalzalah', arabicName: 'الزلزلة', englishName: 'The Earthquake', revelationType: 'Medinan', verses: 8, juz: [30], ruku: 1 },
  { id: 100, name: 'al-adiyat', arabicName: 'العاديات', englishName: 'The Coursers', revelationType: 'Meccan', verses: 11, juz: [30], ruku: 1 },
  { id: 101, name: 'al-qariah', arabicName: 'القارعة', englishName: 'The Calamity', revelationType: 'Meccan', verses: 11, juz: [30], ruku: 1 },
  { id: 102, name: 'at-takathur', arabicName: 'التكاثر', englishName: 'The Rivalry in World Increase', revelationType: 'Meccan', verses: 8, juz: [30], ruku: 1 },
  { id: 103, name: 'al-asr', arabicName: 'العصر', englishName: 'The Declining Day', revelationType: 'Meccan', verses: 3, juz: [30], ruku: 1 },
  { id: 104, name: 'al-humazah', arabicName: 'الهمزة', englishName: 'The Traducer', revelationType: 'Meccan', verses: 9, juz: [30], ruku: 1 },
  { id: 105, name: 'al-fil', arabicName: 'الفيل', englishName: 'The Elephant', revelationType: 'Meccan', verses: 5, juz: [30], ruku: 1 },
  { id: 106, name: 'quraysh', arabicName: 'قريش', englishName: 'Quraysh', revelationType: 'Meccan', verses: 4, juz: [30], ruku: 1 },
  { id: 107, name: 'al-maun', arabicName: 'الماعون', englishName: 'The Small Kindnesses', revelationType: 'Meccan', verses: 7, juz: [30], ruku: 1 },
  { id: 108, name: 'al-kawthar', arabicName: 'الكوثر', englishName: 'The Abundance', revelationType: 'Meccan', verses: 3, juz: [30], ruku: 1 },
  { id: 109, name: 'al-kafirun', arabicName: 'الكافرون', englishName: 'The Disbelievers', revelationType: 'Meccan', verses: 6, juz: [30], ruku: 1 },
  { id: 110, name: 'an-nasr', arabicName: 'النصر', englishName: 'The Divine Support', revelationType: 'Medinan', verses: 3, juz: [30], ruku: 1 },
  { id: 111, name: 'al-masad', arabicName: 'المسد', englishName: 'The Palm Fiber', revelationType: 'Meccan', verses: 5, juz: [30], ruku: 1 },
  { id: 112, name: 'al-ikhlas', arabicName: 'الإخلاص', englishName: 'The Sincerity', revelationType: 'Meccan', verses: 4, juz: [30], ruku: 1 },
  { id: 113, name: 'al-falaq', arabicName: 'الفلق', englishName: 'The Daybreak', revelationType: 'Meccan', verses: 5, juz: [30], ruku: 1 },
  { id: 114, name: 'an-nas', arabicName: 'الناس', englishName: 'Mankind', revelationType: 'Meccan', verses: 6, juz: [30], ruku: 1 }
]

// New function to get comprehensive Quran data
export function getQuranData(): ComprehensiveQuranData {
  return quranDataJson as ComprehensiveQuranData
}

export function getQuranSurah(surahId: number): QuranSurah | undefined {
  return QURAN_SURAHS.find(surah => surah.id === surahId)
}

export function getAllQuranSurahs(): QuranSurah[] {
  return QURAN_SURAHS
}

export function getMeccanSurahs(): QuranSurah[] {
  return QURAN_SURAHS.filter(surah => surah.revelationType === 'Meccan')
}

export function getMedinanSurahs(): QuranSurah[] {
  return QURAN_SURAHS.filter(surah => surah.revelationType === 'Medinan')
}

export function getSurahsByJuz(juz: number): QuranSurah[] {
  return QURAN_SURAHS.filter(surah => surah.juz.includes(juz))
} 