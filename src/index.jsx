import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

if (typeof document !== 'undefined') {
  const rootElement = document.getElementById('root');
  const root = createRoot(rootElement);
  root.render(<App />);
}
