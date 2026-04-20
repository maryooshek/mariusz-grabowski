import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experienceData } from '../data'
import { SectionHeader } from './SectionWrapper'

type AccentColor = 'green' | 'amber'

const accentClasses: Record<AccentColor, { dot: string; year: string; panelBorder: string; panelGlow: string }> = {
  green: {
    dot: 'bg-field border-paper',
    year: 'text-field',
    panelBorder: 'border-l-field/70',
    panelGlow: 'shadow-[0_14px_34px_rgba(59,88,52,0.08)]',
  },
  amber: {
    dot: 'bg-gold border-paper',
    year: 'text-gold',
    panelBorder: 'border-l-gold/70',
    panelGlow: 'shadow-[0_14px_34px_rgba(176,128,48,0.10)]',
  },
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="doswiadczenie" ref={ref} className="relative py-24 md:py-32 bg-paper section-seam">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
        >
          <SectionHeader
            label="Historia zawodowa"
            number="05"
            title="Ponad 20 lat w liczbach i miejscach"
            subtitle="Starannie wyselekcjonowane etapy kariery — te, które najsilniej definiują mój dzisiejszy profil i wartość dla JOSKIN."
          />
        </motion.div>

        <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:sticky lg:top-28"
          >
            <motion.div
              className="surface-panel p-8 border-l-4 border-l-field"
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <p
                className="font-cormorant italic text-ink/75 leading-tight"
                style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}
              >
                Każdy etap tej ścieżki dokładał coś konkretnego: precyzję, języki, komunikację techniczną, multimedia albo samodzielność projektową.
              </p>

              <div className="mt-8 pt-6 border-t border-rule/80 grid sm:grid-cols-3 gap-5">
                {[
                  ['20+', 'lat doświadczenia'],
                  ['30+', 'wersji językowych'],
                  ['3', 'obszary dopasowania do JOSKIN'],
                ].map(([value, label]) => (
                  <div key={label}>
                    <span
                      className="block font-cormorant font-semibold text-field leading-none"
                      style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}
                    >
                      {value}
                    </span>
                    <span className="block mt-2 font-mono text-2xs uppercase tracking-widest text-ink-light">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-sm text-ink-mid leading-relaxed space-y-4">
                <p>
                  To wybrane etapy kariery, które najlepiej pokazują, jak rozwijałem kompetencje: od komunikacji wizualnej, przez dokumentację i lokalizację, po multimedia oraz pracę na styku produktu i użytkownika.
                </p>
                <p>
                  Każdy z tych etapów wnosi coś, co dziś mogę wykorzystać w pracy dla JOSKIN: precyzję, komunikację, dokumentację, multimedia albo doświadczenie pracy wielojęzycznej.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-[10.75rem] top-0 bottom-0 w-px bg-gradient-to-b from-field/60 via-rule to-gold/60"
          />
          <div
            aria-hidden="true"
            className="md:hidden absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-field/60 via-rule to-gold/60"
          />

          <div className="space-y-0">
            {experienceData.map((exp, i) => {
              const ac = accentClasses[exp.accentColor]
              return (
                <motion.div
                  key={`${exp.company}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.08 + i * 0.1 }}
                  className={`relative md:grid md:grid-cols-[10rem_1.5rem_minmax(0,1fr)] gap-0 ${i > 0 ? 'mt-3 pt-3' : ''}`}
                >
                  {/* Left: period */}
                  <div className="hidden md:flex items-start justify-end pr-6 pt-7">
                    <div className="text-right">
                      <span className={`block font-mono text-2xs uppercase tracking-[0.18em] ${ac.year}`}>
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Middle axis node */}
                  <div className="hidden md:flex relative justify-center">
                    <div
                      aria-hidden="true"
                      className={`absolute top-9 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 ${ac.dot}`}
                    />
                  </div>

                  {/* Right: content */}
                  <div className="relative pl-10 md:pl-0">
                    {/* Mobile period */}
                    <span className={`md:hidden font-mono text-2xs uppercase tracking-[0.18em] mb-3 block ${ac.year}`}>
                      {exp.period}
                    </span>
                    <div
                      aria-hidden="true"
                      className={`md:hidden absolute left-[7px] top-[8px] w-3 h-3 rounded-full border-2 ${ac.dot}`}
                    />

                    <motion.div
                      className={`surface-panel border border-rule/70 border-l-4 ${ac.panelBorder} px-6 py-6 md:px-7 md:py-7 transition-all duration-250 hover:-translate-y-0.5 ${ac.panelGlow}`}
                      whileHover={{ y: -6, scale: 1.01 }}
                      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="mb-5">
                        <h3 className="font-cormorant font-semibold text-ink leading-tight" style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
                          {exp.role}
                        </h3>
                        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span className="text-sm text-ink-mid font-medium">{exp.company}</span>
                          <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-rule" aria-hidden="true" />
                          <span className="font-mono text-2xs uppercase tracking-widest text-ink-light">{exp.location}</span>
                        </div>
                      </div>

                      <motion.ul className="space-y-2.5 mb-6" whileHover={{ x: 4 }} transition={{ duration: 0.22 }}>
                        {exp.highlights.map((h, j) => (
                          <li key={j} className="flex gap-3 text-sm text-ink-mid leading-relaxed">
                            <span className={`shrink-0 mt-2 w-1.5 h-1.5 rounded-full ${exp.accentColor === 'green' ? 'bg-field/80' : 'bg-gold/80'}`} />
                            <span>{h}</span>
                          </li>
                        ))}
                      </motion.ul>

                      <div className="border-t border-rule/80 pt-4">
                        <p className="font-mono text-2xs uppercase tracking-widest text-ink-light mb-2">Znaczenie dla JOSKIN</p>
                        <p className="text-sm text-ink-mid leading-relaxed">{exp.relevance}</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative mt-6 pl-10 md:pl-0 md:grid md:grid-cols-[10rem_1.5rem_minmax(0,1fr)]"
            >
              <div className="hidden md:block" />
              <div className="hidden md:flex relative justify-center">
                <div aria-hidden="true" className="absolute top-8 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-paper bg-rule" />
              </div>
              <div
                aria-hidden="true"
                className="md:hidden absolute left-[7px] top-[8px] w-3 h-3 rounded-full border-2 border-paper bg-rule"
              />

              <motion.div
                className="surface-panel border border-dashed border-rule px-6 py-5 md:px-7"
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-mono text-2xs uppercase tracking-widest text-ink-light mb-3">
                  Wcześniejsze etapy
                </p>
                <p className="text-sm text-ink-mid leading-relaxed">
                  <span className="font-medium text-ink">1996–1998</span>
                  {' '}— Wydawnictwo „Omega”, Bydgoszcz. To tam zacząłem budować warsztat projektowy i wydawniczy, który później rozwinąłem w stronę DTP, dokumentacji technicznej i pracy wielojęzycznej.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
