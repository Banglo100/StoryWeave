import React, { useState } from 'react';

function CommentSection({ comments }) {
    const [newComment, setNewComment] = useState('');

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        // Logic to add a new comment to the story
        setNewComment('');
    };

    return (
        <div className="comment-section">
            <h4 className="comment-title">Comments ({comments.length})</h4>
            <div className="comment-list">
                {comments.map(comment => (
                    <div key={comment.id} className="comment-item">
                        <p className="comment-author">{comment.author}</p>
                        <p className="comment-text">{comment.text}</p>
                    </div>
                ))}
            </div>
            <form className="comment-form" onSubmit={handleCommentSubmit}>
                <textarea
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button type="submit">Post Comment</button>
            </form>
        </div>
    );
}

export default CommentSection;