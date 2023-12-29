import React from 'react'
import './skills.css'
import { skillsData } from './data'


const Skills = () => {
  return (
    <section className='skills section' id='skills'>
        <h2 className='section__title'>Skills</h2>
        <span className='section__subtitle'>My technical knowledge</span>
        <div className='skills__container container grid'>
            {skillsData.map((item) => {
              return <div key={item.id} className='skills__card'>
                <img src={item.image} alt={item.name} className='skills__card-image'/>
                <h4 className='skills__card-text'>{item.name}</h4>
              </div>
            })}
        </div>

    </section>
  )
}

export default Skills