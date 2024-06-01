'use strict'

window.addEventListener('load', () => {

  const form = document.getElementById('formpeliculas');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const titulo = document.getElementById('addmovie').value;

    if (titulo.length > 0) {
      localStorage.setItem(titulo, titulo);
      location.reload();
    }
  });

  var out = document.getElementById('movies');
  for (var i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);

    if (typeof value === 'string') {
      var li = document.createElement("li");
      var del = document.createElement("button");
      li.setAttribute("id", key);
      li.setAttribute("class","list")
      del.setAttribute("class", "delete");
      del.append("Borrar");
      li.append(value);
      li.append(del);
      out.append(li);
    }
  }

  var allbuttons = document.querySelectorAll(".delete");

  allbuttons.forEach(button => {
    button.addEventListener('click', () => {
      var elemento = button.parentElement;
      var key = elemento.id;
      elemento.remove();  // Eliminar el <li> del DOM
      localStorage.removeItem(key);  // Eliminar el item del localStorage
    });
  });
});
