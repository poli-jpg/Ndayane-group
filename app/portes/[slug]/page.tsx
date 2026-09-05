import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import DoorImage from "@/components/DoorImage";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CATEGORIES, getProductBySlug, PRODUCTS } from "@/lib/products";
import { productWhatsAppMessage } from "@/lib/config";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Modèle introuvable" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const categoryLabel = CATEGORIES.find((c) => c.value === product.category)?.label ?? "";
  const galleryCount = Math.max(product.images, 1);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <Link
          href="/portes"
          className="inline-flex items-center gap-2 text-sm font-medium text-steel transition-colors hover:text-ink"
        >
          <ArrowLeft size={15} />
          Retour au catalogue
        </Link>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 lg:grid-cols-2">
        {/* Gallery */}
        <div>
          <div className="bracket overflow-hidden bg-stone-2">
            <DoorImage
              src={product.photos?.[0]}
              alt={product.name}
              category={product.category}
              seed={0}
              className="aspect-[4/5] w-full"
              priority
            />
          </div>
          {galleryCount > 1 && (
            <div className="mt-3 grid grid-cols-3 gap-3">
              {Array.from({ length: Math.min(galleryCount, 3) }).map((_, i) => (
                <div key={i} className="overflow-hidden bg-stone-2">
                  <DoorImage
                    src={product.photos?.[i + 1]}
                    alt={`${product.name} — vue ${i + 2}`}
                    category={product.category}
                    seed={i + 1}
                    className="aspect-square w-full"
                  />
                </div>
              ))}
            </div>
          )}
          {!product.photos?.length && (
            <p className="mt-3 text-xs text-steel-soft">
              Illustrations de référence — photos HD à venir.
            </p>
          )}
        </div>

        {/* Details */}
        <div>
          <div className="flex items-center justify-between text-xs tracking-wide text-steel">
            <span>{categoryLabel}</span>
            {product.reference && <span>{product.reference}</span>}
          </div>

          <h1 className="font-display mt-3 text-3xl font-bold text-ink sm:text-4xl">
            {product.name}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-steel">{product.longDescription}</p>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-stone-line py-6 text-sm">
            {product.material && (
              <div>
                <dt className="text-xs tracking-wide text-steel-soft">Matériau</dt>
                <dd className="mt-1 font-medium text-ink">{product.material}</dd>
              </div>
            )}
            {product.finish && (
              <div>
                <dt className="text-xs tracking-wide text-steel-soft">Finition</dt>
                <dd className="mt-1 font-medium text-ink">{product.finish}</dd>
              </div>
            )}
            {product.dimensions && (
              <div>
                <dt className="text-xs tracking-wide text-steel-soft">Dimensions</dt>
                <dd className="mt-1 whitespace-pre-line font-medium text-ink">{product.dimensions}</dd>
              </div>
            )}
            <div>
              <dt className="text-xs tracking-wide text-steel-soft">Disponibilité</dt>
              <dd className="mt-1 font-medium text-ink">
                {product.available ? "Disponible" : "Sur demande"}
              </dd>
            </div>
          </dl>

          {product.characteristics.length > 0 && (
            <ul className="mt-6 flex flex-col gap-3">
              {product.characteristics.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-steel">
                  <Check size={16} className="mt-0.5 shrink-0 text-brass-deep" />
                  {c}
                </li>
              ))}
            </ul>
          )}

          <p className="mt-8 text-sm font-medium tracking-wide text-brass-deep">
            Prix sur demande
          </p>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton
              message={productWhatsAppMessage(product.name)}
              label="Demander le prix"
              className="flex-1"
            />
            <Link
              href="/devis"
              className="flex-1 border border-ink px-5 py-3 text-center text-sm font-medium tracking-wide text-ink transition-colors hover:bg-ink hover:text-stone"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
