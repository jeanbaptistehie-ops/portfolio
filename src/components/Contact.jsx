import "../styles/Contact.css";

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <h2>Contact</h2>

            <form
                action="https://formspree.io/f/mnjzojln"
                method="POST"
                className="contact-form"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Votre nom"
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Votre email"
                    required
                />

                <textarea
                    name="message"
                    placeholder="Votre message"
                    required
                ></textarea>

                <button type="submit">Envoyer</button>
            </form>
        </section>
    );
}
