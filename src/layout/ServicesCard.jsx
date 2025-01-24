import React from 'react'

const ServicesCard = (props) => {
  return (
    <div className='flex flex-col items-center bg-white hover:bg-black hover:text-white
    transition-all hover:-transition-y-2 w-full lg:w-1/4 py-4 gap-4 cursour-pointer rounded-md'>
      <div>
        <span>{props.icon}</span>
      </div>
      <h2 className='text-xl font-semibold'> {props.title} </h2>
      {/* <p>Blog</p> */}
    </div>
  )
}

export default ServicesCard