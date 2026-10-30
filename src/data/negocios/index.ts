// Todos los negocios que generan una página en /demos/<slug>.
// Para un mockup de cliente: copia un archivo (ej. almacen.ts), cámbiale slug, nombre,
// colores y productos, pon ficticio: false y listado: false, y agrégalo a esta lista.

import { almacen } from './almacen';
import { panaderia } from './panaderia';
import { ferreteria } from './ferreteria';
import type { Negocio } from './tipos';

export const negocios: Negocio[] = [almacen, panaderia, ferreteria];

export const ejemplos = negocios.filter((n) => n.listado);

export type { Negocio } from './tipos';
