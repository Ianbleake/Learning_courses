'use strict'

function suma(n1,n2)//funcion con retorno y parametros
{
    return(n1+n2);
}

function imprime()//funcion sin retorno o de accion
{
    console.log("Hola desde una funcion lml");
}

var numero = parseInt(prompt("Ingresa un numero: ",0));
var otronumero = parseInt(prompt("Ingresa otro numero:",0));

var resultado = suma(numero,otronumero);

alert(resultado);

imprime();


//Funciones anidadas

function resta(n1,n2)
{
 return(n1-n2);
}

function multiplicacion(n1,n2)
{
 return(n1*n2);
}

function divicion(n1,n2)
{
 return(n1/n2);
}

function calculadora(n1,n2)
{
    alert(" Suma: "+suma(n1,n2)+"\n"+"Resta: "+resta(n1,n2)+"\n"+"Multiplicacion: "+multiplicacion(n1,n2)+"\n"+"Divicion: "+divicion(n1,n2));

}

var numero = parseInt(prompt("Ingresa un numero: ",0));
var otronumero = parseInt(prompt("Ingresa otro numero:",0));

calculadora(numero,otronumero);

//Funciones anonimas

function sumame(numero1,numero2,sumaymuestra,doblesuma)
{
var suma= numero1+numero2;

sumaymuestra(suma);
doblesuma(suma);
}

sumame(5,7,function(dato){console.log("la suma es: ",dato);},function(dato){console.log("El doble de la suma es: ",2*dato);});

//Funcion Flecha
function sumame(numero1,numero2,sumaymuestra,doblesuma)
{
var suma= numero1+numero2;

sumaymuestra(suma);
doblesuma(suma);
}

sumame(5,7,dato =>{console.log("la suma es: ",dato);},dato =>{console.log("El doble de la suma es: ",2*dato);});

