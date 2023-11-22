import React from 'react';
import '../hoja-de-estilo/Testimonio.css';

function Testimonio(props) {
  return(
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' src={require(`../imagenes/${props.imagen}.jpg`)}
      alt='Foto de Simba'/>
      <div className='contenedor-texto-testimonio'>
        <p className ='nombre-testimonio-pais'> <strong>{props.nombre}</strong> en <strong>{props.pais}</strong> </p>
        <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong> </p>
        <p className ='testimonio-de-simba'>"<b>{props.inicio}</b> {props.testimonio} <b>{props.medio}</b> <b>{props.final}</b> {props.testifinal}"</p>
      </div>

    </div>
    

  );
}
export default Testimonio;