import React from 'react';
import '../stylesheets/Personaje.css';

const Personaje = (promp) => {
    return (
        <div className='contenedor'>
            <article style={{ "--i": promp.color }}>
                <div className='color' style={{"--rbgacolor": promp.rgba}}></div>
                <div className='color' style={{"--rbgacolor": promp.rgba}}></div>
                
                <div className='contenedor-img'>
                    <img src = {require(`../img/Personaje_${promp.imagen}`)}
                    />
                </div>

                <div className='contenedor-caracteristicas'>
                    <h1 className='personaje-nombre'>{promp.nombre}</h1>
                    <p className='personaje-descripcion'>{promp.descripcion}</p>
                </div>
            </article>
        </div>
    );
}

export default Personaje;