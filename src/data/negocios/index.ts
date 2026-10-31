// Todos los negocios que generan una página en /demos/<slug> con la plantilla común.
// Para un mockup de cliente: copia un archivo (ej. almacen.ts), cámbiale slug, nombre,
// colores y productos, pon ficticio: false y agrégalo a esta lista.
// Los ejemplos de la web (src/data/demos.ts) tienen cada uno su propio diseño.

import { almacen } from './almacen';
import { panaderia } from './panaderia';
import type { Negocio } from './tipos';

export const negocios: Negocio[] = [almacen, panaderia];

export type { Negocio } from './tipos';
