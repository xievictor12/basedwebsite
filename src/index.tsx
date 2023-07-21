import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';

//FONTS
import './assets/fonts/Bodoni/Bodoni Bold Cyrillic.otf'
import './assets/fonts/Bodoni/Bodoni Cyrillic.otf'
import './assets/fonts/Gotham/Gotham-Medium.otf'
import './assets/fonts/Gotham/Gotham-Light.otf'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
