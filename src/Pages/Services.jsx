//Components

import ServiceList from '../components/ServiceList';
import ContentAbout from '../components/ContentAbout';


const Services = () => {
  return (
    <section className='section lg:m-10 md:p-10 md:m-10' id='services'>

      <div className="section container">

        <div className='flex flex-col lg:flex-row mb-8'>
          
          <ContentAbout/>

          <ServiceList/>
          
        </div>

      </div>

    </section>
  )
}

export default Services