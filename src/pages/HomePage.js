import React, { useState, useEffect } from 'react';
import StoryCard from '../components/StoryCard';
import PromptCard from '../components/PromptCard';

// This is placeholder data for the homepage content.
// In a real app, this would be fetched from your backend server.
const fetchHomePageData = async () => {
    // This would be your API endpoint to get homepage stories and prompts
    // Example data structure:
    return {
        featuredStories: [
            {
                id: 'story-123',
                title: 'The Whispering Forest',
                author: 'AlexRiver',
                summary: 'A group of friends discovers a secret hidden within an ancient, magical forest...',
                upvotes: 120,
                parts: 15,
                image: '/assets/images/forest-cover.jpg'
            },
            {
                id: 'story-456',
                title: 'A Knight in the City',
                author: 'UrbanBard',
                summary: 'A medieval knight is magically transported to a modern-day metropolis.',
                upvotes: 85,
                parts: 10,
                image: '/assets/images/knight-cover.jpg'
            }
        ],
        writingPrompt: {
            text: 'A character receives a mysterious gift that can only be used once.',
            tag: 'Daily Prompt'
        }
    };
};

function HomePage() {
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const data = await fetchHomePageData();
            setPageData(data);
            setLoading(false);
        };
        loadData();
    }, []); // The empty array means this effect runs only once when the page loads.

    if (loading) {
        return <div className="loading-spinner">Loading...</div>;
    }

    if (!pageData) {
        return <div className="error-message">Failed to load homepage content.</div>;
    }

    return (
        <div className="home-page">
            <header className="page-header">
                <h1>Welcome to Story Weave</h1>
                <p>Collaborate with writers from all over the world to create incredible stories!</p>
            </header>

            <hr />

            <section className="featured-section">
                <h2>Featured Stories</h2>
                <div className="story-grid">
                    {pageData.featuredStories.map(story => (
                        <StoryCard key={story.id} story={story} />
                    ))}
                </div>
            </section>

            <hr />

            <section className="prompts-section">
                <h2>Today's Writing Prompt</h2>
                <PromptCard prompt={pageData.writingPrompt} />
            </section>
        </div>
    );
}

export default HomePage;