import AboutContent from '../components/AboutContent';
import ImageAbout from '../components/ImageAbout';

const About = () => {
  return (
    <>
      <section id='about' className='min-h-[100vh] lg:min-h-[100vh] flex justify-around items-center section md:p-10 ' >

        <div className='flex justify-around container sm:mt-10'>

          <div className='flex flex-col gap-y-10 lg:flex-row items-center lg:items-center lg:gap-x-20'>

            <ImageAbout/>

            <AboutContent/>
            
          </div>

        </div>

      </section>;
    </>
  )
}

export default About