import React from 'react'

const Parrafo = (props) => {
  return (
    <>
        <h3 className='h3 text-sm text-white max-w-[455px] mb-8'>
            {props.ParrafoText}
        </h3>
    </>
  )
}

export default Parrafo