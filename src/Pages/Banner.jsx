import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import NextLevel from '../components/NextLevel';
import RedIcons from '../components/RedIcons';
import ButtonBanner from '../components/ButtonBanner';
import ImageBanner from '../components/ImageBanner';


const Banner = () => {
  return ( 
    <div className='banner' id='home'>

      <div className='flex-1 text-center font-secondary lg:text-left'>

        <Title TituloPrincipal='Matías' TituloSpan='Carrizo'/>
        
        <Subtitle/>

        <NextLevel/>

        <RedIcons/>

        <ButtonBanner/>
        
      </div> 

      <div className='flex-1 text-center lg:text-left'>

        <ImageBanner/>

      </div>

    </div>
  );
};

export default Banner;
