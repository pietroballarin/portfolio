import React from 'react';
import { BadgeCheckIcon, AcademicCapIcon } from "@heroicons/react/solid";
import { skills } from '../data';

export default function MySkills() {
    return (
        <section id="skills">
            <h1>SKILLS</h1>
            <AcademicCapIcon className="cap-icon"/>
            
            <ul>
            
                {skills.map(skill =>
                    <li key={skill} className="skilltag">
                        <BadgeCheckIcon className="check-icon"/>
                        <span className="skill-text">{skill}</span>
                    </li>
                    
                )}
            </ul>
        </section>
    )
}
