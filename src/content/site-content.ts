import type { FeaturedProject, Service, Stat, WorkflowStep } from "@/types/content";

export const services = [
  {
    number: "01",
    slug: "video",
    title: "Producción audiovisual",
    short: "Historias que hacen visible el valor de tu empresa.",
    description:
      "Concepto, guion, dirección, rodaje y postproducción para piezas institucionales, campañas y contenido de marca.",
    tags: ["Dirección", "Rodaje", "Postproducción"],
    image: "/images/cinema-crew.jpg",
  },
  {
    number: "02",
    slug: "fotografia",
    title: "Fotografía industrial",
    short: "Precisión técnica con una mirada cinematográfica.",
    description:
      "Cobertura de operaciones, equipos, personas, eventos y productos con estándares visuales para comunicación corporativa.",
    tags: ["Industria", "Producto", "Corporativo"],
    image: "/images/studio-gear.jpg",
  },
  {
    number: "03",
    slug: "drone",
    title: "Drone & topografía",
    short: "Perspectiva aérea, datos precisos, decisiones claras.",
    description:
      "Fotogrametría, ortofotos, modelos digitales, inspecciones y registro aéreo para minería, construcción e infraestructura.",
    tags: ["Fotogrametría", "Ortofotos", "Inspección"],
    image: "/images/drone-flight.jpg",
  },
  {
    number: "04",
    slug: "streaming",
    title: "Streaming multicámara",
    short: "Tu evento en vivo con estándar broadcast.",
    description:
      "Realización en vivo, circuito cerrado y transmisión estable para eventos corporativos, lanzamientos y conferencias.",
    tags: ["En vivo", "Multicámara", "Broadcast"],
    image: "/images/factory-top.jpg",
  },
  {
    number: "05",
    slug: "experiencias",
    title: "Experiencias 360°",
    short: "Espacios y proyectos que se pueden recorrer.",
    description:
      "Fotografía, video 360° y recorridos inmersivos para acercar instalaciones, proyectos y destinos a cualquier pantalla.",
    tags: ["VR", "360°", "Inmersivo"],
    image: "/images/industrial-aerial.jpg",
  },
  {
    number: "06",
    slug: "digital",
    title: "Web & marketing digital",
    short: "Una presencia digital coherente con la calidad de tu marca.",
    description:
      "Diseño y desarrollo web, campañas y piezas digitales para convertir la producción audiovisual en una experiencia de marca completa.",
    tags: ["Web", "Campañas", "Contenido"],
    image: "/images/studio-gear.jpg",
  },
] as const satisfies readonly Service[];

export const projects = [
  {
    number: "01",
    title: "Industria en movimiento",
    category: "Video corporativo",
    location: "Cajamarca, Perú",
    description:
      "Una narrativa de precisión, escala y talento humano diseñada para posicionar una operación industrial.",
    image: "/images/industrial-aerial.jpg",
    accent: "#c5b8a3",
  },
  {
    number: "02",
    title: "Mirada aérea",
    category: "Drone & fotogrametría",
    location: "Sector minero",
    description:
      "Registro aéreo y lectura territorial para comunicar el alcance de proyectos de infraestructura.",
    image: "/images/drone-flight.jpg",
    accent: "#abb2b5",
  },
  {
    number: "03",
    title: "En escena",
    category: "Producción & streaming",
    location: "Cobertura nacional",
    description:
      "Realización multicámara con una puesta visual limpia para conectar audiencias en tiempo real.",
    image: "/images/cinema-crew.jpg",
    accent: "#8f918e",
  },
] as const satisfies readonly FeaturedProject[];

export const stats = [
  { value: "10+", label: "años creando" },
  { value: "06", label: "especialidades" },
  { value: "360°", label: "de cobertura" },
  { value: "24/7", label: "ideas en movimiento" },
] as const satisfies readonly Stat[];

export const workflow = [
  {
    number: "01",
    title: "Descubrimos",
    text: "Entendemos el negocio, la audiencia y el resultado que debe producir cada pieza.",
  },
  {
    number: "02",
    title: "Diseñamos",
    text: "Convertimos la estrategia en concepto, guion, plan de producción y lenguaje visual.",
  },
  {
    number: "03",
    title: "Producimos",
    text: "Coordinamos personas, tecnología y tiempos para ejecutar con seguridad y precisión.",
  },
  {
    number: "04",
    title: "Amplificamos",
    text: "Entregamos piezas optimizadas para cada canal y listas para mover a tu audiencia.",
  },
] as const satisfies readonly WorkflowStep[];
