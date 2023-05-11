//impot styles

import '../index.css'

//import img

//import mc from '../assets/mc.png'

//parallax text

import ParallaxText from '../components/typed'

import About from './About';
import Contact from './Contact'
import Services from './Services'
import Banner from './Banner';

export default function App() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>

      <Banner/>

      <div className="container__typewrite">
        
        <ParallaxText baseVelocity={1}>ENTRENADOR DE FUERZA, ENTRENAMIENTO PRESENCIAL Y ONLINE, </ParallaxText>
        <ParallaxText baseVelocity={5}>POWERLIFTING, POWERLIFTING, POWERLIFTING</ParallaxText>
      
      </div>

      <About/>
      <Contact/>
      <Services/>

      
       
      <div className='h-[1000px]'></div>
    </div>
    
  );
}
