import React from 'react';

function StoryPart({ part }) {
    return (
        <div className="story-part">
            <p className="story-part-text">{part.text}</p>
            <span className="story-part-author">by {part.author}</span>
        </div>
    );
}

export default StoryPart;