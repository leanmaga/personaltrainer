
//motion effects
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//styles
import '../index.css';

const NextLevel = () => {
  return (
    <>
        <motion.p 
            variants={fadeIn('up', 0.5)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='mb-8 max-w-lg mx-auto lg:text-start lg:mx-0 text-white'
        >
            ¿Estás listo para alcanzar el siguiente nivel?
        </motion.p>
    
    </>
  )
}

export default NextLevel