//Elementos a Importar(modulos de react/dependencias)
import React from "react"; //obligatorio

//Funcion del componente
function Welcome(props) {
    return (
        <div>
            <h3>Bienvenido {props.nombre}!!! </h3>
        </div>
    );
}

//export
export default Welcome;