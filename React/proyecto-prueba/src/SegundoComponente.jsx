import React from 'react'

export const SegundoComponente = () => {
    var libros=["Los juegos del Hambre","Juego de Tronos","100 años de soledad","El nombre del viento"];
    //var libros=[];
  return (
    
    <div>
        <h1>Libros</h1>
        { libros.length >=1 ?
            (<ul>
                {
                    libros.map((libro,indice)=>{
                        return(<li key={indice}>{libro}</li>);
                    })
                }
            </ul>)
            :(<p>No Hay Libros</p>)
        }    
    </div>
  )
}
