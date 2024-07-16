import React from 'react';
import './RainAnimation.css';

const RainAnimation = () => {
  return (
    <div className="rain-container">
      {[...Array(100)].map((_, i) => (
        <div key={i} className="rain-drop" style={{ '--i': i }}></div>
      ))}
    </div>
  );
};

export default RainAnimation;
