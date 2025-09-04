function mostrarInicioSesion() {
  document.getElementById("registro").style.display = "none";
  document.getElementById("inicio-sesion").style.display = "block";
}
function mostrarRegistro() {
  document.getElementById("registro").style.display = "block";
  document.getElementById("inicio-sesion").style.display = "none";
}
function verificar() {
  document.getElementById("enviarCodigo").style.display = "block";
  document.getElementById("registro").style.display = "none";
  document.getElementById("inicio-sesion").style.display = "none";
}
function continuar() {
  document.getElementById("verificacion").style.display = "block";
  document.getElementById("enviarCodigo").style.display = "none";

}
function nuevaContraseña() {
  document.getElementById("nuevaContraseña").style.display = "block";
  document.getElementById("verificacion").style.display = "none";

}
function aceptar() {
  document.getElementById("inicio-sesion").style.display = "block";
  document.getElementById("nuevaContraseña").style.display = "none";
  document.getElementById("registro").style.display = "none";
}
function iniciarSesion(){
  document.getElementById("principal").style.display = "block";
  document.getElementById("inicio-sesion").style.display = "none";
  
}


