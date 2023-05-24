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
        className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
        >
            <button className=' bg-red-500 rounded-full btn'>
              <a href="#contact" className='p-5'> Contáctame </a>
            </button>
            <a className='text-white opacity-50 btn-link'>
            Solicitá tu turno
            </a>
        </motion.div>
    </>
  )
}

export default ButtonBanner