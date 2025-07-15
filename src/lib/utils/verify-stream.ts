export async function verifyStream(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      headers: {
        'Range': 'bytes=0-0'
      }
    })

    const contentType = response.headers.get('content-type')
    return response.ok && !!(
      contentType?.includes('audio') ||
      contentType?.includes('mpegurl') ||
      contentType?.includes('octet-stream')
    )
  } catch {
    return false
  }
}

export function getProxiedUrl(url: string): string {
  // Only proxy if needed
  if (!url.startsWith('https://')) {
    return `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`
  }
  return url
} 