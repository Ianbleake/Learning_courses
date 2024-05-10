//Pida 6 numeros en desorden por pantalla y los guarde en un array 
//mostrar el array en cuerpo y consola.
//ordenarlos y mostrarlos
// invertir el orden y mostrarlo
//Mostrar cuantos elementos tiene el array 
//Buscar un valor y mostrar si lo encuentra o no y su indice
var arreglo=[];
var i=0;

for(i;i<6;i++)
{
    var elemento=prompt("Ingrese un numero:");
    arreglo.push(elemento);
}

arreglo.forEach(element=>{console.log(element)});

arreglo.forEach(element=>{document.write("<ul>"+"<li>"+element+"</li>"+"</ul>");});


console.log("*************");
document.write("<p>*************</p>");

var orden=arreglo.sort();

orden.forEach(element=>{console.log(element)});

orden.forEach(element=>{document.write("<ul>"+"<li>"+element+"</li>"+"</ul>");});

console.log("*************");
document.write("<p>*************</p>");

var invertido=arreglo.reverse();

invertido.forEach(element=>{console.log(element)});

invertido.forEach(element=>{document.write("<ul>"+"<li>"+element+"</li>"+"</ul>");});

console.log("*************");
document.write("<p>*************</p>");

var conteo=arreglo.length;
console.log("El arreglo tiene "+conteo+" elementos");
document.write("<p>El arreglo tiene "+conteo+" elementos"+"</p>");

console.log("*************");
document.write("<p>*************</p>");

var busqueda = prompt("Que valor quieres buscar:");
var busca=arreglo.find(element=>busqueda==element);

if(busca==busqueda)
{
    var indice=arreglo.findIndex(element=>busqueda==element);

    console.log("El elemento que busca("+busqueda+") existe y esta en el indice: "+indice);
    document.write("<p>El elemento que busca("+busqueda+") existe y esta en el indice: "+indice+"</p>");

}

else
{
    console.log("El elemento que busca("+busqueda+") No existe.");
    document.write("<p>El elemento que busca("+busqueda+") No existe. </p>");
}