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
    <section id="kompetencje" ref={ref} className="relative py-24 md:py-32 bg-paper section-seam overflow-hidden">
      <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-rule" />
      <div aria-hidden="true" className="absolute bottom-0 inset-x-0 h-px bg-rule" />

      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75 }}
            className="lg:sticky lg:top-28"
          >
            <SectionHeader
              label="Najważniejsze atuty"
              number="04"
              title="Co wnoszę do zespołu"
              subtitle="Nie zestaw przypadkowych umiejętności, lecz spójny profil specjalisty, który rozumie treść, formę, technologię i język jednocześnie."
            />

            <div className="surface-panel p-7 border-l-4 border-l-field">
              <p
                className="font-cormorant italic text-ink/75 leading-tight"
                style={{ fontSize: 'clamp(20px, 2.8vw, 34px)' }}
              >
                Profil, który łączy komunikację, wizualizację, technologię i języki w jednym, dojrzałym warsztacie.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-rule/80">
                {[['20+', 'Lat'], ['4', 'Języki robocze'], ['10+', 'Lat pracy po angielsku']].map(([v, l]) => (
                  <div key={l}>
                    <span
                      className="block font-cormorant font-semibold text-field leading-none"
                      style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}
                    >
                      {v}
                    </span>
                    <span className="block font-mono text-2xs uppercase tracking-widest text-ink-light mt-2">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-4 auto-rows-fr">
          {strengthsData.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.05 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -7, scale: 1.012 }}
              className={`group relative overflow-hidden border p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(26,21,16,0.08)] h-full ${accentPanel[item.color]}`}
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
                  <h3 className="font-cormorant font-semibold text-ink text-lg leading-snug mb-2">
                  {item.title}
                  </h3>
                  <p className="text-sm text-ink-mid leading-relaxed max-w-[34ch]">{item.text}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
