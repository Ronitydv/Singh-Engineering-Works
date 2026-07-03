import React from 'react'
import './About.css'
import { motion } from 'framer-motion'
import { CheckCircle2, PhoneCall } from 'lucide-react'

const About = () => {
  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        <div className="about-grid">
          
          {/* Left Column - Shop Image */}
          <motion.div 
            className="about-visual"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-image-wrapper">
              <img 
                src="/images/machinery.jpg" 
                alt="Singh Engineering Works Custom Machinery Fabrication" 
                className="about-img"
              />
              <div className="about-image-overlay-card">
                <span className="about-overlay-icon"><i className="fa-solid fa-gears"></i></span>
                <div className="about-overlay-text">
                  <h4>Singh Engineering Works</h4>
                  <p>Custom Machine Assembly</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Content details */}
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag">About The Workshop</div>
            <h2 className="section-title">Singh Engineering Works & Tool Room</h2>
            <p className="about-para lead">
              Located in the industrial belt of <strong>Dharuhera, Rewari</strong>, we manufacture high-accuracy 
              industrial machinery and offer premium custom metal fabrication contract services.
            </p>
            <p className="about-para">
              Using advanced conventional and CNC lathe turning, milling, and welding machines, we process critical 
              mild steel (MS), stainless steel (SS), and alloy components. Our workshop delivers parts to strict client blueprint 
              tolerances, ensuring exceptional alignment, durability, and on-time project execution.
            </p>
            
            <ul className="about-highlights-list">
              <li>
                <CheckCircle2 className="about-check-icon" size={18} />
                <span>Heavy Extrusion & Winding Machinery</span>
              </li>
              <li>
                <CheckCircle2 className="about-check-icon" size={18} />
                <span>Rigorous Quality Inspection Desk</span>
              </li>
              <li>
                <CheckCircle2 className="about-check-icon" size={18} />
                <span>Make in India - Local Engineering</span>
              </li>
              <li>
                <CheckCircle2 className="about-check-icon" size={18} />
                <span>GST Registered & Fully Insured</span>
              </li>
            </ul>
            
            <div className="about-action-row">
              <a href="tel:+919416439853" className="btn-primary">
                <PhoneCall size={18} /> Contact Sales: +91 94164 39853
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

export default About
