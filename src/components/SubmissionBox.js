import React, { useState } from 'react';

function SubmissionBox({ onNewSubmission }) {
    const [submissionText, setSubmissionText] = useState('');

    const handleSubmit = () => {
        if (submissionText.trim()) {
            onNewSubmission(submissionText);
            setSubmissionText(''); // Clear the text area after submitting
        }
    };

    return (
        <div className="submission-box">
            <textarea
                className="submission-textarea"
                placeholder="Write the next part of the story..."
                value={submissionText}
                onChange={(e) => setSubmissionText(e.target.value)}
            />
            <button onClick={handleSubmit} className="submit-button">
                Submit Contribution
            </button>
        </div>
    );
}

export default SubmissionBox;