import '@amsterdam/design-system-assets/font/index.css';
import '@amsterdam/design-system-css/dist/index.css';
import '@amsterdam/design-system-tokens/dist/index.css';
import './index.scss';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ProgressBar from './components/progressBar/ProgressBar';
import { ThemedApp } from './themedApp';

function setViewportHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setViewportHeight();
window.addEventListener('resize', setViewportHeight);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProgressBar />
    <ThemedApp />
  </StrictMode>
);
