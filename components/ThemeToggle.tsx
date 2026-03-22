'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

function applyTheme(theme: Theme) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const isDark = theme === 'dark' || (theme === 'system' && prefersDark)
  document.documentElement.classList.toggle('dark', isDark)
  if (theme === 'system') {
    localStorage.removeItem('theme')
  } else {
    localStorage.setItem('theme', theme)
  }
}

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="2.5" fill="currentColor" />
      <line x1="7" y1="0.5" x2="7" y2="2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="7" y1="11.5" x2="7" y2="13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="0.5" y1="7" x2="2.5" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="11.5" y1="7" x2="13.5" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2.4" y1="2.4" x2="3.8" y2="3.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10.2" y1="10.2" x2="11.6" y2="11.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="11.6" y1="2.4" x2="10.2" y2="3.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="3.8" y1="10.2" x2="2.4" y2="11.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M11.5 8.5A5 5 0 0 1 5.5 2.5a5.002 5.002 0 1 0 6 6z"
        fill="currentColor"
      />
    </svg>
  )
}

function SystemIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1" y="1.5" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <line x1="4.5" y1="12.5" x2="9.5" y2="12.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="7" y1="9.5" x2="7" y2="12.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function ThemeToggle({ className = '' }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>('system')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored)
    } else {
      setTheme('system')
    }
  }, [])

  // Listen for OS preference changes when in system mode
  useEffect(() => {
    if (!mounted || theme !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      document.documentElement.classList.toggle('dark', e.matches)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [theme, mounted])

  function select(next: Theme) {
    setTheme(next)
    applyTheme(next)
  }

  if (!mounted) return <div className="w-[92px] h-8" aria-hidden="true" />

  const options: { value: Theme; label: string; icon: React.ReactNode }[] = [
    { value: 'light',  label: 'Light mode',  icon: <SunIcon /> },
    { value: 'dark',   label: 'Dark mode',   icon: <MoonIcon /> },
    { value: 'system', label: 'System mode', icon: <SystemIcon /> },
  ]

  return (
    <div
      role="group"
      aria-label="Colour scheme"
      className={`inline-flex items-center bg-page-alt border border-page rounded-full p-0.5 gap-0.5 flex-shrink-0 ${className}`}
    >
      {options.map(({ value, label, icon }) => (
        <button
          key={value}
          onClick={() => select(value)}
          aria-label={label}
          aria-pressed={theme === value}
          title={label}
          className={[
            'relative flex items-center justify-center w-7 h-7 rounded-full',
            'transition-all duration-200 focus-visible:outline-none',
            'focus-visible:ring-2 focus-visible:ring-[#2a9d8f] focus-visible:ring-offset-1',
            theme === value
              ? 'bg-[#2a9d8f] text-white shadow-sm'
              : 'text-page-muted hover:text-page hover:bg-card opacity-70 hover:opacity-100',
          ].join(' ')}
        >
          {icon}
          <span className="sr-only">{label}</span>
        </button>
      ))}
    </div>
  )
}
