import type { Religion } from '@/types/content'

export const christianity: Religion = {
  id: 'christianity',
  name: 'Christianity',
  symbol: '✝️',
  description: 'A comprehensive journey through Christian faith, from foundational beliefs to advanced theology, designed to deepen your understanding and practice of Christianity.',
  levels: [
    {
      id: 'foundations',
      name: 'Foundations of Faith',
      description: 'Essential teachings for new believers to understand core Christian beliefs and build spiritual habits.',
      goals: [
        'Understand the basic tenets of Christian faith',
        'Develop a daily prayer and Bible reading practice',
        'Grasp the concept of salvation and grace',
        'Build a foundation for spiritual growth'
      ],
      moduleIds: ['gospel', 'jesus', 'salvation', 'bible-intro', 'prayer']
    }
  ],
  modules: [
    {
      id: 'gospel',
      title: 'What Is the Gospel?',
      description: 'Explore the core message of Christianity and its transformative power.',
      content: '# The Gospel: God\'s Good News\n\nThe Gospel is the central message of Christianity...',
      learningObjectives: [
        'Define the Gospel in clear, biblical terms',
        'Understand the four key elements: God, Sin, Christ, Response',
        'Explain how the Gospel transforms lives',
        'Learn to share the Gospel effectively'
      ],
      keyTerms: [
        {
          term: 'Gospel',
          definition: 'The good news of salvation through Jesus Christ',
          context: 'From the Greek "euangelion" meaning good news'
        },
        {
          term: 'Salvation',
          definition: 'Deliverance from sin and its consequences through faith in Christ',
          context: 'Central theme of the Gospel message'
        }
      ],
      references: [
        {
          title: 'The Gospel According to Jesus',
          author: 'John MacArthur',
          source: 'Book',
          year: 2008,
          type: 'book'
        },
        {
          title: 'What Is the Gospel?',
          author: 'Greg Gilbert',
          source: '9Marks',
          type: 'article',
          url: 'https://www.9marks.org/article/what-gospel/'
        }
      ],
      quiz: [
        {
          question: 'What are the four key elements of the Gospel message?',
          options: [
            'God, Sin, Christ, Response',
            'Faith, Hope, Love, Peace',
            'Bible, Church, Prayer, Worship',
            'Creation, Fall, Redemption, Restoration'
          ],
          correctAnswer: 0,
          explanation: 'The Gospel message contains four essential elements: God\'s holiness, humanity\'s sin, Christ\'s redemption, and our response of faith.'
        }
      ],
      resources: [
        {
          title: 'The Gospel in 6 Minutes',
          type: 'video',
          url: 'https://www.desiringgod.org/messages/gospel-in-6-minutes',
          duration: '6:00',
          difficulty: 'beginner'
        },
        {
          title: 'Understanding the Gospel',
          type: 'reading',
          url: 'https://www.thegospelcoalition.org/essay/the-gospel/',
          difficulty: 'intermediate'
        }
      ]
    }
    // Additional modules would be defined here...
  ]
} 