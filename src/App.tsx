import Navigation from './components/Navigation'
import Hero from './components/Hero'
import RoleMatch from './components/RoleMatch'
import About from './components/About'
import Strengths from './components/Strengths'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Languages from './components/Languages'
import Projects from './components/Projects'
import Joskin from './components/Joskin'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] btn-primary text-sm"
      >
        Przejdź do treści głównej
      </a>

      <Navigation />

      <main id="main-content">
        <Hero />
        <RoleMatch />
        <About />
        <Strengths />
        <Experience />
        <Skills />
        <Languages />
        <Projects />
        <Joskin />
        <Contact />
      </main>
    </>
  )
}
