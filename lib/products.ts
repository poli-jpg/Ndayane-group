// ---------------------------------------------------------------------------
// DONNÉES PRODUITS — NDAYANE GROUP
// ---------------------------------------------------------------------------
// Stockage simple en TypeScript pour ce site vitrine. La structure ci-dessous
// est volontairement propre et normalisée afin de pouvoir, plus tard,
// alimenter les mêmes champs depuis Supabase sans rien changer côté UI.
//
// ⚠️ Aucun prix n'est inventé : `priceOnRequest` reste `true` tant que
// Ndayane Group ne fournit pas de tarif officiel.
// ⚠️ Les visuels sont des illustrations vectorielles de substitution
// (voir components/DoorArt.tsx) en attendant les photos HD officielles.
// ---------------------------------------------------------------------------

export type DoorCategory =
  | "blindees"
  | "entree"
  | "interieures"
  | "modernes"
  | "decoratives"
  | "sur-mesure";

export const CATEGORIES: { value: DoorCategory | "toutes"; label: string }[] = [
  { value: "toutes", label: "Toutes" },
  { value: "blindees", label: "Portes blindées" },
  { value: "entree", label: "Portes d'entrée" },
  { value: "interieures", label: "Portes intérieures" },
  { value: "modernes", label: "Portes modernes" },
  { value: "decoratives", label: "Portes décoratives" },
  { value: "sur-mesure", label: "Sur mesure" },
];

export interface Product {
  id: string;
  name: string;
  slug: string;
  reference?: string;
  description: string;
  longDescription: string;
  category: DoorCategory;
  material?: string;
  finish?: string;
  dimensions?: string;
  images: number; // nombre d'emplacements photo prévus (voir DoorArt)
  photos?: string[]; // chemins réels dans /public, ex: ["/images/portes/alto-blindee-1.jpg"]. Si absent, l'illustration DoorArt est utilisée.
  featured?: boolean;
  available: boolean;
  priceOnRequest: true;
  characteristics: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Modern Horizontal",
    slug: "alto-blindee",
    reference: "NG-BL-01",
    description: "Porte blindée renforcée, conçue pour une sécurité maximale.",
    longDescription:
      "Panneau principal gris anthracite structuré avec bandes horizontales en alu/inox et panneau central vertical encadrant la zone de verrouillage.Spots LED intégrés dans la traverse supérieure du cadre pour illuminer la façade de la porte.",
    category: "blindees",
    material: "Acier renforcé",
    finish: "Laqué mat",
    dimensions: "Sur devis",
    images: 4,
    photos: ["/images/portes/porte1.jpeg"], 
    featured: true,
    available: true,
    priceOnRequest: true,
    characteristics: [
      "Structure renforcée multipoint",
      "Finition laquée mate",
      "Conçue pour un usage résidentiel",
    ],
  },
  {
    id: "p2",
    name: "Porte de sécurité classique",
    slug: "kalis-prestige",
    reference: "NG-BL-02",
    description: "Porte blindée haut de gamme au design épuré.",
    longDescription:
      "Panneau principal en placage bois chaleureux structuré en deux grands caissons à moulures en relief (section supérieure et section inférieure).",
    category: "blindees",
    material: "Bois",
    finish: "Effet métal brossé",
    dimensions: "Sur devis",
    images: 3,
    photos: ["/images/portes/porte3.jpeg"],
    featured: true,
    available: true,
    priceOnRequest: true,
    characteristics: [
      "Design épuré et architectural",
      "Effet métal brossé",
      "Poignée et serrure haut de gamme",
    ],
  },
  {
    id: "p3",
    name: "Modern Black & White Stripe",
    slug: "horizon-entree",
    reference: "NG-EN-01",
    description: "Porte sur mesure, lignes franches et accueillantes.",
    longDescription:
      "Motif graphique à larges rayures horizontales bicolores offrant un contraste visuel fort et moderne.Grande poignée bâton de maréchal rectangulaire verticale   noire mate, complétée par une rosace de serrure carrée en métal argenté avec clés engagées.",
    category: "sur-mesure",
    material: "Aluminium",
    finish: "Bicolore",
    dimensions: "Sur devis",
    images: 3,
    photos: ["/images/portes/porte4.jpeg"],
    available: true,
    priceOnRequest: true,
    characteristics: ["Lignes contemporaines", "Finition bicolore", "Isolation renforcée"],
  },
  {
    id: "p4",
    name: "Modern Full Vertical Slats",
    slug: "nova-entree",
    reference: "NG-EN-02",
    description: "Porte d'entrée élégante avec ligne verticale signature.",
    longDescription:
      "Panneau principal entièrement habillé d'un motif à rainures et cannelures verticales régulières sur toute la hauteur, offrant une texture architecturale épurée.. Un modèle qui s'intègre aussi bien dans un style moderne que traditionnel revisité.",
    category: "entree",
    material: "Acier et bois composite",
    finish: "Bois naturel",
    dimensions: "Sur devis",
    images: 3,
    photos: ["/images/portes/porte9.jpeg"],
    available: true,
    priceOnRequest: true,
    characteristics: ["Ligne verticale signature", "Finition bois naturel", "Poignée intégrée"],
  },
  {
    id: "p5",
    name: "Modern Horizontal Slats",
    slug: "lumis-interieure",
    reference: "NG-IN-01",
    description: "Porte intérieure légère, design minimaliste.",
    longDescription:
      " Panneau central recouvert d'un motif strié à fines rainures horizontales régulières, encadré par un profilé lisse.Longue poignée bâton de maréchal carrée en métal foncé, disposée verticalement.",
    category: "interieures",
    material: "Bois",
    finish: "Blanc satiné",
    dimensions: "Sur devis",
    images: 2,
    photos: ["/images/portes/porte8.jpeg"],
    available: true,
    priceOnRequest: true,
    characteristics: ["Design minimaliste", "Finition satinée", "Légère et silencieuse"],
  },
  {
    id: "p6",
    name: "Modern Two-Tone Vertical",
    slug: "ebene-interieure",
    reference: "NG-IN-02",
    description: "Porte intérieure au ton sombre et raffiné.",
    longDescription:
      "Partie supérieure habillée de fines rainures verticales en bois clair, partie inférieure structurée par une alternance de bandes horizontales lisses gris anthracite et bois clair.",
    category: "interieures",
    material: "Bois",
    finish: "Chêne foncé",
    dimensions: "Sur devis",
    images: 2,
    photos: ["/images/portes/porte7.jpeg"],
    available: true,
    priceOnRequest: true,
    characteristics: ["Ton chêne foncé", "Raffinement discret", "Adaptée à tous les intérieurs"],
  },
  {
    id: "p7",
    name: "Modern Diamond Pyramid",
    slug: "cubik-moderne",
    reference: "NG-MO-01",
    description: "Gris anthracite mat métallisé avec accessoires inox/argentés.",
    longDescription:
      "Panneau principal entièrement recouvert d'une texture tridimensionnelle à motifs pointe-de-diamant (pyramides 3D), traversé verticalement par un montant lisse marquant la zone de verrouillage.",
    category: "modernes",
    material: "Aluminium",
    finish: "Gris anthracite",
    dimensions: "Sur devis",
    images: 3,
    photos: ["/images/portes/porte11.jpeg"],
    featured: true,
    available: true,
    priceOnRequest: true,
    characteristics: ["Volumes géométriques", "Gris anthracite mat", "Structure aluminium"],
  },
  {
    id: "p8",
    name: " Luxury Marble Effect Series",
    slug: "relief-decorative",
    reference: "NG-DE-01",
    description: "Porte décorative avec motifs en relief.",
    longDescription:
      "Revêtement élégant imitant le marbre blanc Calacatta, séparé par un insert vertical vitré ou métallique sombre au niveau de la poignée.",
    category: "decoratives",
    material: "Acier",
    finish: "Motifs en relief",
    dimensions: "Sur devis",
    images: 2,
    photos: ["/images/portes/porte5.jpeg"],
    available: true,
    priceOnRequest: true,
    characteristics: ["Motifs en relief", "Jeu de lumière", "Fabrication soignée"],
  },
  {
    id: "p9",
    name: "Modern Horizontal",
    slug: "atelier-sur-mesure",
    reference: "NG-SM-01",
    description: "Conception entièrement personnalisée selon votre projet.",
    longDescription:
      "Panneau principal gris anthracite structuré avec bandes horizontales en alu/inox et panneau central vertical encadrant la zone de verrouillage.Spots LED intégrés dans la traverse supérieure du cadre pour illuminer la façade de la porte.",
    category: "sur-mesure",
    material: "Selon projet",
    finish: "Selon projet",
    dimensions: "Sur mesure",
    images: 2,
    photos: ["/images/portes/porte6.jpeg"],
    available: true,
    priceOnRequest: true,
    characteristics: ["Conception personnalisée", "Accompagnement dédié", "Matériaux au choix"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}
