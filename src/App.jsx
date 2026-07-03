import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Capabilities from './components/Capabilities'
import Products, { productsData } from './components/Products'
import ProductDetail from './components/ProductDetail'
import Customizer from './components/Customizer'
import Reviews from './components/Reviews'
import ContactForm from './components/ContactForm'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  const [activeProduct, setActiveProduct] = useState(null)
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false)

  // Handle direct links (e.g. ?product=scrap-grinder)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const productParam = params.get('product')
    
    if (productParam) {
      const matchedProduct = productsData.find(p => p.id === productParam)
      if (matchedProduct) {
        setActiveProduct(matchedProduct)
      }
    }
  }, [])

  // Update URL search params when active product changes
  const handleSelectProduct = (product) => {
    setActiveProduct(product)
    const newUrl = product 
      ? `${window.location.origin}${window.location.pathname}?product=${product.id}`
      : `${window.location.origin}${window.location.pathname}`
    window.history.pushState({ path: newUrl }, '', newUrl)
  }

  const handleCloseProductDetail = () => {
    setActiveProduct(null)
    const newUrl = `${window.location.origin}${window.location.pathname}`
    window.history.pushState({ path: newUrl }, '', newUrl)
  }

  return (
    <div className="app-layout">
      {/* Navigation bar */}
      <Navbar onOpenCustomizer={() => setIsCustomizerOpen(true)} />

      {/* Main Sections */}
      <main>
        <Hero onOpenCustomizer={() => setIsCustomizerOpen(true)} />
        <About />
        <Capabilities />
        <Products onSelectProduct={handleSelectProduct} />
        <Reviews />
        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="footer-panel">
        <div className="container footer-content">
          <p>© 2026 Singh Engineering Works. All Rights Reserved.</p>
          <p className="footer-sub">Designed & engineered for extreme durability and precision.</p>
        </div>
      </footer>

      {/* Modals & Overlays */}
      <ProductDetail 
        product={activeProduct} 
        onClose={handleCloseProductDetail} 
      />

      <Customizer 
        isOpen={isCustomizerOpen} 
        onClose={() => setIsCustomizerOpen(false)} 
      />

      {/* Floating Elements */}
      <FloatingWhatsApp />
    </div>
  )
}

export default App
