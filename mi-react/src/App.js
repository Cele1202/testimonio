import React from 'react';
import './App.css';
import Testimonio from './componentes/Testimonio.js';
import Usuario from './componentes/Usuario.js';
import testimonios from './datos/lista_de_testimonios.js';
import users from './datos/lista_de_usuarios.js';

function funcionParametro(testimonio, index){
  return (<Testimonio
    key={index}
    {...testimonio}
  />)
}

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>ususarios traidos desde una api</h1>
        {
          users.map((usuario, index) => {
            return (<Usuario
              key={index}
              {...usuario}
            />)
          })
        }
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {
          // Recorrer el array de testimonios y renderizar el componente Testimonio para cada uno
          testimonios.map(funcionParametro)
        }
      </div>
    </div>
  );
}

export default App;
