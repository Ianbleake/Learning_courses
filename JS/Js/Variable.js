'use strict' //modo estricto

//variables
var pais = "Mexico";
var continente = "America";
var edad = 22;
var altura = 1.85;
var ubicacion =continente+pais;

alert(ubicacion);

/*
//variable ambigua
perro= 2;

alert(perro);
*/

//prueba let
var numero = 1

console.log("Antes del bloque:");
console.log(numero);

if(true)
{
    let numero=9;
    console.log("dentro del bloque:");
    console.log(numero);
}

console.log("Fuera del bloque:");
    console.log(numero);

//prueba var
var texto = "hola"

console.log("Antes del bloque:");
console.log(texto);

if(true)
{
    var texto="gato";
    console.log("dentro del bloque:");
    console.log(texto);
}

console.log("Fuera del bloque:");
    console.log(texto);

//constantes

var web = "www.google.com";
const ip = "255.255.255.1";

console.log(web);
console.log(ip);

web="www.facebook.com";
//ip="1.1.1.1"

console.log(web);
console.log(ip);
