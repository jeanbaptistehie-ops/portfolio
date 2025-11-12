import "./../styles/Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="logo">Mon Portfolio</h1>
            <ul className="nav-links">
                <li><a href="#about">À propos</a></li>
                <li><a href="#projects">Projets</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}
