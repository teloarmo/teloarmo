import type { Negocio, Foto } from './tipos';

// Fotos de Unsplash (licencia libre). En un cliente real se reemplazan por fotos del local.
const F = {
  portada: { src: 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877', alt: 'Vitrina de panadería con distintos panes' },
  nosotros: { src: 'https://images.unsplash.com/photo-1765005249334-8194ce969b64', alt: 'Manos amasando masa junto a un bol blanco' },
  pan: { src: 'https://images.unsplash.com/photo-1772758632784-7ccc90aa5328', alt: 'Panes recién horneados apilados' },
  tortas: { src: 'https://images.unsplash.com/photo-1604413191066-4dd20bedf486', alt: 'Torta decorada con flores rosadas y blancas' },
  once: { src: 'https://images.unsplash.com/photo-1516213335993-159eca2981af', alt: 'Café con dulces alrededor' },
  marraqueta: { src: 'https://images.unsplash.com/photo-1641736047680-49aa1fb95d53', alt: 'Panes recién horneados uno junto al otro' },
  hallulla: { src: 'https://images.unsplash.com/photo-1629583141640-b13c0fccdd61', alt: 'Pan sobre una mesa blanca' },
  amasado: { src: 'https://images.unsplash.com/photo-1716393374741-02f485f25d61', alt: 'Panes amasados sobre una mesa de madera' },
  milhojas: { src: 'https://images.unsplash.com/photo-1789583522267-a3b2022dc385', alt: 'Milhojas con crema en un plato blanco' },
  tresleches: { src: 'https://images.unsplash.com/photo-1673974798330-23e8f4c9ae05', alt: 'Trozo de torta con frambuesas' },
  kuchen: { src: 'https://images.unsplash.com/photo-1767065583839-81360b8ac6ff', alt: 'Kuchen de nuez con caramelo' },
  berlin: { src: 'https://images.unsplash.com/photo-1578257262683-e125b0b8593b', alt: 'Berlín con azúcar flor' },
  empanada: { src: 'https://images.unsplash.com/photo-1624128082323-beb6b8b508db', alt: 'Empanadas horneadas en un plato' },
} satisfies Record<string, Foto>;

export const panaderia: Negocio = {
  slug: 'panaderia',
  nombre: 'Panadería El Trigal',
  tipo: 'Panadería y pastelería',
  bajada: 'Pan calentito todos los días y tortas por encargo.',
  descripcion:
    'Marraquetas y hallullas recién salidas del horno, empanadas los fines de semana y tortas para tus celebraciones. Arma tu encargo en el catálogo.',
  direccion: 'Dirección de ejemplo 456',
  comuna: 'Santiago',
  whatsapp: '',
  horarios: [
    { dias: 'Lunes a sábado', horas: '7:00 a 21:00' },
    { dias: 'Domingo', horas: '8:00 a 14:00' },
  ],
  servicio: {
    titulo: 'Tortas por encargo',
    texto: 'Encarga con 48 horas de anticipación y retira en el local el día que necesites.',
  },
  ventajas: [
    { titulo: 'Pan dos veces al día', texto: 'Hornadas en la mañana y en la tarde.' },
    { titulo: 'Tortas por encargo', texto: 'Con 48 horas de anticipación.' },
    { titulo: 'Recetas de la casa', texto: 'Todo hecho en nuestro horno.' },
  ],
  mediosDePago: ['Efectivo', 'Débito y crédito', 'Transferencia para encargos'],
  fotos: { portada: F.portada, nosotros: F.nosotros },
  nosotros: {
    titulo: 'Horno encendido desde temprano',
    texto: [
      'Hacemos el pan todos los días en nuestro horno, con recetas de la familia. La primera marraqueta sale antes de que abramos la cortina.',
      'Nuestras tortas se hacen por encargo, para que lleguen frescas a tu celebración.',
    ],
  },
  pedido: {
    agregar: 'Agregar',
    titulo: 'Tu encargo',
    enviar: 'Enviar encargo por WhatsApp',
    nota: 'Para tortas, encarga con 48 horas de anticipación. Te confirmamos por WhatsApp.',
    pasos: [
      { titulo: 'Elige en el catálogo', texto: 'Pan del día, tortas o algo para la once.' },
      { titulo: 'Envía tu encargo', texto: 'Se abre WhatsApp con tu encargo escrito. Cuéntanos qué día lo necesitas.' },
      { titulo: 'Retira en el local', texto: 'Te confirmamos y lo tenemos listo a la hora que acordemos.' },
    ],
  },
  colores: { fondo: '#FBF4E8', texto: '#2E2117', marca: '#7A4A22', acento: '#E9B872' },
  ancho: 100,
  categorias: [
    {
      id: 'pan',
      nombre: 'Pan del día',
      descripcion: 'Recién salido del horno, mañana y tarde.',
      foto: F.pan,
      productos: [
        { id: 'marraqueta', nombre: 'Marraqueta', detalle: 'Por kilo', precio: 2600, foto: F.marraqueta, destacado: true },
        { id: 'hallulla', nombre: 'Hallulla', detalle: 'Por kilo', precio: 2600, foto: F.hallulla },
        { id: 'amasado', nombre: 'Pan amasado', detalle: '6 unidades', precio: 2400, foto: F.amasado },
      ],
    },
    {
      id: 'tortas',
      nombre: 'Tortas por encargo',
      descripcion: 'Para cumpleaños y celebraciones, con 48 horas de aviso.',
      foto: F.tortas,
      productos: [
        { id: 'milhojas', nombre: 'Torta mil hojas manjar', detalle: '15 personas', precio: 24990, foto: F.milhojas, destacado: true },
        { id: 'tresleches', nombre: 'Torta tres leches', detalle: '12 personas', precio: 19990, foto: F.tresleches, destacado: true },
        { id: 'kuchen', nombre: 'Kuchen de nuez', detalle: 'Entero', precio: 12990, foto: F.kuchen },
      ],
    },
    {
      id: 'once',
      nombre: 'Para la once',
      descripcion: 'Dulces y empanadas para acompañar el té.',
      foto: F.once,
      productos: [
        { id: 'berlin', nombre: 'Berlín', detalle: 'Unidad', precio: 900, foto: F.berlin },
        { id: 'empanada', nombre: 'Empanada de pino', detalle: 'Unidad, fines de semana', precio: 2500, foto: F.empanada, destacado: true },
      ],
    },
  ],
  preguntas: [
    { p: '¿Con cuánta anticipación encargo una torta?', r: 'Con 48 horas. Para tortas de más de 20 personas, escríbenos con una semana de anticipación.' },
    { p: '¿Hacen despacho?', r: 'Solo retiro en el local, para que el pan y las tortas lleguen perfectos.' },
    { p: '¿Puedo pedir una torta personalizada?', r: 'Sí. Escríbenos por WhatsApp con la idea, el tamaño y la fecha, y te cotizamos.' },
  ],
  ficticio: true,
  listado: true,
};
