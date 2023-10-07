import { ThemeProvider } from '@material-tailwind/react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../src/app/store.js';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <NextThemeProvider attribute="class" enableSystem={false}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </NextThemeProvider>
    </Provider>
  </BrowserRouter>
);
