import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {FaFigma} from 'react-icons/fa'


const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>OMEGA</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testemonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="www.linkedin.com"><BsLinkedin/></a>
        <a href="www.github.com"><BsGithub/></a>
        <a href="www.figma.com"><FaFigma/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; OMEGA. All right reserved</small>
      </div>
    </footer>
  )
}

export default footer