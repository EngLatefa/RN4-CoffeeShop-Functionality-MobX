import { decorate, observable, computed } from "mobx";
import { Item } from "native-base";

class CartStore {
  constructor() {
    this.items = [];
  }

  addItemToCart(newItem) {
    let CurrentItem = this.items.find(
      item => newItem.drink === item.drink && newItem.option === item.option
    );

    if (CurrentItem) {
      CurrentItem.quantity++;
    } else {
      this.items.push(newItem);
    }
  }

  removeItemFromCart(itemPassed) {
    this.items = this.items.filter(item => item !== itemPassed);
  }

  checkoutCart() {
    this.items = [];
    alert("Have A nice Day");
  }

  get itemCounter() {
    let total = 0;

    this.items.forEach(item => (total += item.quantity));
    return total;
  }
}

decorate(CartStore, {
  items: observable,
  itemCounter: computed
});

export default new CartStore();
