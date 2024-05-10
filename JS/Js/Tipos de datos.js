'use  strict'

//Tipos de datos

var entero = 1;
var flotante = 1.2;
var boole = true;
var string = "hola mundo";
var numerofalso = "99.9";

console.log(entero);
console.log(flotante);
console.log(boole);
console.log(string);

//cambiar el tipo de dato
Number(numerofalso);
parseInt(numerofalso);
parseFloat(numerofalso);
String(flotante);

console.log(Number(numerofalso)+1);
console.log(parseInt(numerofalso)+1);
console.log(parseFloat(numerofalso)+1);
console.log(String(flotante)+1);

//typeof

console.log(typeof entero);
console.log(typeof flotante);
console.log(typeof boole);
console.log(typeof string);
