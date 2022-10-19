//ESTO ES UN COMPONENTE Q SIMPLEMENTE VA A SALUDAR
import React from 'react'

export function Saludar(props) {
    const {name, apellido,children}=props;
  return (
    <div>
        <h1>Hola {name} {apellido} compañero en Formosa esta primeroooo!!!</h1>
        {children}
    </div>
  )
}

export default Saludar;


