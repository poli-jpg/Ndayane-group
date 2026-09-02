import Link from "next/link";
import {
  ShieldCheck,
  Sparkles,
  Home as HomeIcon,
  Ruler,
  ArrowRight,
} from "lucide-react";
import DoorImage from "@/components/DoorImage";
import ProductCard from "@/components/ProductCard";
import QuoteForm from "@/components/QuoteForm";
import QRCodeBlock from "@/components/QRCodeBlock";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getFeaturedProducts, PRODUCTS } from "@/lib/products";
import { QUOTE_WHATSAPP_MESSAGE, HERO_IMAGE } from "@/lib/config";

export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 3);
  const realisationSeeds = PRODUCTS.slice(0, 4);

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* HERO */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-ink text-stone">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-16 md:grid-cols-2 md:items-center md:pb-24 md:pt-24">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-brass-light">
              PORTES BLINDÉES &amp; HAUT DE GAMME
            </p>
            <h1 className="font-display mt-6 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Votre sécurité mérite une porte à la hauteur.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-steel-soft">
              Découvrez nos portes blindées et nos modèles haut de gamme conçus
              pour allier sécurité, confort et esthétique.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/portes"
                className="inline-flex items-center justify-center gap-2 bg-brass px-6 py-3.5 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-brass-light"
              >
                Découvrir nos portes
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/devis"
                className="inline-flex items-center justify-center border border-white/25 px-6 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:border-white hover:bg-white/5"
              >
                Demander un devis
              </Link>
            </div>

            <div className="mt-6">
              <WhatsAppButton
                message={QUOTE_WHATSAPP_MESSAGE}
                label="Discuter sur WhatsApp"
              />
            </div>

            <div className="mt-12 flex items-center gap-3 text-xs tracking-widest text-steel-soft">
              <span>SÉCURITÉ</span>
              <span className="h-1 w-1 rounded-full bg-brass" />
              <span>ÉLÉGANCE</span>
              <span className="h-1 w-1 rounded-full bg-brass" />
              <span>CONFORT</span>
            </div>
          </div>

          <div className="bracket relative mx-auto w-full max-w-xs md:max-w-sm">
            <DoorImage
              src={HERO_IMAGE}
              alt="Porte blindée Ndayane Group"
              category="blindees"
              tone="ink"
              seed={1}
              className="aspect-[4/5] w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* POURQUOI NOUS CHOISIR */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-b border-stone-line bg-stone">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display max-w-2xl text-3xl font-bold text-ink sm:text-4xl">
            Pourquoi choisir entre le confort et l&apos;esthétique si on peut
            avoir les deux&nbsp;?
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden border border-stone-line bg-stone-line sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "Sécurité",
                text: "Des solutions pensées pour renforcer la protection de votre habitation.",
              },
              {
                icon: Sparkles,
                title: "Esthétique",
                text: "Des modèles modernes et élégants, pensés pour votre façade.",
              },
              {
                icon: HomeIcon,
                title: "Confort",
                text: "Des portes adaptées à votre quotidien et à votre usage.",
              },
              {
                icon: Ruler,
                title: "Sur mesure",
                text: "Des solutions adaptées aux besoins spécifiques de votre projet.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex flex-col gap-4 bg-stone p-8">
                <Icon size={28} className="text-brass-deep" strokeWidth={1.5} />
                <h3 className="font-display text-lg font-bold text-ink">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-steel">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* NOS PORTES — APERÇU */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-brass-deep">
                COLLECTION
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold text-ink">
                Nos portes
              </h2>
            </div>
            <Link
              href="/portes"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-stone-line underline-offset-4 transition-colors hover:decoration-brass"
            >
              Voir tous les modèles
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* RÉALISATIONS — TEASER */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-y border-stone-line bg-stone">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-brass-deep">
                CHEZ NOS CLIENTS
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold text-ink">
                Nos catalogues
              </h2>
            </div>
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-stone-line underline-offset-4 transition-colors hover:decoration-brass"
            >
              Voir la galerie
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {realisationSeeds.map((p, i) => (
              <Link
                key={p.id}
                href="/realisations"
                className="bracket block overflow-hidden bg-stone-2"
              >
                <DoorImage
                  src={p.photos?.[0]}
                  alt={p.name}
                  category={p.category}
                  seed={i + 3}
                  className="aspect-square w-full"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* DEVIS */}
      {/* ---------------------------------------------------------------- */}
      <section id="devis" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-brass-deep">
                DEVIS GRATUIT
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold text-ink sm:text-4xl">
                Besoin d&apos;une porte pour votre projet&nbsp;?
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-steel">
                Décrivez votre projet en quelques informations et Ndayane Group
                vous recontacte pour affiner votre besoin et vous proposer le
                modèle le plus adapté.
              </p>
              <div className="mt-8">
                <WhatsAppButton
                  message={QUOTE_WHATSAPP_MESSAGE}
                  label="Ou écrivez-nous directement"
                  variant="outline"
                />
              </div>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* QR CODE */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-t border-stone-line bg-stone">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-brass-deep">
              HORS LIGNE
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold text-ink">
              Scannez pour découvrir Ndayane Group
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-steel">
              Retrouvez ce QR Code sur nos flyers, cartes de visite, affiches et
              stickers, pour un accès direct au site depuis un smartphone.
            </p>
          </div>
          <QRCodeBlock />
        </div>
      </section>
    </>
  );
}
