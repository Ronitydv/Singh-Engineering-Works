import React, { useState } from 'react'
import './ContactForm.css'
import { Phone, Mail, MessageSquare, MapPin, Stamp, Award, BadgeIndianRupee } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Precision CNC Machining',
    msg: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    // Compile into WhatsApp message
    const formattedMsg = `*SINGH ENGINEERING WORKS - NEW INQUIRY*\n\n` +
      `*Contact Details:*\n` +
      `- Name: ${formData.name}\n` +
      `- Phone: ${formData.phone}\n\n` +
      `*Inquiry Details:*\n` +
      `- Service: ${formData.service}\n` +
      `- Requirements/Quantity: ${formData.msg || 'N/A'}\n\n` +
      `*Source:* Website Contact Form`

    const encodedMsg = encodeURIComponent(formattedMsg)
    window.open(`https://wa.me/919416439853?text=${encodedMsg}`, '_blank')
  }

  return (
    <section className="contact-section section-padding" id="location">
      <div className="container">
        
        <div className="section-header text-center">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">Order Now & Inquiries</h2>
          <p className="section-desc">
            Send us your machining or fabrication requirements and our team will get back to you with custom quotes.
          </p>
        </div>

        <div className="contact-grid-main">
          {/* Left Column - Contact Form & Quick Links */}
          <div className="contact-form-container glass-card">
            <h3>Send Request</h3>
            <form onSubmit={handleSubmit} className="actual-contact-form">
              <div className="form-input-group">
                <label htmlFor="form-name">Full Name</label>
                <input 
                  type="text" 
                  id="form-name" 
                  required 
                  placeholder="Enter your name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div className="form-input-group">
                <label htmlFor="form-phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="form-phone" 
                  required 
                  placeholder="Enter your 10-digit number" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              
              <div className="form-input-group">
                <label htmlFor="form-app">Service / Application Sector</label>
                <select 
                  id="form-app"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="Precision CNC Machining">Precision CNC Machining (सटीक मशीनिंग)</option>
                  <option value="Heavy Sheet Metal Fabrication">Heavy Sheet Metal Fabrication (मजबूत फैब्रिकेशन)</option>
                  <option value="Storage Tank Construction">Storage Tank Construction (SS टैंक निर्माण)</option>
                  <option value="Custom Automated Machine Build">Custom Automated Machine Build (कस्टम मशीन निर्माण)</option>
                  <option value="Die & Mold Development">Die & Mold Development (डाई व मोल्ड निर्माण)</option>
                  <option value="Other Work">Other Toolroom Work (अन्य कार्य)</option>
                </select>
              </div>
              
              <div className="form-input-group">
                <label htmlFor="form-msg">Message / Custom Requirements</label>
                <textarea 
                  id="form-msg" 
                  rows="4" 
                  placeholder="Enter metal sizes, quantities, tolerances, or design drawings details..."
                  value={formData.msg}
                  onChange={(e) => setFormData({...formData, msg: e.target.value})}
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary btn-submit-wa">
                <i className="fa-brands fa-whatsapp"></i> Send Order on WhatsApp
              </button>
            </form>
            
            {/* Quick Contact Links */}
            <div className="quick-links-box">
              <div className="ql-item">
                <span className="ql-icon"><Phone size={18} /></span>
                <div className="ql-info">
                  <span>Call Sales Direct</span>
                  <strong><a href="tel:+919416439853">+91 94164 39853</a></strong>
                </div>
              </div>
              <div className="ql-item">
                <span className="ql-icon"><MessageSquare size={18} /></span>
                <div className="ql-info">
                  <span>WhatsApp Text</span>
                  <strong><a href="https://wa.me/919416439853?text=Hi%20Singh%20Engineering%20Works%2C%20I%20have%20an%20inquiry." target="_blank" rel="noopener noreferrer">+91 94164 39853</a></strong>
                </div>
              </div>
              <div className="ql-item">
                <span className="ql-icon"><Mail size={18} /></span>
                <div className="ql-info">
                  <span>Email Us</span>
                  <strong><a href="mailto:contact@singhengineering.in">contact@singhengineering.in</a></strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map and Address Details */}
          <div className="contact-details-container-main">
            <div className="details-card-box glass-card">
              <h3>Workshop Location</h3>
              <p className="address-text-desc">
                <MapPin className="pin-icon-gold" size={20} />
                <span>
                  <strong>Singh Engineering Works</strong><br />
                  Manufacturers of Custom Heavy Machinery & Toolroom Solutions<br />
                  Dungerwas Industrial Belt, Dharuhera, Rewari District, Haryana, India
                </span>
              </p>
              
              {/* Map Iframe */}
              <div className="map-iframe-wrap">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190.27831565414027!2d76.79502099752425!3d28.207315204171227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d49f607b779ff%3A0xf68ef2fa6ea40911!2sSingh%20Engineering%20Works!5e1!3m2!1sen!2sin!4v1783081791760!5m2!1sen!2sin" 
                  width="100%" 
                  height="280" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Singh Engineering Works Workshop Map Location"
                ></iframe>
              </div>
              
              {/* Certification Strip */}
              <div className="cert-strip-wrap">
                <div className="cert-strip-item">
                  <Stamp size={16} />
                  <span>GST Registered</span>
                </div>
                <div className="cert-strip-item">
                  <Award size={16} />
                  <span>100% Precision Work</span>
                </div>
                <div className="cert-strip-item">
                  <BadgeIndianRupee size={16} />
                  <span>Factory Pricing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default ContactForm
