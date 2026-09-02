import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PHONE_NUMBER, QUOTE_WHATSAPP_MESSAGE } from "@/lib/config";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Demander un devis",
  description:
    "Demandez un devis gratuit pour une porte blindée, sécurisée ou sur mesure auprès de Ndayane Group.",
};

export default function DevisPage() {
  return (
    <div className="bg-stone">
      <section className="border-b border-stone-line bg-ink text-stone">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="text-xs font-medium tracking-[0.2em] text-brass-light">DEVIS GRATUIT</p>
          <h1 className="font-display mt-4 text-3xl font-bold text-white sm:text-4xl">
            Besoin d&apos;une porte pour votre projet&nbsp;?
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-steel-soft">
            Renseignez les informations de votre projet, ou écrivez-nous
            directement sur WhatsApp. Ndayane Group vous recontacte
            rapidement pour affiner votre besoin.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <QuoteForm />

        <div className="mt-10 flex flex-col items-center gap-4 border border-stone-line bg-white/60 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-lg font-bold text-ink">
              Vous préférez appeler ou écrire directement&nbsp;?
            </p>
            <p className="mt-1 flex items-center justify-center gap-2 text-sm text-steel sm:justify-start">
              <Phone size={15} className="text-brass-deep" />
              {PHONE_NUMBER}
            </p>
          </div>
          <WhatsAppButton message={QUOTE_WHATSAPP_MESSAGE} label="WhatsApp" />
        </div>
      </section>
    </div>
  );
}
