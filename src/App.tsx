import { Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Clients from './components/Clients'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

function App() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
      <div className="min-h-screen bg-white">
        <CookieBanner />
        <Navbar />
        <main>
          <Hero />
          <Solutions />
          <Clients />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </div>
    </Suspense>
  )
}

export default App
