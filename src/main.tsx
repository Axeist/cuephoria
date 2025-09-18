import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import App from './App.tsx'
import './index.css'
import './App.css'

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <Analytics />
    <SpeedInsights />
    <App />
  </HelmetProvider>
);
