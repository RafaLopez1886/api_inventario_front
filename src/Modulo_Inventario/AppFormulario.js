import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Formulario from "../Components/formulario";

const AppFormulario = (props) => {

  const onClose = props.onClose;
  const initialElementoInventario = props.initialElementoInventario;

  const [elementoInventario, setElementoFormulario] = useState(initialElementoInventario)



  return ReactDOM.createPortal(
    <div
      className="modal"
      tabIndex="-1"
      role="dialog"
      style={{ display: "block" }}
    >
      <div
        className="modal-dialog"
        role="document"
        style={{ maxWidth: "500px", minHeight: "400px" }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              onClick={onClose}
              style={{
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
              }}
            >
              <span
                aria-hidden="true"
                style={{ fontSize: "24px", color: "#000", fontWeight: "bold" }}
              >
                &times;
              </span>
            </button>
          </div>
          <div className="modal-body">
            <Fragment>
              <div className="container">
                <div className="col-md-">
                  <h2 style={{ textAlign: "center" }}>Crear nuevo registro</h2>
                </div>
                <Formulario elementoInventario={elementoInventario} setElementoFormulario={setElementoFormulario}/>


              </div>
            </Fragment>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default AppFormulario;
