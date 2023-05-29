//Videos

import  video1  from '../assets/197.mp4'
import video2 from '../assets/video2.mp4'

//components

import Video from '../components/Video';


const VideoPage = () => {
  return (
    <>
      <div id='video' className="videos">
          <div className='flex flex-col gap-y-6 lg:flex-row lg:items-center lg:gap-x-6'>
              <Video VideoProps={video1} className='z-2'/>
              <Video VideoProps={video2} className='z-2'/>
          </div>
      </div>  
    </>
  )
}

export default VideoPage