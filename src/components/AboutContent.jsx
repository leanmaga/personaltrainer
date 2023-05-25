//motion
import { motion } from 'framer-motion';
//variant
import {fadeIn} from '../variants'
//countup
import CountUp from 'react-countup'
//intersection observer hook
import {useInView} from 'react-intersection-observer';
import Title from './Title';
import Subrayado from './Subrayado';

const AboutContent = () => {

    const [ref, inView] = useInView({
        threshold: 0.5,
    })

  return (
    <>
        <motion.div
          variants={fadeIn('left', 0.5)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1"
          ref={ref}
          >

            <Title TituloPrincipal='Acerca' TituloSpan='de mi'/>

            <Subrayado/>

            <p className='mb-6 text-blue-50 text-start'>Me especializo en entrenamiento personzalizado</p>
            
            {/*stats*/}

            <div className='flex gap-x-6 lg:gap-x-10 '>
              
              <div className='mb-4'>
                <div className='text-[40px] font-extrabold mt-4 mb-2 text-red-500'>
                  { inView ?
                      <CountUp start={0} end={3} duration={3}/> : null
                  }+
                </div>
                <div className='font-primary text-sm tracking-[2px] text-red-200'>Años de <br/> experiencia</div>
              </div>

              <div className='mb-4'>
                <div className='text-[40px] font-extrabold mt-4  mb-2  text-red-500'>
                  { inView ?
                      <CountUp start={0} end={30} duration={3}/> : null
                  }+
                </div>
                <div className='font-primary text-sm tracking-[2px] text-indigo-200'>Clientes <br/> satisfechos</div>
              </div>

              <div className='mb-4'>
                <div className='text-[40px] font-extrabold mt-4 mb-2 text-red-500'>
                  { inView ?
                      <CountUp start={0} end={20} duration={3}/> : null
                  }+
                </div>
                <div className='font-primary text-sm tracking-[2px] text-indigo-200'>Premios <br/> Obtenidos</div>
              </div>
              
            </div>


        </motion.div>

    </>
  )
}

export default AboutContent