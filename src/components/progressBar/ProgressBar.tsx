import React, { useEffect } from 'react';
import './ProgressBar.css';

const ProgressBar: React.FC = () => {
  useEffect(() => {
    const updateProgressBar = () => {
      const progressBar = document.querySelector(
        '.progress-bar'
      ) as HTMLElement;
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = `${scrollPercent}%`;
    };

    window.addEventListener('scroll', updateProgressBar);
    window.addEventListener('resize', updateProgressBar);

    // Initial update to fix some issues with mobile browsers with a thick or dynamic url bar..
    updateProgressBar();

    return () => {
      window.removeEventListener('scroll', updateProgressBar);
      window.removeEventListener('resize', updateProgressBar);
    };
  }, []);

  return (
    <div className="progress-container">
      <div className="progress-bar"></div>
    </div>
  );
};

export default ProgressBar;
