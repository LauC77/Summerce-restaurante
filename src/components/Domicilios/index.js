import React from "react";
import "./domicilios.css";
import CustomButton from "../Boton";
const Domicilios = () => {
    return (
        <div className="domicilios" id="domicilios">
            <h2 className="title">¡Pide tu domicilio!</h2>
            <p>De nuestra cocina a la mesa de tu casa, sólo pidelo y nosotros te lo haremos llegar.</p>
            <div className="domicilios__content">
                <img src="img/domicilio-logo.png" alt="platos-imagen" />
                <a href={"https://wa.link/emqghs"} target="_blank" rel="noopener noreferrer">
                    <CustomButton className="boton__dom">
                        Domicilio aquí
                    </CustomButton>
                </a>

            </div>

        </div>
    );
}

export default Domicilios;