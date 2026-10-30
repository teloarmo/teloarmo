import type { Negocio, Foto } from './tipos';

// Fotos de Unsplash (licencia libre). En un cliente real se reemplazan por fotos del local.
const F = {
  portada: { src: 'https://images.unsplash.com/photo-1759860002165-f059bfcee759', alt: 'Interior de un almacén pequeño con estanterías llenas' },
  nosotros: { src: 'https://images.unsplash.com/photo-1758540853499-5f7422dd9f46', alt: 'Fachada de un minimercado con las puertas abiertas' },
  despensa: { src: 'https://images.unsplash.com/photo-1709236550338-e2bcc3beee70', alt: 'Bolsas con distintos alimentos de despensa' },
  lacteos: { src: 'https://images.unsplash.com/photo-1790581200500-d97c1afa4b1e', alt: 'Yogures y leches en estanterías refrigeradas' },
  bebidas: { src: 'https://images.unsplash.com/photo-1506617420156-8e4536971650', alt: 'Bebidas en un refrigerador comercial' },
  limpieza: { src: 'https://images.unsplash.com/photo-1759846866217-e627e4478f82', alt: 'Productos y útiles de limpieza sobre un mesón' },
  arroz: { src: 'https://images.unsplash.com/photo-1586201375761-83865001e31c', alt: 'Granos de arroz blanco' },
  aceite: { src: 'https://images.unsplash.com/photo-1666694890460-37ec16b0df47', alt: 'Botella de aceite' },
  fideos: { src: 'https://images.unsplash.com/photo-1591100063277-22df3021c611', alt: 'Fideos spaghetti secos' },
  azucar: { src: 'https://images.unsplash.com/photo-1673791031093-eb8eefa60083', alt: 'Cuchara con azúcar sobre una mesa' },
  leche: { src: 'https://images.unsplash.com/photo-1639151082235-406d8eb262b9', alt: 'Botella de leche junto a un vaso de leche' },
  queso: { src: 'https://images.unsplash.com/photo-1627935722051-395636b0d8a5', alt: 'Queso laminado sobre una tabla de madera' },
  yogurt: { src: 'https://images.unsplash.com/photo-1571212515416-fef01fc43637', alt: 'Pocillo de yogurt con una cuchara' },
  bebida: { src: 'https://images.unsplash.com/photo-1568657624422-1b8713e79461', alt: 'Seis botellas de bebida de colores' },
  agua: { src: 'https://images.unsplash.com/photo-1616118132534-381148898bb4', alt: 'Botella de agua sobre una mesa blanca' },
  detergente: { src: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce', alt: 'Envase de detergente rosado y verde' },
  papel: { src: 'https://images.unsplash.com/photo-1608494133726-bb93324274c8', alt: 'Rollos de papel higiénico' },
} satisfies Record<string, Foto>;

export const almacen: Negocio = {
  slug: 'almacen',
  nombre: 'Almacén La Esquina',
  tipo: 'Almacén',
  bajada: 'Tu almacén de siempre, ahora también por WhatsApp.',
  descripcion:
    'Despensa, lácteos, bebidas y artículos de limpieza a la vuelta de tu casa. Arma tu pedido en el catálogo y te lo llevamos dentro de la comuna.',
  direccion: 'Dirección de ejemplo 123',
  comuna: 'Santiago',
  whatsapp: '',
  horarios: [
    { dias: 'Lunes a sábado', horas: '8:30 a 21:30' },
    { dias: 'Domingo', horas: '10:00 a 14:00' },
  ],
  servicio: {
    titulo: 'Despacho en la comuna',
    texto: 'Desde $1.500, gratis sobre $20.000. Pedidos hasta las 19:00 llegan el mismo día.',
  },
  ventajas: [
    { titulo: 'Despacho el mismo día', texto: 'Pedidos hasta las 19:00, dentro de la comuna.' },
    { titulo: 'Paga como prefieras', texto: 'Efectivo, tarjeta o transferencia.' },
    { titulo: 'Abierto los 7 días', texto: 'Los domingos, hasta las 14:00.' },
  ],
  mediosDePago: ['Efectivo', 'Débito y crédito', 'Transferencia'],
  fotos: { portada: F.portada, nosotros: F.nosotros },
  nosotros: {
    titulo: 'El almacén de la esquina, como siempre',
    texto: [
      'Somos un almacén familiar que atiende al barrio todos los días. Conocemos a nuestros vecinos por su nombre y sabemos qué llevan cada semana.',
      'Ahora también puedes pedirnos desde el celular: armas tu pedido, nos llega por WhatsApp y te lo llevamos a la casa.',
    ],
  },
  pedido: {
    agregar: 'Agregar',
    titulo: 'Tu pedido',
    enviar: 'Enviar pedido por WhatsApp',
    nota: 'Te confirmamos el total y la hora de entrega por WhatsApp.',
    pasos: [
      { titulo: 'Elige tus productos', texto: 'Agrega al pedido lo que necesitas desde el catálogo.' },
      { titulo: 'Envíalo por WhatsApp', texto: 'Se abre WhatsApp con tu pedido escrito, con cantidades y total.' },
      { titulo: 'Recíbelo en tu casa', texto: 'Te confirmamos y lo despachamos el mismo día dentro de la comuna.' },
    ],
  },
  colores: { fondo: '#FFF9EF', texto: '#2A1E1A', marca: '#B3261E', acento: '#F2C230' },
  ancho: 120,
  categorias: [
    {
      id: 'despensa',
      nombre: 'Despensa',
      descripcion: 'Arroz, fideos, aceite y lo básico de la cocina.',
      foto: F.despensa,
      productos: [
        { id: 'arroz', nombre: 'Arroz grado 1', detalle: '1 kg', precio: 1590, foto: F.arroz, destacado: true },
        { id: 'aceite', nombre: 'Aceite maravilla', detalle: '1 litro', precio: 2990, foto: F.aceite },
        { id: 'fideos', nombre: 'Fideos spaghetti', detalle: '400 g', precio: 990, foto: F.fideos, destacado: true },
        { id: 'azucar', nombre: 'Azúcar', detalle: '1 kg', precio: 1290, foto: F.azucar },
      ],
    },
    {
      id: 'lacteos',
      nombre: 'Lácteos',
      descripcion: 'Leche, quesos y yogurt siempre frescos.',
      foto: F.lacteos,
      productos: [
        { id: 'leche', nombre: 'Leche entera', detalle: '1 litro', precio: 1190, foto: F.leche, destacado: true },
        { id: 'queso', nombre: 'Queso gauda laminado', detalle: '250 g', precio: 3490, foto: F.queso, destacado: true },
        { id: 'yogurt', nombre: 'Yogurt batido', detalle: 'Pack de 4', precio: 1990, foto: F.yogurt },
      ],
    },
    {
      id: 'bebidas',
      nombre: 'Bebidas',
      descripcion: 'Bebidas, jugos y agua mineral.',
      foto: F.bebidas,
      productos: [
        { id: 'bebida', nombre: 'Bebida', detalle: '3 litros', precio: 2890, foto: F.bebida },
        { id: 'agua', nombre: 'Agua mineral', detalle: '1,6 litros', precio: 990, foto: F.agua },
      ],
    },
    {
      id: 'limpieza',
      nombre: 'Limpieza',
      descripcion: 'Detergente, papel y lo necesario para la casa.',
      foto: F.limpieza,
      productos: [
        { id: 'detergente', nombre: 'Detergente líquido', detalle: '3 litros', precio: 6990, foto: F.detergente },
        { id: 'papel', nombre: 'Papel higiénico', detalle: '12 rollos', precio: 5990, foto: F.papel },
      ],
    },
  ],
  preguntas: [
    { p: '¿Cómo hago un pedido?', r: 'Agrega los productos en el catálogo y toca "Enviar pedido por WhatsApp". Te confirmamos el total y la hora de entrega.' },
    { p: '¿Hasta dónde llegan?', r: 'Despachamos dentro de la comuna. Si estás fuera, puedes retirar en el local.' },
    { p: '¿Puedo pedir algo que no está en el catálogo?', r: 'Sí, escríbenos por WhatsApp y te contamos si lo tenemos.' },
  ],
  ficticio: true,
  listado: true,
};
