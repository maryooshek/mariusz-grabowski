import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems } from '../data'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isCompactNav, setIsCompactNav] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(max-width: 1179px)')
    const applyMatch = (event?: MediaQueryList | MediaQueryListEvent) => {
      setIsCompactNav(event ? event.matches : media.matches)
    }

    applyMatch()
    media.addEventListener('change', applyMatch)

    return () => media.removeEventListener('change', applyMatch)
  }, [])

  useEffect(() => {
    const ids = ['home', ...navItems.map(n => n.href.slice(1))]
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) }),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!mobileOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false)
      }
    }

    const onResize = () => {
      if (window.innerWidth >= 1180) {
        setMobileOpen(false)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [mobileOpen])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (!target) return
    const top = target.getBoundingClientRect().top + window.scrollY - 96
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <>
      <AnimatePresence>
        {mobileOpen && isCompactNav && (
          <motion.button
            type="button"
            aria-label="Zamknij menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-ink/15 backdrop-blur-[2px]"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-4 z-50 transition-all duration-400 ${
          isCompactNav
            ? 'left-3 right-3'
            : 'left-1/2 w-[1180px] max-w-[calc(100%-1.5rem)] -translate-x-1/2'
        } ${
          scrolled || mobileOpen
            ? 'bg-paper/92 backdrop-blur-md shadow-[0_2px_20px_rgba(26,21,16,0.1)] border border-rule'
            : 'bg-paper/80 backdrop-blur-sm border border-rule/60'
        } rounded-[28px]`}
        role="banner"
      >
        <nav
          className="flex items-center justify-between gap-3 px-3 sm:px-4 py-2"
          aria-label="Nawigacja główna"
        >
          {/* Logo */}
          <button
            onClick={() => handleNav('#home')}
            aria-label="Mariusz Grabowski — Strona główna"
            className="flex shrink-0 items-center gap-2.5 pr-3 mr-1 border-r border-rule group"
          >
            <span className="font-cormorant font-semibold text-base text-ink group-hover:text-field transition-colors">
              MG
            </span>
          </button>

          {/* Desktop links */}
          {!isCompactNav && (
          <ul className="flex items-center justify-center flex-1 min-w-0" role="list">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <li key={item.href}>
                  <button
                    onClick={() => handleNav(item.href)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative px-2.5 xl:px-3 py-1.5 font-sans text-[11px] xl:text-xs tracking-[0.12em] transition-all duration-200 whitespace-nowrap ${
                      isActive ? 'text-field font-medium' : 'text-ink-mid hover:text-ink'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-field-pale rounded-full -z-10"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
          )}

          {/* CTA */}
          {!isCompactNav && (
          <div className="shrink-0 pl-1 ml-1 border-l border-rule">
            <button
              onClick={() => handleNav('#kontakt')}
              className="px-4 py-1.5 bg-field text-paper text-xs font-medium rounded-full tracking-wide hover:bg-field-light transition-colors duration-200"
            >
              Porozmawiajmy
            </button>
          </div>
          )}

          {/* Mobile burger */}
          {isCompactNav && (
          <button
            type="button"
            className="ml-auto inline-flex shrink-0 items-center gap-2 rounded-full border border-rule bg-paper-warm px-3 py-2 text-ink shadow-[0_4px_16px_rgba(26,21,16,0.08)] transition-colors hover:bg-surface"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            aria-label={mobileOpen ? 'Zamknij menu' : 'Otwórz menu'}
          >
            {mobileOpen ? <X size={18} strokeWidth={1.8} /> : <Menu size={18} strokeWidth={1.8} />}
            <span className="font-mono text-2xs uppercase tracking-widest text-ink-mid">
              {mobileOpen ? 'Zamknij' : 'Menu'}
            </span>
          </button>
          )}
        </nav>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileOpen && isCompactNav && (
            <motion.div
              id="mobile-nav-panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-rule mx-2 mb-2"
            >
              <ul className="py-3 flex flex-col" role="list">
                {navItems.map(item => {
                  const isActive = activeSection === item.href.slice(1)
                  return (
                  <li key={item.href}>
                    <button
                      onClick={() => handleNav(item.href)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                        isActive
                          ? 'text-field bg-field-pale/70'
                          : 'text-ink-mid hover:text-ink hover:bg-paper-warm'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                )})}
                <li className="px-4 pt-2">
                  <button
                    onClick={() => handleNav('#kontakt')}
                    className="w-full py-2.5 bg-field text-paper text-sm font-medium tracking-wide hover:bg-field-light transition-colors"
                  >
                    Porozmawiajmy
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
