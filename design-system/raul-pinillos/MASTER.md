# Design System — Raúl Pinillos (MASTER) · v2 REDISEÑO COMPLETO

> Generado con el flujo del skill `ui-ux-pro-max` (base de datos consultada directamente — Python
> no disponible). Query: "education English teacher personal brand premium minimal elegant"
> · variance 3 · motion 4 · density 2. v2 reemplaza por completo el diseño previo.

## Clasificación (dominio `product` + `landing`)

- **Tipo**: Portfolio/Personal (marca personal) + B2B Service (credibilidad)
- **Patrón de landing**: Trust & Authority + Storytelling-Driven
  (hero credibilidad → prueba/stats → solución → camino narrativo → CTA de baja fricción)

## Estilo (dominio `style`, fila 50: Swiss Modernism 2.0 + fila 15: Motion-Driven)

- **Swiss Modernism 2.0**: grid estricto de 12 columnas, espaciado matemático (base 8 px),
  balance asimétrico, alta legibilidad, decoración mínima, **un solo acento vibrante**.
- **`--border-radius: 0`** — esquinas rectas en todo (regla explícita de la fila 50 de la DB).
- **Sin box-shadow** — la estructura se dibuja con hairlines (`#E2E8F0`) y líneas de retícula visibles.
- **Motion-Driven (tier Subtle/Standard)**: reveals 300–500 ms, stagger 0.06–0.08,
  Intersection Observer, `prefers-reduced-motion` siempre respetado.
- **Prohibido** (anti-patrones DB): Claymorphism, glassmorphism, blobs difuminados, chips
  flotantes sobre imágenes, sombras, degradados decorativos, emojis como iconos.

## Color (tokens — base "B2B Service" DB + acento único de marca)

| Token          | Valor     | Uso                                          |
|----------------|-----------|----------------------------------------------|
| blanco         | `#FFFFFF` | fondo base                                   |
| `paper`        | `#F8FAFC` | bandas alternas                              |
| `mist`         | `#E2E8F0` | hairlines / retícula                         |
| `slate`        | `#64748B` | texto secundario (AA sobre blanco y paper)   |
| `ink`          | `#0B1020` | texto principal                              |
| `navy`         | `#0F172A` | primario (botones, momentos de peso)         |
| `navy-deep`    | `#020617` | bandas oscuras (audiencias, footer)          |
| `electric`     | `#2452FF` | ÚNICO acento: itálicas de énfasis, regla A1→C1, hover CTA, índices |

Regla Swiss: el acento aparece con cuentagotas. Nada de `electric-soft` como fondo decorativo.

## Tipografía (dominio `typography`, pairing #1 "Classic Elegant")

- **Display**: Playfair Display 500–700 + itálica — titulares, numerales de stats, niveles CEFR, citas.
- **Body/UI**: Inter — cuerpo, navegación, botones, meta-labels en small caps con tracking amplio.
- Dispositivos editoriales: pull quote en "Sobre", atribuciones en small caps, meta-filas
  de sección `[índice] — [label] ———` con regla horizontal.

## Estructura de secciones (patrón Trust & Authority + Storytelling)

01 Hero asimétrico (7/5) con foto rectangular plana y ficha técnica debajo (NO overlays ni tarjetas
flotantes) · 02 Stats con contadores · 03 Niveles (filas editoriales) · 04 Método (retícula 2×2 con
líneas visibles) · 05 Audiencias (banda navy) · 06 Camino A1→C1 (regla vertical con progreso al
scroll — firma) · 07 Sobre (drop cap + pull quote) · 08 Testimonios (columnas planas) · 09 FAQ
(acordeón de filas) · Footer CTA.

## Checklist UX (prioridades 1–9 DB) — se mantiene de v1

Contraste AA · focus visible · targets ≥ 44 px · menú móvil real · `touch-action: manipulation`
· reduced-motion · iconos SVG · next/image con `sizes`/`priority` correcto · sin scroll horizontal.
