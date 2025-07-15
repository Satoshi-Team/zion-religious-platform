interface ImageConfig {
  width: number
  height: number
  category: string
}

export function getPlaceholderUrl({ width, height }: ImageConfig): string {
  return `https://picsum.photos/${width}/${height}`
}

// Categories for semantic meaning in our code
export const imageCategories = {
  worship: "worship",
  prayer: "prayer",
  community: "community",
  youth: "youth",
  christmas: "christmas",
  sermon: "sermon"
} as const 