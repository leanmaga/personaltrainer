
//type animation
import { TypeAnimation } from 'react-type-animation';
//motion effects
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//styles
import '../index.css';

const Subtitle = () => {
  return (
    <>
        <motion.div 
            variants={fadeIn('up', 0.4)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='mb-6 text-[30px] lg:text-[50px] lg:text-start text-center text-white font-secondary font-semibold leading-[1]'>
              
              <TypeAnimation sequence={[
                'Personal Trainer',
                2000,
                'Hipertrofía  muscular',
                2000,
                'Powerlifting',
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
            </motion.div>
    </>
  )
}

export default Subtitle