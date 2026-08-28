export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Residential" | "Public & Commercial" | "Industrial" | "Masterplan";
  area: string;
  year: string;
  location: string;
  image: string;
  gallery: string[];
  description: string;
  scope: string[];
  features: string[];
}

export interface AwardItem {
  year: string;
  title: string;
  category: string;
  organization: string;
  rank?: string;
}

export interface PublicationItem {
  year: string;
  outlet: string;
  project: string;
  issue?: string;
  type: string;
}

export interface OfficeLocation {
  city: string;
  country: string;
  type: string;
  address: string;
  coordinates: string;
}

export const PROJECTS: Project[] = [
  {
    id: "pokrovskoe-private-house",
    title: "Pokrovskoe Residence",
    subtitle: "Private Villa in Pine Forest",
    category: "Residential",
    area: "611 m²",
    year: "2024",
    location: "Moscow Region, RU",
    image: "https://images.prismic.io/kononenko/ajGEQI1P9HI4UlWI_pokrovskoe-private-house-3-3.jpg?auto=format,compress&w=1600&fm=jpeg&q=90",
    gallery: [
      "https://images.prismic.io/kononenko/ajGEQI1P9HI4UlWI_pokrovskoe-private-house-3-3.jpg?auto=format,compress&w=1600&fm=jpeg&q=90",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format,compress&w=1600&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format,compress&w=1600&q=85",
    ],
    description: "An architectural dialogue between sharp horizontal cantilevers and preserved pine trees. Natural sandstone, blackened zinc, and panoramic floor-to-ceiling glass dissolve boundaries between living spaces and natural terrain.",
    scope: ["Concept Architecture", "Interior Architecture", "Landscape Integration", "Working Documentation"],
    features: ["Geothermal climate control", "Acoustically isolated private wing", "Reflective perimeter water mirrors"],
  },
  {
    id: "millenium-park",
    title: "Millenium Private Park",
    subtitle: "Modernist Estate Complex",
    category: "Residential",
    area: "1,360 m²",
    year: "2024",
    location: "Istra Valley, RU",
    image: "https://images.prismic.io/kononenko/ajFvlY1P9HI4UlLH_millenium-park-1.jpg?auto=format,compress&w=1600&fm=jpeg&q=90",
    gallery: [
      "https://images.prismic.io/kononenko/ajFvlY1P9HI4UlLH_millenium-park-1.jpg?auto=format,compress&w=1600&fm=jpeg&q=90",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format,compress&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format,compress&w=1600&q=85",
    ],
    description: "A multi-volume residential estate structured around a central light atrium. Massive structural concrete walls counterbalance lightweight timber louvers, casting dynamic shadow plays throughout sun cycles.",
    scope: ["Masterplan", "Architectural Volumes", "Engineering & Facades", "Supervision"],
    features: ["Double-height gallery atrium", "Cantilevered infinity pool", "Bespoke basalt stone cladding"],
  },
  {
    id: "bolshevik-residential",
    title: "Bolshevik Urban Living",
    subtitle: "Heritage Factory Adaptive Reuse",
    category: "Public & Commercial",
    area: "8,200 m²",
    year: "2023",
    location: "Leningradsky Prospekt",
    image: "https://images.prismic.io/kononenko/ajD8wY1P9HI4UjWj_bolshevik-residential-complex-1.jpg?auto=format,compress&w=1600&fm=jpeg&q=90",
    gallery: [
      "https://images.prismic.io/kononenko/ajD8wY1P9HI4UjWj_bolshevik-residential-complex-1.jpg?auto=format,compress&w=1600&fm=jpeg&q=90",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format,compress&w=1600&q=85",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format,compress&w=1600&q=85",
    ],
    description: "Reinterpreting historic industrial red-brick morphology into high-end residential lofts and civic promenades. Minimalist Corten steel insertions honor the site's rich manufacturing pedigree.",
    scope: ["Heritage Preservation", "Adaptive Masterplan", "Facade Engineering", "Public Courtyard Design"],
    features: ["Preserved 1902 brickwork", "Corten steel bridges", "Subterranean art gallery"],
  },
  {
    id: "kns-stolbovo",
    title: "KNS Stolbovo Infrastructure",
    subtitle: "Sculptural Civic Utility Facility",
    category: "Industrial",
    area: "3,345 m²",
    year: "2023",
    location: "New Moscow",
    image: "https://images.prismic.io/kononenko/ajEFXI1P9HI4Ujbv_kns-stolbovo-boiler-1.jpg?auto=format,compress&w=1600&fm=jpeg&q=90",
    gallery: [
      "https://images.prismic.io/kononenko/ajEFXI1P9HI4Ujbv_kns-stolbovo-boiler-1.jpg?auto=format,compress&w=1600&fm=jpeg&q=90",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format,compress&w=1600&q=85",
    ],
    description: "Elevating municipal infrastructure into sculptural public art. Perforated anodized aluminum screens create a rhythmic monolithic envelope that breathes while concealing heavy technical machinery.",
    scope: ["Industrial Architecture", "Kinetic Perforated Facade", "Structural Engineering"],
    features: ["Integrated acoustic baffles", "Low-carbon concrete shell", "Dynamic nighttime illumination"],
  },
  {
    id: "kotelnaya-kinetics",
    title: "Kotelnaya Kinetics",
    subtitle: "High-Capacity Thermal Center",
    category: "Industrial",
    area: "16,488 m²",
    year: "2024",
    location: "TechnoPark District",
    image: "https://images.prismic.io/kononenko/aip70alQnVZVEM1X_kotelnaya-kinetics-3.jpg?auto=format,compress&w=1600&fm=jpeg&q=90",
    gallery: [
      "https://images.prismic.io/kononenko/aip70alQnVZVEM1X_kotelnaya-kinetics-3.jpg?auto=format,compress&w=1600&fm=jpeg&q=90",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format,compress&w=1600&q=85",
    ],
    description: "A progressive civic utility powerhouse framed as an architectural landmark. Rhythmically folded facade panels deflect wind currents and reduce thermal footprint across vast regional operations.",
    scope: ["Architecture Concept", "Kinetic Envelope", "Lifecycle Optimization"],
    features: ["Heat-recovery ventilation facade", "Pre-cast architectural concrete", "Zero-emission certified layout"],
  },
  {
    id: "vision-mansion",
    title: "Vision Mansion",
    subtitle: "Hillside Cantilever Sanctuary",
    category: "Residential",
    area: "991 m²",
    year: "2023",
    location: "Barvikha, RU",
    image: "https://images.prismic.io/kononenko/aip0ZqlQnVZVEMsw_vision-mansion-private-2.jpg?auto=format,compress&w=1600&fm=jpeg&q=90",
    gallery: [
      "https://images.prismic.io/kononenko/aip0ZqlQnVZVEMsw_vision-mansion-private-2.jpg?auto=format,compress&w=1600&fm=jpeg&q=90",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format,compress&w=1600&q=85",
    ],
    description: "Perched dramatically over a sloping pine forest, the mansion uses a 14-meter post-tensioned cantilever to hover above the terrain, offering uninterrupted panoramic forest vistas.",
    scope: ["Masterplan & Architecture", "Engineering Calculations", "Interior Architecture"],
    features: ["14m structural cantilever", "Integrated geothermal wells", "Automated operable glass facade"],
  },
  {
    id: "almaty-hotelornament-stone",
    title: "Almaty Hotel & Spa",
    subtitle: "Luxury Alpine Mountain Resort",
    category: "Public & Commercial",
    area: "58,079 m²",
    year: "2025",
    location: "Tian Shan Foothills, KZ",
    image: "https://images.prismic.io/kononenko/aiptnKlQnVZVEMlW_almaty-hotelornament-stone-4.jpg?auto=format,compress&w=1600&fm=jpeg&q=90",
    gallery: [
      "https://images.prismic.io/kononenko/aiptnKlQnVZVEMlW_almaty-hotelornament-stone-4.jpg?auto=format,compress&w=1600&fm=jpeg&q=90",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format,compress&w=1600&q=85",
    ],
    description: "Carved into the rugged mountain topography using local granite and charred Siberian larch. The stepped terrace terraces replicate geological fault lines while framing alpine glaciers.",
    scope: ["Masterplan", "Hospitality Architecture", "Wellness Concept", "Interior Direction"],
    features: ["Thermal springs spa sanctuary", "Seismic isolation foundation", "Passivhaus envelope design"],
  },
  {
    id: "eli-house-corner-plot",
    title: "Eli House Corner Plot",
    subtitle: "Sculpted Compact Monolith",
    category: "Residential",
    area: "435 m²",
    year: "2024",
    location: "Zelenograd, RU",
    image: "https://images.prismic.io/kononenko/aikwFAeQX7-eXIgS_eli-house-corner-plot-1.jpg?auto=format,compress&w=1600&fm=jpeg&q=90",
    gallery: [
      "https://images.prismic.io/kononenko/aikwFAeQX7-eXIgS_eli-house-corner-plot-1.jpg?auto=format,compress&w=1600&fm=jpeg&q=90",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format,compress&w=1600&q=85",
    ],
    description: "Maximizing privacy on an exposed suburban corner plot through inward-facing courtyard geometry. Monolithic board-formed concrete and warm oak slats create intimate sanctuaries.",
    scope: ["Architectural Design", "Interior Detailing", "Custom Joinery & Lighting"],
    features: ["Internal zen garden courtyard", "Hidden rainwater recycling", "Shadow-gap detailing"],
  },
];

export const PILLARS = [
  {
    num: "01",
    title: "Contextual Clarity",
    desc: "Architecture derived directly from topography, climate data, and socio-cultural memory. Every line has geographic purpose.",
  },
  {
    num: "02",
    title: "Material Honesty",
    desc: "Raw concrete, tactile timber, oxidized steel, and quarried stone allowed to age with dignity without superficial ornamentation.",
  },
  {
    num: "03",
    title: "Passive Sustainability",
    desc: "Energy modeling and solar path analysis embedded from initial sketch, slashing operational carbon by up to 48%.",
  },
  {
    num: "04",
    title: "Structural Precision",
    desc: "Engineering and architectural vision conceived simultaneously, enabling audacious cantilevers and razor-thin sightlines.",
  },
];

export const SERVICES = [
  {
    num: "01",
    title: "Concept & Masterplan",
    subtitle: "From raw site analysis to bold spatial strategy",
    items: ["Volumetric & density studies", "Environmental & solar mapping", "Typology experimentation", "Investment viability models"],
  },
  {
    num: "02",
    title: "Architectural & Facade Design",
    subtitle: "Sculptural forms engineered for timeless resilience",
    items: ["Bespoke envelope systems", "Passive solar optimization", "Material sourcing & mockups", "Parametric pattern modeling"],
  },
  {
    num: "03",
    title: "Working Documentation & BIM",
    subtitle: "Uncompromising execution rigor down to 1mm tolerance",
    items: ["LOD 400 BIM modeling", "Structural coordination", "Clash detection & MEP routing", "Regulatory permit dossiers"],
  },
  {
    num: "04",
    title: "CGI & Cinematic Visualizations",
    subtitle: "Photorealistic spatial atmosphere and sensory light studies",
    items: ["Unreal Engine real-time tours", "Cinematic 8K renders", "Day-to-night lighting studies", "Marketing narrative assets"],
  },
];

export const AWARDS: AwardItem[] = [
  {
    year: "2025",
    title: "Kukha Design Award",
    category: "Public Building Architecture (1st Place)",
    organization: "Global Architecture Forum",
    rank: "Winner",
  },
  {
    year: "2025",
    title: "Kukha Interior Trophy",
    category: "Completed Apartment Interior > 60 m²",
    organization: "Kukha Design Union",
    rank: "1st Place",
  },
  {
    year: "2024",
    title: "Addawards International",
    category: "Space & Urban Integrity — Garden Ring",
    organization: "Addawards Europe",
    rank: "Grand Prix",
  },
  {
    year: "2023",
    title: "Architizer A+ Awards",
    category: "Residential Villa of the Year Finalist",
    organization: "Architizer NY",
    rank: "Honoree",
  },
  {
    year: "2023",
    title: "World Architecture Festival",
    category: "Future Infrastructure & Utilities",
    organization: "WAF Singapore",
    rank: "Shortlisted",
  },
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    year: "2025",
    outlet: "Archi.Ru",
    project: "Club House Little on Paveletskaya",
    type: "Featured Architectural Monograph",
  },
  {
    year: "2024",
    outlet: "Interior + Design",
    project: "1917 Heritage Silk Mill Sales Pavilion",
    issue: "Vol. 18 / Autumn",
    type: "Cover Feature",
  },
  {
    year: "2024",
    outlet: "LoveThatDesign",
    project: "A101 Futuristic Corporate Campus",
    type: "Global Project Feature",
  },
  {
    year: "2024",
    outlet: "Home & Garden International",
    project: "Bolshevik Landscape Integration",
    type: "Editorial Review",
  },
  {
    year: "2024",
    outlet: "Beautiful Apartments",
    project: "Minimalist Stone Penthouse",
    issue: "No. 5 (216)",
    type: "Profile Spotlight",
  },
];

export const STATS = [
  { value: "2011", label: "Year Founded", note: "Over 14+ years of visionary design" },
  { value: "490+", label: "Completed Projects", note: "Across Europe, CIS & Middle East" },
  { value: "80+", label: "International Awards", note: "Kukha, Addawards, Architizer" },
  { value: "40,000", label: "m² Designed Yearly", note: "Living, civic and industrial spaces" },
];

export const OFFICES: OfficeLocation[] = [
  { city: "Milano", country: "Italy", type: "Design Studio & HQ", address: "Via Giacomo Leopardi 14, 20123", coordinates: "45.4642° N, 9.1900° E" },
  { city: "Amsterdam", country: "Netherlands", type: "Sustainable Engineering Hub", address: "Keizersgracht 421, 1016 EK", coordinates: "52.3676° N, 4.9041° E" },
  { city: "Rome", country: "Italy", type: "Heritage & Conservation Lab", address: "Via di Maydwell 45, 00186", coordinates: "41.9028° N, 12.4964° E" },
  { city: "Rotterdam", country: "Netherlands", type: "Computational BIM Studio", address: "Groenveldlaan 78, 3011 WN", coordinates: "51.9244° N, 4.4777° E" },
];
