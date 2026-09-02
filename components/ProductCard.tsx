import Link from "next/link";
import { Product, CATEGORIES } from "@/lib/products";
import DoorImage from "./DoorImage";
import { WhatsAppButton } from "./WhatsAppButton";
import { productWhatsAppMessage } from "@/lib/config";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const categoryLabel = CATEGORIES.find((c) => c.value === product.category)?.label ?? "";

  return (
    <article className="bracket group flex flex-col border border-stone-line bg-white/40">
      <Link href={`/portes/${product.slug}`} className="block overflow-hidden bg-stone-2">
        <DoorImage
          src={product.photos?.[0]}
          alt={product.name}
          category={product.category}
          seed={index}
          className="aspect-[4/5] w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-2 text-xs tracking-wide text-steel">
          <span>{categoryLabel}</span>
          {product.reference && <span>{product.reference}</span>}
        </div>

        <h3 className="font-display text-lg font-bold text-ink">
          <Link href={`/portes/${product.slug}`}>{product.name}</Link>
        </h3>

        <p className="text-sm leading-relaxed text-steel">{product.description}</p>

        <div className="mt-auto pt-3 text-sm font-medium text-brass-deep">Prix sur demande</div>

        <div className="flex flex-col gap-2 pt-2 sm:flex-row">
          <Link
            href={`/portes/${product.slug}`}
            className="flex-1 border border-ink px-4 py-2.5 text-center text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-stone"
          >
            Voir le modèle
          </Link>
          <WhatsAppButton
            message={productWhatsAppMessage(product.name)}
            label="Demander le prix"
            className="flex-1"
          />
        </div>
      </div>
    </article>
  );
}
