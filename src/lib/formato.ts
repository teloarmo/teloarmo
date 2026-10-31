// Utilidades compartidas.

/**
 * Ruta interna del sitio con la base configurada en astro.config.mjs.
 * "/demos/barberia/" -> "/teloarmo/demos/barberia/" en GitHub Pages, o igual con dominio propio.
 */
export function ruta(camino: string): string {
  return import.meta.env.BASE_URL.replace(/\/$/, '') + camino;
}

/** Link de WhatsApp con mensaje prellenado. `numero`: solo dígitos con código de país (569...). */
export function waLink(numero: string, texto?: string): string {
  const base = `https://wa.me/${numero.replace(/\D/g, '')}`;
  return texto ? `${base}?text=${encodeURIComponent(texto)}` : base;
}

const clp = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  maximumFractionDigits: 0,
});

/** 1590 -> "$1.590" */
export function precio(valor: number): string {
  return clp.format(valor).replace(/\s/g, '');
}

/** "Arroz grado 1" -> "AG" */
export function iniciales(texto: string): string {
  return texto
    .split(/\s+/)
    .filter((p) => /^[A-Za-zÁÉÍÓÚÑáéíóúñ]/.test(p))
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join('');
}

/**
 * URL de una foto en un ancho dado. Las fotos de Unsplash se recortan y comprimen
 * desde su CDN; las rutas locales (/img/...) se devuelven tal cual.
 */
export function fotoUrl(src: string, ancho: number, alto?: number): string {
  if (!src.includes('images.unsplash.com')) return src;
  const u = new URL(src);
  u.searchParams.set('auto', 'format');
  u.searchParams.set('fit', 'crop');
  u.searchParams.set('q', '70');
  u.searchParams.set('w', String(ancho));
  if (alto) u.searchParams.set('h', String(alto));
  return u.toString();
}

/** srcset para una foto con proporción fija (ancho/alto). */
export function fotoSrcset(src: string, anchos: number[], proporcion: number): string | undefined {
  if (!src.includes('images.unsplash.com')) return undefined;
  return anchos.map((w) => `${fotoUrl(src, w, Math.round(w / proporcion))} ${w}w`).join(', ');
}
