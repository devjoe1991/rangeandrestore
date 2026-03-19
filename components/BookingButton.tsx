import Link from 'next/link'
import { BOOKING_URLS } from '@/lib/constants'

interface BookingButtonProps {
  href?: string
  label?: string
  className?: string
  variant?: 'primary' | 'white' | 'outline-white'
}

export function BookingButton({
  href = BOOKING_URLS.general,
  label = 'Book Your Session',
  className = '',
  variant = 'primary',
}: BookingButtonProps) {
  const variantClass = {
    primary: 'btn-primary',
    white: 'btn-white',
    'outline-white': 'btn-outline-white',
  }[variant]

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${variantClass} ${className}`}
    >
      {label}
    </Link>
  )
}
