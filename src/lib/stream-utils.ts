export async function validateStream(url: string): Promise<boolean> {
  try {
    const audio = new Audio()
    audio.crossOrigin = 'anonymous'
    
    // Add proper event listeners for debugging
    audio.onloadstart = () => console.log('Stream load started:', url)
    audio.oncanplay = () => console.log('Stream can play:', url)
    audio.onerror = (e) => console.error('Stream error:', e)

    return new Promise((resolve) => {
      const timeoutId = setTimeout(() => {
        console.log('Stream validation timeout:', url)
        audio.remove()
        resolve(false)
      }, 8000)

      audio.oncanplay = () => {
        console.log('Stream validated successfully:', url)
        clearTimeout(timeoutId)
        audio.remove()
        resolve(true)
      }

      audio.onerror = () => {
        console.error('Stream validation failed:', url)
        clearTimeout(timeoutId)
        audio.remove()
        resolve(false)
      }

      // Try with CORS proxy if needed
      const proxyUrl = !url.startsWith('https://') ? 
        `${process.env.NEXT_PUBLIC_CORS_PROXY_URL}${url}` : url
      
      audio.src = proxyUrl
      audio.load()
    })
  } catch (error) {
    console.error('Stream validation error:', error)
    return false
  }
} 