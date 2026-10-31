// Estructura de datos de un negocio. Con un archivo así se generan dos páginas:
// /demos/<slug> (inicio) y /demos/<slug>/catalogo (catálogo con pedido por WhatsApp).
// Sirve para las demos de la web y para los mockups de cada cliente.

export interface Foto {
  src: string; // URL de la imagen (Unsplash u otra) o ruta en /public, ej: /img/cliente/portada.jpg
  alt: string; // descripción corta para lectores de pantalla
}

export interface Producto {
  id: string; // único dentro del negocio (se usa en el carrito)
  nombre: string;
  detalle?: string; // presentación: "1 kg", "12 personas", etc.
  precio: number; // pesos chilenos
  foto?: Foto;
  destacado?: boolean; // aparece en "Destacados" del inicio
}

export interface Categoria {
  id: string; // ancla en el catálogo: /catalogo#<id>
  nombre: string;
  descripcion: string;
  foto?: Foto;
  productos: Producto[];
}

export interface Negocio {
  slug: string; // URL: /demos/<slug>
  nombre: string;
  tipo: string; // "Almacén", "Panadería"...
  bajada: string; // frase principal de la portada
  descripcion: string;
  direccion: string;
  comuna: string;
  whatsapp: string; // solo dígitos con 569...; en demos ficticias no se usa
  horarios: { dias: string; horas: string }[];
  servicio: { titulo: string; texto: string }; // despacho, encargos, cotizaciones...
  ventajas: { titulo: string; texto: string }[]; // 3 razones para comprar, bajo la portada
  mediosDePago: string[];
  fotos: { portada: Foto; nosotros: Foto };
  nosotros: { titulo: string; texto: string[] };
  // Textos del pedido: cambian si se pide, se encarga o se cotiza.
  pedido: {
    agregar: string; // botón de cada producto: "Agregar"
    titulo: string; // "Tu pedido", "Tu lista", "Tu encargo"
    enviar: string; // "Enviar pedido por WhatsApp"
    nota: string; // texto bajo el total
    pasos: { titulo: string; texto: string }[]; // sección "Cómo pedir"
  };
  colores: {
    fondo: string;
    texto: string;
    marca: string; // color principal (botones, letrero)
    acento: string; // color secundario (precios, detalles)
  };
  ancho: number; // ancho del letrero en %, de 62 (condensado) a 125 (expandido)
  categorias: Categoria[];
  preguntas: { p: string; r: string }[];
  ficticio: boolean; // true: los botones de WhatsApp llevan a TeLoArmo
}
