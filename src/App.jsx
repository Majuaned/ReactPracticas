import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Saludar from './components/Saludar'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0) //set y el nombre de la variable, en este caso count...
  //useState es un hook es una funcion de react, en use state pide el valor inicial q va a tener la constante...o variable
  // en este caso el valor inicial será cero... el contador nuestro se inicia en cero.

  return ( //siempre los return debe estar dentro de un div, y  todo lo q esta adentro es lo q se mostrará...
  // count is {count} dentro de las llaves está lo q se v a a mostrar
    <div>
      <Saludar name="Agustin" apellido="Salazar">
        <h1>alumno</h1>
        <p>.arce..</p>
      </Saludar>
    
      <Button color="red" text="boton para apretar">
      </Button> <br/>

      <Button color="blue" text="boton para desapretar">
      </Button>


    </div>
  )
}
//en react se usam dos carpetas... la de componentes(navbar, form, table) y la de layouts(diseños), estas dos carpetas van dentro del src. layouts vienen a ser como las vistas...puedo generear varios componentes y llamarlos en el layout
export default App


