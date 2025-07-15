import { type ResourceReference } from "@/lib/types"

export const RESOURCE_REFERENCES: ResourceReference[] = [
  {
    sourceId: "mindfulness-jhana",
    sourceType: "meditation",
    relatedResources: [
      {
        id: "access-to-insight",
        type: "study",
        relationship: "scripture"
      },
      {
        id: "plum-village",
        type: "content",
        relationship: "practice"
      }
    ]
  },
  {
    sourceId: "centering-prayer",
    sourceType: "meditation",
    relatedResources: [
      {
        id: "bible",
        type: "sacred_text",
        relationship: "scripture"
      },
      {
        id: "tim-keller-archive",
        type: "content",
        relationship: "tradition"
      }
    ]
  },
  {
    sourceId: "islamic-muraqaba",
    sourceType: "meditation",
    relatedResources: [
      {
        id: "quran",
        type: "sacred_text",
        relationship: "scripture"
      },
      {
        id: "yaqeen-institute",
        type: "content",
        relationship: "tradition"
      },
      {
        id: "seekersguidance",
        type: "study",
        relationship: "practice"
      }
    ]
  },
  {
    sourceId: "jewish-meditation",
    sourceType: "meditation",
    relatedResources: [
      {
        id: "torah",
        type: "sacred_text",
        relationship: "scripture"
      },
      {
        id: "jewish-theological-seminary",
        type: "content",
        relationship: "commentary"
      },
      {
        id: "my-jewish-learning",
        type: "study",
        relationship: "practice"
      }
    ]
  },
  {
    sourceId: "mindfulness-jhana",
    sourceType: "meditation",
    relatedResources: [
      {
        id: "dharma-org",
        type: "study",
        relationship: "practice"
      },
      {
        id: "plum-village",
        type: "content",
        relationship: "tradition"
      }
    ]
  },
  // Hindu Traditions
  {
    sourceId: "bhagavad-gita",
    sourceType: "sacred_text",
    relatedResources: [
      {
        id: "vedabase",
        type: "study",
        relationship: "commentary"
      },
      {
        id: "hindu-meditation",
        type: "meditation",
        relationship: "practice"
      },
      {
        id: "iskcon-courses",
        type: "content",
        relationship: "tradition"
      }
    ]
  },
  // Buddhist Traditions
  {
    sourceId: "tripitaka",
    sourceType: "sacred_text",
    relatedResources: [
      {
        id: "mindfulness-jhana",
        type: "meditation",
        relationship: "practice"
      },
      {
        id: "dharma-org",
        type: "study",
        relationship: "commentary"
      },
      {
        id: "plum-village",
        type: "content",
        relationship: "tradition"
      }
    ]
  },
  // Taoist Traditions
  {
    sourceId: "tao-te-ching",
    sourceType: "sacred_text",
    relatedResources: [
      {
        id: "taoist-meditation",
        type: "meditation",
        relationship: "practice"
      },
      {
        id: "tao-studies",
        type: "study",
        relationship: "commentary"
      }
    ]
  },
  // Sikh Traditions
  {
    sourceId: "guru-granth-sahib",
    sourceType: "sacred_text",
    relatedResources: [
      {
        id: "sikh-meditation",
        type: "meditation",
        relationship: "practice"
      },
      {
        id: "sikhnet",
        type: "content",
        relationship: "tradition"
      },
      {
        id: "sikh-research-institute",
        type: "study",
        relationship: "commentary"
      }
    ]
  },
  // Zoroastrian Traditions
  {
    sourceId: "avesta",
    sourceType: "sacred_text",
    relatedResources: [
      {
        id: "zoroastrian-meditation",
        type: "meditation",
        relationship: "practice"
      },
      {
        id: "fezana",
        type: "study",
        relationship: "commentary"
      },
      {
        id: "heritage-institute",
        type: "content",
        relationship: "tradition"
      }
    ]
  },
  // Jain Traditions
  {
    sourceId: "agamas",
    sourceType: "sacred_text",
    relatedResources: [
      {
        id: "jain-meditation",
        type: "meditation",
        relationship: "practice"
      },
      {
        id: "jain-studies",
        type: "study",
        relationship: "commentary"
      },
      {
        id: "jaina-academy",
        type: "content",
        relationship: "tradition"
      }
    ]
  },
  // Native American Traditions
  {
    sourceId: "native-wisdom",
    sourceType: "sacred_text",
    relatedResources: [
      {
        id: "indigenous-practices",
        type: "meditation",
        relationship: "practice"
      },
      {
        id: "native-studies",
        type: "study",
        relationship: "tradition"
      }
    ]
  },
  // African Traditional Religions
  {
    sourceId: "yoruba-traditions",
    sourceType: "sacred_text",
    relatedResources: [
      {
        id: "ifa-divination",
        type: "study",
        relationship: "practice"
      },
      {
        id: "orisha-wisdom",
        type: "content",
        relationship: "tradition"
      }
    ]
  },
  // Shinto Traditions
  {
    sourceId: "kojiki",
    sourceType: "sacred_text",
    relatedResources: [
      {
        id: "shinto-meditation",
        type: "meditation",
        relationship: "practice"
      },
      {
        id: "jinja-honcho",
        type: "study",
        relationship: "tradition"
      }
    ]
  },
  // Confucian Traditions
  {
    sourceId: "analects",
    sourceType: "sacred_text",
    relatedResources: [
      {
        id: "confucian-meditation",
        type: "meditation",
        relationship: "practice"
      },
      {
        id: "east-asian-studies",
        type: "study",
        relationship: "commentary"
      }
    ]
  }
  // Add more cross-references...
] 