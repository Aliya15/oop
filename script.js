class AbstractProduct {
  calculatePrice() {
    throw "Please, implement the method";
  }

  calculateCalories() {
    throw "Please, implement the method";
  }
}

class Hamburger extends AbstractProduct {
  SIZE_SMALL = "small";
  SIZE_LARGE = "large";

  SIZE_SMALL_PRICE = 50;
  SIZE_LARGE_PRICE = 100;

  SIZE_SMALL_CCAL = 20;
  SIZE_LARGE_CCAL = 40;

  STUFFING_CHEESE = "cheese";
  STUFFING_SALAD = "salad";
  STUFFING_POTATO = "potato";

  STUFFING_CHEESE_PRICE = 10;
  STUFFING_SALAD_PRICE = 20;
  STUFFING_POTATO_PRICE = 20;

  STUFFING_CHEESE_CCAL = 10;
  STUFFING_SALAD_CCAL = 20;
  STUFFING_POTATO_CCAL = 20;

  size;
  stuffing;

  constructor(size, stuffing) {
    super();

    if (size !== this.SIZE_LARGE && size !== this.SIZE_SMALL) {
      throw new Error("Choose the size of your hamburger");
    } else if (
      stuffing &&
      ![this.STUFFING_CHEESE, this.STUFFING_POTATO, this.STUFFING_SALAD].find(
        stuffing
      )
    ) {
      throw new Error("Invalid stuffing");
    }

    this.size = size;
    this.stuffing = stuffing;
  }

  getSize() {
    return this.size;
  }

  getStuffing() {
    return this.stuffing;
  }

  calculatePrice() {
    let price = 0;

    if (this.size === this.SIZE_SMALL) {
      price += this.SIZE_SMALL_PRICE;
    } else if (this.size === this.SIZE_LARGE) {
      price += this.SIZE_LARGE_PRICE;
    }

    if (this.stuffing === this.STUFFING_CHEESE) {
      price += this.STUFFING_CHEESE_PRICE;
    } else if (this.stuffing === this.STUFFING_POTATO) {
      price += this.STUFFING_POTATO_PRICE;
    } else if (this.stuffing === this.STUFFING_SALAD) {
      price += this.STUFFING_SALAD_PRICE;
    }

    return price;
  }

  calculateCalories() {
    let calories = 0;

    if (this.size === this.SIZE_SMALL) {
      calories += this.SIZE_SMALL_CCAL;
    } else if (this.size === this.SIZE_LARGE) {
      calories += this.SIZE_LARGE_CCAL;
    }

    if (this.stuffing === this.STUFFING_CHEESE) {
      calories += this.STUFFING_CHEESE_CCAL;
    } else if (this.stuffing === this.STUFFING_POTATO) {
      calories += this.STUFFING_POTATO_CCAL;
    } else if (this.stuffing === this.STUFFING_SALAD) {
      calories += this.STUFFING_SALAD_CCAL;
    }

    return calories;
  }
}

class Salad extends AbstractProduct {
  CAESAR_PRICE = 1;
  CAESAR_CCAL = 1;
  OLIVYE_PRICE = 0.5;
  OLIVYE_CCAL = 0.8;

  OLIVYE = "olivye";
  CAESAR = "caesar";

  salad;
  size;

  constructor(salad, size) {
    super();

    if (salad !== this.OLIVYE && salad !== this.CAESAR) {
      throw new Error("Invalid salad");
    } else if (isNaN(size) || size < 0) {
      throw new Error("Invalid size");
    }

    this.salad = salad;
    this.size = size;
  }

  getSize() {
    return this.size;
  }

  getSalad() {
    return this.salad;
  }

  calculatePrice() {
    let price = 0;
    if (this.salad === this.OLIVYE) {
      price += this.OLIVYE_PRICE * this.size;
    } else if (this.salad === this.CAESAR) {
      price += this.CAESAR_PRICE * this.size;
    }

    return price;
  }

  calculateCalories() {
    let calories = 0;

    if (this.salad === this.OLIVYE) {
      calories += this.OLIVYE_CCAL * this.size;
    } else if (this.salad === this.CAESAR) {
      calories += this.CAESAR_CCAL * this.size;
    }

    return calories;
  }
}

class Drink extends AbstractProduct {
  COLA_PRICE = 50;
  COLA_CCAL = 40;
  COFFEE_PRICE = 80;
  COFFEE_CCAL = 20;

  COLA = "cola";
  COFFEE = "coffee";

  drink;

  constructor(drink) {
    super();

    if (drink !== this.COLA && drink !== this.COFFEE) {
      throw new Error("Choose the size of your hamburger and the stuffing");
    }

    this.drink = drink;
  }

  getDrink() {
    return this.drink;
  }

  calculatePrice() {
    let price = 0;

    if (this.drink === this.COLA) {
      price += this.COLA_PRICE;
    } else if (this.drink === this.COFFEE) {
      price += this.COFFEE_PRICE;
    }

    return price;
  }

  calculateCalories() {
    let calories = 0;

    if (this.drink === this.COLA) {
      calories += this.COLA_CCAL;
    } else if (this.drink === this.COFFEE) {
      calories += this.COFFEE_CCAL;
    }

    return calories;
  }
}

class Order {
  _products = [];

  constructor(...args) {
    if (
      Array.isArray(args) &&
      args.every((arg) => arg.prototype instanceof AbstractProduct)
    ) {
      throw "Invalid product type";
    }

    this._products = args;
  }

  getAccPrice() {
    return this._products.reduce(
      (acc, cur) => (acc += cur.calculatePrice()),
      0
    );
  }

  getAccCalories() {
    return this._products.reduce(
      (acc, cur) => (acc += cur.calculateCalories()),
      0
    );
  }
}

h1 = new Salad("olivye", 150);
h2 = new Drink("cola");
let order = new Order(h1, h2);
order.getAccCalories();

console.log(h1.getSalad());
console.log(h1.calculatePrice());
console.log(h1.calculateCalories());
console.log(h2.getDrink());
console.log(h2.calculatePrice());
console.log(h2.calculateCalories());
console.log(order.getAccCalories());
console.log(order.getAccPrice());
