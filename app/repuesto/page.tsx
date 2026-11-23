import Link from "next/link";
import {
  BadgeCheck,
  ChevronDown,
  ChevronRight,
  CircleDot,
  CreditCard,
  Home,
  MessageCircle,
  ShieldCheck,
  ShoppingCart,
  Star,
  Store,
  Truck,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { detalle } from "@/lib/data";

const miniaturas = ["a", "b", "c", "d"];

const beneficios = [
  { id: "garantia", titulo: "Garantía", texto: detalle.garantia, Icono: ShieldCheck },
  { id: "envio", titulo: "Envío rápido", texto: detalle.envio, Icono: Truck },
  { id: "pago", titulo: "Pago seguro", texto: "", Icono: CreditCard },
];

const pestanias = [
  { id: "descripcion", texto: "Descripción", activa: true },
  { id: "especificaciones", texto: "Especificaciones", activa: false },
  { id: "opiniones", texto: `Opiniones (${detalle.opiniones})`, activa: false },
];

export default function FichaRepuesto() {
  const whatsapp = `https://wa.me/${detalle.whatsapp}?text=${encodeURIComponent(
    `Hola, me interesa: ${detalle.nombre}`,
  )}`;

  return (
    <>
      <Header activo="" />

      <main className="container-page py-6">
        <nav aria-label="Ruta" className="mb-5 flex items-center gap-2 text-xs text-ink-muted">
          <Link href="/" aria-label="Inicio"><Home className="h-3.5 w-3.5" /></Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/#categorias">Categorías</Link>
          <ChevronRight className="h-3 w-3" />
          <span>Frenos</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-ink">Pastillas de Freno</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Fotos */}
          <div className="flex min-w-0 flex-col-reverse gap-3 sm:flex-row sm:items-start">
            <ul className="flex gap-2 sm:flex-col">
              {miniaturas.map((m, i) => (
                <li
                  key={m}
                  className={`flex h-16 w-16 items-center justify-center rounded-lg border bg-surface text-ink-muted ${
                    i === 0 ? "border-brand" : "border-line"
                  }`}
                >
                  <CircleDot className="h-7 w-7" strokeWidth={1.25} />
                </li>
              ))}
            </ul>
            <div className="flex aspect-[4/3] min-w-0 flex-1 items-center justify-center rounded-xl bg-surface text-ink-muted">
              {/* Aquí irá la foto principal del repuesto */}
              <CircleDot className="h-28 w-28" strokeWidth={0.9} aria-label="Foto del repuesto" />
            </div>
          </div>

          {/* Datos */}
          <div className="min-w-0">
            <h1 className="text-2xl font-extrabold leading-snug">{detalle.nombre}</h1>

            <p className="mt-2 flex items-center gap-2 text-sm">
              <span className="flex" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </span>
              <span className="font-semibold">{detalle.rating}</span>
              <span className="text-ink-muted">({detalle.opiniones} opiniones)</span>
            </p>

            <p className="mt-3 flex flex-wrap items-center gap-3">
              <span className="text-4xl font-extrabold text-brand">$ {detalle.precio.toFixed(2)}</span>
              <span className="text-base text-ink-muted line-through">$ {detalle.precioAnterior.toFixed(2)}</span>
              <span className="rounded bg-brand px-2 py-0.5 text-xs font-bold text-white">{detalle.descuento}% OFF</span>
            </p>

            <p className="mt-2 text-sm text-ink-muted">
              <span className="font-semibold text-green-600">✓ {detalle.stock}</span> · {detalle.ubicacion}
            </p>

            <ul className="mt-4 grid grid-cols-3 gap-2">
              {beneficios.map(({ id, titulo, texto, Icono }) => (
                <li key={id} className="flex items-center gap-2 rounded-lg bg-surface p-2.5">
                  <Icono className="h-5 w-5 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-xs leading-tight">
                    <span className="block font-semibold">{titulo}</span>
                    {texto && <span className="text-ink-muted">{texto}</span>}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-3 rounded-lg bg-surface p-3 text-sm">
              <p className="font-semibold">Compatibilidad</p>
              <p className="text-ink-muted">{detalle.compatibilidad}</p>
              <button className="mt-1 inline-flex items-center gap-1 text-xs text-ink-muted hover:text-brand">
                Ver más detalles <ChevronDown className="h-3 w-3" />
              </button>
            </div>

            <div className="mt-3 flex items-center justify-between gap-3 rounded-lg border border-line p-3">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-surface">
                  <Store className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="text-sm">
                  <p className="flex items-center gap-1 font-semibold">
                    {detalle.vendedor.nombre}
                    {detalle.vendedor.verificado && (
                      <BadgeCheck className="h-4 w-4 text-blue-500" aria-label="Vendedor verificado" />
                    )}
                  </p>
                  <p className="flex items-center gap-1 text-xs text-ink-muted">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    {detalle.vendedor.rating} ({detalle.vendedor.ventas})
                  </p>
                </div>
              </div>
              <button className="btn-outline">Ver tienda</button>
            </div>

            <div className="mt-4 grid gap-2">
              <button className="btn-primary py-3 text-base">
                <ShoppingCart className="h-5 w-5" /> Comprar ahora
              </button>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-green-600 bg-white px-4 py-3 text-sm font-semibold text-ink hover:bg-green-50"
              >
                <MessageCircle className="h-5 w-5 text-green-600" /> Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Pestañas */}
        <section className="mt-10 max-w-3xl">
          <div role="tablist" className="flex gap-6 border-b border-line text-sm font-medium">
            {pestanias.map((p) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={p.activa}
                className={`-mb-px border-b-2 pb-3 ${
                  p.activa ? "border-brand text-brand" : "border-transparent text-ink-muted hover:text-ink"
                }`}
              >
                {p.texto}
              </button>
            ))}
          </div>
          <p className="py-5 text-sm leading-relaxed text-ink-soft">{detalle.descripcion}</p>
        </section>
      </main>

      <Footer />
    </>
  );
}
