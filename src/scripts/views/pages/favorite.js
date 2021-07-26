import '../components/restaurant-list';
import '../components/restaurant-detail';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { noDataTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <div class="content" id="restaurantContent">
          <h2 tabindex="0">Favorit</h2>
          <restaurant-list></restaurant-list>
        </div>
      `;
  },

  async afterRender() {
    const restaurantContent = document.querySelector('#restaurantContent');
    const restaurantList = document.querySelector('restaurant-list');

    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

      if (restaurants.length !== 0) {
        restaurantList.restaurants = restaurants;
      } else {
        restaurantContent.innerHTML += noDataTemplate();
      }
    } catch (error) {
      restaurantContent.innerHTML += noDataTemplate();
    }
  },
};

export default Favorite;
