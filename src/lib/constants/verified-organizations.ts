export interface VerifiedOrganization {
  id: string
  name: string
  type: 'Academic' | 'Religious' | 'Research' | 'Cultural'
  url: string
  description: string
  verificationLevel: 'Gold' | 'Silver' | 'Bronze'
  verifiedBy: string
  resources: {
    type: string
    url: string
    description: string
  }[]
  languages: string[]
  contact: {
    email?: string
    phone?: string
    social?: {
      facebook?: string
      twitter?: string
      youtube?: string
    }
  }
}

export const VERIFIED_ORGANIZATIONS: VerifiedOrganization[] = [
  {
    id: "org1",
    name: "Christian Research Institute",
    description: "Leading organization in Christian apologetics and research",
    type: "Research",
    verificationLevel: "Gold",
    url: "https://example.com/cri",
    verifiedBy: "Religious Studies Association",
    languages: ["en", "es", "fr"],
    contact: {
      email: "contact@cri.org",
      phone: "+1-555-0123"
    },
    resources: [
      {
        type: "Publications",
        url: "https://example.com/cri/publications",
        description: "Academic publications and research papers"
      }
    ]
  },

  {
    id: "harvard-divinity",
    name: "Harvard Divinity School",
    type: "Academic",
    url: "https://hds.harvard.edu",
    description: "Leading institution for religious and theological studies",
    verificationLevel: "Gold",
    verifiedBy: "Academic Accreditation Board",
    resources: [
      {
        type: "courses",
        url: "https://hds.harvard.edu/academics/courses",
        description: "Academic courses in religious studies"
      },
      {
        type: "research",
        url: "https://hds.harvard.edu/research",
        description: "Religious research publications"
      }
    ],
    languages: ["English"],
    contact: {
      email: "info@hds.harvard.edu",
      social: {
        facebook: "https://www.facebook.com/HarvardDivinity",
        twitter: "https://twitter.com/HarvardDivinity"
      }
    }
  },

  {
    id: "al-azhar",
    name: "Al-Azhar University",
    type: "Academic",
    url: "http://www.azhar.edu.eg/",
    description: "World's oldest Islamic institution of higher learning",
    verificationLevel: "Gold",
    verifiedBy: "Egyptian Supreme Council of Universities",
    resources: [
      {
        type: "islamic-studies",
        url: "http://www.azhar.edu.eg/en/islamic-studies",
        description: "Comprehensive Islamic studies programs"
      },
      {
        type: "research",
        url: "http://www.azhar.edu.eg/en/research",
        description: "Islamic research and publications"
      }
    ],
    languages: ["Arabic", "English"],
    contact: {
      email: "info@azhar.edu.eg",
      social: {
        facebook: "https://www.facebook.com/AlAzharUniversity",
        twitter: "https://twitter.com/AlAzharUniv"
      }
    }
  },

  {
    id: "hebrew-university",
    name: "Hebrew University of Jerusalem",
    type: "Academic",
    url: "https://en.huji.ac.il",
    description: "Leading institution for Jewish studies and research",
    verificationLevel: "Gold",
    verifiedBy: "Israel Council for Higher Education",
    resources: [
      {
        type: "jewish-studies",
        url: "https://en.jewish.huji.ac.il",
        description: "Jewish studies programs and research"
      },
      {
        type: "manuscripts",
        url: "https://web.nli.org.il/sites/NLI/English/collections/manuscripts",
        description: "Digital manuscript collection"
      }
    ],
    languages: ["Hebrew", "English"],
    contact: {
      email: "info@huji.ac.il",
      social: {
        facebook: "https://www.facebook.com/HebrewU",
        twitter: "https://twitter.com/HebrewU"
      }
    }
  },

  {
    id: "nalanda",
    name: "Nalanda University",
    type: "Academic",
    url: "https://nalandauniv.edu.in",
    description: "Modern revival of ancient Buddhist seat of learning",
    verificationLevel: "Gold",
    verifiedBy: "Ministry of External Affairs, India",
    resources: [
      {
        type: "buddhist-studies",
        url: "https://nalandauniv.edu.in/schools/buddhist-studies",
        description: "Buddhist studies and research programs"
      },
      {
        type: "historical",
        url: "https://nalandauniv.edu.in/about/history",
        description: "Historical documentation and archives"
      }
    ],
    languages: ["English", "Hindi", "Sanskrit"],
    contact: {
      email: "info@nalandauniv.edu.in",
      social: {
        facebook: "https://www.facebook.com/nalandauniv",
        twitter: "https://twitter.com/nalandauniv"
      }
    }
  },

  {
    id: "vatican-library",
    name: "Vatican Apostolic Library",
    type: "Research",
    url: "https://www.vaticanlibrary.va",
    description: "Official library of the Holy See",
    verificationLevel: "Gold",
    verifiedBy: "The Holy See",
    resources: [
      {
        type: "manuscripts",
        url: "https://digi.vatlib.it",
        description: "Digital manuscript collection"
      },
      {
        type: "archives",
        url: "https://www.archivioapostolicovaticano.va",
        description: "Vatican historical archives"
      }
    ],
    languages: ["Latin", "Italian", "English"],
    contact: {
      email: "info@vatlib.it",
      social: {
        twitter: "https://twitter.com/vaticanlibrary"
      }
    }
  }
] 