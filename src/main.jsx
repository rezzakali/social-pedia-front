import { ThemeProvider } from '@material-tailwind/react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextThemeProvider attribute="class">
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </NextThemeProvider>
);
