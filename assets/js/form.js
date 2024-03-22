/* Integrantes:
Angelo Gonzalez
Adrian Espinoza
Yistler Duran
Victor Tapia
Iván Guerrero
 */
let form = document.getElementById("formulario");
form.addEventListener("submit", (event) => {
    const regex = /^[a-zA-Z\s]+$/; 
    let nombre = document.getElementById("nombre").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;
   if (!regex.test(nombre) || !regex.test(asunto) || !regex.test(mensaje)) {
        if (!regex.test(nombre)){
        document.querySelector(".errorNombre").innerHTML = "Solamente se requiere caracteres alfabéticos";
        } else {
            document.querySelector(".errorNombre").innerHTML = "";
             } 
        if (!regex.test(asunto)){
            document.querySelector(".errorAsunto").innerHTML = "Solamente se requiere caracteres alfabéticos";
        }  else {
            document.querySelector(".errorAsunto").innerHTML = ""; 
        }
        if (!regex.test(mensaje)) {
            document.querySelector(".errorMensaje").innerHTML = "Solamente se requiere caracteres alfabéticos";
        }else {
            document.querySelector(".errorMensaje").innerHTML = "";
        }
 }
    if (regex.test(nombre) && regex.test(asunto) && regex.test(mensaje)) {
        document.querySelector(".errorNombre").innerHTML = "";
        document.querySelector(".errorAsunto").innerHTML = "";
        document.querySelector(".errorMensaje").innerHTML = "";
        document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito!!";
    } else {
        document.querySelector(".resultado").innerHTML = "";
    }
   event.preventDefault();
});