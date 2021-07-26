import '../components/restaurant-list';
import '../components/restaurant-detail';
import RestaurantSource from '../../data/restaurant-source';
import { noDataTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="content" id="restaurantContent">
          <h2 tabindex="0">Restoran</h2>
          <restaurant-list></restaurant-list>
        </div>
      `;
  },

  async afterRender() {
    const restaurantContent = document.querySelector('#restaurantContent');
    const restaurantList = document.querySelector('restaurant-list');

    try {
      const restaurants = await RestaurantSource.listRestaurant();

      if (restaurants.length !== 0) {
        restaurantList.restaurants = restaurants;
      } else {
        restaurantContent.innerHTML += noDataTemplate();
      }
    } catch (error) {
      console.log(error);
      restaurantContent.innerHTML += noDataTemplate();
    }
  },
};

export default Home;
