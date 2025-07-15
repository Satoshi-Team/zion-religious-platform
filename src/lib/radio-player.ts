import { RadioStation } from '@/types/radio'
import { getProxiedUrl } from './api-config'

export class RadioPlayer {
  private audio: HTMLAudioElement | null = null
  private audioContext: AudioContext | null = null
  private sourceNode: MediaElementAudioSourceNode | null = null
  private analyserNode: AnalyserNode | null = null
  private currentStation: RadioStation | null = null
  private readonly TIMEOUT_MS = 15000
  private retryCount = 0
  private readonly MAX_RETRIES = 3

  constructor() {
    if (typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext
      this.audioContext = new AudioContext()
    }
  }

  async play(station: RadioStation): Promise<boolean> {
    try {
      console.log('Starting playback for station:', station.name)
      this.stop()

      // Create new audio element with error handling
      this.audio = new Audio()
      this.audio.crossOrigin = 'anonymous'
      this.audio.preload = 'auto'

      // Add error logging
      this.audio.onerror = (e) => {
        console.error('Audio element error:', e)
      }

      // Try each stream URL until one works
      const streamUrls = [
        station.url,
        station.url_resolved,
        ...(station.alternateStreams || [])
      ].filter(Boolean).filter((url, index, self) => self.indexOf(url) === index) // Remove duplicates

      console.log('Attempting streams:', streamUrls)

      for (const url of streamUrls) {
        try {
          // Resume AudioContext if suspended
          if (this.audioContext?.state === 'suspended') {
            await this.audioContext.resume()
          }

          // Set up audio element
          const proxyUrl = this.getProxiedStreamUrl(url)
          console.log('Trying proxied URL:', proxyUrl)
          
          this.audio.src = proxyUrl
          this.audio.load()

          // Wait for canplay event before attempting playback
          await new Promise((resolve, reject) => {
            if (!this.audio) return reject('No audio element')

            const timeoutId = setTimeout(() => {
              reject(new Error('Loading timeout'))
            }, this.TIMEOUT_MS)

            this.audio.oncanplay = () => {
              clearTimeout(timeoutId)
              resolve(true)
            }

            this.audio.onerror = (e) => {
              clearTimeout(timeoutId)
              console.error('Audio loading error:', e)
              reject(new Error('Loading failed'))
            }
          })

          // Critical: Actually attempt to play the audio
          console.log('Attempting playback...')
          await this.audio.play()

          // If we get here, playback started successfully
          console.log('Playback started successfully for:', proxyUrl)
          this.currentStation = station
          this.setupAudioAnalyser()
          return true

        } catch (error) {
          console.warn(`Failed to play stream ${url}:`, error)
          continue // Try next URL
        }
      }

      throw new Error('All stream URLs failed')
    } catch (error) {
      console.error('Playback failed:', error)
      this.stop()
      return false
    }
  }

  private getProxiedStreamUrl(url: string): string {
    if (!url) return ''
    
    // Handle HTTPS URLs directly if they're from known good sources
    const trustedDomains = [
      'streamguys1.com',
      'streammyflr.org',
      'sharp-stream.com',
      'life-fm.com',
      'emfcdn.com'
    ]
    
    if (url.startsWith('https://') && trustedDomains.some(domain => url.includes(domain))) {
      return url
    }
    
    // Use CORS proxy for other URLs
    const corsProxy = process.env.NEXT_PUBLIC_CORS_PROXY_URL || 'https://cors-anywhere.herokuapp.com/'
    return `${corsProxy}${url}`
  }

  private setupAudioAnalyser() {
    if (!this.audio || !this.audioContext) return

    try {
      // Create new analyser node
      this.analyserNode = this.audioContext.createAnalyser()
      this.analyserNode.fftSize = 256

      // Connect audio to analyser
      this.sourceNode?.disconnect()
      this.sourceNode = this.audioContext.createMediaElementSource(this.audio)
      this.sourceNode.connect(this.analyserNode)
      this.analyserNode.connect(this.audioContext.destination)
    } catch (error) {
      console.error('Failed to setup audio analyser:', error)
    }
  }

  stop() {
    if (this.audio) {
      this.audio.pause()
      this.audio.removeAttribute('src')
      this.audio.load()
      this.audio = null
    }
    this.sourceNode?.disconnect()
    this.currentStation = null
  }

  getCurrentStation(): RadioStation | null {
    return this.currentStation
  }

  isPlaying(): boolean {
    return !!(this.audio && !this.audio.paused)
  }

  getAnalyserNode(): AnalyserNode | null {
    return this.analyserNode
  }

  setVolume(volume: number) {
    if (this.audio) this.audio.volume = Math.max(0, Math.min(1, volume))
  }

  getVolume(): number {
    return this.audio?.volume ?? 1
  }

  toggleMute(muted: boolean) {
    if (this.audio) this.audio.muted = muted
  }
} 