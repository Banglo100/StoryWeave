import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import StoryCard from '../components/StoryCard';

const performSearch = async (query) => {
    // This function would make an API call to your backend with the search query.
    console.log(`Searching for: ${query}`);
    // Return mock results for now.
    return [
        { id: 'story-123', title: 'The Whispering Forest', author: 'AlexRiver', summary: 'A group of friends discovers a secret hidden within an ancient, magical forest...', upvotes: 120, parts: 15, image: '/assets/images/forest-cover.jpg' },
    ];
};

function SearchPage() {
    const location = useLocation();
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // Get the search query from the URL, e.g., /search?q=forest
    const searchQuery = new URLSearchParams(location.search).get('q');

    useEffect(() => {
        if (searchQuery) {
            const getResults = async () => {
                setLoading(true);
                const fetchedResults = await performSearch(searchQuery);
                setResults(fetchedResults);
                setLoading(false);
            };
            getResults();
        }
    }, [searchQuery]);

    if (loading) {
        return <div className="loading-spinner">Searching...</div>;
    }

    return (
        <div className="search-page">
            <header className="page-header">
                <h1>Search Results for "{searchQuery}"</h1>
            </header>

            {results.length > 0 ? (
                <div className="results-grid">
                    {results.map(story => (
                        <StoryCard key={story.id} story={story} />
                    ))}
                </div>
            ) : (
                <div className="no-results">
                    <p>No results found for "{searchQuery}".</p>
                </div>
            )}
        </div>
    );
}

export default SearchPage;