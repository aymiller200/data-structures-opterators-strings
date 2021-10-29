const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    //can also set default values for object destructuring in the parameters
    console.log(
      'ORDER DELIVERY OBJECT -->',
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    )
  },

  //SPREAD
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`)
  },

  //REST
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng)
    console.log(otherIng)
  },
}

/* 
!Optional Chaining (.?)
  * ES2020 introduced this optional chaining
  * With optional chaining, if a certain property does not exist then undefined is returned immediately and avoid an error
*/


// ? WITHOUT optional chaining:
if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// ? WITH optional chaining: 
// ? Only if the property BEFORE the question mark exists, then the next property will be read, but if not then immediately undefined is returned.
console.log(restaurant.openingHours.mon?.open);

//?Can have multiple optional chaining
console.log(restaurant.openingHours?.mon?.open);

//Example: 
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

for(const day of days){
  const open = restaurant.openingHours[day]?.open ?? 'closed'
  console.log(`On ${day}, we open at ${open}`);
}

//? Optional Chaining on Methods
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');

console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist'); //Method does not exist

//? Optional chaining with arrays
const users = [
  {name: 'Ayanna', age: '27'}
]

console.log(users[0]?.name ?? 'User Array Empty');
