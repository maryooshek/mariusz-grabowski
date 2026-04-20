import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDownRight, MapPin } from 'lucide-react'

const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 120])
  const gridY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 48])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -28])
  const ambientOneY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -70])
  const ambientTwoY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 54])
  const dividerScale = useTransform(scrollYProgress, [0, 0.35], [1, 1.08])

  return (
    <motion.section
      ref={ref}
      id="home"
      className="relative min-h-[88vh] lg:min-h-[90vh] flex flex-col justify-center overflow-hidden bg-paper section-seam"
      aria-label="Profil kandydata"
    >
      {/* Thin forest-green accent bar at top */}
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        style={{ originX: 0 }}
        className="absolute top-0 left-0 right-0 h-[3px] bg-field"
      />

      {/* Ghost watermark "MG" — very large, barely visible */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <motion.div
          className="absolute -top-16 left-[6%] h-40 w-40 rounded-full bg-field/8 blur-3xl"
          style={{ y: ambientOneY }}
          animate={shouldReduceMotion ? undefined : { scale: [1, 1.12, 1], opacity: [0.55, 0.8, 0.55] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-[10%] top-[18%] h-56 w-56 rounded-full bg-gold/10 blur-3xl"
          style={{ y: ambientTwoY }}
          animate={shouldReduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        />
        <motion.span
          className="absolute -bottom-12 -right-8 font-cormorant font-bold text-ink leading-none"
          style={{ fontSize: 'clamp(160px, 28vw, 420px)', opacity: 0.028, letterSpacing: '-0.05em', y: watermarkY }}
        >
          MG
        </motion.span>
      </div>

      {/* Dot grid texture */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          y: gridY,
          backgroundImage: 'radial-gradient(circle, rgba(26,21,16,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-paper via-paper/88 to-transparent pointer-events-none"
        style={{ scaleX: dividerScale }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-[8%] right-[8%] bottom-10 h-px bg-gradient-to-r from-transparent via-field/30 to-transparent pointer-events-none"
        animate={shouldReduceMotion ? undefined : { opacity: [0.45, 0.95, 0.45], scaleX: [0.92, 1, 0.92] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 w-full pt-24 lg:pt-28 pb-14 lg:pb-16"
        style={{ y: contentY }}
      >

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex items-center gap-2 text-ink-light mb-7 lg:mb-8"
        >
          <MapPin size={12} strokeWidth={1.5} />
          <span className="font-mono text-2xs tracking-widest2 uppercase">
            Piła, Polska — otwarty na pracę w Trzciance i okolicach
          </span>
          <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-field animate-pulse" />
        </motion.div>

        {/* Name — the hero's visual anchor */}
        <div className="overflow-hidden mb-1">
          <motion.div
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1
              className="font-cormorant font-light text-ink leading-[0.88] tracking-tight"
              style={{ fontSize: 'clamp(58px, 10.5vw, 148px)' }}
            >
              Mariusz
            </h1>
          </motion.div>
        </div>
        <div className="overflow-hidden mb-7 lg:mb-8">
          <motion.div
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1
              className="font-cormorant font-semibold text-ink leading-[0.88] tracking-tight"
              style={{ fontSize: 'clamp(58px, 10.5vw, 148px)' }}
              aria-label="Mariusz Grabowski"
            >
              Grabowski
            </h1>
          </motion.div>
        </div>

        {/* Horizontal rule — site's signature motif */}
        <motion.div
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 0 }}
          className="w-full h-px bg-rule mb-8 lg:mb-9"
        />

        {/* Two columns below the rule */}
        <div className="grid lg:grid-cols-[minmax(0,1fr)_auto] gap-8 lg:gap-14 items-end">
          {/* Left: subtitle + intro */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            <p
              className="font-cormorant italic text-ink/75 leading-snug mb-5"
              style={{ fontSize: 'clamp(20px, 2.4vw, 30px)' }}
            >
              Wielojęzyczny Specjalista ds. Treści Cyfrowych,<br />
              Multimediów, Komunikacji Technicznej i Produktowej
            </p>
            <p className="text-sm lg:text-[15px] text-ink-mid leading-relaxed max-w-[38rem]">
              Ponad <strong className="text-ink font-medium">20 lat</strong> budowania przekazu —
              od grafiki i DTP, przez lokalizację i dokumentację techniczną,
              po interaktywne szkolenia e-learningowe, filmy objaśniające i materiały wizualne dla marek przemysłowych.
            </p>
          </motion.div>

          {/* Right: stats + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.35 }}
            className="flex flex-col gap-6 lg:gap-7 lg:items-end"
          >
            {/* Stats row */}
            <div className="flex flex-wrap gap-x-7 gap-y-4">
              {[
                { n: '20+', l: 'lat' },
                { n: '4', l: 'języki robocze' },
                { n: '3', l: 'role' },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  className={i > 0 ? 'pl-7 border-l border-rule' : ''}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.22 }}
                >
                  <span
                    className="block font-cormorant font-semibold text-ink leading-none"
                    style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}
                  >
                    {s.n}
                  </span>
                  <span className="block font-mono text-2xs uppercase tracking-widest text-ink-light mt-1.5">
                    {s.l}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <button onClick={() => go('#dopasowanie')} className="btn-primary">
                Dlaczego pasuję do 3 ról?
                <ArrowDownRight size={14} strokeWidth={1.5} />
              </button>
              <button onClick={() => go('#kontakt')} className="btn-ghost">
                Kontakt
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="flex items-center gap-4 mt-12 lg:mt-14 text-ink-light"
          aria-hidden="true"
        >
          <motion.div
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-8 h-px bg-current"
          />
          <span className="font-mono text-2xs uppercase tracking-widest3">Przewiń</span>
        </motion.div>
      </motion.div>

      {/* Role labels — bottom right floating */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        aria-hidden="true"
        className="hidden xl:flex absolute right-10 bottom-16 flex-col gap-2 items-end"
      >
        {['Administracja & Języki', 'Treści Produktowe', 'Front-end / IT'].map((r, i) => (
          <div key={r} className="flex items-center gap-3">
            <span className="font-mono text-2xs text-ink-light tracking-widest">{r}</span>
            <span
              className="font-cormorant font-semibold text-ink-ghost"
              style={{ fontSize: '11px' }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
          </div>
        ))}
      </motion.div>
    </motion.section>
  )
}
