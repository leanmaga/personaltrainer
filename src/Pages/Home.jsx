//impot styles

import '../index.css'

//parallax text

import ParallaxText from '../components/typed'

import About from './About';
import Contact from './Contact'
import Services from './Services'
import Banner from './Banner';

import Nav from './Nav';

export default function App() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>

      <Nav />

      <Banner/>

      <div className="container__typewrite">
        
        <ParallaxText baseVelocity={1}>ENTRENADOR DE FUERZA, ENTRENAMIENTO PRESENCIAL Y ONLINE, </ParallaxText>
        <ParallaxText baseVelocity={5}>POWERLIFTING, POWERLIFTING, POWERLIFTING</ParallaxText>
      
      </div>

      <About/>
      
      <Services/>

      <Contact/>

      <div className='xl:h-20'></div>
       
    </div>
    
  );
}
