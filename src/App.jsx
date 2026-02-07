import React, { useState } from 'react';
import Reporte from './Reporte';

function App() {
  // Estado para los reportes
  const [reportes, setReportes] = useState([
    { titulo: "Luz apagada en calle X", descripcion: "El farol de la calle X no funciona." },
    { titulo: "Bache en avenida Y", descripcion: "Un bache grande que requiere atención." }
  ]);

  // Estado para los inputs del formulario
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  // Función para agregar un nuevo reporte
  const agregarReporte = (e) => {
    e.preventDefault(); // evita que se recargue la página
    setReportes([...reportes, { titulo, descripcion }]);
    setTitulo(''); // limpiar input
    setDescripcion('');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Reportes del Sprint 1</h1>

      {/* Formulario para agregar nuevos reportes */}
      <form onSubmit={agregarReporte} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button type="submit" style={{ padding: '5px 10px' }}>Agregar Reporte</button>
      </form>

      {/* Lista de reportes */}
      {reportes.map((r, index) => (
        <Reporte key={index} titulo={r.titulo} descripcion={r.descripcion} />
      ))}
    </div>
  );
}

export default App;
