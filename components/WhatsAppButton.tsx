import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/config";

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
}

export function WhatsAppButton({
  message = DEFAULT_WHATSAPP_MESSAGE,
  label = "WhatsApp",
  variant = "solid",
  className = "",
}: WhatsAppButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium tracking-wide transition-colors";

  const styles =
    variant === "solid"
      ? "bg-whatsapp text-white hover:bg-[#17181A]"
      : variant === "outline"
        ? "border border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-white"
        : "text-whatsapp hover:text-[#268f4f]";

  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <MessageCircle size={18} strokeWidth={2} />
      {label}
    </a>
  );
}

/** Bouton WhatsApp flottant, fixé en bas à droite, visible sur toutes les pages. */
export function WhatsAppFloatingButton() {
  return (
    <a
      href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Ndayane Group sur WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center bg-whatsapp text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 md:bottom-8 md:right-8"
    >
      <MessageCircle size={26} strokeWidth={2} />
    </a>
  );
}
