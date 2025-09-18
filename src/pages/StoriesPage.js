import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // <--- UPDATED: Import the useParams hook

import StoryPart from '../components/StoryPart';
import SubmissionBox from '../components/SubmissionBox';
import VoteButton from '../components/VoteButton';
import CommentSection from '../components/CommentSection';
import SocialShareButtons from '../components/SocialShareButton';

// This is a placeholder for fetching story and contribution data from a server.
const fetchStoryData = async (storyId) => {
    // This would be your API endpoint to get a single story and its parts.
    return {
        id: storyId,
        title: 'The Great Goblin Quest',
        author: 'JohnWriter',
        storyParts: [
            { id: 1, text: 'The goblin, Gnorman, sighed. Another Tuesday, another pile of soggy laundry.', author: 'JohnWriter' },
            { id: 2, text: 'Suddenly, a shimmering letter appeared on his windowsill, sealed with a crest of a golden mushroom.', author: 'MagicWand' },
            // ... more story parts
        ],
        pendingContributions: [
            { id: 101, text: 'Gnorman cautiously opened the letter, which began to glow with a soft, warm light.', votes: 15 },
            { id: 102, text: 'It was an invitation to a prestigious goblin party, a chance to get away from his mundane life.', votes: 5 },
            { id: 103, text: 'The letter smelled faintly of lavender and old parchment.', votes: 3 },
        ],
        comments: [
            { id: 1, author: 'Reader123', text: 'Love this story so far!' },
            { id: 2, author: 'FanofFantasy', text: 'I wonder what the letter is about?' },
        ],
        isFinalChapter: false,
    };
};

function StoryPage() { // <--- UPDATED: Removed 'match' from parameters
    // This gets the story ID from the URL using the new useParams hook.
    const { storyId } = useParams(); 
    const [story, setStory] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadStory = async () => {
            setLoading(true);
            const storyData = await fetchStoryData(storyId);
            setStory(storyData);
            setLoading(false);
        };
        loadStory();
    }, [storyId]); // Re-run if the storyId in the URL changes

    if (loading) {
        return <div className="loading-spinner">Loading story...</div>;
    }

    if (!story) {
        return <div className="error-message">Story not found.</div>;
    }

    // A placeholder function for handling new votes
    const handleVote = (contributionId, voteType) => {
        // Logic to send vote to the server
        console.log(`Voted for contribution ${contributionId} with a ${voteType} vote.`);
    };

    // A placeholder function for handling a new contribution
    const handleNewSubmission = (text) => {
        // Logic to send new contribution to the server
        console.log('New submission received:', text);
    };

    return (
        <div className="story-page">
            <h1 className="story-title">{story.title}</h1>
            <p className="story-author">A collaboration started by {story.author}</p>
            <div className="social-share-section">
                <SocialShareButtons storyTitle={story.title} storyUrl={window.location.href} />
            </div>

            <hr />

            <section className="story-body">
                {story.storyParts.map(part => (
                    <StoryPart key={part.id} part={part} />
                ))}
            </section>

            <hr />

            {!story.isFinalChapter && (
                <section className="contributions-section">
                    <h2>Next Chapter Contributions</h2>
                    <div className="contributions-list">
                        {story.pendingContributions.map(contribution => (
                            <div key={contribution.id} className="contribution-item">
                                <p className="contribution-text">{contribution.text}</p>
                                <div className="vote-actions">
                                    <VoteButton onClick={() => handleVote(contribution.id, 'regular')} />
                                    <span>{contribution.votes} votes</span>
                                    <VoteButton onClick={() => handleVote(contribution.id, 'super')} type="super" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <SubmissionBox onNewSubmission={handleNewSubmission} />
                </section>
            )}

            <hr />

            <section className="comments-section">
                <CommentSection comments={story.comments} />
            </section>
        </div>
    );
}

export default StoryPage;