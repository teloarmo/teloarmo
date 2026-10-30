# TeLoArmo · sitio web

Sitio estático hecho con Astro y Tailwind v4, publicado en Cloudflare Workers (static assets).
No tiene backend, base de datos ni formularios: el contacto es por WhatsApp.

## Cómo correrlo

```bash
npm install      # la primera vez y cada vez que cambie package.json
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Dónde se cambia cada cosa

| Qué | Archivo |
| --- | --- |
| WhatsApp, correo, link de agenda, Instagram | `src/data/site.ts` |
| Paquetes y precios | `src/data/paquetes.ts` |
| Preguntas frecuentes | `src/data/faq.ts` |
| Colores y tipografías | `src/styles/global.css` (bloque `@theme`) |
| Secciones de la página principal | `src/components/*.astro`, ordenadas en `src/pages/index.astro` |
| Ventana animada de la portada | `src/components/VentanaArmada.astro` |
| Política de privacidad | `src/pages/privacidad.astro` |

## Páginas de negocio (demos y mockups)

Cada negocio es un archivo de datos en `src/data/negocios/` y genera dos páginas:

- `/demos/<slug>/`: inicio con portada, categorías, destacados, cómo pedir, nosotros, ubicación y preguntas.
- `/demos/<slug>/catalogo/`: catálogo con buscador y pedido. El cliente agrega productos y se abre WhatsApp con el detalle, las cantidades y el total escritos.

Para hacer el mockup de un cliente:

1. Copia `src/data/negocios/almacen.ts` con otro nombre (ej. `donaRosa.ts`).
2. Cambia `slug`, `nombre`, `colores`, `ancho` del letrero, horarios, textos y productos.
3. Fotos: pon las del cliente en `public/img/<slug>/` y usa rutas como `/img/<slug>/portada.jpg`. Las demos usan fotos de Unsplash (licencia libre) cargadas desde su servidor.
4. Pon `ficticio: false`, `listado: false` y su número en `whatsapp`.
5. Agrégalo a la lista de `src/data/negocios/index.ts`.

Con `listado: false` la página existe pero no aparece en la web ni en el sitemap, y todas las páginas de `/demos/` llevan `noindex`.

## Deploy en Cloudflare

Primera vez, desde la terminal:

```bash
npm run build
npx wrangler deploy
```

Después conviene conectar el repo de GitHub en Cloudflare (Workers & Pages → Create → Import a repository) con build `npm run build` y deploy `npx wrangler deploy`, para que cada push se publique solo.

## Pendientes antes de publicar

- [ ] Número real de WhatsApp en `src/data/site.ts` (hoy tiene uno de relleno).
- [ ] Correo, link de agenda e Instagram en `src/data/site.ts`.
- [ ] Confirmar los precios "desde" en `src/data/paquetes.ts`.
- [ ] Revisar el texto de `src/pages/privacidad.astro`.
- [ ] Dominio teloarmo.cl conectado en Cloudflare.
- [ ] Imagen para compartir en redes (`og:image`).
