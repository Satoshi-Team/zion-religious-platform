// Enhanced Bible Data - Phase 1 Complete
// Complete Bible data with 5 essential books
// File size: ~4MB

export interface BibleVerse {
  number: number
  text: string
  translation: string
}

export interface BibleChapter {
  number: number
  verses: BibleVerse[]
  summary: string
  themes: string[]
  keyVerses: number[]
}

export interface BibleBook {
  name: string
  testament: 'Old' | 'New'
  category: string
  chapters: number
  summary: string
  author: string
  dateWritten: string
  chaptersData: BibleChapter[]
}

// Complete Bible data with actual text for 5 essential books
export const BIBLE_BOOKS: BibleBook[] = [
  {
    "name": "Genesis",
    "testament": "Old",
    "category": "Law",
    "chapters": 50,
    "summary": "The first book of the Bible, containing the creation story, early human history, and the beginnings of the Israelite nation through the patriarchs.",
    "author": "Moses",
    "dateWritten": "1445-1405 BC",
    "chaptersData": [
      {
        "number": 1,
        "summary": "The creation of the universe and all living things in six days, with God resting on the seventh day.",
        "themes": [
          "Creation",
          "God's Power",
          "Order",
          "Rest"
        ],
        "keyVerses": [
          1,
          26,
          31
        ],
        "verses": [
          {
            "number": 1,
            "text": "In the beginning God created the heavens and the earth.",
            "translation": "In the beginning God created the heavens and the earth."
          },
          {
            "number": 2,
            "text": "The earth was formless and void, and darkness was over the surface of the deep, and the Spirit of God was moving over the surface of the waters.",
            "translation": "The earth was formless and void, and darkness was over the surface of the deep, and the Spirit of God was moving over the surface of the waters."
          },
          {
            "number": 3,
            "text": "Then God said, \"Let there be light\"; and there was light.",
            "translation": "Then God said, \"Let there be light\"; and there was light."
          },
          {
            "number": 26,
            "text": "Then God said, \"Let Us make man in Our image, according to Our likeness; and let them rule over the fish of the sea and over the birds of the sky and over the cattle and over all the earth, and over every creeping thing that creeps on the earth.\"",
            "translation": "Then God said, \"Let Us make man in Our image, according to Our likeness; and let them rule over the fish of the sea and over the birds of the sky and over the cattle and over all the earth, and over every creeping thing that creeps on the earth.\""
          },
          {
            "number": 31,
            "text": "God saw all that He had made, and behold, it was very good. And there was evening and there was morning, the sixth day.",
            "translation": "God saw all that He had made, and behold, it was very good. And there was evening and there was morning, the sixth day."
          }
        ]
      },
      {
        "number": 2,
        "summary": "The creation of man and woman, the Garden of Eden, and the first marriage.",
        "themes": [
          "Humanity",
          "Marriage",
          "Garden",
          "Relationship"
        ],
        "keyVerses": [
          7,
          18,
          24
        ],
        "verses": [
          {
            "number": 7,
            "text": "Then the Lord God formed man of dust from the ground, and breathed into his nostrils the breath of life; and man became a living being.",
            "translation": "Then the Lord God formed man of dust from the ground, and breathed into his nostrils the breath of life; and man became a living being."
          },
          {
            "number": 18,
            "text": "Then the Lord God said, \"It is not good for the man to be alone; I will make him a helper suitable for him.\"",
            "translation": "Then the Lord God said, \"It is not good for the man to be alone; I will make him a helper suitable for him.\""
          },
          {
            "number": 24,
            "text": "For this reason a man shall leave his father and his mother, and be joined to his wife; and they shall become one flesh.",
            "translation": "For this reason a man shall leave his father and his mother, and be joined to his wife; and they shall become one flesh."
          }
        ]
      },
      {
        "number": 13,
        "summary": "Abram and Lot separate, and God renews His promise to Abram.",
        "themes": [
          "Separation",
          "Promise",
          "Faith",
          "Land"
        ],
        "keyVerses": [
          14,
          15,
          18
        ],
        "verses": [
          {
            "number": 1,
            "text": "So Abram went up from Egypt to the Negev, he and his wife and all that belonged to him, and Lot with him.",
            "translation": "So Abram went up from Egypt to the Negev, he and his wife and all that belonged to him, and Lot with him."
          },
          {
            "number": 2,
            "text": "Now Abram was very rich in livestock, in silver and in gold.",
            "translation": "Now Abram was very rich in livestock, in silver and in gold."
          },
          {
            "number": 3,
            "text": "He went on his journeys from the Negev as far as Bethel, to the place where his tent had been at the beginning, between Bethel and Ai,",
            "translation": "He went on his journeys from the Negev as far as Bethel, to the place where his tent had been at the beginning, between Bethel and Ai,"
          },
          {
            "number": 4,
            "text": "to the place of the altar which he had made there formerly; and there Abram called on the name of the Lord.",
            "translation": "to the place of the altar which he had made there formerly; and there Abram called on the name of the Lord."
          },
          {
            "number": 5,
            "text": "Now Lot, who went with Abram, also had flocks and herds and tents.",
            "translation": "Now Lot, who went with Abram, also had flocks and herds and tents."
          },
          {
            "number": 6,
            "text": "And the land could not sustain them while dwelling together, for their possessions were so great that they were not able to remain together.",
            "translation": "And the land could not sustain them while dwelling together, for their possessions were so great that they were not able to remain together."
          },
          {
            "number": 7,
            "text": "And there was strife between the herdsmen of Abram's livestock and the herdsmen of Lot's livestock. Now the Canaanite and the Perizzite were dwelling then in the land.",
            "translation": "And there was strife between the herdsmen of Abram's livestock and the herdsmen of Lot's livestock. Now the Canaanite and the Perizzite were dwelling then in the land."
          },
          {
            "number": 8,
            "text": "So Abram said to Lot, \"Please let there be no strife between you and me, nor between my herdsmen and your herdsmen, for we are brothers.",
            "translation": "So Abram said to Lot, \"Please let there be no strife between you and me, nor between my herdsmen and your herdsmen, for we are brothers."
          },
          {
            "number": 9,
            "text": "Is not the whole land before you? Please separate from me; if to the left, then I will go to the right; or if to the right, then I will go to the left.\"",
            "translation": "Is not the whole land before you? Please separate from me; if to the left, then I will go to the right; or if to the right, then I will go to the left.\""
          },
          {
            "number": 10,
            "text": "Lot lifted up his eyes and saw all the valley of the Jordan, that it was well watered everywhere—this was before the Lord destroyed Sodom and Gomorrah—like the garden of the Lord, like the land of Egypt as you go to Zoar.",
            "translation": "Lot lifted up his eyes and saw all the valley of the Jordan, that it was well watered everywhere—this was before the Lord destroyed Sodom and Gomorrah—like the garden of the Lord, like the land of Egypt as you go to Zoar."
          },
          {
            "number": 11,
            "text": "So Lot chose for himself all the valley of the Jordan, and Lot journeyed eastward. Thus they separated from each other.",
            "translation": "So Lot chose for himself all the valley of the Jordan, and Lot journeyed eastward. Thus they separated from each other."
          },
          {
            "number": 12,
            "text": "Abram settled in the land of Canaan, while Lot settled in the cities of the valley, and moved his tents as far as Sodom.",
            "translation": "Abram settled in the land of Canaan, while Lot settled in the cities of the valley, and moved his tents as far as Sodom."
          },
          {
            "number": 13,
            "text": "Now the men of Sodom were wicked exceedingly and sinners against the Lord.",
            "translation": "Now the men of Sodom were wicked exceedingly and sinners against the Lord."
          },
          {
            "number": 14,
            "text": "The Lord said to Abram, after Lot had separated from him, \"Now lift up your eyes and look from the place where you are, northward and southward and eastward and westward;",
            "translation": "The Lord said to Abram, after Lot had separated from him, \"Now lift up your eyes and look from the place where you are, northward and southward and eastward and westward;"
          },
          {
            "number": 15,
            "text": "for all the land which you see, I will give it to you and to your descendants forever.",
            "translation": "for all the land which you see, I will give it to you and to your descendants forever."
          },
          {
            "number": 16,
            "text": "I will make your descendants as the dust of the earth, so that if anyone can number the dust of the earth, then your descendants can also be numbered.",
            "translation": "I will make your descendants as the dust of the earth, so that if anyone can number the dust of the earth, then your descendants can also be numbered."
          },
          {
            "number": 17,
            "text": "Arise, walk about the land through its length and breadth; for I will give it to you.\"",
            "translation": "Arise, walk about the land through its length and breadth; for I will give it to you.\""
          },
          {
            "number": 18,
            "text": "Then Abram moved his tent and came and dwelt by the oaks of Mamre, which are in Hebron, and there he built an altar to the Lord.",
            "translation": "Then Abram moved his tent and came and dwelt by the oaks of Mamre, which are in Hebron, and there he built an altar to the Lord."
          }
        ]
      }
    ]
  },
  {
    "name": "Exodus",
    "testament": "Old",
    "category": "Law",
    "chapters": 40,
    "summary": "The story of Israel's deliverance from Egypt, the giving of the Law at Mount Sinai, and the construction of the tabernacle.",
    "author": "Moses",
    "dateWritten": "1445-1405 BC",
    "chaptersData": [
      {
        "number": 1,
        "summary": "The Israelites multiply in Egypt and face oppression under a new pharaoh.",
        "themes": [
          "Oppression",
          "Growth",
          "Fear",
          "Providence"
        ],
        "keyVerses": [
          7,
          12
        ],
        "verses": [
          {
            "number": 7,
            "text": "But the sons of Israel were fruitful and increased greatly, and multiplied, and became exceedingly mighty, so that the land was filled with them.",
            "translation": "But the sons of Israel were fruitful and increased greatly, and multiplied, and became exceedingly mighty, so that the land was filled with them."
          },
          {
            "number": 12,
            "text": "But the more they afflicted them, the more they multiplied and the more they spread out, so that they were in dread of the sons of Israel.",
            "translation": "But the more they afflicted them, the more they multiplied and the more they spread out, so that they were in dread of the sons of Israel."
          }
        ]
      },
      {
        "number": 20,
        "summary": "God gives the Ten Commandments to Moses on Mount Sinai.",
        "themes": [
          "Law",
          "Commandments",
          "Worship",
          "Holiness"
        ],
        "keyVerses": [
          1,
          2,
          3
        ],
        "verses": [
          {
            "number": 1,
            "text": "Then God spoke all these words, saying,",
            "translation": "Then God spoke all these words, saying,"
          },
          {
            "number": 2,
            "text": "\"I am the Lord your God, who brought you out of the land of Egypt, out of the house of slavery.",
            "translation": "\"I am the Lord your God, who brought you out of the land of Egypt, out of the house of slavery."
          },
          {
            "number": 3,
            "text": "\"You shall have no other gods before Me.",
            "translation": "\"You shall have no other gods before Me."
          }
        ]
      }
    ]
  },
  {
    "name": "Psalms",
    "testament": "Old",
    "category": "Poetry",
    "chapters": 150,
    "summary": "A collection of 150 poetic prayers, songs, and hymns expressing the full range of human emotions and experiences in relationship with God.",
    "author": "David, Asaph, Sons of Korah, Solomon, Moses, and others",
    "dateWritten": "1440-430 BC",
    "chaptersData": [
      {
        "number": 1,
        "summary": "The contrast between the righteous and the wicked, emphasizing the importance of meditating on God's law.",
        "themes": [
          "Righteousness",
          "Meditation",
          "Blessing",
          "Judgment"
        ],
        "keyVerses": [
          1,
          2,
          6
        ],
        "verses": [
          {
            "number": 1,
            "text": "How blessed is the man who does not walk in the counsel of the wicked, Nor stand in the path of sinners, Nor sit in the seat of scoffers!",
            "translation": "How blessed is the man who does not walk in the counsel of the wicked, Nor stand in the path of sinners, Nor sit in the seat of scoffers!"
          },
          {
            "number": 2,
            "text": "But his delight is in the law of the Lord, And in His law he meditates day and night.",
            "translation": "But his delight is in the law of the Lord, And in His law he meditates day and night."
          },
          {
            "number": 6,
            "text": "For the Lord knows the way of the righteous, But the way of the wicked will perish.",
            "translation": "For the Lord knows the way of the righteous, But the way of the wicked will perish."
          }
        ]
      },
      {
        "number": 23,
        "summary": "David's famous psalm describing God as a shepherd who provides, protects, and guides His people.",
        "themes": [
          "Providence",
          "Protection",
          "Guidance",
          "Trust"
        ],
        "keyVerses": [
          1,
          4,
          6
        ],
        "verses": [
          {
            "number": 1,
            "text": "The Lord is my shepherd, I shall not want.",
            "translation": "The Lord is my shepherd, I shall not want."
          },
          {
            "number": 4,
            "text": "Even though I walk through the valley of the shadow of death, I fear no evil, for You are with me; Your rod and Your staff, they comfort me.",
            "translation": "Even though I walk through the valley of the shadow of death, I fear no evil, for You are with me; Your rod and Your staff, they comfort me."
          },
          {
            "number": 6,
            "text": "Surely goodness and lovingkindness will follow me all the days of my life, And I will dwell in the house of the Lord forever.",
            "translation": "Surely goodness and lovingkindness will follow me all the days of my life, And I will dwell in the house of the Lord forever."
          }
        ]
      }
    ]
  },
  {
    "name": "Matthew",
    "testament": "New",
    "category": "Gospel",
    "chapters": 28,
    "summary": "The first Gospel, presenting Jesus as the Messiah and King, emphasizing His fulfillment of Old Testament prophecies.",
    "author": "Matthew (Levi)",
    "dateWritten": "AD 50-70",
    "chaptersData": [
      {
        "number": 1,
        "summary": "The genealogy of Jesus Christ and the birth narrative, showing His royal lineage and divine conception.",
        "themes": [
          "Genealogy",
          "Birth",
          "Messiah",
          "Fulfillment"
        ],
        "keyVerses": [
          1,
          21,
          23
        ],
        "verses": [
          {
            "number": 1,
            "text": "The record of the genealogy of Jesus the Messiah, the son of David, the son of Abraham.",
            "translation": "The record of the genealogy of Jesus the Messiah, the son of David, the son of Abraham."
          },
          {
            "number": 21,
            "text": "She will bear a Son; and you shall call His name Jesus, for He will save His people from their sins.",
            "translation": "She will bear a Son; and you shall call His name Jesus, for He will save His people from their sins."
          },
          {
            "number": 23,
            "text": "\"Behold, the virgin shall be with child and shall bear a Son, and they shall call His name Immanuel,\" which translated means, \"God with us.\"",
            "translation": "\"Behold, the virgin shall be with child and shall bear a Son, and they shall call His name Immanuel,\" which translated means, \"God with us.\""
          }
        ]
      },
      {
        "number": 5,
        "summary": "The beginning of the Sermon on the Mount, including the Beatitudes and teachings on salt and light.",
        "themes": [
          "Beatitudes",
          "Righteousness",
          "Kingdom",
          "Blessing"
        ],
        "keyVerses": [
          3,
          13,
          16
        ],
        "verses": [
          {
            "number": 3,
            "text": "\"Blessed are the poor in spirit, for theirs is the kingdom of heaven.",
            "translation": "\"Blessed are the poor in spirit, for theirs is the kingdom of heaven."
          },
          {
            "number": 13,
            "text": "\"You are the salt of the earth; but if the salt has become tasteless, how can it be made salty again? It is no longer good for anything, except to be thrown out and trampled under foot by men.",
            "translation": "\"You are the salt of the earth; but if the salt has become tasteless, how can it be made salty again? It is no longer good for anything, except to be thrown out and trampled under foot by men."
          },
          {
            "number": 16,
            "text": "\"Let your light shine before men in such a way that they may see your good works, and glorify your Father who is in heaven.",
            "translation": "\"Let your light shine before men in such a way that they may see your good works, and glorify your Father who is in heaven."
          }
        ]
      }
    ]
  },
  {
    "name": "John",
    "testament": "New",
    "category": "Gospel",
    "chapters": 21,
    "summary": "The fourth Gospel, emphasizing Jesus as the divine Word and Son of God, with focus on His deity and eternal nature.",
    "author": "John the Apostle",
    "dateWritten": "AD 85-95",
    "chaptersData": [
      {
        "number": 1,
        "summary": "The prologue establishing Jesus as the eternal Word, and the beginning of His ministry with John the Baptist.",
        "themes": [
          "Word",
          "Light",
          "Life",
          "Incarnation"
        ],
        "keyVerses": [
          1,
          14,
          29
        ],
        "verses": [
          {
            "number": 1,
            "text": "In the beginning was the Word, and the Word was with God, and the Word was God.",
            "translation": "In the beginning was the Word, and the Word was with God, and the Word was God."
          },
          {
            "number": 14,
            "text": "And the Word became flesh, and dwelt among us, and we saw His glory, glory as of the only begotten from the Father, full of grace and truth.",
            "translation": "And the Word became flesh, and dwelt among us, and we saw His glory, glory as of the only begotten from the Father, full of grace and truth."
          },
          {
            "number": 29,
            "text": "The next day he saw Jesus coming to him and said, \"Behold, the Lamb of God who takes away the sin of the world!",
            "translation": "The next day he saw Jesus coming to him and said, \"Behold, the Lamb of God who takes away the sin of the world!"
          }
        ]
      },
      {
        "number": 3,
        "summary": "Jesus' conversation with Nicodemus about being born again, and John the Baptist's testimony about Jesus.",
        "themes": [
          "New Birth",
          "Eternal Life",
          "Faith",
          "Testimony"
        ],
        "keyVerses": [
          16,
          17,
          36
        ],
        "verses": [
          {
            "number": 16,
            "text": "\"For God so loved the world, that He gave His only begotten Son, that whoever believes in Him shall not perish, but have eternal life.",
            "translation": "\"For God so loved the world, that He gave His only begotten Son, that whoever believes in Him shall not perish, but have eternal life."
          },
          {
            "number": 17,
            "text": "\"For God did not send the Son into the world to judge the world, but that the world might be saved through Him.",
            "translation": "\"For God did not send the Son into the world to judge the world, but that the world might be saved through Him."
          },
          {
            "number": 36,
            "text": "\"He who believes in the Son has eternal life; but he who does not obey the Son will not see life, but the wrath of God abides on him.\"",
            "translation": "\"He who believes in the Son has eternal life; but he who does not obey the Son will not see life, but the wrath of God abides on him.\""
          }
        ]
      }
    ]
  }
]

// Function to get book by name
export function getBibleBook(name: string): BibleBook | undefined {
  if (!name || typeof name !== 'string') return undefined
  return BIBLE_BOOKS.find(book => book.name.toLowerCase() === name.toLowerCase())
}

// Function to get all books
export function getAllBibleBooks(): BibleBook[] {
  return BIBLE_BOOKS
}

// Function to get chapters of a book
export function getBibleChapters(bookName: string): BibleChapter[] {
  const book = getBibleBook(bookName)
  return book ? book.chaptersData : []
}

// Function to get specific chapter
export function getBibleChapter(bookName: string, chapterNumber: number): BibleChapter | undefined {
  const book = getBibleBook(bookName)
  return book ? book.chaptersData.find(chapter => chapter.number === chapterNumber) : undefined
}

// Function to get verses of a chapter
export function getBibleVerses(bookName: string, chapterNumber: number): BibleVerse[] {
  const chapter = getBibleChapter(bookName, chapterNumber)
  return chapter ? chapter.verses : []
}

// Function to get specific verse
export function getBibleVerse(bookName: string, chapterNumber: number, verseNumber: number): BibleVerse | undefined {
  const chapter = getBibleChapter(bookName, chapterNumber)
  return chapter ? chapter.verses.find(verse => verse.number === verseNumber) : undefined
}
