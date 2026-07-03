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
    case 'paint-filter':
      return <MixerBlueprint />
    case 'gear-assembly':
      return <GrinderBlueprint />
    case 'screw-conveyor':
      return <CartonBlueprint />
    case 'ss-tank':
      return <TankBlueprint />
    case 'recoiler':
      return <RecoilerBlueprint />
    case 'cutting-machine':
      return <CartonBlueprint />
    case 'forged-hammers':
      return <GrinderBlueprint />
    case 'laser-printing':
      return <UncoilerBlueprint />
    default:
      return null
  }
}

export const productsData = [
  {
    id: 'paint-filter',
    name: 'Paint Filter Machine',
    tagline: 'Multi-Stage Chemical & Fluid Filter Plant',
    image: '/images/paint_filter.png',
    shortDesc: 'Precision engineered multi-stage vertical columns and sanitary manifolds for industrial paint, varnish, and pigment filtration.',
    specifications: {
      'Model': 'SEW-PFM-8X',
      'Filter Columns': '8 Columns (Numbered Series)',
      'Material': 'Stainless Steel 304 / 316 Grade',
      'Pressure Rating': '10 Bar Max Working Pressure',
      'Manifold Line': 'SS Pipe Loop with Sanitary Clamps',
      'Application': 'Paints, Resins, Oils, and Industrial Fluids'
    },
    features: [
      'Multi-stage filtration path for progressive refinement',
      'Quick-release sanitary tri-clamp fittings for fast sieve changes',
      'Vertical space-saving modular frame structure',
      'Pressure gauge monitoring on each column block'
    ],
    whatsappPrompt: 'Hi, I want to inquire about the Paint Filter Machine (Model SEW-PFM-8X).'
  },
  {
    id: 'gear-assembly',
    name: 'Gear Assembly for Tube Pipeline',
    tagline: 'Heavy-Duty Drive Feed Regulator',
    image: '/images/gear_assembly.png',
    shortDesc: 'Heavy-duty multi-sprocket gear drive assembly with shock-dampening vertical springs, engineered for pipe lines and extrusion loops.',
    specifications: {
      'Model': 'SEW-GA-T1',
      'Drive sprockets': '4 Heavy-Duty Machined Gears',
      'Suspension': 'Vertical Heavy Coil Dampening Springs',
      'Shaft Material': 'Hardened Alloy Tool Steel (EN24)',
      'Lubrication': 'Sealed oil bath / grease nipples',
      'Frame Build': 'Welded thick-plate structural steel block'
    },
    features: [
      'Spring-loaded self-adjusting tensioning for pipeline variations',
      'Precision cut sprocket profiles ensure zero chain slippage',
      'Heavy-duty dual pillow block bearings for high load resistance',
      'Fully customizable mounting base and gear ratios'
    ],
    whatsappPrompt: 'Hi, I want to inquire about the Gear Assembly for Tube Pipeline (Model SEW-GA-T1).'
  },
  {
    id: 'screw-conveyor',
    name: 'SS 304 Screw Conveyor',
    tagline: 'Sanitary Auger Powder Transfer System',
    image: '/images/screw_conveyor.png',
    shortDesc: 'Custom fabricated stainless steel screw conveyor flights and augers for sanitation-compliant transfer of powder and chemicals.',
    specifications: {
      'Model': 'SEW-SC-304',
      'Material': 'Stainless Steel 304 (Options: SS316)',
      'Auger Diameter': 'Custom (100mm to 500mm)',
      'Trough Shape': 'U-shaped trough or enclosed tubular housing',
      'Drive Power': '3 HP to 15 HP geared motor options',
      'Flight Pitch': 'Standard pitch helicoid flights'
    },
    features: [
      'Perfect weld finishes avoid product traps and build-up',
      'Handles corrosive material and high moisture food powders',
      'Custom sizing (length, diameter, incline angle) as per site layout',
      'Durable packing gland seals keep bearing areas clean'
    ],
    whatsappPrompt: 'Hi, I want to inquire about the SS 304 Screw Conveyor (Model SEW-SC-304).'
  },
  {
    id: 'ss-tank',
    name: 'SS Tank & Reactors',
    tagline: 'Custom Stainless Steel Storage Vessels',
    image: '/images/ss_tank_actual.png',
    shortDesc: 'Sanitary and industrial grade stainless steel tanks custom fabricated for chemicals, oils, and process mixing.',
    specifications: {
      'Model': 'SEW-SST-V1',
      'Volume Capacity': '5000 Liters (Custom up to 50,000L)',
      'Material Grade': 'Stainless Steel 304 / 316L',
      'Wall Thickness': '4mm to 10mm Shell Plates',
      'Finishing': 'Inner sanitary finish (mirror polished < 0.4μm Ra)',
      'Mount Type': 'Tubular legs with adjustable foot pads'
    },
    features: [
      'Conical or dished bottom options for complete drainage',
      'Equipped with sanitary CIP spray balls and level indicators',
      'Rigorous pressure and dye penetrant testing (DPT) for zero-leak durability',
      'Double-jacketed thermal insulation available for reactors'
    ],
    whatsappPrompt: 'Hi, I want to inquire about custom Stainless Steel Tanks & Reactors (Model SEW-SST-V1).'
  },
  {
    id: 'recoiler',
    name: 'Double Shaft Recoiler Machine',
    tagline: 'High-Tension Sheet Metal Coil Winder',
    image: '/images/recoiler_actual.png',
    shortDesc: 'Tension-synchronized metal sheet and strip winding machine designed for high speed and durability.',
    specifications: {
      'Model': 'SEW-REC-D4',
      'Coil Width Range': '100mm to 1250mm',
      'Max Coil Weight': '5,000 kg (5 Tons)',
      'Winding Speed': '0 - 30 meters/minute loop-synchronized',
      'Expansion Range': '450mm - 520mm manual/hydraulic',
      'Electrical Input': '415V, 50Hz, 3-Phase AC'
    },
    features: [
      'Automatic loop control sensor matches slitting line speed',
      'Adjustable pneumatic tension pads for tight, even coil packs',
      'Heavy-duty hardened tool steel mandrel jaws',
      'Integrated cantilever support arm for heavy load runs'
    ],
    whatsappPrompt: 'Hi, I want to inquire about the Double Shaft Recoiler Machine (Model SEW-REC-D4).'
  },
  {
    id: 'cutting-machine',
    name: 'Heavy-Duty Cutting Machine',
    tagline: 'Industrial Plate & Pipe Cutter',
    image: '/images/cutting_machine.png',
    shortDesc: 'Hydraulically operated cutting machine with precise controls for fast, heavy-duty metal shear jobs.',
    specifications: {
      'Model': 'SEW-CUT-P1',
      'Motor Power': '5 HP / 3.7 kW (415V, 3-Phase)',
      'Shearing Length': 'Up to 2000mm',
      'Blade Material': 'High Carbon High Chromium (HCHC) Steel',
      'Hydraulic Pressure': '140 Bar / Integrated Power Pack',
      'Operation': 'Semi-automatic with foot-pedal control'
    },
    features: [
      'Dual hydraulic cylinders for balanced force distribution',
      'Hardened alloy steel shear blades with 4 cutting edges',
      'Mechanical back-gauge with precision scaling dial',
      'Finger guard safety barrier and overload relief valves'
    ],
    whatsappPrompt: 'Hi, I want to inquire about the Heavy Duty Cutting Machine (Model SEW-CUT-P1).'
  },
  {
    id: 'forged-hammers',
    name: 'Forged Hammers & Tooling Jobwork',
    tagline: 'Heavy-Duty Custom Hammer Blocks',
    image: '/images/forged_hammers.png',
    shortDesc: 'Custom drop-forged and precision-machined hammer links, pins, and tools for crushers and heavy machinery.',
    specifications: {
      'Model': 'SEW-HAM-F1',
      'Material': 'High-Tensile Alloy Tool Steel (EN9, EN24, EN31)',
      'Hardening': 'Induction hardened to 55-60 HRC',
      'Dimension': 'Custom-fabricated as per drawings',
      'Tolerance': 'Precision ground within +/- 0.02mm',
      'Surface Finish': 'Rust-preventative black oxide coating'
    },
    features: [
      'Drop-forged structure provides superior grain flow and strength',
      'Induction-hardened impact faces resist chipping and wear',
      'Precision-bored mounting holes match factory machinery',
      'Dynamic balance checked for vibration-free operations'
    ],
    whatsappPrompt: 'Hi, I want to inquire about Forged Hammers & Custom Tooling Jobwork (Model SEW-HAM-F1).'
  },
  {
    id: 'laser-printing',
    name: 'Industrial Laser Printing Machine',
    tagline: 'High-Speed Metal Marking System',
    image: '/images/laser_printing.png',
    shortDesc: 'Fiber laser marking and engraving machine for high-precision batch printing on metal and plastic components.',
    specifications: {
      'Model': 'SEW-LAS-L2',
      'Laser Power': '30W / 50W Fiber Laser Source',
      'Marking Area': '110mm x 110mm (Options up to 300mm)',
      'Marking Speed': 'Up to 8000 mm/second',
      'Min Line Width': '0.01 mm',
      'Cooling': 'Forced Air Cooling System'
    },
    features: [
      'Long-life fiber laser source (up to 100,000 operational hours)',
      'High-speed digital galvo scanning head for rapid marking',
      'Equipped with red-light pointer for quick alignment previews',
      'Compatible with rotary axis for marking round cylinders'
    ],
    whatsappPrompt: 'Hi, I want to inquire about the Industrial Laser Printing Machine (Model SEW-LAS-L2).'
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
              <div className="product-image-container">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-grid-image"
                />
                <div className="product-image-overlay">
                  <span className="btn-primary detail-btn">
                    View Specifications <ArrowRight size={16} />
                  </span>
                </div>
              </div>

              <div className="product-info">
                <span className="product-tag-model">{product.specifications.Model}</span>
                <h3>{product.name}</h3>
                <p className="product-desc">{product.shortDesc}</p>
                <div className="product-spec-preview">
                  <span className="spec-item"><Cpu size={14} /> {product.specifications.Model}</span>
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
