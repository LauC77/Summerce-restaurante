import Header from './components/Header';
import "./reset.css"
import './App.css';
import Descripcion from './components/Descripcion';
import Carta from './components/carta';
import Ubicacion from './components/ubicacion';
import Domicilios from './components/Domicilios';
import Footer from './components/footer';
import Horarios from './components/Horarios';
import Fotos from './components/Fotografias';



function App() {
  const images =[
    "img/chorizo-img.jpeg", 
    "img/almuerzos-img.jpeg",
    "img/valle-img.jpg",  
    "img/cafe-img.jpeg",
    "img/canasta1-img.jpg",
    "img/carne-img.jpg",
    "img/gallina-img.jpeg",
    "img/canasta2-img.jpg",  
    "img/cafes-img.jpeg",                 
    "img/corona-img.jpg",                    
    "img/sandwich-img.jpeg",                
    "img/coctel-img.jpeg" , 
  ]
  return (
    <div className="App">
  
      <Header/>
      <Descripcion></Descripcion>
      <Horarios></Horarios>
      <Carta></Carta>
      <Ubicacion></Ubicacion>
      <Domicilios></Domicilios>
      <Fotos images={images}></Fotos>
      <Footer></Footer>
    
    </div>
  );
}

export default App;
