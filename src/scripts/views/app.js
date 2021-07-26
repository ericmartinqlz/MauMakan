import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, drawer, loader, hero, content, blackArea, navLinks,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._loader = loader;
    this._hero = hero;
    this._content = content;
    this._blackArea = blackArea;
    this._navLinks = navLinks;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      blackArea: this._blackArea,
      navLinks: this._navLinks,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    let { resource } = UrlParser.parseActiveUrlWithoutCombiner();
    if (resource === null) resource = 'home';

    // NavLink
    this._activeNav(resource);

    // Add Loader
    this._loader.classList.add('show');

    // Hero
    this._displayHero(resource);

    // Content
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    // Remove Loader
    this._loader.classList.remove('show');
  }

  _activeNav(resource) {
    this._navLinks.forEach((navLink) => {
      navLink.classList.remove('active');
    });

    if (resource !== 'detail') document.querySelector(`#nl-${resource}`).classList.add('active');
  }

  _displayHero(resource) {
    this._hero.style.display = 'flex';
    if (resource !== 'home') this._hero.style.display = 'none';
  }
}

export default App;
