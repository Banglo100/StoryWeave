import React, { useState, useEffect } from 'react';
import StoryCard from '../components/StoryCard';

// This is a placeholder for fetching user data from your server.
// In a real application, you'd use a tool like 'fetch' or 'axios' here.
const fetchUserData = async (username) => {
    // This would be your API endpoint
    const response = await fetch(`/api/users/${username}`);
    const data = await response.json();
    return data;
};

// This component represents the full user profile page.
function UserProfilePage({ match }) {
    // This is how you would get the username from the URL, e.g., /profile/JaneDoe
    const username = match.params.username; 
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUser = async () => {
            setLoading(true);
            const userData = await fetchUserData(username);
            setUser(userData);
            setLoading(false);
        };
        loadUser();
    }, [username]); // The effect will re-run if the username in the URL changes.

    if (loading) {
        return <div className="loading-spinner">Loading profile...</div>;
    }

    if (!user) {
        return <div className="error-message">User not found.</div>;
    }

    return (
        <div className="user-profile-page">
            <div className="profile-header">
                <img src={user.avatar || '/assets/images/default-avatar.png'} alt={`${user.name}'s avatar`} className="profile-avatar" />
                <h1 className="profile-name">{user.name}</h1>
                <p className="profile-bio">{user.bio}</p>
                <div className="profile-stats">
                    <span>{user.storiesStarted} Stories Started</span>
                    <span>{user.contributions} Contributions</span>
                </div>
                
                {/* A link to a "Contact" or "Message" page for other users */}
                <button className="contact-button">Send a Message</button>
            </div>

            <hr />

            <div className="profile-section">
                <h2>Favorite Genres</h2>
                <div className="genre-list">
                    {user.favoriteGenres.map(genre => (
                        <span key={genre} className="genre-tag">{genre}</span>
                    ))}
                </div>
            </div>
            
            <hr />

            <div className="profile-section">
                <h2>Achievements</h2>
                <div className="badge-list">
                    {user.badges.map(badge => (
                        <div key={badge.id} className="badge-item" title={badge.name}>
                            <img src={badge.iconUrl} alt={badge.name} />
                        </div>
                    ))}
                </div>
            </div>

            <hr />

            <div className="profile-section">
                <h2>Stories Started</h2>
                <div className="story-list-grid">
                    {user.startedStories.map(story => (
                        <StoryCard key={story.id} story={story} />
                    ))}
                </div>
            </div>

            <hr />

            <div className="profile-section">
                <h2>Contributions</h2>
                <div className="contributions-list">
                    {user.contributions.map(contribution => (
                        <div key={contribution.id} className="contribution-item">
                            <p>{contribution.text}</p>
                            <span className="contribution-story-link">Contributed to "{contribution.storyTitle}"</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserProfilePage;