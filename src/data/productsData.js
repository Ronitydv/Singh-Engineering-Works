export const productsData = [
  // --- MACHINERY CATEGORY ---
  {
    id: 'paint-filter',
    category: 'machinery',
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
    id: 'recoiler',
    category: 'machinery',
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
    category: 'machinery',
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
    id: 'tube-rolling-mill',
    category: 'machinery',
    name: 'Automatic Tube Rolling Mill',
    tagline: 'Heavy-Duty Steel Profile Forming Line',
    image: '/images/tube_rolling_mill.png',
    shortDesc: 'High-speed roll forming machinery designed to shape and seam-weld high-durability round and square metal tubes.',
    specifications: {
      'Model': 'SEW-TRM-80',
      'Rolling Speed': '20 - 100 meters/minute',
      'Tube Diameter': '12mm to 80mm OD',
      'Wall Thickness': '0.5mm to 3.0mm Mild Steel / SS',
      'Main Drive Power': '30 HP / 22 kW AC Motor',
      'Control Console': 'Siemens PLC Touchscreen Panel'
    },
    features: [
      'Multi-stage hardened tool steel forming rollers for uniform tube thickness',
      'High-frequency solid-state induction welder integrated',
      'Synchronized computerized flying friction cutting saw',
      'Precision sizing heads ensure tight outer diameter tolerances'
    ],
    whatsappPrompt: 'Hi, I want to inquire about the Automatic Tube Rolling Mill (Model SEW-TRM-80).'
  },
  {
    id: 'scrap-grinder',
    category: 'machinery',
    name: 'Plastic Scrap Grinding Machine',
    tagline: 'Heavy-Duty Waste Crusher',
    image: '/images/scrap_grinder.png',
    shortDesc: 'Heavy-duty scrap grinder with dynamically balanced rotor knives for fast plastic granulation and recycling.',
    specifications: {
      'Model': 'SEW-SGR-24',
      'Rotor Diameter': '24 inches / 610mm',
      'Drive Power': '15 HP Geared Motor',
      'Output Capacity': '500 kg/hour',
      'Knife Material': 'High Carbon High Chromium Steel',
      'Screen Size': '12mm (Customizable 8-20mm)'
    },
    features: [
      'Staggered rotor design reduces power peak spikes and noise',
      'Heavy-duty dual flywheels ensure stable grinding force',
      'Pneumatically-assisted screen cradle for fast cleanout',
      'Hardened steel cutter pocket blocks for wear protection'
    ],
    whatsappPrompt: 'Hi, I want to inquire about the Plastic Scrap Grinding Machine (Model SEW-SGR-24).'
  },
  {
    id: 'ink-mixer',
    category: 'machinery',
    name: 'Industrial Ink Mixing Machine',
    tagline: 'High-Shear Liquid Blender',
    image: '/images/ink_mixer.png',
    shortDesc: 'High-shear impeller ink mixer designed for printing liquids, solvent dispersion, and viscosity control.',
    specifications: {
      'Model': 'SEW-IM-1000',
      'Vessel Capacity': '1000 Liters working volume',
      'Speed Range': '0 - 1440 RPM variable frequency',
      'Shaft Material': 'Solid Stainless Steel 316',
      'Lift Height': '900mm motorized hydraulic lift',
      'Impeller Type': 'Cowles dispersion blade (350mm)'
    },
    features: [
      'Viscosity load sensing automatically increases torque outputs',
      'Explosion-proof motor and control boxes for solvent safety',
      'Double-shaft option with anchor scraping scraper blades',
      'Clamping system holds portable mixing containers firmly'
    ],
    whatsappPrompt: 'Hi, I want to inquire about the Industrial Ink Mixing Machine (Model SEW-IM-1000).'
  },
  {
    id: 'hydraulic-uncoiler',
    category: 'machinery',
    name: 'Hydraulic Decoiler Machine',
    tagline: 'Heavy-Duty Strip Coil Feeder',
    image: '/images/hydraulic_uncoiler.png',
    shortDesc: 'Pneumatic tensioned hydraulic decoiler mandrel line designed to feed coil material into press lines.',
    specifications: {
      'Model': 'SEW-UNC-5T',
      'Coil Weight': '5,000 kg (5 Tons) Capacity',
      'Mandrel Range': '460mm to 520mm',
      'Drive System': 'Hydraulic pump motor (5 HP)',
      'Loop Sensing': 'Limit switch / photo-sensor arm',
      'Coil Width': 'Max 600mm'
    },
    features: [
      'Hydraulic expansion mandrel jaws lock inner coil diameters',
      'Snubber arm with rubber roller keeps outer coils wound',
      'Loop arm switch coordinates speed matching with feeders',
      'Self-centering coil loading base plates'
    ],
    whatsappPrompt: 'Hi, I want to inquire about the Hydraulic Decoiler Machine (Model SEW-UNC-5T).'
  },
  {
    id: 'carton-machine',
    category: 'machinery',
    name: 'Carton Box Slotting Machine',
    tagline: 'Rotary Box Creaser & Shearer',
    image: '/images/carton_machine.png',
    shortDesc: 'Precision slotting and creasing machine for corrugated sheet processing and box manufacturing.',
    specifications: {
      'Model': 'SEW-CS-300',
      'Sheet Feed Width': 'Max 2400mm',
      'Working Speed': '80 sheets/minute',
      'Flute Processing': 'A, B, C, E flutes corrugated board',
      'Blade Thickness': '7mm alloy steel slotting knives',
      'Adjustment': 'Manual phase and axial scaling control'
    },
    features: [
      'Dual feed rollers with rubber coatings prevent crush damage',
      'Integrated slotting, creasing, and corner cutting blades',
      'Quick-lock blade hubs for fast box dimension change',
      'Heavy-duty cast iron body frame eliminates vibrations'
    ],
    whatsappPrompt: 'Hi, I want to inquire about the Carton Box Slotting Machine (Model SEW-CS-300).'
  },

  // --- COMPONENTS CATEGORY ---
  {
    id: 'ss-tank',
    category: 'components',
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
    id: 'gear-assembly',
    category: 'components',
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
    category: 'components',
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
    id: 'forged-hammers',
    category: 'components',
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
    category: 'components',
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
  },
  {
    id: 'custom-fabrication',
    category: 'components',
    name: 'Custom Fabrication & Jobwork',
    tagline: 'Turnkey Machine Fabrication Services',
    image: '/images/machinery.jpg',
    shortDesc: 'Full-service machining and custom fabrication jobwork from prototype drafting to final machine assembly.',
    specifications: {
      'Model': 'SEW-CUS-F1',
      'Machining Services': 'CNC Turning, Milling, Boring, and Drilling',
      'Welding Grade': 'TIG / MIG / Arc welding (ASME qualified)',
      'Materials': 'Stainless Steel (SS), Mild Steel (MS), Brass, Aluminum',
      'Quality Check': 'Rigorous dimensional inspection and non-destructive testing',
      'Assembly Capacity': 'Up to 15 Tons single machine block'
    },
    features: [
      'Custom assembly shop layout for testing active lines before shipping',
      'CAD layout blueprint design provided for customer review',
      'On-time delivery with high dimensional accuracy matching drawings',
      'GST-registered and fully insured contract work manufacturing'
    ],
    whatsappPrompt: 'Hi, I want to inquire about Custom Machine Fabrication & Toolroom Jobwork (Model SEW-CUS-F1).'
  },
  {
    id: 'pneumatic-brake',
    category: 'components',
    name: 'Pneumatic Tension Brake Caliper',
    tagline: 'Heavy-Duty Coil Tension Regulator',
    image: '/images/pneumatic_brake.png',
    shortDesc: 'High-torque pneumatic disc brake caliper assembly for slitting line scrap winders and sheet decoiling tension control.',
    specifications: {
      'Model': 'SEW-PTB-12',
      'Braking Force': 'Up to 12,000 N static force',
      'Air Pressure': 'Max 6 Bar operational feed',
      'Piston Count': 'Dual opposing copper cylinders',
      'Disc Compatibility': 'Ventilated cast iron discs (thickness 20-30mm)',
      'Weight Caliper': '18.5 kg solid frame'
    },
    features: [
      'Rapid thermal dissipation pad backing prevents glazing',
      'Sensitive pressure-to-torque linear matching for fine tensioning',
      'Quick-change wear-indicator brake linings',
      'Corrosion resistant electro-coated frame housing'
    ],
    whatsappPrompt: 'Hi, I want to inquire about the Pneumatic Tension Brake Caliper (Model SEW-PTB-12).'
  }
]
