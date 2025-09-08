function mostrarInicioSesion() {
  ocultarTodos();
  document.getElementById("inicio-sesion").style.display = "block";
}

function mostrarRegistro() {
  ocultarTodos();
  document.getElementById("registro").style.display = "block";
}

function verificar() {
  ocultarTodos();
  document.getElementById("enviarCodigo").style.display = "block";
}

function continuar() {
  ocultarTodos();
  document.getElementById("verificacion").style.display = "block";
}

function nuevaContraseña() {
  ocultarTodos();
  document.getElementById("nuevaContraseña").style.display = "block";
}

function aceptar() {
  ocultarTodos();
  document.getElementById("inicio-sesion").style.display = "block";
}
 
function ocultarTodos() {
  const formularios = document.querySelectorAll('.formulario');
  formularios.forEach(form => form.style.display = 'none');
}


