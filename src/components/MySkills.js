import React from 'react';
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from '../data';

export default function MySkills() {
    return (
        <section id="skills">
            <h1>SKILLS</h1>
            <ul>
                {skills.map(skill =>
                    <li className="skilltag">
                        <BadgeCheckIcon className="check-icon"/>
                        <span className="skill-text">{skill}</span>
                    </li>
                    
                )}
            </ul>
        </section>
    )
}
