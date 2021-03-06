import React from 'react';
import { pitch } from '../data';

export default function About() {
    return (
        <section id="about-me">
            <div className="about-container">
                <h1 className="title">Pietro Ballarin</h1>
                <h2 className="subtitle">Developer</h2>
                <p className="description">{pitch}</p>
            </div>
        </section>
    )
}
