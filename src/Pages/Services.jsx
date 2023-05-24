//Components

import Video from '../components/Video';
import ServiceList from '../components/ServiceList';
import ContentAbout from '../components/ContentAbout';

//Videos

import  video1  from '../assets/197.mp4'
import video2 from '../assets/video2.mp4'



const Services = () => {
  return (
    <section className='section lg:m-10 md:p-10 md:m-10' id='services'>

      <div className="section container">

        <div className='flex flex-col lg:flex-row mb-8'>
          
          <ContentAbout/>

          <ServiceList/>
          
        </div>

      </div>

      

      <div className="section container">
        <div className='flex flex-col lg:flex-row lg:m-auto'>
          <Video VideoProps={video1}/>
          <Video VideoProps={video2}/>
        </div>
      </div>

    </section>
  )
}

export default Services