'use strict'

//eventos del boton

function CambiarColor() 
{
    console.log("click");
    document.body.style.background = "black";
}

function Hola()
{
    alert("HolaMundo");
}

function action() {
    alert("Hello!");
}

function Fondo()
{
    var back = document.querySelector("#btn3");
    
    var bg = back.style.background
    if(bg == "red")
    {
        back.style.background = "green"
        console.log("push")
    }
    
    else
    {
        back.style.background = "red"
        console.log("pushpush")
    }

    return true;
}

var boton = document.querySelector("#push");
boton.addEventListener('click',function(){CambiarColor();});

const button = document.querySelector("#PushJS");
button.onclick = function() {
  alert("Hello from JS!");
}

const button1 = document.querySelector("#btn");
button1.addEventListener("click",action);

const button2 = document.querySelector("#btn2");
button2.addEventListener("click",Hola);
button2.addEventListener("click",CambiarColor);


const styles = `background:linear-gradient(#884ced, #ec1cce);color:#fff;padding: 5px 10px;`;

console.log("%c¡Curso JavaScript!", styles);


//Evento load
window.addEventListener('load', () => {

    //Quitar un listener
    const button = document.querySelector("button");
    const toggle = () => button.classList.toggle("red");

    function action() {
        alert("Hello!");
        button.removeEventListener("click", action);      // Delete listener
    }

    button.addEventListener("click", action);         // Add listener
    button.addEventListener("click", toggle);         // Toggle red CSS

    //Evento focus
    var inputFocus = document.querySelector("#focus");

    inputFocus.addEventListener('focus', function () { console.log("Entrasre al Input Focus"); });
    inputFocus.addEventListener('blur', function () { console.log("Saliste del Input focus"); }); //Evento blur complementando al Focus

    //Evento onblur
    function validarEntero(valor) {
        valor = parseInt(valor) //Se convierte el valor recibido a entero y se vuelve a almacenar en la variable
        if (isNaN(valor)) { // se hace la validacion de que "valor" sea un numero
            return "NotNumber" // si no lo es retorna este string
        } else {
            return valor  // si lo es retorna el valor
        }
    }

    function compruebaValidoEntero() { //esta es la funcion que llama el evento Onblur
        enteroValidado = validarEntero(document.f1.numero.value) //manda el valor ingresado en el input a la funcion de validacion y asigna el resultado a la variable
        if (enteroValidado == "NotNumber") { // si el valor no era un numero le avisa al usuario
            alert("Debe escribir un numero entero!")
            document.f1.numero.select() //selecciona el texto
            document.f1.numero.focus() //Regresa el foco al input
        } else
            document.f1.numero.value = enteroValidado
    }

    //Evento keydown
    var inputDown = document.querySelector("#down");
    inputDown.addEventListener('keydown', function (event) {
        console.log("Pulsaste la tecla:", String.fromCharCode(event.keyCode)); //String.fromcharcode captura la informacion ingresada en el teclado
    });

    //Evento Keypress
    var inputPress = document.querySelector("#down");
    inputPress.addEventListener('keypress', function (event) { console.log("Presionando la Tecla:", String.fromCharCode(event.keyCode)) });

    //Evento KeyUp
    var inputUp = document.querySelector("#down");
    inputPress.addEventListener('keyup', function (event) { 
        console.log("Soltaste la Tecla:", String.fromCharCode(event.keyCode)) });

        

    //Timers
        function intervalo(){
            var tiempo = setInterval(function(){

                console.log("Set interval ejecutado");
    
                var encabezado = document.querySelector("h1");
    
                if(encabezado.style.fontSize == "50px"){
                    encabezado.style.fontSize = "20px";
                }
                else{
                    encabezado.style.fontSize = "50px"
                }
            },1000);

            return tiempo;
        }

       
        var tiempo = intervalo();
        var stop = document.querySelector("#Stop");
        var start = document.querySelector("#Start");

        stop.addEventListener("click", function(){
            clearInterval(tiempo);
            alert("Haz parado el intervalo");
        });

        start.addEventListener("click",function(){
            alert("Se ha reaunudado el intervalo");
            tiempo = intervalo();
        });

});


