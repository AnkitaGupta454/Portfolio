import React from 'react'
import './About.css'
import FooterLink from '../FooterLink/FooterLink'
import Header from '../Header/Header'
import aboutvector from './../../assets/about_vector.png'
import aboutanime from './../../assets/about_anime.gif'
export default function About() {
    return (
        <div className="section-container">
            <Header 
               heading = "About me"
               details = "Programming Lover | Web Developer | Computer Science Undergraduate Student"
            />
           
              <div className="about-main">
                  <div className="about-main-left">
                      <div className="about-details">
                      <h3> I am a Computer Science undergraduate Student who is currently studying at G.L Bajaj Institute of Technology and Management.
                          </h3>
                          </div>
                          <div className="about-details">
                      <h3>
                         I am confident in my abilities to perform best while struggling against the worst and also I am someone who has fast learning skills with never giving up attitude.
                          I like to learn new things always and I'm a creative problem solver. 
                          <br/>
                          Check out{' '}
                         
                      <a
                       className='about-link-element'
                       href="https://leetcode.com/ankitagupta311/" 
                       target="_blank"
                       >
                           My Leetcode Profile Here!
                       </a>
                       <br/>
                       <a
                       className='about-link-element'
                       href="https://auth.geeksforgeeks.org/user/ayaush122/practice/" 
                       target="_blank"
                       >
                           My GFG Profile Here!
                       </a>
               </h3>

                 </div>
                 <div className="about-details">
                <h3> I have ability to work with a team and I am passionate to work as a data a web developer,Front-End developer. Check out {''} </h3>
                <a
                       className='about-link-element'
                       href="https://github.com/AnkitaGupta454" 
                       target="_blank"
                       >
                           My work here!
                       </a>
                 </div>
                  </div>
                  <div className="about-main-right">
                  <img
                        src={aboutanime}
                        alt='animation'
                        className='about-anime'
                    />
                  </div>
              </div>
           
            <FooterLink 
              phrase="Get in"
              link =" touch."
              toAdress="/contact"
           />

            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutvector} className='about-vector' alt='about' />
            </div>
        </div>
    )
}
