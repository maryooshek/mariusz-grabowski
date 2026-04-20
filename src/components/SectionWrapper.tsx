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
    <motion.div
      className="mb-16 md:mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={stagger}
    >
      <motion.span
        variants={revealUp}
        className={`section-label ${dark ? '!text-dark-muted [&::before]:bg-dark-border' : ''}`}
      >
        {number && <span className="font-mono text-2xs">{number}</span>}
        {label}
      </motion.span>
      <motion.h2
        variants={revealUp}
        className={`font-cormorant font-semibold leading-tight tracking-tight mb-5 ${dark ? 'text-dark-text' : 'text-ink'}`}
        style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={revealUp}
          className={`text-base leading-relaxed max-w-2xl ${dark ? 'text-dark-mid' : 'text-ink-mid'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
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

export const revealLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

export const revealRight = {
  hidden: { opacity: 0, x: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

export const floatCard = {
  rest: {
    y: 0,
    scale: 1,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
  hover: {
    y: -6,
    scale: 1.01,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
}

export const hoverNudge = {
  rest: {
    x: 0,
    transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] },
  },
  hover: {
    x: 4,
    transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] },
  },
}
