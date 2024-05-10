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

