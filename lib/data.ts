// Datos de ejemplo. Más adelante se reemplazan por la base de datos (Supabase).

export type Categoria = { id: string; nombre: string; icono: string };

export const categorias: Categoria[] = [
  { id: "frenos", nombre: "Frenos", icono: "disc" },
  { id: "motor", nombre: "Motor", icono: "cog" },
  { id: "suspension", nombre: "Suspensión", icono: "waves" },
  { id: "electrico", nombre: "Eléctrico", icono: "zap" },
  { id: "filtros", nombre: "Filtros", icono: "filter" },
  { id: "carroceria", nombre: "Carrocería", icono: "car" },
  { id: "accesorios", nombre: "Accesorios", icono: "package" },
  { id: "mas", nombre: "Y más...", icono: "plus" },
];

export type Repuesto = {
  id: string;
  nombre: string;
  precio: number;
  rating: number;
  opiniones: number;
  icono: string;
};

export const destacados: Repuesto[] = [
  { id: "pastillas-freno", nombre: "Pastillas de Freno Delanteras", precio: 29.99, rating: 4.8, opiniones: 120, icono: "disc" },
  { id: "filtro-aceite", nombre: "Filtro de Aceite Toyota", precio: 12.5, rating: 4.7, opiniones: 98, icono: "filter" },
  { id: "bujia-ngk", nombre: "Bujía NGK Iridium", precio: 8.99, rating: 4.9, opiniones: 75, icono: "zap" },
  { id: "bateria-12v", nombre: "Batería 12V 60Ah", precio: 89.99, rating: 4.8, opiniones: 110, icono: "battery" },
];

export const detalle = {
  nombre: "Pastillas de Freno Delanteras Bosch",
  rating: 4.8,
  opiniones: 120,
  precio: 29.99,
  precioAnterior: 34.99,
  descuento: 14,
  stock: "En stock",
  ubicacion: "Disponible en Quito",
  garantia: "6 meses",
  envio: "a todo el país",
  compatibilidad: "Toyota Corolla 2014-2019 | 1.8L",
  descripcion:
    "Pastillas de freno de alta calidad, mayor durabilidad y rendimiento en todo tipo de terreno.",
  vendedor: { nombre: "AutoParts Ecuador", rating: 4.8, ventas: "2.5k ventas", verificado: true },
  whatsapp: "593991234567",
};

export const panel = {
  metricas: [
    { id: "pub", etiqueta: "Total Publicaciones", valor: "24", icono: "box" },
    { id: "ped", etiqueta: "Pedidos Recibidos", valor: "18", icono: "cart" },
    { id: "ven", etiqueta: "Ventas Totales", valor: "$ 1,250.00", icono: "dollar" },
    { id: "sal", etiqueta: "Saldo Disponible", valor: "$ 987.50", icono: "wallet" },
  ],
  productos: [
    { id: "p1", nombre: "Pastillas de Freno Toyota", stock: 15, icono: "disc" },
    { id: "p2", nombre: "Filtro de Aceite", stock: 30, icono: "filter" },
    { id: "p3", nombre: "Bujía NGK", stock: 50, icono: "zap" },
  ],
  pedidos: [
    { id: "#100245", hace: "Hace 1 h", estado: "En proceso" },
    { id: "#100244", hace: "Hace 2 h", estado: "Enviado" },
    { id: "#100243", hace: "Hace 3 h", estado: "Entregado" },
  ],
};

export const contacto = {
  whatsapp: "+593 99 123 4567",
  correo: "info@ventaspro.com",
};
