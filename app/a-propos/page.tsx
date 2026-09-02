import type { Metadata } from "next";
import { ShieldCheck, PenTool, HeartHandshake, Layers } from "lucide-react";
import DoorArt from "@/components/DoorArt";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { DEFAULT_WHATSAPP_MESSAGE } from "@/lib/config";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Ndayane Group conçoit des portes blindées, sécurisées et haut de gamme, pensées pour allier sécurité, confort et esthétique.",
};

export default function AProposPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-stone-line bg-stone">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-brass-deep">À PROPOS</p>
            <h1 className="font-display mt-4 text-3xl font-bold text-ink sm:text-4xl">
              L&apos;entreprise derrière Ndayane Group
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-steel">
              Ndayane Group conçoit et propose des portes pensées pour allier
              sécurité, confort et esthétique. De la porte blindée aux
              modèles sur mesure, chaque projet est abordé avec la même
              exigence : offrir une entrée à la hauteur de votre habitation.
            </p>
          </div>
          <div className="bracket mx-auto w-full max-w-xs">
            <DoorArt category="sur-mesure" tone="stone" seed={7} className="w-full" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-px overflow-hidden border border-stone-line bg-stone-line sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: ShieldCheck,
              title: "Sécurité",
              text: "Une attention particulière portée à la solidité et à la fiabilité de chaque porte.",
            },
            {
              icon: PenTool,
              title: "Savoir-faire",
              text: "Un accompagnement technique pour choisir le modèle adapté à votre projet.",
            },
            {
              icon: Layers,
              title: "Qualité",
              text: "Des matériaux et des finitions sélectionnés pour durer.",
            },
            {
              icon: HeartHandshake,
              title: "Accompagnement",
              text: "Un échange direct, du premier contact jusqu'à l'installation.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col gap-4 bg-white p-8">
              <Icon size={26} className="text-brass-deep" strokeWidth={1.5} />
              <h3 className="font-display text-base font-bold text-ink">{title}</h3>
              <p className="text-sm leading-relaxed text-steel">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">Notre approche</h2>
            <p className="mt-4 text-sm leading-relaxed text-steel">
              Chaque demande est étudiée avec attention afin de proposer la
              porte la plus adaptée : niveau de sécurité recherché, style de
              la façade, contraintes de l&apos;ouverture et budget. L&apos;objectif
              reste le même — une entrée qui rassure autant qu&apos;elle
              séduit.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">Un accompagnement dédié</h2>
            <p className="mt-4 text-sm leading-relaxed text-steel">
              De la première prise de contact jusqu&apos;à la livraison,
              Ndayane Group reste disponible sur WhatsApp pour répondre à vos
              questions, ajuster un devis ou faire un point sur votre projet.
            </p>
          </div>
        </div>

        <div className="mt-16 border border-stone-line bg-stone p-10 text-center">
          <p className="font-display text-xl font-bold text-ink">Une question sur nos portes ?</p>
          <p className="mt-2 text-sm text-steel">
            Nous sommes disponibles sur WhatsApp pour vous répondre
            rapidement.
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton message={DEFAULT_WHATSAPP_MESSAGE} />
          </div>
        </div>
      </section>
    </div>
  );
}
