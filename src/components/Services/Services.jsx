import React from 'react'
import ServicesCard from '../../layout/ServicesCard'
import { BiCodeAlt } from 'react-icons/bi'
import { BsAndroid } from 'react-icons/bs'
import { GrApple } from 'react-icons/gr'
import { DiPhotoshop } from 'react-icons/di'

const Services = () => {

  const icon1 = <BiCodeAlt size={55} className='text-[#FFB400]' />
  const icon2 = <BsAndroid size={55} className='text-[#FFB400]' />
  const icon3 = <GrApple size={55} className='text-[#FFB400]' />
  const icon4 = <DiPhotoshop size={55} className='text-[#FFB400]' />


  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-[#F0F0F6]'>
      <h1 className="text-center font-semibold text-4xl mt-24 lg:mt-14 mb-8 lg:mb-4">Mes services</h1>
      <div className='flex flex-wrap items-center justify-center gap-5 mt-4'>
        <ServicesCard icon={icon1} title="Développement Web" />
        <ServicesCard icon={icon2} title="Développement Mobile (Android)" />
        <ServicesCard icon={icon4} title="Conception d'Affiche" />
      </div>
    </div>
  )
}

export default Services