import React from 'react';
import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  // Definir un array de objetos con la información de los testimonios
  const testimonios = [
    {
      imagen: 'shaw',
      nombre: 'Shawn Wang',
      pais: ' Singapur',
      cargo: 'Ingeniero de Software',
      empresa: 'Amazon',
      testimonio: 'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software.',
      final: 'FreeCodeCamp cambió mi vida.'
    },
    
  ];

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

