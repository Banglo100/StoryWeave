import React from 'react';

function PromptCard({ prompt }) {
    return (
        <div className="prompt-card">
            <h4 className="prompt-card-title">Writing Prompt</h4>
            <p className="prompt-card-text">{prompt.text}</p>
            <span className="prompt-card-tag">{prompt.tag}</span>
        </div>
    );
}

export default PromptCard;