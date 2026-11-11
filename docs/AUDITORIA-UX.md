# Auditoría UX — App de notas

Autora: Melany Grisse Choquehuanca Cahui · Grupo E  
Repositorio: https://github.com/melanychoquehuanca-beep/taller-ux  
Página: https://melanychoquehuanca-beep.github.io/taller-ux/notas/

## 1. Tabla de las cinco heurísticas

| Heurística | Problema en la versión original | Solución aplicada |
| --- | --- | --- |
| Visibilidad del estado | Al agregar o borrar una nota no había mensaje: no se sabía si la acción ocurrió. | Mensajes con `role="status"`: «Nota agregada», error y cancelación. |
| Coincidencia con el mundo real | Textos técnicos o botones poco claros (p. ej. «ok»). | Título «Mis notas», botones «Agregar nota» / «Eliminar» / «Limpiar». |
| Control y libertad | Eliminar borraba al instante, sin forma de deshacer o cancelar. | `confirm()` antes de eliminar y antes de limpiar el formulario. |
| Prevención de errores | Se podían guardar notas vacías. | `required` + validación en JS; no se agrega si falta título o contenido. |
| Reconocer, no recordar | Solo placeholders que desaparecen al escribir. | `<label>` visibles permanentes en cada campo. |

## 2. Leyes de usabilidad

- **Fitts:** el botón «Agregar nota» usa `flex: 1` y `min-height: 44px`, grande y separado 24px de «Limpiar».
- **Hick:** una sola acción principal por bloque (agregar); eliminar queda en cada nota, no como opciones globales confusas.
- **Miller:** la pantalla se parte en formulario + listado; cada nota es un bloque corto (título + contenido + acción).

## 3. Accesibilidad

- Labels con `for`/`id`, `alt` en la imagen, `:focus-visible` naranja, contraste texto `#1f2933` sobre blanco (>4.5:1), botones ≥ 44px.
- Lighthouse Accessibility: **antes ≈ 68–72** (sin labels claros, contraste pobre, sin idioma/estructura); **después ≥ 95**.

## 4. Commits

1. Versión inicial del formulario de inscripción (antes).
2. Rediseno del formulario con principios de UX/UI.
3. App de notas auditada y publicada en `/notas` con `docs/AUDITORIA-UX.md`.
