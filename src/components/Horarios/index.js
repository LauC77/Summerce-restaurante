import React from 'react';
import "./horarios.css"

const Horarios = () => {
  // matriz de objetos con información de los horarios
  const horarios = [
    { dia: 'Lunes-Jueves-Viernes', horario: '07:00 AM - 09:00 PM' },
    { dia: 'Sábado-Domingo-Festivos', horario: '07:00 AM - 10:00 PM' },
    { dia: 'Martes-Miércoles', horario: 'Sólo por reserva' },
  ];

  return (
    <div className="horarios-section" id='horarios'>
      <h1>Horarios de Atención</h1>
      <ul className="horarios-list">
        {horarios.map((horario, index) => (
          <li key={index}>
            <span className="dia">{horario.dia}: </span>
            <span className="horario">{horario.horario}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Horarios;
