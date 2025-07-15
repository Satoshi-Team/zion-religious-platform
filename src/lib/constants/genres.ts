import { type GenreCategories } from "@/lib/types"

export const GENRE_CATEGORIES: GenreCategories = {
  "Religious & Spiritual": {
    "Religious Music": [
      "Gospel",
      "Christian Contemporary",
      "Christian Rock",
      "Islamic",
      "Buddhist",
      "Hindu",
      "Jewish",
      "Spiritual"
    ],
    "Sacred Music": [
      "Gregorian Chant",
      "Hymns",
      "Mantras",
      "Bhajans",
      "Qawwali",
      "Sufi Music"
    ],
    "Meditation": [
      "Ambient Meditation",
      "Guided Meditation",
      "Nature Sounds",
      "Binaural Beats",
      "Zen"
    ]
  },
  "Classical & Traditional": {
    "Western Classical": [
      "Baroque",
      "Classical Period",
      "Romantic",
      "Contemporary Classical",
      "Opera",
      "Chamber Music",
      "Orchestral"
    ],
    "World Classical": [
      "Indian Classical",
      "Chinese Classical",
      "Japanese Classical",
      "Persian Classical",
      "Arabic Classical"
    ],
    "Folk & Traditional": [
      "Celtic",
      "Nordic",
      "African",
      "Asian Folk",
      "Latin Folk",
      "European Folk"
    ]
  },
  "World & Cultural": {
    "Asian": [
      "Chinese",
      "Japanese",
      "Korean",
      "Indian",
      "Southeast Asian"
    ],
    "Middle Eastern": [
      "Arabic",
      "Turkish",
      "Persian",
      "Israeli"
    ],
    "African": [
      "West African",
      "North African",
      "South African",
      "East African"
    ],
    "Latin": [
      "Salsa",
      "Bachata",
      "Reggaeton",
      "Latin Jazz",
      "Brazilian"
    ]
  },
  "Contemporary": {
    "Jazz & Blues": [
      "Jazz",
      "Blues",
      "Smooth Jazz",
      "Big Band",
      "Fusion"
    ],
    "Electronic": [
      "Ambient",
      "Chillout",
      "Lofi",
      "New Age",
      "World Fusion"
    ],
    "Popular": [
      "Pop",
      "Rock",
      "R&B",
      "Soul",
      "Country"
    ]
  }
} as const;
    