import AboutContent from '../components/AboutContent';
import ImageAbout from '../components/ImageAbout';

const About = () => {
  return (
    <>
      <div id='about' className='flex justify-around items-center section md:p-10 about' >

        <div className='flex justify-center lg:justify-around container sm:mt-10'>

          <div className='flex flex-col gap-y-10 lg:flex-row items-center lg:items-center lg:gap-x-20'>

            <ImageAbout/>

            <AboutContent/>
            
          </div>

        </div>

      </div>;
    </>
  )
}

export default About