import React, { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollPercent(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${scrollPercent}%` }}></div>
    </div>
  );
};

export default ProgressBar;