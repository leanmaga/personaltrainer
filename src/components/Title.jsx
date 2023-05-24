import React from 'react'
//motion effects
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//styles
import '../index.css';

const Title = (props) => {
  return (
    <>
        <motion.h1 
            variants={fadeIn('up', 0.3)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='text-[55px] font-bold leading-[0.8] sm:mt-10 lg:text-[110px] text-white'
        >
            {props.TituloPrincipal} <span className='text-red-500'>{props.TituloSpan}</span>
        </motion.h1>
    </>
  )
}

export default Title