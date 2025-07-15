export interface MeditationGuide {
  id: string
  title: string
  name: string
  description: string
  duration: number | string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  author: string
  audioUrl: string
  transcriptUrl?: string
  religion?: string
  type: "morning" | "evening" | "guided" | "silent"
  imageUrl: string
  tags?: string[]
  teacher?: {
    name: string
  }
  resources?: {
    format: string
    url: string
    title: string
  }[]
}

export const MEDITATION_GUIDES: MeditationGuide[] = [
  {
    id: "1",
    title: "Mindful Breathing",
    name: "Mindful Breathing",
    description: "A gentle introduction to mindful breathing techniques",
    duration: 600, // 10 minutes
    level: "Beginner",
    author: "Sarah Johnson",
    audioUrl: "/meditations/mindful-breathing.mp3",
    transcriptUrl: "/meditations/mindful-breathing.pdf",
    religion: "Universal",
    type: "guided",
    imageUrl: "/images/meditations/mindful-breathing.jpg"
  },
  {
    id: "2",
    title: "Christian Contemplative Prayer",
    name: "Christian Contemplative Prayer",
    description: "A guide to contemplative prayer in the Christian tradition",
    duration: 900, // 15 minutes
    level: "Intermediate",
    author: "Fr. Thomas",
    audioUrl: "/meditations/contemplative-prayer.mp3",
    religion: "Christianity",
    type: "guided",
    imageUrl: "/images/meditations/contemplative-prayer.jpg"
  },
  {
    id: "contemplative-prayer",
    title: "Introduction to Contemplative Prayer",
    name: "Introduction to Contemplative Prayer",
    description: "Learn the ancient Christian practice of contemplative prayer with guidance from Fr. Thomas Keating",
    duration: 1200, // 20 minutes
    level: "Beginner",
    author: "Fr. Thomas Keating",
    audioUrl: "https://contemplativeoutreach.org/wp-content/uploads/2020/07/Centering-Prayer-Introduction.mp3",
    transcriptUrl: "https://contemplativeoutreach.org/centering-prayer-method/",
    religion: "Christianity",
    type: "guided",
    imageUrl: "/images/meditations/centering-prayer.jpg"
  },
  {
    id: "zen-meditation",
    title: "Zen Buddhist Meditation",
    name: "Zen Buddhist Meditation",
    description: "Traditional Zen meditation instruction from Thich Nhat Hanh",
    duration: 1800, // 30 minutes
    level: "Intermediate",
    author: "Thich Nhat Hanh",
    audioUrl: "https://plumvillage.org/meditations/basic-zen.mp3",
    transcriptUrl: "https://plumvillage.org/meditation/zen-guides/",
    religion: "Buddhism",
    type: "guided",
    imageUrl: "/images/meditations/zen.jpg"
  },
  {
    id: "jewish-meditation",
    title: "Jewish Contemplative Practice",
    name: "Jewish Contemplative Practice",
    description: "Traditional Jewish meditation techniques from Kabbalistic traditions",
    duration: 1500, // 25 minutes
    level: "Intermediate",
    author: "Rabbi David Cooper",
    audioUrl: "https://www.jewishspirituality.org/meditations/contemplative.mp3",
    transcriptUrl: "https://www.jewishspirituality.org/guides/contemplative-practice",
    religion: "Judaism",
    type: "guided",
    imageUrl: "/images/meditations/jewish.jpg"
  },
  {
    id: "islamic-dhikr",
    title: "Guided Dhikr Meditation",
    name: "Guided Dhikr Meditation",
    description: "Traditional Islamic remembrance meditation",
    duration: 1200, // 20 minutes
    level: "Beginner",
    author: "Sheikh Hamza Yusuf",
    audioUrl: "https://www.zaytuna.edu/meditations/dhikr-guide.mp3",
    transcriptUrl: "https://www.zaytuna.edu/guides/dhikr",
    religion: "Islam",
    type: "guided",
    imageUrl: "/images/meditations/islamic.jpg"
  },
  {
    id: "hindu-mantra",
    title: "Sanskrit Mantra Meditation",
    name: "Sanskrit Mantra Meditation",
    description: "Vedic meditation using sacred mantras",
    duration: 1800, // 30 minutes
    level: "Intermediate",
    author: "Dr. David Frawley",
    audioUrl: "https://www.vedanet.com/meditations/mantra-guide.mp3",
    transcriptUrl: "https://www.vedanet.com/guides/mantra-meditation",
    religion: "Hinduism",
    type: "guided",
    imageUrl: "/images/meditations/hindu.jpg"
  },
  {
    id: "sikh-simran",
    title: "Guided Simran Practice",
    name: "Guided Simran Practice",
    description: "Sikh meditation focusing on divine names",
    duration: 1500, // 25 minutes
    level: "Beginner",
    author: "Bhai Sahib Singh",
    audioUrl: "https://www.sikhnet.com/meditations/simran-guide.mp3",
    transcriptUrl: "https://www.sikhnet.com/guides/simran",
    religion: "Sikhism",
    type: "guided",
    imageUrl: "/images/meditations/sikh.jpg"
  },
  {
    id: "taoist-qigong",
    title: "Taoist Qigong Meditation",
    name: "Taoist Qigong Meditation",
    description: "Traditional Taoist energy cultivation practices",
    duration: 2400, // 40 minutes
    level: "Advanced",
    author: "Master Mantak Chia",
    audioUrl: "https://www.taoistmeditation.com/qigong-guide.mp3",
    transcriptUrl: "https://www.taoistmeditation.com/guides/qigong",
    religion: "Taoism",
    type: "guided",
    imageUrl: "/images/meditations/taoist.jpg"
  },
  {
    id: "sufi-meditation",
    title: "Sufi Heart Meditation",
    name: "Sufi Heart Meditation",
    description: "Traditional Sufi meditation focusing on divine love",
    duration: 1800, // 30 minutes
    level: "Intermediate",
    author: "Sheikh Kabir Helminski",
    audioUrl: "https://sufism.org/meditations/heart-meditation.mp3",
    transcriptUrl: "https://sufism.org/guides/heart-meditation",
    religion: "Islam",
    type: "guided",
    imageUrl: "/images/meditations/sufi.jpg"
  },
  {
    id: "kabbalah-meditation",
    title: "Kabbalistic Meditation",
    name: "Kabbalistic Meditation",
    description: "Jewish mystical meditation practices",
    duration: 1500, // 25 minutes
    level: "Advanced",
    author: "Rabbi David Cooper",
    audioUrl: "https://kabbalah.com/meditations/tree-of-life.mp3",
    transcriptUrl: "https://kabbalah.com/guides/meditation",
    religion: "Judaism",
    type: "guided",
    imageUrl: "/images/meditations/kabbalah.jpg"
  },
  {
    id: "jain-samayika",
    title: "Jain Samayika Practice",
    name: "Jain Samayika Practice",
    description: "Traditional Jain meditation for equanimity",
    duration: 2700, // 45 minutes
    level: "Intermediate",
    author: "Acharya Chandanaji",
    audioUrl: "https://jainmeditation.org/samayika.mp3",
    transcriptUrl: "https://jainmeditation.org/guides/samayika",
    religion: "Jainism",
    type: "guided",
    imageUrl: "/images/meditations/jain.jpg"
  },
  {
    id: "morning-1",
    title: "Morning Reflection",
    name: "Morning Reflection",
    description: "Start your day with mindful meditation",
    duration: 900, // 15 minutes in seconds
    level: "Beginner",
    author: "Sarah Johnson",
    audioUrl: "/meditations/morning-reflection.mp3",
    imageUrl: "/images/meditations/morning.jpg",
    type: "morning"
  },
  {
    id: "evening-1",
    title: "Evening Peace",
    name: "Evening Peace",
    description: "End your day with peaceful meditation",
    duration: 1200, // 20 minutes in seconds
    level: "Beginner",
    author: "Sarah Johnson",
    audioUrl: "/meditations/evening-peace.mp3",
    imageUrl: "/images/meditations/evening.jpg",
    type: "evening"
  },
  // Add more meditation guides as needed
]

// Adding meditation categories for better organization
export const MEDITATION_CATEGORIES = {
  Mindfulness: ['Breathing', 'Body Scan', 'Walking', 'Eating'],
  Contemplative: ['Christian', 'Jewish', 'Islamic', 'Buddhist'],
  Movement: ['Yoga', 'Qigong', 'Walking', 'Tai Chi'],
  Chanting: ['Mantras', 'Psalms', 'Dhikr', 'Kirtan'],
  Guided: ['Nature', 'Healing', 'Sleep', 'Stress Relief'],
  Traditional: {
    Buddhist: ['Zen', 'Vipassana', 'Metta', 'Tibetan'],
    Hindu: ['Yoga Nidra', 'Trataka', 'Kundalini', 'Mantra'],
    Islamic: ['Muraqaba', 'Dhikr', 'Tafakkur', 'Contemplation'],
    Jewish: ['Hitbodedut', 'Kabbalistic', 'Torah Meditation'],
    Christian: ['Centering Prayer', 'Lectio Divina', 'Jesus Prayer'],
    Sikh: ['Simran', 'Naam Japo', 'Kirtan'],
    Jain: ['Samayika', 'Preksha', 'Kayotsarga'],
    Taoist: ['Qigong', 'Neigong', 'Zuowang']
  },
  Modern: {
    Secular: ['Mindfulness', 'Body Scan', 'Loving-Kindness'],
    Scientific: ['Neurofeedback', 'Binaural Beats', 'Breathwork'],
    Therapeutic: ['MBSR', 'MBCT', 'ACT', 'DBT']
  }
} as const 