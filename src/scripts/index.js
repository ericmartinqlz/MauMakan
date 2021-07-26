import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import './views/components/app-bar';
import './views/components/hero-item';
import App from './views/app';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  loader: document.querySelector('#loader'),
  hero: document.querySelector('#hero'),
  content: document.querySelector('#mainContent'),
  blackArea: document.querySelector('#blackArea'),
  navLinks: document.querySelectorAll('.nav-link'),
});

window.addEventListener('hashchange', () => {
  if (window.location.hash !== '#mainContent') {
    app.renderPage();
  }
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
