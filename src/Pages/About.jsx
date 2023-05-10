import React from 'react';
//countup
import CountUp from 'react-countup'
//intersection observer hook
import {useInView} from 'react-intersection-observer';
//motion
import { motion } from 'framer-motion';
//variant
import {fadeIn} from '../variants'
//imagen
import pesas from '../assets/mc-pesas.jpg'


const About = () => {

  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  return <section id='about' className='section' ref={ref}>

    <div className='container'>

      <div className='flex flex-col gap-y-10 lg:flex-row items-center lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>

        {/*img*/}

        <motion.div 
          variants={fadeIn('right', 0.3)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}  
          className='flex-1 mix-blend-lighten bg-top  '>
            <img src={pesas} alt="levantando pesas" className='bg-about bg-contain bg-no-repeat h-[240px] md:h-[380px] lg:h-[380px]'/>
        </motion.div>

        {/*text*/}

        <motion.div
          variants={fadeIn('left', 0.5)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1">

            <h2 className='h2 text-white  text-lg font-semibold '>Sobre mí.</h2>
            <h3 className='h3 mb-4 text-white text-lg font-extrabold t'>Hola! Me llamo Martin Carrillo</h3>
            <p className='mb-6 text-blue-50 text-start'>Me especializo en entrenamiento personzalizado</p>
            
            {/*stats*/}

            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div className='mb-4'>
                <div className='text-[40px] font-tertiary text-gradient mt-4 mb-2 text-gradient-blue'>
                  { inView ?
                      <CountUp start={0} end={3} duration={3}/> : null
                  }+
                </div>
                <div className='font-primary text-sm tracking-[2px] text-indigo-200'>Años de <br/> experiencia</div>
              </div>
              <div className='mb-4'>
                <div className='text-[40px] font-tertiary text-gradient mt-4  mb-2  text-gradient-blue'>
                  { inView ?
                      <CountUp start={0} end={30} duration={3}/> : null
                  }+
                </div>
                <div className='font-primary text-sm tracking-[2px] text-indigo-200'>Clientes <br/> satisfechos</div>
              </div>
              <div className='mb-4'>
                <div className='text-[40px] font-tertiary text-gradient mt-4 mb-2 text-gradient-blue'>
                  { inView ?
                      <CountUp start={0} end={20} duration={3}/> : null
                  }+
                </div>
                <div className='font-primary text-sm tracking-[2px] text-indigo-200'>Premios <br/> Obtenidos</div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>
                <a href="#contact">Contactame</a>
              </button>
            </div>

        </motion.div>

      </div>

    </div>

  </section>;
};

export default About;
