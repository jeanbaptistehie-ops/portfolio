import { useState } from "react";
import "./../styles/Navbar.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <h3 className="logo">Jean-Baptiste HIE</h3>

            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                <li><a href="#hero">Accueil</a></li>
                <li><a href="#projects">Projets</a></li>
                <li><a href="#about">A propos</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className={`hamburger ${isOpen ? "active" : ""}`}
                 onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}
