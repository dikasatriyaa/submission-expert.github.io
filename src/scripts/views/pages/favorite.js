import FavoriteRestoIdb from '../../data/favorite-menu-idb';
import { createRestaurantsTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <div class="hero" tabindex="0" aria-label="">
        </div>
        <section class="content">
          <div class="explore">
            <div class="explore-label">
              <h1 tabindex="0">Favorite Restaurant</h1>
              <div class="favorite-item" id="favorite-item">
              </div>
            </div>
          </div>
        </section>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllresto();
    const restaurantContainer = document.querySelector('#favorite-item');
    if (restaurants.length < 1) {
      restaurantContainer.innerHTML = '<div class="resto-item__not__found">Tidak ada Restaurant yang anda sukai</div>';
    } else {
      restaurants.forEach((resto) => {
        restaurantContainer.innerHTML += createRestaurantsTemplate(resto);
      });
    }
  },
};

export default Favorite;
