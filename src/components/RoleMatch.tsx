import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { roleMatchData } from '../data'
import { SectionHeader } from './SectionWrapper'

type AccentColor = 'green' | 'amber'

const accentMap: Record<AccentColor, { num: string; tag: string; dot: string; valueBorder: string }> = {
  green: {
    num: 'text-field/20',
    tag: 'tag-field',
    dot: 'bg-field',
    valueBorder: 'border-l-field',
  },
  amber: {
    num: 'text-gold/20',
    tag: 'tag-gold',
    dot: 'bg-gold',
    valueBorder: 'border-l-gold',
  },
}

export default function RoleMatch() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const role = roleMatchData[active]
  const accent = accentMap[role.accentColor]

  return (
    <section id="dopasowanie" ref={ref} className="relative py-24 md:py-32 bg-paper-warm">
      {/* top/bottom rules */}
      <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-rule" />
      <div aria-hidden="true" className="absolute bottom-0 inset-x-0 h-px bg-rule" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-8 lg:px-12"
      >
        <SectionHeader
          label="Dopasowanie do stanowisk"
          number="02"
          title="Dlaczego pasuję do trzech ról?"
          subtitle="Moje doświadczenie nie jest przypadkowe — to spójna ścieżka łącząca komunikację, media, technologię i języki. Każda z trzech ról wpisuje się w inny wymiar tego profilu."
        />

        {/* Role selector — editorial number tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-12" role="tablist">
          {roleMatchData.map((r, i) => (
            <button
              key={r.id}
              role="tab"
              id={`role-tab-${r.id}`}
              aria-controls={`role-panel-${r.id}`}
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`relative min-h-[88px] text-left px-5 py-4 transition-all duration-200 border ${
                active === i
                  ? 'border-field bg-field-pale text-ink shadow-[0_8px_22px_rgba(59,88,52,0.08)]'
                  : 'border-rule/80 bg-paper text-ink-light hover:text-ink-mid hover:border-rule hover:bg-surface'
              }`}
            >
              <span className="flex items-start gap-3">
                <span className={`font-cormorant font-semibold text-xl leading-none ${active === i ? 'text-field' : 'text-ink-ghost'}`}>
                  {r.number}
                </span>
                <span className="min-w-0">
                  <span className={`block font-medium text-sm leading-snug ${active === i ? 'text-ink' : 'text-ink-mid'}`}>
                    {r.shortTitle}
                  </span>
                  <span className="block mt-1 font-mono text-2xs uppercase tracking-widest text-ink-light">
                    {r.subtitle}
                  </span>
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            role="tabpanel"
            id={`role-panel-${role.id}`}
            aria-labelledby={`role-tab-${role.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Card header */}
            <div className="relative overflow-hidden surface-panel p-8 md:p-10 mb-3"
              style={{ boxShadow: '0 1px 3px rgba(26,21,16,0.05)' }}
            >
              {/* Large ghost number */}
              <span
                aria-hidden="true"
                className={`absolute -top-4 -right-2 font-cormorant font-bold leading-none select-none pointer-events-none ${accent.num}`}
                style={{ fontSize: 'clamp(80px, 14vw, 180px)' }}
              >
                {role.number}
              </span>

              <div className="relative">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <span className={`inline-block mb-3 ${accent.tag}`}>{role.badge}</span>
                    <h3
                      className="font-cormorant font-semibold text-ink leading-tight"
                      style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
                    >
                      {role.title}
                    </h3>
                    <p className="font-mono text-2xs uppercase tracking-widest text-ink-light mt-1.5">
                      {role.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-ink-mid leading-relaxed max-w-2xl">{role.intro}</p>
              </div>
            </div>

            {/* Two columns */}
            <div className="grid md:grid-cols-2 gap-3 mb-3">
              {/* Direct fit */}
              <div className="surface-panel p-8">
                <h4 className="font-mono text-2xs uppercase tracking-widest text-ink-light mb-5 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${accent.dot}`} />
                  Bezpośrednie dopasowanie
                </h4>
                <ul className="space-y-3">
                  {role.directFit.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-ink-mid leading-relaxed">
                      <span className={`shrink-0 mt-2 w-1 h-1 rounded-full ${accent.dot}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Transferable */}
              <div className="surface-panel p-8">
                <h4 className="font-mono text-2xs uppercase tracking-widest text-ink-light mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-ink-ghost" />
                  Kompetencje transferowalne
                </h4>
                <ul className="space-y-3 mb-7">
                  {role.transferable.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-ink-mid leading-relaxed">
                      <span className="shrink-0 mt-2 w-1 h-1 rounded-full bg-ink-ghost" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div>
                  <p className="font-mono text-2xs uppercase tracking-widest text-ink-light mb-3">Narzędzia kluczowe</p>
                  <div className="flex flex-wrap gap-1.5">
                    {role.tools.map(t => (
                      <span key={t} className={accent.tag}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Value footer */}
            <div className={`surface-panel px-8 py-5 border-l-4 ${accent.valueBorder}`}>
              <p className="text-sm text-ink-mid italic">
                <span className="font-medium not-italic text-ink">Wartość dla pracodawcy: </span>
                {role.value}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
