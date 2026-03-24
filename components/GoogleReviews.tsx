'use client'

import { useEffect, useState, useRef } from 'react'

interface Review {
  author_name: string
  rating: number
  text: string
  relative_time_description: string
}

function initials(name: string) {
  const parts = name.trim().split(' ')
  return parts.length === 1
    ? parts[0][0].toUpperCase()
    : (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl p-6 bg-white border border-[#1a3d3a]/10 shadow-sm text-left h-full">
      <div className="flex items-center gap-3 flex-shrink-0">
        <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0" style={{ backgroundColor: '#1a3d3a', color: '#fff' }}>
          {initials(review.author_name)}
        </div>
        <div>
          <p className="font-bold text-[#1a2330] text-sm">{review.author_name}</p>
          <p className="text-[#1a3d3a]/60 text-xs font-semibold">{review.relative_time_description}</p>
        </div>
      </div>
      <div className="flex gap-0.5 flex-shrink-0">
        {[1,2,3,4,5].map((i) => (
          <svg key={i} viewBox="0 0 24 24" fill="#fbbc04" className="w-4 h-4">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      <div 
        className="overflow-y-auto flex-1 pr-2 pb-1 custom-scrollbar" 
        onMouseDown={(e) => e.stopPropagation()} // Prevent horizontal drag when clicking scrollbar
      >
        <p className="text-[#1a2330]/90 text-sm leading-relaxed font-medium whitespace-pre-wrap">{review.text}</p>
      </div>
    </div>
  )
}

const PLACE_URL = "https://maps.app.goo.gl/ahN3tJdZyPXk2KaP9"

export function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [rating, setRating] = useState<number | null>(null)
  
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    setIsDown(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleMouseLeave = () => setIsDown(false)
  const handleMouseUp = () => setIsDown(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return
    e.preventDefault() // prevent text selection while dragging
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 1.5 // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  useEffect(() => {
    fetch('/api/reviews')
      .then((r) => r.json())
      .then((d) => {
        setReviews(d.reviews ?? [])
        setRating(d.rating ?? null)
      })
      .catch(() => {})
  }, [])

  return (
    <section className="section" style={{ backgroundColor: '#F2EDE4' }} aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

        <h2 id="reviews-heading" className="text-2xl sm:text-3xl lg:text-5xl font-black text-[#1a2330] tracking-tight uppercase leading-none mb-8">
          Our customers rate us
        </h2>

        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8">
          {[1,2,3,4,5].map((i) => (
            <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 sm:w-[5.5rem] sm:h-[5.5rem] text-[#fbbc04]">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 sm:gap-5 mb-10 text-[#1a2330]">
          <div className="flex items-center gap-2">
            <svg width="34" height="34" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="font-bold text-3xl tracking-tight">Google</span>
          </div>
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {rating ? `${rating} out of 5` : '5.0 out of 5'}
          </span>
        </div>

        <p className="text-[#1a3d3a]/90 text-sm sm:text-base font-bold mb-10">
          Based on verified reviews on{' '}
          <a href={PLACE_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 font-black hover:text-[#2ab4b8] transition-colors">
            Google
          </a>.
        </p>

        {reviews.length > 0 && (
          <div 
            ref={scrollRef}
            className={`w-full swipe-row py-2 ${isDown ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {reviews.map((review, i) => (
              <div key={i} className="w-[85vw] sm:w-[320px] lg:w-[350px] h-[240px] flex-shrink-0">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
