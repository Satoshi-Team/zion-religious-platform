export async function testStream(url: string): Promise<boolean> {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000)

    const response = await fetch(url, {
      method: 'HEAD',
      signal: controller.signal
    })

    clearTimeout(timeoutId)
    
    if (!response.ok) return false
    
    const contentType = response.headers.get('content-type')
    return Boolean(contentType?.includes('audio') || contentType?.includes('application/octet-stream'))
  } catch {
    return false
  }
}

export function createAudioPlayer(url: string): HTMLAudioElement {
  const audio = new Audio()
  
  // Set necessary attributes for better compatibility
  audio.crossOrigin = 'anonymous'
  audio.preload = 'auto'
  
  // Add error handling
  audio.onerror = (e) => {
    console.error('Audio playback error:', e)
    audio.src = '' // Clear source on error
  }

  // Set source after configuring the audio element
  audio.src = url
  
  return audio
} 