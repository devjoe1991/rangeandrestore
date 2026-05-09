interface ComingSoonBadgeProps {
  size?: 'sm' | 'md'
  label?: string
}

export function ComingSoonBadge({ size = 'md', label = 'Coming Soon · Opening at Range and Restore' }: ComingSoonBadgeProps) {
  const padding = size === 'sm' ? 'px-3 py-1.5 text-[0.6rem]' : 'px-4 py-2 text-xs'
  const dot = size === 'sm' ? 'w-1.5 h-1.5' : 'w-2 h-2'

  return (
    <div className={`inline-flex items-center gap-2 bg-[#7dd94a] text-[#1a2330] font-black uppercase tracking-widest rounded-full ${padding}`}>
      <span className={`${dot} rounded-full bg-[#1a2330] animate-pulse`} aria-hidden="true" />
      {label}
    </div>
  )
}
