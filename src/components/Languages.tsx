import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { languagesData } from '../data'
import { SectionHeader } from './SectionWrapper'

type BarColor = 'green' | 'amber' | 'text'

const barClass: Record<BarColor, string> = {
  green: 'bg-field',
  amber: 'bg-gold',
  text: 'bg-ink-ghost',
}

const levelClass: Record<BarColor, string> = {
  green: 'text-field',
  amber: 'text-gold',
  text: 'text-ink-light',
}

export default function Languages() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="jezyki" ref={ref} className="relative py-24 md:py-32 bg-paper section-seam overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionHeader
              label="Języki"
              number="07"
              title="Wielojęzyczność jako rdzeń profilu"
              subtitle="Języki jako realne narzędzie pracy: ponad dekada w środowiskach anglosaskich, projekty lokalizowane na dziesiątki rynków i studia w Pradze."
            />

            <div className="space-y-4 text-sm text-ink-mid leading-relaxed mb-10">
              <p>
                Wielojęzyczność to fundament mojej kariery. Angielski był moim codziennym językiem pracy przez ponad 10 lat w Xerox UK, Oxford Conversis i Cardno. Czeski zdobyłem na Uniwersytecie Karola w Pradze.
              </p>
              <p>
                W kontekście JOSKIN szczególnie istotny jest dla mnie mocny angielski, a czeski i rosyjski stanowią dodatkowe wsparcie komunikacyjne. Niemiecki pozostaje na poziomie podstawowym, więc traktuję go jako obszar do dalszego rozwoju.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-paper-warm border-t-2 border-field">
                <span
                  className="block font-cormorant font-semibold text-field leading-none mb-1"
                  style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
                >
                  4
                </span>
                <span className="font-mono text-2xs uppercase tracking-widest text-ink-light">Języki robocze</span>
              </div>
              <div className="p-6 bg-paper-warm border-t-2 border-gold">
                <span
                  className="block font-cormorant font-semibold text-gold leading-none mb-1"
                  style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
                >
                  10+
                </span>
                <span className="font-mono text-2xs uppercase tracking-widest text-ink-light">Lat pracy po angielsku</span>
              </div>
            </div>
          </motion.div>

          {/* Right: language bars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-0 divide-y divide-rule"
          >
            {languagesData.map((lang, i) => (
              <motion.div
                key={lang.language}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                className="py-5 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xl" role="img" aria-label={lang.language}>{lang.flag}</span>
                    <div>
                      <span
                        className="font-cormorant font-semibold text-ink leading-none"
                        style={{ fontSize: 'clamp(16px, 2vw, 22px)' }}
                      >
                        {lang.language}
                      </span>
                      <p className="font-mono text-2xs text-ink-light mt-0.5">{lang.note}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`font-mono text-xs font-medium ${levelClass[lang.color]}`}>
                      {lang.levelCode}
                    </span>
                    <span className="font-mono text-2xs text-ink-light">— {lang.level}</span>
                  </div>
                </div>
                {/* Bar */}
                <div className="h-0.5 w-full bg-rule overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${lang.percentage}%` } : { width: 0 }}
                    transition={{ duration: 0.9, delay: 0.4 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                    className={`h-full ${barClass[lang.color]}`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
