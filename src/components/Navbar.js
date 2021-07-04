import React from 'react'

export default function Navbar() {
    return (
        <header className="header-section">
            <nav>
                <div className="navbar">
                    <a className="left-btn" href="#about">PIETRO BALLARIN</a>
                    <a className="left-btn" href="#skills">SKILLS</a>
                    <a className="left-btn" href="#projects">PROJECTS</a>
                </div>    
                <div className="navbar2">
                    <a className="right-btn">GithHub</a>
                    <a className="right-btn">LinkedIn</a>
                    <a className="right-btn" href="#contact-me">Contacts</a>
                </div>
            </nav>
            
        </header>
    )
}
