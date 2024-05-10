import React from 'react'
import PropTypes from "prop-types"

export const TercerComponente = ({nombre,Apellido,correo}) => {
  return (
    <div>
        <h3>Usuario:</h3>
        <ul>
            <li>Nombre: {nombre+" "+Apellido}</li>
            <li>Correo Electronico: {correo}</li>
        </ul>
    </div>
  )
}

TercerComponente.propTypes={
    nombre:PropTypes.string.isRequired,
    Apellido: PropTypes.string,
    correo: PropTypes.number
}

TercerComponente.defaultProps={
    nombre: "Pedro", 
    Apellido: "Paramo",
    correo: "00000000"
}