 var nombre =document.getElementById("nombre");
 var contraseña =document.getElementById("contraseña");
  var error =document.getElementById("error");
  error.style.color= "red";

function enviarformulario(){
    console.log("enviando formulario.....:)");

 var mensajeserror=[];

 if(nombre.value=null|| nombre.value ===""){
    mensajeserror.push("Ingresa tu nombre");
 }
 if(contraseña.value=null|| contraseña.value ===""){
    mensajeserror.push("Ingresa tu contraseña ");
 }
 if(correo.value=null|| correo.value ===""){
    mensajeserror.push("Ingresa tu correo. alta comedia ");
 }

  error.innerHTML =mensajeserror.join(" ,");


    return false;
}
