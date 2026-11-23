import Link from "next/link";
import { Mail, MessageCircle, Music2 } from "lucide-react";
import { Facebook, Instagram, Youtube } from "./SocialIcons";
import { Logo } from "./Logo";
import { contacto } from "@/lib/data";

export function Footer() {
  return (
    <footer id="ayuda" className="bg-ink text-white">
      <div className="container-page grid gap-8 py-10 md:grid-cols-4">
        <div>
          <Logo light />
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Enlaces Rápidos</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/" className="hover:text-white">Inicio</Link></li>
            <li><Link href="/#categorias" className="hover:text-white">Categorías</Link></li>
            <li><Link href="/vendedor/" className="hover:text-white">Mis Pedidos</Link></li>
            <li><Link href="/#ayuda" className="hover:text-white">Ayuda</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Síguenos</h3>
          <div className="flex gap-3 text-white/90">
            <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-2 hover:bg-brand"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-2 hover:bg-brand"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="TikTok" className="rounded-full bg-white/10 p-2 hover:bg-brand"><Music2 className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="rounded-full bg-white/10 p-2 hover:bg-brand"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Contáctanos</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-green-400" /> {contacto.whatsapp}</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> {contacto.correo}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-4 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 VentasPro. Todos los derechos reservados.</p>
          <p>
            <a href="#" className="hover:text-white">Términos y Condiciones</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white">Política de Privacidad</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
