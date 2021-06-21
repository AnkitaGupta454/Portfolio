import React from 'react'
import './Project.css'
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import { projectsData } from './ProjectData';
import ProjectCard from './ProjectCard';



export default function Project() {
    return (
        <div className="section-container">
            <Header
                heading='My Projects.'
                details="Here are a few cool things I've worked on, do check them out!"
            />
             <div className='project-cards-container'>
                {projectsData.map(
                    ({
                        projectName,
                        projectDescription,
                        imageUrl,
                        projectUrl,
                    }) => {
                        return (
                            <ProjectCard
                                projectName={projectName}
                                projectDescription={projectDescription}
                                projectUrl={projectUrl}
                                imageUrl={imageUrl}
                            />
                        );
                    }
                )}
            </div>
           <FooterLink
                phrase='Check out '
                link='my skills!'
                toAdress='/skills'
            />
        </div>
    )
}
