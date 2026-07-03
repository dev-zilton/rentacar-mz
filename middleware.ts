import { NextRequest, NextResponse } from 'next/server'

const COOKIE_NAME = 'admin_session'

async function expectedToken(): Promise<string | null> {
  const password = process.env.ADMIN_PASSWORD
  if (!password) return null

  const encoder = new TextEncoder()
  const data = encoder.encode('eliterent-admin:' + password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const isLoginPage = pathname === '/admin/login'
  const isLoginApi = pathname === '/api/admin/login'

  if (isLoginPage || isLoginApi) {
    return NextResponse.next()
  }

  const expected = await expectedToken()
  const cookie = request.cookies.get(COOKIE_NAME)?.value

  if (!expected || !cookie || cookie !== expected) {
    if (pathname.startsWith('/api/')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const loginUrl = new URL('/admin/login', request.url)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
