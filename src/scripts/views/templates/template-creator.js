import CONFIG from '../../globals/config';

const createRestaurantsTemplate = (resto) => `
<article class="post-item" >
<img tabindex = 0 class="lazyload thumbnail" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}">
<div class="post-item-body">
  <h6 tabindex = 0>Rating ${resto.rating} (${resto.city})</h6>
  <h1 class="name" id="resto__title"><a tabindex = 0 href="#/detail/${resto.id}">${resto.name}</a></h1>
  <p tabindex = 0 class="description">${resto.description}
  </p>
</div>
</article>
`;

const createRestaurantsDetail = (resto) => `
<div class="resto-image">
<img tabindex=0 class="resto__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" width=100% alt="${resto.name}" />
</div>
<div class="resto-detail">
    <h1 tabindex = 0 class="resto__title">${resto.name}</h1>
    <h3 tabindex = 0>Rating ${resto.rating}</h3>
    <div class="resto-info">
        <h3 tabindex = 0>Description</h3>
        <p tabindex = 0>${resto.description}</p>
    </div>
    <div class="resto-info">
        <p tabindex = 0>Lokasi : ${resto.city}</p>
    </div>
    <div id="food-menu" class="menu">
    <h1 tabindex = 0>Menu Makanan</h1>
    </div>
    <div id="drink-menu" class="menu">
    <h1 tabindex = 0>Menu Minuman</h1>
    </div>
    <div id="review" class="menu">
    <h1 tabindex = 0>Pendapat Mereka</h1>
    </div>

</div>
`;

const createLikeRestoButtonTemplate = () => `
  <button tabindex = 0 aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button tabindex = 0 aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantsTemplate,
  createRestaurantsDetail,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
