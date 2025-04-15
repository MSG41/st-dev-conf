import { useState, useEffect, JSX } from 'react';
import App from './App';
import ClickSpark from './components/animatedComponents/clickSpark/clickSpark';

export function ThemedApp(): JSX.Element {
  const [isDark, setIsDark] = useState(
    document.body.classList.contains('dark-theme')
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains('dark-theme'));
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <ClickSpark
      sparkColor={isDark ? '#ffffff' : '#333333'}
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <App />
    </ClickSpark>
  );
}
