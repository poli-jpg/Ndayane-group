"use client";

import { useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Download } from "lucide-react";
import { SITE_URL } from "@/lib/config";

// ---------------------------------------------------------------------------
// Le QR Code est toujours AFFICHÉ en SVG (jamais en <canvas>), pour rester
// visible même avec des extensions de confidentialité qui bloquent le
// dessin sur un <canvas> (Brave, certains modules Firefox/uBlock Origin).
//
// Le TÉLÉCHARGEMENT produit un PNG haute résolution via une conversion
// SVG → canvas → PNG déclenchée uniquement au clic. Si cette conversion
// échoue (extension bloquante), on retombe automatiquement sur un
// téléchargement direct du SVG, qui ne dépend jamais du canvas.
// ---------------------------------------------------------------------------

const DISPLAY_SIZE = 220;
const EXPORT_SIZE = 1024; // haute résolution, adapté à l'impression

function downloadSvgFallback(svg: SVGElement) {
  const clone = svg.cloneNode(true) as SVGElement;
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  const svgData = new XMLSerializer().serializeToString(clone);
  const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "ndayane-group-qr-code.svg";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export default function QRCodeBlock() {
  const svgWrapperRef = useRef<HTMLDivElement>(null);
  const [downloadError, setDownloadError] = useState(false);

  function handleDownload() {
    const svg = svgWrapperRef.current?.querySelector("svg");
    if (!svg) {
      setDownloadError(true);
      return;
    }
    setDownloadError(false);

    try {
      const clone = svg.cloneNode(true) as SVGElement;
      clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      const svgData = new XMLSerializer().serializeToString(clone);
      const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
      const svgUrl = URL.createObjectURL(svgBlob);

      const img = new Image();
      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = EXPORT_SIZE;
          canvas.height = EXPORT_SIZE;
          const ctx = canvas.getContext("2d");
          if (!ctx) throw new Error("Contexte canvas indisponible");

          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, EXPORT_SIZE, EXPORT_SIZE);
          ctx.drawImage(img, 0, 0, EXPORT_SIZE, EXPORT_SIZE);

          const pngUrl = canvas.toDataURL("image/png", 1.0);
          // Si le canvas est bloqué/altéré par une extension, toDataURL
          // renvoie souvent une image d'1x1 pixel transparente : on le
          // détecte pour basculer sur le SVG plutôt que de télécharger un
          // PNG cassé sans prévenir.
          if (pngUrl.length < 1000) throw new Error("Canvas probablement bloqué");

          const link = document.createElement("a");
          link.href = pngUrl;
          link.download = "ndayane-group-qr-code.png";
          link.click();
        } catch {
          downloadSvgFallback(svg);
        } finally {
          URL.revokeObjectURL(svgUrl);
        }
      };
      img.onerror = () => {
        URL.revokeObjectURL(svgUrl);
        downloadSvgFallback(svg);
      };
      img.src = svgUrl;
    } catch {
      downloadSvgFallback(svg);
    }
  }

  return (
    <div className="flex flex-col items-center gap-6 border border-stone-line bg-white p-8 text-center sm:p-10">
      <div ref={svgWrapperRef} className="bracket bg-white p-4">
        <QRCodeSVG
          value={SITE_URL}
          size={DISPLAY_SIZE}
          bgColor="#ffffff"
          fgColor="#14161a"
          level="H"
          marginSize={2}
          imageSettings={{
            // Doit correspondre exactement au fichier logo utilisé dans la
            // navbar (components/Navbar.tsx). Changez le nom si besoin.
            src: "/logond-removebg-preview.png",
            height: Math.round(DISPLAY_SIZE * 0.2),
            width: Math.round(DISPLAY_SIZE * 0.2),
            excavate: true,
          }}
        />
      </div>
      <p className="max-w-xs text-sm text-steel">
        Scannez pour accéder directement au site — idéal pour vos flyers,
        cartes de visite, affiches et stickers.
      </p>
      <button
        onClick={handleDownload}
        className="inline-flex items-center gap-2 border border-ink px-5 py-2.5 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-ink hover:text-stone"
      >
        <Download size={16} />
        Télécharger le QR Code
      </button>
      {downloadError && (
        <p className="text-xs text-steel-soft">
          Le téléchargement a échoué. Essayez avec un clic droit sur le QR
          Code → &laquo;&nbsp;Enregistrer l&apos;image sous...&nbsp;&raquo;.
        </p>
      )}
    </div>
  );
}
