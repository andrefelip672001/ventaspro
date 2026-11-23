"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, Search, ShoppingCart, X } from "lucide-react";
import { Logo } from "./Logo";

const enlaces = [
  { href: "/", texto: "Inicio", activo: true },
  { href: "/#categorias", texto: "Categorías", menu: true },
  { href: "/vendedor/", texto: "Vendedores" },
  { href: "/#ayuda", texto: "Ayuda", menu: true },
];

export function Header({ activo = "Inicio" }: { activo?: string }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-page flex items-center justify-between py-3">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {enlaces.map((e) => (
            <Link
              key={e.texto}
              href={e.href}
              className={`inline-flex items-center gap-1 border-b-2 pb-1 text-sm font-medium ${
                e.texto === activo ? "border-brand text-ink" : "border-transparent text-ink-soft hover:text-brand"
              }`}
            >
              {e.texto}
              {e.menu && <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-lg p-2 hover:bg-surface" aria-label="Buscar">
            <Search className="h-5 w-5" />
          </button>
          <button className="rounded-lg p-2 hover:bg-surface" aria-label="Carrito">
            <ShoppingCart className="h-5 w-5" />
          </button>
          <Link href="/vendedor/" className="btn-primary hidden sm:inline-flex">
            Ingresar
          </Link>
          <button
            className="rounded-lg p-2 hover:bg-surface md:hidden"
            onClick={() => setAbierto((v) => !v)}
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={abierto}
          >
            {abierto ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {abierto && (
        <nav className="border-t border-line bg-white md:hidden" aria-label="Menú móvil">
          <div className="container-page flex flex-col py-2">
            {enlaces.map((e) => (
              <Link
                key={e.texto}
                href={e.href}
                onClick={() => setAbierto(false)}
                className="border-b border-line py-3 text-sm font-medium last:border-0"
              >
                {e.texto}
              </Link>
            ))}
            <Link href="/vendedor/" className="btn-primary my-3" onClick={() => setAbierto(false)}>
              Ingresar
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
