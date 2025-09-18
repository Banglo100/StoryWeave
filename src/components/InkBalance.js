import React from 'react';

function InkBalance({ balance }) {
    return (
        <div className="ink-balance">
            <img src="/assets/icons/icon-ink.svg" alt="Ink Icon" className="ink-icon" />
            <span className="ink-amount">{balance}</span>
        </div>
    );
}

export default InkBalance;