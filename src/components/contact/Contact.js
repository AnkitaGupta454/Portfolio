import React from 'react'
import './contact.css'
import Header from '../Header/Header'
import FooterLink from '../FooterLink/FooterLink'
import github from './../../assets/gh.png'
import linkedin from './../../assets/li.png'

export default function contact() {
    return (
        <div className='section-container'>
        <Header
            heading='Get in touch.'
            details='Thank you for visiting my website! If you want to contact me on any purpose, please feel free to contact me through any media given below.'
        />

       <div className="Email"><h3>  ankitagupta3112001@gmail.com</h3> </div>
          <div className='social-icons-container'>
                <a href='https://github.com/AnkitaGupta454' target="_blank" className='social-icon'>
                    <img src={github} alt='social' />
                </a>
                <a
                    href='https://linkedin.com/in/ankita-gupta311' target="_blank"
                    className='social-icon'
                >
                    <img src={linkedin} alt='social' />
                </a>
                
        </div>
        </div>
    )
}
