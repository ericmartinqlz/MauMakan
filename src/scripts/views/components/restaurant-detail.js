import CONFIG from '../../globals/config';
import DetailInitiator from '../../utils/detail-initiator';

class RestaurantDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="detail-head">
        <picture>
          <source media="(max-width: 600px)" srcset="${CONFIG.BASE_SMALL_IMAGE_URL + this._restaurant.pictureId}">
          <source media="(max-width: 900px)" srcset="${CONFIG.BASE_MEDIUM_IMAGE_URL + this._restaurant.pictureId}">
          <img 
            src="${CONFIG.BASE_LARGE_IMAGE_URL + this._restaurant.pictureId}" alt="Restaurant ${this._restaurant.name}">
          </img>
        </picture>
        <h2 tabindex="0">${this._restaurant.name}</h2>
      </div>

      <div class="detail-body">
        <h2 tabindex="0">${this._restaurant.name}</h2>
        <section class="info">
          <h3 tabindex="0">Informasi</h3>
          <table>
            <tr tabindex="0">
              <th>Kategori</th>
              <td>:</td>
              <td>${DetailInitiator.initCategory(this._restaurant.categories)}</td>
            </tr>
            <tr tabindex="0">
              <th>Alamat</th>
              <td>:</td>
              <td>${this._restaurant.address}, ${this._restaurant.city}</td>
            </tr>
            <tr tabindex="0">
              <th>Rating</th>
              <td>:</td>
              <td class="rating">${DetailInitiator.initRating(this._restaurant.rating)}</td>
            </tr>
          </table>
        </section>
        <section class="desc">
          <h3 tabindex="0">Deskripsi</h3>
          <p tabindex="0">${this._restaurant.description}</p>
        </section>
        <section class="menu">
          <h3 tabindex="0">Menu</h3>
          <div class="menu-cont">
            <div class="menu-food">
              <h4 tabindex="0">Makanan</h4>
              <ul tabindex="0">
                ${DetailInitiator.initMenu(this._restaurant.menus.foods)}
              </ul>
            </div>
            <div class="menu-drink">
              <h4 tabindex="0">Minuman</h4>
              <ul tabindex="0">
                ${DetailInitiator.initMenu(this._restaurant.menus.drinks)}
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div id="likeButtonContainer"></div>

      <div class="detail-form">
        <h3 tabindex="0">Tambah Review</h3>
        <review-form></review-form>
      </div>

      <div class="detail-review">
        <h3 tabindex="0">Customer Review</h3>
        <review-list></review-list>
      </div>
    `;

    const reviewListElement = document.querySelector('review-list');
    reviewListElement.reviews = this._restaurant.customerReviews;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
