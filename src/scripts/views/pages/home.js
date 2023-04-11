import TheRestaurantSource from '../../data/restaurantdb-source';
import { createRestaurantsTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div tabindex="0" aria-label="">
        <picture tabindex="0">
        <source class="lazyload" type="image/webp" srcset="./images/heros/hero-image_2.webp">
        <img class="hero lazyload" src="./images/heros/hero-image_2-large.jpg" width=100% 
             alt="kingdom heart 3 poster">
       </picture>
        </div>
        <section class="content">
          <div class="explore">
            <div class="explore-label">
              <h1 tabindex="0">Explore Restaurant</h1>
              <div class="posts" id="posts">
              </div>
            </div>
          </div>
        </section>
        `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantSource.PageHome();
    const restaurantContainer = document.querySelector('#posts');
    if (restaurants.length < 1) {
      restaurantContainer.innerHTML = '<div class="resto-item__not__found">Tidak ada Restaurant untuk ditampilkan</div>';
    } else {
      restaurants.forEach((resto) => {
        restaurantContainer.innerHTML += createRestaurantsTemplate(resto);
      });
    }
  },
};

export default Home;
