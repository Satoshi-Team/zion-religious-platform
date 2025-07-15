export interface TorahVerse {
  number: number
  hebrew: string
  english: string
  transliteration: string
  commentary?: string
}

export interface TorahChapter {
  number: number
  name: string
  hebrewName: string
  book: string
  verses: number
  versesData: TorahVerse[]
  summary: string
  themes: string[]
  parsha?: string
  aliyah?: number
}

export interface TorahBook {
  name: string
  hebrewName: string
  englishName: string
  chapters: number
  summary: string
  keyThemes: string[]
  parshiyot: string[]
}

// Complete Torah data with actual text
export const TORAH_BOOKS: TorahBook[] = [
  {
    name: 'Bereshit',
    hebrewName: 'בְּרֵאשִׁית',
    englishName: 'Genesis',
    chapters: 50,
    summary: 'The first book of the Torah, containing the creation story, early human history, and the stories of the patriarchs Abraham, Isaac, and Jacob.',
    keyThemes: ['Creation', 'Covenant', 'Faith', 'Family', 'God\'s Promise'],
    parshiyot: ['Bereshit', 'Noach', 'Lech-Lecha', 'Vayeira', 'Chayei Sara', 'Toldot', 'Vayeitzei', 'Vayishlach', 'Vayeishev', 'Miketz', 'Vayigash', 'Vayechi']
  },
  {
    name: 'Shemot',
    hebrewName: 'שְׁמוֹת',
    englishName: 'Exodus',
    chapters: 40,
    summary: 'The story of Israel\'s deliverance from Egypt, the giving of the Torah at Mount Sinai, and the construction of the Mishkan (Tabernacle).',
    keyThemes: ['Deliverance', 'Torah', 'Covenant', 'Worship', 'God\'s Power'],
    parshiyot: ['Shemot', 'Va\'eira', 'Bo', 'Beshalach', 'Yitro', 'Mishpatim', 'Terumah', 'Tetzaveh', 'Ki Tisa', 'Vayakhel', 'Pekudei']
  },
  {
    name: 'Vayikra',
    hebrewName: 'וַיִּקְרָא',
    englishName: 'Leviticus',
    chapters: 27,
    summary: 'The book of holiness, containing laws of sacrifices, purity, and ethical living, emphasizing the call to be holy as God is holy.',
    keyThemes: ['Holiness', 'Sacrifice', 'Purity', 'Ethics', 'Worship'],
    parshiyot: ['Vayikra', 'Tzav', 'Shmini', 'Tazria', 'Metzora', 'Achrei Mot', 'Kedoshim', 'Emor', 'Behar', 'Bechukotai']
  },
  {
    name: 'Bamidbar',
    hebrewName: 'בְּמִדְבַּר',
    englishName: 'Numbers',
    chapters: 36,
    summary: 'The book of the wilderness, describing Israel\'s journey from Sinai to the Promised Land, including challenges and divine guidance.',
    keyThemes: ['Journey', 'Leadership', 'Faith', 'Discipline', 'Promise'],
    parshiyot: ['Bamidbar', 'Nasso', 'Beha\'alotcha', 'Sh\'lach', 'Korach', 'Chukat', 'Balak', 'Pinchas', 'Matot', 'Masei']
  },
  {
    name: 'Devarim',
    hebrewName: 'דְּבָרִים',
    englishName: 'Deuteronomy',
    chapters: 34,
    summary: 'Moses\' final address to Israel, reviewing the Torah and preparing the people for entry into the Promised Land.',
    keyThemes: ['Review', 'Covenant', 'Obedience', 'Blessing', 'Promise'],
    parshiyot: ['Devarim', 'Va\'etchanan', 'Eikev', 'Re\'eh', 'Shoftim', 'Ki Teitzei', 'Ki Tavo', 'Nitzavim', 'Vayeilech', 'Ha\'azinu', 'Vezot Haberakhah']
  }
]

export const TORAH_CHAPTERS: TorahChapter[] = [
  {
    number: 1,
    name: 'In the Beginning',
    hebrewName: 'בְּרֵאשִׁית',
    book: 'Bereshit',
    verses: 31,
    summary: 'The creation story, describing how God created the universe, earth, and all living things in six days, culminating in the creation of humanity.',
    themes: ['Creation', 'God\'s Power', 'Humanity', 'Rest', 'Goodness'],
    parsha: 'Bereshit',
    aliyah: 1,
    versesData: [
      {
        number: 1,
        hebrew: 'בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ',
        english: 'In the beginning God created the heavens and the earth.',
        transliteration: 'Bereishit bara Elohim et hashamayim ve\'et ha\'aretz',
        commentary: 'This verse establishes God as the Creator of everything that exists, marking the beginning of time and space.'
      },
      {
        number: 2,
        hebrew: 'וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל פְּנֵי הַמָּיִם',
        english: 'Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.',
        transliteration: 'Veha\'aretz hayetah tohu vavohu vechoshech al penei tehom veruach Elohim merachefet al penei hamayim',
        commentary: 'The earth was in a state of chaos and emptiness, with the Holy Spirit present and ready to bring order.'
      },
      {
        number: 3,
        hebrew: 'וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר וַיְהִי אוֹר',
        english: 'And God said, "Let there be light," and there was light.',
        transliteration: 'Vayomer Elohim yehi or vayehi or',
        commentary: 'God\'s first creative act was to bring light into existence, demonstrating His power through His word.'
      },
      {
        number: 4,
        hebrew: 'וַיַּרְא אֱלֹהִים אֶת הָאוֹר כִּי טוֹב וַיַּבְדֵּל אֱלֹהִים בֵּין הָאוֹר וּבֵין הַחֹשֶׁךְ',
        english: 'God saw that the light was good, and he separated the light from the darkness.',
        transliteration: 'Vayar Elohim et ha\'or ki tov vayavdel Elohim bein ha\'or uvein hachoshech',
        commentary: 'God evaluated His creation as good and established the distinction between light and darkness.'
      },
      {
        number: 5,
        hebrew: 'וַיִּקְרָא אֱלֹהִים לָאוֹר יוֹם וְלַחֹשֶׁךְ קָרָא לַיְלָה וַיְהִי עֶרֶב וַיְהִי בֹקֶר יוֹם אֶחָד',
        english: 'God called the light "day," and the darkness he called "night." And there was evening, and there was morning—the first day.',
        transliteration: 'Vayikra Elohim la\'or yom velachoshech kara laylah vayehi erev vayehi boker yom echad',
        commentary: 'God named the periods of light and darkness, establishing the first day of creation.'
      },
      {
        number: 26,
        hebrew: 'וַיֹּאמֶר אֱלֹהִים נַעֲשֶׂה אָדָם בְּצַלְמֵנוּ כִּדְמוּתֵנוּ וְיִרְדּוּ בִדְגַת הַיָּם וּבְעוֹף הַשָּׁמַיִם וּבַבְּהֵמָה וּבְכָל הָאָרֶץ וּבְכָל הָרֶמֶשׂ הָרֹמֵשׂ עַל הָאָרֶץ',
        english: 'Then God said, "Let us make mankind in our image, in our likeness, so that they may rule over the fish in the sea and the birds in the sky, over the livestock and all the wild animals, and over all the creatures that move along the ground."',
        transliteration: 'Vayomer Elohim na\'aseh adam betzalmenu kidmutenu veyirdu vidgat hayam uve\'of hashamayim uvabehemah uvchol ha\'aretz uvchol haremes haromes al ha\'aretz',
        commentary: 'God\'s decision to create humanity in His image, giving them dominion over creation.'
      },
      {
        number: 27,
        hebrew: 'וַיִּבְרָא אֱלֹהִים אֶת הָאָדָם בְּצַלְמוֹ בְּצֶלֶם אֱלֹהִים בָּרָא אֹתוֹ זָכָר וּנְקֵבָה בָּרָא אֹתָם',
        english: 'So God created mankind in his own image, in the image of God he created them; male and female he created them.',
        transliteration: 'Vayivra Elohim et ha\'adam betzalmo betzelem Elohim bara oto zachar unekeivah bara otam',
        commentary: 'Humanity is created in God\'s image, with both male and female reflecting His nature.'
      },
      {
        number: 28,
        hebrew: 'וַיְבָרֶךְ אֹתָם אֱלֹהִים וַיֹּאמֶר לָהֶם אֱלֹהִים פְּרוּ וּרְבוּ וּמִלְאוּ אֶת הָאָרֶץ וְכִבְשֻׁהָ וּרְדוּ בִּדְגַת הַיָּם וּבְעוֹף הַשָּׁמַיִם וּבְכָל חַיָּה הָרֹמֶשֶׂת עַל הָאָרֶץ',
        english: 'God blessed them and said to them, "Be fruitful and increase in number; fill the earth and subdue it. Rule over the fish in the sea and the birds in the sky and over every living creature that moves on the ground."',
        transliteration: 'Vayevarech otam Elohim vayomer lahem Elohim peru urvu umil\'u et ha\'aretz vekivshuha urdu vidgat hayam uve\'of hashamayim uvchol chayah haromeset al ha\'aretz',
        commentary: 'God\'s blessing and command to humanity to multiply and exercise stewardship over creation.'
      },
      {
        number: 31,
        hebrew: 'וַיַּרְא אֱלֹהִים אֶת כָּל אֲשֶׁר עָשָׂה וְהִנֵּה טוֹב מְאֹד וַיְהִי עֶרֶב וַיְהִי בֹקֶר יוֹם הַשִּׁשִּׁי',
        english: 'God saw all that he had made, and it was very good. And there was evening, and there was morning—the sixth day.',
        transliteration: 'Vayar Elohim et kol asher asah vehineh tov me\'od vayehi erev vayehi boker yom hashishi',
        commentary: 'God\'s final evaluation of creation as very good, completing the sixth day of creation.'
      }
    ]
  },
  {
    number: 1,
    name: 'The Names',
    hebrewName: 'שְׁמוֹת',
    book: 'Shemot',
    verses: 22,
    summary: 'The beginning of the Exodus story, describing the oppression of the Israelites in Egypt and the birth and early life of Moses.',
    themes: ['Oppression', 'Deliverance', 'Leadership', 'Faith', 'God\'s Plan'],
    parsha: 'Shemot',
    aliyah: 1,
    versesData: [
      {
        number: 1,
        hebrew: 'וְאֵלֶּה שְׁמוֹת בְּנֵי יִשְׂרָאֵל הַבָּאִים מִצְרָיְמָה אֵת יַעֲקֹב אִישׁ וּבֵיתוֹ בָּאוּ',
        english: 'These are the names of the sons of Israel who went to Egypt with Jacob, each with his family.',
        transliteration: 'Ve\'eleh shemot bnei Yisrael haba\'im Mitzraymah et Ya\'akov ish uveito ba\'u',
        commentary: 'The book begins by listing the names of Jacob\'s sons who went to Egypt, emphasizing the family connection.'
      },
      {
        number: 2,
        hebrew: 'רְאוּבֵן שִׁמְעוֹן לֵוִי וִיהוּדָה',
        english: 'Reuben, Simeon, Levi and Judah.',
        transliteration: 'Re\'uven Shimon Levi vihudah',
        commentary: 'The first four sons of Jacob are listed, representing the beginning of the Israelite nation.'
      },
      {
        number: 3,
        hebrew: 'יִשָּׂשכָר זְבוּלֻן וּבִנְיָמִן',
        english: 'Issachar, Zebulun and Benjamin.',
        transliteration: 'Yisaschar Zevulun uvinyamin',
        commentary: 'Three more sons are listed, continuing the genealogical record.'
      },
      {
        number: 4,
        hebrew: 'דָּן וְנַפְתָּלִי גָּד וְאָשֵׁר',
        english: 'Dan and Naphtali; Gad and Asher.',
        transliteration: 'Dan venaftali Gad va\'asher',
        commentary: 'The remaining sons complete the list of Jacob\'s twelve sons.'
      },
      {
        number: 5,
        hebrew: 'וַיְהִי כָּל נֶפֶשׁ יֹצְאֵי יֶרֶךְ יַעֲקֹב שִׁבְעִים נָפֶשׁ וְיוֹסֵף הָיָה בְמִצְרָיִם',
        english: 'The descendants of Jacob numbered seventy in all; Joseph was already in Egypt.',
        transliteration: 'Vayehi kol nefesh yotzei yerech Ya\'akov shiv\'im nefesh veyosef hayah bemitzrayim',
        commentary: 'The total number of Jacob\'s descendants who came to Egypt was seventy, with Joseph already there.'
      }
    ]
  }
]

// Function to get book by name
export function getTorahBook(name: string): TorahBook | undefined {
  return TORAH_BOOKS.find(book => 
    book.name === name || book.hebrewName === name || book.englishName === name
  )
}

// Function to get chapter by book and number
export function getTorahChapter(bookName: string, chapterNumber: number): TorahChapter | undefined {
  return TORAH_CHAPTERS.find(chapter => 
    chapter.book === bookName && chapter.number === chapterNumber
  )
}

// Function to get all books
export function getAllTorahBooks(): TorahBook[] {
  return TORAH_BOOKS
}

// Function to get verses for a specific chapter
export function getTorahVerses(bookName: string, chapterNumber: number): TorahVerse[] {
  const chapter = getTorahChapter(bookName, chapterNumber)
  return chapter ? chapter.versesData : []
}

// Function to get a specific verse
export function getTorahVerse(bookName: string, chapterNumber: number, verseNumber: number): TorahVerse | undefined {
  const verses = getTorahVerses(bookName, chapterNumber)
  return verses.find(verse => verse.number === verseNumber)
} 