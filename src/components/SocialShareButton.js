import React from 'react';

function SocialShareButtons({ storyTitle, storyUrl }) {
    // Function to create share links for each platform
    const shareToTwitter = () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(storyTitle)}&url=${encodeURIComponent(storyUrl)}`;
        window.open(twitterUrl, '_blank');
    };

    const shareToFacebook = () => {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(storyUrl)}`;
        window.open(facebookUrl, '_blank');
    };

    return (
        <div className="social-share-buttons">
            <button onClick={shareToTwitter} className="share-button twitter-button">
                <img src="/assets/icons/icon-twitter.svg" alt="Share on Twitter" />
            </button>
            <button onClick={shareToFacebook} className="share-button facebook-button">
                <img src="/assets/icons/icon-facebook.svg" alt="Share on Facebook" />
            </button>
        </div>
    );
}

export default SocialShareButtons;