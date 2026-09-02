import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  ADDRESS,
  COMPANY_NAME,
  EMAIL,
  PHONE_NUMBER,
  TIKTOK_URL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  NAV_LINKS,
  DEFAULT_WHATSAPP_MESSAGE,
} from "@/lib/config";
import { CATEGORIES } from "@/lib/products";
import { WhatsAppButton } from "./WhatsAppButton";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-stone">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <p className="font-display text-lg font-extrabold tracking-tight text-white">
              {COMPANY_NAME}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-steel-soft">
              Portes blindées, sécurisées et haut de gamme, conçues pour allier
              sécurité, confort et esthétique.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-steel-soft transition-colors hover:text-brass-light"
              >
                TikTok — @ndayane_group
              </a>
              {INSTAGRAM_URL && (
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-steel-soft transition-colors hover:text-brass-light"
                >
                  Instagram
                </a>
              )}
              {FACEBOOK_URL && (
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-steel-soft transition-colors hover:text-brass-light"
                >
                  Facebook
                </a>
              )}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-steel-soft">
              Navigation
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-stone transition-colors hover:text-brass-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-steel-soft">
              Catégories
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              {CATEGORIES.filter((c) => c.value !== "toutes").map((c) => (
                <li key={c.value}>
                  <Link
                    href={`/portes?categorie=${c.value}`}
                    className="text-stone transition-colors hover:text-brass-light"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-steel-soft">
              Contact
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-stone">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0 text-brass-light" />
                {PHONE_NUMBER}
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0 text-brass-light" />
                {EMAIL}
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brass-light" />
                {ADDRESS}
              </li>
            </ul>
            <WhatsAppButton
              message={DEFAULT_WHATSAPP_MESSAGE}
              variant="outline"
              className="mt-6 w-full border-whatsapp"
            />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-steel-soft md:flex-row md:items-center md:justify-between">
          <p>© 2026 {COMPANY_NAME}. Tous droits réservés.</p>
          <p>Site vitrine — sans vente en ligne.</p>
        </div>
      </div>
    </footer>
  );
}
