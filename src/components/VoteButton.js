import React from 'react';

function VoteButton({ onClick, type }) {
    const iconSrc = type === 'super' ? '/assets/icons/icon-super-vote.svg' : '/assets/icons/icon-upvote.svg';
    const altText = type === 'super' ? 'Super Vote' : 'Upvote';
    const buttonClass = type === 'super' ? 'super-vote-button' : 'upvote-button';

    return (
        <button onClick={onClick} className={buttonClass}>
            <img src={iconSrc} alt={altText} />
        </button>
    );
}

export default VoteButton;