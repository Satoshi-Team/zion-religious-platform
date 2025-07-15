import { previewService } from '@/services/preview-service'
import { NextResponse } from 'next/server'
import { previewConfig } from '@/config/preview.config'

export async function GET() {
  try {
    if (!previewConfig.isPreview) {
      return NextResponse.json({ status: 'not-preview' })
    }

    const { isValid, errors } = await previewService.verifyPreviewDeployment()

    if (!isValid) {
      return NextResponse.json(
        { 
          error: 'Preview environment verification failed',
          details: errors
        },
        { status: 400 }
      )
    }

    return NextResponse.json({ 
      status: 'verified',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Preview verification error:', error)
    return NextResponse.json(
      { 
        error: 'Internal verification error',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 