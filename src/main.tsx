import './index.css';

import About from './components/About';
import App from './App.tsx';
import Contributors from './components/Contributors';
import Header from './components/Header';
import Library from './components/Library';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
