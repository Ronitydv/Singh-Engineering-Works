import React from 'react'
import './Features.css'
import { motion } from 'framer-motion'
import { ShieldCheck, Crosshair, Zap, HardHat, Compass } from 'lucide-react'

const featuresList = [
  {
    icon: <Crosshair size={28} />,
    title: 'Precision Tolerances',
    hindiTitle: 'सटीक टॉलरेंस',
    text: 'Lathe turning, grinding, and CNC machining executed down to exact micron levels, ensuring perfect machinery alignments.'
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Heavy-Duty Construction',
    hindiTitle: 'मजबूत निर्माण',
    text: 'Built with heavy-gauge structural steel and thick plates. Our machines stand up to heavy daily vibration and severe workloads.'
  },
  {
    icon: <Compass size={28} />,
    title: 'Rigorous Calibrations',
    hindiTitle: 'कठोर कैलिब्रेशन',
    text: 'Each gear, drive, shaft, and cylinder undergoes complete diagnostic check and test runs prior to client dispatch.'
  },
  {
    icon: <Zap size={28} />,
    title: 'Energy Efficient',
    hindiTitle: 'ऊर्जा कुशल',
    text: 'Optimized gearbox gear-ratios, balanced rotor blades, and high-efficiency induction motors to lower factory utility bills.'
  },
  {
    icon: <HardHat size={28} />,
    title: 'Safety Assured',
    hindiTitle: 'सुरक्षित कार्य',
    text: 'Equipped with heavy protective steel casings, emergency push stop switches, and motor thermal overload relays.'
  }
]

const Features = () => {
  return (
    <section className="features-section section-padding" id="features">
      <div className="container">
        
        <div className="section-header text-center">
          <div className="section-tag">Core Strengths</div>
          <h2 className="section-title">Why Choose Singh Engineering Works?</h2>
          <p className="section-desc">
            We merge conventional craftsmanship with modern toolroom machinery to fabricate products built for long-term structural integrity.
          </p>
        </div>

        <div className="features-grid">
          {featuresList.map((feat, index) => (
            <motion.div
              key={feat.title}
              className="feature-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card-glow-brass"></div>
              <div className="card-icon-gold">{feat.icon}</div>
              <h3 className="card-title-head">{feat.title}</h3>
              <h4 className="card-hindi-tag">{feat.hindiTitle}</h4>
              <p className="card-description-text">{feat.text}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default Features
