import { DoorCategory } from "@/lib/products";

interface DoorArtProps {
  category: DoorCategory;
  tone?: "stone" | "ink";
  className?: string;
  seed?: number;
}

/**
 * Illustration vectorielle "signature" représentant une porte, générée selon
 * la catégorie. Sert de visuel de substitution premium tant que les photos
 * HD officielles de Ndayane Group ne sont pas fournies — voir section
 * "Photos" du brief : on n'utilise ni Lorem ipsum, ni images de mauvaise
 * qualité, ni captures d'écran temporaires comme visuels finaux.
 */
export default function DoorArt({
  category,
  tone = "stone",
  className = "",
  seed = 0,
}: DoorArtProps) {
  const bg = tone === "ink" ? "#1d2026" : "#e7e2d6";
  const frame = tone === "ink" ? "#cfae7c" : "#a9814b";
  const panel = tone === "ink" ? "#2a2e35" : "#f2efe8";
  const line = tone === "ink" ? "#454b56" : "#d8d2c2";

  const offset = (seed % 3) * 6;

  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      role="img"
      aria-label="Illustration d'un modèle de porte Ndayane Group"
    >
      <rect x="0" y="0" width="400" height="500" fill={bg} />

      {/* Cadre architectural */}
      <rect x="90" y="60" width="220" height="400" fill="none" stroke={frame} strokeWidth="3" />

      {/* Vantail */}
      <rect x="104" y="74" width="192" height="372" fill={panel} stroke={line} strokeWidth="1" />

      {renderCategoryDetail(category, line, frame, offset)}

      {/* Poignée */}
      <circle cx="270" cy="270" r="6" fill={frame} />
      <rect x="264" y="276" width="12" height="46" rx="2" fill={frame} />
    </svg>
  );
}

function renderCategoryDetail(
  category: DoorCategory,
  line: string,
  frame: string,
  offset: number
) {
  switch (category) {
    case "blindees":
      return (
        <>
          {/* Rivets — évoque le renforcement structurel */}
          {[110, 290].map((x) =>
            [100, 180, 260, 340].map((y) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill={frame} opacity="0.85" />
            ))
          )}
          <rect x="120" y="90" width="160" height="340" fill="none" stroke={line} strokeWidth="1.5" />
          <line x1="200" y1="90" x2="200" y2="430" stroke={line} strokeWidth="1" />
        </>
      );
    case "entree":
      return (
        <>
          <rect x="118" y="88" width="164" height="120" fill="none" stroke={line} strokeWidth="1.5" />
          <line x1="200" y1="88" x2="200" y2="208" stroke={line} strokeWidth="1" />
          <line x1="118" y1="148" x2="282" y2="148" stroke={line} strokeWidth="1" />
          <rect x="118" y="228" width="164" height="188" fill="none" stroke={line} strokeWidth="1" />
        </>
      );
    case "interieures":
      return (
        <>
          <rect x="130" y="94" width="140" height="322" fill="none" stroke={line} strokeWidth="1" />
          {[...Array(6)].map((_, i) => (
            <line
              key={i}
              x1={140 + i * 22}
              y1="104"
              x2={140 + i * 22}
              y2="406"
              stroke={line}
              strokeWidth="0.5"
              opacity="0.6"
            />
          ))}
        </>
      );
    case "modernes":
      return (
        <>
          <line x1="200" y1="86" x2="200" y2="434" stroke={frame} strokeWidth="1" opacity="0.7" />
        </>
      );
    case "decoratives":
      return (
        <>
          {[0, 1, 2, 3, 4].map((row) =>
            [0, 1, 2].map((col) => (
              <rect
                key={`${row}-${col}`}
                x={124 + col * 52 + offset}
                y={92 + row * 62}
                width="40"
                height="46"
                fill="none"
                stroke={frame}
                strokeWidth="1"
                opacity="0.55"
              />
            ))
          )}
        </>
      );
    case "sur-mesure":
    default:
      return (
        <>
          <rect x="112" y="82" width="176" height="356" fill="none" stroke={line} strokeWidth="1" strokeDasharray="6 6" />
        </>
      );
  }
}
