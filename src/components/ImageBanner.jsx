import React from 'react'
//motion effects
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//styles
import '../index.css';
//images
import Image from '../assets/mc.png';


const ImageBanner = () => {
  return (
    <>
        <motion.div 
        variants={fadeIn('down', 0.5)} 
        initial='hidden' 
        whileInView={'show'} 
        className=' flex content-center m-0 p-0 lg:p-12 lg:flex-1 items-center max-w-[320px] lg:max-w-[482px] '
        >

            <h1 className='absolute md:hidden lg:hidden opacity-10 text-[130px] font-bold leading-[0.8] sm:mt-10 md:text-[250px] text-white'>FITNESS</h1>
            
            
            <motion.div 
            variants={fadeIn('down', 0.8)} 
            initial='hidden' 
            whileInView={'show'} 
            className=' flex justify-center md:m-20 items-center max-w-[320px] lg:max-w-[482px] '>
                
                <div className='figure ml-8 bg-contain bg-no-repeat transition duration-300 ease-in-out hover:scale-110'>
                    <img src={Image} alt='me' />
                </div>
                
            </motion.div>

        </motion.div>
    </>
  )
}

export default ImageBanner