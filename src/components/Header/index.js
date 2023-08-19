import React from "react";
import { useContext } from "react";
import { Link } from 'react-scroll';
import "./header.css";
import CustomButton from "../Boton";


const Header = () => {
    return (
        <header className="header">

            <nav className="menu__nav">
                <ul className="menu__nav-lista">
                    <li className="nav__items">
                        <Link
                            activeClass="active"
                            to="carta"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Menú
                        </Link>
                    </li>
                    <li className="nav__items">
                        <Link
                            activeClass="active"
                            to="domicilios"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Domicilios
                        </Link>
                    </li>
                    <li className="nav__items"> <Link
                        activeClass="active"
                        to="reservas"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Reservas
                    </Link></li>
                    <li className="nav__items-img">
                        <Link
                            to="descripcion"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <img src="img/logo-transparent-summerce.png" alt="logo-summerce" className="logo" />
                        </Link>
                    </li>

                    <li className="nav__items"><Link
                        activeClass="active"
                        to="ubicacion"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Ubicación
                    </Link></li>
                    <li className="nav__items"><Link
                        activeClass="active"
                        to="horarios"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Horarios
                    </Link></li>
                    <li className="nav__items"><Link
                        activeClass="active"
                        to="footer"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Contacto
                    </Link></li>
                </ul>
            </nav>

            <div className="content__header" id="reservas">
                <div className="saludo">
                    <h1 className="title__one">Celebra la vida con nosotros</h1>
                    <h2 className="title__two">¡Te esperamos!</h2>
                </div>
                    <a href="https://wa.link/uafe5m" target="_blank" rel="noopener noreferrer">
                    <CustomButton className="boton">¡Reserva dando click!</CustomButton>
                    </a>                
                    </div>


        </header>

    );
}

export default Header;