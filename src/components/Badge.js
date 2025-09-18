import React from 'react';
import Tooltip from './Tooltip'; // Assuming the Tooltip component is in the same folder

function Badge({ badge }) {
    return (
        <Tooltip text={badge.name}>
            <img src={badge.iconUrl} alt={badge.name} className="badge-icon" />
        </Tooltip>
    );
}

export default Badge;