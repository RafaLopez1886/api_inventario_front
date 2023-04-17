import React from "react";
import "../index.css";

const Formulario = ({elementoInventario, setElementoFormulario}) => {
  const handleCambioInventario = e => {
    setElementoFormulario({
      ...elementoInventario,
      [e.target.name]: e.target.value
    });
  };

  let {
    ieq_serial,
    ieq_modelo,
    ieq_descripcion,
    ieq_urlImagen,
    ieq_color,
    ieq_fechaCompra,
    ieq_precio,
    fk_ieq_usuarioACargo,
    fk_ieq_marcaNombre,
    fk_ieq_estadoEquipo,
    fk_ieq_tipoEquipo,
   } = elementoInventario;

  const handleSubmit = () => {
    ieq_precio = parseInt(elementoInventario.ieq_precio);
    fk_ieq_usuarioACargo = parseInt(fk_ieq_usuarioACargo);
    fk_ieq_marcaNombre = parseInt(fk_ieq_marcaNombre);
    fk_ieq_estadoEquipo = parseInt(fk_ieq_estadoEquipo);
    fk_ieq_tipoEquipo = parseInt(fk_ieq_tipoEquipo);

    if (
        ieq_serial === "" ||
        ieq_modelo === "" ||
        ieq_descripcion === "" ||
        ieq_urlImagen === "" ||
        ieq_color === "" ||
        ieq_fechaCompra === "" ||
        ieq_precio <= 0 ||
        fk_ieq_usuarioACargo <= 0 ||
        fk_ieq_marcaNombre <= 0 ||
        fk_ieq_estadoEquipo <= 0 ||
        fk_ieq_tipoEquipo <= 0
    ) {
      alert("Faltan campos por diligenciar");
      return;
    }

    //Consulta

    const RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(elementoInventario),
    }

    fetch("http://localhost:3000/inventariopost", RequestInit)
      .then((res) => res.json())
      .then((res) => console.log(res));

      //Reinicio de State
    setElementoFormulario({
      ieq_serial: "",
      ieq_modelo: "",
      ieq_descripcion: "",
      ieq_urlImagen: "",
      ieq_color: "",
      ieq_fechaCompra: "",
      ieq_precio: 0,
      fk_ieq_usuarioACargo: 0,
      fk_ieq_marcaNombre: 0,
      fk_ieq_estadoEquipo: 0,
      fk_ieq_tipoEquipo: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="Serial" className="form-label">
          Serial
        </label>
        <input
          name="ieq_serial"
          onChange={handleCambioInventario}
          type="text"
          id="ieq_serial"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Modelo" className="form-label">
          Modelo
        </label>
        <input
          name="ieq_modelo"
          onChange={handleCambioInventario}
          type="text"
          id="ieq_modelo"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Descripción" className="form-label">
          Descripción
        </label>
        <input
          name="ieq_descripcion"
          onChange={handleCambioInventario}
          type="text"
          id="ieq_descripcion"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Imagen" className="form-label">
          Imagen
        </label>
        <input
          name="ieq_urlImagen"
          onChange={handleCambioInventario}
          type="text"
          id="ieq_urlImagen"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Color" className="form-label">
          Color
        </label>
        <input
          name="ieq_color"
          onChange={handleCambioInventario}
          type="text"
          id="ieq_color"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="compra" className="form-label">
          Fecha de compra
        </label>
        <input
          name="ieq_fechaCompra"
          onChange={handleCambioInventario}
          type="date"
          id="ieq_fechaCompra"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Precio" className="form-label">
          Precio
        </label>
        <input
          name="ieq_precio"
          onChange={handleCambioInventario}
          type="number"
          id="ieq_precio"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Usuario" className="form-label">
          Usuario a cargo
        </label>
        <input
          name="fk_ieq_usuarioACargo"
          onChange={handleCambioInventario}
          type="number"
          id="fk_ieq_usuarioACargo"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Marca" className="form-label">
          Marca
        </label>
        <input
          name="fk_ieq_marcaNombre"
          onChange={handleCambioInventario}
          type="number"
          id="fk_ieq_marcaNombre"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Estado" className="form-label">
          Estado
        </label>
        <input
          name="fk_ieq_estadoEquipo"
          onChange={handleCambioInventario}
          type="number"
          id="fk_ieq_estadoEquipo"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Tipo" className="form-label">
          Tipo de Equipo
        </label>
        <input
          name="fk_ieq_tipoEquipo"
          onChange={handleCambioInventario}
          type="number"
          id="fk_ieq_tipoEquipo"
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-primary boton-enviar">
        Enviar
      </button>
    </form>
  );
};

export default Formulario;
