export const PLOTS_DATA = Array.from({ length: 100 }, (_, i) => {
  const id = i + 1;
  let status = 'Available';
  if ([3, 7, 12, 15, 24, 35, 42, 58, 67, 88].includes(id)) {
    status = 'Reserved';
  } else if ([1, 2, 4, 5, 8, 9, 10, 18, 20, 21, 29, 30, 45, 50, 60, 70, 75, 80, 90, 95].includes(id)) {
    status = 'Sold';
  }
  
  const portion = id <= 75 ? 'Upper Portion (6.25 Acres)' : 'Lower Portion (2.0 Acres)';
  
  return {
    id,
    number: `Plot ${id}`,
    size: '250 Sq. Yards',
    dimensions: '30 × 75 Feet',
    status,
    portion,
    price: status === 'Available' ? '₹45,000 per Sq. Yd.' : 'Contact for pricing'
  };
});

export const CONSTRUCTION_STAGES = [
  {
    stage: 1,
    title: "Excavation & Ground Prep",
    description: "Clearing, leveling, and digging foundations based on geotechnical soil assessment.",
    materials: ["Heavy machinery", "Anti-termite treatment", "River Sand layer"],
    progress: 12
  },
  {
    stage: 2,
    title: "Foundation & Footing",
    description: "Reinforcing steel grids and casting premium grade concrete for heavy-duty load bearing.",
    materials: ["M25 Grade Concrete", "Fe550 TMT Steel Bars", "Robo Sand"],
    progress: 25
  },
  {
    stage: 3,
    title: "RCC Framework",
    description: "Casting high-integrity columns, beams, and overhead structural slabs.",
    materials: ["Premium Cement", "Plywood shuttering", "Vibrators for solid compaction"],
    progress: 45
  },
  {
    stage: 4,
    title: "Brick Masonry & Walls",
    description: "Erecting interior and exterior walls using high-grade red clay bricks with flawless alignment.",
    materials: ["Premium Red Bricks", "Cement mortar 1:6 ratio", "DPC waterproofing layer"],
    progress: 60
  },
  {
    stage: 5,
    title: "Plumbing & Conduits",
    description: "Routing copper wiring grids and high-pressure water/drainage pathways into the core slab and brickwork.",
    materials: ["Concealed copper wiring (Finolex)", "CPVC & PVC Pipes (Ashirvad)", "Modular switches"],
    progress: 75
  },
  {
    stage: 6,
    title: "Interior Finishes",
    description: "Flawless wall plastering, designer false ceilings, vitrified tiles, and premium granite setups.",
    materials: ["Double charged Vitrified tiles", "Italian Marble options", "Gypsum board false ceilings"],
    progress: 90
  },
  {
    stage: 7,
    title: "Exterior Elegance",
    description: "Premium texture paint coat, modern architectural facade panel installations, and landscaping.",
    materials: ["Weather-proof emulsion", "Stone cladding accent walls", "UPVC framed windows"],
    progress: 100
  }
];

export const PACKAGES = [
  {
    id: "standard",
    name: "Standard Residential",
    priceMin: 1600,
    priceMax: 1800,
    specifications: [
      "Ultratech or ACC cement",
      "Fe500 grade TMT Steel",
      "Red clay bricks walls",
      "Double charged vitrified flooring tiles (₹60/sqft limit)",
      "Granite kitchen platform & stainless steel sink",
      "Finolex wiring & Anchor switches",
      "Ashirvad CPVC & Supreme PVC plumbing pipes",
      "Asian Paint internal tractor emulsion & external Apex paints"
    ]
  },
  {
    id: "premium",
    name: "Premium Residential",
    priceMin: 1900,
    priceMax: 2200,
    specifications: [
      "Ultratech Premium cement",
      "Fe550 grade High-Ductility Steel",
      "Red clay bricks walls",
      "Premium vitrified flooring / Italian marble trim (₹120/sqft limit)",
      "Quartz / Premium Granite kitchen & top-tier sink",
      "Havells FRLS wiring & Legrand modular switches",
      "Jaguar bathroom fittings & Geberit internal wall cisterns",
      "Asian Paint Royal Silk emulsion with luxury wall textures"
    ]
  },
  {
    id: "commercial",
    name: "Commercial Grade",
    priceMin: 2200,
    priceMax: 2500,
    specifications: [
      "Ready Mix Concrete (RMC) M30 / M35 Grade",
      "High capacity load-bearing column framework",
      "Solid concrete block internal partition walls",
      "Heavy duty anti-skid floor tiles or polished granite slab steps",
      "Fire-resistant LSZH copper wiring throughout",
      "Industrial electrical control boards & safety breakers",
      "Commercial class drainage systems & stainless steel risers",
      "Toughened glass facade styling and structural glazing"
    ]
  }
];

export const PROPERTY_GALLERY = [
  {
    id: "prop-1",
    title: "KNS Premium Villa Project",
    location: "Ganapatiguda, Patancheru Mandal",
    type: "Premium Plot Community",
    area: "8.25 Acres Total",
    status: "Active Bookings Open",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
    tags: ["Swimming Pool", "Clubhouse", "Parks", "Secured Gated Community"]
  },
  {
    id: "prop-2",
    title: "Raghavendra Multi-Family Residence",
    location: "Kondapur, Hyderabad",
    type: "Premium Apartment Complex",
    area: "1,650 Sq.Ft each 3BHK",
    status: "Under Construction",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
    tags: ["East-facing", "Prime Location", "False Ceilings", "10 units total"]
  },
  {
    id: "prop-3",
    title: "The Modern Oasis Duplex",
    location: "Kondapur Hub",
    type: "Independent Luxury House",
    area: "3,200 Sq.Ft built-up",
    status: "Completed & Delivered",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    tags: ["Modular Kitchen", "Internal Staircase", "Luxury Wardrobes", "Turnkey Handover"]
  }
];