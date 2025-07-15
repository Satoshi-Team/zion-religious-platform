"use client"

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Language } from '@/lib/constants/languages'
import { VERIFIED_STATIONS } from '@/lib/constants/stations'
import { Station } from '@/types/station'

interface FilterState {
  expandedGenre: string | null
  selectedGenre: string | null
  selectedLanguage: Language
  searchQuery: string
  selectedCountry: string
  setExpandedGenre: (genre: string | null) => void
  setGenre: (genre: string | null) => void
  setLanguage: (language: Language) => void
  setSearchQuery: (query: string) => void
  setCountry: (country: string) => void
  getFilteredStations: () => Station[]
  selectedGenres: string[]
  toggleGenre: (genre: string) => void
  selectedSubgenres: string[]
  toggleSubgenre: (subgenre: string) => void
  selectedSubcategories: string[]
  toggleSubcategory: (subcategory: string) => void
}

export const useFilterStore = create<FilterState>((set, get) => ({
  expandedGenre: null,
  selectedGenre: null,
  selectedLanguage: 'all',
  searchQuery: '',
  selectedCountry: '',
  
  setExpandedGenre: (genre) => set({ expandedGenre: genre }),
  setGenre: (genre) => set({ selectedGenre: genre }),
  setLanguage: (language) => set({ selectedLanguage: language }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setCountry: (country) => set({ selectedCountry: country }),
  
  getFilteredStations: () => {
    const { selectedGenre, selectedLanguage, searchQuery } = get()
    
    let filteredStations = VERIFIED_STATIONS.filter(station => {
      // Language filter
      if (selectedLanguage !== 'all' && station.language !== selectedLanguage)
        return false
        
      // Genre filter
      if (selectedGenre && station.genre !== selectedGenre)
        return false
        
      // Search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        return (
          station.name.toLowerCase().includes(query) ||
          station.genre.toLowerCase().includes(query) ||
          station.country.toLowerCase().includes(query) ||
          station.language.toLowerCase().includes(query)
        )
      }
      
      return true
    })

    if (searchQuery) {
      const searchTerm = searchQuery.toLowerCase()
      filteredStations = filteredStations.filter(station => 
        station.name.toLowerCase().includes(searchTerm) ||
        station.genre.toLowerCase().includes(searchTerm) ||
        station.country.toLowerCase().includes(searchTerm) ||
        station.language.toLowerCase().includes(searchTerm)
      )
    }

    return filteredStations
  },

  selectedGenres: [],
  toggleGenre: (genre) =>
    set((state) => ({
      selectedGenres: state.selectedGenres.includes(genre)
        ? state.selectedGenres.filter((g) => g !== genre)
        : [...state.selectedGenres, genre],
    })),

  selectedSubgenres: [],
  toggleSubgenre: (subgenre) =>
    set((state) => ({
      selectedSubgenres: state.selectedSubgenres.includes(subgenre)
        ? state.selectedSubgenres.filter((g) => g !== subgenre)
        : [...state.selectedSubgenres, subgenre],
    })),

  selectedSubcategories: [],
  toggleSubcategory: (subcategory) =>
    set((state) => ({
      selectedSubcategories: state.selectedSubcategories.includes(subcategory)
        ? state.selectedSubcategories.filter((g) => g !== subcategory)
        : [...state.selectedSubcategories, subcategory],
    })),
})) 