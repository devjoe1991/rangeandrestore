import Link from 'next/link'
import Image from 'next/image'

interface RecoverySuiteCardProps {
  title: string
  summary: string
  href: string
  image: string
  imageAlt: string
}

export function RecoverySuiteCard({ title, summary, href, image, imageAlt }: RecoverySuiteCardProps) {
  return (
    <Link
      href={href}
      className="group card-lift rounded-[20px] overflow-hidden flex flex-col bg-card shadow-sm border-2 border-[#1a3d3a] no-underline"
    >
      <div style={{ height: '4px', background: '#2ab4b8', width: '100%' }} />
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-black text-page text-lg leading-tight tracking-tight mb-2 group-hover:text-[#2ab4b8] transition-colors">
          {title}
        </h3>
        <p className="text-page-muted text-sm leading-relaxed flex-1 mb-4">{summary}</p>
        <span className="text-page text-xs font-black uppercase tracking-wide inline-flex items-center gap-2">
          Learn more <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  )
}
