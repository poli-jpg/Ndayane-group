# Où mettre vos photos

## Portes (catalogue)
Déposez vos photos ici : `/public/images/portes/`
Puis, dans `lib/products.ts`, ajoutez le champ `photos` au produit concerné :

```ts
photos: [
  "/images/portes/alto-blindee-1.jpg",
  "/images/portes/alto-blindee-2.jpg",
],
```

## Réalisations
Déposez vos photos ici : `/public/images/realisations/`
Puis, dans `app/realisations/RealisationsGallery.tsx`, ajoutez le champ `photo` :

```ts
{ id: "r1", category: "blindees", photo: "/images/realisations/dakar-almadies.jpg" },
```

## Photo d'accueil (hero)
Déposez-la ici : `/public/images/`
Puis, dans `lib/config.ts`, renseignez :

```ts
export const HERO_IMAGE = "/images/hero-porte.jpg";
```

## Recommandations
- Format JPG ou WebP, poids < 500 Ko par image si possible
- Portes catalogue : ratio proche de 4:5 (portrait)
- Réalisations : ratio carré (1:1)
- Tant qu'aucune photo n'est renseignée, une illustration de substitution
  s'affiche automatiquement — rien ne casse si un dossier est vide.
