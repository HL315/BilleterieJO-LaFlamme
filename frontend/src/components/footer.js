import React from 'react';
import '../styles/footer.css';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h2 className="footer-brand">LaFlamme</h2>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    </div>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="/conditions-vente">Conditions Générales de Vente</a></li>
                        <li><a href="/conditions-utilisation">Conditions Générales d'Utilisation</a></li>
                        <li><a href="/mentions-legales">Mentions Légales</a></li>
                        <li><a href="/politique-confidentialite">Politique de confidentialité</a></li>
                        <li><a href="/parametres-cookies">Paramètres des Cookies</a></li>
                        <li><a href="/credits-photos">Crédits Photos</a></li>
                        <li><a href="/accessibilite-eco-conception">Accessibilité et éco-conception</a></li>
                        <li><a href="/cybersecurite">Cybersécurité</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
