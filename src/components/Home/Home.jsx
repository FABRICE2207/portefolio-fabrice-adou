import React from 'react'
import img from '../../assets/img/hero.png'
import fabrice from '../../assets/img/fabrice.png'
import Button from '../../layout/Button'

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center 
    lg:flex-row items-center lg:px-32 px-5 bg-[#F0F0F6]'>
      <div className='flex flex-col items-center text-center lg:text-start lg:items-star
       w-full lg:w-3/4 space-y-4
      '>
        <h1 className='text-3xl font-semibold leading-tight mt-24'>Je suis ADOU NIANGORAN FABRICE
          <span className='text-[#FFB400]'> Développeur </span>
            Full-Stack et Mobile
        </h1>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit. Temporibus quisquam,
          voluptates ullam voluptate earum ipsa 
        </p> */}
        {/* <Button title="HIRE ME" /> */}
      </div>
      <div className='mt-20'>
        <img src={fabrice} alt="" width={500}/>
      </div>
    </div>
  )
}

export default Home