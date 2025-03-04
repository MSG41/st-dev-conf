import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import '@amsterdam/design-system-assets/font/index.css';
import '@amsterdam/design-system-css/dist/index.css';
import '@amsterdam/design-system-tokens/dist/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
