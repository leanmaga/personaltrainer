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
        className=' flex content-center m-0 p-0 lg:p-12 lg:flex-1  lg:mx-0 items-center max-w-[320px] lg:max-w-[482px] '
        >

            <h1 className='absolute lg:hidden opacity-10 translate-x-[10%] text-[130px] font-bold leading-[0.8] sm:mt-10 md:text-[250px] text-white'>FITNESS</h1>
            
            <h2 className='absolute  translate-y-[-70px] md:translate-y-[-120px]  translate-x-[10px] md:translate-x-[-80px] opacity-70 z-10 m-0 lg:hidden text-[40px] md:text-[80px] font-bold leading-[0.8] text-white'>You Can</h2>
        
            <h2 className='absolute  translate-y-[100px] md:translate-y-[140px] translate-x-[160px] md:translate-x-[240px] opacity-70 z-10 m-0 lg:hidden text-[40px] md:text-[80px]  font-bold leading-[0.8] text-white'>Join Me!</h2>
        
            <motion.div 
            variants={fadeIn('down', 0.8)} 
            initial='hidden' 
            whileInView={'show'} 
            className=' flex justify-center md:m-20 lg:mx-auto lg:flex-1  items-center max-w-[320px]  lg:max-w-[482px] m-[3rem] '>
                
                <div className='figure ml-8 lg:ml-0 bg-contain bg-no-repeat transition duration-300 ease-in-out hover:scale-110'>
                    <img src={Image} alt='me' />
                </div>
                
            </motion.div>

        </motion.div>
    </>
  )
}

export default ImageBanner