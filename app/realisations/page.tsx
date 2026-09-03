import type { Metadata } from "next";
import RealisationsGallery from "./RealisationsGallery";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { DEFAULT_WHATSAPP_MESSAGE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Nos réalisations",
  description:
    "Découvrez les portes Ndayane Group installées chez nos clients : portes blindées, d'entrée, modernes, décoratives et sur mesure.",
};

export default function RealisationsPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-stone-line bg-stone">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-xs font-medium tracking-[0.2em] text-brass-deep">
            CHEZ NOS CLIENTS
          </p>
          <h1 className="font-display mt-4 text-3xl font-bold text-ink sm:text-4xl">
            Nos catalogues
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-steel">
            Découvrez notre catalogue de portes : modèles, finitions et styles
            disponibles chez Ndayane Group.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <RealisationsGallery />

        <div className="mt-16 flex flex-col items-center gap-4 border border-stone-line bg-stone p-10 text-center">
          <p className="font-display text-xl font-bold text-ink">
            Votre projet pourrait être le prochain
          </p>
          <p className="max-w-md text-sm text-steel">
            Parlez-nous de votre habitation et de vos besoins en sécurité : nous
            vous accompagnons du choix du modèle à l&apos;installation.
          </p>
          <WhatsAppButton
            message={DEFAULT_WHATSAPP_MESSAGE}
            label="Discuter de mon projet"
          />
        </div>
      </section>
    </div>
  );
}
