import Link from "next/link";
import { ArrowRight, Calendar, Car, CircleDot, Cog, Handshake, Search, ShieldCheck, Truck } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Icon } from "@/components/Icon";
import { categorias, destacados } from "@/lib/data";

const filtros = [
  { id: "marca", texto: "Marca", Icono: Car },
  { id: "modelo", texto: "Modelo", Icono: Car },
  { id: "anio", texto: "Año", Icono: Calendar },
  { id: "categoria", texto: "Categoría", Icono: Cog },
];

const garantias = [
  { id: "compra", titulo: "Compra Segura", texto: "Tus pagos protegidos", Icono: ShieldCheck },
  { id: "envios", titulo: "Envíos a Todo el País", texto: "Recibe donde estés", Icono: Truck },
  { id: "garantia", titulo: "Garantía en tus Compras", texto: "Compra con confianza", Icono: Handshake },
];

export default function Inicio() {
  return (
    <>
      <Header activo="Inicio" />

      <main>
        {/* Portada con buscador */}
        <section className="relative overflow-hidden bg-ink text-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(60% 80% at 85% 40%, rgba(214,31,38,.55), transparent 60%), radial-gradient(40% 60% at 70% 90%, rgba(255,255,255,.08), transparent 70%)",
            }}
            aria-hidden="true"
          />
          <CircleDot
            className="pointer-events-none absolute -right-10 top-1/2 hidden h-72 w-72 -translate-y-1/2 text-white/10 lg:block"
            strokeWidth={0.75}
            aria-hidden="true"
          />

          <div className="container-page relative py-12 sm:py-16">
            <h1 className="max-w-xl text-3xl font-extrabold leading-tight sm:text-5xl">
              Encuentra los mejores <span className="text-brand">productos y repuestos</span> en un solo lugar
            </h1>
            <p className="mt-4 text-base text-white/90">Busca, compara y compra al mejor precio</p>

            <form className="mt-6 flex max-w-xl overflow-hidden rounded-lg bg-white shadow-card" role="search">
              <label htmlFor="q" className="sr-only">Buscar repuestos</label>
              <div className="flex flex-1 items-center gap-2 px-3 text-ink-muted">
                <Search className="h-4 w-4 shrink-0" aria-hidden="true" />
                <input
                  id="q"
                  type="search"
                  placeholder="Buscar por marca, modelo o número de parte..."
                  className="w-full py-3 text-sm text-ink outline-none placeholder:text-ink-muted"
                />
              </div>
              <button type="button" className="bg-brand px-5 text-sm font-semibold text-white hover:bg-brand-dark">
                Buscar
              </button>
            </form>

            <div className="mt-4 flex flex-wrap gap-2">
              {filtros.map(({ id, texto, Icono }) => (
                <button
                  key={id}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/20"
                >
                  <Icono className="h-4 w-4" aria-hidden="true" /> {texto}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Categorías */}
        <section id="categorias" className="container-page -mt-2 py-6">
          <ul className="grid grid-cols-4 gap-3 sm:grid-cols-8">
            {categorias.map((c) => (
              <li key={c.id}>
                <Link
                  href="/#categorias"
                  className="flex h-full flex-col items-center gap-2 rounded-xl border border-line bg-white px-2 py-3 text-center text-xs font-medium shadow-card hover:border-brand hover:text-brand"
                >
                  <Icon name={c.icono} className="h-7 w-7" strokeWidth={1.5} />
                  {c.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Destacados */}
        <section className="container-page pb-6 pt-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="border-l-4 border-brand pl-3 text-xl font-extrabold">Repuestos Destacados</h2>
            <Link href="/repuesto/" className="inline-flex items-center gap-1 text-sm font-semibold text-brand">
              Ver todos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {destacados.map((r) => (
              <ProductCard key={r.id} r={r} />
            ))}
          </div>
        </section>

        {/* Garantías */}
        <section className="container-page pb-10 pt-4">
          <ul className="grid gap-3 md:grid-cols-3">
            {garantias.map(({ id, titulo, texto, Icono }) => (
              <li key={id} className="flex items-center gap-4 rounded-xl bg-surface p-4">
                <Icono className="h-9 w-9 shrink-0 text-ink" strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold">{titulo}</p>
                  <p className="text-xs text-ink-muted">{texto}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
