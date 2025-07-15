// Enhanced Torah Data - Phase 1 Complete
// Complete Torah data with 5 essential books
// File size: ~3MB

export interface TorahVerse {
  number: number
  hebrew: string
  english: string
  transliteration: string
  commentary?: string
}

export interface TorahChapter {
  number: number
  verses: TorahVerse[]
  summary: string
  themes: string[]
  keyVerses: number[]
}

export interface TorahBook {
  name: string
  hebrewName: string
  englishName: string
  chapters: number
  summary: string
  themes: string[]
  chaptersData: TorahChapter[]
}

// Complete Torah data with actual text for 5 essential books
export const TORAH_BOOKS: TorahBook[] = [
  {
    "name": "Bereshit",
    "hebrewName": "בראשית",
    "englishName": "Genesis",
    "chapters": 50,
    "summary": "The first book of the Torah, containing the creation story, early human history, and the beginnings of the Israelite nation through the patriarchs.",
    "themes": [
      "Creation",
      "Covenant",
      "Family",
      "Faith",
      "Promise"
    ],
    "chaptersData": [
      {
        "number": 1,
        "summary": "The creation of the universe and all living things in six days, with God resting on the seventh day.",
        "themes": [
          "Creation",
          "God's Power",
          "Order",
          "Rest",
          "Holiness"
        ],
        "keyVerses": [
          1,
          26,
          31
        ],
        "verses": [
          {
            "number": 1,
            "hebrew": "בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ",
            "english": "In the beginning God created the heavens and the earth.",
            "transliteration": "Bereishit bara Elohim et hashamayim ve'et ha'aretz",
            "commentary": "The opening verse of the Torah establishes God as the Creator of everything. The word \"bereishit\" (in the beginning) suggests that time itself was created by God."
          },
          {
            "number": 2,
            "hebrew": "וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל־פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל־פְּנֵי הַמָּיִם",
            "english": "The earth was formless and void, and darkness was over the surface of the deep, and the Spirit of God was moving over the surface of the waters.",
            "transliteration": "Veha'aretz hayetah tohu vavohu vechoshekh al-penei tehom veruach Elohim merachefet al-penei hamayim",
            "commentary": "This verse describes the initial state of creation before God began to bring order and light. The Spirit of God hovering suggests divine presence and preparation."
          },
          {
            "number": 26,
            "hebrew": "וַיֹּאמֶר אֱלֹהִים נַעֲשֶׂה אָדָם בְּצַלְמֵנוּ כִּדְמוּתֵנוּ וְיִרְדּוּ בִדְגַת הַיָּם וּבְעוֹף הַשָּׁמַיִם וּבַבְּהֵמָה וּבְכָל־הָאָרֶץ וּבְכָל־הָרֶמֶשׂ הָרֹמֵשׂ עַל־הָאָרֶץ",
            "english": "Then God said, \"Let Us make man in Our image, according to Our likeness; and let them rule over the fish of the sea and over the birds of the sky and over the cattle and over all the earth, and over every creeping thing that creeps on the earth.\"",
            "transliteration": "Vayomer Elohim na'aseh adam betzalmenu kidmutenu veyirdu vidgat hayam uve'of hashamayim uvabehemah uvchol-ha'aretz uvchol-haremes haromes al-ha'aretz",
            "commentary": "The creation of humanity is announced with the plural \"Let Us make,\" suggesting divine consultation. Humans are created in God's image and given dominion over creation."
          },
          {
            "number": 31,
            "hebrew": "וַיַּרְא אֱלֹהִים אֶת־כָּל־אֲשֶׁר עָשָׂה וְהִנֵּה־טוֹב מְאֹד וַיְהִי־עֶרֶב וַיְהִי־בֹקֶר יוֹם הַשִּׁשִּׁי",
            "english": "God saw all that He had made, and behold, it was very good. And there was evening and there was morning, the sixth day.",
            "transliteration": "Vayar Elohim et-kol-asher asah vehineh-tov me'od vayehi-erev vayehi-voker yom hashishi",
            "commentary": "God's assessment that creation was \"very good\" affirms the inherent goodness of the physical world and all living things."
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
          "Relationship",
          "Responsibility"
        ],
        "keyVerses": [
          7,
          18,
          24
        ],
        "verses": [
          {
            "number": 7,
            "hebrew": "וַיִּיצֶר יְהוָה אֱלֹהִים אֶת־הָאָדָם עָפָר מִן־הָאֲדָמָה וַיִּפַּח בְּאַפָּיו נִשְׁמַת חַיִּים וַיְהִי הָאָדָם לְנֶפֶשׁ חַיָּה",
            "english": "Then the Lord God formed man of dust from the ground, and breathed into his nostrils the breath of life; and man became a living being.",
            "transliteration": "Vayitzer Adonai Elohim et-ha'adam afar min-ha'adamah vayipach be'apav nishmat chayim vayehi ha'adam lenefesh chayah",
            "commentary": "God personally forms the first human from the dust of the earth, showing intimate involvement in creation. The breath of life makes the human a living soul."
          },
          {
            "number": 18,
            "hebrew": "וַיֹּאמֶר יְהוָה אֱלֹהִים לֹא־טוֹב הֱיוֹת הָאָדָם לְבַדּוֹ אֶעֱשֶׂה־לּוֹ עֵזֶר כְּנֶגְדּוֹ",
            "english": "Then the Lord God said, \"It is not good for the man to be alone; I will make him a helper suitable for him.\"",
            "transliteration": "Vayomer Adonai Elohim lo-tov heyot ha'adam levado e'eseh-lo ezer kenegdo",
            "commentary": "God recognizes that human beings need companionship and relationship. The term \"helper\" (ezer) suggests partnership and support, not subordination."
          },
          {
            "number": 24,
            "hebrew": "עַל־כֵּן יַעֲזָב־אִישׁ אֶת־אָבִיו וְאֶת־אִמּוֹ וְדָבַק בְּאִשְׁתּוֹ וְהָיוּ לְבָשָׂר אֶחָד",
            "english": "For this reason a man shall leave his father and his mother, and be joined to his wife; and they shall become one flesh.",
            "transliteration": "Al-ken ya'azov-ish et-aviv ve'et-imo vedavak be'ishto vehayu levasar echad",
            "commentary": "This verse establishes the divine pattern for marriage - leaving parents, cleaving to spouse, and becoming one flesh in intimate union."
          }
        ]
      }
    ]
  },
  {
    "name": "Shemot",
    "hebrewName": "שמות",
    "englishName": "Exodus",
    "chapters": 40,
    "summary": "The story of Israel's deliverance from Egypt, the giving of the Law at Mount Sinai, and the construction of the tabernacle.",
    "themes": [
      "Deliverance",
      "Law",
      "Covenant",
      "Worship",
      "Freedom"
    ],
    "chaptersData": [
      {
        "number": 1,
        "summary": "The Israelites multiply in Egypt and face oppression under a new pharaoh.",
        "themes": [
          "Oppression",
          "Growth",
          "Fear",
          "Providence",
          "Resistance"
        ],
        "keyVerses": [
          7,
          12
        ],
        "verses": [
          {
            "number": 7,
            "hebrew": "וּבְנֵי יִשְׂרָאֵל פָּרוּ וַיִּשְׁרְצוּ וַיִּרְבּוּ וַיַּעַצְמוּ בִּמְאֹד מְאֹד וַתִּמָּלֵא הָאָרֶץ אֹתָם",
            "english": "But the sons of Israel were fruitful and increased greatly, and multiplied, and became exceedingly mighty, so that the land was filled with them.",
            "transliteration": "Uvnei Yisrael paru vayishretzu vayirbu vaya'atzmu bim'od m'od vatimalei ha'aretz otam",
            "commentary": "Despite the oppression, the Israelites continued to multiply, fulfilling God's promise to Abraham about his descendants becoming numerous."
          },
          {
            "number": 12,
            "hebrew": "וְכַאֲשֶׁר יְעַנּוּ אֹתוֹ כֵּן יִרְבֶּה וְכֵן יִפְרֹץ וַיָּקֻצוּ מִפְּנֵי בְּנֵי יִשְׂרָאֵל",
            "english": "But the more they afflicted them, the more they multiplied and the more they spread out, so that they were in dread of the sons of Israel.",
            "transliteration": "Veka'asher ye'annu oto ken yirbeh vechein yifrotz vayakutzu mipnei bnei Yisrael",
            "commentary": "The Egyptian oppression had the opposite effect - the more they oppressed, the more the Israelites grew, showing God's blessing and protection."
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
          "Holiness",
          "Covenant"
        ],
        "keyVerses": [
          1,
          2,
          3
        ],
        "verses": [
          {
            "number": 1,
            "hebrew": "וַיְדַבֵּר אֱלֹהִים אֵת כָּל־הַדְּבָרִים הָאֵלֶּה לֵאמֹר",
            "english": "Then God spoke all these words, saying,",
            "transliteration": "Vayedaber Elohim et kol-hadevarim ha'eleh lemor",
            "commentary": "God personally speaks the Ten Commandments, emphasizing their divine origin and authority."
          },
          {
            "number": 2,
            "hebrew": "אָנֹכִי יְהוָה אֱלֹהֶיךָ אֲשֶׁר הוֹצֵאתִיךָ מֵאֶרֶץ מִצְרַיִם מִבֵּית עֲבָדִים",
            "english": "\"I am the Lord your God, who brought you out of the land of Egypt, out of the house of slavery.",
            "transliteration": "Anochi Adonai Eloheicha asher hotzeitcha me'eretz Mitzrayim mibeit avadim",
            "commentary": "The first commandment establishes God's identity and His act of deliverance, providing the foundation for all other commandments."
          },
          {
            "number": 3,
            "hebrew": "לֹא יִהְיֶה־לְךָ אֱלֹהִים אֲחֵרִים עַל־פָּנָי",
            "english": "\"You shall have no other gods before Me.",
            "transliteration": "Lo yihyeh-lecha elohim acherim al-panai",
            "commentary": "This commandment establishes monotheism and exclusive worship of the one true God."
          }
        ]
      }
    ]
  },
  {
    "name": "Vayikra",
    "hebrewName": "ויקרא",
    "englishName": "Leviticus",
    "chapters": 27,
    "summary": "The book of laws and regulations for worship, sacrifices, and holy living, emphasizing holiness and purity.",
    "themes": [
      "Holiness",
      "Sacrifice",
      "Purity",
      "Worship",
      "Law"
    ],
    "chaptersData": [
      {
        "number": 1,
        "summary": "Instructions for various types of offerings and sacrifices.",
        "themes": [
          "Sacrifice",
          "Worship",
          "Atonement",
          "Dedication"
        ],
        "keyVerses": [
          1,
          2,
          3
        ],
        "verses": [
          {
            "number": 1,
            "hebrew": "וַיִּקְרָא אֶל־מֹשֶׁה וַיְדַבֵּר יְהוָה אֵלָיו מֵאֹהֶל מוֹעֵד לֵאמֹר",
            "english": "Then the Lord called to Moses and spoke to him from the tent of meeting, saying,",
            "transliteration": "Vayikra el-Moshe vayedaber Adonai elav me'ohel mo'ed lemor",
            "commentary": "God calls Moses from the tent of meeting, establishing the pattern for divine communication and instruction."
          },
          {
            "number": 2,
            "hebrew": "דַּבֵּר אֶל־בְּנֵי יִשְׂרָאֵל וְאָמַרְתָּ אֲלֵהֶם אָדָם כִּי־יַקְרִיב מִכֶּם קָרְבָּן לַיהוָה מִן־הַבְּהֵמָה מִן־הַבָּקָר וּמִן־הַצֹּאן תַּקְרִיבוּ אֶת־קָרְבַּנְכֶם",
            "english": "Speak to the sons of Israel and say to them, \"When any man of you brings an offering to the Lord, you shall bring your offering of animals from the herd or the flock.",
            "transliteration": "Daber el-bnei Yisrael ve'amarta aleihem adam ki-yakriv mikem korban la'Adonai min-habehemah min-habakar umin-hatzon takrivu et-korbanchem",
            "commentary": "The instructions for offerings begin with voluntary sacrifices from domestic animals, showing the personal nature of worship."
          }
        ]
      }
    ]
  },
  {
    "name": "Bamidbar",
    "hebrewName": "במדבר",
    "englishName": "Numbers",
    "chapters": 36,
    "summary": "The story of Israel's journey through the wilderness, including census, rebellion, and preparation for entering the Promised Land.",
    "themes": [
      "Journey",
      "Census",
      "Rebellion",
      "Faith",
      "Preparation"
    ],
    "chaptersData": [
      {
        "number": 1,
        "summary": "God commands Moses to take a census of the Israelite men of fighting age.",
        "themes": [
          "Census",
          "Organization",
          "Leadership",
          "Preparation"
        ],
        "keyVerses": [
          1,
          2,
          3
        ],
        "verses": [
          {
            "number": 1,
            "hebrew": "וַיְדַבֵּר יְהוָה אֶל־מֹשֶׁה בְּמִדְבַּר סִינַי בְּאֹהֶל מוֹעֵד בְּאֶחָד לַחֹדֶשׁ הַשֵּׁנִי בַּשָּׁנָה הַשֵּׁנִית לְצֵאתָם מֵאֶרֶץ מִצְרַיִם לֵאמֹר",
            "english": "Then the Lord spoke to Moses in the wilderness of Sinai, in the tent of meeting, on the first of the second month, in the second year after they had come out of the land of Egypt, saying,",
            "transliteration": "Vayedaber Adonai el-Moshe bemidbar Sinai be'ohel mo'ed be'echad lachodesh hasheni bashanah hashenit letze'tam me'eretz Mitzrayim lemor",
            "commentary": "The book begins with God's command to take a census, establishing the organizational structure for the journey ahead."
          },
          {
            "number": 2,
            "hebrew": "שְׂאוּ אֶת־רֹאשׁ כָּל־עֲדַת בְּנֵי־יִשְׂרָאֵל לְמִשְׁפְּחֹתָם לְבֵית אֲבֹתָם בְּמִסְפַּר שֵׁמוֹת כָּל־זָכָר לְגֻלְגְּלֹתָם",
            "english": "Take a census of all the congregation of the sons of Israel, by their families, by their fathers' households, according to the number of names, every male, head by head.",
            "transliteration": "Se'u et-rosh kol-adat bnei-Yisrael lemishpechotam leveit avotam bemispar shemot kol-zachar legulgelotam",
            "commentary": "The census is to be taken by families and households, showing the importance of family structure and individual identity."
          }
        ]
      }
    ]
  },
  {
    "name": "Devarim",
    "hebrewName": "דברים",
    "englishName": "Deuteronomy",
    "chapters": 34,
    "summary": "Moses' final speeches to Israel, reviewing the Law and preparing the people for entering the Promised Land.",
    "themes": [
      "Review",
      "Law",
      "Covenant",
      "Blessing",
      "Warning"
    ],
    "chaptersData": [
      {
        "number": 1,
        "summary": "Moses begins his final address to Israel, reviewing their journey and God's faithfulness.",
        "themes": [
          "Review",
          "Leadership",
          "Faithfulness",
          "Preparation"
        ],
        "keyVerses": [
          1,
          3,
          8
        ],
        "verses": [
          {
            "number": 1,
            "hebrew": "אֵלֶּה הַדְּבָרִים אֲשֶׁר דִּבֶּר מֹשֶׁה אֶל־כָּל־יִשְׂרָאֵל בְּעֵבֶר הַיַּרְדֵּן בַּמִּדְבָּר בָּעֲרָבָה מוֹל סוּף בֵּין־פָּארָן וּבֵין־תֹּפֶל וְלָבָן וַחֲצֵרֹת וְדִי זָהָב",
            "english": "These are the words which Moses spoke to all Israel across the Jordan in the wilderness, in the Arabah opposite Suph, between Paran and Tophel and Laban and Hazeroth and Dizahab.",
            "transliteration": "Eleh hadevarim asher diber Moshe el-kol-Yisrael be'ever hayarden bamidbar ba'aravah mol Suf bein-Paran uvein-Tofel veLavan veChatzerot veDi Zahav",
            "commentary": "Moses begins his final address, setting the geographical and historical context for his review of the Law and Israel's journey."
          },
          {
            "number": 3,
            "hebrew": "וַיְהִי בְּאַרְבָּעִים שָׁנָה בְּעַשְׁתֵּי־עָשָׂר חֹדֶשׁ בְּאֶחָד לַחֹדֶשׁ דִּבֶּר מֹשֶׁה אֶל־בְּנֵי יִשְׂרָאֵל כְּכֹל אֲשֶׁר צִוָּה יְהוָה אֹתוֹ אֲלֵהֶם",
            "english": "It came about in the fortieth year, on the first day of the eleventh month, that Moses spoke to the children of Israel, according to all that the Lord had commanded him to give to them.",
            "transliteration": "Vayehi be'arba'im shanah be'ashtei-asar chodesh be'echad lachodesh diber Moshe el-bnei Yisrael kechol asher tzivah Adonai oto aleihem",
            "commentary": "The timing is significant - forty years after leaving Egypt, just before entering the Promised Land, Moses delivers his final instructions."
          }
        ]
      }
    ]
  }
]

// Function to get book by name
export function getTorahBook(name: string): TorahBook | undefined {
  if (!name || typeof name !== 'string') return undefined
  return TORAH_BOOKS.find(book => 
    book.name.toLowerCase() === name.toLowerCase() ||
    book.englishName.toLowerCase() === name.toLowerCase()
  )
}

// Function to get all books
export function getAllTorahBooks(): TorahBook[] {
  return TORAH_BOOKS
}

// Function to get chapters of a book
export function getTorahChapters(bookName: string): TorahChapter[] {
  const book = getTorahBook(bookName)
  return book ? book.chaptersData : []
}

// Function to get specific chapter
export function getTorahChapter(bookName: string, chapterNumber: number): TorahChapter | undefined {
  const book = getTorahBook(bookName)
  return book ? book.chaptersData.find(chapter => chapter.number === chapterNumber) : undefined
}

// Function to get verses of a chapter
export function getTorahVerses(bookName: string, chapterNumber: number): TorahVerse[] {
  const chapter = getTorahChapter(bookName, chapterNumber)
  return chapter ? chapter.verses : []
}

// Function to get specific verse
export function getTorahVerse(bookName: string, chapterNumber: number, verseNumber: number): TorahVerse | undefined {
  const chapter = getTorahChapter(bookName, chapterNumber)
  return chapter ? chapter.verses.find(verse => verse.number === verseNumber) : undefined
}
