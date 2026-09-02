import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { DEFAULT_WHATSAPP_MESSAGE } from "@/lib/config";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-6 py-32 text-center">
      <p className="font-display text-sm tracking-[0.2em] text-brass-deep">404</p>
      <h1 className="font-display mt-4 text-3xl font-bold text-ink">Page introuvable</h1>
      <p className="mt-4 text-sm leading-relaxed text-steel">
        Cette page n&apos;existe pas ou plus. Retrouvez nos portes ou
        contactez-nous directement.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/portes"
          className="border border-ink px-6 py-3 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-ink hover:text-stone"
        >
          Voir nos portes
        </Link>
        <WhatsAppButton message={DEFAULT_WHATSAPP_MESSAGE} />
      </div>
    </div>
  );
}
