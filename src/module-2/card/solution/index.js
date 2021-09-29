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

  getTemplate() {
    return `
      <div class="card__inner" data-element="body">
        <div class="card__img">
          <img src="${this.images[0]}" alt="product" />
        </div>
        <div class="card__details">
          <div class="card__rate-and-price">
            <button class="card__product--rate">${this.rating}&nbsp;
              <i class="bi bi-star"></i>
            </button>
            <span class="card__price">₴${this.price}</span>
          </div>
          <h4 class="card__title">${this.category}</h4>
          <p class="card__info">${this.title}</p>
        </div>
      </div>
      <div class="card__actions">
        <button class="card__btn">
          <i class="bi bi-heart os-product-wish-icon"></i>&nbsp;Wishlist
        </button>
        <button class="card__btn card__btn--primary">
          <i class="bi bi-box-seam os-product-shopping-bag"></i>&nbsp;Add to cart
        </button>
      </div>
    `;
  }

  render() {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = this.getTemplate();

    this.element = card;
  }

  remove () {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy() {
    this.remove();
    this.element = null;
  }
}
