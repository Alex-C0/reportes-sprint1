import React from 'react';
import Reporte from './Reporte';

function App() {
  const reportes = [
    { titulo: "Luz apagada en calle X", descripcion: "El farol de la calle X no funciona." },
    { titulo: "Bache en avenida Y", descripcion: "Un bache grande que requiere atención." },
    { titulo: "Señal rota en cruce Z", descripcion: "La señal de tránsito no funciona." }
  ];

  return (
    <div>
      <h1>Reportes del Sprint 1</h1>
      {reportes.map((r, index) => (
        <Reporte key={index} titulo={r.titulo} descripcion={r.descripcion} />
      ))}
    </div>
  );
}

export default App;
