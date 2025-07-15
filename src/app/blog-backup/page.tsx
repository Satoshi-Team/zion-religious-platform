'use client'

import React from 'react'
import Link from "next/link"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { FileText } from "lucide-react"

const blogPosts = [
  // Christianity Section
  {
    title: "What Is the Gospel?",
    description: "Understanding the core message of Christianity and its significance in modern life.",
    slug: "what-is-the-gospel",
    category: "Christianity",
    level: "Foundations of Faith",
  },
  {
    title: "Who Is Jesus Christ?",
    description: "Exploring the historical and theological significance of Jesus Christ in Christianity.",
    slug: "who-is-jesus-christ",
    category: "Christianity",
    level: "Foundations of Faith",
  },
  {
    title: "What Does It Mean to Be Saved?",
    description: "Understanding the concept of salvation in Christian theology and practice.",
    slug: "what-does-it-mean-to-be-saved",
    category: "Christianity",
    level: "Foundations of Faith",
  },
  {
    title: "How to Read the Bible",
    description: "A comprehensive guide to understanding and interpreting Scripture effectively.",
    slug: "how-to-read-the-bible",
    category: "Christianity",
    level: "Foundations of Faith",
  },
  {
    title: "Prayer 101: Talking with God",
    description: "Discover the transformative power of prayer in the Christian life.",
    slug: "prayer-101-talking-with-god",
    category: "Christianity",
    level: "Foundations of Faith",
  },
  // Islam Section
  {
    title: "Introduction to Islam",
    description: "Explore the origins and historical development of Islam, from its beginnings to global presence.",
    slug: "introduction-to-islam",
    category: "Islam",
    level: "Foundations",
  },
  {
    title: "The Five Pillars of Islam",
    description: "Understanding the fundamental practices that shape Muslim life and spirituality.",
    slug: "the-five-pillars-of-islam",
    category: "Islam",
    level: "Foundations",
  },
  {
    title: "The Six Articles of Faith",
    description: "Exploring the core beliefs that form the foundation of Islamic theology and worldview.",
    slug: "the-six-articles-of-faith",
    category: "Islam",
    level: "Foundations",
  },
  {
    title: "The Life and Teachings of Prophet Muhammad",
    description: "A comprehensive guide to the life, mission, and teachings of the final prophet of Islam.",
    slug: "the-life-and-teachings-of-prophet-muhammad",
    category: "Islam",
    level: "Foundations",
  },
  {
    title: "The Quran: Structure, Themes, and Interpretation",
    description: "Explore the divine revelation of Islam - its unique structure, major themes, and methods of interpretation.",
    slug: "the-quran-structure-themes-and-interpretation",
    category: "Islam",
    level: "Foundations",
  },
  {
    title: "Hadith Literature and Its Significance",
    description: "Understanding the recorded sayings, actions, and approvals of Prophet Muhammad and their role in Islamic tradition.",
    slug: "hadith-literature-and-its-significance",
    category: "Islam",
    level: "Foundations",
  },
  {
    title: "Islamic Law (Sharia): Sources and Applications",
    description: "Explore the comprehensive system of Islamic law (Sharia) - its divine sources, historical development, and contemporary applications in Muslim life and society.",
    slug: "islamic-law-sharia-sources-and-applications",
    category: "Islam",
    level: "Foundational",
  },
  {
    title: "Sunni and Shia Islam: Differences and Commonalities",
    description: "Explore the historical development, theological perspectives, and shared traditions of Sunni and Shia Islam. Understand the diversity within Islamic tradition while appreciating common foundations.",
    slug: "sunni-and-shia-islam-differences-and-commonalities",
    category: "Islam",
    level: "Foundational",
  },
  {
    title: "Islamic Theology (Aqidah): Foundations and Development",
    description: "Explore the systematic study of Islamic beliefs (Aqidah) - from its foundational principles to historical development and contemporary expressions. Understand the theological framework that shapes Muslim worldview.",
    slug: "islamic-theology-aqidah",
    category: "Islam",
    level: "Foundational",
  },
  {
    title: "Islamic Mysticism: Sufism and Its Practices",
    description: "Discover the rich tradition of Sufism - its spiritual practices, mystical teachings, and profound impact on Islamic culture and civilization. Explore the path of spiritual purification and divine love.",
    slug: "islamic-mysticism-sufism-and-its-practices",
    category: "Islam",
    level: "Foundational",
  },
  {
    title: "Islamic Art and Architecture: A Visual Journey Through Faith",
    description: "Explore the rich artistic heritage of Islamic civilization - from geometric patterns and calligraphy to magnificent mosques and palaces. Discover how art and architecture express Islamic values and spirituality.",
    slug: "islamic-art-and-architecture",
    category: "Islam",
    level: "Foundational",
  },
  {
    title: "Islamic Calendar and Festivals: Sacred Time and Celebrations",
    description: "Explore the Islamic lunar calendar, its significance in Muslim life, and the major festivals that mark the spiritual year. Discover how these celebrations connect faith, community, and cultural heritage.",
    slug: "islamic-calendar-and-festivals",
    category: "Islam",
    level: "Foundational",
  },
  {
    title: "Role of Women in Islam: Rights, Responsibilities, and Contributions",
    description: "Explore the multifaceted role of women in Islamic tradition - from spiritual equality to social contributions. Understand the rights, responsibilities, and historical achievements of Muslim women.",
    slug: "role-of-women-in-islam",
    category: "Islam",
    level: "Foundational",
  },
  {
    title: "Islamic Environmental Ethics: Stewardship and Sustainability",
    description: "Explore the comprehensive environmental ethics of Islam - from Quranic principles to contemporary applications. Understand how Islamic teachings guide environmental stewardship, conservation, and sustainable development.",
    slug: "islamic-environmental-ethics",
    category: "Islam",
    level: "Foundational",
  },
  {
    title: "Islamic Perspectives on Technology and Innovation: Tradition Meets Modernity",
    description: "Explore the dynamic relationship between Islamic tradition and technological innovation - from historical contributions to contemporary applications. Understand how Islamic principles guide technological development and digital transformation.",
    slug: "islamic-perspectives-on-technology-and-innovation",
    category: "Islam",
    level: "Foundational",
  },
  {
    title: "Islamic Perspectives on Education and Learning: Knowledge as Divine Light",
    description: "Explore the comprehensive educational philosophy of Islam - from foundational principles to contemporary applications. Understand how Islamic teachings guide learning, scholarship, and intellectual development.",
    slug: "islamic-perspectives-on-education-and-learning",
    category: "Islam",
    level: "Foundational",
  },
  {
    title: "Islamic Perspectives on Social Justice and Human Rights: Divine Justice in Action",
    description: "Explore the comprehensive framework of social justice and human rights in Islam - from Quranic principles to contemporary applications. Understand how Islamic teachings guide social responsibility, equality, and human dignity.",
    slug: "islamic-perspectives-on-social-justice-and-human-rights",
    category: "Islam",
    level: "Foundational",
  },
  {
    title: "Islamic Perspectives on Peace and Conflict Resolution: Divine Guidance for Harmony",
    description: "Explore the comprehensive framework of peace and conflict resolution in Islam - from Quranic principles to contemporary applications. Understand how Islamic teachings guide peaceful coexistence, reconciliation, and global harmony.",
    slug: "islamic-perspectives-on-peace-and-conflict-resolution",
    category: "Islam",
    level: "Foundational",
  },
  {
    title: "Islamic Views on Ethics and Morality: Principles and Applications",
    description: "Explore the comprehensive ethical framework of Islam - from foundational principles to contemporary applications. Understand how Islamic ethics guide personal conduct, social relations, and global challenges.",
    slug: "islamic-views-on-ethics-and-morality",
    category: "Islam",
    level: "Foundational",
  },
  {
    title: "Islamic Perspectives on Science and Knowledge: Tradition and Innovation",
    description: "Explore the rich tradition of scientific inquiry in Islam - from classical contributions to modern applications. Understand how Islamic thought has shaped scientific development and continues to engage with contemporary knowledge.",
    slug: "islamic-perspectives-on-science-and-knowledge",
    category: "Islam",
    level: "Foundational",
  },
  {
    title: "Islamic Economic Principles: Justice, Equity, and Sustainable Development",
    description: "Explore the comprehensive economic framework of Islam - from foundational principles to modern applications. Understand how Islamic economics promotes social justice, ethical business practices, and sustainable development.",
    slug: "islamic-economic-principles",
    category: "Islam",
    level: "Foundational",
  },
  {
    title: "Islamic Contributions to Civilization: A Legacy of Innovation and Knowledge",
    description: "Explore the profound impact of Islamic civilization on world history - from scientific discoveries and artistic achievements to philosophical insights and cultural developments. Discover how Muslim scholars and innovators shaped the modern world.",
    slug: "islamic-contributions-to-civilization",
    category: "Islam",
    level: "Foundational",
  },
  {
    title: "Islam and Interfaith Relations: Building Bridges of Understanding",
    description: "Explore the rich tradition of interfaith relations in Islam - from Quranic principles to contemporary dialogue. Understand how Islamic teachings guide engagement with other faiths and promote mutual understanding.",
    slug: "islam-and-interfaith-relations",
    category: "Islam",
    level: "Foundational",
  },
  {
    title: "Contemporary Issues in the Muslim World: Challenges and Opportunities",
    description: "Explore the complex challenges and opportunities facing Muslim communities today - from social transformation and political dynamics to cultural preservation and global engagement. Understand how Islamic principles guide responses to modern issues.",
    slug: "contemporary-issues-in-the-muslim-world",
    category: "Islam",
    level: "Foundational",
  },
  {
    title: "Islam in the Modern World: Challenges and Opportunities",
    description: "Explore how Islam engages with contemporary challenges and opportunities - from technological advancement and social change to global dialogue and future development. Understand how Islamic principles guide adaptation and innovation in the modern era.",
    slug: "islam-in-the-modern-world",
    category: "Islam",
    level: "Foundational",
  },
  {
    title: "Life of Siddhartha Gautama: The Buddha's Journey to Enlightenment",
    description: "Explore the transformative journey of Siddhartha Gautama - from his princely origins to his profound awakening. Discover how his life experiences shaped the core teachings of Buddhism and continue to inspire spiritual seekers worldwide.",
    slug: "life-of-siddhartha-gautama",
    category: "Buddhism",
    level: "Foundations",
  },
  {
    title: "The Four Noble Truths: Core Teachings of Buddhism",
    description: "Explore the fundamental teachings of Buddhism through the Four Noble Truths - from understanding suffering to the path of liberation. Discover how these timeless insights continue to guide spiritual seekers toward enlightenment.",
    slug: "the-four-noble-truths",
    category: "Buddhism",
    level: "Foundations",
  },
  {
    title: "The Noble Eightfold Path: Practical Guide to Buddhist Practice",
    description: "Explore the Noble Eightfold Path - Buddhism's practical guide to ethical conduct, mental discipline, and wisdom. Discover how these eight interconnected practices lead to liberation and enlightenment.",
    slug: "the-noble-eightfold-path",
    category: "Buddhism",
    level: "Foundations",
  },
  {
    title: "Concepts of Karma and Rebirth: Understanding the Cycle of Existence",
    description: "Explore the profound Buddhist concepts of Karma and Rebirth - from understanding the law of cause and effect to the cycle of existence. Discover how these teachings shape Buddhist understanding of life, death, and liberation.",
    slug: "concepts-of-karma-and-rebirth",
    category: "Buddhism",
    level: "Foundations",
  },
  {
    title: "The Three Marks of Existence: Core Buddhist Teachings on Reality",
    description: "Explore the Three Marks of Existence (Anicca, Dukkha, Anatta) - fundamental Buddhist teachings that reveal the true nature of reality. Discover how understanding impermanence, suffering, and non-self leads to wisdom and liberation.",
    slug: "the-three-marks-of-existence",
    category: "Buddhism",
    level: "Foundations",
  },
  {
    title: "The Five Precepts and Ethical Conduct: Buddhist Moral Guidelines",
    description: "Explore the Five Precepts (Pancasila) - fundamental Buddhist guidelines for ethical living. Discover how these moral principles promote harmony, mindfulness, and spiritual development in daily life.",
    slug: "the-five-precepts-and-ethical-conduct",
    category: "Buddhism",
    level: "Foundations",
  },
  {
    title: "Theravada Buddhism: Beliefs and Practices",
    description: "Explore Theravada Buddhism - the oldest surviving Buddhist tradition. Discover its core beliefs, meditation practices, monastic life, and profound impact on Southeast Asian cultures and beyond.",
    slug: "theravada-buddhism-beliefs-and-practices",
    category: "Buddhism",
    level: "Foundations",
  },
  {
    title: "Buddhist Meditation Techniques: Path to Mindfulness and Insight",
    description: "Explore the diverse meditation techniques in Buddhism - from mindfulness and concentration to insight and loving-kindness practices. Discover how these ancient methods cultivate wisdom, compassion, and inner peace.",
    slug: "buddhist-meditation-techniques",
    category: "Buddhism",
    level: "Foundations",
  },
  {
    title: "Buddhism and Mindfulness: Ancient Wisdom in Modern Life",
    description: "Explore the profound connection between Buddhism and mindfulness - from ancient meditation practices to contemporary applications in psychology, healthcare, and daily life. Discover how Buddhist wisdom enhances modern mindfulness.",
    slug: "buddhism-and-mindfulness",
    category: "Buddhism",
    level: "Foundations",
  },
  {
    title: "Buddhist Ethics and Moral Philosophy: Path to Virtuous Living",
    description: "Explore the comprehensive ethical framework of Buddhism - from the Five Precepts to the Noble Eightfold Path. Discover how Buddhist moral principles guide personal conduct, social relations, and global challenges.",
    slug: "buddhist-ethics-and-moral-philosophy",
    category: "Buddhism",
    level: "Foundations",
  },
  {
    title: "Buddhist Cosmology: Understanding the Universe and Realms of Existence",
    description: "Explore the intricate Buddhist cosmology - from the structure of the universe to the realms of existence. Discover how Buddhist teachings explain the nature of reality, rebirth, and the path to liberation.",
    slug: "buddhist-cosmology",
    category: "Buddhism",
    level: "Foundations",
  },
  {
    title: "Buddhist Art and Architecture: Visual Expressions of Enlightenment",
    description: "Explore the rich artistic heritage of Buddhism - from ancient stupas and temples to intricate sculptures and paintings. Discover how Buddhist art and architecture express spiritual teachings and cultural values across Asia.",
    slug: "buddhist-art-and-architecture",
    category: "Buddhism",
    level: "Foundations",
  },
  {
    title: "Buddhist Scriptures and Texts: Sacred Writings and Their Significance",
    description: "Explore the vast collection of Buddhist scriptures - from the Pali Canon to Mahayana sutras. Discover how these sacred texts preserve the Buddha's teachings and guide spiritual practice across traditions.",
    slug: "buddhist-scriptures-and-texts",
    category: "Buddhism",
    level: "Foundations",
  },
  {
    title: "Buddhist Festivals and Celebrations: Sacred Time and Community",
    description: "Explore the rich tradition of Buddhist festivals and celebrations - from Vesak to Uposatha days. Discover how these sacred occasions connect communities, honor the Buddha's teachings, and guide spiritual development.",
    slug: "buddhist-festivals-and-celebrations",
    category: "Buddhism",
    level: "Foundations",
  },
  {
    title: "Buddhist Festivals and Rituals: Sacred Time and Practice",
    description: "Explore the rich tradition of Buddhist festivals and rituals - from Vesak to Uposatha days. Discover how these sacred occasions connect communities, honor the Buddha's teachings, and guide spiritual development.",
    slug: "buddhist-festivals-and-rituals",
    category: "Buddhism",
    level: "Foundations",
  },
  {
    title: "Buddhist Philosophy and Logic: Analytical Approaches to Reality",
    description: "Explore the sophisticated philosophical systems and logical frameworks of Buddhism - from Abhidharma analysis to Madhyamaka dialectics. Discover how Buddhist philosophy addresses fundamental questions about reality, consciousness, and existence.",
    slug: "buddhist-philosophy-and-logic",
    category: "Buddhism",
    level: "Foundations",
  },
  {
    title: "Buddhist Psychology and Mind Training: Cultivating Mental Well-being",
    description: "Explore the profound psychological insights and practical techniques of Buddhist mind training - from mindfulness to compassion cultivation. Discover how Buddhist psychology offers effective tools for mental health, emotional balance, and personal growth.",
    slug: "buddhist-psychology-and-mind-training",
    category: "Buddhism",
    level: "Foundations",
  },
  {
    title: "Buddhist Social Ethics and Engaged Buddhism: Compassion in Action",
    description: "Explore the principles of Buddhist social ethics and the practice of Engaged Buddhism - from compassionate action to social transformation. Discover how Buddhist teachings guide ethical engagement with contemporary social issues.",
    slug: "buddhist-social-ethics-and-engaged-buddhism",
    category: "Buddhism",
    level: "Foundations",
  },
  {
    title: "Buddhism in the Modern World: Adaptation and Innovation",
    description: "Explore how Buddhism engages with contemporary challenges and opportunities - from technological advancement and social change to global dialogue and future development. Understand how Buddhist principles guide adaptation and innovation in the modern era.",
    slug: "buddhism-in-the-modern-world",
    category: "Buddhism",
    level: "Foundations",
  },
  {
    title: "Role of Monasticism in Buddhism: Preserving and Transmitting the Dharma",
    description: "Explore the vital role of monastic communities in Buddhism - from preserving ancient traditions to guiding spiritual practice. Discover how monastic life embodies Buddhist values and serves as a bridge between ancient wisdom and modern life.",
    slug: "role-of-monasticism-in-buddhism",
    category: "Buddhism",
    level: "Foundations",
  },
  {
    title: "Buddhism's Spread Across Asia: A Journey of Transformation",
    description: "Explore the remarkable journey of Buddhism across Asia - from its origins in India to its diverse expressions across the continent. Discover how Buddhist teachings adapted to different cultures while maintaining their core wisdom.",
    slug: "buddhisms-spread-across-asia",
    category: "Buddhism",
    level: "Foundations",
  },
  {
    title: "Engaged Buddhism and Social Action: Compassion in Practice",
    description: "Explore the dynamic movement of Engaged Buddhism - from its origins with Thich Nhat Hanh to contemporary applications. Discover how Buddhist principles guide social action, environmental stewardship, and compassionate service.",
    slug: "engaged-buddhism-and-social-action",
    category: "Buddhism",
    level: "Foundations",
  },
  {
    title: "Contemporary Issues in Buddhism: Challenges and Opportunities",
    description: "Explore the complex challenges and opportunities facing Buddhism in the modern world - from social transformation and political dynamics to cultural preservation and global engagement. Understand how Buddhist principles guide responses to contemporary issues.",
    slug: "contemporary-issues-in-buddhism",
    category: "Buddhism",
    level: "Foundations",
  },
  {
    title: "Origins and Historical Development of Hinduism: A Journey Through Time",
    description: "Explore the rich historical development of Hinduism - from its ancient roots in the Indus Valley to its evolution through the Vedic period, classical age, and modern era. Discover how this diverse tradition has shaped and been shaped by Indian civilization.",
    slug: "origins-and-historical-development-of-hinduism",
    category: "Hinduism",
    level: "Foundations",
  },
  {
    title: "The Vedas and Upanishads: Sacred Wisdom and Philosophical Insights",
    description: "Explore the profound wisdom of the Vedas and Upanishads - from the ancient hymns of the Rigveda to the philosophical insights of the Upanishads. Discover how these sacred texts form the foundation of Hindu thought and continue to guide spiritual seekers.",
    slug: "the-vedas-and-upanishads",
    category: "Hinduism",
    level: "Foundations",
  },
  {
    title: "The Bhagavad Gita and Its Teachings: Divine Dialogue and Spiritual Guidance",
    description: "Explore the profound wisdom of the Bhagavad Gita - from its historical context in the Mahabharata to its timeless teachings on duty, devotion, and self-realization. Discover how this sacred dialogue between Krishna and Arjuna continues to guide seekers on their spiritual journey.",
    slug: "the-bhagavad-gita-and-its-teachings",
    category: "Hinduism",
    level: "Foundations",
  },
  {
    title: "Concepts of Dharma and Karma: Cosmic Order and Action",
    description: "Explore the profound concepts of Dharma and Karma in Hinduism - from cosmic order and moral duty to the law of cause and effect. Discover how these fundamental principles shape Hindu understanding of life, ethics, and spiritual progress.",
    slug: "concepts-of-dharma-and-karma",
    category: "Hinduism",
    level: "Foundations",
  },
  {
    title: "The Four Purusharthas: Goals of Human Life",
    description: "Explore the Four Purusharthas - Dharma (duty), Artha (prosperity), Kama (pleasure), and Moksha (liberation). Discover how these fundamental goals provide a comprehensive framework for balanced living and spiritual fulfillment in Hinduism.",
    slug: "the-four-purusharthas",
    category: "Hinduism",
    level: "Foundations",
  },
  {
    title: "Major Deities: Brahma, Vishnu, Shiva, and Others",
    description: "Explore the rich pantheon of Hindu deities - from the Trimurti (Brahma, Vishnu, Shiva) to the divine feminine and other significant gods and goddesses. Discover their attributes, stories, and significance in Hindu worship and philosophy.",
    slug: "major-deities",
    category: "Hinduism",
    level: "Foundations",
  },
  {
    title: "Avatars of Vishnu: Divine Incarnations",
    description: "Explore the ten major incarnations (Dashavatara) of Lord Vishnu - from Matsya to Kalki. Discover how these divine manifestations preserve cosmic order, restore dharma, and guide humanity through different ages.",
    slug: "avatars-of-vishnu",
    category: "Hinduism",
    level: "Foundations",
  },
  {
    title: "Hindu Cosmology and Time Cycles: Understanding the Cosmic Order",
    description: "Explore the profound concepts of Hindu cosmology - from the cyclical nature of time to the vast cosmic cycles of creation and dissolution. Discover how these ancient insights shape Hindu understanding of existence and spiritual evolution.",
    slug: "hindu-cosmology",
    category: "Hinduism",
    level: "Foundations",
  },
  {
    title: "Yoga: Paths and Practices",
    description: "Explore the diverse paths of Yoga in Hinduism - from physical postures to spiritual practices. Discover how these ancient traditions guide seekers toward self-realization and liberation.",
    slug: "yoga-paths-and-practices",
    category: "Hinduism",
    level: "Foundations",
  },
  {
    title: "Hindu Rituals and Worship: Sacred Practices and Devotional Traditions",
    description: "Explore the rich tapestry of Hindu rituals and worship practices - from daily puja to grand temple ceremonies. Discover how these sacred traditions connect devotees with the divine and maintain cosmic harmony.",
    slug: "hindu-rituals-and-worship",
    category: "Hinduism",
    level: "Foundations",
  },
  {
    title: "Hindu Music and Dance: Sacred Arts and Devotional Expressions",
    description: "Explore the profound artistic traditions of Hindu music and dance - from classical ragas to sacred temple dances. Discover how these divine arts express spiritual wisdom and connect devotees with the divine.",
    slug: "hindu-music-and-dance",
    category: "Hinduism",
    level: "Intermediate",
  },
  {
    title: "Hindu Scriptures: Sacred Texts and Their Significance",
    description: "Explore the profound wisdom of Hindu scriptures - from the ancient Vedas to the philosophical Upanishads and epic narratives. Discover how these sacred texts form the foundation of Hindu thought and continue to guide spiritual seekers.",
    slug: "hindu-scriptures",
    category: "Hinduism",
    level: "Intermediate",
  },
  {
    title: "Hindu Spiritual Practices: Paths to Enlightenment",
    description: "Explore the diverse spiritual practices of Hinduism - from meditation and yoga to devotional worship and selfless service. Discover how these ancient paths guide seekers toward self-realization and divine union.",
    slug: "hindu-spiritual-practices",
    category: "Hinduism",
    level: "Intermediate",
  },
  {
    title: "Hindu Art and Architecture: Sacred Expressions",
    description: "Explore the profound artistic and architectural traditions of Hinduism - from ancient temple designs to sacred iconography. Discover how these visual expressions embody divine principles and spiritual wisdom.",
    slug: "hindu-art-and-architecture",
    category: "Hinduism",
    level: "Intermediate",
  },
  {
    title: "Women in Hinduism: Divine Feminine and Sacred Roles",
    description: "Explore the multifaceted role of women in Hinduism - from divine manifestations to spiritual leadership. Discover how the sacred feminine principle shapes religious practice, social roles, and spiritual wisdom.",
    slug: "women-in-hinduism",
    category: "Hinduism",
    level: "Intermediate",
  },
  {
    title: "Hindu Diaspora: Global Presence and Cultural Adaptation",
    description: "Explore the rich tapestry of Hindu communities worldwide - from ancient trade routes to modern migrations. Discover how Hindu traditions adapt, flourish, and contribute to global cultural diversity while maintaining spiritual continuity.",
    slug: "hindu-diaspora",
    category: "Hinduism",
    level: "Intermediate",
  },
  {
    title: "Hinduism and Science: Ancient Wisdom Meets Modern Understanding",
    description: "Explore the profound relationship between Hinduism and science - from ancient Vedic insights to contemporary scientific discoveries. Discover how Hindu philosophy and modern science complement each other in understanding the nature of reality.",
    slug: "hinduism-and-science",
    category: "Hinduism",
    level: "Intermediate",
  },
  {
    title: "Bhakti Movement: Path of Divine Love",
    description: "Explore the transformative Bhakti Movement - from its medieval origins to contemporary expressions. Discover how devotional practices connect devotees with the divine through love, music, and spiritual surrender.",
    slug: "bhakti-movement",
    category: "Hinduism",
    level: "Foundations",
  },
  {
    title: "Hindu Art: Expressions of Divine Beauty",
    description: "Explore the rich visual language of Hindu art - from ancient cave paintings to contemporary expressions. Discover how sacred iconography, temple sculptures, and devotional art convey profound spiritual truths and cultural heritage.",
    slug: "hindu-art",
    category: "Hinduism",
    level: "Foundations",
  },
  {
    title: "Hindu Philosophy: Schools and Thought",
    description: "Explore the profound philosophical traditions of Hinduism - from the six classical schools (Darshanas) to contemporary interpretations. Discover how these diverse systems of thought address fundamental questions about reality, consciousness, and liberation.",
    slug: "hindu-philosophy",
    category: "Hinduism",
    level: "Intermediate",
  },
  {
    title: "Hindu Ethics: Principles and Applications",
    description: "Explore the profound ethical framework of Hinduism - from ancient Vedic principles to contemporary applications. Discover how Hindu ethics guide personal conduct, social responsibility, and spiritual development.",
    slug: "hindu-ethics",
    category: "Hinduism",
    level: "Intermediate",
  },
  {
    title: "Hindu Temples: Sacred Architecture and Worship",
    description: "Explore the profound architectural and spiritual significance of Hindu temples - from ancient Vedic altars to modern global sanctuaries. Discover how these sacred spaces embody divine principles and serve as centers of worship, community, and cultural preservation.",
    slug: "hindu-temples",
    category: "Hinduism",
    level: "Foundations",
  },
  {
    title: "Hindu Rituals: Sacred Practices and Ceremonies",
    description: "Explore the profound ritual traditions of Hinduism - from daily worship to life cycle ceremonies. Discover how these sacred practices connect devotees with the divine and maintain cosmic harmony.",
    slug: "hindu-rituals",
    category: "Hinduism",
    level: "Intermediate",
  },
  {
    title: "Hindu Festivals and Celebrations: Sacred Time and Community",
    description: "Explore the vibrant tapestry of Hindu festivals - from Diwali's triumph of light to Holi's celebration of divine love. Discover how these sacred celebrations connect communities, honor deities, and mark cosmic cycles.",
    slug: "hindu-festivals",
    category: "Hinduism",
    level: "Foundations",
  },
  {
    title: "Hinduism in the Modern World: Challenges and Adaptations",
    description: "Explore how Hinduism engages with contemporary challenges and opportunities - from technological advancement and social change to global dialogue and future development. Understand how Hindu principles guide adaptation and innovation in the modern era.",
    slug: "hinduism-in-the-modern-world",
    category: "Hinduism",
    level: "Intermediate",
  },
  {
    title: "Hinduism and Ecology: Environmental Ethics and Practices",
    description: "Explore the profound ecological wisdom in Hinduism - from ancient Vedic insights to contemporary environmental practices. Discover how Hindu philosophy guides sustainable living and environmental stewardship.",
    slug: "hinduism-and-ecology",
    category: "Hinduism",
    level: "Intermediate",
  },
  // Hinduism Section (Auto-generated, please review and update titles/descriptions as needed)
  {
    title: "Introduction to Hinduism: Origins, Beliefs & Sacred Texts",
    description: "Explore the foundations of Hinduism: its ancient origins, core beliefs like Dharma, Karma, Samsara, and Moksha, and an overview of its sacred texts.",
    slug: "introduction-to-hinduism",
    category: "Hinduism",
    level: "Foundations",
  },
  {
    title: "Major Hindu Deities",
    description: "Learn about Brahma, Vishnu, Shiva, Devi (Durga, Kali, Lakshmi, Saraswati), Ganesha, Hanuman, and their significance.",
    slug: "major-deities",
    category: "Hinduism",
    level: "Core Concepts",
  },
  {
    title: "Avatars of Vishnu (Dashavatara)",
    description: "Discover the ten primary avatars of Vishnu (Matsya, Kurma, Varaha, Narasimha, Vamana, Parashurama, Rama, Krishna, Buddha, Kalki) and their stories.",
    slug: "avatars-of-vishnu",
    category: "Hinduism",
    level: "Core Concepts",
  },
  {
    title: "Hindu Cosmology and Time Cycles",
    description: "Understand Hindu concepts of creation (Srishti), dissolution (Pralaya), Yugas, Kalpas, and Brahman.",
    slug: "hindu-cosmology",
    category: "Hinduism",
    level: "Core Concepts",
  },
  {
    title: "Yoga: Paths and Practices",
    description: "Explore Karma Yoga, Bhakti Yoga, Jnana Yoga, and Raja Yoga (Ashtanga Yoga - Eight Limbs).",
    slug: "yoga-paths-and-practices",
    category: "Hinduism",
    level: "Practices",
  },
  {
    title: "Hindu Rituals and Worship",
    description: "Learn about Puja, Homa, Yajnas, temple worship, and domestic shrines in Hinduism.",
    slug: "hindu-rituals-and-worship",
    category: "Hinduism",
    level: "Practices",
  },
  {
    title: "Hindu Festivals",
    description: "Discover major Hindu celebrations like Diwali, Holi, Navaratri, Ganesh Chaturthi, Shivaratri, and their significance.",
    slug: "hindu-festivals",
    category: "Hinduism",
    level: "Culture & Society",
  },
  {
    title: "Hindu Sacred Texts",
    description: "Overview of Shruti (Vedas, Upanishads) and Smriti (Epics - Ramayana, Mahabharata; Puranas; Dharma Shastras).",
    slug: "hindu-scriptures",
    category: "Hinduism",
    level: "Sacred Texts",
  },
  {
    title: "Hindu Philosophy: Orthodox and Heterodox Schools",
    description: "Overview of the Six Astika (Nyaya, Vaisheshika, Samkhya, Yoga, Mimamsa, Vedanta) and Nastika (e.g., Charvaka) schools.",
    slug: "hindu-philosophy",
    category: "Hinduism",
    level: "Philosophy",
  },
  {
    title: "Concepts of Dharma and Karma in Hinduism",
    description: "Understanding the ethical and moral frameworks within Hindu traditions.",
    slug: "concepts-of-dharma-and-karma",
    category: "Hinduism",
    level: "Core Concepts",
  },
  {
    title: "The Four Purusharthas: Aims of Human Life",
    description: "Exploring Dharma (Righteousness), Artha (Wealth), Kama (Pleasure), and Moksha (Liberation).",
    slug: "the-four-purusharthas",
    category: "Hinduism",
    level: "Core Concepts",
  },
  {
    title: "Hindu Social Structure: Varna, Jati, Ashramas, Gotra",
    description: "An overview of traditional Hindu social organization and stages of life.",
    slug: "hindu-social-structure",
    category: "Hinduism",
    level: "Culture & Society",
  },
  {
    title: "Hinduism and Ecology: Sacredness of Nature",
    description: "Examining environmental ethics and traditional practices in Hinduism.",
    slug: "hinduism-and-ecology",
    category: "Hinduism",
    level: "Contemporary Issues",
  },
  {
    title: "Hinduism and Science: Contributions and Dialogue",
    description: "Exploring historical contributions (Mathematics, Astronomy, Medicine) and modern interactions.",
    slug: "hindu-science-and-mathematics", // Note: slug based on the primary file we enhanced
    category: "Hinduism",
    level: "Intellectual Traditions",
  },
  {
    title: "Hinduism in the Modern World: Reform, Diaspora, Issues",
    description: "Discussing reform movements, the global diaspora, and contemporary challenges.",
    slug: "hinduism-in-the-modern-world",
    category: "Hinduism",
    level: "Contemporary Issues",
  },
  // Buddhism Posts (Ensure these are also present or add as needed)
  {
    title: "Buddhist Cosmology: Universe and Realms",
    description: "Explore Buddhist cosmology, including the multiple realms of existence, cycles of time, and understanding of the universe.",
    slug: "buddhist-cosmology",
    category: "Buddhism",
    level: "Core Concepts",
  },
  {
    title: "Vajrayāna Buddhism: Beliefs and Practices",
    description: "Explore the esoteric teachings, tantric practices, and philosophical foundations of Vajrayāna Buddhism.",
    slug: "vajrayana-buddhism-beliefs-and-practices",
    category: "Buddhism",
    level: "Schools & Traditions",
  },
  // Add other existing Buddhist posts from the directory listing if they are not already in blogPosts
  // ... (ensure to add other Buddhist and any missing Islamic posts similarly)
  // Example for a generic Buddhist post if details are not immediately available:
  // {
  //   title: "Buddhist Topic Name",
  //   description: "Brief description of this Buddhist topic.",
  //   slug: "buddhist-topic-name-slug",
  //   category: "Buddhism",
  //   level: "General",
  // },
]

const categories = Array.from(new Set(blogPosts.map((post) => post.category))).sort()

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts
    .filter((post) => !selectedCategory || post.category === selectedCategory)
    .filter((post) => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.title.localeCompare(b.title)) // Sort posts alphabetically by title

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <FileText className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Blog</h1>
      </div>

      <div className="grid gap-6">
        {filteredPosts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="hover:bg-accent transition-colors">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>
                  {post.category} • {post.level}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {post.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
} 