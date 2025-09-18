import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="/assets/images/logo-small.png" alt="Story Weave Logo" />
                </div>
                
                <nav className="footer-nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/terms">Terms of Service</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                    </ul>
                </nav>

                <div className="social-media">
                    {/* Placeholder links for social media icons */}
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/icons/icon-twitter.svg" alt="Twitter" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/icons/icon-facebook.svg" alt="Facebook" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/icons/icon-instagram.svg" alt="Instagram" />
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Story Weave. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;