"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import {
  COMPANY_NAME,
  NAV_LINKS,
  QUOTE_WHATSAPP_MESSAGE,
  buildWhatsAppLink,
} from "@/lib/config";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-stone-line bg-stone/95 backdrop-blur"
          : "border-transparent bg-stone/70 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/logond-removebg-preview.png"
            alt={COMPANY_NAME}
            width={140}
            height={48}
            className="h-30 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors ${
                  active ? "text-ink font-medium" : "text-steel hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a
            href={buildWhatsAppLink(QUOTE_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-ink px-5 py-2.5 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-ink hover:text-stone"
          >
            Demander un devis
          </a>
        </div>

        <button
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-stone-line bg-stone px-6 pb-8 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-stone-line py-4 text-base text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={buildWhatsAppLink(QUOTE_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-6 block w-full border border-ink px-5 py-3 text-center text-sm font-medium tracking-wide text-ink"
          >
            Demander un devis
          </a>
        </div>
      )}
    </header>
  );
}
