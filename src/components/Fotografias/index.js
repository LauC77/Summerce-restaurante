import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./fotos.css";

const Fotos = ({ images }) => {

  return (
    <div className="fotografias">
      <h1 className="title__carrousel">¡Observa y antójate!</h1>
      <Carousel>
        {images.map((image, index) => (
          <div key={index}>
            <img className="carousel-image" src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Fotos;