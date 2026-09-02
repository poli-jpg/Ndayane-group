import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppButton";
import { COMPANY_NAME, COMPANY_TAGLINE, SITE_URL } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY_NAME} — ${COMPANY_TAGLINE}`,
    template: `%s — ${COMPANY_NAME}`,
  },
  description:
    "Ndayane Group conçoit et propose des portes blindées, sécurisées et haut de gamme au Sénégal. Découvrez nos modèles et demandez votre devis sur WhatsApp.",
  keywords: [
    "Ndayane Group",
    "porte blindée Sénégal",
    "porte blindée Dakar",
    "porte sécurisée Sénégal",
    "porte moderne Dakar",
    "porte haut de gamme Sénégal",
    "porte sur mesure Sénégal",
  ],
  openGraph: {
    type: "website",
    locale: "fr_SN",
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} — ${COMPANY_TAGLINE}`,
    description:
      "Portes blindées, sécurisées et haut de gamme conçues pour allier sécurité, confort et esthétique.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} — ${COMPANY_TAGLINE}`,
    description:
      "Portes blindées, sécurisées et haut de gamme conçues pour allier sécurité, confort et esthétique.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body className="flex min-h-screen flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
