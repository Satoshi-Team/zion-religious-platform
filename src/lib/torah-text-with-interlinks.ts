// Enhanced Torah Data with Interlinks for SEO
// Includes related texts and cross-references to Quran and Bible

import { InterlinkingService } from './interlinking-service'
import { EnhancedTorahVerse, TorahData } from './torah-text-enhanced'
import { RelatedText, VerseInterlinks } from '@/types/related-texts'

export interface EnhancedTorahChapter {
  [verseNumber: number]: EnhancedTorahVerse
}

export interface EnhancedTorahBook {
  [chapterNumber: number]: EnhancedTorahChapter
}

export interface EnhancedTorahData {
  [bookName: string]: EnhancedTorahBook
}

// Enhanced Torah data with interlinks
export const ENHANCED_TORAH_DATA: EnhancedTorahData = {
  "Bereishit": {
    "1": {
      "1": {
        hebrew: "בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ",
        english: "In the beginning God created the heavens and the earth.",
        transliteration: "Bereishit bara Elohim et hashamayim ve'et ha'aretz",
        interlinks: {
          relatedTexts: [
            {
              type: 'quran',
              reference: 'Quran 2:255',
              title: 'Ayat al-Kursi',
              description: 'Quranic description of God\'s sovereignty over creation',
              relevance: 'thematic',
              keywords: ['creation', 'divine power', 'sovereignty', 'heavens and earth']
            },
            {
              type: 'bible',
              reference: 'Bible John 1:1',
              title: 'The Word and Creation',
              description: 'Christian account of creation through the Word',
              relevance: 'thematic',
              keywords: ['creation', 'divine word', 'beginning', 'cosmic order']
            }
          ],
          crossReferences: ['Quran 2:255', 'Bible John 1:1'],
          themes: ['creation', 'monotheism'],
          keywords: ['creation narrative', 'Genesis', 'divine beginning', 'cosmic origin'],
          seoDescription: 'Genesis 1:1 - Creation narrative - explore creation accounts across Jewish, Islamic, and Christian traditions'
        }
      },
      "2": {
        hebrew: "וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם",
        english: "Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.",
        transliteration: "Veha'aretz hayetah tohu vavohu vechoshech al penei tehom veruach Elohim merachefet al penei hamayim",
        interlinks: {
          relatedTexts: [
            {
              type: 'quran',
              reference: 'Quran 11:7',
              title: 'Creation of Heavens and Earth',
              description: 'Quranic account of the initial state of creation',
              relevance: 'thematic',
              keywords: ['formless earth', 'divine spirit', 'creation process', 'cosmic order']
            }
          ],
          crossReferences: ['Quran 11:7'],
          themes: ['creation', 'divine spirit'],
          keywords: ['formless earth', 'divine spirit', 'creation process', 'cosmic beginning'],
          seoDescription: 'Formless earth and divine spirit - explore creation processes across Jewish and Islamic traditions'
        }
      },
      "3": {
        hebrew: "וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר וַיְהִי אוֹר",
        english: "And God said, \"Let there be light,\" and there was light.",
        transliteration: "Vayomer Elohim yehi or vayehi or",
        interlinks: {
          relatedTexts: [
            {
              type: 'quran',
              reference: 'Quran 6:1',
              title: 'Creation of Light',
              description: 'Quranic account of God creating light and darkness',
              relevance: 'thematic',
              keywords: ['divine light', 'creation by word', 'cosmic light', 'divine command']
            }
          ],
          crossReferences: ['Quran 6:1'],
          themes: ['creation', 'light'],
          keywords: ['divine light', 'creation by word', 'cosmic illumination', 'divine command'],
          seoDescription: 'Creation of light - explore divine light creation across Jewish and Islamic traditions'
        }
      },
      "26": {
        hebrew: "וַיֹּאמֶר אֱלֹהִים נַעֲשֶׂה אָדָם בְּצַלְמֵנוּ כִּדְמוּתֵנוּ וְיִרְדּוּ בִדְגַת הַיָּם וּבְעוֹף הַשָּׁמַיִם וּבַבְּהֵמָה וּבְכָל הָאָרֶץ וּבְכָל הָרֶמֶשׂ הָרֹמֵשׂ עַל הָאָרֶץ",
        english: "Then God said, \"Let us make mankind in our image, in our likeness, so that they may rule over the fish in the sea and the birds in the sky, over the livestock and all the wild animals, and over all the creatures that move along the ground.\"",
        transliteration: "Vayomer Elohim na'aseh adam betzalmenu kidmutenu veyirdu vidgat hayam uve'of hashamayim uvabehemah uvchol ha'aretz uvchol haremes haromes al ha'aretz",
        interlinks: {
          relatedTexts: [
            {
              type: 'quran',
              reference: 'Quran 2:30',
              title: 'Creation of Adam',
              description: 'Quranic account of God creating Adam as His vicegerent',
              relevance: 'parallel',
              keywords: ['Adam', 'human creation', 'divine image', 'vicegerency']
            },
            {
              type: 'bible',
              reference: 'Bible Genesis 1:26',
              title: 'Image of God',
              description: 'Biblical account of human creation in God\'s image',
              relevance: 'parallel',
              keywords: ['image of God', 'human dignity', 'divine likeness', 'human dominion']
            }
          ],
          crossReferences: ['Quran 2:30', 'Bible Genesis 1:26'],
          themes: ['human creation', 'divine image'],
          keywords: ['image of God', 'human creation', 'divine likeness', 'human dominion'],
          seoDescription: 'Creation of humanity in God\'s image - explore human creation across Jewish, Islamic, and Christian traditions'
        }
      }
    },
    "2": {
      "7": {
        hebrew: "וַיִּיצֶר יְהוָה אֱלֹהִים אֶת הָאָדָם עָפָר מִן הָאֲדָמָה וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים וַיְהִי הָאָדָם לְנֶפֶשׁ חַיָּה",
        english: "Then the Lord God formed a man from the dust of the ground and breathed into his nostrils the breath of life, and the man became a living being.",
        transliteration: "Vayitzer Adonai Elohim et ha'adam afar min ha'adamah vayipach be'apav nishmat chayim vayehi ha'adam lenefesh chayah",
        interlinks: {
          relatedTexts: [
            {
              type: 'quran',
              reference: 'Quran 15:26',
              title: 'Creation from Clay',
              description: 'Quranic account of human creation from clay',
              relevance: 'parallel',
              keywords: ['clay creation', 'divine breath', 'human formation', 'life-giving spirit']
            }
          ],
          crossReferences: ['Quran 15:26'],
          themes: ['human creation', 'divine breath'],
          keywords: ['dust creation', 'divine breath', 'life-giving spirit', 'human formation'],
          seoDescription: 'Human creation from dust - explore human formation across Jewish and Islamic traditions'
        }
      }
    },
    "12": {
      "1": {
        hebrew: "וַיֹּאמֶר יְהוָה אֶל אַבְרָם לֶךְ לְךָ מֵאַרְצְךָ וּמִמּוֹלַדְתְּךָ וּמִבֵּית אָבִיךָ אֶל הָאָרֶץ אֲשֶׁר אַרְאֶךָּ",
        english: "The Lord had said to Abram, \"Go from your country, your people and your father's household to the land I will show you.\"",
        transliteration: "Vayomer Adonai el Avram lech lecha me'artzecha umimoladetecha umibeit avicha el ha'aretz asher areka",
        interlinks: {
          relatedTexts: [
            {
              type: 'quran',
              reference: 'Quran 21:69',
              title: 'Abraham\'s Call',
              description: 'Quranic account of Abraham\'s divine call and journey',
              relevance: 'thematic',
              keywords: ['Abraham', 'divine call', 'faith journey', 'promised land']
            },
            {
              type: 'bible',
              reference: 'Bible Matthew 1:1',
              title: 'Abrahamic Lineage',
              description: 'Biblical genealogy connecting Abraham to Jesus',
              relevance: 'historical',
              keywords: ['Abraham', 'Messianic lineage', 'divine promise', 'covenant']
            }
          ],
          crossReferences: ['Quran 21:69', 'Bible Matthew 1:1'],
          themes: ['prophecy', 'faith'],
          keywords: ['Abraham', 'divine call', 'faith journey', 'promised land'],
          seoDescription: 'Abraham\'s divine call - explore Abrahamic faith across Jewish, Islamic, and Christian traditions'
        }
      }
    }
  },
  "Shemot": {
    "1": {
      "1": {
        hebrew: "וְאֵלֶּה שְׁמוֹת בְּנֵי יִשְׂרָאֵל הַבָּאִים מִצְרָיְמָה אֵת יַעֲקֹב אִישׁ וּבֵיתוֹ בָּאוּ",
        english: "These are the names of the sons of Israel who went to Egypt with Jacob, each with his family:",
        transliteration: "Ve'eleh shemot bnei Yisrael haba'im Mitzraymah et Ya'akov ish uveito ba'u",
        interlinks: {
          relatedTexts: [
            {
              type: 'quran',
              reference: 'Quran 2:49',
              title: 'Exodus in Quran',
              description: 'Quranic account of Israelites\' exodus from Egypt',
              relevance: 'historical',
              keywords: ['exodus', 'Egypt', 'Israelites', 'divine deliverance']
            },
            {
              type: 'bible',
              reference: 'Bible Acts 7:6',
              title: 'Stephen\'s Speech',
              description: 'Christian account of Israelite history including Egypt',
              relevance: 'historical',
              keywords: ['Israelite history', 'Egypt', 'divine promise', 'prophetic fulfillment']
            }
          ],
          crossReferences: ['Quran 2:49', 'Bible Acts 7:6'],
          themes: ['historical', 'prophecy'],
          keywords: ['exodus', 'Israelite history', 'Egypt', 'divine deliverance'],
          seoDescription: 'Exodus narrative - explore Israelite history across Jewish, Islamic, and Christian traditions'
        }
      }
    },
    "20": {
      "1": {
        hebrew: "וַיְדַבֵּר אֱלֹהִים אֵת כָּל הַדְּבָרִים הָאֵלֶּה לֵאמֹר",
        english: "And God spoke all these words:",
        transliteration: "Vayedaber Elohim et kol hadevarim ha'eleh lemor",
        interlinks: {
          relatedTexts: [
            {
              type: 'quran',
              reference: 'Quran 7:144',
              title: 'Divine Revelation to Moses',
              description: 'Quranic account of God speaking to Moses',
              relevance: 'parallel',
              keywords: ['divine revelation', 'Moses', 'divine speech', 'prophetic communication']
            }
          ],
          crossReferences: ['Quran 7:144'],
          themes: ['revelation', 'prophecy'],
          keywords: ['Ten Commandments', 'divine revelation', 'Moses', 'divine speech'],
          seoDescription: 'God speaking to Moses - explore divine revelation across Jewish and Islamic traditions'
        }
      },
      "2": {
        hebrew: "אָנֹכִי יְהוָה אֱלֹהֶיךָ אֲשֶׁר הוֹצֵאתִיךָ מֵאֶרֶץ מִצְרַיִם מִבֵּית עֲבָדִים",
        english: "\"I am the Lord your God, who brought you out of Egypt, out of the land of slavery.\"",
        transliteration: "Anochi Adonai Eloheicha asher hotzeitcha me'eretz Mitzrayim mibeit avadim",
        interlinks: {
          relatedTexts: [
            {
              type: 'quran',
              reference: 'Quran 20:12',
              title: 'Divine Self-Identification',
              description: 'Quranic account of God identifying Himself to Moses',
              relevance: 'thematic',
              keywords: ['divine identity', 'monotheism', 'divine deliverance', 'prophetic revelation']
            }
          ],
          crossReferences: ['Quran 20:12'],
          themes: ['monotheism', 'deliverance'],
          keywords: ['divine identity', 'monotheism', 'divine deliverance', 'First Commandment'],
          seoDescription: 'First Commandment - explore divine identity and monotheism across Jewish and Islamic traditions'
        }
      }
    }
  },
  "Vayikra": {
    "19": {
      "18": {
        hebrew: "לֹא תִקֹּם וְלֹא תִטֹּר אֶת בְּנֵי עַמֶּךָ וְאָהַבְתָּ לְרֵעֲךָ כָּמוֹךָ אֲנִי יְהוָה",
        english: "\"Do not seek revenge or bear a grudge against anyone among your people, but love your neighbor as yourself. I am the Lord.\"",
        transliteration: "Lo tikom velo titor et bnei amecha ve'ahavta lere'acha kamocha ani Adonai",
        interlinks: {
          relatedTexts: [
            {
              type: 'bible',
              reference: 'Bible Matthew 22:39',
              title: 'Love Your Neighbor',
              description: 'Jesus\' reference to this commandment as the second greatest',
              relevance: 'parallel',
              keywords: ['love neighbor', 'golden rule', 'ethical commandment', 'divine love']
            },
            {
              type: 'quran',
              reference: 'Quran 4:36',
              title: 'Kindness to Neighbors',
              description: 'Quranic commandment to be kind to neighbors',
              relevance: 'thematic',
              keywords: ['neighbor love', 'kindness', 'ethical behavior', 'divine commandment']
            }
          ],
          crossReferences: ['Bible Matthew 22:39', 'Quran 4:36'],
          themes: ['love', 'ethics'],
          keywords: ['love neighbor', 'golden rule', 'ethical commandment', 'divine love'],
          seoDescription: 'Love your neighbor - explore neighborly love across Jewish, Christian, and Islamic traditions'
        }
      }
    }
  },
  "Bamidbar": {
    "6": {
      "24": {
        hebrew: "יְבָרֶכְךָ יְהוָה וְיִשְׁמְרֶךָ",
        english: "\"The Lord bless you and keep you;\"",
        transliteration: "Yevarechecha Adonai veyishmerecha",
        interlinks: {
          relatedTexts: [
            {
              type: 'bible',
              reference: 'Bible Numbers 6:24',
              title: 'Priestly Blessing',
              description: 'Biblical priestly blessing for divine protection',
              relevance: 'parallel',
              keywords: ['priestly blessing', 'divine protection', 'divine favor', 'spiritual blessing']
            }
          ],
          crossReferences: ['Bible Numbers 6:24'],
          themes: ['blessing', 'protection'],
          keywords: ['priestly blessing', 'divine protection', 'divine favor', 'spiritual blessing'],
          seoDescription: 'Priestly blessing - explore divine blessings across Jewish and Christian traditions'
        }
      }
    }
  },
  "Devarim": {
    "6": {
      "4": {
        hebrew: "שְׁמַע יִשְׂרָאֵל יְהוָה אֱלֹהֵינוּ יְהוָה אֶחָד",
        english: "Hear, Israel: The Lord our God, the Lord is one.",
        transliteration: "Shema Yisrael Adonai Eloheinu Adonai echad",
        interlinks: {
          relatedTexts: [
            {
              type: 'quran',
              reference: 'Quran 112:1',
              title: 'Surah Al-Ikhlas',
              description: 'Quranic declaration of divine unity',
              relevance: 'parallel',
              keywords: ['divine unity', 'monotheism', 'faith declaration', 'core belief']
            },
            {
              type: 'bible',
              reference: 'Bible Mark 12:29',
              title: 'Jesus on the Greatest Commandment',
              description: 'Jesus\' reference to the Shema as the greatest commandment',
              relevance: 'thematic',
              keywords: ['greatest commandment', 'divine love', 'monotheism', 'spiritual priority']
            }
          ],
          crossReferences: ['Quran 112:1', 'Bible Mark 12:29'],
          themes: ['monotheism', 'faith'],
          keywords: ['Shema', 'divine unity', 'monotheism', 'core commandment'],
          seoDescription: 'The Shema - Jewish declaration of faith - compare with Islamic and Christian monotheistic teachings'
        }
      }
    }
  }
}

// Enhanced functions with interlinks
export function getEnhancedTorahVerse(book: string, chapter: number, verse: number): EnhancedTorahVerse | null {
  const bookData = ENHANCED_TORAH_DATA[book]
  if (!bookData) return null
  
  const chapterData = bookData[chapter]
  if (!chapterData) return null
  
  return chapterData[verse] || null
}

export function getEnhancedTorahChapter(book: string, chapter: number): EnhancedTorahChapter | null {
  const bookData = ENHANCED_TORAH_DATA[book]
  if (!bookData) return null
  
  return bookData[chapter] || null
}

export function getAllEnhancedTorahBooks(): string[] {
  return Object.keys(ENHANCED_TORAH_DATA)
}

export function getAllEnhancedTorahChapters(book: string): number[] {
  const bookData = ENHANCED_TORAH_DATA[book]
  if (!bookData) return []
  
  return Object.keys(bookData).map(Number).sort((a, b) => a - b)
}

export function getAllEnhancedTorahVerses(book: string, chapter: number): number[] {
  const chapterData = getEnhancedTorahChapter(book, chapter)
  if (!chapterData) return []
  
  return Object.keys(chapterData).map(Number).sort((a, b) => a - b)
}

// SEO-focused functions
export function getTorahVerseSEOData(book: string, chapter: number, verse: number) {
  const verseData = getEnhancedTorahVerse(book, chapter, verse)
  if (!verseData) return null

  return {
    title: `${book} ${chapter}:${verse} - ${verseData.english.substring(0, 50)}...`,
    description: verseData.interlinks?.seoDescription || `${book} ${chapter}:${verse} - Torah verse with Hebrew text, English translation, and cross-references.`,
    keywords: verseData.interlinks?.keywords || [],
    relatedTexts: verseData.interlinks?.relatedTexts || [],
    crossReferences: verseData.interlinks?.crossReferences || [],
    themes: verseData.interlinks?.themes || []
  }
} 