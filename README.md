# VentasPro

Marketplace de productos y repuestos (Compra · Vende · Crece).
Versión 0.1: diseño de las 3 pantallas principales con datos de ejemplo.

## Pantallas

| Ruta | Pantalla |
| --- | --- |
| `/` | Inicio con buscador, categorías y repuestos destacados |
| `/repuesto/` | Ficha del repuesto (compra y WhatsApp) |
| `/vendedor/` | Panel del vendedor |

## Probar en tu computador

```bash
npm install
npm run dev        # abre http://localhost:3000
```

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub y sube estos archivos a la rama `main`.
2. En el repositorio: **Settings → Pages → Source: GitHub Actions**.
3. Cada vez que subas cambios, el sitio se publica solo (`.github/workflows/pages.yml`).

El sitio queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

## Cambiar de hosting después

La dirección base sale de la variable `NEXT_PUBLIC_BASE_PATH` (ver `next.config.mjs`).
En Vercel u otro hosting con dominio propio, se deja vacía y no hay que tocar el código.

> Nota: GitHub Pages no permite usarse como hosting de un negocio en línea.
> Sirve para desarrollo y demostración; al lanzar se pasa a un hosting comercial.

## Estructura

- `app/` pantallas
- `components/` Header, Footer, tarjeta de repuesto, logo
- `lib/data.ts` datos de ejemplo (se reemplaza por Supabase)

## Pendiente

- Fotos reales de repuestos y logo definitivo
- Registro e inicio de sesión (Supabase)
- Publicar repuestos, buscador por vehículo, carrito y pagos
