//Objetos
window.addEventListener('load',()=>{
  var boton = document.querySelector('#press');
  boton.addEventListener('click',()=>{
    boton.style.border = "10px solid green";
  });
});

const attack = ()=>{console.log("use fireball");};

//Crar un objeto
const player = {
  name: 'Snake',
  life: '99',
  power: '10',
  talk: ()=>{ return "Hola"; },
  fireball: attack
};

//Acceder a las propiedades del objeto
console.log(player);  
console.log(player.name);
console.log(player.life);
console.log(player.power); 
//Añadir una propiedad a un objeto 
player.weapon = "sword";
console.log(player.weapon);

//Metodos de un objeto
console.log(player.talk());
player.fireball();

//JSON
fetch("../Js/informacion.Json").then(response => {return response.json();}).then(user => {
    console.log(user.name);
    console.log(user.life);
});


//Pasar de Objeto a JSON
const usuario = {
  nombre: 'IanBleake',
  vida: '99',
  habla: ()=>{console.log("hello")}
}

console.log(JSON.stringify(usuario));

//Desestructuracion de objetos
const cita = {
  paciente: "Ivan",
  lugar: "Hospital Angeles",
  consultorio: 2,
  motivo: "Tos",
  historial: ["tos","covid","gastritis"]
}

let {paciente,lugar: Hospital,consultorio,motivo,expefiente = 1999} = cita;

console.log(paciente);
console.log(Hospital);
console.log(consultorio);
console.log(motivo);
console.log(expefiente);


//Tambien puede hacerse con JSON
fetch("../Js/informacion.Json").then(response => {return response.json();}).then(user => {
  let {name,life} = user;
  console.log(name);
  console.log(life);
});

//Reestructurado de Objetos y clonado de objetos

const expediente = {
  ...structuredClone(cita),
  paciente: "Ivan Rangel",
  tratamiento: "naproxeno",
  doctor: "Alejandra Sanchez"
}

console.log("Nuevo: ", expediente.historial[0] );
console.log("Viejo: ", cita.historial[0] );

expediente.historial[0] = "Dolor de estomago";

console.log("Nuevo: ", expediente.historial[0] );
console.log("Viejo: ", cita.historial[0] );

//Iteradores de Objetos
const user = {
  name: "Angel",
  life: 99,
  power: 10,
  talk: function() {
    return "Hola!";
  }
};

console.log(Object.keys(user));
console.log(Object.values(user));    
console.log(Object.entries(user));  

//Agrupar elementos por criterio 
const users = [
  { name: "ManzDev", type: "streamer", color: "indigo" },
  { name: "afor_digital", type: "streamer", color: "blue" },
  { name: "BlurSoul_", type: "moderator", color: "indigo" },
  { name: "felixicaza", type: "moderator", color: "blue" },
  { name: "pheralb", type: "moderator", color: "green" },
  { name: "omaaraguirre", type: "viewer", color: "orange" },
  { name: "LuisLlamas_es", type: "viewer", color: "orange" },
  { name: "ZeroBl", type: "viewer", color: "black" }
];

const usersByType = Object.groupBy(users, user => user.type);

console.log(usersByType);

