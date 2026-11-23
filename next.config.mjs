// Exportación estática: funciona en GitHub Pages ahora y se puede mover a Vercel u otro hosting después.
// En GitHub Pages el sitio vive en /nombre-del-repo, por eso la dirección base sale de una variable.
// Ejemplo: NEXT_PUBLIC_BASE_PATH=/ventaspro npm run build
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
};

export default nextConfig;
