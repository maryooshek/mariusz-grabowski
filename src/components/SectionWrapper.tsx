import { useRef, ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
  dark?: boolean
}

export default function SectionWrapper({ id, children, className = '', dark = false }: SectionWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-24 md:py-32 ${dark ? 'dark-section' : 'bg-paper'} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-8 lg:px-12"
      >
        {children}
      </motion.div>
    </section>
  )
}

export function SectionHeader({
  label,
  title,
  subtitle,
  dark = false,
  number,
}: {
  label: string
  title: string
  subtitle?: string
  dark?: boolean
  number?: string
}) {
  return (
    <div className="mb-16 md:mb-20">
      <span className={`section-label ${dark ? '!text-dark-muted [&::before]:bg-dark-border' : ''}`}>
        {number && <span className="font-mono text-2xs">{number}</span>}
        {label}
      </span>
      <h2
        className={`font-cormorant font-semibold leading-tight tracking-tight mb-5 ${dark ? 'text-dark-text' : 'text-ink'}`}
        style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base leading-relaxed max-w-2xl ${dark ? 'text-dark-mid' : 'text-ink-mid'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export const revealUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}
