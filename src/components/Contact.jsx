import "./../styles/Contact.css";

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="text-container">
                <h2>Contactez-moi</h2>
                <p>Je suis dispo pour discuter et collaborer 🚀</p>
            </div>

            <form>
                <input type="text" placeholder="Votre nom" required />
                <input type="email" placeholder="Votre email" required />
                <textarea placeholder="Votre message" rows="4" required></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </section>
        
    );
}

