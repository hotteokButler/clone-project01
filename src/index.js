import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import './reset.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');

document.cookie = 'safeCookie1=foo; SameSite=Lax';
document.cookie = 'safeCookie2=foo';
document.cookie = 'crossCookie=bar; SameSite=None; Secure';

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
