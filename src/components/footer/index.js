import React from "react";
import "./footer.css"
import { Link } from "react-scroll";


const Footer = () => {
    return (
        <footer class="footer" id="footer">
  <div class="container">
  <div className="summerce-logo">
        <img src="img/summerce-logo-blanco.png"/>
    </div>
    <div class="footer-contact">
        <h1>Contacto:</h1>
      <span class="footer-content">Teléfono: 3102938747</span>
      <span class="footer-content">Dirección: Km 1 mirador del valle - via Samacá- Boyacá</span>
      <span class="footer-content">Correo: summercemirador@gmail.com</span>
    </div>
    
    <div class="footer-social">
      <a href="https://www.facebook.com/profile.php?id=100094269579372" target="_blank"><img src="./img/facebook-logo.png"/></a>
      <a href="https://www.instagram.com/summerce_miradorturistico/" target="_blank"><img src="./img/instagram-logo.png"/></a>

    </div>

    <div class="footer-links">
    <ul className="links_footer">
                    <li className="items">
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
                    <li className="items">
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
                    <li className="items"> <Link
                        activeClass="active"
                        to="reservas"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Reservas
                    </Link></li>
                    

                    <li className="items"><Link
                        activeClass="active"
                        to="ubicacion"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Ubicación
                    </Link></li>
                    <li className="items"><Link
                        activeClass="active"
                        to="horarios"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Horarios
                    </Link></li>
                </ul>
    </div>
    
  </div>
  
  <div class="footer-legal">
    <span class="footer-terms">Copyright 2023 &copy; Laura Cañon</span>
  </div>
</footer>


    );
}

export default Footer;