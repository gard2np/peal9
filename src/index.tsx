import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) -> 컨테이너를 non-null로 표시합니다.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
