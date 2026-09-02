"use client";

import { useState, FormEvent, ReactNode } from "react";
import { CATEGORIES } from "@/lib/products";
import { WHATSAPP_NUMBER } from "@/lib/config";
import { Check } from "lucide-react";

interface FormState {
  name: string;
  phone: string;
  whatsapp: string;
  doorType: string;
  model: string;
  dimensions: string;
  city: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  phone: "",
  whatsapp: "",
  doorType: "",
  model: "",
  dimensions: "",
  city: "",
  message: "",
};

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Merci de renseigner au minimum votre nom et un numéro de téléphone.");
      return;
    }
    setError(null);
    // Le site étant une vitrine sans backend imposé, la demande est
    // confirmée côté client. Un webhook / une intégration email ou
    // Supabase peut être branché ici ultérieurement si souhaité.
    setSubmitted(true);
  }

  function whatsappSummaryLink() {
    const lines = [
      "Bonjour Ndayane Group, voici ma demande de devis :",
      form.name && `Nom : ${form.name}`,
      form.phone && `Téléphone : ${form.phone}`,
      form.doorType && `Type de porte : ${form.doorType}`,
      form.model && `Modèle souhaité : ${form.model}`,
      form.dimensions && `Dimensions : ${form.dimensions}`,
      form.city && `Ville : ${form.city}`,
      form.message && `Message : ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
  }

  if (submitted) {
    return (
      <div className="border border-stone-line bg-white/60 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brass/15 text-brass-deep">
          <Check size={24} />
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-ink">Demande envoyée</h3>
        <p className="mt-2 text-sm text-steel">
          Merci {form.name.split(" ")[0] || ""}, votre demande a bien été enregistrée. Ndayane
          Group vous recontactera rapidement. Vous pouvez aussi nous écrire directement sur
          WhatsApp pour accélérer l&apos;échange.
        </p>
        <a
          href={whatsappSummaryLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center bg-whatsapp px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#268f4f]"
        >
          Envoyer le récapitulatif sur WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-stone-line bg-white/60 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nom complet" required>
          <input
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="input"
            placeholder="Votre nom"
          />
        </Field>
        <Field label="Téléphone" required>
          <input
            required
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="input"
            placeholder="+221 ..."
          />
        </Field>
        <Field label="WhatsApp">
          <input
            value={form.whatsapp}
            onChange={(e) => update("whatsapp", e.target.value)}
            className="input"
            placeholder="Si différent du téléphone"
          />
        </Field>
        <Field label="Ville">
          <input
            value={form.city}
            onChange={(e) => update("city", e.target.value)}
            className="input"
            placeholder="Dakar, Thiès, ..."
          />
        </Field>
        <Field label="Type de porte">
          <select
            value={form.doorType}
            onChange={(e) => update("doorType", e.target.value)}
            className="input"
          >
            <option value="">Sélectionner…</option>
            {CATEGORIES.filter((c) => c.value !== "toutes").map((c) => (
              <option key={c.value} value={c.label}>
                {c.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Modèle souhaité">
          <input
            value={form.model}
            onChange={(e) => update("model", e.target.value)}
            className="input"
            placeholder="Ex : Alto Blindée"
          />
        </Field>
        <Field label="Dimensions">
          <input
            value={form.dimensions}
            onChange={(e) => update("dimensions", e.target.value)}
            className="input"
            placeholder="Hauteur x largeur (si connues)"
          />
        </Field>
        <Field label="Message" full>
          <textarea
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className="input min-h-28 resize-y"
            placeholder="Précisez votre projet…"
          />
        </Field>
      </div>

      {error && <p className="mt-4 text-sm text-red-700">{error}</p>}

      <button
        type="submit"
        className="mt-6 w-full bg-ink px-6 py-3.5 text-sm font-medium tracking-wide text-stone transition-colors hover:bg-ink-2 sm:w-auto"
      >
        Demander mon devis
      </button>

      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid var(--stone-line);
          background: var(--white);
          padding: 0.7rem 0.9rem;
          font-size: 0.9rem;
          color: var(--ink);
        }
        .input:focus {
          outline: 2px solid var(--brass);
          outline-offset: 1px;
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  children,
  required,
  full,
}: {
  label: string;
  children: ReactNode;
  required?: boolean;
  full?: boolean;
}) {
  return (
    <label className={`flex flex-col gap-1.5 text-sm ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-xs font-medium tracking-wide text-steel">
        {label} {required && <span className="text-brass-deep">*</span>}
      </span>
      {children}
    </label>
  );
}
