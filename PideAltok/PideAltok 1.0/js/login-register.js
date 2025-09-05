// login-register.js
// Alterna la visibilidad entre el formulario de login y el de registro
function mostrarRegistro() {
  document.getElementById('login-card').style.display = 'none';
  document.getElementById('registro-card').style.display = 'block';
}
function mostrarLogin() {
  document.getElementById('login-card').style.display = 'block';
  document.getElementById('registro-card').style.display = 'none';
}
