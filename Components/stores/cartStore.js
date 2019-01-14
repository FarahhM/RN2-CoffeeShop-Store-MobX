import { decorate, observable, computed } from "mobx";

class CartStore {
  constructor() {
    this.items = null;
  }
}

decorate(CartStore, {
  items: observable
});

const cartStore = new CartStore();

export default cartStore;
