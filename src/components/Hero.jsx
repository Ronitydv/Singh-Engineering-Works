import React from 'react'
import './Hero.css'
import { motion } from 'framer-motion'

const Hero = ({ onOpenCustomizer }) => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-overlay"></div>
      <div className="hero-container container">
        
        {/* Left Text Column */}
        <div className="hero-content">
          <motion.div 
            className="badge"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-dot"></span> GST Registered: 06APQPS6985K1ZR | Toolroom Dharuhera
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>STRONG MACHINES.</span><br />
            <span>PRECISE WORK.</span><br />
            <span className="highlight-text-gold">STRONGER TOMORROW!</span>
          </motion.h1>
          
          <motion.p 
            className="hero-hindi-slogan"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            "सटीक कार्य, मजबूत निर्माण, विकास की नई कहानी!"<br />
            <span className="sub-slogan">सभी प्रकार के मशीनिंग व फैब्रिकेशन कार्य।</span>
          </motion.p>
          
          <motion.p 
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Premium manufacturing toolroom services by <strong>Singh Engineering Works</strong>. 
            We specialize in heavy-duty Plastic Scrap Grinders, Ink Mixers, Recoilers, SS Tanks, 
            and customized assembly-line components machined to tolerances.
          </motion.p>
          
          <motion.div 
            className="hero-ctas"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a 
              href="https://wa.me/919416439853?text=Hi%20Singh%20Engineering%20Works%2C%20I%20want%20to%20place%20an%20order%20for%20industrial%20machinery." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary hero-btn"
            >
              <i className="fa-brands fa-whatsapp"></i> Order Via WhatsApp
            </a>
            <button className="btn-secondary hero-btn" onClick={onOpenCustomizer}>
              Customize Project <i className="fa-solid fa-gears" style={{ marginLeft: '6px' }}></i>
            </button>
          </motion.div>
          
          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="stat-item">
              <div className="stat-num">100%</div>
              <div className="stat-label">Precision Microns</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">Estd.</div>
              <div className="stat-label">Since 2017</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">ISO</div>
              <div className="stat-label">Quality Assured</div>
            </div>
          </motion.div>
        </div>
        
        {/* Right Image Column (Replaced 3D gear with user provided workshop photo) */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="hero-shop-image-container glass-card">
            <img 
              src="/images/shop_front.png" 
              alt="Singh Engineering Works Workshop Front" 
              className="hero-shop-image"
            />
            <div className="hero-image-overlay-badge">
              <i className="fa-solid fa-industry"></i>
              <div>
                <h4>Singh Engineering Works</h4>
                <p>Authorized Workshop Shop-front</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
