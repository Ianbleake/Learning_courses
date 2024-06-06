window.addEventListener('load',()=>{

  //*Revisar si esta disponible el LocalStorage
  if(typeof(Storage) !== 'undefined'){
    console.log("LocalStorage esta disponible :D");
  }else{
    console.log("LocalStorage No disponible :C");
  }

  //*Guardar Datos 
  localStorage.setItem("Saludo","Hola mundo");

  sessionStorage.setItem("Nombre","Ivan")

  //*Recuperar Elemento
  var valor = localStorage.getItem("Saludo");
  console.log(valor);
  const salida = document.getElementById('valor');
  salida.innerHTML = valor;

  //*Almacenar objetos
  var usuario = {
    nombre: "Ivan Rangel",
    correo: "ivan@gmail.com",
    pass: "123456" 
  };

  localStorage.setItem("usuario",JSON.stringify(usuario)); //! para que se almacene correctamente la informacion hay que pasarlo a una cadena json

  //*Recuperar Objeto
  console.log(localStorage.getItem("usuario")); //*Muestra tal cual json
  
  var user = JSON.parse(localStorage.getItem("usuario"));

  console.log(user);

  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const password = document.getElementById("pass");

  nombre.innerHTML = user.nombre;
  correo.innerHTML = user.correo;
  password.innerHTML = user.pass;

  //*Borrar Local Storage

  localStorage.removeItem("usuario"); //! Elimina un elemento del storage
  localStorage.clear(); //! Limpia todo el storage

});