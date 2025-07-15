export interface BibleVerse {
  number: number
  text: string
  translation: string
  commentary?: string
}

export interface BibleChapter {
  number: number
  name: string
  book: string
  testament: 'Old' | 'New'
  verses: number
  versesData: BibleVerse[]
  summary: string
  themes: string[]
  keyVerses: string[]
  historicalContext?: string
}

export interface BibleBook {
  name: string
  englishName: string
  testament: 'Old' | 'New'
  category: string
  chapters: number
  summary: string
  author?: string
  dateWritten?: string
  keyThemes: string[]
}

// Complete Bible data with actual text
export const BIBLE_BOOKS: BibleBook[] = [
  {
    name: 'Genesis',
    englishName: 'Genesis',
    testament: 'Old',
    category: 'Law',
    chapters: 50,
    summary: 'The first book of the Bible, containing the creation story, early human history, and the stories of the patriarchs Abraham, Isaac, and Jacob.',
    author: 'Moses',
    dateWritten: '1445-1405 BC',
    keyThemes: ['Creation', 'Covenant', 'Faith', 'Family', 'God\'s Promise']
  },
  {
    name: 'Exodus',
    englishName: 'Exodus',
    testament: 'Old',
    category: 'Law',
    chapters: 40,
    summary: 'The story of Israel\'s deliverance from Egypt, the giving of the Law at Mount Sinai, and the construction of the Tabernacle.',
    author: 'Moses',
    dateWritten: '1445-1405 BC',
    keyThemes: ['Deliverance', 'Law', 'Covenant', 'Worship', 'God\'s Power']
  },
  {
    name: 'Matthew',
    englishName: 'Matthew',
    testament: 'New',
    category: 'Gospel',
    chapters: 28,
    summary: 'The first Gospel, presenting Jesus as the Messiah and King, with emphasis on His teachings and fulfillment of Old Testament prophecies.',
    author: 'Matthew',
    dateWritten: 'AD 50-70',
    keyThemes: ['Messiah', 'Kingdom of God', 'Discipleship', 'Teaching', 'Fulfillment']
  },
  {
    name: 'John',
    englishName: 'John',
    testament: 'New',
    category: 'Gospel',
    chapters: 21,
    summary: 'The fourth Gospel, focusing on Jesus as the divine Son of God and emphasizing belief and eternal life.',
    author: 'John',
    dateWritten: 'AD 85-95',
    keyThemes: ['Deity of Christ', 'Eternal Life', 'Belief', 'Love', 'Truth']
  }
]

export const BIBLE_CHAPTERS: BibleChapter[] = [
  {
    number: 1,
    name: 'The Beginning',
    book: 'Genesis',
    testament: 'Old',
    verses: 31,
    summary: 'The creation story, describing how God created the universe, earth, and all living things in six days, culminating in the creation of humanity.',
    themes: ['Creation', 'God\'s Power', 'Humanity', 'Rest', 'Goodness'],
    keyVerses: ['Genesis 1:1', 'Genesis 1:27', 'Genesis 1:31'],
    historicalContext: 'Written by Moses during the wilderness wanderings, this chapter establishes the foundation for all biblical theology.',
    versesData: [
      {
        number: 1,
        text: 'In the beginning God created the heavens and the earth.',
        translation: 'NIV',
        commentary: 'This verse establishes God as the Creator of everything that exists, marking the beginning of time and space.'
      },
      {
        number: 2,
        text: 'Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.',
        translation: 'NIV',
        commentary: 'The earth was in a state of chaos and emptiness, with the Holy Spirit present and ready to bring order.'
      },
      {
        number: 3,
        text: 'And God said, "Let there be light," and there was light.',
        translation: 'NIV',
        commentary: 'God\'s first creative act was to bring light into existence, demonstrating His power through His word.'
      },
      {
        number: 4,
        text: 'God saw that the light was good, and he separated the light from the darkness.',
        translation: 'NIV',
        commentary: 'God evaluated His creation as good and established the distinction between light and darkness.'
      },
      {
        number: 5,
        text: 'God called the light "day," and the darkness he called "night." And there was evening, and there was morning—the first day.',
        translation: 'NIV',
        commentary: 'God named the periods of light and darkness, establishing the first day of creation.'
      },
      {
        number: 26,
        text: 'Then God said, "Let us make mankind in our image, in our likeness, so that they may rule over the fish in the sea and the birds in the sky, over the livestock and all the wild animals, and over all the creatures that move along the ground."',
        translation: 'NIV',
        commentary: 'God\'s decision to create humanity in His image, giving them dominion over creation.'
      },
      {
        number: 27,
        text: 'So God created mankind in his own image, in the image of God he created them; male and female he created them.',
        translation: 'NIV',
        commentary: 'Humanity is created in God\'s image, with both male and female reflecting His nature.'
      },
      {
        number: 28,
        text: 'God blessed them and said to them, "Be fruitful and increase in number; fill the earth and subdue it. Rule over the fish in the sea and the birds in the sky and over every living creature that moves on the ground."',
        translation: 'NIV',
        commentary: 'God\'s blessing and command to humanity to multiply and exercise stewardship over creation.'
      },
      {
        number: 31,
        text: 'God saw all that he had made, and it was very good. And there was evening, and there was morning—the sixth day.',
        translation: 'NIV',
        commentary: 'God\'s final evaluation of creation as very good, completing the sixth day of creation.'
      }
    ]
  },
  {
    number: 1,
    name: 'The Genealogy of Jesus',
    book: 'Matthew',
    testament: 'New',
    verses: 25,
    summary: 'The genealogy of Jesus Christ, tracing His lineage from Abraham through David to Joseph, establishing His royal and messianic credentials.',
    themes: ['Messiah', 'Genealogy', 'Promise', 'Fulfillment', 'Royal Lineage'],
    keyVerses: ['Matthew 1:1', 'Matthew 1:16', 'Matthew 1:21'],
    historicalContext: 'Written to a Jewish audience, this genealogy establishes Jesus\' legal right to the throne of David.',
    versesData: [
      {
        number: 1,
        text: 'This is the genealogy of Jesus the Messiah the son of David, the son of Abraham.',
        translation: 'NIV',
        commentary: 'Matthew begins by establishing Jesus\' identity as the Messiah, descended from David and Abraham.'
      },
      {
        number: 16,
        text: 'and Jacob the father of Joseph, the husband of Mary, and Mary was the mother of Jesus who is called the Messiah.',
        translation: 'NIV',
        commentary: 'The genealogy concludes with Joseph and Mary, emphasizing Jesus\' legal lineage through Joseph.'
      },
      {
        number: 18,
        text: 'This is how the birth of Jesus the Messiah came about: His mother Mary was pledged to be married to Joseph, but before they came together, she was found to be pregnant through the Holy Spirit.',
        translation: 'NIV',
        commentary: 'The miraculous conception of Jesus through the Holy Spirit, maintaining Mary\'s virginity.'
      },
      {
        number: 21,
        text: 'She will give birth to a son, and you are to give him the name Jesus, because he will save his people from their sins.',
        translation: 'NIV',
        commentary: 'The angel explains the meaning of Jesus\' name and His mission to save people from their sins.'
      },
      {
        number: 23,
        text: '"The virgin will conceive and give birth to a son, and they will call him Immanuel" (which means "God with us").',
        translation: 'NIV',
        commentary: 'The fulfillment of Isaiah\'s prophecy, identifying Jesus as God incarnate.'
      },
      {
        number: 25,
        text: 'But he did not consummate their marriage until she gave birth to a son. And he gave him the name Jesus.',
        translation: 'NIV',
        commentary: 'Joseph\'s obedience to the angel\'s command and the naming of Jesus.'
      }
    ]
  },
  {
    number: 1,
    name: 'The Word Became Flesh',
    book: 'John',
    testament: 'New',
    verses: 51,
    summary: 'The prologue to John\'s Gospel, presenting Jesus as the eternal Word of God who became flesh and dwelt among humanity.',
    themes: ['Deity of Christ', 'Incarnation', 'Light', 'Life', 'Grace'],
    keyVerses: ['John 1:1', 'John 1:14', 'John 1:29'],
    historicalContext: 'Written later than the other Gospels, John provides a theological introduction to Jesus\' identity and mission.',
    versesData: [
      {
        number: 1,
        text: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
        translation: 'NIV',
        commentary: 'John begins with the same words as Genesis, identifying Jesus as the eternal Word who is God.'
      },
      {
        number: 2,
        text: 'He was with God in the beginning.',
        translation: 'NIV',
        commentary: 'Emphasizing the eternal existence of the Word with God from the beginning.'
      },
      {
        number: 3,
        text: 'Through him all things were made; without him nothing was made that has been made.',
        translation: 'NIV',
        commentary: 'The Word is the agent of creation, through whom everything came into existence.'
      },
      {
        number: 4,
        text: 'In him was life, and that life was the light of all mankind.',
        translation: 'NIV',
        commentary: 'The Word contains life and is the source of spiritual light for humanity.'
      },
      {
        number: 5,
        text: 'The light shines in the darkness, and the darkness has not overcome it.',
        translation: 'NIV',
        commentary: 'The light of Christ continues to shine despite opposition from darkness.'
      },
      {
        number: 14,
        text: 'The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth.',
        translation: 'NIV',
        commentary: 'The incarnation of the Word, who became human and revealed God\'s glory.'
      },
      {
        number: 29,
        text: 'The next day John saw Jesus coming toward him and said, "Look, the Lamb of God, who takes away the sin of the world!"',
        translation: 'NIV',
        commentary: 'John the Baptist identifies Jesus as the sacrificial Lamb who will atone for sin.'
      },
      {
        number: 51,
        text: 'He then added, "Very truly I tell you, you will see heaven open, and the angels of God ascending and descending on the Son of Man."',
        translation: 'NIV',
        commentary: 'Jesus promises Nathanael that he will see greater things, including heavenly revelation.'
      }
    ]
  }
]

// Function to get book by name
export function getBibleBook(name: string): BibleBook | undefined {
  return BIBLE_BOOKS.find(book => book.name === name || book.englishName === name)
}

// Function to get chapter by book and number
export function getBibleChapter(bookName: string, chapterNumber: number): BibleChapter | undefined {
  return BIBLE_CHAPTERS.find(chapter => 
    chapter.book === bookName && chapter.number === chapterNumber
  )
}

// Function to get all books
export function getAllBibleBooks(): BibleBook[] {
  return BIBLE_BOOKS
}

// Function to get verses for a specific chapter
export function getBibleVerses(bookName: string, chapterNumber: number): BibleVerse[] {
  const chapter = getBibleChapter(bookName, chapterNumber)
  return chapter ? chapter.versesData : []
}

// Function to get a specific verse
export function getBibleVerse(bookName: string, chapterNumber: number, verseNumber: number): BibleVerse | undefined {
  const verses = getBibleVerses(bookName, chapterNumber)
  return verses.find(verse => verse.number === verseNumber)
} 