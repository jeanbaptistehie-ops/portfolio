import "./../styles/Projects.css";
import LogoRFE from "../assets/LogoRFE.png";
import LogoVSP from "../assets/LogoVSP.svg";
import pacman from "../assets/pacman.png";
import bomberman from "../assets/bomberman.png";



export default function Projects() {
    return (
        <section id="projects" className="projects">
            <h2 className="projects-title">Mes projets</h2>
            <div className="project-list">
                <div className="project-card">
                    <img src={pacman} alt="projet 1" />
                    <h3>PacMan</h3>
                    <p>Conception du célèbre jeu pendant plusieurs semaines en utilisant JavaFx et GIT.</p>
                </div>

                <div className="project-card">
                    <img src={LogoRFE} alt="projet 2" />
                    <h3>RaceFest Events</h3>
                    <p>Un site statique spécialisé dans l'événementiel organisant des prestations dans l'automobile. Réalisé en HTML/CSS.</p>
                </div>

                <div className="project-card">
                    <img src={LogoVSP} alt="projet 3" />
                    <h3>VS Punk</h3>
                    <p>Un site réalisé lors du marathon du web en collaboration avec les étudiants du département MMI.</p>
                </div>

                <div className="project-card">
                    <img src={bomberman} alt="projet 4" />
                    <h3>Bomberman</h3>
                    <p>Réalisation du jeu bomberman en utilisant JavaFX et Gradle en réalisant également l'interface graphique. </p>
                </div>
            </div>
        </section>
    );
}
