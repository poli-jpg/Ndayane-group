import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import QRCodeBlock from "@/components/QRCodeBlock";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  ADDRESS,
  EMAIL,
  OPENING_HOURS,
  PHONE_NUMBER,
  TIKTOK_URL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  DEFAULT_WHATSAPP_MESSAGE,
} from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Ndayane Group par téléphone, WhatsApp ou email pour toute question sur nos portes blindées et haut de gamme.",
};

// La carte Google Maps ne s'affiche que lorsque l'adresse officielle
// complète (avec coordonnées) est fournie par le client — voir lib/config.ts.
const HAS_CONFIRMED_ADDRESS = false;

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-stone-line bg-stone">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-xs font-medium tracking-[0.2em] text-brass-deep">CONTACT</p>
          <h1 className="font-display mt-4 text-3xl font-bold text-ink sm:text-4xl">
            Parlons de votre projet
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-steel">
            Une question sur un modèle, une demande de devis ou un projet sur
            mesure&nbsp;? L&apos;équipe Ndayane Group vous répond.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <Phone size={20} className="mt-0.5 shrink-0 text-brass-deep" />
                <div>
                  <p className="text-xs tracking-wide text-steel-soft">Téléphone</p>
                  <p className="mt-1 text-base font-medium text-ink">{PHONE_NUMBER}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail size={20} className="mt-0.5 shrink-0 text-brass-deep" />
                <div>
                  <p className="text-xs tracking-wide text-steel-soft">Email</p>
                  <p className="mt-1 text-base font-medium text-ink">{EMAIL}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin size={20} className="mt-0.5 shrink-0 text-brass-deep" />
                <div>
                  <p className="text-xs tracking-wide text-steel-soft">Adresse</p>
                  <p className="mt-1 text-base font-medium text-ink">{ADDRESS}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock size={20} className="mt-0.5 shrink-0 text-brass-deep" />
                <div>
                  <p className="text-xs tracking-wide text-steel-soft">Horaires</p>
                  <p className="mt-1 text-base font-medium text-ink">{OPENING_HOURS}</p>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <WhatsAppButton message={DEFAULT_WHATSAPP_MESSAGE} label="Nous écrire sur WhatsApp" />
            </div>

            <div className="mt-10 flex gap-5 text-sm text-steel">
              <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                TikTok
              </a>
              {INSTAGRAM_URL && (
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                  Instagram
                </a>
              )}
              {FACEBOOK_URL && (
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                  Facebook
                </a>
              )}
            </div>

            {HAS_CONFIRMED_ADDRESS ? (
              <div className="mt-10 aspect-video w-full overflow-hidden border border-stone-line">
                {/* Carte Google Maps à intégrer une fois l'adresse officielle confirmée. */}
              </div>
            ) : (
              <p className="mt-10 border border-dashed border-stone-line bg-stone p-4 text-xs text-steel-soft">
                La carte Google Maps sera ajoutée ici dès que l&apos;adresse
                officielle de Ndayane Group sera confirmée.
              </p>
            )}
          </div>

          <div className="flex flex-col items-center justify-center gap-6 border border-stone-line bg-stone p-8 text-center">
            <p className="font-display text-lg font-bold text-ink">
              Scannez pour retrouver le site
            </p>
            <QRCodeBlock />
          </div>
        </div>
      </section>
    </div>
  );
}
