import React from 'react';

function LoadingSpinner() {
    return (
        <div className="loading-spinner">
            {/* You can use an animated SVG or GIF here, like the pen writing animation you mentioned. */}
            <div className="spinner"></div>
            <p>Loading...</p>
        </div>
    );
}

export default LoadingSpinner;