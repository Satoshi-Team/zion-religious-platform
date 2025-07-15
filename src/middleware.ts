import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { defaultLocale, isValidLocale, locales } from './config/i18n'
import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: locales.map(l => l.code),
  defaultLocale: 'en',
  localePrefix: 'always'
})

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
} 