export interface BibleBook {
  id: string
  name: string
  chapters: number
  testament: 'old' | 'new'
  category: string
}

export const BIBLE_BOOKS: BibleBook[] = [
  // Old Testament
  { id: 'genesis', name: 'Genesis', chapters: 50, testament: 'old', category: 'Pentateuch' },
  { id: 'exodus', name: 'Exodus', chapters: 40, testament: 'old', category: 'Pentateuch' },
  { id: 'leviticus', name: 'Leviticus', chapters: 27, testament: 'old', category: 'Pentateuch' },
  { id: 'numbers', name: 'Numbers', chapters: 36, testament: 'old', category: 'Pentateuch' },
  { id: 'deuteronomy', name: 'Deuteronomy', chapters: 34, testament: 'old', category: 'Pentateuch' },
  { id: 'joshua', name: 'Joshua', chapters: 24, testament: 'old', category: 'Historical Books' },
  { id: 'judges', name: 'Judges', chapters: 21, testament: 'old', category: 'Historical Books' },
  { id: 'ruth', name: 'Ruth', chapters: 4, testament: 'old', category: 'Historical Books' },
  { id: '1-samuel', name: '1 Samuel', chapters: 31, testament: 'old', category: 'Historical Books' },
  { id: '2-samuel', name: '2 Samuel', chapters: 24, testament: 'old', category: 'Historical Books' },
  { id: '1-kings', name: '1 Kings', chapters: 22, testament: 'old', category: 'Historical Books' },
  { id: '2-kings', name: '2 Kings', chapters: 25, testament: 'old', category: 'Historical Books' },
  { id: '1-chronicles', name: '1 Chronicles', chapters: 29, testament: 'old', category: 'Historical Books' },
  { id: '2-chronicles', name: '2 Chronicles', chapters: 36, testament: 'old', category: 'Historical Books' },
  { id: 'ezra', name: 'Ezra', chapters: 10, testament: 'old', category: 'Historical Books' },
  { id: 'nehemiah', name: 'Nehemiah', chapters: 13, testament: 'old', category: 'Historical Books' },
  { id: 'esther', name: 'Esther', chapters: 10, testament: 'old', category: 'Historical Books' },
  { id: 'job', name: 'Job', chapters: 42, testament: 'old', category: 'Wisdom Literature' },
  { id: 'psalms', name: 'Psalms', chapters: 150, testament: 'old', category: 'Wisdom Literature' },
  { id: 'proverbs', name: 'Proverbs', chapters: 31, testament: 'old', category: 'Wisdom Literature' },
  { id: 'ecclesiastes', name: 'Ecclesiastes', chapters: 12, testament: 'old', category: 'Wisdom Literature' },
  { id: 'song-of-solomon', name: 'Song of Solomon', chapters: 8, testament: 'old', category: 'Wisdom Literature' },
  { id: 'isaiah', name: 'Isaiah', chapters: 66, testament: 'old', category: 'Major Prophets' },
  { id: 'jeremiah', name: 'Jeremiah', chapters: 52, testament: 'old', category: 'Major Prophets' },
  { id: 'lamentations', name: 'Lamentations', chapters: 5, testament: 'old', category: 'Major Prophets' },
  { id: 'ezekiel', name: 'Ezekiel', chapters: 48, testament: 'old', category: 'Major Prophets' },
  { id: 'daniel', name: 'Daniel', chapters: 12, testament: 'old', category: 'Major Prophets' },
  { id: 'hosea', name: 'Hosea', chapters: 14, testament: 'old', category: 'Minor Prophets' },
  { id: 'joel', name: 'Joel', chapters: 3, testament: 'old', category: 'Minor Prophets' },
  { id: 'amos', name: 'Amos', chapters: 9, testament: 'old', category: 'Minor Prophets' },
  { id: 'obadiah', name: 'Obadiah', chapters: 1, testament: 'old', category: 'Minor Prophets' },
  { id: 'jonah', name: 'Jonah', chapters: 4, testament: 'old', category: 'Minor Prophets' },
  { id: 'micah', name: 'Micah', chapters: 7, testament: 'old', category: 'Minor Prophets' },
  { id: 'nahum', name: 'Nahum', chapters: 3, testament: 'old', category: 'Minor Prophets' },
  { id: 'habakkuk', name: 'Habakkuk', chapters: 3, testament: 'old', category: 'Minor Prophets' },
  { id: 'zephaniah', name: 'Zephaniah', chapters: 3, testament: 'old', category: 'Minor Prophets' },
  { id: 'haggai', name: 'Haggai', chapters: 2, testament: 'old', category: 'Minor Prophets' },
  { id: 'zechariah', name: 'Zechariah', chapters: 14, testament: 'old', category: 'Minor Prophets' },
  { id: 'malachi', name: 'Malachi', chapters: 4, testament: 'old', category: 'Minor Prophets' },
  
  // New Testament
  { id: 'matthew', name: 'Matthew', chapters: 28, testament: 'new', category: 'Gospels' },
  { id: 'mark', name: 'Mark', chapters: 16, testament: 'new', category: 'Gospels' },
  { id: 'luke', name: 'Luke', chapters: 24, testament: 'new', category: 'Gospels' },
  { id: 'john', name: 'John', chapters: 21, testament: 'new', category: 'Gospels' },
  { id: 'acts', name: 'Acts', chapters: 28, testament: 'new', category: 'Historical' },
  { id: 'romans', name: 'Romans', chapters: 16, testament: 'new', category: 'Pauline Epistles' },
  { id: '1-corinthians', name: '1 Corinthians', chapters: 16, testament: 'new', category: 'Pauline Epistles' },
  { id: '2-corinthians', name: '2 Corinthians', chapters: 13, testament: 'new', category: 'Pauline Epistles' },
  { id: 'galatians', name: 'Galatians', chapters: 6, testament: 'new', category: 'Pauline Epistles' },
  { id: 'ephesians', name: 'Ephesians', chapters: 6, testament: 'new', category: 'Pauline Epistles' },
  { id: 'philippians', name: 'Philippians', chapters: 4, testament: 'new', category: 'Pauline Epistles' },
  { id: 'colossians', name: 'Colossians', chapters: 4, testament: 'new', category: 'Pauline Epistles' },
  { id: '1-thessalonians', name: '1 Thessalonians', chapters: 5, testament: 'new', category: 'Pauline Epistles' },
  { id: '2-thessalonians', name: '2 Thessalonians', chapters: 3, testament: 'new', category: 'Pauline Epistles' },
  { id: '1-timothy', name: '1 Timothy', chapters: 6, testament: 'new', category: 'Pastoral Epistles' },
  { id: '2-timothy', name: '2 Timothy', chapters: 4, testament: 'new', category: 'Pastoral Epistles' },
  { id: 'titus', name: 'Titus', chapters: 3, testament: 'new', category: 'Pastoral Epistles' },
  { id: 'philemon', name: 'Philemon', chapters: 1, testament: 'new', category: 'Pauline Epistles' },
  { id: 'hebrews', name: 'Hebrews', chapters: 13, testament: 'new', category: 'General Epistles' },
  { id: 'james', name: 'James', chapters: 5, testament: 'new', category: 'General Epistles' },
  { id: '1-peter', name: '1 Peter', chapters: 5, testament: 'new', category: 'General Epistles' },
  { id: '2-peter', name: '2 Peter', chapters: 3, testament: 'new', category: 'General Epistles' },
  { id: '1-john', name: '1 John', chapters: 5, testament: 'new', category: 'General Epistles' },
  { id: '2-john', name: '2 John', chapters: 1, testament: 'new', category: 'General Epistles' },
  { id: '3-john', name: '3 John', chapters: 1, testament: 'new', category: 'General Epistles' },
  { id: 'jude', name: 'Jude', chapters: 1, testament: 'new', category: 'General Epistles' },
  { id: 'revelation', name: 'Revelation', chapters: 22, testament: 'new', category: 'Apocalyptic' }
]

export function getBibleBook(bookId: string): BibleBook | undefined {
  return BIBLE_BOOKS.find(book => book.id === bookId)
}

export function getAllBibleBooks(): BibleBook[] {
  return BIBLE_BOOKS
}

export function getOldTestamentBooks(): BibleBook[] {
  return BIBLE_BOOKS.filter(book => book.testament === 'old')
}

export function getNewTestamentBooks(): BibleBook[] {
  return BIBLE_BOOKS.filter(book => book.testament === 'new')
}

export function getBooksByCategory(category: string): BibleBook[] {
  return BIBLE_BOOKS.filter(book => book.category === category)
} 