//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

import Subrayado from '../components/Subrayado';
import Title from '../components/Title';
import RedIcons from '../components/RedIcons';
import Form from '../components/Form';

const Contact = () => {
    
  return (
    <div className='py-10 lg:section lg:p-10 lg:m-10 md:p-10 md:m-10 contact' id='contact'>
        <div className="container mx-auto">
            <div className='flex flex-col lg:flex-row'>
                {/*text*/}
                <motion.div
                variants={fadeIn('right', 0.3)} 
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }} 
                className='flex-1 flex justify-start items-center lg:m-4 lg:p-4'>
                    <div>
                        <Title TituloPrincipal='Ponte' TituloSpan='en contacto!'/>
                        <Subrayado/>
                        <RedIcons/>
                    </div>
                </motion.div>
                
                <Form/>
            </div>
        </div>
    </div>
  )
}

export default Contact