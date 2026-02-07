import React from 'react';

function Reporte({ titulo, descripcion }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

export default Reporte;
