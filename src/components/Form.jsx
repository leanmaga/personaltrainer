//forms
import { useForm, ValidationError } from '@formspree/react';
import Subrayado from '../components/Subrayado';
import Title from '../components/Title';
import RedIcons from '../components/RedIcons';

//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

const Form = () => {

    const [state, handleSubmit] = useForm("myyaoora");
    if (state.succeeded) {
        return(
            <section className='py-16 lg:section lg:p-10 lg:m-10 md:p-10 md:m-10' id='contact'>
                <div className="container mx-auto">
                    <div className='flex flex-col lg:flex-row'>

                        {/*text*/}

                        <motion.div

                            variants={fadeIn('right', 0.3)} 
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }} 
                            className='flex-1 flex justify-start items-center'>
                                <div>
                                    <Title TituloPrincipal='Ponte' TituloSpan='en contacto!'/>
                                    <Subrayado/>
                                    <RedIcons/>
                                </div>
                        
                        </motion.div>

                         <motion.div

                            onSubmit={handleSubmit}
                            variants={fadeIn('left', 0.5)} 
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.3 }}  
                            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-center justify-center '>
                                <p className='flex justify-center items-center'>¡Gracias por contactarme!</p>
                                
                        </motion.div>
                        
                    </div>
                </div>
            </section>);
    }

  return (
    <>
        {/*form*/}
        <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn('left', 0.5)} 
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}  
            className='flex-1 border rounded-2x1 flex flex-col gap-y-6 pb-16 md:pb-12 p-6 items-start  m-4'
            >
                <input
                required
                id="name"
                name="name"
                controlId="formName"
                type="text" 
                className="focus:outline-none bg-transparent border-b py-3 outline-none w-full placeholder:text-white placeholder:opacity-50  transition-all text-white" 
                placeholder='Su nombre'/>

                    <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                    />

                    <input
                    required
                    id="email" 
                    name="email"
                    controlId="formEmail" 
                    type="text" 
                    className="focus:outline-none bg-transparent border-b py-3 outline-none w-full placeholder:text-white placeholder:opacity-50  transition-all text-white" 
                    placeholder='Su correo electrónico'/>

                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />

                    <textarea
                        required
                        id="message" 
                        name="message"
                        controlId="formMessage"
                        className=" focus:outline-none bg-transparent border-b py-3 outline-none w-full placeholder:text-white placeholder:opacity-50 transition-all mb-8 text-white" 
                        placeholder='Su mensaje'>
                    </textarea>

                    

                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />

                    <button 
                    type="submit"
                    disabled={state.submitting}
                    className='btn inline-block px-6 py-4 bg-red-500 rounded-full shadow-sm font-medium transition duration-1000  ease-in-out'
                    >
                        Enviar Mensaje
                    </button>


        </motion.form>
    </>
  )
}

export default Form