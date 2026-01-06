import "./../styles/Cv.css";

export default function Cv() {
    return (
        <section id="cv" className="cv-section">
            <h2 className="cv-title">Mon CV</h2>
            <p className="cv-subtitle">Téléchargez mon curriculum vitae dans la langue de votre choix</p>

            <div className="cv-buttons">
                <a href="../assets/cv-jean-baptiste-fr.pdf" download className="cv-btn">Français</a>
                <a href="../assets/cv-jean-baptiste-en.pdf" download className="cv-btn">English</a>
            </div>
        </section>
    );
}
