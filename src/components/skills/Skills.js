import React from 'react'
import Header from '../Header/Header'
import FooterLink from '../FooterLink/FooterLink'
import SkillsVector from './../../assets/skills_vector.png'
import './Skills.css'
import SkillCard from './SkillCard'
import { skillList } from './skill'


export default function Skills() {
    return (
        <div className="section-container">
          <Header 
            heading="My Skills"
            details="Passionate about new technologies, I keep exploring stuff. Here's the tech stack I've worked with! "
          />
          <div className="skill-card-container">
                 {
                     skillList.map(({ skillName, skillUrl }) => (
                        <SkillCard skillName={skillName} skillUrl={skillUrl} />
                    ))
                 }
                </div> 
          <FooterLink
            phrase="Check out my"
            link=" project." toAdress='/projects'
            />
              
            

            <div className="skills-vector-frame">
                <img
                   src={SkillsVector}
                   alt="skills"
                   className="skills-vector"
                />
            </div>
            
        </div>
    )
}
