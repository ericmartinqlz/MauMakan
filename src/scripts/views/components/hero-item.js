class HeroItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <picture class="hero-img">
        <source media="(max-width: 600px)" type="image/webp" srcset="./images/heros/hero-image_2-small.webp">
        <source media="(max-width: 600px)" type="image/jpeg" srcset="./images/heros/hero-image_2-small.jpg">
        <source media="(max-width: 900px)" type="image/webp" srcset="./images/heros/hero-image_2-medium.webp">
        <source media="(max-width: 900px)" type="image/jpeg" srcset="./images/heros/hero-image_2-medium.jpg">
        <source type="image/webp" srcset="./images/heros/hero-image_2-large.webp">
        <source type="image/jpeg" srcset="./images/heros/hero-image_2-large.jpg">
        <img 
          src="./images/heros/hero-image_2-large.jpg">
        </img>
      </picture>
      <div class="container">
          <h1 tabindex="0">Cari informasi Restoran disini!</h1>
          <p tabindex="0">Informasi kuliner lengkap dari penjuru Nusantara</p>
      </div>
    `;
  }
}

customElements.define('hero-item', HeroItem);
