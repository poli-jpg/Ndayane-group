// ---------------------------------------------------------------------------
// CONFIGURATION CENTRALE — NDAYANE GROUP
// ---------------------------------------------------------------------------
// Toutes les informations d'entreprise (coordonnées, réseaux sociaux, numéro
// WhatsApp) vivent ici, et nulle part ailleurs, afin qu'une seule modification
// suffise à mettre à jour tout le site.
//
// ⚠️ À CONFIRMER PAR LE CLIENT avant mise en ligne : le numéro WhatsApp,
// l'adresse, l'email et les liens Instagram / Facebook sont des placeholders
// tant qu'ils n'ont pas été fournis officiellement par Ndayane Group.
// ---------------------------------------------------------------------------

export const COMPANY_NAME = "Ndayane Group";

export const COMPANY_TAGLINE =
  "Portes blindées, sécurisées et haut de gamme";

// Format international, sans "+" ni espaces (ex: 221771234567)
// TODO(client): confirmer le numéro WhatsApp officiel avant publication.
export const WHATSAPP_NUMBER = "221774511216";

// TODO(client): confirmer le numéro de téléphone officiel.
export const PHONE_NUMBER = "+221 77 451 12 16";

// TODO(client): confirmer l'adresse email officielle.
export const EMAIL = "contact@ndayanegroup.com";

// TODO(client): confirmer l'adresse complète (utilisée aussi pour Google Maps).
export const ADDRESS = "Keur Massar, Route de Diaxaye";

// TODO(client): renseigner les horaires réels.
export const OPENING_HOURS = "Lundi – Vendredi · 8h00 – 18h30, Samedi · 9h00 – 17h30";

// URL de production. À mettre à jour lors du déploiement Vercel /
// de la configuration du nom de domaine définitif.
export const SITE_URL = "https://ndayane-group.vercel.app/";

// Photo héro de la page d'accueil. Déposez le fichier dans /public/images/
// (ex: /public/images/hero-porte.jpg) puis renseignez le chemin ici.
// Laissez `undefined` pour conserver l'illustration de substitution.
export const HERO_IMAGE: string | undefined = "/images/porte9.jpeg";

export const TIKTOK_URL = "https://www.tiktok.com/ndayane groupe";

// TODO(client): ajouter uniquement lorsque les liens officiels sont fournis.
export const INSTAGRAM_URL = "www.instagram.com/ndayane groupe";
export const FACEBOOK_URL = "www.facebook.com/ndayane groupe";

export const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Nos portes", href: "/portes" },
  { label: "Catalogues", href: "/catalogues" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
] as const;

/** Construit un lien wa.me avec un message pré-rempli et encodé. */
export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Bonjour Ndayane Group, je souhaiterais avoir plus d'informations sur vos portes.";

export const QUOTE_WHATSAPP_MESSAGE =
  "Bonjour Ndayane Group, je souhaiterais demander un devis pour une porte.";

export function productWhatsAppMessage(productName: string): string {
  return `Bonjour Ndayane Group, je suis intéressé par le modèle ${productName}. Je souhaiterais connaître son prix et avoir plus d'informations.`;
}
