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
    title: 'Christian Radio International',
    country: 'United States',
    description: '24/7 Christian music, sermons, and Bible teachings from around the world',
    tradition: 'Christian',
    language: 'English',
    tags: ['Christian', 'Music', 'Teaching'],
    streamUrl: 'https://stream.example.com/christian-1'
  },
  {
    title: 'Gospel Light Radio',
    country: 'United Kingdom',
    description: 'Contemporary Christian music and inspirational programming',
    tradition: 'Christian',
    language: 'English',
    tags: ['Christian', 'Music', 'Inspiration'],
    streamUrl: 'https://stream.example.com/christian-2'
  },
  {
    title: 'Quran Radio Network',
    country: 'Saudi Arabia',
    description: 'Continuous Quran recitation and Islamic lectures',
    tradition: 'Islamic',
    language: 'Arabic',
    tags: ['Islamic', 'Quran', 'Recitation'],
    streamUrl: 'https://stream.example.com/islamic-1'
  },
  {
    title: 'Islamic Voice',
    country: 'United States',
    description: 'Islamic teachings and spiritual guidance in multiple languages',
    tradition: 'Islamic',
    language: 'English',
    tags: ['Islamic', 'Teaching', 'Guidance'],
    streamUrl: 'https://stream.example.com/islamic-2'
  },
  {
    title: 'Dharma Radio',
    country: 'Thailand',
    description: 'Buddhist teachings, meditation guidance, and peaceful music',
    tradition: 'Buddhist',
    language: 'English',
    tags: ['Buddhist', 'Teaching', 'Meditation'],
    streamUrl: 'https://stream.example.com/buddhist-1'
  },
  {
    title: 'Zen Radio',
    country: 'Japan',
    description: 'Zen meditation and Buddhist philosophy',
    tradition: 'Buddhist',
    language: 'Japanese',
    tags: ['Buddhist', 'Zen', 'Meditation'],
    streamUrl: 'https://stream.example.com/buddhist-2'
  },
  {
    title: 'Bhajan Radio',
    country: 'India',
    description: 'Traditional Hindu devotional music and spiritual discourses',
    tradition: 'Hindu',
    language: 'Hindi',
    tags: ['Hindu', 'Bhajan', 'Devotional'],
    streamUrl: 'https://stream.example.com/hindu-1'
  },
  {
    title: 'Vedic Radio',
    country: 'India',
    description: 'Vedic chants and Hindu spiritual teachings',
    tradition: 'Hindu',
    language: 'Sanskrit',
    tags: ['Hindu', 'Vedic', 'Chants'],
    streamUrl: 'https://stream.example.com/hindu-2'
  },
  {
    title: 'Torah Radio',
    country: 'Israel',
    description: 'Jewish religious programming and traditional music',
    tradition: 'Jewish',
    language: 'Hebrew',
    tags: ['Jewish', 'Torah', 'Traditional'],
    streamUrl: 'https://stream.example.com/jewish-1'
  },
  {
    title: 'Jewish Voice',
    country: 'United States',
    description: 'Contemporary Jewish music and cultural programming',
    tradition: 'Jewish',
    language: 'English',
    tags: ['Jewish', 'Music', 'Cultural'],
    streamUrl: 'https://stream.example.com/jewish-2'
  },
  {
    title: 'Interfaith Dialogue Radio',
    country: 'Canada',
    description: 'Promoting understanding between different religious traditions',
    tradition: 'Interfaith',
    language: 'English',
    tags: ['Interfaith', 'Dialogue', 'Understanding'],
    streamUrl: 'https://stream.example.com/interfaith-1'
  },
  {
    title: 'Unity Radio',
    country: 'Australia',
    description: 'Celebrating religious diversity and spiritual unity',
    tradition: 'Interfaith',
    language: 'English',
    tags: ['Interfaith', 'Unity', 'Diversity'],
    streamUrl: 'https://stream.example.com/interfaith-2'
  }
] 