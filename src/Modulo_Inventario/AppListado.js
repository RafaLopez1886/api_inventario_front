import React, { Fragment, useState, useEffect } from "react";
import TablaInventario from "../Components/listaInventario";
import NavBar from "../Components/Navbar";
import AppFormulario from "./AppFormulario";


function AppListado() {
  
  const [inventario, setListadoFormulario] = useState([]);
  const [showModal, setShowModal] = useState(false);

  //Agregado
  const initialElementoInventario = {
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
    fk_ieq_tipoEquipo: 0
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const getInventarioLista = () => {
      fetch("https://apiinventarioiud-production.up.railway.app/inventarioget")
        .then((res) => res.json())
        .then((res) => setListadoFormulario(res))
        .then ((res) => console.log(res));
    };
    getInventarioLista();
  }, []);

  return (
    <Fragment>
      <NavBar brand="Inventario IUD" />
      <div className="container">
        <div className="row">
          <div className="col-md-">
            <h2 style={{ textAlign: "center" }}>Inventario IUD</h2>
            <button className="btn btn-primary" onClick={toggleModal}>
              Nuevo Registro
            </button>
            <TablaInventario initialElementoInventario={initialElementoInventario} inventario={inventario} />
          </div>
        </div>
      </div>
      {showModal && <AppFormulario onClose={toggleModal} initialElementoInventario={initialElementoInventario} />}

    </Fragment>
  );
}

export default AppListado;
