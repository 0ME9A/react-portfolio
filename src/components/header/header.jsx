import React from 'react'
import './header.css'
import Cta from './cta'
import Me from '../../assests/girl.png'
import HeaderSocial from './headerSocial'



function Header() {
  return (
    <header id='home'>
      <div className="container header_container">
        <section>
          <h5>Hello I'm</h5>
          <h1>OMEGA</h1>
          <h5 className="text-light">Fullstack Developer</h5> 
        </section>

        <Cta />
        <HeaderSocial />

        <div className="me">
          <img src={Me} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header