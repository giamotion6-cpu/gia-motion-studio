# Arquitectura de GIA Motion

La web usa Next.js App Router, React 19 y TypeScript. La estructura separa responsabilidades para que la portada pueda crecer a proyectos, blog o CMS sin duplicar lógica.

```text
src/
  app/                  Rutas, metadata y estilos globales
  components/
    layout/             Header, footer y marca compartidos
    ui/                 Primitivas visuales reutilizables
  features/
    hero/               Portada y escena 3D aislada
    home/               Secciones funcionales de la página principal
  content/              Contenido editorial actual e histórico
  lib/                  Configuración y utilidades sin UI
  providers/            Comportamientos globales del cliente
  types/                Contratos TypeScript del contenido
public/
  images/               Imágenes optimizadas por Next/Image
  media/                Reel original de GIA Motion
```

## Cómo extenderla

- Una nueva página vive en `src/app/<ruta>/page.tsx`.
- Una funcionalidad grande vive en `src/features/<nombre>` y expone solo sus componentes necesarios.
- El contenido compartido entra por `src/content`; la configuración de dominio y contacto por `src/lib/site-config.ts`.
- Las importaciones son directas, sin archivos `index.ts` globales, para mantener límites claros y facilitar el tree-shaking.
- La escena 3D está aislada y se carga de forma diferida solo en escritorio, sin movimiento reducido.
