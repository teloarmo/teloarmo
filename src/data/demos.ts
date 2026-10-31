// Páginas de ejemplo que se muestran en la sección Ejemplos. Cada una tiene su propio
// diseño en src/pages/demos/<slug>.astro; aquí van los datos de su tarjeta.
// Las capturas se regeneran con `node scripts/capturas.mjs` (con el servidor de desarrollo corriendo).

import type { ImageMetadata } from 'astro';
import { site } from './site';
import barberia from '../assets/ejemplos/barberia.webp';
import taller from '../assets/ejemplos/taller-mecanico.webp';
import ferreteria from '../assets/ejemplos/ferreteria.webp';
import ropa from '../assets/ejemplos/tienda-ropa.webp';
import cabanas from '../assets/ejemplos/cabanas.webp';

export interface Demo {
  slug: string;
  nombre: string;
  rubro: string;
  dominio: string; // se muestra en la barra del navegador de la tarjeta
  frase: string; // qué logra la página para ese negocio
  herramienta: string; // la función estrella de la página
  captura: ImageMetadata;
}

export const demos: Demo[] = [
  {
    slug: 'barberia',
    nombre: 'Filo Barbería',
    rubro: 'Barbería',
    dominio: 'filobarberia.cl',
    frase: 'Agenda llena sin contestar el teléfono: el cliente elige servicio, barbero y hora.',
    herramienta: 'Reservas online',
    captura: barberia,
  },
  {
    slug: 'cabanas',
    nombre: 'Refugio Los Coihues',
    rubro: 'Cabañas y turismo',
    dominio: 'loscoihues.cl',
    frase: 'Reservas directas, sin comisiones de plataformas, con el total calculado al instante.',
    herramienta: 'Reserva por fechas',
    captura: cabanas,
  },
  {
    slug: 'taller-mecanico',
    nombre: 'Torque Automotriz',
    rubro: 'Taller mecánico',
    dominio: 'torqueautomotriz.cl',
    frase: 'Cotizaciones que llegan con marca, modelo, año y servicio. Listas para responder.',
    herramienta: 'Cotizador',
    captura: taller,
  },
  {
    slug: 'tienda-ropa',
    nombre: 'Casa Lino',
    rubro: 'Tienda de ropa',
    dominio: 'casalino.cl',
    frase: 'Una vitrina abierta 24/7: eligen prenda y talla, y el pedido llega por WhatsApp.',
    herramienta: 'Tienda con tallas',
    captura: ropa,
  },
  {
    slug: 'ferreteria',
    nombre: 'Ferretería El Perno',
    rubro: 'Ferretería',
    dominio: 'ferreteriaelperno.cl',
    frase: 'Maestros y vecinos arman su lista desde la obra y reciben la cotización en el día.',
    herramienta: 'Lista para cotizar',
    captura: ferreteria,
  },
];

/** Primera línea de los mensajes de WhatsApp que se envían desde un ejemplo. */
export function introDemo(nombre: string, que: string): string {
  return `Hola, probé el ejemplo de ${nombre} en ${site.nombre} y me gustaría una página así para mi negocio. Esta fue mi ${que} de prueba:`;
}
