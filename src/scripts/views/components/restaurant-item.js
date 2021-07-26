import CONFIG from '../../globals/config';

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="#/detail/${this._restaurant.id}">
        <div class="card-head">
          <picture>
            <source media="(max-width: 700px)" srcset="${CONFIG.BASE_SMALL_IMAGE_URL + this._restaurant.pictureId}">
            <img 
              class="lazyload"
              data-src="${CONFIG.BASE_MEDIUM_IMAGE_URL + this._restaurant.pictureId}" 
              alt="Restaurant ${this._restaurant.name}">
            </img>
          </picture>
          <p>${this._restaurant.city}</p>
        </div>
        <div class="card-body">
            <h3>${this._restaurant.name}</h3>
          <p class="bot"><small>Rating : ${this._restaurant.rating}</small></p>
          <p class="top">${this._restaurant.description}</p>
        </div>
      </a>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
