import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./carta.css";
import CustomButton from "../Boton";


const Carta = () => {
    return (
        <div className="carta" id="carta">
            <h2 className="title__menu">Menú</h2>
            <div className="carta__content">
                <div className="carta__list">
                    <img src="img/platos-img.png" alt="platos-imagen" />
                    <a href="./img/menu-summercé.jpg" target="_blank" rel="noopener noreferrer">
                        <CustomButton className="carta__button">¡Click aquí!</CustomButton>
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Carta;