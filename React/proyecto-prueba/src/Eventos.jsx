import React from 'react'

export const Eventos = () => {
    function Presion() {
        alert("Hola 7u7");
    }

  return (
    <div>
        <h3>Click</h3>
        <button onClick={() => {
            console.log("Hola, Soy un evento click");
            Presion();
        }}>Push Me daddy!!</button>
        <h3>Doble Click</h3>
    </div>
  )
}
