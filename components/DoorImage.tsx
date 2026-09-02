import Image from "next/image";
import DoorArt from "./DoorArt";
import { DoorCategory } from "@/lib/products";

/**
 * Affiche la photo réelle d'une porte (produit ou réalisation) si elle a été
 * fournie dans /public, sinon affiche l'illustration de substitution.
 *
 * Pour brancher une vraie photo : ajoutez le fichier dans
 * /public/images/portes/ (ou /public/images/realisations/) puis renseignez
 * son chemin dans lib/products.ts (champ `photos`) ou
 * app/realisations/RealisationsGallery.tsx (champ `photo`).
 */
export default function DoorImage({
  src,
  alt,
  category,
  seed = 0,
  tone,
  className,
  priority,
}: {
  src?: string;
  alt: string;
  category: DoorCategory;
  seed?: number;
  tone?: "ink" | "stone";
  className?: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden bg-stone-2 ${className ?? ""}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          priority={priority}
        />
      </div>
    );
  }

  return <DoorArt category={category} seed={seed} tone={tone} className={className} />;
}
