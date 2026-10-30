import type { Negocio, Foto } from './tipos';

// Fotos de Unsplash (licencia libre). En un cliente real se reemplazan por fotos del local.
const F = {
  portada: { src: 'https://images.unsplash.com/photo-1759200165738-6366977a73c6', alt: 'Muro con herramientas y artículos de ferretería en exhibición' },
  nosotros: { src: 'https://images.unsplash.com/photo-1497219055242-93359eeed651', alt: 'Manos trabajando madera con un formón' },
  herramientas: { src: 'https://images.unsplash.com/photo-1599651971621-7c42aaa20cd2', alt: 'Herramientas de mano sobre una mesa blanca' },
  construccion: { src: 'https://images.unsplash.com/photo-1775049525334-6a797b803823', alt: 'Bloques de concreto y tablas de madera apilados' },
  gasfiteria: { src: 'https://images.unsplash.com/photo-1642797735471-3e90055c5ff9', alt: 'Distintos tipos de cañerías y fittings sobre una mesa' },
  electricidad: { src: 'https://images.unsplash.com/photo-1601462904263-f2fa0c851cb9', alt: 'Cables eléctricos de colores' },
  taladro: { src: 'https://images.unsplash.com/photo-1504148455328-c376907d081c', alt: 'Taladro inalámbrico rojo' },
  destornilladores: { src: 'https://images.unsplash.com/photo-1524224313114-ebd9c49dde82', alt: 'Destornillador rojo con punta metálica' },
  huincha: { src: 'https://images.unsplash.com/photo-1703756291638-b1774ae3c186', alt: 'Huincha de medir sobre fondo blanco' },
  cemento: { src: 'https://images.unsplash.com/photo-1773394089934-3e29f2a3d6a9', alt: 'Sacos de cemento apilados' },
  pintura: { src: 'https://images.unsplash.com/photo-1670940094923-6f75e4dc5c3a', alt: 'Tarro de pintura azul con una brocha' },
  llave: { src: 'https://images.unsplash.com/photo-1687184464107-3804b88644c9', alt: 'Llave de bronce sobre una mesa de madera' },
  teflon: { src: 'https://images.unsplash.com/photo-1682540963112-facad29c3fa2', alt: 'Cañerías y fittings instalados en un muro' },
  ampolleta: { src: 'https://images.unsplash.com/photo-1674659719067-8735479ba10c', alt: 'Ampolleta blanca sobre una mesa' },
  extension: { src: 'https://images.unsplash.com/photo-1581558775369-0fe7925f0035', alt: 'Zapatilla eléctrica blanca y negra' },
} satisfies Record<string, Foto>;

export const ferreteria: Negocio = {
  slug: 'ferreteria',
  nombre: 'Ferretería El Perno',
  tipo: 'Ferretería',
  bajada: 'Todo para tu casa y tu obra, a la vuelta de la esquina.',
  descripcion:
    'Herramientas, materiales de construcción, gasfitería y electricidad. Arma tu lista en el catálogo y te respondemos con el stock y el total en el día.',
  direccion: 'Dirección de ejemplo 789',
  comuna: 'Santiago',
  whatsapp: '',
  horarios: [
    { dias: 'Lunes a viernes', horas: '8:30 a 19:00' },
    { dias: 'Sábado', horas: '9:00 a 14:00' },
  ],
  servicio: {
    titulo: 'Cotiza tu lista',
    texto: 'Te respondemos con el stock y el total en el día. Despacho de materiales pesados con costo según distancia.',
  },
  ventajas: [
    { titulo: 'Cotización en el día', texto: 'Envía tu lista y te respondemos con stock y total.' },
    { titulo: 'Factura para empresas', texto: 'Atendemos a maestros y pymes.' },
    { titulo: 'Despacho de materiales', texto: 'Materiales pesados hasta tu obra.' },
  ],
  mediosDePago: ['Efectivo', 'Débito y crédito', 'Transferencia', 'Factura para empresas'],
  fotos: { portada: F.portada, nosotros: F.nosotros },
  nosotros: {
    titulo: 'Te ayudamos a encontrar la pieza exacta',
    texto: [
      'Somos una ferretería de barrio atendida por gente que sabe de obra. Si no sabes cómo se llama lo que necesitas, tráenos la pieza vieja o mándanos una foto y te ayudamos a encontrarla.',
      'Atendemos a vecinos, maestros y pequeñas empresas, con factura y despacho de materiales pesados.',
    ],
  },
  pedido: {
    agregar: 'Agregar a la lista',
    titulo: 'Tu lista',
    enviar: 'Enviar lista para cotizar',
    nota: 'Precios referenciales con IVA. Te respondemos con el stock y el total en el día.',
    pasos: [
      { titulo: 'Arma tu lista', texto: 'Agrega desde el catálogo lo que necesitas para tu arreglo u obra.' },
      { titulo: 'Envíala por WhatsApp', texto: 'Se abre WhatsApp con tu lista escrita, con cantidades y total referencial.' },
      { titulo: 'Retira o recibe', texto: 'Te confirmamos stock y total, y retiras en el local o te lo despachamos.' },
    ],
  },
  colores: { fondo: '#F3F5F8', texto: '#14202E', marca: '#1D4E89', acento: '#F2B705' },
  ancho: 72,
  categorias: [
    {
      id: 'herramientas',
      nombre: 'Herramientas',
      descripcion: 'Eléctricas y de mano, para la casa y la obra.',
      foto: F.herramientas,
      productos: [
        { id: 'taladro', nombre: 'Taladro percutor', detalle: '650 W', precio: 39990, foto: F.taladro, destacado: true },
        { id: 'destornilladores', nombre: 'Juego de destornilladores', detalle: '6 piezas', precio: 7990, foto: F.destornilladores },
        { id: 'huincha', nombre: 'Huincha de medir', detalle: '5 metros', precio: 4490, foto: F.huincha, destacado: true },
      ],
    },
    {
      id: 'construccion',
      nombre: 'Construcción y pintura',
      descripcion: 'Cemento, pinturas y materiales para tu obra.',
      foto: F.construccion,
      productos: [
        { id: 'cemento', nombre: 'Cemento', detalle: 'Saco de 25 kg', precio: 5990, foto: F.cemento, destacado: true },
        { id: 'pintura', nombre: 'Pintura látex', detalle: '1 galón', precio: 14990, foto: F.pintura },
      ],
    },
    {
      id: 'gasfiteria',
      nombre: 'Gasfitería',
      descripcion: 'Llaves, fittings y todo para tus cañerías.',
      foto: F.gasfiteria,
      productos: [
        { id: 'llave-paso', nombre: 'Llave de paso', detalle: '1/2 pulgada', precio: 6490, foto: F.llave },
        { id: 'teflon', nombre: 'Cinta teflón', detalle: 'Rollo', precio: 590, foto: F.teflon },
      ],
    },
    {
      id: 'electricidad',
      nombre: 'Electricidad',
      descripcion: 'Ampolletas, extensiones y cables.',
      foto: F.electricidad,
      productos: [
        { id: 'ampolleta', nombre: 'Ampolleta LED', detalle: '9 W, luz cálida', precio: 1290, foto: F.ampolleta, destacado: true },
        { id: 'extension', nombre: 'Extensión eléctrica', detalle: '3 metros', precio: 4990, foto: F.extension },
      ],
    },
  ],
  preguntas: [
    { p: '¿Los precios incluyen IVA?', r: 'Sí, todos los precios publicados incluyen IVA. Son referenciales y te confirmamos el total al cotizar.' },
    { p: '¿Emiten factura?', r: 'Sí. Envíanos los datos de tu empresa junto con la lista.' },
    { p: '¿Despachan materiales pesados?', r: 'Sí, con costo según la distancia. Te lo cotizamos junto con la lista.' },
  ],
  ficticio: true,
  listado: true,
};
