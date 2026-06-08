# Auditoría — `specs/spec-domicilios-menu-digital.md`

**Primera revisión:** 2026-06-08
**Segunda revisión:** 2026-06-08 (post-actualización del spec)
**Tercera revisión:** 2026-06-08 (post-aplicación de P2)
**Archivo auditado:** `specs/spec-domicilios-menu-digital.md`
**Fuentes contrastadas:** `assets/menu.md`, `public/domicilios.html`, `public/menu.html`, `specs/web.md`, `specs/spec-mejoras-prompt-domicilios.md`, `memory/project_horario.md`

---

## Estado tras tercera revisión

Todos los bloqueantes (P0), hallazgos de consistencia (P1) y vacíos funcionales (P1) están cerrados. Los tres residuales P2 fueron aplicados al spec. Las dos preguntas operativas pendientes quedaron capturadas explícitamente. **El spec está listo para implementación sin observaciones residuales.**

---

## 1. Validación contra fuentes de verdad

| Punto | Estado |
|---|---|
| Horario 5-10 p. m., miércoles cerrado (§3, §5, §9) | OK contra `memory/project_horario.md` |
| Dirección, WhatsApp, Instagram (§5) | OK contra `public/domicilios.html` |
| Precios en §7 (tacos, burritos, cervezas, micheladas) | OK contra `assets/menu.md` |
| 7 imágenes priorizadas en §10 | OK, todas existen en `public/assets/images/` |
| Versión CSS siguiente `styles-v18.css` | OK, vigente es `styles-v17.css` |

---

## 2. Hallazgos bloqueantes (P0) — todos cerrados

### H1 · Almuerzo Botanazo vs horario nuevo — CERRADO

§7 línea 236 excluye explícitamente Almuerzo Botanazo del catálogo. §16 lo formaliza como criterio de aceptación. §17 lo sube a tabla P0 con decisión temporal "No listar hasta confirmación".

Nota: queda fuera del alcance de este spec actualizar también `assets/menu.md` para reflejar que esa franja ya no existe — es decisión editorial del negocio.

### H2 · Filtros vs cards — CERRADO

§6.3 y §7 ahora usan los mismos nombres: `Nachos y dorilocos`, `Cócteles y cervezas`.

### H3 · Cards faltantes — CERRADO

§7 ahora incluye Cuba libre, cervezas con precios, micheladas tradicional y mexicana, Quesadilla Azteca en Vegetariano, y la subsección `Adicionales globales` con guacamole, crema, pico, tortilla, queso en taco y chamoy/perlas.

---

## 3. Hallazgos de consistencia (P1) — todos cerrados

| ID | Tema | Resolución en el spec |
|---|---|---|
| C1 | Rutas con/sin `.html` | §18 "Rutas y enlaces" obliga `href` con `.html` mientras no haya rewrite |
| C2 | Política de versionado CSS | §18 paso 4 dice "conservar versiones anteriores salvo limpieza explícita" |
| C3 | Logo específico | §6.1 ancla al asset real `logo-botanazo-mini.png` |
| C4 | Alineación con spec del bot | §6.7 línea 226 espeja el orden de captura del asistente |
| C5 | H1 distinto al actual | §3 nuevo H1: `Domicilios de comida mexicana en Armenia y Quindío` |
| C6 | Meta description sin "Quindío" | §9 title y description ahora incluyen "Armenia y Quindío" |

---

## 4. Vacíos funcionales (P1) — todos cerrados

| ID | Tema | Resolución en el spec |
|---|---|---|
| V1 | Accesibilidad | §12 nueva: focus trap, `Esc`, `aria-live`, `safe-area-inset-bottom`, contraste |
| V2 | Persistencia del carrito | §13 nueva: `localStorage` con fallback, timestamp, TTL 24 h, comportamiento post-WhatsApp |
| V3 | Longitud del mensaje WhatsApp | §8 "Resiliencia para pedidos largos" con tope 1.800 caracteres y fallback corto |
| V4 | Estado "cerrado" sin reloj de servidor | §11 línea 498 aclara que es ayuda visual, no garantía operativa |
| V5 | Sincronización catálogo ↔ bot ↔ `menu.md` | §18 establece `assets/menu.md` como fuente editorial primaria |
| V6 | Observaciones por ítem vs pedido | §14 nueva: dos niveles separados en el mensaje |
| V7 | Aviso de alcohol bloqueante | §7 línea 366 exige checkbox de mayoría de edad antes de agregar al carrito |

---

## 5. Riesgos de copy / SEO — cerrados

- `hasMenu` (§9): el spec ahora dice "omitir en primera versión si no se modela como `Menu` con `MenuSection` y `MenuItem`".
- `OrderAction` (§9): aclarado como "señal semántica, no integración transaccional".

---

## 6. Observaciones residuales (P2) — todas cerradas en tercera revisión

| ID | Tema | Resolución en el spec |
|---|---|---|
| R1 | Precios visibles en cócteles | §7 "Cócteles y cervezas" muestra precio en todas las cards (Cuba libre $22.000, etc.). §16 agrega criterio de aceptación que exige criterio unificado por categoría |
| R2 | "Postre de la semana" como Bebida | §7 nueva categoría "Extras" con Postre de la semana $17.000. §6.3 incluye `Extras` en filtros. §16 agrega criterio "El postre aparece en `Extras`, no en `Bebidas`" |
| R3 | Snippet `openingHoursSpecification` | §9 incluye JSON-LD con días Mo/Tu/Th/Fr/Sa/Su, 17:00–22:00, y nota explícita "No incluir `Wednesday`" |

Verificaciones:

- Snippet de horario coincide con `memory/project_horario.md` (5-10 p. m., miércoles cerrado).
- Cuba libre $22.000 coincide con `assets/menu.md`.
- El criterio "o resuelven precio con el mismo criterio en todos los cards" permite mantener cervezas/micheladas con tabla aparte (porque tienen subvariantes) sin romper la regla.

---

## 7. Preguntas operativas pendientes — capturadas en el spec

| Tema | Tratamiento |
|---|---|
| TTL operativo del carrito | §17 nueva fila: "Confirmar si se conserva 24 h, hasta cierre del día o después de abrir WhatsApp" |
| Productos temporalmente agotados | §18 formaliza flag `available: true \| false` por producto/variante desde la v1: si `false`, se muestra agotado y no se puede agregar al carrito |

Ambas decisiones quedan visibles para el equipo y no bloquean la implementación.

---

## 8. Veredicto final

El spec cierra los 3 bloqueantes P0, los 6 hallazgos de consistencia P1, los 7 vacíos funcionales P1 y los 3 residuales P2 levantados en revisiones anteriores. Las preguntas operativas (TTL del carrito, productos agotados) quedan documentadas en §17 y §18.

**Apto para pasar a implementación, sin observaciones residuales pendientes.**
