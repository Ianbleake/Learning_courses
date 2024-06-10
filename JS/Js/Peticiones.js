'use strict'

//Fetch(ajax) y peticiones Rest
const contenedor = document.getElementById('usuarios');

function generateElement(data) {
  data.forEach(element => {
    console.log(element.id + '.- ' + element.name + '\n' + 'Username: ' + element.username + '\n' + 'email: ' + element.email);
    let user = document.createElement('li');
    user.setAttribute('id', "Usuario " + element.id);
    user.setAttribute('class', 'list');
    let nombre = document.createElement('h2');
    let email = document.createElement('h5');
    let username = document.createElement('h5');
    nombre.append("Nombre: " + element.name);
    email.append("Email: " + element.email);
    username.append("Username: " + element.username);
    user.append(nombre);
    user.append(email);
    user.append(username);
    contenedor.append(user);
  });
}

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

getData('https://jsonplaceholder.typicode.com/users')
  .then(data => generateElement(data));

//*Try catch
try{
  var year = 2020;
  alert(yea);
}
catch(error){
  console.error("Ha sucedido un error: "+error)
}