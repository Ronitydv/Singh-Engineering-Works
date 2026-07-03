import React, { useState, useEffect } from 'react'
import './ProductDetail.css'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, MessageSquareCode, Truck, ShieldCheck, Settings2, Calculator, ArrowRight } from 'lucide-react'
import { renderBlueprint } from './Products'

const ProductDetail = ({ product, onClose }) => {
  const [calcInput, setCalcInput] = useState('')
  const [calcResults, setCalcResults] = useState(null)

  useEffect(() => {
    // Lock scroll when detail modal is open
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  // Dynamic calculations when calcInput changes
  useEffect(() => {
    if (!product || !calcInput) {
      setCalcResults(null)
      return
    }

    const value = parseFloat(calcInput)
    if (isNaN(value) || value <= 0) {
      setCalcResults(null)
      return
    }

    let results = {}
    if (product.id === 'scrap-grinder') {
      const motorHP = Math.max(5, Math.round(value / 25))
      const blades = Math.max(12, Math.round(value / 15 + 8))
      results = {
        'Suggested Motor Power': `${motorHP} HP (Three Phase)`,
        'Min Rotor Blade Width': `${blades} Inches`,
        'Chamber Size': `${Math.round(blades * 20)} x ${Math.round(blades * 15)} mm`,
        'Estimated Setup Weight': `${Math.round(value * 2 + 300)} kg`
      }
    } else if (product.id === 'ink-mixer') {
      const motorHP = Math.max(2, Math.round(value / 130 * 10) / 10)
      const wallThk = Math.max(3, Math.round(value / 1000 + 2))
      results = {
        'Required Drive Motor': `${motorHP} HP with VFD`,
        'Tank Wall Thickness': `${wallThk} mm (SS304/SS316)`,
        'Planetary Blades': 'Double Helical Impellers',
        'Recommended Speed': `${Math.max(10, Math.round(100 - value / 50))} RPM`
      }
    } else if (product.id === 'recoiler' || product.id === 'hydraulic-uncoiler') {
      const width = value
      const motorHP = Math.max(3, Math.round(width / 300 * 2))
      results = {
        'Drive Motor Capacity': `${motorHP} HP AC Variable Frequency`,
        'Mandrel Expansion Segment': '4-Link Wedge Type',
        'Max Support Weight': `${Math.round(width / 250)} Tons`,
        'Hydraulic Pressure Pack': '140 Bar / 5.5 kW'
      }
    } else if (product.id === 'storage-tank') {
      const cap = value
      const wallThk = Math.max(2, Math.round(cap / 5000 + 2))
      const dishEndThk = wallThk + 1
      results = {
        'Main Shell Thickness': `${wallThk} mm`,
        'Dish End Thickness': `${dishEndThk} mm`,
        'Validation Level': 'Sanitary Polish (< 0.4μm Ra)',
        'Support Columns': cap > 10000 ? '6 Heavy Tubular Legs' : '4 Standard Tubular Legs'
      }
    } else if (product.id === 'carton-machine') {
      const speed = value
      const motorHP = Math.max(2, Math.round(speed / 30))
      results = {
        'Main Drive Capacity': `${motorHP} HP`,
        'Feeding Mechanism': speed > 100 ? 'Vacuum Suction Auto-Feed' : 'Manual Chain Feed',
        'Scoring Wheel Sets': '4 Pairs (High Carbon Alloy)',
        'Knife Material': 'HCHCr Steel D2 Grade'
      }
    }
    setCalcResults(results)
  }, [calcInput, product])

  if (!product) return null

  // Get calculator label based on product category
  const getCalcLabel = () => {
    switch (product.id) {
      case 'scrap-grinder': return 'Target Throughput (kg/hr)'
      case 'ink-mixer': return 'Target Vessel Volume (Liters)'
      case 'recoiler':
      case 'hydraulic-uncoiler': return 'Target Coil Width (mm)'
      case 'storage-tank': return 'Target Storage Capacity (Liters)'
      case 'carton-machine': return 'Target Production Speed (boxes/min)'
      default: return 'Custom Parameter Value'
    }
  }

  // Create the URL containing the product parameter
  const productUrl = `${window.location.origin}?product=${product.id}`
  
  // Format the WhatsApp message
  let whatsappMessage = `${product.whatsappPrompt}\n\nView details here: ${productUrl}`
  if (calcInput && calcResults) {
    whatsappMessage += `\n\n*Calculated Custom Specifications:*\n` +
      `- Target Capacity/Size: ${calcInput}\n` +
      Object.entries(calcResults).map(([key, val]) => `- ${key}: ${val}`).join('\n')
  }
  const encodedMessage = encodeURIComponent(whatsappMessage)
  const whatsappLink = `https://wa.me/919416439853?text=${encodedMessage}`

  return (
    <AnimatePresence>
      <div className="product-detail-overlay" onClick={onClose}>
        <motion.div 
          className="product-detail-modal glass-panel"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button className="modal-close-btn" onClick={onClose}>
            <X size={24} />
          </button>

          <div className="modal-grid">
            {/* Image/Blueprint Column */}
            <div className="modal-image-column">
              <div className="modal-image-wrap blueprint-detail-container">
                {renderBlueprint(product.id)}
              </div>
              
              {/* Trust Badges */}
              <div className="trust-badges">
                <div className="trust-badge">
                  <ShieldCheck size={20} className="badge-icon-rust" />
                  <div>
                    <h4>12 Month Warranty</h4>
                    <p>On-site support & service</p>
                  </div>
                </div>
                <div className="trust-badge">
                  <Truck size={20} className="badge-icon-rust" />
                  <div>
                    <h4>Pan-India Delivery</h4>
                    <p>Insured logistics & setup</p>
                  </div>
                </div>
                <div className="trust-badge">
                  <Settings2 size={20} className="badge-icon-rust" />
                  <div>
                    <h4>Custom Built</h4>
                    <p>Tailored to dimensions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="modal-content-column">
              <span className="modal-product-tag">{product.specifications.Model}</span>
              <h2>{product.name}</h2>
              <p className="modal-tagline">{product.tagline}</p>
              
              <p className="modal-desc">{product.shortDesc}</p>

              {/* Specifications Table */}
              <div className="specs-section">
                <h3>Technical Specifications</h3>
                <table className="specs-table">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key}>
                        <td className="spec-label">{key}</td>
                        <td className="spec-value">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Interactive Spec Configurator */}
              <div className="calculator-section glass-card">
                <h4><Calculator size={18} className="calc-icon-gold" /> Spec Estimator Calculator</h4>
                <p className="calc-desc">Input your production targets to calculate suggested motor horsepower and structural specifications for a custom quotation.</p>
                
                <div className="calc-input-row">
                  <label>{getCalcLabel()}</label>
                  <input 
                    type="number" 
                    placeholder="e.g. 500" 
                    className="custom-input calc-input"
                    value={calcInput}
                    onChange={(e) => setCalcInput(e.target.value)}
                  />
                </div>

                {calcResults && (
                  <div className="calc-results-grid">
                    {Object.entries(calcResults).map(([key, val]) => (
                      <div className="calc-res-item" key={key}>
                        <span className="res-lbl">{key}</span>
                        <strong className="res-val">{val}</strong>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Key Features */}
              <div className="features-section">
                <h3>Key Features</h3>
                <ul className="features-list">
                  {product.features.map((feat, index) => (
                    <li key={index}>
                      <Check size={16} className="check-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="modal-actions">
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary buy-now-btn"
                >
                  <MessageSquareCode size={20} />
                  {calcResults ? 'Inquire Estimated Specs on WhatsApp' : 'Buy Now / Order on WhatsApp'}
                </a>
                <button className="btn btn-secondary" onClick={onClose}>
                  Back to Catalog
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default ProductDetail
