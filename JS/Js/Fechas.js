//!Fechas

function timenow(){
  console.clear();
  var fecha = new Date(); //*Obtenemos la fecha actual
  console.log(fecha); 
  
  var year = fecha.getFullYear(); //*Obtenemos el año a 4 digitos
  var month = fecha.getMonth(); //*Obtenemos el mes 
  var day = fecha.getDate(); //*Obtenemos el dia del mes
  var weekday = fecha.getDay(); //*Obtenemos el dia de la semana
  var hour = fecha.getHours(); //*Obtenemos la hora
  var minutes = fecha.getMinutes(); //*Obtenemos los minutos
  var seconds = fecha.getSeconds(); //*Obtenemos los segundos
  
  const week = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio","Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
  
  var textoHora = `La fecha de hoy es ${week[weekday]} ${day} de ${months[month]} del año ${year} y son las ${hour}:${minutes}:${seconds}`;
  console.log(textoHora);
}

setInterval(timenow,1000);
