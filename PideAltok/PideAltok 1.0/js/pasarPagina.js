function mostrarFormulario(id) {
  const formularios = document.querySelectorAll(".formulario");
  formularios.forEach(f => f.style.display = "none");
  document.getElementById(id).style.display = "block";
}

function mostrarInicioSesion() {
  mostrarFormulario("inicio-sesion");
}

function mostrarRegistro() {
  mostrarFormulario("registro");
}

function verificar() {
  mostrarFormulario("enviarCodigo");
}

function mostrarVerificacion() {
  mostrarFormulario("verificacion");
}

function mostrarNuevaContrasena() {
  mostrarFormulario("nuevaContraseña");
}
