import React from 'react'
import SkillsCard from '../../layout/SkillsCard'

const About = () => {

  const skill1 = "w-4/12";
  const skill2 = "w-6/12";
  const skill3 = "w-7/12";
  const skill4 = "w-6/12";

  return (
    <div className='min-h-screen flex flex-col justify-around lg:px-32 bg-[#F0F0F6]'>
      <div className='-mt-60'>
        <h1 className='text-4xl font-semibold text-center lg:mt-1'>Qui suis-je ?</h1>
      </div>

      <div>
        <div className='-mt-90'>
          {/* <h2></h2> */}
          <p className='mt-4 lg:mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Rem numquam est harum deserunt blanditiis impedit optio, 
            quasi, ad modi autem culpa aliquid nihil unde officiis. 
            Velit cupiditate officiis quis autem?</p>
        </div>

        <div className='mt-5'>
          <h2 className='text-3xl font-semibold'>Mes expériences</h2>
          <div>
            <SkillsCard title="React JS" width={skill1} val="40%"/>
            <SkillsCard title="React Native" width={skill2} val="50%"/>
            <SkillsCard title="Pyhton (Flask)" width={skill3} val="55%"/>
            <SkillsCard title="Figma" width={skill4} val="50%"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About