export interface BuddhismTranslations {
  dharma: {
    title: string
    description: string
    coreTeachings: {
      title: string
      description: string
      fourNobleTruths: {
        title: string
        description: string
        truths: {
          first: string
          second: string
          third: string
          fourth: string
        }
      }
    }
    keyPrinciples: {
      title: string
      description: string
      principles: string[]
    }
    applications: {
      title: string
      description: string
      practices: string[]
    }
    scriptures: {
      title: string
      description: string
      texts: string[]
    }
    modern: {
      title: string
      description: string
      interpretations: string[]
    }
  }
}

export const buddhistTranslations: Record<string, BuddhismTranslations> = {
  en: {
    dharma: {
      title: "Buddhist Dharma Studies",
      description: "Explore the core teachings and philosophical concepts of Buddhism",
      coreTeachings: {
        title: "Core Teachings",
        description: "Understanding the fundamental principles of Buddhist philosophy",
        fourNobleTruths: {
          title: "The Four Noble Truths",
          description: "The foundation of Buddhist teachings",
          truths: {
            first: "The Truth of Suffering (Dukkha)",
            second: "The Truth of the Origin of Suffering (Samudaya)",
            third: "The Truth of the Cessation of Suffering (Nirodha)",
            fourth: "The Truth of the Path to the Cessation of Suffering (Magga)"
          }
        }
      },
      keyPrinciples: {
        title: "Key Principles",
        description: "Essential concepts and practices in Buddhism",
        principles: [
          "The Noble Eightfold Path",
          "The Middle Way",
          "Karma and Rebirth",
          "Non-attachment",
          "Mindfulness and Meditation"
        ]
      },
      applications: {
        title: "Practical Applications",
        description: "Applying Buddhist teachings in daily life",
        practices: [
          "Meditation Techniques",
          "Ethical Living",
          "Mindful Actions",
          "Compassionate Service",
          "Personal Development"
        ]
      },
      scriptures: {
        title: "Buddhist Scriptures",
        description: "Sacred texts and their interpretations",
        texts: [
          "The Tripitaka",
          "The Dhammapada",
          "Mahayana Sutras",
          "Zen Koans",
          "Tibetan Texts"
        ]
      },
      modern: {
        title: "Modern Buddhism",
        description: "Contemporary interpretations and applications",
        interpretations: [
          "Secular Buddhism",
          "Engaged Buddhism",
          "Scientific Perspectives",
          "Interfaith Dialogue",
          "Global Buddhism"
        ]
      }
    }
  },
  zh: {
    dharma: {
      title: "佛法研究",
      description: "探索佛教的核心教义和哲学概念",
      coreTeachings: {
        title: "核心教义",
        description: "理解佛教哲学的基本原理",
        fourNobleTruths: {
          title: "四圣谛",
          description: "佛教教义的基础",
          truths: {
            first: "苦谛",
            second: "集谛",
            third: "灭谛",
            fourth: "道谛"
          }
        }
      },
      keyPrinciples: {
        title: "关键原则",
        description: "佛教中的基本概念和修行",
        principles: [
          "八正道",
          "中道",
          "业力与轮回",
          "无执着",
          "正念与禅修"
        ]
      },
      applications: {
        title: "实际应用",
        description: "在日常生活中运用佛法",
        practices: [
          "禅修技巧",
          "道德生活",
          "正念行为",
          "慈悲服务",
          "个人发展"
        ]
      },
      scriptures: {
        title: "佛教经典",
        description: "圣典及其诠释",
        texts: [
          "三藏",
          "法句经",
          "大乘经典",
          "禅宗公案",
          "藏传佛教典籍"
        ]
      },
      modern: {
        title: "现代佛教",
        description: "当代诠释与应用",
        interpretations: [
          "世俗佛教",
          "人间佛教",
          "科学视角",
          "宗教对话",
          "全球佛教"
        ]
      }
    }
  },
  hi: {
    dharma: {
      title: "बौद्ध धर्म अध्ययन",
      description: "बौद्ध धर्म की मूल शिक्षाओं और दार्शनिक अवधारणाओं का अन्वेषण",
      coreTeachings: {
        title: "मूल शिक्षाएं",
        description: "बौद्ध दर्शन के मौलिक सिद्धांतों को समझना",
        fourNobleTruths: {
          title: "चार आर्य सत्य",
          description: "बौद्ध शिक्षाओं का आधार",
          truths: {
            first: "दुःख सत्य",
            second: "समुदय सत्य",
            third: "निरोध सत्य",
            fourth: "मार्ग सत्य"
          }
        }
      },
      keyPrinciples: {
        title: "प्रमुख सिद्धांत",
        description: "बौद्ध धर्म में आवश्यक अवधारणाएं और अभ्यास",
        principles: [
          "अष्टांगिक मार्ग",
          "मध्यम मार्ग",
          "कर्म और पुनर्जन्म",
          "अनासक्ति",
          "सतर्कता और ध्यान"
        ]
      },
      applications: {
        title: "व्यावहारिक अनुप्रयोग",
        description: "दैनिक जीवन में बौद्ध शिक्षाओं का प्रयोग",
        practices: [
          "ध्यान तकनीकें",
          "नैतिक जीवन",
          "सचेत कर्म",
          "करुणामय सेवा",
          "व्यक्तिगत विकास"
        ]
      },
      scriptures: {
        title: "बौद्ध धर्मग्रंथ",
        description: "पवित्र ग्रंथ और उनकी व्याख्याएं",
        texts: [
          "त्रिपिटक",
          "धम्मपद",
          "महायान सूत्र",
          "ज़ेन कोआन",
          "तिब्बती ग्रंथ"
        ]
      },
      modern: {
        title: "आधुनिक बौद्ध धर्म",
        description: "समकालीन व्याख्याएं और अनुप्रयोग",
        interpretations: [
          "धर्मनिरपेक्ष बौद्ध धर्म",
          "सामाजिक बौद्ध धर्म",
          "वैज्ञानिक दृष्टिकोण",
          "अंतर-धार्मिक संवाद",
          "वैश्विक बौद्ध धर्म"
        ]
      }
    }
  },
  pt: {
    dharma: {
      title: "Estudos do Dharma Budista",
      description: "Explore os ensinamentos centrais e conceitos filosóficos do Budismo",
      coreTeachings: {
        title: "Ensinamentos Fundamentais",
        description: "Compreendendo os princípios fundamentais da filosofia budista",
        fourNobleTruths: {
          title: "As Quatro Nobres Verdades",
          description: "A base dos ensinamentos budistas",
          truths: {
            first: "A Verdade do Sofrimento (Dukkha)",
            second: "A Verdade da Origem do Sofrimento (Samudaya)",
            third: "A Verdade da Cessação do Sofrimento (Nirodha)",
            fourth: "A Verdade do Caminho para a Cessação do Sofrimento (Magga)"
          }
        }
      },
      keyPrinciples: {
        title: "Princípios Fundamentais",
        description: "Conceitos e práticas essenciais no Budismo",
        principles: [
          "O Nobre Caminho Óctuplo",
          "O Caminho do Meio",
          "Karma e Renascimento",
          "Não-apego",
          "Atenção Plena e Meditação"
        ]
      },
      applications: {
        title: "Aplicações Práticas",
        description: "Aplicando os ensinamentos budistas na vida diária",
        practices: [
          "Técnicas de Meditação",
          "Vida Ética",
          "Ações Conscientes",
          "Serviço Compassivo",
          "Desenvolvimento Pessoal"
        ]
      },
      scriptures: {
        title: "Escrituras Budistas",
        description: "Textos sagrados e suas interpretações",
        texts: [
          "O Tripitaka",
          "O Dhammapada",
          "Sutras Mahayana",
          "Koans Zen",
          "Textos Tibetanos"
        ]
      },
      modern: {
        title: "Budismo Moderno",
        description: "Interpretações e aplicações contemporâneas",
        interpretations: [
          "Budismo Secular",
          "Budismo Engajado",
          "Perspectivas Científicas",
          "Diálogo Inter-religioso",
          "Budismo Global"
        ]
      }
    }
  },
  ru: {
    dharma: {
      title: "Изучение Буддийской Дхармы",
      description: "Исследуйте основные учения и философские концепции буддизма",
      coreTeachings: {
        title: "Основные Учения",
        description: "Понимание фундаментальных принципов буддийской философии",
        fourNobleTruths: {
          title: "Четыре Благородные Истины",
          description: "Основа буддийских учений",
          truths: {
            first: "Истина о Страдании (Дуккха)",
            second: "Истина о Причине Страдания (Самудая)",
            third: "Истина о Прекращении Страдания (Ниродха)",
            fourth: "Истина о Пути к Прекращению Страдания (Магга)"
          }
        }
      },
      keyPrinciples: {
        title: "Ключевые Принципы",
        description: "Основные концепции и практики в буддизме",
        principles: [
          "Благородный Восьмеричный Путь",
          "Срединный Путь",
          "Карма и Перерождение",
          "Непривязанность",
          "Осознанность и Медитация"
        ]
      },
      applications: {
        title: "Практическое Применение",
        description: "Применение буддийских учений в повседневной жизни",
        practices: [
          "Техники Медитации",
          "Этическая Жизнь",
          "Осознанные Действия",
          "Сострадательное Служение",
          "Личностное Развитие"
        ]
      },
      scriptures: {
        title: "Буддийские Писания",
        description: "Священные тексты и их интерпретации",
        texts: [
          "Трипитака",
          "Дхаммапада",
          "Сутры Махаяны",
          "Дзенские Коаны",
          "Тибетские Тексты"
        ]
      },
      modern: {
        title: "Современный Буддизм",
        description: "Современные интерпретации и применения",
        interpretations: [
          "Секулярный Буддизм",
          "Социально Вовлеченный Буддизм",
          "Научные Перспективы",
          "Межрелигиозный Диалог",
          "Глобальный Буддизм"
        ]
      }
    }
  },
  ja: {
    dharma: {
      title: "仏教の法の研究",
      description: "仏教の核心的な教えと哲学的概念を探求する",
      coreTeachings: {
        title: "核心的な教え",
        description: "仏教哲学の基本原理の理解",
        fourNobleTruths: {
          title: "四聖諦",
          description: "仏教の教えの基礎",
          truths: {
            first: "苦諦",
            second: "集諦",
            third: "滅諦",
            fourth: "道諦"
          }
        }
      },
      keyPrinciples: {
        title: "主要な原理",
        description: "仏教における重要な概念と実践",
        principles: [
          "八正道",
          "中道",
          "業と輪廻",
          "無執着",
          "マインドフルネスと瞑想"
        ]
      },
      applications: {
        title: "実践的応用",
        description: "日常生活における仏教の教えの適用",
        practices: [
          "瞑想技法",
          "倫理的生活",
          "意識的な行動",
          "慈悲の実践",
          "個人の成長"
        ]
      },
      scriptures: {
        title: "仏教経典",
        description: "聖典とその解釈",
        texts: [
          "三蔵",
          "法句経",
          "大乗経典",
          "禅問答",
          "チベット仏教典籍"
        ]
      },
      modern: {
        title: "現代仏教",
        description: "現代的な解釈と応用",
        interpretations: [
          "世俗的仏教",
          "社会参加仏教",
          "科学的視点",
          "宗教間対話",
          "グローバル仏教"
        ]
      }
    }
  },
  ur: {
    dharma: {
      title: "بدھ دھرم کا مطالعہ",
      description: "بدھ مت کی بنیادی تعلیمات اور فلسفیانہ تصورات کی تحقیق",
      coreTeachings: {
        title: "بنیادی تعلیمات",
        description: "بدھ فلسفہ کے بنیادی اصولوں کی تفہیم",
        fourNobleTruths: {
          title: "چار شریف حقائق",
          description: "بدھ تعلیمات کی بنیاد",
          truths: {
            first: "دکھ کا حقیقت",
            second: "دکھ کی وجہ کا حقیقت",
            third: "دکھ کے خاتمے کا حقیقت",
            fourth: "دکھ کے خاتمے کے راستے کا حقیقت"
          }
        }
      },
      keyPrinciples: {
        title: "اہم اصول",
        description: "بدھ مت میں ضروری تصورات اور عمل",
        principles: [
          "آٹھ درست راستے",
          "درمیانی راستہ",
          "کرما اور دوبارہ پیدائش",
          "عدم لگاؤ",
          "ذہنی آگاہی اور مراقبہ"
        ]
      },
      applications: {
        title: "عملی استعمال",
        description: "روزمرہ زندگی میں بدھ تعلیمات کا استعمال",
        practices: [
          "مراقبہ کی تکنیکیں",
          "اخلاقی زندگی",
          "باشعور اعمال",
          "ہمدردانہ خدمت",
          "ذاتی ترقی"
        ]
      },
      scriptures: {
        title: "بدھ مت کی مقدس کتابیں",
        description: "مقدس متون اور ان کی تشریحات",
        texts: [
          "تریپیٹکا",
          "دھمپد",
          "مہایان سوتر",
          "ذن کوان",
          "تبتی متون"
        ]
      },
      modern: {
        title: "جدید بدھ مت",
        description: "معاصر تشریحات اور استعمال",
        interpretations: [
          "سیکولر بدھ مت",
          "مصروف بدھ مت",
          "سائنسی نظریات",
          "بین المذاہب مکالمہ",
          "عالمی بدھ مت"
        ]
      }
    }
  }
} 