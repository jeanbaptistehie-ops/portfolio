export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-copy">
                    © {new Date().getFullYear()} <span>Jean-Baptiste</span> <span className="surname">Hie</span>. Tous droits réservés.
                </p>
            </div>
        </footer>
    );
}
