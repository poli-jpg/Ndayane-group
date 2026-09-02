import type { Metadata } from "next";
import CatalogClient from "./CatalogClient";
import { DoorCategory } from "@/lib/products";

export const metadata: Metadata = {
  title: "Nos portes",
  description:
    "Découvrez le catalogue de portes Ndayane Group : portes blindées, portes d'entrée, intérieures, modernes, décoratives et sur mesure.",
};

export default async function PortesPage({
  searchParams,
}: {
  searchParams: Promise<{ categorie?: string }>;
}) {
  const { categorie } = await searchParams;
  const initialCategory = (categorie as DoorCategory | undefined) ?? "toutes";

  return (
    <div className="bg-white">
      <section className="border-b border-stone-line bg-stone">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-xs font-medium tracking-[0.2em] text-brass-deep">
            COLLECTION
          </p>
          <h1 className="font-display mt-4 text-3xl font-bold text-ink sm:text-4xl">
            Nos portes
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-steel">
            Des portes blindées aux modèles décoratifs, chaque porte Ndayane
            Group est pensée pour allier sécurité, confort et esthétique.
            Sélectionnez une catégorie ou recherchez un modèle précis.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <CatalogClient initialCategory={initialCategory} />
      </section>
    </div>
  );
}
