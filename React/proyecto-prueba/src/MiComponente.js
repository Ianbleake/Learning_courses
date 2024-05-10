//Elementos a Importar(modulos de react/dependencias)
import React from "react"; //obligatorio

//Funcion del componente
function Micomponente()
{
    //let nombre="Angel Ivan Rangel Vazquez";
    //let web ="www.google.com";

    let usuario=
    {
        nombre: "Angel Ivan",
        apellidos: "Rangel Vazquez",
        web:"www.bleakedev.com"
    }

    return(
        <div>
            <h1>Soy {usuario.nombre}</h1>
            <h3>Lenguajes que conozco:</h3>
            <ul>
                <li>C/C++</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
            <p>Y ahora estoy aprendiendo <code>React</code></p>
        </div>
    );
}
//export

export default Micomponente;

