class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="#/home" id="navBrand"><b>MauMakan</b></a>
      <button id="hamburgerButton" tabindex="0">☰</button>
      <div id="blackArea"></div>
      <div id="navigationDrawer">
        <ul>
          <li><a href="#/home" id="nl-home" class="nav-link">Home</a></li>
          <li><a href="#/favorite" id="nl-favorite" class="nav-link">Favorite</a></li>
          <li><a href="https://www.linkedin.com/in/eric-martin-965925195/" class="nav-link">About Us</a></li>
        </ul>
      </div>
    `;
  }
}

customElements.define('app-bar', AppBar);
