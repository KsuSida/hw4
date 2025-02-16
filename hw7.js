var services = {
  Стрижка: '60 грн',
  Гоління: '80 грн',
  'Миття голови': '100 грн',
};
services['Розбити скло'] = '200 грн';

services.price = function () {
  let totalPrice = 0;
  for (let key in this) {
    if (typeof this[key] === 'string') {
      totalPrice += parseInt(this[key]);
    }
  }
  return totalPrice;
};

services.minPrice = function () {
  let min = Infinity;
  for (let key in this) {
    if (typeof this[key] === 'string') {
      let price = parseInt(this[key]);
      if (price < min) {
        min = price;
      }
    }
  }
  return min;
};

services.maxPrice = function () {
  let max = 0;
  for (let key in this) {
    if (typeof this[key] === 'string') {
      let price = parseInt(this[key]);
      if (price > max) {
        max = price;
      }
    }
  }
  return max;
};

console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice());
