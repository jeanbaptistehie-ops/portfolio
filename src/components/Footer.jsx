import "../styles/Footer.css";
export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <p className="footer-brand">
                        Jean-Baptiste <span className="surname">Hie</span>
                    </p>

                    <nav className="footer-links" aria-label="Liens du footer">
                        <a
                            href="https://github.com/jeanbaptistehie-ops"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/jean-baptiste-hie/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </nav>
                </div>

                <div className="footer-sep" />

                <p className="footer-copy">
                    © {year} — Tous droits réservés.
                </p>
            </div>
        </footer>
    );
}
