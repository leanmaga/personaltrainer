import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import NextLevel from '../components/NextLevel';
import RedIcons from '../components/RedIcons';
import ButtonBanner from '../components/ButtonBanner';
import ImageBanner from '../components/ImageBanner';


const Banner = () => {
  return ( 
    <div className='flex justify-center items-center md:pl-8 md:pr-8 md:mr-8 md:ml-8 sm:mt-20 banner' id='home'>

      <div className='container'>

        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          
          <div className='flex-1 text-center font-secondary lg:text-left'>

            <Title TituloPrincipal='Matías' TituloSpan='Carrizo'/>
            
            <Subtitle/>

            <NextLevel/>

            <RedIcons/>

            <ButtonBanner/>
            
          </div>

          <div className='flex-1 md:m-8 lg:justify-around'>

            <ImageBanner/>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Banner;
