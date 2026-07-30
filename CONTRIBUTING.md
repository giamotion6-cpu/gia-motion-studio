# Contribuir a GIA Motion

Gracias por ayudar a mejorar la experiencia digital de GIA Motion. Este proyecto prioriza claridad, rendimiento, accesibilidad y una dirección visual coherente.

## Flujo recomendado

1. Crea una rama corta desde `main`.
2. Implementa un cambio con alcance claro.
3. Ejecuta las validaciones locales.
4. Describe el impacto visual o técnico en el pull request.
5. Adjunta capturas cuando cambie la interfaz.

```bash
git checkout -b feature/nombre-del-cambio
npm ci
npm run lint
npm run typecheck
npm run build
```

## Convenciones

- Componentes React en PascalCase y archivos en kebab-case.
- Contenido editorial dentro de `src/content`.
- Funcionalidades grandes dentro de `src/features`.
- Importaciones directas y contratos TypeScript explícitos.
- Animaciones basadas preferentemente en `transform` y `opacity`.
- Toda experiencia animada necesita comportamiento para `prefers-reduced-motion`.

## Cambios visuales

- Verifica como mínimo escritorio y móvil.
- Conserva la proporción de logos, fotografías y video.
- Mantén contraste, foco visible y navegación por teclado.
- Evita incorporar dependencias cuando CSS o una utilidad existente sean suficientes.

## Commits

Usa mensajes breves y descriptivos:

```text
Mejora la navegación móvil
Optimiza la carga de la escena 3D
Añade un caso de estudio
```

## Pull requests

Explica qué cambió, por qué era necesario, cómo fue validado y si existe algún impacto en rendimiento o accesibilidad.

