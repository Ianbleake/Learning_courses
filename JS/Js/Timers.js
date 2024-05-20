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
