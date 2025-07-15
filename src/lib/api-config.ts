export const API_CONFIG = {
  radioBrowserUrl: process.env.NEXT_PUBLIC_RADIO_BROWSER_API_URL || 'https://de1.api.radio-browser.info',
  corsProxy: process.env.NEXT_PUBLIC_CORS_PROXY_URL || 'https://cors-anywhere.herokuapp.com/',
  fallbackProxies: [
    process.env.NEXT_PUBLIC_FALLBACK_PROXY_1,
    process.env.NEXT_PUBLIC_FALLBACK_PROXY_2
  ].filter(Boolean)
}

export function getProxiedUrl(url: string): string {
  // Try without proxy first for URLs that support CORS
  if (url.startsWith('https://')) return url

  return `${API_CONFIG.corsProxy}${url}`
} 