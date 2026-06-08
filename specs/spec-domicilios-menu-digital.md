# Spec — Página de domicilios tipo menú digital para Botanazo

**Ruta objetivo:** `/domicilios`  
**Archivo probable:** `public/domicilios.html`  
**Fecha:** 2026-06-08  
**Fuente de verdad de menú:** `assets/menu.md`  
**Fuente de verdad estratégica:** `specs/web.md`  
**Referencia funcional:** `https://fresame.ola.click/` + `https://fresame.ola.click/products`

---

## 1. Objetivo

Convertir la página de domicilios de Botanazo en una experiencia tipo menú digital para pedir comida mexicana a domicilio en Armenia, Quindío.

La página debe permitir que una persona:

1. Entienda rápidamente que Botanazo toma domicilios por WhatsApp.
2. Vea productos, precios y categorías sin abrir un PDF.
3. Busque o filtre platos.
4. Agregue productos a un carrito.
5. Complete datos básicos de entrega.
6. Envíe el pedido prearmado por WhatsApp al número de Botanazo.

La página no debe simular una integración de pago, despacho o inventario si no existe. El cierre operativo sigue siendo por WhatsApp.

---

## 2. Referencia observada

El ejemplo `fresame.ola.click/` funciona como una entrada operativa con:

- Estado abierto/cerrado.
- CTA principal para pedir.
- Nombre del negocio.
- Tipo de servicio: domicilio.
- Dirección enlazada a Google Maps.
- Accesos a WhatsApp e Instagram.
- Link hacia menú digital y horarios.

El ejemplo `fresame.ola.click/products` funciona como una carta digital de pedidos con:

- Encabezado con nombre del negocio.
- Dirección visible.
- Tiempo estimado de entrega.
- Enlaces rápidos a WhatsApp e Instagram.
- Vista de productos.
- Búsqueda dentro del catálogo.
- Orientación clara a compra/pedido, no solo a información.

Para Botanazo se debe tomar el patrón funcional, no copiar la estética. La dirección visual debe seguir: México artesanal + Eje Cafetero colombiano.

Recomendación de arquitectura: mantener una sola URL fuerte, `/domicilios`, con una primera pantalla tipo entrada operativa y el catálogo justo debajo. No crear una segunda página separada para el catálogo salvo que el sitio incorpore rewrites y navegación dedicada más adelante.

---

## 3. Posicionamiento de la página

### H1 recomendado

`Domicilios de comida mexicana en Armenia y Quindío`

### Bajada recomendada

`Pide tacos, burritos, quesadillas, nachos, elotes y bebidas mexicanas de Botanazo por WhatsApp. Atendemos domicilios en Armenia y otros municipios del Quindío según disponibilidad, distancia y ruta.`

### Mensaje operativo visible

`Pedidos por WhatsApp · Todos los días de 5:00 p. m. a 10:00 p. m. · Miércoles cerrado`

---

## 4. Alcance funcional

### Incluye

- Primera pantalla operativa tipo landing de pedido.
- Catálogo de productos con precios.
- Filtros por categoría.
- Búsqueda por texto.
- Cards de producto con foto cuando exista imagen adecuada.
- Selector de variantes cuando el producto tenga tamaños, carnes o presentaciones.
- Adicionales relevantes.
- Carrito persistente durante la sesión.
- Edición de cantidades.
- Subtotal de productos.
- Aviso de domicilio por confirmar.
- Formulario corto de datos de entrega.
- Botón para enviar pedido por WhatsApp.
- Mensaje de WhatsApp generado automáticamente.

### No incluye

- Pago en línea.
- Confirmación automática de cocina.
- Cálculo automático del valor del domicilio.
- Integración con inventario.
- Integración con plataforma de domicilios externa.
- Promesas de tiempo exacto de entrega.
- Login de usuarios.

---

## 5. Información fija del negocio

Usar estos datos en la interfaz:

| Campo | Valor |
|---|---|
| Nombre | Botanazo |
| Descripción | Restaurante mexicano artesanal en Armenia, Quindío |
| Dirección | Cl. 10 Nte. #14-65, B/Providencia, Armenia, Quindío |
| WhatsApp | +57 312 752 5143 |
| Link WhatsApp | `https://wa.me/573127525143` |
| Instagram | `https://www.instagram.com/botanazoaxm/` |
| Horario domicilios | Todos los días de 5:00 p. m. a 10:00 p. m.; miércoles cerrado |
| Cobertura | Armenia, La Tebaida, Montenegro y otros pueblos del Quindío según disponibilidad, distancia y valor del domicilio |

---

## 6. Estructura de página

### 6.1 Header compacto

Debe mantener la navegación actual del sitio, pero en mobile la acción primaria debe ser pedir:

- Logo Botanazo usando el asset actual `logo-botanazo-mini.png`.
- Menú principal.
- CTA: `Pedir por WhatsApp`.

### 6.2 Bloque superior de pedido

Primera vista orientada a acción, inspirada en la home de FRESAME:

- Nombre de la página.
- Estado operativo: abierto/cerrado si se puede calcular.
- Horario.
- Dirección.
- Cobertura.
- Tiempo: `Tiempo de entrega por confirmar según ruta y cocina`.
- CTA principal: `Hacer pedido aquí`.
- CTA secundario: `Escribir por WhatsApp`.
- Enlace a Instagram.
- Enlace a ubicación en Google Maps si está disponible.

No usar un hero excesivo que empuje el catálogo por debajo del primer scroll. La página debe sentirse como herramienta de pedido.

### 6.3 Barra de catálogo

Elemento sticky o cercano al inicio del catálogo:

- Campo de búsqueda: `Buscar tacos, birria, nachos...`
- Filtros por categoría:
  - Tacos
  - Burritos
  - Quesadillas
  - Especiales
  - Nachos y dorilocos
  - Elotes y esquites
  - Vegetariano
  - Bebidas
  - Extras
  - Cócteles y cervezas

### 6.4 Catálogo de productos

Cada card debe mostrar:

- Foto o imagen representativa.
- Nombre del producto.
- Descripción corta.
- Precio desde o precio exacto.
- Etiquetas útiles: `Popular`, `Para compartir`, `Vegetariano`, `Birria`, `Con alcohol`.
- Botón: `Agregar`.

Evitar cards con texto largo. Las descripciones completas pueden aparecer en modal/drawer al agregar.

### 6.5 Drawer o modal de producto

Al agregar un producto con variantes, abrir un panel con:

- Nombre.
- Descripción.
- Precio base.
- Variantes obligatorias.
- Adicionales opcionales.
- Observaciones.
- Cantidad.
- Botón: `Agregar al pedido`.

Ejemplos:

- Taco: carne + presentación unidad/x3/x5/x10 + queso adicional opcional.
- Burrito: carne o tipo + observaciones.
- Quesadilla: tipo + solita/acompañada + acompañamientos.
- Nachos: carne + personal/para compartir.
- Bebida: sabor + tamaño.
- Cóctel: aviso de mayoría de edad.

### 6.6 Carrito

En desktop puede ir como columna lateral sticky. En mobile debe ser un botón fijo inferior con contador y subtotal que abre un drawer.

Debe incluir:

- Productos agregados.
- Cantidad.
- Precio por ítem.
- Editar o quitar.
- Subtotal.
- Texto: `No incluye valor del domicilio. Lo confirmamos por WhatsApp según dirección.`
- CTA: `Enviar pedido por WhatsApp`.

### 6.7 Datos de entrega

Antes de enviar a WhatsApp, pedir:

- Nombre.
- Teléfono.
- Municipio.
- Barrio.
- Dirección.
- Referencia opcional.
- Medio de pago opcional, si el negocio confirma los medios disponibles.
- Observaciones del pedido.

El orden debe espejar el flujo del asistente de WhatsApp: nombre, teléfono, municipio, barrio, dirección, referencia y carrito. Esto evita que una persona arme el pedido en web y luego tenga que repetir los datos en otro orden por WhatsApp.

Si el usuario no completa todos los datos, permitir enviar igual solo si el mensaje deja claro lo pendiente. Recomendado: exigir nombre, municipio, dirección y carrito.

---

## 7. Catálogo mínimo para primera versión

La primera versión no necesita listar cada combinación posible como card independiente. Debe agrupar productos por familia y resolver variantes dentro del modal.

No listar `Almuerzo Botanazo` en la primera versión. Aunque aparece en `assets/menu.md`, su horario 12:00 p. m. a 3:00 p. m. contradice el horario operativo vigente de domicilios 5:00 p. m. a 10:00 p. m. Debe quedar fuera hasta que el negocio confirme si se descontinúa o se reubica.

### Tacos

Card: `Tacos`

Descripción:

`Tacos con cebolla y cilantro. Elige pastor, carnitas, suadero, tripa, birria, campechano, longaniza o pollo en orden.`

Variantes:

- Carne.
- Presentación: unidad, orden x3, orden x5, orden x10.
- Queso adicional por unidad: $1.000.

Regla: pollo no se ofrece por unidad; solo desde orden x3.

### Burritos

Card: `Burrito`

Variantes:

- Tripa, suadero, carnitas o pastor: $24.000.
- Pollo o longaniza: $25.000.
- Mixto dos carnes: $25.000.
- Birria: $27.000.
- Burro especial: $30.000.

### Quesadillas

Card: `Quesadilla`

Variantes:

- Tipo.
- Solita o acompañada.
- Si es acompañada, elegir 2 entre guacamole, crema agria y pico de gallo.

### Especiales

Cards:

- Chilaquiles.
- Alambre.
- Cazuela de queso.
- Costra de queso.

Variantes por carne según `assets/menu.md`.

### Nachos y dorilocos

Cards:

- Nachos.
- Dorilocos.

Variantes:

- Carne.
- Tamaño cuando aplique.

### Elotes y esquites

Cards:

- Elote.
- Esquite.
- Volcán con carne.

### Vegetariano

Cards:

- Tacos vegetarianos.
- Quesadilla vegetariana.
- Quesadilla Azteca.
- Nachos vegetarianos.
- Burro vegetariano.
- Elote vegetariano.
- Esquite vegetariano.

### Bebidas

Cards:

- Bombata.
- Chamoyada.
- Aguas frescas.
- Limonada.
- Gaseosas.

Bombata y chamoyada requieren sabor y tamaño.

### Extras

Cards:

- Postre de la semana: $17.000.

El sabor del postre se confirma por WhatsApp antes de cerrar el pedido.

### Cócteles y cervezas

Cards:

- Margarita tradicional: $23.000.
- Margarita fresa: $25.000.
- Margarita chelada: $27.000.
- Paloma: $17.000.
- Charro negro: $17.000.
- Piña colada: $29.000.
- Cuba libre: $22.000.
- ChamoChela: $22.000.
- Seda Azteca: $29.000.
- Cerveza.
- Michelada tradicional.
- Michelada mexicana.

Cervezas:

- Coronita: $7.000.
- Corona: $8.000.
- Sol: $8.000.
- Club Dorada: $8.000.

Michelada tradicional:

- Corona: $8.000.
- Club Dorada: $8.000.
- Sol: $8.000.

Michelada mexicana:

- Corona: $12.000.
- Club Dorada: $12.000.
- Sol: $12.000.

Regla: mostrar aviso `Producto con alcohol. Debe recibir una persona mayor de edad.` y pedir confirmación mediante checkbox antes de agregarlo al carrito.

### Adicionales globales

Estos adicionales deben estar disponibles donde apliquen, no como cards principales:

- Guacamole: $3.000.
- Crema agria: $3.000.
- Pico de gallo: $3.000.
- Tortilla unidad: $1.000.
- Queso en taco: $1.000 por unidad.
- Chamoy o perlas en bebida: $2.000.

---

## 8. Mensaje generado para WhatsApp

El botón final debe abrir WhatsApp con un mensaje prellenado.

Formato recomendado:

```txt
Hola Botanazo, quiero hacer este pedido a domicilio:

Pedido:
- 1 x Orden x3 tacos de birria — $23.500
- 1 x Burrito mixto — $25.000
- 1 x Agua fresca grande de horchata — $9.000

Subtotal productos: $57.500
Valor domicilio: por confirmar

Datos de entrega:
Nombre: [nombre]
Teléfono: [telefono]
Municipio: [municipio]
Barrio: [barrio]
Dirección: [direccion]
Referencia: [referencia]

Observaciones:
[observaciones]
```

La URL debe usar `wa.me/573127525143?text=...` con el texto codificado.

### Resiliencia para pedidos largos

Si el mensaje codificado supera 1.800 caracteres, mostrar una advertencia antes de abrir WhatsApp:

`Tu pedido está largo. Lo enviaremos resumido por WhatsApp y el detalle quedará visible para confirmar.`

Fallback recomendado:

- Mantener líneas de producto resumidas.
- Quitar descripciones largas.
- Mantener subtotal, datos de entrega y observaciones.
- Si aún supera el límite, abrir WhatsApp con un texto corto: `Hola Botanazo, quiero hacer un pedido a domicilio. Ya armé mi carrito en la página.`

---

## 9. SEO local y GEO

La página debe ser indexable y responder explícitamente:

- Botanazo vende comida mexicana a domicilio en Armenia, Quindío.
- El pedido se hace por WhatsApp.
- El menú incluye tacos, burritos, quesadillas, nachos, elotes, esquites, bebidas y cócteles.
- El horario actual es de 5:00 p. m. a 10:00 p. m., todos los días excepto miércoles.
- La cobertura fuera de Armenia depende de distancia, disponibilidad y valor del domicilio.
- El local está en Cl. 10 Nte. #14-65, B/Providencia.

### Meta title

`Domicilios de comida mexicana en Armenia y Quindío | Botanazo`

### Meta description

`Pide tacos, burritos, quesadillas, nachos, elotes y bebidas mexicanas a domicilio en Armenia y Quindío con Botanazo. Pedidos por WhatsApp de 5:00 p. m. a 10:00 p. m.; miércoles cerrado.`

### Schema recomendado

Agregar JSON-LD con:

- `Restaurant`.
- `servesCuisine: Mexican`.
- `address`.
- `telephone`.
- `openingHoursSpecification`.
- `potentialAction` con `OrderAction` apuntando a WhatsApp solo como señal semántica; no presentarlo como integración transaccional.

No agregar `hasMenu` como simple enlace suelto si no se modela como `Menu` con `MenuSection` y `MenuItem`. Para primera versión, es aceptable omitir `hasMenu` y dejar `Restaurant + OrderAction`.

Snippet de referencia para el horario:

```json
{
  "@type": "OpeningHoursSpecification",
  "dayOfWeek": [
    "Monday",
    "Tuesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  "opens": "17:00",
  "closes": "22:00"
}
```

No incluir `Wednesday` porque el restaurante está cerrado ese día.

---

## 10. Fotografía

Usar imágenes reales o ya generadas disponibles en `public/assets/images/`.

Prioridad sugerida:

- `tacos-mexicanos-botanazo-armenia.jpg`
- `burro-mexicano-botanazo-armenia.jpg`
- `nachos-mexicanos-botanazo-armenia.jpg`
- `elote-mexicano-botanazo-armenia.jpg`
- `chilaquiles-mexicanos-botanazo-armenia.jpg`
- `chamochela-botanazo-armenia.jpg`
- `margarita-botanazo-armenia.jpg`

Si una card no tiene foto precisa, usar una imagen de categoría y evitar inventar platos visualmente engañosos.

---

## 11. Estados de interfaz

La página debe contemplar:

- Catálogo cargado.
- Búsqueda sin resultados.
- Carrito vacío.
- Carrito con productos.
- Producto sin variante seleccionada.
- Intento de enviar pedido sin datos mínimos.
- Pedido listo para WhatsApp.
- Horario cerrado.

### Estado cerrado

Si la implementación puede detectar día/hora local, mostrar:

`Estamos cerrados para domicilios en este momento. Puedes dejar tu pedido por WhatsApp y el equipo lo confirma en horario de atención.`

No bloquear el botón de WhatsApp. Esta detección es solo una ayuda visual basada en el reloj del dispositivo; la confirmación operativa real la hace el equipo por WhatsApp.

---

## 12. Accesibilidad

La experiencia debe funcionar con teclado y lectores de pantalla:

- El modal/drawer de producto y carrito debe tener focus trap.
- La tecla `Esc` debe cerrar modales y drawers.
- Los botones de cantidad deben tener labels claros.
- El subtotal debe anunciarse con `aria-live="polite"` cuando cambie.
- El carrito fijo inferior en mobile debe respetar `safe-area-inset-bottom`.
- El contraste debe ser suficiente para texto, botones y estados deshabilitados.
- El foco visible no debe quedar oculto por elementos sticky.

---

## 13. Persistencia del carrito

Preferencia:

- Usar `localStorage` con fallback a estado en memoria si no está disponible.
- Guardar timestamp de última actualización.
- Limpiar carrito automáticamente después de 24 horas.
- Después de abrir WhatsApp, conservar el carrito y mostrar opción de `Vaciar pedido` o `Seguir editando`.
- Nunca asumir que abrir WhatsApp equivale a pedido confirmado.

---

## 14. Observaciones

Manejar dos niveles:

- Observaciones por ítem: cambios del producto específico, por ejemplo `sin cilantro` o `con salsa aparte`.
- Observaciones del pedido: instrucciones generales, por ejemplo `timbre no funciona` o `pagar con efectivo`.

Ambas deben aparecer separadas en el mensaje de WhatsApp.

---

## 15. Reglas de copy

Tono:

- Cálido.
- Local.
- Directo.
- Mexicano sin caricatura.

Usar frases como:

- `Te armamos el pedido por WhatsApp.`
- `El valor del domicilio se confirma según tu dirección.`
- `¿Lo quieres para compartir o personal?`
- `Perfecto para una noche de tacos en Armenia.`

Evitar:

- `El mejor domicilio de México`.
- `100% auténtico`.
- `Entrega garantizada en X minutos`.
- `Compra finalizada`.
- `Pago aprobado`.

---

## 16. Criterios de aceptación

La página se considera lista cuando:

- El catálogo se puede navegar por categorías.
- La búsqueda encuentra productos por nombre y palabras clave.
- El usuario puede agregar al menos tacos, burritos, quesadillas, nachos, elotes/esquites y bebidas.
- El postre aparece en `Extras`, no en `Bebidas`.
- El usuario puede agregar Cuba libre, cervezas, micheladas y Quesadilla Azteca desde las categorías correctas.
- Los cócteles, cervezas y micheladas muestran precio visible o resuelven precio con el mismo criterio en todos los cards de la categoría.
- Las variantes obligatorias se validan antes de agregar al carrito.
- El subtotal de productos se calcula correctamente.
- El valor del domicilio aparece como `por confirmar`.
- El CTA final abre WhatsApp con el pedido prellenado.
- El copy no promete tiempos, pagos ni cobertura exacta no confirmada.
- La página mantiene SEO local claro para domicilios de comida mexicana en Armenia.
- Funciona en mobile sin solapamientos, especialmente el carrito fijo inferior.
- Los modales/drawers funcionan con teclado, foco visible y cierre con `Esc`.
- El fallback para mensajes largos de WhatsApp está implementado.
- `Almuerzo Botanazo` no aparece en el catálogo de domicilios hasta que el negocio confirme su franja operativa.
- Si se modifica CSS, se incrementa la versión del archivo según la regla del proyecto.

---

## 17. Pendientes por confirmar con el negocio

Estos puntos deben manejarse como `por confirmar` si no hay dato validado:

| Pregunta | Impacto |
|---|---|
| Valores de domicilio por zona | Permitiría mostrar rangos o cálculo orientativo |
| Tiempos promedio por zona | Permitiría informar mejor sin prometer exactitud |
| Medios de pago aceptados | Define si se muestra selector de pago |
| Cobertura municipal confirmada | Evita ambigüedad fuera de Armenia |
| Productos temporalmente agotados | Evita pedidos de platos no disponibles |
| TTL operativo del carrito | Confirmar si se conserva 24 h, hasta cierre del día o después de abrir WhatsApp |

### Pendientes P0 antes de listar en el catálogo

| Pregunta | Decisión temporal |
|---|---|
| Disponibilidad real de Almuerzo Botanazo con horario nuevo | No listar hasta confirmación |

---

## 18. Implementación recomendada

Como el sitio no usa build tools, implementar con HTML, CSS y JavaScript plano:

- Datos del catálogo en un objeto JS dentro de `script.js` o archivo separado local.
- Mantener `assets/menu.md` como fuente editorial de verdad. Si los precios cambian, primero se actualiza `assets/menu.md` y luego se sincroniza el objeto JS del catálogo web y el prompt de domicilios.
- Incluir desde la primera versión un flag por producto o variante: `available: true | false`. Si `available` es `false`, el producto se muestra como agotado y no se puede agregar al carrito.
- Renderizado de categorías y cards desde datos estructurados.
- Carrito en `localStorage` o estado en memoria.
- Generación de mensaje WhatsApp con `encodeURIComponent`.
- Sin dependencias externas.

### Rutas y enlaces

Aunque la arquitectura objetivo habla de `/domicilios`, el sitio actual enlaza archivos HTML directos. Mientras no exista rewrite en servidor, los `href` internos deben usar `domicilios.html`, `menu.html`, etc.

Si el CSS cambia:

1. Crear nueva versión `styles-v18.css` a partir de la versión vigente.
2. Actualizar la referencia en los 10 HTMLs de `public/`.
3. Verificar que ninguna página quede apuntando al CSS anterior.
4. Conservar las versiones CSS anteriores salvo que el usuario pida limpieza explícita.
