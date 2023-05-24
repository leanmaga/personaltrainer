//video

import ReactPlayer from 'react-player';


const Video = (props) => {
  return (
    <>
      <div className='flex justify-center p-2 w-[100%] lg:w-[50%]'>
        <ReactPlayer url={props.VideoProps} controls/>
      </div>
    </>
  )
}

export default Video