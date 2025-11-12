import { useState } from "react";
import "./../styles/Navbar.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <h1 className="logo">Mon Portfolio</h1>

            <ul className={`nav-links ${open ? "open" : ""}`}>
                <li><a href="#about">À propos</a></li>
                <li><a href="#projects">Projets</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="hamburger" onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}
