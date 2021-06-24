import React from 'react';
import './style.css'
const PulsingDot = () => {
    return (
        <svg width="50" height="50" viewBox="0 0 90 90">
            <circle id="ring" r="45" cx="45" cy="45" fill="#03b1fc" />
            <circle id="dot" r="12" cx="45" cy="45" fill="#0f98d4" />
        </svg>
    );
};

export default PulsingDot;
