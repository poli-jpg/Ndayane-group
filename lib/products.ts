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
    name: "Modern Horizontal Line with Integrated Lighting",
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
    name: "Kalis Prestige",
    slug: "kalis-prestige",
    reference: "NG-BL-02",
    description: "Porte blindée haut de gamme au design épuré.",
    longDescription:
      "Kalis Prestige associe une structure sécurisée à un design résolument contemporain. Une porte pensée pour les entrées qui doivent en imposer, sans jamais paraître froides.",
    category: "blindees",
    material: "Acier",
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
    name: "Horizon Entrée",
    slug: "horizon-entree",
    reference: "NG-EN-01",
    description: "Porte d'entrée moderne, lignes franches et accueillantes.",
    longDescription:
      "Une porte d'entrée pensée pour donner le ton dès le premier regard : des lignes franches, une allure moderne et un accueil chaleureux pour votre maison.",
    category: "entree",
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
    name: "Nova Entrée",
    slug: "nova-entree",
    reference: "NG-EN-02",
    description: "Porte d'entrée élégante avec ligne verticale signature.",
    longDescription:
      "Nova joue la carte de la sobriété élégante avec une ligne verticale qui structure la façade. Un modèle qui s'intègre aussi bien dans un style moderne que traditionnel revisité.",
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
    name: "Lumis Intérieure",
    slug: "lumis-interieure",
    reference: "NG-IN-01",
    description: "Porte intérieure légère, design minimaliste.",
    longDescription:
      "Pensée pour les espaces intérieurs qui recherchent la lumière et la simplicité, Lumis propose un tracé minimaliste qui s'efface au profit de votre intérieur.",
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
    name: "Ébène Intérieure",
    slug: "ebene-interieure",
    reference: "NG-IN-02",
    description: "Porte intérieure au ton sombre et raffiné.",
    longDescription:
      "Un ton sombre et raffiné pour les intérieurs qui assument le contraste. Ébène habille vos pièces d'une élégance discrète et affirmée.",
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
    name: "Cubik Moderne",
    slug: "cubik-moderne",
    reference: "NG-MO-01",
    description: "Porte moderne aux volumes géométriques affirmés.",
    longDescription:
      "Cubik s'appuie sur des volumes géométriques nets pour affirmer une identité architecturale forte, taillée pour les façades contemporaines.",
    category: "modernes",
    material: "Aluminium",
    finish: "Gris anthracite",
    dimensions: "Sur devis",
    images: 3,
    photos: ["/images/portes/porte4.jpeg"],
    featured: true,
    available: true,
    priceOnRequest: true,
    characteristics: ["Volumes géométriques", "Gris anthracite mat", "Structure aluminium"],
  },
  {
    id: "p8",
    name: "Reliëf Décorative",
    slug: "relief-decorative",
    reference: "NG-DE-01",
    description: "Porte décorative avec motifs en relief.",
    longDescription:
      "Reliëf met en scène un jeu de motifs en relief qui capte la lumière tout au long de la journée, pour une entrée qui a du caractère.",
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
    name: "Atelier Sur Mesure",
    slug: "atelier-sur-mesure",
    reference: "NG-SM-01",
    description: "Conception entièrement personnalisée selon votre projet.",
    longDescription:
      "Chaque projet est unique. Le modèle Atelier est un point de départ : dimensions, matériaux, finitions et niveau de sécurité sont définis avec vous selon les besoins de votre habitation.",
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
