import React from 'react';
import { Link } from 'react-router-dom';

function StoryCard({ story }) {
    return (
        <div className="story-card">
            {/* The Link component from react-router-dom makes the entire card clickable
                and sends the user to the full story page. */}
            <Link to={`/story/${story.id}`}>
                {/* The main image for the story card. */}
                <div className="story-card-image-container">
                    <img
                        src={story.image || '/assets/images/default-story-cover.png'}
                        alt={`Cover for ${story.title}`}
                        className="story-card-image"
                    />
                </div>

                {/* The content area for the title, author, and summary. */}
                <div className="story-card-content">
                    <h3 className="story-card-title">{story.title}</h3>
                    <p className="story-card-author">by {story.author}</p>
                    <p className="story-card-summary">{story.summary}</p>
                </div>

                {/* The tags and stats section, like upvotes or number of parts. */}
                <div className="story-card-stats">
                    {/* Display upvotes using a simple upvote icon. */}
                    <div className="story-card-stat">
                        <img src="/assets/icons/icon-upvote.svg" alt="Upvotes" />
                        <span>{story.upvotes}</span>
                    </div>

                    {/* Display the number of parts in the story. */}
                    <div className="story-card-stat">
                        <span>{story.parts} Parts</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default StoryCard;