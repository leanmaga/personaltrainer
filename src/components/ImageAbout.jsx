//motion
import { motion } from 'framer-motion';
//variant
import {fadeIn} from '../variants'
//imagen
import pesas from '../assets/mc-pesas.jpg'


const ImageAbout = () => {
  return (
    <>
        <motion.div 
        variants={fadeIn('right', 0.3)} 
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}  
        className='flex-1 mix-blend-lighten sm:mt-10'
        >
            <img src={pesas} alt="levantando pesas" className='bg-about bg-contain bg-no-repeat h-[240px] md:h-[380px] lg:h-[380px] transition duration-300 ease-in-out hover:scale-110 '/>
        </motion.div>
    </>
  )
}

export default ImageAbout