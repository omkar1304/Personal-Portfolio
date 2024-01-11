import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
        <div className='about__box' data-aos="fade-left">
            <i class='bx bx-award about__icon'></i>
            <h3 className='about__title'>Experience</h3>
            <span>2.7 Years Working</span>
        </div>

        <div className='about__box' data-aos="fade-left" data-aos-delay="100">
            <i class='bx bxs-briefcase-alt about__icon'></i>
            <h3 className='about__title'>Completed</h3>
            <span>20+ Projects</span>
        </div>

        <div className='about__box' data-aos="fade-left" data-aos-delay="200">
            <i class='bx bx-support about__icon'></i>
            <h3 className='about__title'>Support</h3>
            <span>Online 24/7</span>
        </div>
    </div>
  )
}

export default Info