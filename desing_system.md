# Botanazo — Sistema de Diseño

**Gastronomía Mexicana Auténtica**  
Cl. 10 Nte. #14-65, B/Providencia, Armenia, Quindío, Colombia  
Chef mexicano formado. Auténtico sazón mexicano hecho por manos mexicanas.

---

## 01. Esencia de Marca

**Tagline oficial:**  
*El auténtico sazón mexicano hecho por manos mexicanas.*

**Esencia:**  
Cantina mexicana real, con chef mexicano formado, en Armenia. Únicos en el Quindío con cocina hecha por manos mexicanas.

**Diferencial vs competencia:**  
No somos una experiencia instagrameable de "México decorativo". Somos el lugar donde comen mexicano de verdad.

---

## 02. Tono de Voz

| Aspecto | Descripción |
|---------|-------------|
| **Personalidad** | Cálida, cantinera, directa, con orgullo cultural. |
| **Sí usa** | "¡Pásele!", "compa", "una no es ninguna", "pa' bajar la chela", "¡échele!", "¡salud cabrón!" |
| **No usa** | "Bienvenidos a nuestra experiencia gastronómica", emojis decorativos, signos en exceso, españolismos, neutralidad corporativa. |
| **Idioma** | Mexicanismos sobre paisismos. Nunca neutralizar a "español de aeropuerto". |
| **Contexto** | Escribimos como si estuviéramos en la cantina hablando con el cliente que acaba de entrar. |

---

## 03. Paleta de Color

### Colores Primarios (80%)

| Color | Hex | Uso | Proporción |
|-------|-----|-----|-----------|
| Rojo cantina | `#B71C1C` | Primario, botones, énfasis, rótulos | 60% |
| Azul talavera | `#0D2B4E` | Secundario, fondos, líneas, estructura | 20% |
| Masa | `#F4E3CC` | Fondo principal, contraste claro | 20% |

### Acentos (máximo 20%)

| Color | Hex | Uso |
|-------|-----|-----|
| Achiote | `#F39200` | Énfasis cálido, call-to-action secundario |
| Tomatillo | `#4A7C2A` | Naturales, orgánico, ingredientes |
| Guajillo | `#6B1E1E` | Fondos sombríos, profundidad, noche |
| Carbón | `#1A1A1A` | Texto principal, estructura |

### Reglas de Color

- **Máximo 3 colores por pieza.** Nunca todos juntos.
- **Combinaciones válidas:** Rojo + Masa, Azul + Achiote, Masa + Carbón, Rojo + Azul + Masa.
- **Nunca:** Rojo + Rosa, todos los acentos juntos, gradientes, desaturación.
- **Propósito:** La paleta debe leer como "México cantina real", no como "decoración barata".

---

## 04. Tipografía

### A. Display — Bowlby One

- **Peso:** 400 (regular)
- **Tamaño:** 56–96px (en web), escalar según contexto
- **Usos:** Logo, titulares enormes, frases de cantina ("¡PÁSELE!"), gritos y llamados grandes
- **Características:** Redondeada, vernácula, simula letra pintada a mano sobre muro
- **Nunca:** Itálica, ligera, condensada, en párrafos largos

### B. Sub-display — Anton

- **Peso:** 400 (regular)
- **Tamaño:** 20–40px
- **Usos:** Nombres de plato, títulos de sección, subtítulos en menú
- **Características:** Condensada, pesada, alta energía, directa
- **Nunca:** En cuerpo, en descripciones, en menor a 18px

### C. Cuerpo — Archivo

- **Peso:** 400 (regular), 500 (bold para énfasis)
- **Tamaño:** 14–18px (web y menú impreso)
- **Usos:** Descripciones de plato, textos largos, párrafos, web body
- **Características:** Legible, neutral, profesional, sin competir con displays
- **Nunca:** En títulos grandes, en frases cortas

### D. Mano — Caveat

- **Peso:** 600 (solo disponible)
- **Tamaño:** 18–32px
- **Usos:** Pizarra, post-it digitales, "del día", notas personalizadas del chef, destacados en redes
- **Características:** Manuscrita, cálida, íntima, manual
- **Nunca:** En textos largos, en menú impreso normal, en botones

---

## 05. Logotipo

### Versión Principal

```
BOTANAZO (Bowlby One, 96px, rojo #B71C1C)
— línea azul — Gastronomía Mexicana — línea azul —
(Anton, 12px, azul #0D2B4E, tracking abierto)
```

Fondo: Masa #F4E3CC

### Variantes

| Variante | Fondo | Texto | Uso |
|----------|-------|-------|-----|
| Principal | Masa | Rojo | Estándar, menú, web |
| Inversa rojo | Rojo | Masa | Botones, énfasis |
| Inversa azul | Azul | Achiote | Fondos oscuros |
| Monocromo | Blanco | Carbón | Impresión BN, tickets |

### Espaciado Mínimo

- 20px de espacio vacío alrededor del logo (nunca tocando bordes)
- Logo no se escala menor a 80px de ancho en web

---

## 06. Sistema de Exclamaciones

Una frase por pieza. Máximo una exclamación. Tipografía Bowlby One mayúsculas sobre color sólido.

| Frase | Fondo | Texto | Contexto |
|-------|-------|-------|----------|
| ¡Pásele! | Rojo #B71C1C | Masa #F4E3CC | Bienvenida, entrada, CTA principal |
| ¡Échele, compa! | Azul #0D2B4E | Achiote #F39200 | Énfasis, animación, "vamos" |
| Una no es ninguna | Achiote #F39200 | Azul #0D2B4E | Cerveza, chela, happy hour |
| Pa' la chela | Tomatillo #4A7C2A | Masa #F4E3CC | Bebidas, refrescos, agua fresca |
| ¡Salud, cabrón! | Masa #F4E3CC | Rojo #B71C1C | Brindis, celebración, cierre |
| La botana | Guajillo #6B1E1E | Achiote #F39200 | Antojitos, extras, complementos |

---

## 07. Componentes UI — Web

### Botones

**Botón Primario (CTA Principal)**
- Fondo: Rojo #B71C1C
- Texto: Masa #F4E3CC, Anton 16px, mayúsculas, tracking +0.06em
- Padding: 14px 28px
- Border-radius: 4px
- Ejemplo: "Ver el menú", "Pedir por WhatsApp"

**Botón Secundario**
- Fondo: Transparente
- Borde: 2px sólido Rojo #B71C1C
- Texto: Rojo #B71C1C, Anton 16px, mayúsculas
- Padding: 12px 26px
- Border-radius: 4px

**Botón Terciario**
- Fondo: Masa #F4E3CC
- Texto: Rojo #B71C1C, Anton 14px
- Sin borde
- Padding: 10px 20px

### Card — Plato de Menú

```
┌─────────────────────────────────┐
│ TACO AL PASTOR (Anton 22px)     │  $7.000
│ Cerdo marinado, piña asada...   │ (monospace, rojo)
│ (Archivo 13px, gris)            │
└─────────────────────────────────┘
```

- Fondo: Blanco
- Borde: 0.5px #B4B2A9
- Border-radius: 8px
- Padding: 1rem 1.25rem
- Nombre: Anton 22px mayúsculas
- Descripción: Archivo 13px color #5F5E5A
- Precio: Monospace 15px bold color #B71C1C, alineado a la derecha
- Nunca: foto dentro de la card

### Línea divisora de sección

- Grosor: 2px
- Color: Rojo #B71C1C o Azul #0D2B4E
- Estilo: sólido
- Ancho: 100% del contenedor

### Fondo de sección

- Principal: Masa #F4E3CC o Blanco
- Alternado: Azul #0D2B4E (máximo oscuro)
- Nunca: texturas, patrones, gradientes

---

## 08. Fotografía

### Estilo

- **Luz:** Natural preferentemente. Si de noche (hora de apertura), una sola lámpara cálida lateral.
- **Ángulo:** Cenital (90°) o 3/4 (45°)
- **Plano:** Cerrado en el plato o ingrediente. Sin manos visibles del chef.
- **Fondo:** Limpio. Tabla de madera, servilleta blanca, mantel kraft. Nunca: mantel vichy rojo, muro de canastos, decoración de fondo.
- **Composición:** Plato en tercios, comida como protagonista absoluto.

### Edición

- Subir brillo +15%
- Bajar sombras −10%
- Balance de blancos: Corregir
- Saturación: Normal (sin oversaturar)
- Contraste: +5% máximo
- Filtros: Ninguno. App: Lightroom Mobile (gratuita).

### NO hacer

- Fotos con bolsas de Doritos o marcas visibles
- Plano lejano mostrando todo el local
- Manos de personas (incluyendo chef)
- Múltiples platos en una sola foto (confunde)
- Luz de flash directo
- Fondos con mucho detalle atrás

---

## 09. Reglas de Uso

### ✓ Sí

- Fondo plano de la paleta (nunca degradado)
- Una sola tipografía display por pieza
- Frases cortas: máximo 5 palabras
- Fotos cenitales con luz natural
- Mexicanismos del chef ("compa", "echale", "pa'")
- Blanco como respiro (whitespace generoso)
- Colores sólidos, bordes limpios

### ✗ No

- Gradientes, sombras, blur, glow, efectos neón
- Mezclar 4+ colores en una pieza
- Fotos con gente comiendo, haciendo mueca, sonriendo forzado
- Texto pequeño (<13px) sobre color
- "Bienvenidos a nuestra experiencia gastronómica"
- Emojis decorativos o musicalización visual
- Decoración sin propósito funcional
- Rotar texto, usar itálica excesiva, condensar fuentes

---

## 10. Estructura del Menú Impreso

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃  TACOS                            ┃
┃  (Anton 36px rojo, con línea)     ┃
┃  llevan cebolla · cilantro        ┃
┃  (Archivo 11px gris, tracking +)  ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃                                   ┃
┃  TACO AL PASTOR                   ┃ $7.000
┃  Cerdo marinado, piña asada.      ┃
┃  .................................┃
┃                                   ┃
┃  SUADERO                          ┃ $7.000
┃  Res confitada lentamente.        ┃
┃  .................................┃
┃                                   ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

- Cada sección en página separada (máximo 5 platos por página)
- Línea punteada entre nombre y precio (conecta visualmente)
- Nota al pie en Caveat: "¡Pregunta por el del día!"
- Material: Kraft o papel mate blanco, 100 gsm mínimo
- Tipografía: Sin serifa para body (Archivo), display para títulos
- Color: Solo 2 tintas máximo (rojo + negro, o azul + negro)

---

## 11. Redes Sociales — Instagram

### Story Template

- Fondo: Color de la paleta (rotativo)
- Texto: Bowlby One o Anton, máximo 3 líneas
- CTA: "¡Pásele!" o "Pa' la chela"
- Duración: 24 horas

### Feed Post

- Foto del plato cenital (nunca persona)
- Caption en Archivo 14px
- Hashtag local: #ArmeniaTaquería #ComidaMexicanaArmenia #CocinaMexicana
- Emoji máximo 1 (no decorar, solo señal)
- Ejemplo caption:
  ```
  Taco al pastor. Cerdo marinado en achiote, piña asada.
  La receta del chef desde Jalisco.
  
  ¡Pásele!
  ```

### Reel

- Plano cerrado a las manos del chef cocinando (sin cara visible)
- Música mexicana de fondo (norteño, ranchera, banda)
- Duración: 15–30 segundos
- Texto overlay: Una frase de exclamación en Bowlby One

---

## 12. Handoff a Claude Design / LLMs

### Instrucción de Onboarding

Copia y pega este bloque exacto en Claude Design durante el setup de sistema de diseño:

```
MARCA: Botanazo — Gastronomía Mexicana

UBICACIÓN: Cl. 10 Nte. #14-65, B/Providencia, Armenia, Quindío

TAGLINE: El auténtico sazón mexicano hecho por manos mexicanas.

COLORES (usar exactamente estos hex):
  Primarios:
    - Rojo cantina: #B71C1C (60% del sistema)
    - Azul talavera: #0D2B4E (20%)
    - Masa: #F4E3CC (20%)
  Acentos:
    - Achiote: #F39200
    - Tomatillo: #4A7C2A
    - Guajillo: #6B1E1E
    - Carbón: #1A1A1A
  Regla: máximo 3 colores por pieza. Combinaciones válidas: Rojo+Masa, Azul+Achiote, Masa+Carbón, Rojo+Azul+Masa.

TIPOGRAFÍA:
  - Display (rótulo, gritos, logo): Bowlby One 400, 56–96px
  - Sub-display (nombres de plato, secciones): Anton 400, 20–40px
  - Cuerpo (descripciones, web, menú): Archivo 400/500, 14–18px
  - Mano (pizarra, post-it, "del día"): Caveat 600, 18–32px

TONO: Cantina mexicana auténtica, coloquial, directa.
  Sí: "¡Pásele!", "compa", "una no es ninguna", "pa' la chela"
  No: "Bienvenidos a nuestra experiencia", emojis, español neutral

ESTILO VISUAL:
  - Flat design: sin gradientes, sombras, neón
  - Fotos cenitales, luz natural, fondo limpio
  - Sin manos visibles del chef (privacidad)
  - Máximo 5 palabras por frase
  - Whitespace generoso

LOGOTIPO:
  - Bowlby One rojo #B71C1C, 96px
  - Anton "Gastronomía Mexicana" azul #0D2B4E, 12px, tracking abierto
  - Líneas horizontales azules a ambos lados del descriptor
  - Fondo: Masa #F4E3CC

COMPONENTES:
  - Botón primario: Rojo fondo, Masa texto, Anton, 14px padding 28px
  - Card menú: Blanco, borde 0.5px, Anton para nombre, Archivo para descripción, monospace para precio
  - Línea divisora: 2px sólido Rojo o Azul

REGLAS CRÍTICAS:
  - Una exclamación por pieza, máximo
  - Nunca fotos con personas
  - Nunca texto pequeño (<13px) sobre color
  - Nunca más de 3 colores
  - Nunca decoración sin función
  - Paleta nunca degradada
```

---

## 13. Excepciones y Contexto

- **Impresión blanco y negro:** Usar Carbón #1A1A1A para texto, líneas limpias, sin sombras.
- **Pantalla oscura (redes de noche):** Azul #0D2B4E como fondo, Masa o Achiote como texto.
- **Señalización física del local:** Mantener paleta igual. Usar serigrafía en colores sólidos.
- **Material de punto de venta:** Servilletas, vasos, posavasos: una exclamación por pieza en dos colores máximo.

---

**Documento generado:** 16 de mayo de 2026  
**Versión:** 1.0  
**Para:** Botanazo — Gastronomía Mexicana