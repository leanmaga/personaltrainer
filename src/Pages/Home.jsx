import Typed from "typed.js";
import { useEffect, useRef } from "react";

//impot styles

import '../App.css'
import './Home.css'

//import img

import mc from '../assets/mc.png'

export default function App() {
  // Create Ref element.
  const text = useRef(null);

  useEffect(() => {
    const typed = new Typed(text.current, {
      strings: ["ENTRENADOR DE FUERZA", "ENTRENAMIENTO PRESENCIAL Y ONLINE", "POWERLIFTING"],
      
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 200,
      repeatDelay: 1000,
      loop:true,
    },[]);

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container__title">
        <h1>Personal Trainer</h1>
        <img src={mc} alt="mc" />
        <h1>Matias Carrizo</h1>
      </div>
      <div className="container__buttons">
        <h3><span ref={text}></span></h3>
        <button className="one">Leer más</button>
        <button className="two">Contáctame</button>
      </div>
    </>
    
  );
}
