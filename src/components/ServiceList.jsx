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


  //motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';



const ServiceList = () => {
  return (
    <>
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
    </>
  )
}

export default ServiceList