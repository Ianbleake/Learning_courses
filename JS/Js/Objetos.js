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
  name: 'Ian',
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
console.log(player);

//Metodos de un objeto
console.log(player.talk());
player.fireball();

//JSON
