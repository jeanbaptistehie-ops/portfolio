import "../styles/HomePage.css";
import profile from "../assets/profile.jpg";

export default function HomePage() {
    const name = "Jean-Baptiste-Hie";
    const qualities = [
        "Jovial", "Efficace", "Autonome", "Novateur", "-",
        "Bienveillant", "Ambitieux", "Ponctuel", "Travailleur", "Investi", "Sérieux",
        "Tolérant", "Engagé", "-", "Humain", "Ingénieux", "Exigeant"
    ];

    return (
        <section className="hero" id="hero">
            <div className="text-container">
                <h2>
                    Bonjour, je suis{" "}
                    <span className="animated-name">
                        {name.split("").map((letter, index) => (
                            <span key={index} className="letter" style={{ "--i": index }}>
                                {letter}
                                <span className="quality">{qualities[index]}</span>
                            </span>
                        ))}
                    </span>
                </h2>
                <br></br>
                <a href="#projects" className="btn">Voir mes projets</a>
            </div>
            <img src={profile} alt="photo de profil" className="profile" />
        </section>
    );
}
