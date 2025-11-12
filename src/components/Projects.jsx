import "./../styles/Projects.css";
import projet1 from "../assets/projet1.png";

export default function Projects() {
    return (
        <section id="projects" className="projects">
            <h2>Mes projets</h2>
            <div className="project-list">
                <div className="project-card">
                    <img src={projet1} alt="projet 1" />
                    <h3>Application React</h3>
                    <p>Une application web moderne avec React et CSS.</p>
                </div>
            </div>
        </section>
    );
}
