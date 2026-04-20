import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillGroupsData } from '../data'
import { SectionHeader } from './SectionWrapper'

type AccentColor = 'green' | 'amber'

const tagClass: Record<AccentColor, string> = {
  green: 'tag-field',
  amber: 'tag-gold',
}

const labelClass: Record<AccentColor, string> = {
  green: 'text-field',
  amber: 'text-gold',
}

const frameClass: Record<AccentColor, string> = {
  green: 'border-field/15 bg-field-pale/50',
  amber: 'border-gold/20 bg-gold-pale/40',
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const coreGroups = skillGroupsData.filter(group => group.tier === 'core')
  const supportingGroups = skillGroupsData.filter(group => group.tier === 'supporting')

  return (
    <section id="umiejetnosci" ref={ref} className="relative py-24 md:py-32 bg-paper-warm overflow-hidden section-seam">
      <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-rule" />
      <div aria-hidden="true" className="absolute bottom-0 inset-x-0 h-px bg-rule" />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-[38vw] min-w-[260px] opacity-60 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, rgba(176,128,48,0.08), rgba(176,128,48,0))' }}
      />

      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75 }}
            className="relative z-10"
          >
            <SectionHeader
              label="Narzędzia i technologie"
              number="06"
              title="Warsztat pokazany przez pryzmat użyteczności"
              subtitle="Najpierw obszary, które najmocniej odpowiadają na potrzeby tej rekrutacji. Niżej kompetencje, które poszerzają zakres działania i wzmacniają wszechstronność profilu."
            />

            <motion.div
              className="surface-panel p-7 border border-rule/70"
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-mono text-2xs uppercase tracking-widest text-ink-light mb-4">
                Jak czytać tę sekcję
              </p>
              <div className="space-y-4 text-sm text-ink-mid leading-relaxed">
                <p>
                  To nie jest lista wszystkich programów, z którymi miałem kontakt. To uporządkowany warsztat pokazany przez pryzmat tego, gdzie mogę być najbardziej użyteczny od początku współpracy.
                </p>
                <p>
                  Na górze znajdują się kompetencje najmocniej wspierające materiały produktowe, pracę wielojęzyczną i uporządkowaną dokumentację. Niżej pokazuję obszary, które poszerzają zakres działania o publikację cyfrową, szkolenia i koordynację.
                </p>
                <p>
                  Część webowa obejmuje także technologie, z którymi pracuję obecnie. Ta strona pozostaje praktycznym przykładem mojego podejścia do struktury, estetyki i wdrożenia front-endowego.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative z-10">
            <div className="mb-8">
              <p className="font-mono text-2xs uppercase tracking-widest text-ink-light mb-4">
                Najbardziej użyteczne w tej rekrutacji
              </p>
              <div className="grid gap-4">
                {coreGroups.map((group, i) => (
                  <motion.article
                    key={group.category}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.06 + i * 0.08 }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className={`surface-panel border p-7 md:p-8 hover:-translate-y-1 transition-all duration-200 ${frameClass[group.color]}`}
                  >
                    <motion.div className="flex flex-wrap items-start justify-between gap-4 mb-5" whileHover={{ x: 4 }} transition={{ duration: 0.22 }}>
                      <div>
                        <h3 className={`font-mono text-2xs uppercase tracking-widest ${labelClass[group.color]}`}>
                          {group.category}
                        </h3>
                        <p className="mt-3 text-sm text-ink-mid leading-relaxed max-w-2xl">
                          {group.description}
                        </p>
                      </div>
                    </motion.div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map(skill => (
                        <span key={skill} className={tagClass[group.color]}>{skill}</span>
                      ))}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-2xs uppercase tracking-widest text-ink-light mb-4">
                Zaplecze poszerzające zakres działania
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {supportingGroups.map((group, i) => (
                  <motion.article
                    key={group.category}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.26 + i * 0.07 }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="surface-panel border border-rule/70 p-7 hover:-translate-y-1 transition-all duration-200"
                  >
                    <motion.div className="flex items-center justify-between gap-3 mb-4" whileHover={{ x: 4 }} transition={{ duration: 0.22 }}>
                      <h3 className={`font-mono text-2xs uppercase tracking-widest ${labelClass[group.color]}`}>
                        {group.category}
                      </h3>
                      <span className={`inline-block w-10 h-px ${group.color === 'green' ? 'bg-field/60' : 'bg-gold/60'}`} />
                    </motion.div>
                    <p className="text-sm text-ink-mid leading-relaxed mb-4">
                      {group.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map(skill => (
                        <span key={skill} className={tagClass[group.color]}>{skill}</span>
                      ))}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Client row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-14 pt-8 border-t border-rule"
        >
          <p className="font-mono text-2xs uppercase tracking-widest text-ink-light mb-5 text-center">
            Wybrani klienci i marki — reprezentatywne
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
            {['Roche', 'GSK', 'Janssen', 'AstraZeneca', 'Merck', 'ABB', 'Toyota', 'Scania', 'John Deere', 'BRP', 'Cabinet Office UK', 'Network Rail', 'Xerox', 'Rubix'].map(c => (
              <motion.span
                key={c}
                className="tag-neutral"
                whileHover={{ y: -2, scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                {c}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
