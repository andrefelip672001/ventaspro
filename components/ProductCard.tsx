import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";
import { Icon } from "./Icon";
import type { Repuesto } from "@/lib/data";

export function ProductCard({ r }: { r: Repuesto }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-line bg-white shadow-card">
      <Link
        href="/repuesto/"
        className="flex h-36 items-center justify-center bg-surface text-ink-muted"
        aria-label={`Ver ${r.nombre}`}
      >
        {/* Aquí irá la foto real del repuesto */}
        <Icon name={r.icono} className="h-14 w-14" strokeWidth={1.25} />
      </Link>

      <div className="flex flex-1 flex-col p-3">
        <h3 className="min-h-[2.5rem] text-sm font-semibold leading-snug">{r.nombre}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-base font-extrabold text-brand">$ {r.precio.toFixed(2)}</span>
          <span className="flex items-center gap-1 text-xs text-ink-muted">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            {r.rating.toFixed(1)} ({r.opiniones})
          </span>
        </div>
        <button className="btn-primary mt-3 w-full">
          <ShoppingCart className="h-4 w-4" /> Agregar al carrito
        </button>
      </div>
    </article>
  );
}
