import React, { useState } from 'react';
import FormularioEditarInventario from '../Modulo_Inventario/FormularioEditarRegistro';
import "../index.css";

const TablaInventario = ({ inventario }) => {
  const [registroAEditar, setRegistroAEditar] = useState(null);
  const [formularioVisible, setFormularioVisible] = useState(false);

  const editarRegistro = async (registro) => {
    try {
      const response = await fetch(`http://localhost:3000/inventariopatch/${registro.ieq_idRegInventario}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ieq_serial: registro.ieq_serial,
          ieq_modelo: registro.ieq_modelo,
          ieq_descripcion: registro.ieq_descripcion,
        }),
      });
  
      const data = await response.json();
      console.log(data);
      setRegistroAEditar(registro);
      setFormularioVisible(true);
    } catch (error) {
      console.error('Error al editar registro:', error);
    }
  };


  return (
    <div className="table-wrapper">
      <table className="table table-bordered">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Serial</th>
            <th>Modelo</th>
            <th>Descripción</th>
            <th>Imagen</th>
            <th>Color</th>
            <th>Fecha de compra</th>
            <th>Precio</th>
            <th>Usuario a cargo</th>
            <th>Marca</th>
            <th>Estado</th>
            <th>Tipo de equipo</th>
          </tr>
        </thead>

        <tbody>
          {inventario && inventario.length > 0 ? (
            inventario.map((elemento) => (
              <tr key={elemento.ieq_idRegInventario}>
                <td>{elemento.ieq_idRegInventario}</td>
                <td>{elemento.ieq_serial}</td>
                <td>{elemento.ieq_modelo}</td>
                <td>{elemento.ieq_descripcion}</td>
                <td>
                  <img src={elemento.ieq_urlImagen} alt="pc" width="100" height="100"></img>
                </td>
                <td>{elemento.ieq_color}</td>
                <td>{elemento.ieq_fechaCompra}</td>
                <td>{elemento.ieq_precio}</td>
                <td>{elemento.ueq_nombre}</td>
                <td>{elemento.meq_nombre}</td>
                <td>{elemento.eeq_nombre}</td>
                <td>{elemento.teq_nombre}</td>
                <td>
                  <div className="mb-3">
                  <button className="btn btn-dark" onClick={() => editarRegistro(elemento)}>Editar</button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="12">No se encontraron resultados</td>
            </tr>
          )}
        </tbody>
      </table>

      {formularioVisible && registroAEditar && <FormularioEditarInventario registro={registroAEditar} setRegistroAEditar={setRegistroAEditar} setFormularioVisible={setFormularioVisible} />}
    </div>
  );
};

export default TablaInventario;
