import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projectThemesData } from '../data'
import { SectionHeader } from './SectionWrapper'

type AccentColor = 'green' | 'amber'

const numClass: Record<AccentColor, string> = {
  green: 'text-field/15',
  amber: 'text-gold/15',
}

const tagC: Record<AccentColor, string> = {
  green: 'tag-field',
  amber: 'tag-gold',
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projekty" ref={ref} className="relative py-24 md:py-32 bg-paper-warm section-seam overflow-hidden">
      <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-rule" />
      <div aria-hidden="true" className="absolute bottom-0 inset-x-0 h-px bg-rule" />

      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
        >
          <SectionHeader
            label="Co potrafię tworzyć"
            number="08"
            title="Rodzaje materiałów, które tworzę"
            subtitle="Przekrojowy wybór obszarów pracy: od materiałów szkoleniowych i dokumentacji po multimedia, interfejsy i komunikację wizualną."
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-rule">
          {projectThemesData.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 + i * 0.06 }}
              whileHover={{ y: -6, scale: 1.012 }}
              className="group relative bg-paper-warm p-6 hover:bg-surface transition-colors duration-200 overflow-hidden flex flex-col gap-4"
            >
              {/* Ghost number */}
              <span
                aria-hidden="true"
                className={`absolute -bottom-4 -right-1 font-cormorant font-bold leading-none select-none pointer-events-none ${numClass[p.color]}`}
                style={{ fontSize: '72px' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <motion.div className="relative flex flex-col gap-3 flex-1" whileHover={{ x: 4 }} transition={{ duration: 0.22 }}>
                <h3 className="font-cormorant font-semibold text-ink text-base leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs text-ink-mid leading-relaxed flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map(t => (
                    <motion.span
                      key={t}
                      className={tagC[p.color]}
                      whileHover={{ y: -2, scale: 1.03 }}
                      transition={{ duration: 0.18 }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-7 text-center font-mono text-2xs text-ink-light uppercase tracking-widest"
        >
          Pełne portfolio dostępne na życzenie · część materiałów objęta umową NDA
        </motion.p>
      </div>
    </section>
  )
}
