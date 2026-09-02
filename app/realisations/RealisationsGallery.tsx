"use client";

import { useState } from "react";
import { X } from "lucide-react";
import DoorImage from "@/components/DoorImage";
import { DoorCategory, CATEGORIES } from "@/lib/products";

interface Realisation {
  id: string;
  category: DoorCategory;
  city?: string;
  // Chemin réel dans /public/images/realisations/, ex: "/images/realisations/dakar-almadies.jpg".
  // Ajoutez la photo dans ce dossier puis renseignez son chemin ici — sinon
  // l'illustration de substitution est utilisée automatiquement.
  photo?: string;
}

// Emplacements en attente des photos HD officielles des réalisations
// fournies par Ndayane Group. Les villes sont des placeholders à confirmer.
const REALISATIONS: Realisation[] = [
  { id: "r1", category: "blindees",photo: "/images/realisations/R1.jpeg" },
  { id: "r2", category: "entree",photo: "/images/realisations/R2.jpeg" },
  { id: "r3", category: "modernes",photo: "/images/realisations/R3.jpeg" },
  { id: "r4", category: "interieures",photo: "/images/realisations/R4.jpeg" },
  { id: "r5", category: "decoratives",photo: "/images/realisations/R5.jpeg" },
  { id: "r6", category: "blindees",photo: "/images/realisations/R6.jpeg" },
  { id: "r7", category: "sur-mesure",photo: "/images/realisations/R7.jpeg" },
  { id: "r8", category: "entree",photo: "/images/realisations/R8.jpeg" },
];

export default function RealisationsGallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {REALISATIONS.map((r, i) => {
          const label = CATEGORIES.find((c) => c.value === r.category)?.label ?? "";
          return (
            <button
              key={r.id}
              onClick={() => setOpen(i)}
              className="bracket group relative block overflow-hidden bg-stone-2 text-left"
            >
              <DoorImage
                src={r.photo}
                alt={`Réalisation Ndayane Group — ${label}`}
                category={r.category}
                seed={i}
                className="aspect-square w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-3 pb-2 pt-6 text-xs font-medium text-white">
                {label}
              </span>
            </button>
          );
        })}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-6"
          onClick={() => setOpen(null)}
        >
          <button
            aria-label="Fermer"
            onClick={() => setOpen(null)}
            className="absolute right-6 top-6 text-white/80 transition-colors hover:text-white"
          >
            <X size={28} />
          </button>
          <div className="max-h-[85vh] w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <DoorImage
              src={REALISATIONS[open].photo}
              alt={`Réalisation Ndayane Group — ${CATEGORIES.find((c) => c.value === REALISATIONS[open].category)?.label ?? ""}`}
              category={REALISATIONS[open].category}
              seed={open}
              className="aspect-square w-full"
            />
            {!REALISATIONS[open].photo && (
              <p className="mt-4 text-center text-sm text-steel-soft">
                {CATEGORIES.find((c) => c.value === REALISATIONS[open].category)?.label} — photo
                HD à venir
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
