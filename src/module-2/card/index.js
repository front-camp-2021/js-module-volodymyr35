export default class Card {
  element;

  constructor({
    id = "",
    images = [],
    title = "",
    rating = 0,
    price = 0,
    category = "",
    brand = "",
  } = {}) {
    this.id = id;
    this.images = images;
    this.title = title;
    this.rating = rating;
    this.price = price;
    this.category = category;
    this.brand = brand;

    this.render();
  }

  render() {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="card__inner">
        <div class="card__img">
          <img src="${this.images[0]}" alt="product" />
        </div>
        <div class="card__details">
          <div class="card__rate-and-price">
            <button class="card__product--rate">${this.rating}&nbsp;
              <img class="card__rate" src="./icons/star.svg" alt="">
            </button>
            <span class="card__price">₴${this.price}</span>
          </div>
          <h4 class="card__title">${this.title}</h4>
          <p class="card__info">Redesigned from scratch and completely revised.</p>
        </div>
      </div>
      <div class="card__actions">
        <button class="card__btn">
          <img class="card__icon" src="./icons/heart.svg" alt="">&nbsp;Wishlist
        </button>
        <button class="card__btn card__btn--primary">
          <img class="card__icon" src="./icons/shopping-bag.svg" alt="">&nbsp;Add to cart
        </button>
      </div>
    `;

    this.element = card;
  }

  destroy() {
    this.element = null;
  }
}
