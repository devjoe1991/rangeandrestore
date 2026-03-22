'use client'

import { useState } from 'react'

const TREATMENTS = [
  'Sports & Deep Tissue Massage',
  'Advanced Clinical Massage',
  'Back & Neck Pain MOT',
  'Relaxation Restorative Massage',
  'Manual Lymphatic Drainage (MLD)',
  '2-Hour Pain Relief Massage',
  'Massage Bundle',
  'Gift Card',
  'General Enquiry',
]

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')
    setErrorMessage('')

    const form = e.currentTarget
    const data = {
      firstName: (form.elements.namedItem('firstName') as HTMLInputElement).value,
      lastName: (form.elements.namedItem('lastName') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      treatment: (form.elements.namedItem('treatment') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      // Send to API route which handles both Google Sheets and email
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Submission failed')
      }

      setState('success')
      form.reset()
    } catch (err) {
      setState('error')
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again or call us directly.')
    }
  }

  if (state === 'success') {
    return (
      <div className="bg-page-sage rounded-xl p-8 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#4a7a28] mx-auto mb-4" aria-hidden="true">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
        <h3 className="text-xl font-bold text-page mb-2">Message Sent!</h3>
        <p className="text-page-muted">Thank you for getting in touch. Carlos will respond as soon as possible.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-page mb-1">
            First Name <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            autoComplete="given-name"
            className="w-full input-surface border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4a7a28] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold text-page mb-1">
            Last Name <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            autoComplete="family-name"
            className="w-full input-surface border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4a7a28] focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-page mb-1">
          Email Address <span aria-hidden="true">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          className="w-full input-surface border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4a7a28] focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-page mb-1">
          Phone Number <span className="text-page-muted font-normal opacity-80">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          className="w-full input-surface border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4a7a28] focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="treatment" className="block text-sm font-semibold text-page mb-1">
          Treatment of Interest <span aria-hidden="true">*</span>
        </label>
        <select
          id="treatment"
          name="treatment"
          required
          className="w-full input-surface border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4a7a28] focus:border-transparent"
        >
          <option value="">Select a treatment...</option>
          {TREATMENTS.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-page mb-1">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us a bit about what you're looking for, any injuries or conditions, and any questions you have..."
          className="w-full input-surface border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4a7a28] focus:border-transparent resize-y"
        />
      </div>

      {state === 'error' && (
        <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 rounded-md p-4 text-red-800 dark:text-red-300 text-sm" role="alert">
          {errorMessage || 'Something went wrong. Please try again or call us directly.'}
        </div>
      )}

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="w-full inline-flex items-center justify-center rounded-md bg-[#4a7a28] text-white font-semibold px-6 py-4 text-lg hover:bg-[#2c3d1f] transition-colors min-h-[44px] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === 'submitting' ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>

      <p className="text-xs text-page-muted opacity-80">
        By submitting this form, you agree to our{' '}
        <a href="/privacy-policy" className="text-[#4a7a28] hover:underline">Privacy Policy</a>.
        Your information will only be used to respond to your enquiry.
      </p>
    </form>
  )
}
