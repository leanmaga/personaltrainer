//impot styles

import '../index.css'

//parallax text

import ParallaxText from '../components/typed'

import About from './About';
import Contact from './Contact'
import Services from './Services'
import Banner from './Banner';

import Nav from './Nav';
import VideoPage from './VideoPage';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../store/slices/counter/counterSlice';

export default function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

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

      <VideoPage/>

      <Contact/>
{/* <div className='text-white w-100'>
        <div>
          <div>
              <button
                className='btn inline-block px-6 py-4 bg-red-500 rounded-full shadow-sm font-medium transition duration-1000  ease-in-out'
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
              >
                Increment
              </button>

              <span className=' p-4 m-4 '>{count}</span>

              <button
                className='btn inline-block px-6 py-4 bg-red-500 rounded-full shadow-sm font-medium transition duration-1000  ease-in-out'
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
              >
                Decrement
              </button>
          </div>
      </div>
      </div> */}
     
       
    </div>
    
  );
}
