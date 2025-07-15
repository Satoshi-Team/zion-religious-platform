export interface RadioBrowserRequest {
  endpoint: string
  params: Record<string, string>
}

export const RADIO_BROWSER_ENDPOINTS = [
  'de1.api.radio-browser.info',
  'de2.api.radio-browser.info',
  'nl1.api.radio-browser.info',
] as const

export function getRandomBaseUrl(): string {
  const randomIndex = Math.floor(Math.random() * RADIO_BROWSER_ENDPOINTS.length)
  return `https://${RADIO_BROWSER_ENDPOINTS[randomIndex]}`
}