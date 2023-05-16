import React from 'react';
//images
import Image from '../assets/mc.png';
//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//icons
import { FaInstagram,  FaLinkedinIn, FaTwitter } from 'react-icons/fa';



const Banner = () => {
  return ( 
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto mt-[5rem]'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>

         
          
          {/*text*/}

          <div className='flex-1 text-center font-secondary lg:text-left'>


            <motion.h1 
            variants={fadeIn('up', 0.3)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='text-[55px] font-bold leading-[0.8] sm:mt-10 lg:text-[110px] text-white'>
              Matias <span>Carrizo</span>
            </motion.h1>


            <motion.div 
            variants={fadeIn('up', 0.4)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='mb-6 text-[36px] lg:text-[60px] text-white font-secondary font-semibold leading-[1]'>
              
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


            <motion.p 
            variants={fadeIn('up', 0.5)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='mb-8 max-w-lg mx-auto lg:text-start lg:mx-0 text-white'>
            ¿Estás listo para alcanzar el siguiente nivel?
            </motion.p>

            <motion.div 
              variants={fadeIn('up', 0.7)} 
              initial='hidden' 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.8}}  
              className='flex mx-auto text-[20px] lg:text-start gap-x-6 max-w-max lg:mx-0 mb-4 icons-contact'>
              <a href='https://instagram.com/' target="_blank" rel="noreferrer">
                  <FaInstagram className='transition duration-300 ease-in-out hover:scale-150 text-blue-500'/>
              </a>
              <a href='https://www.linkedin.com/' target="_blank" rel="noreferrer">
                  <FaLinkedinIn className='transition duration-300 ease-in-out hover:scale-150 text-blue-500'/>
              </a>
              <a href='https://twitter.com/' target="_blank" rel="noreferrer">
                  <FaTwitter className='transition duration-300 ease-in-out hover:scale-150 text-blue-500'/>
              </a>
            </motion.div>


            <motion.div 
            variants={fadeIn('up', 0.6)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg rounded-full'><a href="#contact"> Contáctame </a></button>
              <a className='text-gradient btn-link'>
                Solicitá tu turno
              </a>
            </motion.div>

            
            {/*socials*/}
            
          </div>

          {/*image*/}

          <motion.div 
          variants={fadeIn('down', 0.5)} 
          initial='hidden' 
          whileInView={'show'} 
          className=' flex-1 max-w-[320px] lg:max-w-[482px] m-[3rem] '>
            
            <div className='figure bg-contain bg-no-repeat transition duration-300 ease-in-out hover:scale-110'>
              <img src={Image} alt='me' />
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
