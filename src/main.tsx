import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { NoonThemeProvider } from '@kit/foundations/ThemeProvider';
import '@kit/foundations/global.css';
import './tokens.css';
import { GarminLineupPage } from './GarminLineupPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NoonThemeProvider className="web-root">
      <GarminLineupPage />
    </NoonThemeProvider>
  </StrictMode>,
);
