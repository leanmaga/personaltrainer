//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';


import Title from '../components/Title';
import Subrayado from '../components/Subrayado';
import ButtonBanner from '../components/ButtonBanner';
import Parrafo from '../components/Parrafo';



const ContentAbout = () => {
  return (
    <>
        <motion.div
          variants={fadeIn('right', 0.3)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}  
          className='flex-1 items-center justify-center lg:bg-services lg:bg-bootom bg-no-repeat mix-blend-lighten m-4 lg:mb-0'
          >
            
            <Title TituloPrincipal='Mi pasión' TituloSpan='convertida en Acción'/>
            
            <Subrayado/>

            <Parrafo ParrafoText='Soy un apasionado entrenador con 3 años de 
              experiencia dedicados a ayudar a mis clientes a alcanzar 
              sus metas de fitness y bienestar. Mi enfoque se basa en brindar 
              un entrenamiento personalizado y un asesoramiento integral para lograr 
              resultados duraderos. Con mi experiencia y conocimientos, te guiaré en 
              cada paso del camino, brindándote las herramientas y la motivación 
              necesarias para transformar tu cuerpo y tu vida. Juntos, construiremos 
              una base sólida, superaremos tus límites y te ayudaré a descubrir tu 
              verdadero potencial. ¡Comienza tu viaje hacia una versión más fuerte y 
              saludable de ti mismo con mi programa de entrenamiento personalizado!
            '/>

           

          </motion.div>
          
    </>
  )
}

export default ContentAbout