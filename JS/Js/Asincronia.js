/*
//!Ejemplo base
const iterations = 10;
const numbers = [];

for (let i = 0; i < iterations; i++) {
  const number = 1 + Math.floor(Math.random() * 6);
  numbers.push(number);
  if (number === 6) {
    console.log("ERROR");
    break;
  }
}

console.log(numbers);

//!Callbacks
  //*CB function
  function action(){
    console.log("Action");
  }
  setTimeout(action(),1000);

  //*CB Funcion Anonima
  const saludo = function(){
    console.log("Hola Mundo");
  }
  setTimeout(saludo,1500);

  //*CB Arrow functions 
  setTimeout(() => {
    console.log("He ejecutado la función");
  }, 2000);

  //*Asincronia con CB
  setTimeout(() => {
    console.log("Funcion Asincrona");
  },3000);
  console.log("Funcion Sincrona");

  //*Manejando la asincronia con callback Ejemplo base
  const doTask = (iterations, callback) => {
    const numbers = [];
  
    for (let i = 0; i < iterations; i++) {
      const number = 1 + Math.floor(Math.random() * 6);
      numbers.push(number);
      if (number === 6) {
        callback({
          error: true,
          message: "Se ha sacado un 6"
        });
        return;
      }
    }
  
    //Termina bucle y no se ha sacado 6 
    return callback(null, {
      error: false,
      value: numbers
    });
  }

  doTask(10, function(err, result) {
    if (err) {
      console.error("Se ha sacado un ", err.message);
      return;
    }
    console.log("Tiradas correctas: ", result.value);
  });

  //!Promesas

  //*Consumir una promesa
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json()) //Devuelve una promesa
    .then(data => {
      console.log(data.name); //Consumimos la promesa 
    })
    .catch(()=>{
      console.error("No se ha podido establecer conexion con el servicio:")
    })
    .finally(()=>{
      console.warn("Proceso terminado")
    })

  console.log("Codigo Sincrono");

  //*Crear una promesa

  const doTask = (iterations) => {
    return new Promise( (resolve, reject) => {
      const numbers = [];
  
      for (let i = 0; i < iterations; i++) {
        const number = 1 + Math.floor(Math.random() * 6);
        numbers.push(number);
        if (number === 6) {
          reject({
            error: true,
            message: "Se ha sacado un 6"
          });
        }
      }
  
      resolve({
        error: false,
        value: numbers
      });
    })
  };

  doTask(10)
  .then(result => console.log("Tiradas correctas: ", result.value))
  .catch(err => console.error("Ha ocurrido algo: ", err.message));
*/
  //!Async await
  
  async function request (url){
    return await fetch(url)
      .then(Response => Response.json())
  }

  request('https://jsonplaceholder.typicode.com/users/1')
    .then(data => console.log(data.name))

