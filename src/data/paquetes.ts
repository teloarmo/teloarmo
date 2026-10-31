// Paquetes y precios "desde". Precios brutos, en pesos chilenos.
// Decisión pendiente P4 del documento de contexto: ajustar después de los primeros diagnósticos.

export interface Paquete {
  id: string;
  nombre: string;
  para: string;
  desde: number;
  plazo: string;
  incluye: string[];
  destacado?: boolean; // se muestra resaltado como recomendado
}

export const paquetes: Paquete[] = [
  {
    id: 'presencia',
    nombre: 'Presencia',
    para: 'Para que te encuentren en Google y te contacten.',
    desde: 149990,
    plazo: 'Lista en 1 semana',
    incluye: [
      'Una página con tu información, horarios y ubicación',
      'Botones a tu WhatsApp, Instagram y redes sociales',
      'Estadísticas de visitas con Google Analytics',
      'Optimizada para la búsqueda de Google y tu ficha de Google Maps al día',
      'Dominio .cl conectado',
    ],
  },
  {
    id: 'catalogo',
    nombre: 'Catálogo',
    para: 'Para mostrar lo que vendes y recibir pedidos, reservas o cotizaciones.',
    desde: 299990,
    plazo: 'Lista en 2 semanas',
    incluye: [
      'Todo lo de Presencia',
      'Catálogo que tú mismo actualizas',
      'Cargamos hasta 50 productos o servicios',
      'Pedidos, reservas o cotizaciones por WhatsApp, con el detalle escrito',
      'Reportes de tus productos o servicios más vistos',
    ],
    destacado: true,
  },
  {
    id: 'tienda',
    nombre: 'Tienda',
    para: 'Para vender y cobrar online, las 24 horas.',
    desde: 499990,
    plazo: 'Lista en 3 semanas',
    incluye: [
      'Todo lo de Catálogo',
      'Pago con tarjeta (Webpay o Mercado Pago)',
      'Despacho o retiro en tu local',
      'Cargamos hasta 100 productos',
    ],
  },
];

export const incluidoSiempre =
  'Todos incluyen el diseño de tu portada antes de partir, dos rondas de cambios, una capacitación para que la actualices y 15 días de garantía.';

export const notaTerceros =
  'Sin mensualidades con nosotros. El dominio .cl (unos $12.000 al año) y, en Catálogo y Tienda, el plan de la plataforma quedan a tu nombre con cada proveedor. Los plazos corren desde que tenemos tus fotos y productos.';
