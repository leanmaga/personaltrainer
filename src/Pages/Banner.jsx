import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import NextLevel from '../components/NextLevel';
import RedIcons from '../components/RedIcons';
import ButtonBanner from '../components/ButtonBanner';
import ImageBanner from '../components/ImageBanner';


const Banner = () => {
  return ( 
    <section className=' min-h-[100vh] lg:min-h-[100vh] flex items-center section mt-20 lg:m-4 md:p-10 md:m-10' id='home'>

      <div className='container mx-auto'>

        <div className='flex flex-col gap-y-8 lg:flex-row md:mt-0 lg:mt-0 lg:items-center lg:gap-x-12'>
          
          <div className='flex-1 text-center font-secondary lg:text-left'>

            <Title TituloPrincipal='Matias' TituloSpan='Carrizo'/>
            
            <Subtitle/>

            <NextLevel/>

            <RedIcons/>

            <ButtonBanner/>
            
          </div>

          <div className='flex-1 justify-around'>

            <ImageBanner/>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Banner;
