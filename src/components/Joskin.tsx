import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { joskinPointsData } from '../data'
import { ArrowDownRight } from 'lucide-react'

const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

export default function Joskin() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="joskin" ref={ref} className="relative py-24 md:py-32 dark-section overflow-hidden section-seam-dark">
      {/* Subtle texture on dark bg */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(240,232,216,0.04) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Ghost "JOSKIN" watermark */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <span
          className="absolute -bottom-8 -right-4 font-cormorant font-bold text-dark-text leading-none"
          style={{ fontSize: 'clamp(80px, 16vw, 200px)', opacity: 0.04, letterSpacing: '-0.04em' }}
        >
          JOSKIN
        </span>
      </div>

      {/* Top accent */}
      <div aria-hidden="true" className="absolute top-0 inset-x-0 h-[3px] bg-field" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75 }}
        className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12"
      >
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <span className="inline-flex items-center gap-3 font-mono text-2xs tracking-widest2 uppercase text-dark-muted mb-5">
            <span className="w-8 h-px bg-dark-border" />
            <span className="font-mono text-2xs">09</span>
            Dla JOSKIN
          </span>
          <h2
            className="font-cormorant font-semibold text-dark-text leading-tight tracking-tight mb-5"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
          >
            Co wnoszę do JOSKIN Polska?
          </h2>
          <p className="text-base text-dark-mid leading-relaxed max-w-2xl">
            JOSKIN to firma, w której spotykają się produkcja, współpraca różnych działów i rynków oraz potrzeba profesjonalnych materiałów wizualnych i cyfrowych. Właśnie na styku tych obszarów moje doświadczenie może być najbardziej użyteczne, szczególnie tam, gdzie trzeba pokazać produkt jasno, konkretnie i przekonująco.
          </p>
        </div>

        {/* 4 points — 2x2 grid, clean editorial */}
        <div className="grid sm:grid-cols-2 gap-px bg-dark-border mb-16">
          {joskinPointsData.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-dark p-8 group hover:bg-dark-surface transition-colors duration-200"
            >
              <motion.div className="flex items-start gap-4" whileHover={{ x: 5 }} transition={{ duration: 0.22 }}>
                <div>
                  <span
                    className="block font-cormorant font-semibold text-dark-text/30 leading-none mb-3 select-none"
                    style={{ fontSize: '40px' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-cormorant font-semibold text-dark-text text-lg mb-3">{point.title}</h3>
                  <p className="text-sm text-dark-mid leading-relaxed">{point.text}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Closing statement — full width editorial block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="border-t border-dark-border pt-12"
        >
          <p className="font-mono text-2xs uppercase tracking-widest text-dark-muted mb-6">Finalne słowo</p>
          <blockquote
            className="font-cormorant italic text-dark-text leading-tight mb-8 max-w-4xl"
            style={{ fontSize: 'clamp(20px, 3vw, 34px)' }}
          >
            „Najmocniej wypadają te role, w których można połączyć komunikację, treści produktowe, dokumentację i multimedia.
            Właśnie w takim obszarze moje doświadczenie jest dziś najbardziej użyteczne i najlepiej pokazuje jego spójność.”
          </blockquote>

          {/* JOSKIN's 4 values echoed */}
          <div className="flex flex-wrap gap-x-10 gap-y-3 mb-8">
            {[
              { val: 'Porozumienie', sub: 'Komunikacja wielojęzyczna' },
              { val: 'Różnorodność', sub: 'Szeroki profil zawodowy' },
              { val: 'Pasja', sub: 'Wieloletnie zaangażowanie' },
              { val: 'Ewolucja', sub: 'Gotowość do nauki' },
            ].map(v => (
              <motion.div key={v.val} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <span className="block font-mono text-2xs uppercase tracking-widest text-field-light">{v.val}</span>
                <span className="block font-mono text-2xs text-dark-muted mt-0.5">{v.sub}</span>
              </motion.div>
            ))}
          </div>

          <button onClick={() => go('#kontakt')} className="btn-primary">
            Umówmy się na rozmowę
            <ArrowDownRight size={14} strokeWidth={1.5} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
