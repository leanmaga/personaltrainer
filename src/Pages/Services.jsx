import React from 'react';
//icon
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//video
import ReactPlayer from 'react-player';
import  video1  from '../assets/197.mp4'
//services data
const services = [
  {
    name: 'Personal Trainer',
    description:  'Diseñado específicamente para ti, adaptado a tus necesidades y objetivos. Obtén resultados efectivos con un enfoque personalizado.'
    
  },
  {
    name: 'Entrenamiento online o presencial',
    description:  'Disfruta de la flexibilidad de elegir entre sesiones de entrenamiento en persona o seguir un programa de entrenamiento estructurado en línea.'
    
  },
  {
    name: 'Desarrollo de Masa Muscular',
    description: 'Aumenta tu fuerza y tamaño muscular mediante un plan de entrenamiento especializado y una nutrición adecuada. Alcanza tu máximo potencial de hipertrófia.'
  },
  {
    name: 'Levantamiento de Pesas',
    description: 'Domina las técnicas de levantamiento de pesas y maximiza tu rendimiento. Mejora tu fuerza, resistencia y forma física con un entrenamiento especializado.'
  },

]
const Services = () => {
  return (
    <section className='section px-10 mx-10' id='services'>
      <div className="container">
        <div className='flex flex-col lg:flex-row'>
          {/*text and img*/}

          <motion.div
          variants={fadeIn('right', 0.3)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}  
          className='flex-1 items-center justify-center lg:bg-services lg:bg-bootom bg-no-repeat mix-blend-lighten m-12 lg:mb-0 '>
            <h2 className="text-[55px] font-bold leading-[0.8] lg:text-[55px] text-white">What <span className='text-red-500'>I Do.</span></h2>
            <hr class="my-6 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50 w-[25%]" />
            <h3 className='h3 text-white max-w-[455px] mb-16'>  "Soy un apasionado entrenador con 3 años de experiencia dedicados a ayudar a mis clientes a alcanzar sus metas de fitness y bienestar. Mi enfoque se basa en brindar un entrenamiento personalizado y un asesoramiento integral para lograr resultados duraderos. Con mi experiencia y conocimientos, te guiaré en cada paso del camino, brindándote las herramientas y la motivación necesarias para transformar tu cuerpo y tu vida. Juntos, construiremos una base sólida, superaremos tus límites y te ayudaré a descubrir tu verdadero potencial. ¡Comienza tu viaje hacia una versión más fuerte y saludable de ti mismo con mi programa de entrenamiento personalizado!" </h3>
            <button className="bg-red-500 rounded-full btn btn-lg"><a href="http://github.com" target="_blank" rel="noreferrer"> See my work</a></button>
            <div className='flex items-center w-[100%] pt-6 mt-6'>
              <ReactPlayer url={video1} controls/>
            </div>
          </motion.div>
          

          {/*services*/}

          <motion.div 
          variants={fadeIn('left', 0.5)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}  
          className='flex-1 m-4 lg:mb-0'>

            {/*service list*/}
            <div>
              {services.map((service, index) => {

                //destructure service
                const { name, description } = service;

                return(
                  <div className='border-b border-white/20 flex' key={index}>
                    
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] text-white tracking-wider font-primary font-semibold m-4 md:text-[16px]'>{ name }</h4>
                      <p className='font-secondary text-white leading-tight m-4'>{ description }</p>
                    </div>

                  </div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Services