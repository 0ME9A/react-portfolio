import React from 'react'
import Bali from '../../assests/bali.pdf'

const cta = () => {
  return (
    <div className="cta">
      <a href="{Bali}" download={Bali} className="btn">Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default cta