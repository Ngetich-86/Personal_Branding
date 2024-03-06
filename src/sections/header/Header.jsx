// import React from 'react'
// import data from './data.js';
import dataSocials from "./data.js";
import HeaderImage from '../../assets/profile.jpg'
import './header.css'




const Header = () => {
  return (
    <header id="home">
      <div className="container header__cointainer">
        <div className="header__profile">
          <img src={HeaderImage} alt="Potrait" />
        </div>
        <h3>Gideon Ngetich</h3>
        <p>
        ||SERN Stack Developer💻 ||React JS || Javascript || Beta MLSA || Linux || <br/>
        Nairobi County, Kenya 
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Contact Me</a> 
          <a href="#portfolio" className='btn light'>My work</a>
        </div>

        <div className="header__socials">
          {
           dataSocials.map(item => <a key={item.id} href={item.link} 
           target='_blank' rel='noopener noreferrer'>
            {item.icon} 
            </a>) 
          }
        </div>
      </div>
    </header>
  )
}

export default Header