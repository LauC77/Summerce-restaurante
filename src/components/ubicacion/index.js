import React from "react";
import "./ubicacion.css"


const Ubicacion = () => {
    return (
        <div class="mapa" id="ubicacion">
            <h3 class="titulo-principal">
                Nuestra Ubicación:</h3>
            <p>Nuestro establecimiento esta ubicado en el Km 1 mirador del valle - via Samacá- Boyacá.
            </p>
            <div class="mapa-content">
            <iframe className="map" title="Google Maps"
        width="border-box"
        height="450"
        border="0"
        style={{ border: 0 }} 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5248.647480268068!2d-73.48139241095967!3d5.48694911559717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e402ab0fd4b5d3f%3A0x8b633fe4230f025b!2sMirador%20del%20Valle%20Samac%C3%A1!5e0!3m2!1ses-419!2sco!4v1692163946915!5m2!1ses-419!2sco" 
        allowFullScreen ></iframe>
            </div>
        </div>

    );
}

export default Ubicacion;