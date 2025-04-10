import React, { useEffect } from 'react';
import './ProgressBar.css';

const ProgressBar: React.FC = () => {
  useEffect(() => {
    const container = document.querySelector('.scrollContainer');
  
    const updateProgressBar = () => {
      const progressBar = document.querySelector('.progress-bar') as HTMLElement;
      const progressGif = document.querySelector('.progress-gif') as HTMLElement;
      if (!progressBar || !progressGif) return;
  
      let scrollTop: number, clientHeight: number, scrollHeight: number;
      if (container) {
        const scrollEl = container as HTMLElement;
        scrollTop = scrollEl.scrollTop;
        clientHeight = scrollEl.clientHeight;
        scrollHeight = scrollEl.scrollHeight;
      } else {
        scrollTop = window.scrollY;
        clientHeight = window.innerHeight;
        scrollHeight = document.documentElement.scrollHeight;
      }
  
      const maxScroll = scrollHeight - clientHeight;
      const percentage = maxScroll ? (scrollTop / maxScroll) * 100 : 0;
      progressBar.style.width = `${percentage}%`;
      progressGif.style.left = `${percentage}%`;
    };
  
    if (container) {
      container.addEventListener('scroll', updateProgressBar);
    } else {
      window.addEventListener('scroll', updateProgressBar);
    }
    window.addEventListener('resize', updateProgressBar);
  
    // Watch for changes in scrollContainer
    let observer: MutationObserver | null = null;
    if (container) {
      observer = new MutationObserver(() => updateProgressBar());
      observer.observe(container, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      });
    }
  
    updateProgressBar();
  
    return () => {
      if (container) {
        container.removeEventListener('scroll', updateProgressBar);
      } else {
        window.removeEventListener('scroll', updateProgressBar);
      }
      window.removeEventListener('resize', updateProgressBar);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="progress-container">
      <div className="progress-bar"></div>
      <img src="/output2.gif" alt="Progress animation" className="progress-gif" />
    </div>
  );
};

export default ProgressBar;