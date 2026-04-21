import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  BookOpen,
  ClipboardList,
  Code,
  FileText,
  Globe,
  Languages,
  Layout,
  Palette,
  Truck,
  Video,
  Zap,
} from 'lucide-react'
import { strengthsData } from '../data'
import { SectionHeader } from './SectionWrapper'

type AccentColor = 'green' | 'amber'
type IconName =
  | 'Languages'
  | 'Video'
  | 'FileText'
  | 'BookOpen'
  | 'Code'
  | 'Globe'
  | 'Palette'
  | 'Layout'
  | 'ClipboardList'
  | 'Zap'
  | 'Truck'

const accentPanel: Record<AccentColor, string> = {
  green: 'border-field/20 bg-field-pale/60',
  amber: 'border-gold/20 bg-gold-pale/50',
}

const accentIcon: Record<AccentColor, string> = {
  green: 'text-field',
  amber: 'text-gold',
}

const iconMap: Record<IconName, typeof Languages> = {
  Languages,
  Video,
  FileText,
  BookOpen,
  Code,
  Globe,
  Palette,
  Layout,
  ClipboardList,
  Zap,
  Truck,
}

export default function Strengths() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="kompetencje" ref={ref} className="relative py-24 md:py-32 bg-paper section-seam">
      <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-rule" />
      <div aria-hidden="true" className="absolute bottom-0 inset-x-0 h-px bg-rule" />

      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
        >
          <SectionHeader
            label="Najważniejsze atuty"
            number="04"
            title="Co wnoszę do zespołu"
            subtitle="Najmocniejsze obszary mojego profilu zawodowego: komunikacja, multimedia, dokumentacja, języki i praktyczne zaplecze cyfrowe."
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
                Najmocniej pracuję tam, gdzie trzeba połączyć treść, obraz, strukturę i praktyczne zrozumienie odbiorcy.
              </p>

              <div className="mt-8 text-sm text-ink-mid leading-relaxed space-y-4">
                <p>
                  To nie jest zbiór oderwanych kompetencji. To warsztat zbudowany przez lata pracy przy materiałach, które musiały być jednocześnie czytelne, estetyczne, poprawne i gotowe do użycia w różnych środowiskach.
                </p>
                <p>
                  W praktyce oznacza to swobodę poruszania się między komunikacją wizualną, dokumentacją, multimediami, lokalizacją i publikacją cyfrową bez utraty jakości ani porządku pracy.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-rule/80">
                <p className="font-mono text-2xs uppercase tracking-widest text-ink-light mb-3">
                  Jak przekłada się to na pracę
                </p>
                <p className="text-sm text-ink-mid leading-relaxed">
                  Oznacza to umiejętność łączenia precyzji wykonania z czytelnością przekazu, sprawnej pracy między działami oraz zamieniania złożonych informacji w materiały, które są użyteczne, estetyczne i gotowe do publikacji.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="hidden md:block absolute left-[1.35rem] top-0 bottom-0 w-px bg-gradient-to-b from-field/55 via-rule to-gold/55"
            />
            <div
              aria-hidden="true"
              className="md:hidden absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-field/55 via-rule to-gold/55"
            />

            <div className="space-y-3">
              {strengthsData.map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.05 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-10 md:pl-14"
                >
                  <div
                    aria-hidden="true"
                    className={`absolute left-[7px] top-8 md:left-[15px] md:top-9 w-3 h-3 rounded-full border-2 border-paper ${item.color === 'green' ? 'bg-field' : 'bg-gold'}`}
                  />

                  <motion.div
                    className={`group relative overflow-hidden border p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(26,21,16,0.08)] ${accentPanel[item.color]}`}
                    whileHover={{ y: -7, scale: 1.012 }}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-4 -right-2 font-cormorant font-bold text-ink/[0.05] leading-none select-none"
                      style={{ fontSize: '88px' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div className="relative flex items-start gap-4 h-full">
                      <motion.div
                        className={`shrink-0 p-3 border border-current/10 bg-paper/60 ${accentIcon[item.color]}`}
                        whileHover={{ rotate: -4, scale: 1.04 }}
                        transition={{ duration: 0.24 }}
                      >
                        {(() => {
                          const Icon = iconMap[item.icon as IconName]
                          return <Icon size={18} strokeWidth={1.75} />
                        })()}
                      </motion.div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                          <h3 className="font-cormorant font-semibold text-ink text-lg leading-snug">
                            {item.title}
                          </h3>
                          <span className="font-mono text-2xs uppercase tracking-widest text-ink-light">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <p className="text-sm text-ink-mid leading-relaxed max-w-[54ch]">{item.text}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
