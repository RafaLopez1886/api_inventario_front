import React, { useState } from 'react';

const FormularioEditarRegistro = ({ registro, setRegistroAEditar }) => {
  const [serial, setSerial] = useState(registro.ieq_serial || "");
  const [modelo, setModelo] = useState(registro.ieq_modelo || "");
  const [descripcion, setDescripcion] = useState(registro.ieq_descripcion || "");

  const guardarRegistroEditado = async () => {
    const response = await fetch(`http://localhost:3000/inventariopatch/` + registro.ieq_idRegInventario, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ieq_serial: serial,
        ieq_modelo: modelo,
        ieq_descripcion: descripcion,
      }),
    });

    const data = await response.json();
    setRegistroAEditar(null);
  };

  return (
    <div className="form-wrapper">
      <h3>Editar registro</h3>
      <div className="mb-3">
        <label htmlFor="serial" className="form-label">Serial:</label>
        <input type="text" className="form-control" id="serial" value={serial} onChange={(e) => setSerial(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="modelo" className="form-label">Modelo:</label>
        <input type="text" className="form-control" id="modelo" value={modelo} onChange={(e) => setModelo(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="descripcion" className="form-label">Descripción:</label>
        <textarea className="form-control" id="descripcion" rows="3" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
      </div>
      <button className="btn btn-primary" onClick={guardarRegistroEditado}>Guardar</button>
    </div>
  );
};

export default FormularioEditarRegistro;
