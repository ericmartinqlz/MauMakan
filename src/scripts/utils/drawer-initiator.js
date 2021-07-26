const DrawerInitiator = {
  init({
    button, drawer, content, blackArea, navLinks,
  }) {
    button.addEventListener('click', (event) => {
      this._openElement(event, drawer);
      this._openElement(event, blackArea);
      this._openElement(event, document.body);
    });

    content.addEventListener('click', (event) => {
      this._closeElement(event, drawer);
      this._closeElement(event, blackArea);
      this._closeElement(event, document.body);
    });

    blackArea.addEventListener('click', (event) => {
      this._closeElement(event, drawer);
      this._closeElement(event, blackArea);
      this._closeElement(event, document.body);
    });

    navLinks.forEach((navLink) => {
      navLink.addEventListener('click', (event) => {
        this._closeElement(event, drawer);
        this._closeElement(event, blackArea);
        this._closeElement(event, document.body);
      });
    });
  },

  _openElement(event, element) {
    event.stopPropagation();
    element.classList.toggle('open');
  },

  _closeElement(event, element) {
    event.stopPropagation();
    element.classList.remove('open');
  },
};

export default DrawerInitiator;
