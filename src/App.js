import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all the components
import Header from './components/Header';
import Footer from './components/Footer';

// Import all the page components
import HomePage from './pages/HomePage';
import StoriesPage from './pages/StoriesPage';
import StoryPage from './pages/StoryPage';
import InkShopPage from './pages/InkShopPage';
import UserProfilePage from './pages/UserProfilePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import UserDashboardPage from './pages/UserDashboardPage';
import NotFoundPage from './pages/NotFoundPage';

// Import the CSS files
import './styles/main.css';
import './styles/components.css';
import './styles/pages.css';
import './styles/animations.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <main>
                    <Routes>
                        {/* Define the routes for each page */}
                        <Route path="/" element={<HomePage />} />
                        <Route path="/stories" element={<StoriesPage />} />
                        <Route path="/story/:storyId" element={<StoryPage />} />
                        <Route path="/ink-shop" element={<InkShopPage />} />
                        <Route path="/profile/:username" element={<UserProfilePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignUpPage />} />
                        <Route path="/dashboard" element={<UserDashboardPage />} />
                        
                        {/* This route is for any URL that doesn't match the others */}
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;