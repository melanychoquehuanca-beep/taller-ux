const formNota = document.getElementById("form-nota");
const tituloInput = document.getElementById("titulo-nota");
const contenidoInput = document.getElementById("contenido-nota");
const mensajeEstado = document.getElementById("mensaje-estado");
const listaNotas = document.getElementById("lista-notas");

function mostrarMensaje(texto, tipo) {
  mensajeEstado.textContent = texto;
  mensajeEstado.className = "mensaje " + tipo;
}

formNota.addEventListener("submit", function (e) {
  e.preventDefault();

  const titulo = tituloInput.value.trim();
  const contenido = contenidoInput.value.trim();

  // Prevención de errores: evita agregar notas vacías
  if (!titulo || !contenido) {
    mostrarMensaje(
      "Por favor, completa todos los campos antes de guardar.",
      "error",
    );
    return;
  }

  // Crear elemento de la lista
  const li = document.createElement("li");
  li.innerHTML = `
    <div>
      <strong>${titulo}</strong>
      <p style="margin: 4px 0 0;">${contenido}</p>
    </div>
    <button class="btn-eliminar" type="button">Eliminar</button>
  `;

  // Control y libertad: Confirmación antes de una acción destructiva
  const btnEliminar = li.querySelector(".btn-eliminar");
  btnEliminar.addEventListener("click", function () {
    if (confirm("¿Estás seguro de que deseas eliminar esta nota?")) {
      li.remove();
      mostrarMensaje("Nota eliminada correctamente.", "exito");
    }
  });

  listaNotas.appendChild(li);
  formNota.reset();
  mostrarMensaje("¡Nota agregada con éxito!", "exito");
});
