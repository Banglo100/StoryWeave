import React from 'react';

function AuthModal({ onClose, type }) {
    const isLogin = type === 'login';

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle login or signup logic here
        onClose(); // Close the modal after submission
    };

    return (
        <div className="modal-overlay">
            <div className="auth-modal">
                <button className="modal-close-button" onClick={onClose}>&times;</button>
                <h2>{isLogin ? 'Log In' : 'Sign Up'}</h2>
                <form onSubmit={handleFormSubmit}>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    {!isLogin && (
                        <input type="text" placeholder="Username" required />
                    )}
                    <button type="submit" className="modal-submit-button">
                        {isLogin ? 'Log In' : 'Sign Up'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AuthModal;