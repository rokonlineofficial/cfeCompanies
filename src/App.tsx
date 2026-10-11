import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'motion/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import SendDocument from './pages/SendDocument'
import FAQ from './pages/FAQ'
import News from './pages/News'
import ClientArea from './pages/ClientArea'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 })
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
      <motion.div aria-hidden="true" style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-brand via-cyan to-brand-red" />
      <Navbar />
      <motion.main id="main" key={pathname} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/send-document" element={<SendDocument />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/news" element={<News />} />
          <Route path="/client-area" element={<ClientArea />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.main>
      <Footer />
    </>
  )
}
