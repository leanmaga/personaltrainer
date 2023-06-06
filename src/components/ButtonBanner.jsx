import React from 'react'
//motion effects
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//styles
import '../index.css';

const ButtonBanner = () => {
  return (
    <>
        <motion.div 
        variants={fadeIn('up', 0.6)} 
        initial='hidden' 
        whileInView={'show'} 
        viewport={{once: false, amount: 0.7}} 
        className='flex lg:text-start text-center max-w-max gap-x-6 items-center mb-12'
        >
            <button className='btn inline-block px-6 py-4 bg-red-500 rounded-full shadow-sm font-medium transition duration-1000  ease-in-out '>
              <a href="#contact" className='p-5'> Contactame </a>
            </button>
            <a className='text-white opacity-50 btn-link'>
            Solicitá tu turno
            </a>
        </motion.div>
    </>
  )
}

export default ButtonBanner