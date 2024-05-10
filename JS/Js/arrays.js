//Usar For para recorrer el array

var datos = ["dato1", "dato2", "dato3"]
var i = 0;

for (i; i < datos.length; i++) {
    console.log(datos[i]);
}

//Usar ForEach para recorrer el array

var datos = ["dato1", "dato2", "dato3"];

datos.forEach((element, indice) => { console.log(indice + ".- " + element) });

//Recorrer un array con for-in
for(let indice in datos)
{
    console.log(datos[indice]);
}

//arrays multidimensionales
var j = 0;
var i = 0;

var local1 = ["dato1", "dato2"];
var local2 = ["dato3", "dato4"];
var global = [local1, local2];


console.log(global[0][1]);

//operaciones con arrays
//Agregar y eliminar elementos a un array

var peliculas = ["Joker"];
var elemento = prompt("introduce algo:");

while(elemento!=0)
{
    peliculas.push(elemento); //agrega el elemento al array
    var elemento = prompt("introduce algo:");
}

var control=confirm("Desea borrar elementos?")
if(control==true)
{
var borrar=prompt("Cuantos elementos desea borrar?",peliculas.length)
for(var i=1; i<=borrar; i++)
{
    peliculas.pop(); //elimina el ultimo elemento del array
}
}

peliculas.forEach((element, indice) => { console.log(indice+1+ ".- " + element) });

//Convertir Array a texto

var texto =peliculas.join();
console.log(texto);

//ordenar Arrays

console.log(peliculas.sort());

