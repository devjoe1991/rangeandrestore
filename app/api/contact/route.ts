import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

interface ContactPayload {
  firstName: string
  lastName: string
  email: string
  phone?: string
  treatment: string
  message: string
}

// Simple in-memory rate limit: max 3 submissions per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 10 * 60 * 1000 // 10 minutes
  const maxRequests = 3

  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs })
    return true
  }
  if (entry.count >= maxRequests) return false
  entry.count++
  return true
}

export async function POST(request: NextRequest) {
  // Rate limiting
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later or call us directly.' },
      { status: 429 },
    )
  }

  let payload: ContactPayload
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { firstName, lastName, email, treatment, message } = payload

  if (!firstName || !lastName || !email || !treatment || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  const submittedAt = new Date().toISOString()
  const errors: string[] = []

  // 1 ── Google Sheets via Apps Script ───────────────────────────────────────
  const GOOGLE_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL
  if (GOOGLE_SCRIPT_URL) {
    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, submittedAt }),
      })
      if (!res.ok) {
        console.error('Google Sheets error:', res.status, await res.text().catch(() => ''))
        errors.push('sheets')
      }
    } catch (err) {
      console.error('Google Sheets submission failed:', err)
      errors.push('sheets')
    }
  }

  // 2 ── Email notification via Resend SDK ───────────────────────────────────
  const RESEND_API_KEY = process.env.RESEND_API_KEY
  const NOTIFY_EMAIL = process.env.CONTACT_NOTIFY_EMAIL ?? 'carlos@rangeandrestore.co.uk'

  if (RESEND_API_KEY) {
    const resend = new Resend(RESEND_API_KEY)

    const submittedFormatted = new Date(submittedAt).toLocaleString('en-GB', {
      timeZone: 'Europe/London',
      dateStyle: 'full',
      timeStyle: 'short',
    })

    const { error } = await resend.emails.send({
      from: 'Range and Restore Website <noreply@rangeandrestore.co.uk>',
      to: [NOTIFY_EMAIL],
      replyTo: email,
      subject: `New enquiry – ${treatment}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
        <body style="font-family:sans-serif;color:#1a1a1a;background:#f9f9f9;padding:24px;margin:0">
          <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb">
            <div style="background:#618020;padding:20px 24px">
              <h1 style="margin:0;color:#fff;font-size:20px">New Contact Form Submission</h1>
              <p style="margin:4px 0 0;color:#c6e28a;font-size:14px">Range and Restore Sports Massage</p>
            </div>
            <div style="padding:24px">
              <table style="width:100%;border-collapse:collapse;font-size:15px">
                <tr><td style="padding:10px 12px;background:#f3f4f6;font-weight:600;width:120px;border-bottom:1px solid #e5e7eb">Name</td><td style="padding:10px 12px;border-bottom:1px solid #e5e7eb">${firstName} ${lastName}</td></tr>
                <tr><td style="padding:10px 12px;background:#f3f4f6;font-weight:600;border-bottom:1px solid #e5e7eb">Email</td><td style="padding:10px 12px;border-bottom:1px solid #e5e7eb"><a href="mailto:${email}" style="color:#618020">${email}</a></td></tr>
                <tr><td style="padding:10px 12px;background:#f3f4f6;font-weight:600;border-bottom:1px solid #e5e7eb">Phone</td><td style="padding:10px 12px;border-bottom:1px solid #e5e7eb">${payload.phone || '—'}</td></tr>
                <tr><td style="padding:10px 12px;background:#f3f4f6;font-weight:600;border-bottom:1px solid #e5e7eb">Treatment</td><td style="padding:10px 12px;border-bottom:1px solid #e5e7eb">${treatment}</td></tr>
                <tr><td style="padding:10px 12px;background:#f3f4f6;font-weight:600;border-bottom:1px solid #e5e7eb">Message</td><td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;white-space:pre-wrap">${message}</td></tr>
                <tr><td style="padding:10px 12px;background:#f3f4f6;font-weight:600">Submitted</td><td style="padding:10px 12px">${submittedFormatted}</td></tr>
              </table>
              <div style="margin-top:20px;text-align:center">
                <a href="mailto:${email}?subject=Re: Your enquiry about ${encodeURIComponent(treatment)}" style="display:inline-block;background:#618020;color:#fff;text-decoration:none;padding:12px 24px;border-radius:6px;font-weight:600">Reply to ${firstName}</a>
              </div>
            </div>
            <div style="padding:16px 24px;background:#f9fafb;font-size:12px;color:#6b7280;text-align:center;border-top:1px solid #e5e7eb">
              Sent from rangeandrestore.co.uk contact form
            </div>
          </div>
        </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      errors.push('email')
    }
  }

  // Always return success to the user — ancillary failures are logged server-side
  return NextResponse.json({
    success: true,
    ...(errors.length > 0 && { _warnings: errors }),
  })
}
