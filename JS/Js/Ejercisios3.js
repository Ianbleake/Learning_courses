//*Ejercisio 1.1
'use strict'
/*
window.addEventListener('DOMContentLoaded', () => {

    const inputNombre = document.querySelector("#Nombre");
    const inputApellidos = document.querySelector("#Apellidos")
    const inputEdad = document.querySelector("#Edad");
    const sendbutton = document.querySelector("#send");

    let datos_usuario = [ ];

    inputNombre.addEventListener('input',()=>{
        datos_usuario['nombre'] = inputNombre.value;
    });

    inputApellidos.addEventListener('input',()=>{
        datos_usuario['apellido'] = inputApellidos.value;
    });

    inputEdad.addEventListener('input',()=>{
        datos_usuario['edad'] = inputEdad.value;
    });

    sendbutton.addEventListener('click',() => {

        console.log(datos_usuario);
        
        for(var indice in datos_usuario){
            var texto = document.createElement('p');
            texto.append(datos_usuario[indice]);
            document.body.appendChild(texto);
        }
    });

    
})
*/
//*Ejercisio 1.2
/*
 window.addEventListener('DOMContentLoaded', () => {
     const inputNombre = document.getElementById('Nombre');
     const inputApellidos = document.getElementById('Apellidos');
     const inputEdad = document.getElementById('Edad');
     const enviar = document.getElementById('send');

     enviar.addEventListener('click', () => {
         const nombre = inputNombre.value;
         const apellidos = inputApellidos.value;
         const edad = inputEdad.value;

         // Creamos elementos <h1> para mostrar los datos
         const h1Nombre = document.createElement('h1');
         h1Nombre.textContent = 'Nombre: ' + nombre;

         const h1Apellidos = document.createElement('h1');
         h1Apellidos.textContent = 'Apellidos: ' + apellidos;

         const h1Edad = document.createElement('h1');
         h1Edad.textContent = 'Edad: ' + edad;

         // Añadimos los elementos <h1> al DOM
         document.body.appendChild(h1Nombre);
         document.body.appendChild(h1Apellidos);
         document.body.appendChild(h1Edad);
     });
 });
*/

//*Validar Formulario con JS

const styles = `background: linear-gradient(20deg, rgba(2,0,36,1) 2%, rgba(201,182,27,1) 50%, rgba(255,226,28,1) 93%);color:#fff;padding: 5px 10px;`;

window.addEventListener('load',() => {
    console.log("%c DOM Loaded", styles);

    var Formulario = document.querySelector("#Formulario");
    var box = document.querySelector(".dashed");
    box.style.display = "none";

    Formulario.addEventListener('submit',() => {
        console.log("Evento submit capturado");

        var Nombre = document.querySelector("#Nombre").value;
        var Apellido = document.querySelector("#Apellidos").value;
        var Edad = parseInt(document.querySelector("#Edad").value);

        if( Apellido.trim().length == 0 && Nombre.trim().length == 0 ){
            alert("Por llene el Formulario");
            return false;
        }else{
            if(Nombre.trim()== null || Nombre.trim().length == 0){
                //alert("Porfavor, ingrese su nombre");
                document.querySelector("#errorname").innerHTML = "Porfavor ingrese su nombre";
                return false;
            }else{
                document.querySelector("#errorname").innerHTML = "";
            }
    
            if(Apellido.trim()== null || Apellido.trim().length == 0){
                //alert("Porfavor, ingrese su apellido");
                document.querySelector("#errorapellido").innerHTML = "Porfavor ingrese su Apellido";
                return false; //poner esto evitara que se envie el formulario
            }else{
                document.querySelector("#errorapellido").innerHTML = "";
            }
    
            if(Edad == null || Edad <= 0 || isNaN(Edad)){
                //alert("Por favor ingrese una edad valida.");
                document.querySelector("#erroredad").innerHTML = "Porfavor ingrese una edad valida";
                return false;
            }else{
                document.querySelector("#erroredad").innerHTML = "";
            }
        }

        
        box.style.display = "block";

        console.log(Nombre,Apellido,Edad);

        var datos_usuario = [Nombre, Apellido, Edad];

        for(var indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box.append(parrafo);
             
            
        }

    });
});


function remove (string) {
    var last = string.trim().substr(-1,1);
    while(true)
      {
        last = string.trim().substr(-1,1);
        if(last == '!'){
          string = string.trim().substr(0,string.length - 1);
          console.log(last);
        }else if(last != '!'){
          return string;
        }
    }
}