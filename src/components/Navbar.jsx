import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Menu, X, Wrench, Phone } from 'lucide-react'

const Navbar = ({ onOpenCustomizer }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollTo = (id) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      // Offset for fixed header
      const offset = 90
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container container">
        <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Wrench className="logo-icon-gold" size={24} />
          <span>SINGH <span className="highlight-text-gold">ENGINEERING</span></span>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <button className="nav-btn-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</button>
          <button className="nav-btn-link" onClick={() => handleScrollTo('about')}>About</button>
          <button className="nav-btn-link" onClick={() => handleScrollTo('features')}>Features</button>
          <button className="nav-btn-link" onClick={() => handleScrollTo('products')}>Machinery</button>
          <button className="nav-btn-link" onClick={() => handleScrollTo('reviews')}>Reviews</button>
          <button className="nav-btn-link" onClick={() => handleScrollTo('location')}>Contact</button>
        </nav>

        {/* Action CTAs */}
        <div className="nav-cta-wrap">
          <a href="tel:+919416439853" className="btn-secondary-nav">
            <Phone size={14} /> Call Now
          </a>
          <a 
            href="https://wa.me/919416439853?text=Hello%20Singh%20Engineering%20Works%2C%20I%20am%20interested%20in%20inquiring%20about%20your%20services!" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary-nav"
          >
            <i className="fa-brands fa-whatsapp"></i> WhatsApp
          </a>
          
          {/* Mobile Menu Toggle */}
          <button className="mobile-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer-nav ${isOpen ? 'active' : ''}`}>
        <button className="mobile-nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</button>
        <button className="mobile-nav-link" onClick={() => handleScrollTo('about')}>About</button>
        <button className="mobile-nav-link" onClick={() => handleScrollTo('features')}>Features</button>
        <button className="mobile-nav-link" onClick={() => handleScrollTo('products')}>Machinery</button>
        <button className="mobile-nav-link" onClick={() => handleScrollTo('reviews')}>Reviews</button>
        <button className="mobile-nav-link" onClick={() => handleScrollTo('location')}>Contact</button>
        
        <div className="mobile-cta-box">
          <a href="tel:+919416439853" className="mobile-btn call-btn">
            <Phone size={16} /> Call +91 94164 39853
          </a>
          <a 
            href="https://wa.me/919416439853?text=Hello%20Singh%20Engineering%20Works%2C%20I%20am%20interested%20in%20inquiring%20about%20your%20services!" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mobile-btn wa-btn"
          >
            <i className="fa-brands fa-whatsapp"></i> WhatsApp Order
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
