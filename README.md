# Ndayane Group — Site vitrine

Site vitrine Next.js pour Ndayane Group (portes blindées, sécurisées et haut
de gamme). Catalogue de présentation, réalisations, demande de devis et
WhatsApp — **sans panier ni paiement en ligne**.

## Démarrer en local

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000

## Build de production

```bash
npm run build
npm start
```

## ⚠️ À faire avant la mise en ligne

Toutes les informations d'entreprise sont centralisées dans `lib/config.ts`.
Merci de confirmer/renseigner :

- `WHATSAPP_NUMBER` — numéro WhatsApp officiel (format international, ex. `221771234567`)
- `PHONE_NUMBER` — numéro de téléphone affiché
- `EMAIL` — adresse email de contact
- `ADDRESS` — adresse complète (utilisée aussi pour Google Maps)
- `OPENING_HOURS` — horaires réels
- `SITE_URL` — URL de production une fois le domaine configuré sur Vercel
- `INSTAGRAM_URL` / `FACEBOOK_URL` — liens officiels si disponibles

Les photos des portes et des réalisations sont pour l'instant remplacées par
des illustrations vectorielles de substitution (`components/DoorArt.tsx`).
Elles pourront être remplacées par les photos HD dès qu'elles seront
fournies : il suffira d'ajouter les images dans `/public` et de les
référencer avec `next/image` dans `components/ProductCard.tsx`,
`app/portes/[slug]/page.tsx` et `app/realisations/RealisationsGallery.tsx`.

Les prix des produits ne sont jamais affichés ("Prix sur demande") tant
qu'aucun tarif officiel n'est fourni — voir `lib/products.ts`.

## Structure

- `app/` — pages (App Router, Next.js 16)
- `components/` — composants réutilisables (Navbar, Footer, cartes produits, formulaire de devis, QR Code, bouton WhatsApp)
- `lib/config.ts` — configuration centrale de l'entreprise (numéros, liens, textes WhatsApp)
- `lib/products.ts` — catalogue de portes (structure prête pour une future connexion Supabase)

## Déploiement

Le projet est prêt pour un déploiement sur [Vercel](https://vercel.com/new).
