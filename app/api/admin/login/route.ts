import { NextRequest, NextResponse } from 'next/server'

const COOKIE_NAME = 'admin_session'

async function computeToken(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode('eliterent-admin:' + password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { password } = body

  const adminPassword = process.env.ADMIN_PASSWORD

  if (!adminPassword) {
    return NextResponse.json(
      { error: 'ADMIN_PASSWORD nao configurada no servidor' },
      { status: 500 }
    )
  }

  if (!password || password !== adminPassword) {
    return NextResponse.json({ error: 'Password incorreta' }, { status: 401 })
  }

  const token = await computeToken(adminPassword)

  const response = NextResponse.json({ success: true })
  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })

  return response
}
