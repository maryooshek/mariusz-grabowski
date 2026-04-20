import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="kontakt" ref={ref} className="relative py-24 md:py-32 bg-paper" aria-label="Kontakt">
      <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-rule" />

      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Large serif heading — editorial hero treatment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-3 font-mono text-2xs tracking-widest2 uppercase text-ink-light mb-5">
            <span className="w-8 h-px bg-rule" />
            <span>10</span>
            Kontakt
          </span>
          <h2
            className="font-cormorant font-light text-ink leading-[0.9] tracking-tight mb-8"
            style={{ fontSize: 'clamp(48px, 8vw, 110px)' }}
          >
            Chętnie<br />
            <span className="font-semibold">porozmawiam.</span>
          </h2>
          <div className="w-full h-px bg-rule" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: message */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            <div className="surface-panel p-8 border-l-4 border-l-field mb-8">
              <p className="text-ink-mid leading-relaxed mb-4">
                Jestem otwarty na rozmowę o tym, w którym obszarze mógłbym wnieść największą wartość do JOSKIN Polska. Najnaturalniej odnajduję się na styku komunikacji, multimediów, dokumentacji i pracy wielojęzycznej.
              </p>
              <p className="text-ink-mid leading-relaxed">
                Chętnie opowiem szerzej o swoim doświadczeniu, sposobie pracy i o tym, jak mój profil może przełożyć się na praktyczne wsparcie firmy w jednej lub kilku z tych ról.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-0 divide-y divide-rule">
              {[
                { Icon: Mail, label: 'E-mail', value: 'maryooshek@gmail.com', href: 'mailto:maryooshek@gmail.com' },
                { Icon: Phone, label: 'Telefon', value: '+48 792 208 130', href: 'tel:+48792208130' },
                { Icon: MapPin, label: 'Lokalizacja', value: 'Piła, woj. Wielkopolskie', href: null },
              ].map(({ Icon, label, value, href }) => {
                const inner = (
                  <div className="flex items-center gap-4 py-5 group">
                    <Icon size={16} strokeWidth={1.5} className="text-ink-light shrink-0 group-hover:text-field transition-colors" />
                    <div className="flex-1">
                      <span className="block font-mono text-2xs uppercase tracking-widest text-ink-light mb-0.5">{label}</span>
                      <span className="text-sm font-medium text-ink group-hover:text-field transition-colors">{value}</span>
                    </div>
                    {href && <ExternalLink size={13} strokeWidth={1.5} className="text-ink-ghost group-hover:text-field transition-colors" />}
                  </div>
                )
                return href ? (
                  <a key={label} href={href} className="block" aria-label={`${label}: ${value}`}>{inner}</a>
                ) : (
                  <div key={label}>{inner}</div>
                )
              })}
            </div>
          </motion.div>

          {/* Right: application target + footer note */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="flex flex-col justify-between gap-10"
          >
            {/* Target company */}
            <div className="surface-panel p-8 border-t-2 border-field">
              <p className="font-mono text-2xs uppercase tracking-widest text-ink-light mb-4">Ta prezentacja została przygotowana dla:</p>
              <p className="font-cormorant font-semibold text-ink text-xl mb-1">JOSKIN Polska Sp. z o.o.</p>
              <p className="text-sm text-ink-mid mb-1">ul. Gorzowska 62, 64-980 Trzcianka</p>
              <p className="text-sm text-ink-mid">Praca stacjonarna w regionie, który jest dla mnie realnie dostępny.</p>
              <a
                href="mailto:kadry@joskin.com"
                className="inline-flex items-center gap-1.5 text-sm text-field hover:text-field-light transition-colors font-medium mt-2"
              >
                kadry@joskin.com
                <ExternalLink size={12} strokeWidth={1.5} />
              </a>
            </div>

            {/* 3 roles reminder */}
            <div className="surface-panel p-8 border border-rule/70">
              <p className="font-mono text-2xs uppercase tracking-widest text-ink-light mb-4">Rozważane stanowiska</p>
              <div className="space-y-3">
                {[
                  '01 — Pracownik Administracyjny ze Znajomością Języków',
                  '02 — Twórca Treści Multimedialnych',
                  '03 — Informatyk / Programista Stron Internetowych',
                ].map(r => (
                  <p key={r} className="flex items-center gap-3 text-sm text-ink-mid">
                    <span className="w-4 h-px bg-rule shrink-0" />
                    {r}
                  </p>
                ))}
              </div>
              <p className="text-sm text-ink-mid leading-relaxed mt-6 pt-5 border-t border-rule/80">
                Najmocniej widzę swoją wartość tam, gdzie łączą się treści produktowe, komunikacja techniczna, multimedia i współpraca z różnymi działami.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-8 border-t border-rule flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="font-cormorant font-semibold text-ink text-base">MG</span>
            <span className="w-px h-4 bg-rule" />
            <span className="text-sm text-ink-mid">Mariusz Grabowski</span>
          </div>
          <p className="font-mono text-2xs text-ink-light text-center sm:text-right">
            Strona stworzona jako część aplikacji do JOSKIN Polska Sp. z o.o. · Piła, 2026
          </p>
        </motion.div>
      </div>
    </section>
  )
}
