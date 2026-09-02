"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES, DoorCategory, PRODUCTS } from "@/lib/products";

export default function CatalogClient({
  initialCategory = "toutes",
}: {
  initialCategory?: DoorCategory | "toutes";
}) {
  const [category, setCategory] = useState<DoorCategory | "toutes">(initialCategory);
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchesCategory = category === "toutes" || p.category === category;
      const matchesQuery =
        q.length === 0 ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.reference ?? "").toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-stone-line pb-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-steel" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un modèle…"
            className="w-full border border-stone-line bg-white py-2.5 pl-9 pr-3 text-sm text-ink placeholder:text-steel-soft focus:outline-none focus:ring-2 focus:ring-brass"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.value}
              onClick={() => setCategory(c.value)}
              className={`whitespace-nowrap border px-4 py-2 text-xs font-medium tracking-wide transition-colors ${
                category === c.value
                  ? "border-ink bg-ink text-stone"
                  : "border-stone-line bg-white text-steel hover:border-ink hover:text-ink"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {results.length === 0 ? (
        <div className="py-20 text-center">
          <p className="font-display text-lg font-bold text-ink">Aucun modèle trouvé</p>
          <p className="mt-2 text-sm text-steel">
            Essayez une autre recherche, ou contactez-nous directement : nous
            avons peut-être ce qu&apos;il vous faut.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
