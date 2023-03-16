import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
var head = document.getElementsByTagName('HEAD')[0]; 
var link  = document.createElement('link'); 
link.rel = "stylesheet"; 
link.href = "https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap";
var link2  = document.createElement('link'); 
link2.rel = "stylesheet"; 
link2.href = "https://fonts.googleapis.com/css2?family=Rubik&display=swap";
head.appendChild(link);
head.appendChild(link2);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
