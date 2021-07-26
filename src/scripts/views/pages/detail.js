import '../components/review-form';
import '../components/review-list';
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { noDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
        <restaurant-detail></restaurant-detail>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailContainer = document.querySelector('restaurant-detail');

    try {
      const detail = await RestaurantSource.detailRestaurant(url.id);
      detailContainer.restaurant = detail;

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: detail.id,
          name: detail.name,
          description: detail.description,
          pictureId: detail.pictureId,
          city: detail.city,
          rating: detail.rating,
        },
      });
    } catch (error) {
      detailContainer.innerHTML += noDetailTemplate();
    }
  },
};

export default Detail;
