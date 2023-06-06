import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import NextLevel from '../components/NextLevel';
import RedIcons from '../components/RedIcons';
import ButtonBanner from '../components/ButtonBanner';
import ImageBanner from '../components/ImageBanner';


const Banner = () => {
  return ( 
    <div className='banner flex-row' id='home'>

      <div className='text-center font-secondary pt-20'>

        <Title TituloPrincipal='Matías' TituloSpan='Carrizo'/>
        
        <Subtitle/>
 
        <NextLevel/>

        <RedIcons/>

        <ButtonBanner/>
        
      </div> 

      <div className='text-center'>

        <ImageBanner/>

      </div>

    </div>
  );
};

export default Banner;
