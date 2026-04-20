import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeader } from './SectionWrapper'

const milestones = [
  { year: '1991–1996', title: 'Fundament', text: 'Antropologia społeczna na Uniwersytecie Karola w Pradze — nauka myślenia o komunikacji między kulturami. College of Art and Design w Bydgoszczy — narzędzia do nadawania tej komunikacji formy wizualnej.' },
  { year: '1996–2010', title: 'Budowanie warsztatu', text: 'Od grafiki wydawniczej i targów branżowych w Polsce, przez techniczne instrukcje w Warszawie, do wielojęzycznych podręczników dla Xerox UK. Każda rola dokładała nową warstwę.' },
  { year: '2010–2011', title: 'Reset i perspektywa', text: 'Rok podróży z rodziną przez Bliski Wschód, Indie i Azję Południowo-Wschodnią. Negocjacje bez wspólnego języka, budżetowanie w kilkunastu walutach, improwizacja — doświadczenia nie do przecenienia.' },
  { year: '2011–2016', title: 'Specjalizacja', text: 'Oxford Conversis — lokalizacja dokumentacji klinicznej w projektach obejmujących nawet 70 języków równocześnie. Cardno Emerging Markets — materiały szkoleniowe dla projektów pomocowych. Precyzja, jakość i odpowiedzialność za termin.' },
  { year: '2016–teraz', title: 'Dojrzałość zawodowa', text: 'Freelance dla globalnych klientów: Roche, ABB, Cabinet Office, John Deere, Toyota. Pełna autonomia projektowa — od koncepcji do finalnej publikacji w wielu językach i formatach.' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="o-mnie" ref={ref} className="relative py-24 md:py-32 bg-paper section-seam overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1px_1fr] gap-0 lg:gap-12">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionHeader label="O mnie" number="03" title="Ewolucja, nie przypadek" />

            {/* Pull quote */}
            <blockquote className="mb-8 border-l-2 border-field pl-6">
              <p
                className="font-cormorant italic text-ink/80 leading-snug"
                style={{ fontSize: 'clamp(18px, 2.2vw, 26px)' }}
              >
                „Nie szukam wąskiej niszy. Szukam środowiska, w którym wszechstronność jest atutem — i właśnie w takim kierunku odczytuję potrzeby JOSKIN."
              </p>
            </blockquote>

            <div className="space-y-4 text-sm text-ink-mid leading-relaxed">
              <p>
                Zacząłem jako grafik — od layoutów i DTP w wydawnictwie, przez projekty dla targów branżowych, także rolniczo-przemysłowych, do technicznych instrukcji i dokumentacji produktowej. To nauczyło mnie, że dobra komunikacja wizualna wymaga rozumienia zarówno <em>treści</em>, jak i <em>formy</em>.
              </p>
              <p>
                Z czasem profil ewoluował: od jednego języka roboczego do regularnej pracy przy materiałach przygotowywanych w ponad 30 wersjach językowych. Od materiałów drukowanych do interaktywnych modułów szkoleniowych, animacji i systemów cyfrowych. Od lokalnego klienta do globalnych marek w farmacji, motoryzacji, sektorze publicznym i projektach związanych z techniczną komunikacją produktową.
              </p>
              <p>
                Dziś mam szeroki profil zawodowy: rozumiem zarówno potrzeby komunikacyjne organizacji, jak i narzędzia, które pozwalają te potrzeby skutecznie realizować.
              </p>
            </div>

            {/* Education */}
            <div className="mt-10">
              <p className="font-mono text-2xs uppercase tracking-widest text-ink-light mb-4">Wykształcenie</p>
              <div className="space-y-3">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-ink">College of Art and Design, Bydgoszcz</span>
                  <span className="font-mono text-2xs text-ink-light mt-0.5">Desktop Publishing & Graphic Design · 1995–1996</span>
                </div>
                <div className="w-full h-px bg-rule my-1" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-ink">Uniwersytet Karola, Praga</span>
                  <span className="font-mono text-2xs text-ink-light mt-0.5">Licencjat z Antropologii Społecznej · 1991–1995</span>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="mt-8 p-5 bg-paper-warm">
              <p className="font-mono text-2xs uppercase tracking-widest text-ink-light mb-2">Zainteresowania</p>
              <p className="text-sm text-ink-mid leading-relaxed">
                Fotografia dokumentalna i podróżnicza, nowe technologie graficzne, historia. Rok podróży przez Azję nauczył obserwacji i opowiadania historii obrazem.
              </p>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-rule mx-6" aria-hidden="true" />

          {/* Right column: timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="lg:pt-0 pt-10">
              <p className="font-mono text-2xs uppercase tracking-widest text-ink-light mb-8">Przebieg kariery</p>
              <div className="relative">
                {/* Vertical line */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-field via-rule to-gold"
                />

                <div className="space-y-10 pl-7">
                  {milestones.map((m, i) => (
                    <motion.div
                      key={m.year}
                      initial={{ opacity: 0, x: 16 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                      className="relative"
                    >
                      {/* Node */}
                      <div
                        aria-hidden="true"
                        className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-paper bg-rule"
                      />
                      <span className="font-mono text-2xs text-field uppercase tracking-widest block mb-1">
                        {m.year}
                      </span>
                      <h4 className="font-cormorant font-semibold text-ink text-lg leading-tight mb-1.5">
                        {m.title}
                      </h4>
                      <p className="text-sm text-ink-mid leading-relaxed">{m.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
