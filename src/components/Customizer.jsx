import React, { useState, useEffect } from 'react'
import './Customizer.css'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight, PenTool, ClipboardCheck, ArrowRight } from 'lucide-react'

const Customizer = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    serviceType: 'Precision CNC Machining',
    material: 'Stainless Steel (SS304/SS316)',
    customMaterial: '',
    length: '',
    width: '',
    height: '',
    specifications: '',
    clientName: '',
    clientPhone: ''
  })

  if (!isOpen) return null

  const services = [
    'Precision CNC Machining',
    'Heavy Sheet Metal Fabrication',
    'Storage Tank Construction',
    'Custom Automated Machine Build',
    'Die & Mold Development',
    'Other Machining Work'
  ]

  const materials = [
    'Stainless Steel (SS304/SS316)',
    'Mild Steel (MS / Carbon Steel)',
    'Aluminum Alloys',
    'Brass & Bronze',
    'Hardened Tool Steel',
    'Custom / Other'
  ]

  const handleServiceSelect = (service) => {
    setFormData({ ...formData, serviceType: service })
  }

  const handleMaterialSelect = (material) => {
    setFormData({ ...formData, material: material })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Build the formatted custom order message
    const formattedMessage = `*SINGH ENGINEERING WORKS - NEW CUSTOM DESIGN REQUEST*\n\n` +
      `*Client Details:*\n` +
      `- Name: ${formData.clientName || 'Not Provided'}\n` +
      `- Contact: ${formData.clientPhone || 'Not Provided'}\n\n` +
      `*Project Specifications:*\n` +
      `- Service: ${formData.serviceType}\n` +
      `- Material: ${formData.material === 'Custom / Other' ? formData.customMaterial : formData.material}\n` +
      `- Dimensions: ${formData.length || 'N/A'}L x ${formData.width || 'N/A'}W x ${formData.height || 'N/A'}H mm\n\n` +
      `*Requirements/Description:*\n` +
      `${formData.specifications || 'No additional requirements specified.'}\n\n` +
      `*Source:* Customizer Configurator on Website`

    const encodedMessage = encodeURIComponent(formattedMessage)
    const whatsappLink = `https://wa.me/919416439853?text=${encodedMessage}`
    
    // Redirect to WhatsApp chat
    window.open(whatsappLink, '_blank')
    onClose()
  }

  return (
    <AnimatePresence>
      <div className="customizer-overlay" onClick={onClose}>
        <motion.div
          className="customizer-modal glass-panel"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.4 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close-btn" onClick={onClose}>
            <X size={24} />
          </button>

          <div className="customizer-layout">
            <div className="customizer-sidebar">
              <PenTool className="customizer-icon" size={32} />
              <h2>Configure Your Project</h2>
              <p>Configure details below to receive a custom price quote for your machining or fabrication request via WhatsApp.</p>
              
              {/* Stepper indicator */}
              <div className="stepper-wrap">
                <div className={`step-item ${step >= 1 ? 'active' : ''}`}>
                  <span className="step-num">1</span>
                  <span className="step-label">Select Service</span>
                </div>
                <div className={`step-item ${step >= 2 ? 'active' : ''}`}>
                  <span className="step-num">2</span>
                  <span className="step-label">Specifications</span>
                </div>
                <div className={`step-item ${step >= 3 ? 'active' : ''}`}>
                  <span className="step-num">3</span>
                  <span className="step-label">Contact details</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="customizer-form">
              {/* STEP 1: SERVICE TYPE */}
              {step === 1 && (
                <div className="step-content">
                  <h3>Select Service & Material</h3>
                  
                  <div className="form-group">
                    <label>What type of engineering service do you require?</label>
                    <div className="options-grid">
                      {services.map((s) => (
                        <button
                          type="button"
                          key={s}
                          className={`option-btn ${formData.serviceType === s ? 'selected' : ''}`}
                          onClick={() => handleServiceSelect(s)}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Select Material Requirements</label>
                    <div className="options-grid">
                      {materials.map((m) => (
                        <button
                          type="button"
                          key={m}
                          className={`option-btn ${formData.material === m ? 'selected' : ''}`}
                          onClick={() => handleMaterialSelect(m)}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>

                  {formData.material === 'Custom / Other' && (
                    <div className="form-group slide-in">
                      <label>Specify Custom Material</label>
                      <input
                        type="text"
                        placeholder="e.g., Titanium, Copper Alloy, Delrin"
                        className="custom-input"
                        value={formData.customMaterial}
                        onChange={(e) => setFormData({ ...formData, customMaterial: e.target.value })}
                        required
                      />
                    </div>
                  )}

                  <div className="step-actions">
                    <button type="button" className="btn btn-primary" onClick={() => setStep(2)}>
                      Next Step <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: MEASUREMENTS & SPECS */}
              {step === 2 && (
                <div className="step-content">
                  <h3>Provide Dimensions & Requirements</h3>

                  <div className="form-group">
                    <label>Approximate Dimensions (optional)</label>
                    <div className="dims-row">
                      <div>
                        <span className="dim-suffix">Length (mm)</span>
                        <input
                          type="number"
                          placeholder="e.g. 500"
                          className="custom-input"
                          value={formData.length}
                          onChange={(e) => setFormData({ ...formData, length: e.target.value })}
                        />
                      </div>
                      <div>
                        <span className="dim-suffix">Width (mm)</span>
                        <input
                          type="number"
                          placeholder="e.g. 300"
                          className="custom-input"
                          value={formData.width}
                          onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                        />
                      </div>
                      <div>
                        <span className="dim-suffix">Height (mm)</span>
                        <input
                          type="number"
                          placeholder="e.g. 400"
                          className="custom-input"
                          value={formData.height}
                          onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Project Details / Custom Machining Requirements</label>
                    <textarea
                      placeholder="Please describe the machine structure, tolerances, motor requirements, or machining specifications. E.g., 'We need a high-speed SS316 tank with 5HP bottom scraper agitator...'"
                      className="custom-textarea"
                      value={formData.specifications}
                      onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
                      required
                    ></textarea>
                  </div>

                  <div className="step-actions">
                    <button type="button" className="btn btn-secondary" onClick={() => setStep(1)}>
                      Back
                    </button>
                    <button type="button" className="btn btn-primary" onClick={() => setStep(3)}>
                      Next Step <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: CONTACT INFO & SUBMIT */}
              {step === 3 && (
                <div className="step-content">
                  <h3>Submit Request Details</h3>

                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g., Ashwani Singh"
                      className="custom-input"
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>WhatsApp / Contact Number (optional)</label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 94164 39853"
                      className="custom-input"
                      value={formData.clientPhone}
                      onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                    />
                  </div>

                  {/* Summary Box */}
                  <div className="summary-box glass-card">
                    <h4><ClipboardCheck size={18} className="summary-icon" /> Configuration Summary</h4>
                    <p><strong>Service:</strong> {formData.serviceType}</p>
                    <p><strong>Material:</strong> {formData.material === 'Custom / Other' ? formData.customMaterial : formData.material}</p>
                    <p><strong>Dimensions:</strong> {formData.length || 'N/A'} x {formData.width || 'N/A'} x {formData.height || 'N/A'} mm</p>
                  </div>

                  <div className="step-actions">
                    <button type="button" className="btn btn-secondary" onClick={() => setStep(2)}>
                      Back
                    </button>
                    <button type="submit" className="btn btn-primary submit-btn">
                      Send to WhatsApp <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default Customizer
