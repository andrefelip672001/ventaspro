import Link from "next/link";
import {
  Bell,
  ChevronDown,
  Home,
  LayoutDashboard,
  LogOut,
  Package,
  Receipt,
  Settings,
  ShoppingBag,
  TrendingUp,
  User,
  Wallet,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { Icon } from "@/components/Icon";
import { panel } from "@/lib/data";

const menu = [
  { id: "panel", texto: "Panel Principal", Icono: LayoutDashboard, activo: true },
  { id: "pub", texto: "Mis Publicaciones", Icono: Package },
  { id: "ped", texto: "Pedidos", Icono: ShoppingBag },
  { id: "ven", texto: "Ventas", Icono: TrendingUp },
  { id: "sal", texto: "Mi Saldo", Icono: Wallet },
  { id: "per", texto: "Mi Perfil", Icono: User },
  { id: "con", texto: "Configuración", Icono: Settings },
];

const colorEstado: Record<string, string> = {
  "En proceso": "bg-amber-100 text-amber-700",
  Enviado: "bg-blue-100 text-blue-700",
  Entregado: "bg-green-100 text-green-700",
};

export default function PanelVendedor() {
  return (
    <div className="flex min-h-screen flex-col bg-surface md:flex-row">
      {/* Menú lateral */}
      <aside className="bg-ink text-white md:w-60 md:shrink-0">
        <div className="flex items-center justify-between px-4 py-4 md:block md:px-5 md:py-6">
          <Logo light size="sm" />
          <Link href="/" className="inline-flex items-center gap-1 text-xs text-white/70 hover:text-white md:hidden">
            <Home className="h-3.5 w-3.5" /> Sitio
          </Link>
        </div>

        <nav aria-label="Panel" className="flex gap-1 overflow-x-auto px-3 pb-3 md:flex-col md:px-3 md:pb-6">
          {menu.map(({ id, texto, Icono, activo }) => (
            <a
              key={id}
              href="#"
              className={`flex shrink-0 items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium ${
                activo ? "bg-brand text-white" : "text-white/80 hover:bg-white/10"
              }`}
            >
              <Icono className="h-4 w-4" aria-hidden="true" /> {texto}
            </a>
          ))}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/10 md:mt-4"
          >
            <LogOut className="h-4 w-4" aria-hidden="true" /> Cerrar Sesión
          </Link>
        </nav>
      </aside>

      {/* Contenido */}
      <div className="flex-1">
        <div className="flex items-center justify-end gap-4 border-b border-line bg-white px-5 py-3">
          <button className="relative rounded-lg p-2 hover:bg-surface" aria-label="Notificaciones">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
              3
            </span>
          </button>
          <button className="flex items-center gap-2 text-sm font-medium">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface">
              <User className="h-4 w-4" />
            </span>
            Mi Tienda <ChevronDown className="h-4 w-4" />
          </button>
        </div>

        <main className="p-5 md:p-8">
          <h1 className="text-2xl font-extrabold">Panel de Vendedor</h1>
          <p className="text-sm text-ink-muted">Gestiona tu tienda y sigue tus ventas</p>

          <ul className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {panel.metricas.map((m) => (
              <li key={m.id} className="rounded-xl border border-line bg-white p-4 shadow-card">
                <Icon name={m.icono} className="h-6 w-6 text-brand" aria-hidden="true" />
                <p className="mt-3 text-xs text-ink-muted">{m.etiqueta}</p>
                <p className="text-2xl font-extrabold">{m.valor}</p>
              </li>
            ))}
          </ul>

          <div className="mt-6 grid gap-4 lg:grid-cols-[1.7fr_1fr]">
            <section className="rounded-xl border border-line bg-white p-4 shadow-card">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-bold">Tus Productos</h2>
                <a href="#" className="text-xs font-semibold text-brand">Ver todos →</a>
              </div>
              <ul className="divide-y divide-line">
                {panel.productos.map((p) => (
                  <li key={p.id} className="flex items-center gap-3 py-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface text-ink-muted">
                      <Icon name={p.icono} className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <span className="flex-1 text-sm font-medium">{p.nombre}</span>
                    <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                      Stock: {p.stock}
                    </span>
                    <span
                      role="switch"
                      aria-checked="true"
                      aria-label={`Publicación activa: ${p.nombre}`}
                      className="relative inline-block h-6 w-11 rounded-full bg-green-500"
                    >
                      <span className="absolute right-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow" />
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-xl border border-line bg-white p-4 shadow-card">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-bold">Pedidos Recientes</h2>
                <a href="#" className="text-xs font-semibold text-brand">Ver todos →</a>
              </div>
              <ul className="divide-y divide-line">
                {panel.pedidos.map((p) => (
                  <li key={p.id} className="flex items-center justify-between py-3 text-sm">
                    <span className="flex items-center gap-2">
                      <Receipt className="h-4 w-4 text-ink-muted" aria-hidden="true" />
                      <span>
                        <span className="block font-semibold">{p.id}</span>
                        <span className="text-xs text-ink-muted">{p.hace}</span>
                      </span>
                    </span>
                    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${colorEstado[p.estado]}`}>
                      {p.estado}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
