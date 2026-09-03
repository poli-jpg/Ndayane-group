import { SVGProps } from "react";

export function TiktokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.5 2h-3.2v13.2a2.9 2.9 0 1 1-2.4-2.86V8.9a6.1 6.1 0 1 0 5.6 6.08V8.75a7.5 7.5 0 0 0 4.5 1.5V7a4.3 4.3 0 0 1-4.5-4.3V2Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.25-1.5 1.6-1.5h1.7V3.3C16.5 3.2 15.6 3 14.6 3c-2.4 0-4 1.4-4 4.1v2.7H8v3.2h2.6v8h2.9Z" />
    </svg>
  );
}
