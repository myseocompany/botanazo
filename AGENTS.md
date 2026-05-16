# AGENTS.md — Botanazo

Guía para agentes de IA que trabajen en este proyecto.

---

## Qué es este proyecto

**Botanazo** es un restaurante de comida mexicana ubicado en **Armenia, Quindío, Colombia**.

El objetivo del proyecto es construir una presencia digital sólida: sitio web optimizado para Google Search, Google Maps y LLMs (GEO — Generative Engine Optimization).

---

## Estructura del repositorio

```
botanazo/
├── AGENTS.md              ← este archivo
├── specs/
│   └── web.md             ← estrategia completa de web, SEO local y GEO
├── assets/
│   ├── menu.md            ← menú completo con precios en COP
│   ├── menu 2026 enero 2.pdf  ← versión PDF del menú
│   └── tomas/
│       ├── fotos/
│       │   ├── heic/      ← ~63 fotos en formato HEIC (originales)
│       │   └── jpg/       ← ~63 fotos en formato JPG (para web)
│       └── videos/        ← ~50 videos MOV del local y platos
└── referente/             ← carpeta vacía, reservada para referencias visuales
```

---

## Fuente de verdad por tema

| Tema | Archivo |
|---|---|
| Estrategia web, SEO, GEO, arquitectura de páginas | `specs/web.md` |
| Menú, platos, precios, categorías | `assets/menu.md` |
| Fotografía del local y platos (uso en web) | `assets/tomas/fotos/jpg/` |
| Videos del local (redes sociales, web) | `assets/tomas/videos/` |

---

## El restaurante en una oración

> Restaurante mexicano artesanal en Armenia, Quindío — tacos, burritos, quesadillas, cocteles y botanas en un ambiente cálido.

---

## Menú: categorías principales

- **Tacos** — pastor, carnitas, longaniza, suadero, tripa, birria, campechano, pollo
- **Burritos** — con frijoles refritos, guacamole, pico de gallo, queso y carne
- **Quesadillas** — incluye quesabirria y quesadilla Maya
- **Especiales** — chilaquiles, alambre, cazuela de queso, costra de queso
- **Nachos y dorilocos**
- **Elotes y esquites**
- **Almuerzo Botanazo** (12–3 p. m.) — chilaquiles o enchiladas rojas con bebida incluida
- **Vegetariano** — tacos, quesadilla, nachos, burro, elote, esquite
- **Bebidas** — bombata, chamoyada, aguas frescas (horchata, jamaica), gaseosas
- **Cócteles** — margaritas, paloma, charro negro, piña colada, ChamoChela, Seda Azteca
- **Cervezas y micheladas**

Precios en pesos colombianos (COP). Ver `assets/menu.md` para precios exactos.

---

## Palabras clave objetivo

- restaurante mexicano en Armenia
- tacos en Armenia Quindío
- comida mexicana en Armenia
- restaurante para cenar en Armenia
- restaurante para cumpleaños en Armenia
- dónde comer tacos cerca de mí
- mejores restaurantes mexicanos en Armenia

---

## Arquitectura web objetivo

```
/                          → Home
/menu                      → Menú mexicano
/tacos-en-armenia          → Tacos en Armenia, Quindío
/restaurante-mexicano-armenia  → Restaurante mexicano en Armenia
/domicilios                → Domicilios de comida mexicana en Armenia
/reservas                  → Reservas y WhatsApp
/cumpleanos                → Cumpleaños y celebraciones
/cocteles                  → Cócteles mexicanos y margaritas
/blog                      → Guías locales y recomendaciones
/contacto                  → Ubicación, horarios y mapa
```

---

## Dirección estética

**Concepto:** México artesanal + Eje Cafetero colombiano.

**Paleta visual:** 

**Evitar:** 

**Referencias de diseño:**
- Taquería Orinoco — claridad comercial, producto protagonista
- Molino El Pujol — maíz, tortilla, artesanía, sobriedad
- Tetetlán — naturaleza, plantas, arquitectura cálida
- Contramar — fotografía gastronómica, luz natural

---

## Principios para contenido generativo (GEO)

La web debe responder de forma **explícita** (sin que un LLM tenga que inferir):

1. Qué es el negocio y qué comida vende
2. Dónde está ubicado (ciudad, sector, dirección)
3. Qué platos lo diferencian
4. Para qué ocasiones es recomendable
5. Qué tipo de experiencia ofrece
6. Cuáles son sus horarios
7. Cómo reservar y cómo pedir por WhatsApp
8. Qué dicen sus clientes
9. Relación con Armenia, Quindío y el Eje Cafetero

---

## Instrucciones para agentes

- Leer `specs/web.md` antes de tomar decisiones de arquitectura, contenido o SEO.
- Usar `assets/menu.md` como única fuente de verdad para platos y precios.
- Las fotos en `assets/tomas/fotos/jpg/` son las aptas para la web (ya convertidas a JPG).
- El tono del copy debe ser **cálido, local y directo** — nunca genérico ni caricaturesco.
- Priorizar frases SEO claras sobre frases de marketing vacías.

---

## CSS y cache busting

El sitio no usa build tools ni versioning automático. Para forzar que los navegadores recarguen el CSS después de cambios, se renombra el archivo manualmente (ej. `styles-v2.css` → `styles-v3.css`) y se actualiza la referencia en todos los HTMLs de `public/`.

**Regla:** cada vez que se modifique el CSS, incrementar el número de versión del archivo y actualizar los 10 HTMLs antes de hacer deploy.
