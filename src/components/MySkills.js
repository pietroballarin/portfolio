import React from 'react';
import { skills } from '../data';

export default function MySkills() {
    return (
        <section id="skills">
            <h1>SKILLS</h1>
            <ul>
                <li>
                {skills.map(skill => 
                    <div className="skilltag">{skill}</div>
                )}
                </li>
            </ul>
        </section>
    )
}
