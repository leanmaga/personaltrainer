import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import NextLevel from '../components/NextLevel';
import RedIcons from '../components/RedIcons';
import ButtonBanner from '../components/ButtonBanner';
import ImageBanner from '../components/ImageBanner';


const Banner = () => {
  return ( 
    <div className='flex items-center section lg:mt-0 mt-20  md:p-10 md:m-10' id='home'>

      <div className='container'>

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

    </div>
  );
};

export default Banner;
