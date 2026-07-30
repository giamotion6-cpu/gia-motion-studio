import type {
  LegacyArticle,
  LegacyProject,
  LegacyTeamRole,
  LegacyValue,
} from "@/types/content";

/**
 * Contenido recuperado de la versión PHP (2024–2025).
 * Se conserva como fuente estructurada para futuras rutas, CMS o casos de estudio.
 * Los nombres de imágenes son referencias históricas: esos archivos nunca existieron
 * en el repositorio recibido y no deben publicarse sin asignar un recurso real.
 */
export const legacyProfile = {
  companyName: "GIA MOTION",
  tagline: "Productora Audiovisual",
  description:
    "Especializados en video y fotografía industrial, videos institucionales, registro de eventos, circuito cerrado y transmisiones en vivo, video y foto 360°, diseño y páginas web, y topografía con drones.",
  mission:
    "Brindar soluciones visuales de alta calidad que muestren tu marca en toda su potencia, amplifiquen su impacto y la hagan absolutamente inconfundible.",
  about: [
    "GIA MOTION es una productora audiovisual especializada en video y fotografía industrial, videos institucionales, registro de eventos, circuito cerrado y transmisiones en vivo, video y foto 360°, diseño y páginas web, y topografía con drones.",
    "Nuestra misión es brindar soluciones visuales de alta calidad que muestren tu marca en toda su potencia, amplifiquen su impacto y la hagan absolutamente inconfundible.",
    "Trabajamos con pasión y profesionalismo, utilizando las últimas tecnologías y equipos de vanguardia para garantizar resultados excepcionales en cada proyecto.",
  ],
  historicalContactPlaceholders: {
    phone: "+51 999 999 999",
    address: "Av. Ejemplo N° 123 - Cajamarca - Perú",
    whatsapp: "https://wa.me/51999999999",
    facebook: "#",
    instagram: "#",
    note: "Datos de ejemplo de la versión anterior; no exponer como información real.",
  },
} as const;

export const legacyServiceCopy = {
  intro: [
    "En GIA MOTION ofrecemos una amplia gama de servicios audiovisuales para satisfacer las necesidades de tu empresa o proyecto.",
    "Desde la producción de video y fotografía hasta la topografía con drones, trabajamos con las últimas tecnologías y equipos de vanguardia.",
  ],
  services: [
    { title: "Video", description: "Producción de video institucional, eventos y contenido corporativo." },
    { title: "Fotografía", description: "Fotografía profesional para eventos, productos y corporativo." },
    { title: "Drone", description: "Topografía, inspecciones y grabaciones aéreas con drones." },
    { title: "Streaming", description: "Transmisiones en vivo y eventos por internet." },
    { title: "360 Realidad Virtual", description: "Video y fotografía 360° para experiencias inmersivas." },
    { title: "Marketing Digital", description: "Diseño y desarrollo de páginas web y estrategias digitales." },
  ],
  reasons: [
    { title: "Experiencia", description: "Más de 10 años de experiencia en el sector audiovisual." },
    { title: "Tecnología", description: "Utilizamos equipos y software de última generación." },
    { title: "Calidad", description: "Garantizamos resultados de alta calidad en cada proyecto." },
  ],
} as const;

export const legacyValues = [
  { title: "Excelencia", description: "Nos comprometemos a entregar resultados excepcionales en cada proyecto." },
  { title: "Innovación", description: "Utilizamos las últimas tecnologías y tendencias del sector." },
  { title: "Pasión", description: "Trabajamos con pasión y dedicación en cada proyecto que emprendemos." },
] as const satisfies readonly LegacyValue[];

export const legacyTeam = [
  {
    role: "CEO / Productor",
    description: "Fundador y líder del equipo con más de 10 años de experiencia en producción audiovisual.",
    originalImageName: "team-1.jpg",
  },
  {
    role: "Director de Fotografía",
    description: "Especialista en fotografía industrial y corporativa con amplia experiencia.",
    originalImageName: "team-2.jpg",
  },
  {
    role: "Piloto de Drone",
    description: "Piloto certificado especializado en topografía y fotogrametría aérea.",
    originalImageName: "team-3.jpg",
  },
] as const satisfies readonly LegacyTeamRole[];

export const legacyProjects = [
  {
    title: "Proyecto Industrial",
    category: "Video Corporativo",
    description: "Producción de video institucional para empresa industrial en Arequipa.",
    originalImageName: "portfolio-1.jpg",
  },
  {
    title: "Evento Empresarial",
    category: "Fotografía",
    description: "Cobertura fotográfica de evento corporativo en Cajamarca.",
    originalImageName: "portfolio-2.jpg",
  },
  {
    title: "Topografía Aérea",
    category: "Drone",
    description: "Levantamiento topográfico con drones para proyecto minero.",
    originalImageName: "portfolio-3.jpg",
  },
  {
    title: "Transmisión en Vivo",
    category: "Streaming",
    description: "Transmisión en vivo de evento corporativo con múltiples cámaras.",
    originalImageName: "portfolio-4.jpg",
  },
  {
    title: "Video 360°",
    category: "Realidad Virtual",
    description: "Producción de video 360° para experiencia inmersiva.",
    originalImageName: "portfolio-5.jpg",
  },
  {
    title: "Sitio Web Corporativo",
    category: "Diseño Web",
    description: "Diseño y desarrollo de página web para empresa de logística.",
    originalImageName: "portfolio-6.jpg",
  },
] as const satisfies readonly LegacyProject[];

export const legacyBlog = {
  intro:
    "Compartimos conocimientos, experiencias y tendencias del sector audiovisual. Desde producción de video y fotografía hasta tecnologías emergentes como drones y realidad virtual.",
  newsletter: "Recibe las últimas novedades y tendencias del sector audiovisual.",
  articles: [
    {
      title: "5 Tendencias en Video Institucional para 2025",
      excerpt: "Descubre las tendencias más innovadoras en producción de video institucional que marcarán la diferencia en tu estrategia de comunicación empresarial.",
      date: "2025-01-15",
      category: "Video",
      originalImageName: "blog-1.jpg",
      author: "GIA MOTION",
    },
    {
      title: "Cómo elegir el mejor servicio de topografía con drones",
      excerpt: "Guía completa para seleccionar el proveedor de topografía aérea con drones que mejor se adapte a las necesidades de tu proyecto minero o construcción.",
      date: "2024-12-10",
      category: "Drone",
      originalImageName: "blog-2.jpg",
      author: "GIA MOTION",
    },
    {
      title: "Streaming en vivo: Clave para eventos corporativos exitosos",
      excerpt: "Aprende cómo la transmisión en vivo puede transformar tu próximo evento corporativo y llegar a una audiencia mucho más amplia.",
      date: "2024-11-20",
      category: "Streaming",
      originalImageName: "blog-3.jpg",
      author: "GIA MOTION",
    },
    {
      title: "Fotografía 360°: El futuro de la experiencia visual",
      excerpt: "Explora cómo la fotografía y video 360° están revolucionando la forma en que las empresas presentan sus proyectos y productos.",
      date: "2024-10-05",
      category: "Realidad Virtual",
      originalImageName: "blog-4.jpg",
      author: "GIA MOTION",
    },
    {
      title: "Diseño web: Primeros 3 segundos que deciden el éxito",
      excerpt: "En el mundo digital, esos primeros segundos son cruciales. Descubre cómo optimizar el diseño de tu página web para convertir visitas en clientes.",
      date: "2024-09-12",
      category: "Diseño Web",
      originalImageName: "blog-5.jpg",
      author: "GIA MOTION",
    },
    {
      title: "Video vs Fotografía: ¿Cuál es la mejor opción para tu evento?",
      excerpt: "Comparativa detallada entre video y fotografía para eventos corporativos, y cómo combinar ambos para obtener el mejor resultado.",
      date: "2024-08-08",
      category: "Fotografía",
      originalImageName: "blog-6.jpg",
      author: "GIA MOTION",
    },
  ] satisfies readonly LegacyArticle[],
} as const;

export const legacyTestimonial = {
  quote:
    "En el sector estratégico, la fuerza se demuestra. GIA MOTION ofrece soluciones visuales que muestran tu marca en toda su potencia, amplifican su impacto y la hacen absolutamente inconfundible.",
  author: "¡SIEMPRE LISTOS!",
} as const;

export const legacyContactCopy = {
  intro: "Estamos listos para ayudarte con tu proyecto.",
  formPrompt: "Completa el formulario y nos pondremos en contacto contigo lo antes posible.",
  location:
    "Estamos ubicados en Cajamarca, Perú. Puedes contactarnos por teléfono, correo electrónico o visitarnos en nuestras oficinas.",
  historicalHours: "Lunes a viernes, de 9:00 a 18:00.",
} as const;
