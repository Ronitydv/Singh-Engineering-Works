import React from 'react'
import './Capabilities.css'
import { motion } from 'framer-motion'
import { Settings, PenTool, Database, Shield, Zap, Layers } from 'lucide-react'

const CapabilitiesList = [
  {
    icon: <Settings size={28} />,
    title: 'CNC & Precision Machining',
    desc: 'High-tolerance components, lathe turning, milling, and surface grinding for critical machinery parts.'
  },
  {
    icon: <Layers size={28} />,
    title: 'Heavy Metal Fabrication',
    desc: 'Bespoke structural fabrication, industrial frames, machine bases, platforms, and protective enclosures.'
  },
  {
    icon: <Database size={28} />,
    title: 'SS Tank Fabrication',
    desc: 'Custom-designed stainless steel (SS) tanks for chemicals, mixing operations, food-grade storage, and oils.'
  },
  {
    icon: <PenTool size={28} />,
    title: 'Tool Room Services',
    desc: 'Design and manufacture of custom jigs, fixtures, punches, press tools, dies, and mold components.'
  },
  {
    icon: <Zap size={28} />,
    title: 'Custom Automation Design',
    desc: 'Full assembly line engineering, electrical integrations, and custom automatic mechanism fabrication.'
  },
  {
    icon: <Shield size={28} />,
    title: 'Quality & Calibration',
    desc: 'Rigorous inspection standards ensuring each part matches customer blueprint dimensions precisely.'
  }
]

const Capabilities = () => {
  return (
    <section id="capabilities" className="capabilities section-padding">
      <div className="container">
        <div className="capabilities-header">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title-wrap"
          >
            <h2>
              Engineering <span className="highlight-text">Capabilities</span>
            </h2>
            <p className="section-subtitle">
              We offer full-cycle metal machining, toolroom engineering, and heavy industrial fabrication services.
            </p>
          </motion.div>
        </div>

        <div className="capabilities-grid">
          {CapabilitiesList.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card capability-card"
            >
              <div className="capability-icon-wrap">
                {cap.icon}
              </div>
              <h3>{cap.title}</h3>
              <p>{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capabilities
