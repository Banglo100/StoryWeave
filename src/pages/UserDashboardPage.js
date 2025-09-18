import React, { useState, useEffect } from 'react';
import StoryCard from '../components/StoryCard';
import InkBalance from '../components/InkBalance';
import Badge from '../components/Badge';

// A placeholder for fetching data for the logged-in user's dashboard
const fetchDashboardData = async () => {
    // In a real application, you'd get the user's ID from an authenticated session.
    return {
        username: 'JohnDoe',
        inkBalance: 550,
        recentContributions: [
            { id: 1, text: 'The goblin sighed. Another Tuesday, another pile of soggy laundry.', storyTitle: 'The Great Goblin Quest' },
            { id: 2, text: 'It was a cold and dreary night, but the campfire kept their spirits high.', storyTitle: 'A Dragon\'s Tale' }
        ],
        startedStories: [
            { id: 'story-123', title: 'The Whispering Forest', author: 'JohnDoe', summary: 'A group of friends discovers a secret...', upvotes: 120, parts: 15, image: '/assets/images/forest-cover.jpg' },
        ],
        earnedBadges: [
            { id: 'b1', name: 'First Quill', iconUrl: '/assets/badges/badge-first-quill.png' },
            { id: 'b2', name: 'Story Starter', iconUrl: '/assets/badges/badge-story-starter.png' },
        ]
    };
};

function UserDashboardPage() {
    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadDashboard = async () => {
            setLoading(true);
            const data = await fetchDashboardData();
            setDashboardData(data);
            setLoading(false);
        };
        loadDashboard();
    }, []);

    if (loading) {
        return <div className="loading-spinner">Loading dashboard...</div>;
    }

    if (!dashboardData) {
        return <div className="error-message">Could not load dashboard data.</div>;
    }

    return (
        <div className="user-dashboard-page">
            <header className="dashboard-header">
                <h1>Welcome, {dashboardData.username}!</h1>
                <div className="dashboard-stats">
                    <InkBalance balance={dashboardData.inkBalance} />
                    <Link to="/profile">View My Full Profile</Link>
                </div>
            </header>

            <hr />

            <section className="dashboard-section">
                <h2>My Stories</h2>
                <div className="story-list-grid">
                    {dashboardData.startedStories.map(story => (
                        <StoryCard key={story.id} story={story} />
                    ))}
                </div>
            </section>

            <hr />

            <section className="dashboard-section">
                <h2>Recent Contributions</h2>
                <div className="contributions-list">
                    {dashboardData.recentContributions.map(contribution => (
                        <div key={contribution.id} className="contribution-item">
                            <p className="contribution-text">{contribution.text}</p>
                            <span className="contribution-story-link">Contributed to "{contribution.storyTitle}"</span>
                        </div>
                    ))}
                </div>
            </section>

            <hr />

            <section className="dashboard-section">
                <h2>My Badges</h2>
                <div className="badge-list">
                    {dashboardData.earnedBadges.map(badge => (
                        <Badge key={badge.id} badge={badge} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default UserDashboardPage;