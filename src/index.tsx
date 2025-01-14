import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'modern-normalize';
import App from './components/App/App.js';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
