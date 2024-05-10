'use strict'

var elemento=document.getElementsByTagName('div');

console.log(elemento[1].textContent);

//elemento[1].innerHTML="<p>Ahora soy caja 9</p>"

//var nombre=prompt("Ingrese su nombre: ");
//var Apellido=prompt("Ingrese su Apellido: ");

//elemento[1].innerHTML="<p>"+nombre+" "+Apellido+"</p>";

var clases =document.getElementsByClassName('div1');
/*
var div;
for(div in clases){
    if(clases[div].className=="div1")
    {
    clases[div].style.background="red";
    }
};
*/

//BOM

console.log("La Altura de la pagina es: "+window.innerHeight);
console.log("El Ancho de la pagina es: "+window.innerWidth);

console.log("La Altura de la pagina es: "+screen.height);
console.log("El Ancho de la pagina es: "+screen.width);

console.log(window.location.href);

//var direccion=window.location.href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwiGusaaw-j6AhW7KkQIHa6DBd4QPAgI";

//console.log(direccion);

//window.open("https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwiGusaaw-j6AhW7KkQIHa6DBd4QPAgI","height=500","width=500")
