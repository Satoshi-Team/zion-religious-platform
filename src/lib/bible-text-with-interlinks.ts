// Enhanced Bible Data with Interlinks for SEO
// Includes related texts and cross-references to Quran and Torah

import { InterlinkingService } from './interlinking-service'
import { EnhancedBibleVerse, BibleData } from './bible-text-new-testament'
import { RelatedText, VerseInterlinks } from '@/types/related-texts'

export interface EnhancedBibleChapter {
  [verseNumber: number]: EnhancedBibleVerse
}

export interface EnhancedBibleBook {
  [chapterNumber: number]: EnhancedBibleChapter
}

export interface EnhancedBibleData {
  [bookName: string]: EnhancedBibleBook
}

// Enhanced Bible data with interlinks
export const ENHANCED_BIBLE_DATA: EnhancedBibleData = {
  "Matthew": {
    "1": {
      "1": {
        book: "Matthew",
        chapter: 1,
        verse: 1,
        text: "The book of the genealogy of Jesus Christ, the son of David, the son of Abraham.",
        interlinks: {
          relatedTexts: [
            {
              type: 'quran',
              reference: 'Quran 3:45',
              title: 'Jesus in the Quran',
              description: 'Quranic account of Jesus\' birth and significance',
              relevance: 'thematic',
              keywords: ['Jesus Christ', 'Messiah', 'divine birth', 'prophetic lineage']
            },
            {
              type: 'torah',
              reference: 'Torah Genesis 12:1-3',
              title: 'Abrahamic Covenant',
              description: 'God\'s promise to Abraham, foundational to Jesus\' genealogy',
              relevance: 'historical',
              keywords: ['Abraham', 'covenant', 'promise', 'blessing']
            }
          ],
          crossReferences: ['Quran 3:45', 'Torah Genesis 12:1-3'],
          themes: ['messiah', 'prophecy'],
          keywords: ['Jesus genealogy', 'Messianic lineage', 'Davidic line', 'Abrahamic promise'],
          seoDescription: 'Genealogy of Jesus Christ - explore Messianic prophecies across Christian, Islamic, and Jewish traditions'
        }
      },
      "2": {
        book: "Matthew",
        chapter: 1,
        verse: 2,
        text: "Abraham became the father of Isaac. Isaac became the father of Jacob. Jacob became the father of Judah and his brothers.",
        interlinks: {
          relatedTexts: [
            {
              type: 'torah',
              reference: 'Torah Genesis 21:1-3',
              title: 'Birth of Isaac',
              description: 'Torah account of Isaac\'s birth to Abraham and Sarah',
              relevance: 'historical',
              keywords: ['Isaac', 'Abraham', 'Sarah', 'divine promise']
            }
          ],
          crossReferences: ['Torah Genesis 21:1-3'],
          themes: ['family', 'prophecy'],
          keywords: ['Abrahamic lineage', 'Isaac', 'Jacob', 'Judah', 'biblical genealogy'],
          seoDescription: 'Abrahamic genealogy - explore biblical family lineage and divine promises'
        }
      },
      "16": {
        book: "Matthew",
        chapter: 1,
        verse: 16,
        text: "Jacob became the father of Joseph, the husband of Mary, from whom was born Jesus, who is called Christ.",
        interlinks: {
          relatedTexts: [
            {
              type: 'quran',
              reference: 'Quran 3:45',
              title: 'Jesus\' Birth in Quran',
              description: 'Quranic account of Jesus\' miraculous birth to Mary',
              relevance: 'thematic',
              keywords: ['Jesus', 'Mary', 'virgin birth', 'divine miracle']
            }
          ],
          crossReferences: ['Quran 3:45'],
          themes: ['messiah', 'family'],
          keywords: ['Joseph', 'Mary', 'Jesus Christ', 'virgin birth', 'Messianic lineage'],
          seoDescription: 'Joseph and Mary - explore the parents of Jesus across Christian and Islamic traditions'
        }
      },
      "18": {
        book: "Matthew",
        chapter: 1,
        verse: 18,
        text: "Now the birth of Jesus Christ was like this: After his mother, Mary, was engaged to Joseph, before they came together, she was found pregnant by the Holy Spirit.",
        interlinks: {
          relatedTexts: [
            {
              type: 'quran',
              reference: 'Quran 3:47',
              title: 'Virgin Birth in Quran',
              description: 'Quranic account of Mary\'s virgin conception by divine decree',
              relevance: 'parallel',
              keywords: ['virgin birth', 'divine conception', 'Mary', 'miraculous birth']
            }
          ],
          crossReferences: ['Quran 3:47'],
          themes: ['messiah', 'miracle'],
          keywords: ['virgin birth', 'Holy Spirit', 'divine conception', 'miraculous birth'],
          seoDescription: 'Virgin birth of Jesus - explore miraculous birth accounts across Christian and Islamic traditions'
        }
      },
      "21": {
        book: "Matthew",
        chapter: 1,
        verse: 21,
        text: "\"She shall give birth to a son. You shall call his name Jesus, for it is he who shall save his people from their sins.\"",
        interlinks: {
          relatedTexts: [
            {
              type: 'quran',
              reference: 'Quran 3:45',
              title: 'Jesus\' Name and Mission',
              description: 'Quranic account of Jesus\' name and his role as Messiah',
              relevance: 'thematic',
              keywords: ['Jesus', 'Messiah', 'divine mission', 'salvation']
            }
          ],
          crossReferences: ['Quran 3:45'],
          themes: ['messiah', 'salvation'],
          keywords: ['Jesus name', 'salvation', 'Messianic mission', 'divine purpose'],
          seoDescription: 'Jesus\' name and mission - explore Messianic purpose across Christian and Islamic traditions'
        }
      }
    },
    "2": {
      "1": {
        book: "Matthew",
        chapter: 2,
        verse: 1,
        text: "Now when Jesus was born in Bethlehem of Judea in the days of King Herod, behold, wise men from the east came to Jerusalem, saying,",
        interlinks: {
          relatedTexts: [
            {
              type: 'quran',
              reference: 'Quran 3:45',
              title: 'Jesus\' Birth in Quran',
              description: 'Quranic account of Jesus\' birth and the announcement to Mary',
              relevance: 'thematic',
              keywords: ['Jesus birth', 'divine announcement', 'Messianic birth', 'prophetic fulfillment']
            }
          ],
          crossReferences: ['Quran 3:45'],
          themes: ['messiah', 'prophecy'],
          keywords: ['Bethlehem', 'wise men', 'Jesus birth', 'Messianic prophecy'],
          seoDescription: 'Birth of Jesus in Bethlehem - explore Messianic birth narratives across Christian and Islamic traditions'
        }
      },
      "2": {
        book: "Matthew",
        chapter: 2,
        verse: 2,
        text: "\"Where is he who is born King of the Jews? For we saw his star in the east, and have come to worship him.\"",
        interlinks: {
          relatedTexts: [
            {
              type: 'torah',
              reference: 'Torah Numbers 24:17',
              title: 'Star of Jacob',
              description: 'Torah prophecy about a star coming from Jacob',
              relevance: 'prophetic',
              keywords: ['star prophecy', 'Messianic sign', 'divine guidance', 'prophetic fulfillment']
            }
          ],
          crossReferences: ['Torah Numbers 24:17'],
          themes: ['prophecy', 'messiah'],
          keywords: ['star of Bethlehem', 'wise men', 'Messianic prophecy', 'divine sign'],
          seoDescription: 'Star of Bethlehem - explore Messianic star prophecies across Christian and Jewish traditions'
        }
      }
    }
  },
  "Mark": {
    "1": {
      "1": {
        book: "Mark",
        chapter: 1,
        verse: 1,
        text: "The beginning of the Good News of Jesus Christ, the Son of God.",
        interlinks: {
          relatedTexts: [
            {
              type: 'quran',
              reference: 'Quran 3:45',
              title: 'Jesus as Messiah',
              description: 'Quranic affirmation of Jesus as the Messiah',
              relevance: 'thematic',
              keywords: ['Jesus Christ', 'Messiah', 'Son of God', 'divine nature']
            }
          ],
          crossReferences: ['Quran 3:45'],
          themes: ['messiah', 'gospel'],
          keywords: ['Good News', 'Jesus Christ', 'Son of God', 'Gospel of Mark'],
          seoDescription: 'Beginning of the Gospel - explore Messianic good news across Christian and Islamic traditions'
        }
      },
      "2": {
        book: "Mark",
        chapter: 1,
        verse: 2,
        text: "As it is written in the prophets, \"Behold, I send my messenger before your face, who will prepare your way before you.",
        interlinks: {
          relatedTexts: [
            {
              type: 'torah',
              reference: 'Torah Deuteronomy 18:15',
              title: 'Promise of Future Prophet',
              description: 'Torah\'s promise of a prophet like Moses',
              relevance: 'prophetic',
              keywords: ['prophet', 'divine messenger', 'prophetic preparation', 'Mosaic prophecy']
            }
          ],
          crossReferences: ['Torah Deuteronomy 18:15'],
          themes: ['prophecy', 'messenger'],
          keywords: ['John the Baptist', 'prophetic preparation', 'divine messenger', 'prophetic fulfillment'],
          seoDescription: 'Prophetic preparation - explore messenger prophecies across Christian and Jewish traditions'
        }
      }
    }
  },
  "Luke": {
    "1": {
      "26": {
        book: "Luke",
        chapter: 1,
        verse: 26,
        text: "Now in the sixth month, the angel Gabriel was sent from God to a city of Galilee, named Nazareth,",
        interlinks: {
          relatedTexts: [
            {
              type: 'quran',
              reference: 'Quran 3:45',
              title: 'Gabriel\'s Message to Mary',
              description: 'Quranic account of Gabriel\'s announcement to Mary',
              relevance: 'parallel',
              keywords: ['Gabriel', 'divine messenger', 'Mary', 'divine announcement']
            }
          ],
          crossReferences: ['Quran 3:45'],
          themes: ['angel', 'announcement'],
          keywords: ['Gabriel', 'Nazareth', 'divine messenger', 'angelic announcement'],
          seoDescription: 'Gabriel\'s message to Mary - explore angelic announcements across Christian and Islamic traditions'
        }
      },
      "28": {
        book: "Luke",
        chapter: 1,
        verse: 28,
        text: "Having come in, the angel said to her, \"Rejoice, you highly favored one! The Lord is with you. Blessed are you among women!\"",
        interlinks: {
          relatedTexts: [
            {
              type: 'quran',
              reference: 'Quran 3:42',
              title: 'Mary\'s Selection',
              description: 'Quranic account of Mary being chosen and purified by God',
              relevance: 'parallel',
              keywords: ['Mary', 'divine favor', 'blessed woman', 'divine selection']
            }
          ],
          crossReferences: ['Quran 3:42'],
          themes: ['blessing', 'favor'],
          keywords: ['Mary', 'divine favor', 'blessed among women', 'angelic greeting'],
          seoDescription: 'Mary\'s divine favor - explore Mary\'s blessed status across Christian and Islamic traditions'
        }
      }
    }
  },
  "John": {
    "1": {
      "1": {
        book: "John",
        chapter: 1,
        verse: 1,
        text: "In the beginning was the Word, and the Word was with God, and the Word was God.",
        interlinks: {
          relatedTexts: [
            {
              type: 'quran',
              reference: 'Quran 3:45',
              title: 'Jesus as Word of God',
              description: 'Quranic reference to Jesus as the Word of God',
              relevance: 'thematic',
              keywords: ['Word of God', 'divine word', 'Jesus', 'divine nature']
            },
            {
              type: 'torah',
              reference: 'Torah Genesis 1:1',
              title: 'Creation by Word',
              description: 'Torah\'s account of creation through divine word',
              relevance: 'thematic',
              keywords: ['creation', 'divine word', 'beginning', 'cosmic order']
            }
          ],
          crossReferences: ['Quran 3:45', 'Torah Genesis 1:1'],
          themes: ['creation', 'doctrinal'],
          keywords: ['Word of God', 'divine logos', 'creation', 'divine nature'],
          seoDescription: 'The Word in John 1:1 - explore divine word concepts across Christian, Islamic, and Jewish theology'
        }
      },
      "14": {
        book: "John",
        chapter: 1,
        verse: 14,
        text: "The Word became flesh, and lived among us. We saw his glory, such glory as of the one and only Son of the Father, full of grace and truth.",
        interlinks: {
          relatedTexts: [
            {
              type: 'quran',
              reference: 'Quran 3:45',
              title: 'Jesus\' Incarnation',
              description: 'Quranic perspective on Jesus\' divine nature and mission',
              relevance: 'thematic',
              keywords: ['incarnation', 'divine nature', 'Jesus', 'divine mission']
            }
          ],
          crossReferences: ['Quran 3:45'],
          themes: ['incarnation', 'divine nature'],
          keywords: ['Word became flesh', 'incarnation', 'divine glory', 'grace and truth'],
          seoDescription: 'The Word became flesh - explore incarnation theology across Christian and Islamic perspectives'
        }
      }
    }
  }
}

// Enhanced functions with interlinks
export function getEnhancedVerse(book: string, chapter: number, verse: number): EnhancedBibleVerse | null {
  const bookData = ENHANCED_BIBLE_DATA[book]
  if (!bookData) return null
  
  const chapterData = bookData[chapter]
  if (!chapterData) return null
  
  return chapterData[verse] || null
}

export function getEnhancedChapter(book: string, chapter: number): EnhancedBibleChapter | null {
  const bookData = ENHANCED_BIBLE_DATA[book]
  if (!bookData) return null
  
  return bookData[chapter] || null
}

export function getAllEnhancedBooks(): string[] {
  return Object.keys(ENHANCED_BIBLE_DATA)
}

export function getAllEnhancedChapters(book: string): number[] {
  const bookData = ENHANCED_BIBLE_DATA[book]
  if (!bookData) return []
  
  return Object.keys(bookData).map(Number).sort((a, b) => a - b)
}

export function getAllEnhancedVerses(book: string, chapter: number): number[] {
  const chapterData = getEnhancedChapter(book, chapter)
  if (!chapterData) return []
  
  return Object.keys(chapterData).map(Number).sort((a, b) => a - b)
}

// SEO-focused functions
export function getBibleVerseSEOData(book: string, chapter: number, verse: number) {
  const verseData = getEnhancedVerse(book, chapter, verse)
  if (!verseData) return null

  return {
    title: `${book} ${chapter}:${verse} - ${verseData.text.substring(0, 50)}...`,
    description: verseData.interlinks?.seoDescription || `${book} ${chapter}:${verse} - Biblical verse with cross-references and related texts.`,
    keywords: verseData.interlinks?.keywords || [],
    relatedTexts: verseData.interlinks?.relatedTexts || [],
    crossReferences: verseData.interlinks?.crossReferences || [],
    themes: verseData.interlinks?.themes || []
  }
} 