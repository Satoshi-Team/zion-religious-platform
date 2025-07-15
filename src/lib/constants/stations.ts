import { Station } from "@/types/station"

export const LANGUAGES = {
  all: '🌐',
  en: '🇺🇸',
  es: '🇪🇸',
  fr: '🇫🇷',
  de: '🇩🇪',
  it: '🇮🇹',
  pt: '🇵🇹',
  ru: '🇷🇺',
  ar: '🇸🇦',
  hi: '🇮🇳',
  zh: '🇨🇳',
  ja: '🇯🇵',
  ko: '🇰🇷',
  sa: '🕉️', // Sanskrit
  pa: '🇮🇳', // Punjabi
  bn: '🇧🇩', // Bengali
  ta: '🇮🇳', // Tamil
  te: '🇮🇳', // Telugu
  ml: '🇮🇳', // Malayalam
  gu: '🇮🇳', // Gujarati
  fa: '🇮🇷', // Persian
  tr: '🇹🇷', // Turkish
  id: '🇮🇩', // Indonesian
  th: '🇹🇭', // Thai
  my: '🇲🇲', // Burmese
  km: '🇰🇭', // Khmer
  si: '🇱🇰', // Sinhala
  ne: '🇳🇵', // Nepali
  bo: '🏔️', // Tibetan
  ug: '🇨🇳', // Uyghur
  he: '🇮🇱', // Hebrew
  yi: '✡️', // Yiddish
  am: '🇪🇹', // Amharic
  ti: '🇪🇷', // Tigrinya
  cop: '☦️', // Coptic
  syr: '🕇', // Syriac
  pal: '🏺', // Pahlavi
  mr: '🇮🇳', // Marathi
  kn: '🇮🇳', // Kannada
  or: '🇮🇳', // Odia
  as: '🇮🇳', // Assamese
  sd: '🇵🇰', // Sindhi
  jv: '🇮🇩', // Javanese
  ms: '🇲🇾', // Malay (Malaysia)
  tl: '🇵🇭', // Tagalog
  lo: '🇱🇦', // Lao
  ku: '🏔️', // Kurdish
  hy: '🇦🇲', // Armenian
  ka: '🇬🇪', // Georgian
  sw: '🇰🇪', // Swahili
  ha: '🇳🇬', // Hausa
  yo: '🇳🇬', // Yoruba
  grc: '🏺', // Ancient Greek
  egy: '🔮', // Ancient Egyptian
  akk: '📜', // Akkadian
  chu: '⛪', // Church Slavonic
  nav: '🏹', // Navajo
  que: '🗿', // Quechua
  mri: '🇳🇿'  // Māori
} as const

export type Genre = string

export interface GenreSubcategories {
  [key: string]: Genre[]
}

export interface GenreCategory {
  [key: string]: GenreSubcategories
}

export const STATION_GENRES = [
      'Christian Contemporary',
  'Gospel',
  'Worship',
  'Christian Rock',
  'Christian Hip Hop',
      'Christian Pop',
  'Christian Metal',
  'Christian Jazz',
  'Christian Country',
  'Christian Blues',
  'Christian Folk',
  'Christian World',
  'Christian Classical',
  'Christian Instrumental'
]

export const GENRE_CATEGORIES = {
  MAIN: [
    'Christian Contemporary',
    'Gospel',
    'Worship',
      'Christian Rock',
      'Christian Hip Hop',
    'Christian Pop',
      'Christian Metal',
      'Christian Jazz',
      'Christian Country'
    ],
  SPECIALIZED: [
    'Christian Blues',
    'Christian Folk',
    'Christian World',
      'Christian Classical',
    'Christian Instrumental'
  ]
}

export const STATION_CATEGORIES = {
  REGION: {
    AMERICAS: [
      'North America',
      'Latin America',
      'Caribbean'
    ],
    ASIA: [
      'East Asia',
      'South Asia',
      'Southeast Asia',
      'Middle East'
    ],
    EUROPE: [
      'Western Europe',
      'Eastern Europe',
      'Nordic Countries'
    ],
    AFRICA: [
      'North Africa',
      'Sub-Saharan Africa'
    ],
    OCEANIA: [
      'Australia',
      'New Zealand',
      'Pacific Islands'
    ]
  },
  FORMAT: {
    TALK: [
      'Teaching',
      'Preaching',
      'Bible Study',
      'Talk Shows'
    ],
    MUSIC: [
      ...GENRE_CATEGORIES.MAIN,
      ...GENRE_CATEGORIES.SPECIALIZED
    ],
    MULTILINGUAL: [
      'Bilingual',
      'Multilingual',
      'International'
    ]
  }
}

export const ENHANCED_FILTERS = {
  QUALITY: [
    { value: 'all', label: 'All Qualities' },
    { value: 'high', label: 'High Quality (256kbps+)' },
    { value: 'medium', label: 'Medium Quality (128-255kbps)' },
    { value: 'low', label: 'Low Quality (<128kbps)' }
  ],
  RELIABILITY: [
    { value: 'all', label: 'All Stations' },
    { value: 'verified', label: 'Verified Only' },
    { value: 'popular', label: 'Popular Stations' }
  ]
}

export const VERIFIED_STATIONS = [
  {
    id: '1',
    name: 'K-LOVE',
    url: 'https://maestro.klove.com/stream',
    genre: 'Christian Contemporary',
    country: 'United States',
    language: 'English',
    isVerified: true,
    codec: 'AAC',
    bitrate: 128,
    favicon: '/images/stations/klove.png'
  },
  {
    id: '2',
    name: 'Air1 Radio',
    url: 'https://maestro.air1.com/stream',
    genre: 'Christian Pop',
    country: 'United States',
    language: 'English',
    isVerified: true,
    codec: 'AAC',
    bitrate: 128,
    favicon: '/images/stations/air1.png'
  }
]

export const FEATURED_STATIONS = VERIFIED_STATIONS.slice(0, 4)

export const STATION_FILTERS = {
  GENRES: [
    { value: 'all', label: 'All Genres' },
    { value: 'contemporary', label: 'Contemporary' },
    { value: 'gospel', label: 'Gospel' },
    { value: 'worship', label: 'Worship' },
    { value: 'rock', label: 'Rock' },
    { value: 'hiphop', label: 'Hip Hop' },
    { value: 'pop', label: 'Pop' }
  ],
  COUNTRIES: [
    { value: 'all', label: 'All Countries' },
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' }
  ],
  LANGUAGES: [
    { value: 'all', label: 'All Languages' },
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' }
  ]
}

export const COUNTRY_FLAGS = {
  us: '🇺🇸',
  gb: '🇬🇧',
  ca: '🇨🇦',
  au: '🇦🇺',
  nz: '🇳🇿',
  // ... other country flags
} as const

export const LANGUAGE_FLAGS: Record<string, string> = {
  en: '🇬🇧', // English
  es: '🇪🇸', // Spanish
  fr: '🇫🇷', // French
  de: '🇩🇪', // German
  it: '🇮🇹', // Italian
  pt: '🇵🇹', // Portuguese
  ru: '🇷🇺', // Russian
  ja: '🇯🇵', // Japanese
  ko: '🇰🇷', // Korean
  zh: '🇨🇳', // Chinese
  ar: '🇸🇦', // Arabic
  hi: '🇮🇳', // Hindi
  bn: '🇧🇩', // Bengali
  pa: '🇮🇳', // Punjabi
  te: '🇮🇳', // Telugu
  mr: '🇮🇳', // Marathi
  ta: '🇮🇳', // Tamil
  ur: '🇵🇰', // Urdu
  fa: '🇮🇷', // Persian
  tr: '🇹🇷', // Turkish
  vi: '🇻🇳', // Vietnamese
  th: '🇹🇭', // Thai
  id: '🇮🇩', // Indonesian
  ms: '🇲🇾', // Malay (Malaysia)
  fil: '🇵🇭', // Filipino
  nl: '🇳🇱', // Dutch
  pl: '🇵🇱', // Polish
  uk: '🇺🇦', // Ukrainian
  el: '🇬🇷', // Greek
  ro: '🇷🇴', // Romanian
  hu: '🇭🇺', // Hungarian
  cs: '🇨🇿', // Czech
  sv: '🇸🇪', // Swedish
  da: '🇩🇰', // Danish
  fi: '🇫🇮', // Finnish
  no: '🇳🇴', // Norwegian
  he: '🇮🇱', // Hebrew
  bg: '🇧🇬', // Bulgarian
  hr: '🇭🇷', // Croatian
  sr: '🇷🇸', // Serbian
  sk: '🇸🇰', // Slovak
  sl: '🇸🇮', // Slovenian
  et: '🇪🇪', // Estonian
  lv: '🇱🇻', // Latvian
  lt: '🇱🇹', // Lithuanian
  gu: '🇮🇳', // Gujarati
  kn: '🇮🇳', // Kannada
  ml: '🇮🇳', // Malayalam
  si: '🇱🇰', // Sinhala
  my: '🇲🇲', // Burmese
  km: '🇰🇭', // Khmer
  ne: '🇳🇵', // Nepali
  sd: '🇵🇰', // Sindhi
  jv: '🇮🇩', // Javanese
  tl: '🇵��', // Tagalog
  lo: '🇱🇦', // Lao
  ku: '🏔️', // Kurdish
  hy: '🇦🇲', // Armenian
  ka: '🇬🇪', // Georgian
  sw: '🇰🇪', // Swahili
  ha: '🇳🇬', // Hausa
  yo: '🇳🇬', // Yoruba
  grc: '🏺', // Ancient Greek
  egy: '🔮', // Ancient Egyptian
  akk: '📜', // Akkadian
  chu: '⛪', // Church Slavonic
  nav: '🏹', // Navajo
  que: '🗿', // Quechua
  mri: '🇳🇿'  // Māori
} as const

export const PLAYER_CONSTANTS = {
  WELCOME_TITLE: 'Welcome to Zion.FM',
  WELCOME_SUBTITLE: 'Your free religious radio paradise',
  DEFAULT_VOLUME: 0.8,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 2000,
  BUFFER_TIMEOUT: 10000
}

export const STATION_LANGUAGES = {
  en: '🇬🇧', // English
  es: '🇪🇸', // Spanish
  fr: '🇫🇷', // French
  de: '🇩🇪', // German
  it: '🇮🇹', // Italian
  pt: '🇵🇹', // Portuguese
  ar: '🇦🇪', // Arabic
  he: '🇮🇱', // Hebrew
  sa: '🇮🇳', // Sanskrit
  hi: '🇮🇳', // Hindi
  bn: '🇧🇩', // Bengali
  ur: '🇵🇰', // Urdu
  fa: '🇮🇷', // Persian
  tr: '🇹🇷', // Turkish
  id: '🇮🇩', // Indonesian
  ms: '🇲🇾', // Malay
  zh: '🇨🇳', // Chinese
  ja: '🇯🇵', // Japanese
  ko: '🇰🇷', // Korean
  th: '🇹🇭', // Thai
  vi: '🇻🇳', // Vietnamese
  ru: '🇷🇺', // Russian
  pl: '🇵🇱', // Polish
  el: '🇬🇷', // Greek
  la: '🏛️', // Latin
  ak: '🇬🇭', // Akkadian
  cu: '⛪', // Church Slavonic
  na: '🏹', // Navajo
  qu: '🗿', // Quechua
  mi: '🇳🇿', // Māori
  mr: '🇮🇳', // Marathi
  kn: '🇮🇳', // Kannada
  or: '🇮🇳', // Odia
  as: '🇮🇳', // Assamese
  sd: '🇵🇰', // Sindhi
  jv: '🇮🇩', // Javanese
  tl: '🇵��', // Tagalog
  lo: '🇱🇦', // Lao
  ku: '🏔️', // Kurdish
  hy: '🇦🇲', // Armenian
  ka: '🇬🇪', // Georgian
  sw: '🇰🇪', // Swahili
  ha: '🇳🇬', // Hausa
  yo: '🇳🇬', // Yoruba
  grc: '🏺', // Ancient Greek
  egy: '🔮', // Ancient Egyptian
  akk: '📜', // Akkadian
  chu: '⛪', // Church Slavonic
  nav: '🏹', // Navajo
  que: '🗿', // Quechua
  mri: '🇳🇿'  // Māori
} as const

export const RADIO_STATIONS = [
  {
    id: "1",
    name: "Christian Radio",
    url: "https://stream.example.com/christian-radio",
    favicon: "/images/christian-radio.png",
    genre: "Christian",
    country: "US"
  },
  {
    id: "2",
    name: "Jewish Music",
    url: "https://stream.example.com/jewish-music",
    favicon: "/images/jewish-music.png",
    genre: "Jewish",
    country: "IL"
  },
  // Add more stations here
]