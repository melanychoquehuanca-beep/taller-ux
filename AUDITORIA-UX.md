# Auditoría UX - Aplicación de Notas

## 1. Tabla de Heurísticas de Usabilidad (Nielsen)

| Heurística                         | Problema encontrado en la versión original                                            | Solución aplicada en el rediseño                                                              |
| :--------------------------------- | :------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------- |
| **Visibilidad del estado**         | La aplicación no confirmaba visualmente cuando se creaba o borraba una nota.          | Se implementó un contenedor con `role="status"` y mensajes dinámicos de éxito y error.        |
| **Coincidencia con el mundo real** | Uso de términos técnicos y etiquetas confusas para el usuario final.                  | Se integró lenguaje natural y cotidiano en los títulos y botones de la interfaz.              |
| **Control y libertad**             | Las notas se eliminaban instantáneamente sin opción de cancelar o revertir la acción. | Se incorporó una ventana de confirmación (`confirm()`) previa a la eliminación de cada nota.  |
| **Prevención de errores**          | Se permitía enviar formularios en blanco generando registros vacíos inservibles.      | Se añadió validación lógica en JavaScript y atributos `required` para bloquear campos vacíos. |
| **Reconocer, no recordar**         | Se dependía exclusivamente de _placeholders_ que desaparecían al escribir.            | Se implementaron etiquetas `<label>` permanentes para cada campo de entrada.                  |

## 2. Justificación de Leyes de Usabilidad

- **Ley de Fitts:** El botón principal de «Agregar Nota» se diseñó con un tamaño táctil cómodo y una extensión flexible (`flex: 1`), permitiendo alcanzarlo y accionarlo de manera rápida y eficiente.
- **Ley de Hick:** Se redujo la complejidad visual y la cantidad de opciones simultáneas en pantalla, simplificando el flujo para que el usuario decida rápidamente.
- **Ley de Miller:** Se organizó la interfaz en bloques jerárquicos reducidos (tarjeta contenedora y listado ordenado), evitando saturar la memoria de trabajo del usuario.

## 3. Resultados de Lighthouse

- **Puntaje de Accesibilidad Antes:** 70
- **Puntaje de Accesibilidad Después:** 96 (Cumpliendo WCAG AA con contraste superior a 4.5:1 y foco visible claro).
