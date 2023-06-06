import React from 'react'
//motion effects
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//styles
import '../index.css';
//icons
import { FaInstagram,  FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const RedIcons = () => {
  return (
    <>
        <motion.div 
            variants={fadeIn('up', 0.7)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.8}}  
            className='flex justify-center lg:justify-start text-[20px] gap-x-6 my-6'
        >
            <a href='https://www.instagram.com/matias_b_carrizo' target="_blank" rel="noreferrer">
                <FaInstagram className='transition duration-300 ease-in-out hover:scale-150 text-red-500'/>
            </a>
            <a href='https://www.linkedin.com/' target="_blank" rel="noreferrer">
                <FaLinkedinIn className='transition duration-300 ease-in-out hover:scale-150 text-red-500'/>
            </a>
            <a href='https://twitter.com/' target="_blank" rel="noreferrer">
                <FaTwitter className='transition duration-300 ease-in-out hover:scale-150 text-red-500'/>
            </a>
        </motion.div>

    </>
  )
}

export default RedIcons