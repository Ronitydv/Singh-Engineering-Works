import React from 'react'
import './Products.css'
import { motion } from 'framer-motion'
import { Cpu, Settings2, ArrowRight } from 'lucide-react'
import { 
  GrinderBlueprint, 
  MixerBlueprint, 
  RecoilerBlueprint, 
  UncoilerBlueprint, 
  TankBlueprint, 
  CartonBlueprint 
} from './BlueprintDrawings'

export const renderBlueprint = (id) => {
  switch (id) {
    case 'scrap-grinder':
      return <GrinderBlueprint />
    case 'ink-mixer':
      return <MixerBlueprint />
    case 'recoiler':
      return <RecoilerBlueprint />
    case 'hydraulic-uncoiler':
      return <UncoilerBlueprint />
    case 'storage-tank':
      return <TankBlueprint />
    case 'carton-machine':
      return <CartonBlueprint />
    default:
      return null
  }
}

export const productsData = [
  {
    id: 'scrap-grinder',
    name: 'Plastic Scrap Grinding Machine',
    tagline: 'Heavy-Duty 24" Recycling Grinder',
    shortDesc: 'Engineered for high-efficiency grinding of rigid plastic scrap, bottles, and polymers.',
    specifications: {
      'Model': 'SEW-PG300',
      'Rotor Width': '24 Inches (600mm)',
      'Motor Power': '15 HP / 11 kW (415V, 3-Phase)',
      'Blade Material': 'High Carbon High Chromium (HCHC) Steel',
      'Throughput Capacity': '300 - 500 kg/hr',
      'Weight': 'Approx. 950 kg'
    },
    features: [
      'Scissor-cut blade configuration for maximum shearing force',
      'Soundproof double-wall hopper structure',
      'Pneumatically assisted easy opening for blade maintenance',
      'Interlock safety sensors and overload protection relays'
    ],
    whatsappPrompt: 'Hi, I want to buy/inquire about the Plastic Scrap Grinding Machine (Model SEW-PG300).'
  },
  {
    id: 'ink-mixer',
    name: 'Industrial Ink Mixing Machine',
    tagline: 'High-Viscosity Planetary Mixer',
    shortDesc: 'Double shaft planetary mixer for uniform blending of inks, paints, and pigments.',
    specifications: {
      'Model': 'SEW-IM1000',
      'Vessel Capacity': '1000 Liters (Options: 500L - 2000L)',
      'Motor Power': '7.5 HP with Variable Frequency Drive (VFD)',
      'Material': 'Stainless Steel contact parts (SS304 / SS316)',
      'Mixing Speed': 'Adjustable 0 - 1440 RPM',
      'Lifting Mechanism': 'Hydraulic vertical lift'
    },
    features: [
      'Teflon wall scrapers prevent build-up on vessel sides',
      'Vacuum-sealed tank option for bubble-free mixing',
      'Double-shaft impeller blades designed for high-shear dispersion',
      'Mobile vessel design with heavy castors and locks'
    ],
    whatsappPrompt: 'Hi, I want to buy/inquire about the Industrial Ink Mixing Machine (Model SEW-IM1000).'
  },
  {
    id: 'recoiler',
    name: 'Semi-Automatic Recoiler Machine',
    tagline: 'High-Tension Sheet Metal Winder',
    shortDesc: '415V loop-synchronized tension recoiler for metal coils and strips.',
    specifications: {
      'Model': 'SEW-RC415',
      'Coil Width Range': '100mm to 1250mm',
      'Max Coil Weight': '5,000 kg (5 Tons)',
      'Winding Speed': '0 - 30 meters/minute synchronized',
      'Expansion Range': '450mm - 520mm manual/pneumatic',
      'Electrical Input': '415V, 50Hz, 3-Phase AC'
    },
    features: [
      'Automatic loop control sensor matches cutting line speed',
      'Adjustable pneumatic pressure pad for tight coil wraps',
      'Heavy-duty hardened tool steel mandrel jaws',
      'Integrated cantilever support arm for extra stability'
    ],
    whatsappPrompt: 'Hi, I want to buy/inquire about the Semi-Automatic Recoiler Machine (Model SEW-RC415).'
  },
  {
    id: 'hydraulic-uncoiler',
    name: 'Hydraulic Uncoiler Machine',
    tagline: 'Heavy-Duty Coil Decoiling System',
    shortDesc: 'Automated hydraulic expansion decoiler for coil feeding lines.',
    specifications: {
      'Model': 'SEW-HU600',
      'Max Weight Capacity': '10,000 kg (10 Tons)',
      'Expansion Mechanism': 'Hydraulic cylinders (integrated power pack)',
      'Hub Expansion': '460mm to 530mm',
      'AC Drive System': '7.5 HP Motor with regenerative braking',
      'Coil Outer Diameter': 'Up to 1500mm'
    },
    features: [
      'Pneumatic overhead press arm holds outer wraps securely',
      'Self-centering heavy-duty jaw expansion links',
      'Integrated hydraulic station with pressure relief valve',
      'Variable speed drive for smooth acceleration and deceleration'
    ],
    whatsappPrompt: 'Hi, I want to buy/inquire about the Hydraulic Uncoiler Machine (Model SEW-HU600).'
  },
  {
    id: 'storage-tank',
    name: 'Stainless Steel Storage Tank',
    tagline: 'Custom Sanitary Storage Vessel',
    shortDesc: 'Custom fabricated stainless steel tanks for chemical and oil storage.',
    specifications: {
      'Model': 'SEW-SST5000',
      'Volume Capacity': '5000 Liters (Custom up to 50,000L)',
      'Material Grade': 'Stainless Steel 304 or 316L',
      'Wall Thickness': '4mm Shell, 5mm Dish End',
      'Finishing': 'Inner sanitary finish (mirror polished < 0.4μm Ra)',
      'Mount Type': 'Tubular legs with adjustable foot pads'
    },
    features: [
      'Engineered with conical bottom for complete drain utility',
      'Equipped with CIP spray ball and validation port',
      'Tested under pressure for leak-proof durability (DPT test)',
      'Double-jacketed thermal insulation option available'
    ],
    whatsappPrompt: 'Hi, I want to buy/inquire about the Stainless Steel Storage Tank (Model SEW-SST5000).'
  },
  {
    id: 'carton-machine',
    name: 'Carton Box Making Machine',
    tagline: 'High-Speed Slotter & Scoring Machine',
    shortDesc: 'Semi-automatic scoring and cutting machine for corrugated cardboard box production.',
    specifications: {
      'Model': 'SEW-CB900',
      'Max Sheet Feeding': '1200mm x 2400mm',
      'Min Sheet Feeding': '300mm x 300mm',
      'Production Speed': '80 - 120 boxes/minute',
      'Slotting Depth': 'Max 300mm',
      'Drive Power': '5 HP variable speed motor'
    },
    features: [
      'Dual chain feed mechanism with side guides for precision',
      'Long-lasting alloy steel slotting knives (heat-treated)',
      'Micrometer scale adjustment dial for scoring thickness',
      'Sturdy cast iron structural frame blocks vibration'
    ],
    whatsappPrompt: 'Hi, I want to buy/inquire about the Carton Box Making Machine (Model SEW-CB900).'
  }
]

const Products = ({ onSelectProduct }) => {
  return (
    <section id="products" className="products section-padding">
      <div className="container">
        
        <div className="products-header text-center">
          <div className="section-tag">Versatility</div>
          <h2 className="section-title">Our Industrial Machinery</h2>
          <p className="section-desc">
            Explore our line of heavy machinery built at our tool room. Click on any machine card to view detailed specifications, technical parameters, and ordering details.
          </p>
        </div>

        <div className="products-grid">
          {productsData.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => onSelectProduct(product)}
            >
              <div className="product-image-container blueprint-container">
                {renderBlueprint(product.id)}
                <div className="product-image-overlay">
                  <span className="btn-primary detail-btn">
                    View Blueprint Specs <ArrowRight size={16} />
                  </span>
                </div>
              </div>

              <div className="product-info">
                <span className="product-tag-model">{product.specifications.Model}</span>
                <h3>{product.name}</h3>
                <p className="product-desc">{product.shortDesc}</p>
                <div className="product-spec-preview">
                  <span className="spec-item"><Cpu size={14} /> {product.specifications['Motor Power']}</span>
                  <span className="spec-item"><Settings2 size={14} /> {Object.values(product.specifications)[1]}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default Products
