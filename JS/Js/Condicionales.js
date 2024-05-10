//Condicionales

//Condicional if

var a = 1;
var b = 1;
var c = a+b;

if(c == 2)//si...
{
console.log("hola")//has esto
}

// Condicional if-else

var edad = 22;

if(edad>=18)
{
console.log("Ten tu cerveza");
}

else
{
console.log("Ten agua");
}

//Condicional else-if

var edad = 22;

if(edad<=12)
{
console.log("Eres un niño");
}

else if(edad>12 && edad<18)
{
console.log("Eres un adolecente");
}

else if(edad>=18 && edad<70)
{
console.log("Eres un adulto");
}

else
{
console.log("Eres un anciano");
}

//Condicional Switch

var edad = 18;

switch(edad)
{
    case 12: console.log("Eres un niño"); break;
    case 15: console.log("Eres un adolecente"); break;
    case 18: console.log("Eres un adulto"); break;
    case 70: console.log("Eres un viejo"); break;
}