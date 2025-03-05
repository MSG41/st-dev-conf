import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import '@amsterdam/design-system-assets/font/index.css';
import '@amsterdam/design-system-css/dist/index.css';
import '@amsterdam/design-system-tokens/dist/index.css';

import ClickSpark from './components/animatedComponents/clickSpark/clickSpark';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClickSpark
      sparkColor="#000000"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <App />
    </ClickSpark>
  </StrictMode>
);
