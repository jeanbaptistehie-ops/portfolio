import "../styles/HomePage.css";
import profile from "../assets/profile.jpg";

export default function HomePage() {
    return (
        <section className="hero">
            <img src={profile} alt="photo de profil" className="profile" />
            <h2>Salut, moi c’est <span>Jean-Baptiste Hie</span></h2>
            <p>.</p>
            <a href="#projects" className="btn">Voir mes projets</a>
        </section>
    );
}
