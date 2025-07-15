export interface Station {
  title: string
  country: string
  description: string
  tradition: string
  language: string
  tags: string[]
  streamUrl: string
}

export const verifiedStations: Station[] = [
  {
    title: "EWTN Radio Católica",
    country: "Spain",
    description: "Catholic teachings and programming in Spanish",
    tradition: "Christian",
    language: "Spanish",
    tags: ["Christian", "Catholic", "Teaching"],
    streamUrl: "https://ewtn-ice.streamguys1.com/spanish-aac"
  },
  {
    title: "Relevant Radio",
    country: "United States",
    description: "Catholic programming focused on faith and daily life",
    tradition: "Christian",
    language: "English",
    tags: ["Christian", "Catholic", "Teaching"],
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/RR_MAIN.mp3"
  },
  {
    title: "Quran Radio",
    country: "Egypt",
    description: "Continuous Quran recitation with Arabic commentary",
    tradition: "Islamic",
    language: "Arabic",
    tags: ["Islamic", "Quran", "Recitation"],
    streamUrl: "https://backup.qurango.net/radio/ahmad_khader_altarabulsi"
  },
  {
    title: "Vatican Radio",
    country: "Vatican City",
    description: "Official radio service of the Holy See broadcasting Catholic programming",
    tradition: "Catholic",
    language: "Multiple",
    tags: ["Catholic", "News", "Prayer"],
    streamUrl: "https://radio.vaticannews.va/stream-en"
  },
  {
    title: "SGPC Gurbani Radio",
    country: "India",
    description: "Live Gurbani Kirtan from Sri Harmandir Sahib (Golden Temple)",
    tradition: "Sikh",
    language: "Punjabi",
    tags: ["Sikh", "Kirtan", "Gurbani"],
    streamUrl: "https://live.sgpc.net:8443/stream"
  },
  {
    title: "Bhakti Radio",
    country: "India",
    description: "Hindu devotional music, bhajans, and spiritual discourses",
    tradition: "Hindu",
    language: "Hindi/Sanskrit",
    tags: ["Hindu", "Bhakti", "Devotional"],
    streamUrl: "https://stream.zeno.fm/ut3kgm1vsa0uv"
  },
  {
    title: "American Family Radio",
    country: "United States",
    description: "Christian music, Bible teaching, and family-focused programming",
    tradition: "Christian",
    language: "English",
    tags: ["Christian", "Teaching", "Family"],
    streamUrl: "https://mediaserver3.afa.net:8443/inspo.mp3"
  },
  {
    title: "UCB Radio",
    country: "United Kingdom",
    description: "Contemporary Christian music and Bible-based teaching",
    tradition: "Christian",
    language: "English",
    tags: ["Christian", "Music", "Teaching"],
    streamUrl: "https://edge-audio-03-gos2.sharp-stream.com/ucbuk.mp3"
  },
  {
    title: "Faith Radio",
    country: "United States",
    description: "Contemporary Christian music and inspirational programming",
    tradition: "Christian",
    language: "English",
    tags: ["Christian", "Music", "Inspiration"],
    streamUrl: "https://nwmedia-wnwc-fm.streamguys1.com/wnwc-fm"
  },
  {
    title: "Moody Radio",
    country: "United States",
    description: "Bible teaching, Christian talk, and inspirational music",
    tradition: "Christian",
    language: "English",
    tags: ["Christian", "Teaching", "Talk"],
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/MB2.mp3"
  },
  {
    title: "Life FM",
    country: "New Zealand",
    description: "Contemporary Christian music and faith-based programming for New Zealand",
    tradition: "Christian",
    language: "English",
    tags: ["Christian", "Music", "Culture"],
    streamUrl: "https://rhema-radio.streamguys1.com/rhema-lifefm.mp3"
  },
  {
    title: "Radio Pulpit",
    country: "South Africa",
    description: "Christian teaching and gospel music in multiple African languages",
    tradition: "Christian",
    language: "Multiple",
    tags: ["Christian", "Teaching", "Gospel"],
    streamUrl: "https://edge.iono.fm/xice/129_medium.aac"
  },
  {
    title: "Radio Horeb",
    country: "Germany",
    description: "German Catholic radio with prayer, teaching, and sacred music",
    tradition: "Christian",
    language: "German",
    tags: ["Christian", "Catholic", "Prayer"],
    streamUrl: "https://rs16.stream24.net/horeb.mp3"
  },
  {
    title: "Radio Lumière",
    country: "Haiti",
    description: "Christian radio in Haitian Creole with gospel music and Bible teaching",
    tradition: "Christian",
    language: "Haitian Creole",
    tags: ["Christian", "Gospel", "Caribbean"],
    streamUrl: "https://stream.radio.co/s9f46a9bb1/listen"
  },
  {
    title: "Radio Aparecida",
    country: "Brazil",
    description: "Catholic radio broadcasting from the National Shrine of Our Lady of Aparecida",
    tradition: "Christian",
    language: "Portuguese",
    tags: ["Christian", "Catholic", "Brazilian"],
    streamUrl: "https://aparecida.jmvstream.com/stream"
  },
  {
    title: "Radio Guadalupe",
    country: "Mexico",
    description: "Catholic radio dedicated to Our Lady of Guadalupe with Spanish music and teachings",
    tradition: "Christian",
    language: "Spanish",
    tags: ["Christian", "Catholic", "Mexican"],
    streamUrl: "https://s2.radio.co/s73352a1cf/listen"
  },
  {
    title: "Radio Católica",
    country: "Ecuador",
    description: "Catholic radio broadcasting from Quito with Spanish teachings and Latin American music",
    tradition: "Christian",
    language: "Spanish",
    tags: ["Christian", "Catholic", "Latin American"],
    streamUrl: "https://streamingecuador.net:7078/stream"
  },
  {
    title: "CBCP Online Radio",
    country: "Philippines",
    description: "Catholic Bishops' Conference of the Philippines official radio service with Filipino Christian music and teachings",
    tradition: "Christian",
    language: "Filipino/English",
    tags: ["Christian", "Catholic", "Asian"],
    streamUrl: "https://stream.zeno.fm/hk3w15m8gwzuv"
  },
  {
    title: "Jesus Alive Radio",
    country: "India",
    description: "Christian radio broadcasting in multiple Indian languages with gospel music and Bible teachings",
    tradition: "Christian",
    language: "Multiple Indian Languages",
    tags: ["Christian", "Indian", "Teaching"],
    streamUrl: "https://stream.zeno.fm/eyxg23ky4x8uv"
  },
  {
    title: "Suara Kasih Radio",
    country: "Indonesia",
    description: "Christian radio broadcasting in Indonesian with gospel music and Bible teachings",
    tradition: "Christian",
    language: "Indonesian",
    tags: ["Christian", "Indonesian", "Teaching"],
    streamUrl: "https://c1.siar.us/radio/8040/stream"
  },
  {
    title: "Salt Media Radio",
    country: "Singapore",
    description: "Christian radio broadcasting from Singapore with contemporary worship music and teachings",
    tradition: "Christian",
    language: "English",
    tags: ["Christian", "Singaporean", "Contemporary"],
    streamUrl: "https://c13.radioboss.fm:18190/stream"
  },
  {
    title: "Radio Católica Peru",
    country: "Peru",
    description: "Catholic radio broadcasting from Peru with Spanish teachings and Andean Christian music",
    tradition: "Christian",
    language: "Spanish",
    tags: ["Christian", "Catholic", "Latin American"],
    streamUrl: "https://stream.zeno.fm/hu70hmkcu68uv"
  },
  {
    title: "CSN Radio",
    country: "United States",
    description: "Christian radio network broadcasting Bible teaching and worship music across America",
    tradition: "Christian",
    language: "English",
    tags: ["Christian", "Teaching", "American"],
    streamUrl: "https://ice7.securenetsystems.net/CSNAAC"
  },
  {
    title: "K-LOVE Radio",
    country: "United States",
    description: "Contemporary Christian music and inspirational content broadcasting nationwide",
    tradition: "Christian",
    language: "English",
    tags: ["Christian", "Music", "Contemporary"],
    streamUrl: "https://maestro.emfcdn.com/stream_for/k-love/web/aac"
  },
  {
    title: "Air1 Radio",
    country: "United States",
    description: "Positive and uplifting contemporary Christian music network",
    tradition: "Christian",
    language: "English",
    tags: ["Christian", "Music", "Contemporary"],
    streamUrl: "https://maestro.emfcdn.com/stream_for/air1/web/aac"
  },
  {
    title: "Word FM",
    country: "United States",
    description: "Bible teaching and Christian talk radio with focus on discipleship and spiritual growth",
    tradition: "Christian",
    language: "English",
    tags: ["Christian", "Teaching", "Talk"],
    streamUrl: "https://ice23.securenetsystems.net/WORDFM"
  },
  {
    title: "CHVN Radio",
    country: "Canada",
    description: "Contemporary Christian music and faith-based programming from Winnipeg",
    tradition: "Christian",
    language: "English",
    tags: ["Christian", "Music", "Canadian"],
    streamUrl: "https://goldenwest.leanstream.co/CHVNFM"
  }
] 