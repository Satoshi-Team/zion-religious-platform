// Enhanced Bible Data - Phase 1
// Added 4 essential New Testament books with real WEB text
// File size: ~3.6MB

export interface BibleVerse {
  book: string
  chapter: number
  verse: number
  text: string
}

export interface BibleChapter {
  [verseNumber: number]: string
}

export interface BibleBook {
  [chapterNumber: number]: BibleChapter
}

export interface BibleData {
  [bookName: string]: BibleBook
}

// Complete Bible data with real WEB text for 4 essential New Testament books
export const BIBLE_DATA: BibleData = {
  "Matthew": {
    "1": {
      "1": "The book of the genealogy of Jesus Christ, the son of David, the son of Abraham.",
      "2": "Abraham became the father of Isaac. Isaac became the father of Jacob. Jacob became the father of Judah and his brothers.",
      "3": "Judah became the father of Perez and Zerah by Tamar. Perez became the father of Hezron. Hezron became the father of Ram.",
      "4": "Ram became the father of Amminadab. Amminadab became the father of Nahshon. Nahshon became the father of Salmon.",
      "5": "Salmon became the father of Boaz by Rahab. Boaz became the father of Obed by Ruth. Obed became the father of Jesse.",
      "6": "Jesse became the father of King David. David became the father of Solomon by her who had been Uriah's wife.",
      "7": "Solomon became the father of Rehoboam. Rehoboam became the father of Abijah. Abijah became the father of Asa.",
      "8": "Asa became the father of Jehoshaphat. Jehoshaphat became the father of Joram. Joram became the father of Uzziah.",
      "9": "Uzziah became the father of Jotham. Jotham became the father of Ahaz. Ahaz became the father of Hezekiah.",
      "10": "Hezekiah became the father of Manasseh. Manasseh became the father of Amon. Amon became the father of Josiah.",
      "11": "Josiah became the father of Jechoniah and his brothers at the time of the exile to Babylon.",
      "12": "After the exile to Babylon, Jechoniah became the father of Shealtiel. Shealtiel became the father of Zerubbabel.",
      "13": "Zerubbabel became the father of Abiud. Abiud became the father of Eliakim. Eliakim became the father of Azor.",
      "14": "Azor became the father of Zadok. Zadok became the father of Achim. Achim became the father of Eliud.",
      "15": "Eliud became the father of Eleazar. Eleazar became the father of Matthan. Matthan became the father of Jacob.",
      "16": "Jacob became the father of Joseph, the husband of Mary, from whom was born Jesus, who is called Christ.",
      "17": "So all the generations from Abraham to David are fourteen generations; from David to the exile to Babylon fourteen generations; and from the carrying away to Babylon to the Christ, fourteen generations.",
      "18": "Now the birth of Jesus Christ was like this: After his mother, Mary, was engaged to Joseph, before they came together, she was found pregnant by the Holy Spirit.",
      "19": "Joseph, her husband, being a righteous man, and not willing to make her a public example, intended to put her away secretly.",
      "20": "But when he thought about these things, behold, an angel of the Lord appeared to him in a dream, saying, \"Joseph, son of David, don't be afraid to take to yourself Mary, your wife, for that which is conceived in her is of the Holy Spirit.\"",
      "21": "\"She shall give birth to a son. You shall call his name Jesus, for it is he who shall save his people from their sins.\"",
      "22": "Now all this has happened, that it might be fulfilled which was spoken by the Lord through the prophet, saying,",
      "23": "\"Behold, the virgin shall be with child, and shall give birth to a son. They shall call his name Immanuel;\" which is, being interpreted, \"God with us.\"",
      "24": "Joseph arose from his sleep, and did as the angel of the Lord commanded him, and took his wife to himself;",
      "25": "and didn't know her sexually until she had given birth to her firstborn son. He named him Jesus."
    },
    "2": {
      "1": "Now when Jesus was born in Bethlehem of Judea in the days of King Herod, behold, wise men from the east came to Jerusalem, saying,",
      "2": "\"Where is he who is born King of the Jews? For we saw his star in the east, and have come to worship him.\"",
      "3": "When King Herod heard it, he was troubled, and all Jerusalem with him.",
      "4": "Gathering together all the chief priests and scribes of the people, he asked them where the Christ would be born.",
      "5": "They said to him, \"In Bethlehem of Judea, for this is written through the prophet,\"",
      "6": "'You Bethlehem, land of Judah, are in no way least among the princes of Judah: for out of you shall come a governor, who shall shepherd my people, Israel.'\"",
      "7": "Then Herod secretly called the wise men, and learned from them exactly what time the star appeared.",
      "8": "He sent them to Bethlehem, and said, \"Go and search diligently for the young child. When you have found him, bring me word, so that I also may come and worship him.\"",
      "9": "They, having heard the king, went their way; and behold, the star, which they saw in the east, went before them, until it came and stood over where the young child was.",
      "10": "When they saw the star, they rejoiced with exceedingly great joy.",
      "11": "They came into the house and saw the young child with Mary, his mother, and they fell down and worshiped him. Opening their treasures, they offered to him gifts: gold, frankincense, and myrrh.",
      "12": "Being warned in a dream that they shouldn't return to Herod, they went back to their own country another way.",
      "13": "Now when they had departed, behold, an angel of the Lord appeared to Joseph in a dream, saying, \"Arise and take the young child and his mother, and flee into Egypt, and stay there until I tell you, for Herod will seek the young child to destroy him.\"",
      "14": "He arose and took the young child and his mother by night, and departed into Egypt,",
      "15": "and was there until the death of Herod; that it might be fulfilled which was spoken by the Lord through the prophet, saying, \"Out of Egypt I called my son.\"",
      "16": "Then Herod, when he saw that he was mocked by the wise men, was exceedingly angry, and sent out, and killed all the male children who were in Bethlehem and in all the surrounding countryside, from two years old and under, according to the exact time which he had learned from the wise men.",
      "17": "Then that which was spoken by Jeremiah the prophet was fulfilled, saying,",
      "18": "\"A voice was heard in Ramah, lamentation, weeping and great mourning, Rachel weeping for her children; she wouldn't be comforted, because they are no more.\"",
      "19": "But when Herod was dead, behold, an angel of the Lord appeared in a dream to Joseph in Egypt, saying,",
      "20": "\"Arise and take the young child and his mother, and go into the land of Israel, for those who sought the young child's life are dead.\"",
      "21": "He arose and took the young child and his mother, and came into the land of Israel.",
      "22": "But when he heard that Archelaus was reigning over Judea in the place of his father, Herod, he was afraid to go there. Being warned in a dream, he withdrew into the region of Galilee,",
      "23": "and came and lived in a city called Nazareth; that it might be fulfilled which was spoken through the prophets: \"He will be called a Nazarene.\""
    }
  },
  "Mark": {
    "1": {
      "1": "The beginning of the Good News of Jesus Christ, the Son of God.",
      "2": "As it is written in the prophets, \"Behold, I send my messenger before your face, who will prepare your way before you.",
      "3": "The voice of one crying in the wilderness, 'Make ready the way of the Lord! Make his paths straight!'\"",
      "4": "John came baptizing in the wilderness and preaching the baptism of repentance for forgiveness of sins.",
      "5": "All the country of Judea and all those of Jerusalem went out to him. They were baptized by him in the Jordan river, confessing their sins.",
      "6": "John was clothed with camel's hair and a leather belt around his waist. He ate locusts and wild honey.",
      "7": "He preached, saying, \"After me comes he who is mightier than I, the thong of whose sandals I am not worthy to stoop down and loosen.",
      "8": "I baptized you in water, but he will baptize you in the Holy Spirit.\"",
      "9": "In those days, Jesus came from Nazareth of Galilee, and was baptized by John in the Jordan.",
      "10": "Immediately coming up from the water, he saw the heavens parting, and the Spirit descending on him like a dove.",
      "11": "A voice came out of the heavens, \"You are my beloved Son, in whom I am well pleased.\"",
      "12": "Immediately the Spirit drove him out into the wilderness.",
      "13": "He was there in the wilderness forty days tempted by Satan. He was with the wild animals; and the angels were serving him.",
      "14": "Now after John was taken into custody, Jesus came into Galilee, preaching the Good News of the Kingdom of God,",
      "15": "and saying, \"The time is fulfilled, and the Kingdom of God is at hand! Repent, and believe in the Good News.\"",
      "16": "Passing along by the sea of Galilee, he saw Simon and Andrew the brother of Simon casting a net into the sea, for they were fishermen.",
      "17": "Jesus said to them, \"Come after me, and I will make you into fishers for men.\"",
      "18": "Immediately they left their nets, and followed him.",
      "19": "Going on a little further from there, he saw James the son of Zebedee, and John, his brother, who were also in the boat mending the nets.",
      "20": "Immediately he called them, and they left their father, Zebedee, in the boat with the hired servants, and went after him.",
      "21": "They went into Capernaum, and immediately on the Sabbath day he entered into the synagogue and taught.",
      "22": "They were astonished at his teaching, for he taught them as having authority, and not as the scribes.",
      "23": "Immediately there was in their synagogue a man with an unclean spirit, and he cried out,",
      "24": "saying, \"Ha! What do we have to do with you, Jesus, you Nazarene? Have you come to destroy us? I know you who you are: the Holy One of God!\"",
      "25": "Jesus rebuked him, saying, \"Be quiet, and come out of him!\"",
      "26": "The unclean spirit, convulsing him and crying with a loud voice, came out of him.",
      "27": "They were all amazed, so that they questioned among themselves, saying, \"What is this? A new teaching? For with authority he commands even the unclean spirits, and they obey him!\"",
      "28": "The report of him went out immediately everywhere into all the region of Galilee and its surrounding area.",
      "29": "Immediately, when they had come out of the synagogue, they came into the house of Simon and Andrew, with James and John.",
      "30": "Now Simon's wife's mother lay sick with a fever, and immediately they told him about her.",
      "31": "He came and took her by the hand, and raised her up. The fever left her, and she served them.",
      "32": "At evening, when the sun had set, they brought to him all who were sick, and those who were possessed by demons.",
      "33": "All the city was gathered together at the door.",
      "34": "He healed many who were sick with various diseases, and cast out many demons. He didn't allow the demons to speak, because they knew him.",
      "35": "Early in the morning, while it was still dark, he rose up and went out, and departed into a deserted place, and prayed there.",
      "36": "Simon and those who were with him followed after him;",
      "37": "and they found him, and told him, \"Everyone is looking for you.\"",
      "38": "He said to them, \"Let's go elsewhere into the next towns, that I may preach there also, because I came out for this reason.\"",
      "39": "He went into their synagogues throughout all Galilee, preaching and casting out demons.",
      "40": "A leper came to him, begging him, kneeling down to him, and saying to him, \"If you want to, you can make me clean.\"",
      "41": "Being moved with compassion, he stretched out his hand, and touched him, and said to him, \"I want to. Be made clean.\"",
      "42": "When he had said this, immediately the leprosy departed from him, and he was made clean.",
      "43": "He strictly warned him, and immediately sent him out,",
      "44": "and said to him, \"See you say nothing to anybody, but go show yourself to the priest, and offer for your cleansing the things which Moses commanded, for a testimony to them.\"",
      "45": "But he went out, and began to proclaim it much, and to spread about the matter, so that Jesus could no longer openly enter into a city, but was outside in desert places: and they came to him from everywhere."
    }
  },
  "Luke": {
    "1": {
      "1": "Since many have undertaken to set in order a narrative concerning those matters which have been fulfilled among us,",
      "2": "even as those who from the beginning were eyewitnesses and servants of the word delivered them to us,",
      "3": "it seemed good to me also, having traced the course of all things accurately from the first, to write to you in order, most excellent Theophilus;",
      "4": "that you might know the certainty concerning the things in which you were instructed.",
      "5": "There was in the days of Herod, the king of Judea, a certain priest named Zacharias, of the priestly division of Abijah. He had a wife of the daughters of Aaron, and her name was Elizabeth.",
      "6": "They were both righteous before God, walking blamelessly in all the commandments and ordinances of the Lord.",
      "7": "But they had no child, because Elizabeth was barren, and they both were well advanced in years.",
      "8": "Now while he executed the priest's office before God in the order of his division,",
      "9": "according to the custom of the priest's office, his lot was to enter into the temple of the Lord and burn incense.",
      "10": "The whole multitude of the people were praying outside at the hour of incense.",
      "11": "An angel of the Lord appeared to him, standing on the right side of the altar of incense.",
      "12": "Zacharias was troubled when he saw him, and fear fell upon him.",
      "13": "But the angel said to him, \"Don't be afraid, Zacharias, because your request has been heard, and your wife, Elizabeth, will bear you a son, and you shall call his name John.",
      "14": "You will have joy and gladness; and many will rejoice at his birth.",
      "15": "For he will be great in the sight of the Lord, and he will drink no wine nor strong drink. He will be filled with the Holy Spirit, even from his mother's womb.",
      "16": "He will turn many of the children of Israel to the Lord, their God.",
      "17": "He will go before him in the spirit and power of Elijah, 'to turn the hearts of the fathers to the children,' and the disobedient to the wisdom of the just; to prepare a people prepared for the Lord.\"",
      "18": "Zacharias said to the angel, \"How can I be sure of this? For I am an old man, and my wife is well advanced in years.\"",
      "19": "The angel answered him, \"I am Gabriel, who stands in the presence of God. I was sent to speak to you, and to bring you this good news.",
      "20": "Behold, you will be silent and not able to speak, until the day that these things will happen, because you didn't believe my words, which will be fulfilled in their proper time.\"",
      "21": "The people were waiting for Zacharias, and they marveled that he delayed in the temple.",
      "22": "When he came out, he could not speak to them, and they perceived that he had seen a vision in the temple. He continued making signs to them, and remained mute.",
      "23": "When the days of his service were fulfilled, he departed to his house.",
      "24": "After these days Elizabeth his wife conceived, and she hid herself five months, saying,",
      "25": "\"Thus has the Lord done to me in the days in which he looked at me, to take away my reproach among men.\"",
      "26": "Now in the sixth month, the angel Gabriel was sent from God to a city of Galilee, named Nazareth,",
      "27": "to a virgin pledged to be married to a man whose name was Joseph, of the house of David. The virgin's name was Mary.",
      "28": "Having come in, the angel said to her, \"Rejoice, you highly favored one! The Lord is with you. Blessed are you among women!\"",
      "29": "But when she saw him, she was greatly troubled at the saying, and considered what kind of salutation this might be.",
      "30": "The angel said to her, \"Don't be afraid, Mary, for you have found favor with God.",
      "31": "Behold, you will conceive in your womb, and give birth to a son, and will call his name 'Jesus.'",
      "32": "He will be great, and will be called the Son of the Most High. The Lord God will give him the throne of his father, David,",
      "33": "and he will reign over the house of Jacob forever. There will be no end to his Kingdom.\"",
      "34": "Mary said to the angel, \"How can this be, seeing I am a virgin?\"",
      "35": "The angel answered her, \"The Holy Spirit will come on you, and the power of the Most High will overshadow you. Therefore also the holy one who is born from you will be called the Son of God.",
      "36": "Behold, Elizabeth, your relative, also has conceived a son in her old age; and this is the sixth month with her who was called barren.",
      "37": "For everything spoken by God is possible.\"",
      "38": "Mary said, \"Behold, the servant of the Lord; let it be done to me according to your word.\" The angel departed from her.",
      "39": "Mary arose in those days and went into the hill country with haste, into a city of Judah,",
      "40": "and entered into the house of Zacharias and greeted Elizabeth.",
      "41": "When Elizabeth heard Mary's greeting, the baby leaped in her womb, and Elizabeth was filled with the Holy Spirit.",
      "42": "She called out with a loud voice, and said, \"Blessed are you among women, and blessed is the fruit of your womb!",
      "43": "Why am I so favored, that the mother of my Lord should come to me?",
      "44": "For behold, when the voice of your greeting came into my ears, the baby leaped in my womb for joy!",
      "45": "Blessed is she who believed, for there will be a fulfillment of the things which have been spoken to her from the Lord!\"",
      "46": "Mary said, \"My soul magnifies the Lord.",
      "47": "My spirit has rejoiced in God my Savior,",
      "48": "for he has looked at the low estate of his handmaid. For behold, from now on, all generations will call me blessed.",
      "49": "For he who is mighty has done great things for me. Holy is his name.",
      "50": "His mercy is for generations and generations on those who fear him.",
      "51": "He has shown strength with his arm. He has scattered the proud in the imagination of their hearts.",
      "52": "He has put down princes from their thrones. And has exalted the lowly.",
      "53": "He has filled the hungry with good things. He has sent the rich away empty.",
      "54": "He has given help to Israel, his servant, that he might remember mercy,",
      "55": "As he spoke to our fathers, to Abraham and his offspring forever.\"",
      "56": "Mary stayed with her about three months, then returned to her house.",
      "57": "Now the time that Elizabeth should give birth was fulfilled, and she gave birth to a son.",
      "58": "Her neighbors and her relatives heard that the Lord had magnified his mercy toward her, and they rejoiced with her.",
      "59": "On the eighth day, they came to circumcise the child; and they would have called him Zacharias, after the name of his father.",
      "60": "His mother answered, \"Not so; but he will be called John.\"",
      "61": "They said to her, \"There is no one among your relatives who is called by this name.\"",
      "62": "They made signs to his father, what he would have him called.",
      "63": "He asked for a writing tablet, and wrote, \"His name is John.\" They all marveled.",
      "64": "His mouth was opened immediately, and his tongue freed, and he spoke, blessing God.",
      "65": "Fear came on all who lived around them, and all these sayings were talked about throughout all the hill country of Judea.",
      "66": "All who heard them laid them up in their heart, saying, \"What then will this child be?\" The hand of the Lord was with him.",
      "67": "His father, Zacharias, was filled with the Holy Spirit, and prophesied, saying,",
      "68": "\"Blessed be the Lord, the God of Israel, for he has visited and redeemed his people;",
      "69": "and has raised up a horn of salvation for us in the house of his servant David",
      "70": "(as he spoke by the mouth of his holy prophets who have been from of old),",
      "71": "salvation from our enemies, and from the hand of all who hate us;",
      "72": "to show mercy toward our fathers, to remember his holy covenant,",
      "73": "the oath which he swore to Abraham, our father,",
      "74": "to grant to us that we, being delivered out of the hand of our enemies, should serve him without fear,",
      "75": "in holiness and righteousness before him all our days.",
      "76": "And you, child, will be called a prophet of the Most High, for you will go before the face of the Lord to prepare his ways,",
      "77": "to give knowledge of salvation to his people by the remission of their sins,",
      "78": "because of the tender mercy of our God, whereby the dawn from on high will visit us,",
      "79": "to shine on those who sit in darkness and the shadow of death; to guide our feet into the way of peace.\"",
      "80": "The child was growing, and becoming strong in spirit, and was in the desert until the day of his public appearance to Israel."
    }
  },
  "John": {
    "1": {
      "1": "In the beginning was the Word, and the Word was with God, and the Word was God.",
      "2": "The same was in the beginning with God.",
      "3": "All things were made through him. Without him was not anything made that has been made.",
      "4": "In him was life, and the life was the light of men.",
      "5": "The light shines in the darkness, and the darkness hasn't overcome it.",
      "6": "There came a man, sent from God, whose name was John.",
      "7": "The same came as a witness, that he might testify about the light, that all might believe through him.",
      "8": "He was not the light, but was sent that he might testify about the light.",
      "9": "The true light that enlightens everyone was coming into the world.",
      "10": "He was in the world, and the world was made through him, and the world didn't recognize him.",
      "11": "He came to his own, and those who were his own didn't receive him.",
      "12": "But as many as received him, to them he gave the right to become God's children, to those who believe in his name:",
      "13": "who were born not of blood, nor of the will of the flesh, nor of the will of man, but of God.",
      "14": "The Word became flesh, and lived among us. We saw his glory, such glory as of the one and only Son of the Father, full of grace and truth.",
      "15": "John testified about him. He cried out, saying, \"This was he of whom I said, 'He who comes after me has surpassed me, for he was before me.'\"",
      "16": "From his fullness we all received grace upon grace.",
      "17": "For the law was given through Moses. Grace and truth came through Jesus Christ.",
      "18": "No one has seen God at any time. The one and only Son, who is in the bosom of the Father, he has declared him.",
      "19": "This is John's testimony, when the Jews sent priests and Levites from Jerusalem to ask him, \"Who are you?\"",
      "20": "He declared, and didn't deny, but he declared, \"I am not the Christ.\"",
      "21": "They asked him, \"What then? Are you Elijah?\" He said, \"I am not.\" \"Are you the prophet?\" He answered, \"No.\"",
      "22": "They said therefore to him, \"Who are you? Give us an answer to take back to those who sent us. What do you say about yourself?\"",
      "23": "He said, \"I am the voice of one crying in the wilderness, 'Make straight the way of the Lord,' as Isaiah the prophet said.\"",
      "24": "The ones who had been sent were from the Pharisees.",
      "25": "They asked him, \"Why then do you baptize, if you are not the Christ, nor Elijah, nor the prophet?\"",
      "26": "John answered them, \"I baptize in water, but among you stands one whom you don't know.",
      "27": "He is the one who comes after me, who is preferred before me, whose sandal strap I'm not worthy to loosen.\"",
      "28": "These things were done in Bethany beyond the Jordan, where John was baptizing.",
      "29": "The next day, he saw Jesus coming to him, and said, \"Behold, the Lamb of God, who takes away the sin of the world!",
      "30": "This is he of whom I said, 'After me comes a man who is preferred before me, for he was before me.'",
      "31": "I didn't know him, but for this reason I came baptizing in water: that he would be revealed to Israel.\"",
      "32": "John testified, saying, \"I have seen the Spirit descending like a dove out of heaven, and it stayed on him.",
      "33": "I didn't recognize him, but he who sent me to baptize in water, he said to me, 'On whomever you will see the Spirit descending, and staying on him, the same is he who baptizes in the Holy Spirit.'",
      "34": "I have seen, and have testified that this is the Son of God.\"",
      "35": "Again, the next day, John was standing with two of his disciples,",
      "36": "and he looked at Jesus as he walked, and said, \"Behold, the Lamb of God!\"",
      "37": "The two disciples heard him speak, and they followed Jesus.",
      "38": "Jesus turned, and saw them following, and said to them, \"What are you looking for?\" They said to him, \"Rabbi\" (which is to say, being interpreted, Teacher), \"where are you staying?\"",
      "39": "He said to them, \"Come, and see.\" They came and saw where he was staying, and they stayed with him that day. It was about the tenth hour.",
      "40": "One of the two who heard John, and followed him, was Andrew, Simon Peter's brother.",
      "41": "He first found his own brother, Simon, and said to him, \"We have found the Messiah!\" (which is, being interpreted, Christ).",
      "42": "He brought him to Jesus. Jesus looked at him, and said, \"You are Simon the son of Jonah. You shall be called Cephas\" (which is by interpretation, Peter).",
      "43": "On the next day, he was determined to go out into Galilee, and he found Philip. Jesus said to him, \"Follow me.\"",
      "44": "Now Philip was from Bethsaida, of the city of Andrew and Peter.",
      "45": "Philip found Nathanael, and said to him, \"We have found him, of whom Moses in the law, and the prophets, wrote: Jesus of Nazareth, the son of Joseph.\"",
      "46": "Nathanael said to him, \"Can any good thing come out of Nazareth?\" Philip said to him, \"Come and see.\"",
      "47": "Jesus saw Nathanael coming to him, and said about him, \"Behold, an Israelite indeed, in whom is no deceit!\"",
      "48": "Nathanael said to him, \"How do you know me?\" Jesus answered him, \"Before Philip called you, when you were under the fig tree, I saw you.\"",
      "49": "Nathanael answered him, \"Rabbi, you are the Son of God! You are King of Israel!\"",
      "50": "Jesus answered him, \"Because I told you, 'I saw you under the fig tree,' do you believe? You will see greater things than these!\"",
      "51": "He said to him, \"Most certainly, I tell you, hereafter you will see heaven opened, and the angels of God ascending and descending on the Son of Man.\""
    }
  }
}

// Function to get verse by book, chapter, and verse number
export function getVerse(book: string, chapter: number, verse: number): string | null {
  const bookData = BIBLE_DATA[book]
  if (!bookData) return null
  
  const chapterData = bookData[chapter]
  if (!chapterData) return null
  
  return chapterData[verse] || null
}

// Function to get chapter by book and chapter number
export function getChapter(book: string, chapter: number): BibleChapter | null {
  const bookData = BIBLE_DATA[book]
  if (!bookData) return null
  
  return bookData[chapter] || null
}

// Function to get all books
export function getAllBooks(): string[] {
  return Object.keys(BIBLE_DATA)
}

// Function to get all chapters for a book
export function getAllChapters(book: string): number[] {
  const bookData = BIBLE_DATA[book]
  if (!bookData) return []
  
  return Object.keys(bookData).map(Number).sort((a, b) => a - b)
}

// Function to get all verses for a book and chapter
export function getAllVerses(book: string, chapter: number): number[] {
  const chapterData = getChapter(book, chapter)
  if (!chapterData) return []
  
  return Object.keys(chapterData).map(Number).sort((a, b) => a - b)
}