import Link from 'next/link'
import Image from 'next/image'

interface PartnerCardProps {
  name: string
  category: string
  blurb: string
  href: string
  /** If provided, renders a logo image in the card header. */
  logo?: string
  logoAlt?: string
  /** If provided (and no logo), renders a text tile in the card header. */
  headerText?: string
}

export function PartnerCard({ name, category, blurb, href, logo, logoAlt, headerText }: PartnerCardProps) {
  return (
    <Link
      href={href}
      className="group card-lift rounded-[20px] overflow-hidden flex flex-col bg-card shadow-sm border-2 border-[#1a3d3a] no-underline"
    >
      <div style={{ height: '4px', background: '#2ab4b8', width: '100%' }} />
      {logo ? (
        <div className="relative w-full aspect-[16/10] bg-page-sage flex items-center justify-center p-6 overflow-hidden">
          <Image
            src={logo}
            alt={logoAlt ?? ''}
            width={280}
            height={140}
            className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      ) : (
        <div className="relative w-full aspect-[16/10] flex items-center justify-center p-6 overflow-hidden bg-[#0f4a2e]">
          <span className="text-white text-center font-black tracking-tight leading-tight text-xl sm:text-2xl group-hover:scale-105 transition-transform duration-700">
            {headerText}
          </span>
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-[#2ab4b8] text-xs font-bold uppercase tracking-widest mb-2">
          {category}
        </span>
        <h3 className="font-black text-page text-lg leading-tight tracking-tight mb-2 group-hover:text-[#2ab4b8] transition-colors">
          {name}
        </h3>
        <p className="text-page-muted text-sm leading-relaxed flex-1 mb-4">{blurb}</p>
        <span className="text-page text-xs font-black uppercase tracking-wide inline-flex items-center gap-2">
          Read the story <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  )
}
