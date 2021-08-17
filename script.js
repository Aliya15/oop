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

  constructor(size, stuffing) {
    super();
    this.size = size;
    this.stuffing = stuffing;
    _price = 0;
    _calories = 0;
  }

  getSize() {
    return this.size;
  }
  getStuffing() {
    return this.stuffing;
  }
  calculatePrice(_price) {
    if (!size || !stuffing) {
      throw new Error("Choose the size of your hamburger and the stuffing");
    }

    if (this.size === this.SIZE_SMALL) {
      _price += this.SIZE_SMALL_PRICE;
    } else if (this.size === this.SIZE_LARGE) {
      _price += this.SIZE_LARGE_PRICE;
    }

    if (this.stuffing === this.STUFFING_CHEESE) {
      _price += this.STUFFING_CHEESE_PRICE;
    } else if (this.stuffing === this.STUFFING_POTATO) {
      _price += this.STUFFING_POTATO_PRICE;
    } else if (this.stuffing === this.STUFFING_SALAD) {
      _price += this.STUFFING_SALAD_PRICE;
    }

    return _price;
  }

  calculateCalories(_calories) {
    if (!size || !stuffing) {
      throw new Error("Choose the size of your hamburger and the stuffing");
    }
    if (this.size === this.SIZE_SMALL) {
      _calories += this.SIZE_SMALL_CCAL;
    } else if (this.size === this.SIZE_LARGE) {
      _calories += this.SIZE_LARGE_CCAL;
    }

    if (this.stuffing === this.STUFFING_CHEESE) {
      _calories += this.STUFFING_CHEESE_CCAL;
    } else if (this.stuffing === this.STUFFING_POTATO) {
      _calories += this.STUFFING_POTATO_CCAL;
    } else if (this.stuffing === this.STUFFING_SALAD) {
      _calories += this.STUFFING_SALAD_CCAL;
    }

    return _calories;
  }
}

class Salad extends AbstractProduct {
  CAESAR_PRICE = 1;
  CAESAR_CCAL = 1;
  OLIVYE_PRICE = 0.5;
  OLIVYE_CCAL = 0.8;

  OLIVYE = "olivye";
  CAESAR = "caesar";

  constructor(salad, size) {
    super();
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
    if (!size || !stuffing) {
      throw new Error("Choose the size of your hamburger and the stuffing");
    }
    let _price = 0;
    if (this.salad === this.OLIVYE) {
      _price += this.OLIVYE_PRICE * this.size;
    } else if (this.salad === this.CAESAR) {
      _price += this.CAESAR_PRICE * this.size;
    }

    return _price;
  }
  calculateCalories() {
    let _calories = 0;
    if (!size || !stuffing) {
      throw new Error("Choose the size of your hamburger and the stuffing");
    }
    if (this.salad === this.OLIVYE) {
      _calories += this.OLIVYE_CCAL * this.size;
    } else if (this.salad === this.CAESAR) {
      _calories += this.CAESAR_CCAL * this.size;
    }

    return _calories;
  }
}

class Drink extends AbstractProduct {
  COLA_PRICE = 50;
  COLA_CCAL = 40;
  COFFEE_PRICE = 80;
  COFFEE_CCAL = 20;

  COLA = "cola";
  COFFEE = "coffee";

  constructor(drink) {
    super();
    this.drink = drink;
  }
  getDrink() {
    return this.drink;
  }
  calculatePrice() {
    if (!size || !stuffing) {
      throw new Error("Choose the size of your hamburger and the stuffing");
    }
    let _price = 0;

    if (this.drink === this.COLA) {
      _price += this.COLA_PRICE;
    } else if (this.drink === this.COFFEE) {
      _price += this.COFFEE_PRICE;
    }

    return _price;
  }
  calculateCalories() {
    if (!size || !stuffing) {
      throw new Error("Choose the size of your hamburger and the stuffing");
    }
    let _calories = 0;

    if (this.drink === this.COLA) {
      _calories += this.COLA_CCAL;
    } else if (this.drink === this.COFFEE) {
      _calories += this.COFFEE_CCAL;
    }

    return _calories;
  }
}

class Order {
  _products = [];
  constructor(...args) {
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
