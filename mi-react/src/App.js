import React from 'react';
import './App.css';
import Testimonio from './componentes/Testimonio.js';
import testimonios from './datos/lista_de_objetos.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {
          // Recorrer el array de testimonios y renderizar el componente Testimonio para cada uno
          testimonios.map((testimonio, index) => (
            <Testimonio
              key={index}
              {...testimonio}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
