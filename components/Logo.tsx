import Link from "next/link";

export function Logo({ light = false, size = "md" }: { light?: boolean; size?: "sm" | "md" }) {
  const big = size === "md";
  return (
    <Link href="/" className="inline-flex flex-col leading-none" aria-label="VentasPro, inicio">
      <span className={`flex items-end gap-1.5 font-extrabold italic tracking-tight ${big ? "text-3xl" : "text-2xl"}`}>
        <svg viewBox="0 0 48 20" className={big ? "h-5 w-12" : "h-4 w-10"} aria-hidden="true">
          <path
            d="M2 15c2-6 7-9 14-9h10c6 0 10 3 14 9h-6a5 5 0 0 0-10 0H18a5 5 0 0 0-10 0z"
            fill="#D61F26"
          />
        </svg>
        <span className={light ? "text-white" : "text-ink"}>
          Ventas<span className="text-brand">Pro</span>
        </span>
      </span>
      <span className={`mt-1 text-[11px] font-medium ${light ? "text-white/80" : "text-ink-muted"}`}>
        Compra · Vende · Crece
      </span>
    </Link>
  );
}
