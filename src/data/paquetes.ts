// Paquetes y precios "desde". Precios brutos, en pesos chilenos.
// Decisión pendiente P4 del documento de contexto: ajustar después de los primeros diagnósticos.

export interface Paquete {
  id: string;
  nombre: string;
  para: string;
  desde: number;
  plazo: string;
  incluye: string[];
}

export const paquetes: Paquete[] = [
  {
    id: 'presencia',
    nombre: 'Presencia',
    para: 'Para que te encuentren y te contacten.',
    desde: 150000,
    plazo: 'Lista en 1 semana',
    incluye: [
      'Una página con tu información, horarios y ubicación',
      'Botón para que te escriban por WhatsApp',
      'Tu ficha de Google Maps al día',
      'Dominio .cl conectado',
    ],
  },
  {
    id: 'catalogo',
    nombre: 'Catálogo',
    para: 'Para mostrar tus productos y recibir pedidos por WhatsApp.',
    desde: 300000,
    plazo: 'Lista en 2 semanas',
    incluye: [
      'Todo lo de Presencia',
      'Catálogo que tú mismo actualizas',
      'Cargamos hasta 50 productos',
      'Pedidos por WhatsApp con el detalle escrito',
    ],
  },
  {
    id: 'tienda',
    nombre: 'Tienda',
    para: 'Para vender y cobrar online.',
    desde: 500000,
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
  'Todos incluyen el diseño de tu portada antes de que pagues, dos rondas de cambios, una capacitación para que la actualices y 15 días de garantía.';

export const notaTerceros =
  'Es un pago único. El dominio .cl (unos $12.000 al año) y, en Catálogo y Tienda, el plan de la plataforma los pagas directamente a cada proveedor. Los plazos corren desde que tenemos tus fotos y productos.';
