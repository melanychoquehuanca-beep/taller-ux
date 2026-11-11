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
  formNota.classList.add("validado");
  const titulo = tituloInput.value.trim();
  const contenido = contenidoInput.value.trim();
  if (!titulo || !contenido || !formNota.checkValidity()) {
    mostrarMensaje("Completa el título y el contenido antes de guardar.", "error");
    (titulo ? contenidoInput : tituloInput).focus();
    return;
  }
  const li = document.createElement("li");
  const cuerpo = document.createElement("div");
  const strong = document.createElement("strong");
  strong.textContent = titulo;
  const p = document.createElement("p");
  p.style.margin = "4px 0 0";
  p.textContent = contenido;
  cuerpo.appendChild(strong);
  cuerpo.appendChild(p);
  const btnEliminar = document.createElement("button");
  btnEliminar.type = "button";
  btnEliminar.className = "btn-eliminar";
  btnEliminar.textContent = "Eliminar";
  btnEliminar.addEventListener("click", function () {
    if (confirm("¿Seguro que quieres eliminar esta nota?")) {
      li.remove();
      mostrarMensaje("Nota eliminada. Puedes seguir editando.", "info");
    } else {
      mostrarMensaje("Eliminación cancelada.", "info");
    }
  });
  li.appendChild(cuerpo);
  li.appendChild(btnEliminar);
  listaNotas.prepend(li);
  formNota.reset();
  formNota.classList.remove("validado");
  mostrarMensaje("Nota agregada.", "exito");
});

formNota.addEventListener("reset", function (e) {
  if (!tituloInput.value && !contenidoInput.value) return;
  if (!confirm("¿Limpiar el formulario de la nota?")) {
    e.preventDefault();
    return;
  }
  formNota.classList.remove("validado");
  mostrarMensaje("Formulario limpio.", "info");
});
