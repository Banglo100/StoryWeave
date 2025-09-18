import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    // A placeholder for user authentication state.
    // In a real app, this would be managed using a library like Redux or React Context.
    const isAuthenticated = false; // Set to true when the user is logged in.

    return (
        <header className="main-header">
            <nav className="header-nav">
                {/* The Logo and a link to the homepage */}
                <Link to="/" className="logo-link">
                    <img src="/assets/images/logo.png" alt="Story Weave Logo" className="logo" />
                </Link>

                {/* The main navigation links */}
                <ul className="nav-links">
                    <li><NavLink to="/" exact activeClassName="active-link">Home</NavLink></li>
                    <li><NavLink to="/stories" activeClassName="active-link">Stories</NavLink></li>
                    <li><NavLink to="/ink-shop" activeClassName="active-link">Ink Shop</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active-link">About</NavLink></li>
                </ul>
            </nav>

            {/* The user-specific section, which changes based on login status */}
            <div className="user-actions">
                {isAuthenticated ? (
                    // Show this section if the user is logged in
                    <div className="user-menu">
                        <Link to="/profile" className="profile-link">
                            {/* The user's avatar icon */}
                            <img src="/assets/images/user-avatar.png" alt="User Profile" className="user-avatar" />
                            <span>My Profile</span>
                        </Link>
                        <button className="logout-button">Log Out</button>
                    </div>
                ) : (
                    // Show this section if the user is not logged in
                    <div className="auth-buttons">
                        <Link to="/login" className="login-button">Log In</Link>
                        <Link to="/signup" className="signup-button">Sign Up</Link>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;