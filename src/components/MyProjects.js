import React from 'react';
import { projects } from '../data';

export default function MyProjects() {
    return (
        <section id="my-projects">
            <h1>MY PROJECTS</h1>
            <div className="projects">
                {projects.map(project =>
                <div className="project-box">
                    <div className="box-details">     
                        <h2>{project.title}</h2>
                        <img src={project.image} alt={project.altimg}/>
                        <h3>{project.stack}</h3>
                        <p>{project.description}</p>
                    </div>
                </div>
                )}
            </div>
        </section>
    )
}
