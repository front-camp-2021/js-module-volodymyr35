import FiltersList from "../../filters-list/solution/index.js";

export default class SideBar {
  element;

  constructor(categoriesFilter = [], brandFilter = []) {
    this.categoriesFilter = categoriesFilter;
    this.brandFilter = brandFilter;

    this.render();
  }

  render() {
    const wrapper = document.createElement("aside");
    wrapper.classList.add("filters");

    const categories = new FiltersList({
      title: "Category",
      list: this.categoriesFilter,
    });
    const brands = new FiltersList({ title: "Brand", list: this.brandFilter });

    [categories, brands].forEach((filter) => {
      wrapper.append(filter.element);
    });

    this.element = wrapper;
  }

  remove() {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy() {
    this.remove();
    this.element = null;
  }
}
