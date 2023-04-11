import TheRestaurantSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import { createRestaurantsDetail } from '../templates/template-creator';
import FavoriteRestoIdb from '../../data/favorite-menu-idb';

const Detail = {
  async render() {
    return `
    <div id='resto' class='resto'></div>
    <div id='likeButtonContainer'></div>
        `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheRestaurantSource.detailResto(url.id);
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.restaurant.id,
        city: resto.restaurant.city,
        name: resto.restaurant.name,
        pictureId: resto.restaurant.pictureId,
        rating: resto.restaurant.rating,
        description: resto.restaurant.description,
      },
    });
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = createRestaurantsDetail(resto.restaurant);
    const foodMenu = document.querySelector('#food-menu');
    const reviewContainer = document.querySelector('#review');
    const drinkContainer = document.querySelector('#drink-menu');
    const Myfoods = resto.restaurant.menus.foods;
    const drinksMenus = resto.restaurant.menus.drinks;
    const review = resto.restaurant.customerReviews;
    Myfoods.forEach((menu) => {
      foodMenu.innerHTML += `
      <ul>
        <li tabindex = 0>${menu.name}</li>
      </ul>
      `;
    });
    drinksMenus.forEach((menu) => {
      drinkContainer.innerHTML += `
      <ul>
        <li tabindex = 0>${menu.name}</li>
      </ul>
      `;
    });
    review.forEach((reviewMessage) => {
      reviewContainer.innerHTML += `
      <div class="review-detail">
        <h3 tabindex = 0>${reviewMessage.name}</h3>
        <p tabindex = 0>${reviewMessage.review}</p>
        <p tabindex = 0>${reviewMessage.date}</p>
      </div>
      `;
    });
  },
};

export default Detail;
