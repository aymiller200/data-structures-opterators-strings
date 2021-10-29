/* 
!Enhanced object literals
  * ES6 introduced three ways to write object literals easier
*/
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  //? Can compute property names
  [`day-${2+4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
}

const restaurant = {
  //object literal -> literally writing an object in our code
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //? ES6 enhanced object literals
  openingHours,

  //? ES6 enhanced methods: No longer need function keyword or the colon
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    //can also set default values for object destructuring in the parameters
    console.log(
      'ORDER DELIVERY OBJECT -->',
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    )
  },

  //SPREAD
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}`)
  },

  //REST
  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng)
    console.log(otherIng)
  },
}