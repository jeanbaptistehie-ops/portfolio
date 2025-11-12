export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-copy">
                    © {new Date().getFullYear()} Jean-Baptiste Hie. Tous droits réservés.
                </p>
            </div>
        </footer>
    );
}
