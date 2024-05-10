'use strict'
//ejercicio1 
// pedir dos numeros e indicar cual es mayor, menor, o si son iguales
/*var control;
do
{
var n1 = parseInt(prompt("Ingrese un numero porfavor"));
var n2 = parseInt(prompt("Ingrese otro numero porfavor"));

if(n1<n2)
{
    alert(n2+" es mayor que "+n1);
}

else if(n1>n2)
{
    alert( n1+" es mayor que "+n2);
}

else if(n1==n2)
{
    alert("ambos numeros son iguales");
}

else
{
    alert("Introduce Valores apropiados");
}

control = confirm("¿desea volver a intentar?");

}
while(control==true)
*/

//ejercicio1+
// pedir dos numeros e indicar cual es mayor, menor, o si son iguales pero si los valores no son validos
//se solicitan automaticamente de nuevo
/*
var control;
do
{
var n1 = parseInt(prompt("Ingrese un numero porfavor"));
var n2 = parseInt(prompt("Ingrese otro numero porfavor"));

if(n1<n2)
{
    alert(n2+" es mayor que "+n1);
    control = confirm("¿desea volver a intentar?");
}

else if(n1>n2)
{
    alert( n1+" es mayor que "+n2);
    control = confirm("¿desea volver a intentar?");
}

else if(n1==n2)
{
    alert("ambos numeros son iguales");
    control = confirm("¿desea volver a intentar?");
}

else
{
    alert("Introduce Valores apropiados");
    control = true;
}


}
while(control==true)
*/

//Ejercicio 2
//Introducir numeros hasta introducir un numero negativo y sacar suma y  promedio
/*
do
{
var control;
var numero;
var suma = 0;
var contador = 0;
do
{
    numero = parseInt(prompt("Introduce un numero",0));

    if(isNaN(numero))
    {
        numero = 0;
    }

    else if(numero>=0)
    {
        suma = suma + numero;
        contador++;
    }
}
while(numero>=0)

alert("La suma de los numeros es: "+suma+"\nEl promedio de los numeros es: "+suma/contador);

control = confirm("¿Volver a intentar?");
}
while(control==true)
*/

//Ejercicio 3
//Mostrar todos los numeros entre un rango especificado por el usuario
/*
var control;
do
{
    var inicio = parseInt(prompt("Introdusca un Numero"));
    var fin = parseInt(prompt("Introdusca un Numero"));

    for(inicio; inicio<=fin;inicio++)
    {
        console.log(inicio);
    }
    
    control = confirm("¿Volver a intentar?");
}while(control==true)
*/

//Ejercicio 4
//Mostrar todos los numero impares en un rango definido por el usuario
/*
var control;
do
{
    var inicio = parseInt(prompt("Ingrese el valor inicial",0));
    var fin = parseInt(prompt("Ingrese el numero final",0));
   
    for(inicio; inicio<=fin; inicio++)
    {
        if(inicio%2!=0)
        {
            console.log(inicio);
        }
    }

    control = confirm("¿Volver a intentar?");
}
while(control==true)
*/

//Ejercicio 5
//Mostrar todos los numeros divisores de un numero introducido
/*
var control;
do
{
    var numero = parseInt(prompt("Ingrese un numero",0));

    for( var inicio = 1; inicio<=numero; inicio++)
    {
        if(numero%inicio==0)
        {
            console.log(inicio);
        }
    }

    control = confirm("¿Volver a intentar?");
}
while(control==true)
*/

//Ejercicio 6
//decir si el numero es par o impar, si no introducie un numero valido que lo solicite automaticamente
/*
var control;
do
{
    var numero = parseInt(prompt("Ingrese un numero",0));

    if(isNaN(numero))
    {
        alert("Ingrese valores numericos");
        control=true;
    }

    else if(numero%2==0)
    {
        alert("El numero "+numero+" es par :D");
    }

    else
    {
        alert("el numero "+numero+" es impar :D");
    }
    control = confirm("¿Volver a intentar?");
}
while(control==true)
*/

//Ejercicio 7
//Mostrar la tabla de multiplicar de un numero introducido
/*
var control;
do
{

var numero = parseInt(prompt("¿De que numero quieres la tabla de multiplicar?"));

document.write("<h1>Tabla del numero: " + numero+"</h1>");

for (var i = 1; i <= 10; i++) {
    document.write("<p>"+i + "x" + numero + "=" + i * numero + "</br>"+"</p>");
}

control = confirm("¿Repetir?");

}while(control==true)
*/

//Ejercicio 8
//calculadora
/*
var numero1=parseInt(prompt("Ingrese el primer numero: ",0));
if(isNaN(numero1))
{
    var numero1=parseInt(prompt("*Error* Vuelva a ingresar el primer numero: ",0));
}

var numero2=parseInt(prompt("Ingrese el segundo numero: ",0));
if(isNaN(numero2))
{
    var numero2=parseInt(prompt("*Error* Vuelva a ingresar el segundo numero: ",0));
}

document.write("<h1>Resultados: </h1>");
document.write("<p>Suma de: "+numero1+"+"+numero2+"="+(numero1+numero2)+"</p>");
document.write("<p>Resta de: "+numero1+"-"+numero2+"="+(numero1-numero2)+"</p>");
document.write("<p>Multiplicacion de: "+numero1+"x"+numero2+"="+numero1*numero2+"</p>");
document.write("<p>Divicion de: "+numero1+"/"+numero2+"="+numero1/numero2+"</p>");
*/

//Del numero dado devolvera los numeros que existan desde 1 al numero dado que sean multiplos de 3 o 5 y la suma de estas
/*
function solution(number){
  
    var numbers=[];
    if(number==0)
      {
        return(0)
      }
    for(let i=1;i<number;i++)
      {
        if(i%3==0||i%5==0)
          {
            numbers.push(i);
          }
      }
    let sum=0;
    
    numbers.forEach((elemento)=>{
      sum=sum+elemento;
    });
    return(numbers+" sumados dan="+sum);
  }
  console.log(solution(20));
  */

  //Cuenta las vocales de una palabra
  /*
  function getCount(str) {
    var count=0;
    
    for(let i=0;i<=str.length;i++)
      {
        if(str.charAt(i)=='a'||str.charAt(i)=='e'||str.charAt(i)=='i'||str.charAt(i)=='o'||str.charAt(i)=='u')
          {
            count=count+1;
          }
      }
    
    return(count);
  }
  */