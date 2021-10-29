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
!Short Circuiting (&& and ||)

* || -> will return the first truthy value value of all the operands or the last value if all of them are falsy
      ? Can use || to set default values
* && -> will return the first falsy value, or the last if all of the operands are truthy
      ? Can use && to execute code in the second operand if the first one is true.
  * Three properties of logical operators: 
        ? Can use ANY data type
        ? Can return ANY data type
        ? They do something called short-circuiting (Short circuit evaluation)
              *If the first operand is a Truthy operand, it will immediately return that value.
  *When it comes to short-circuit evaluation, the && operator works in the opposite way of the || operator
*/
//! && (And)
// ? && operator short circuits when the value is falsy. and returns that falsy value.
// ? When the first value is thruthy, the last value is evaluated and returned
// ? && is only true when all the operands are true. If the first is false, that means the whole thing is false.
console.log(0 && 'Ayanna') // 0
console.log(7 && 'Ayanna') // 'Ayanna'

console.log('Hello' && 23 && null && 'Ayanna') // null

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach')
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')

//! || (or)
console.log('----OR----')
console.log(3 || 'Ayanna') //3
console.log('' || 'Ayanna') //Ayanna
console.log(true || 0) // true
console.log(undefined || null) // null
console.log(undefined || 0 || '' || 'Hello' || 23 || null) // 'Hello' <- first truthy value in this list of || operations.

restaurant.numGuests = 23 //if this is zero, the shor circuit would return 10 since 0 is a falsy value
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10
console.log(guest1) // <- default value of 10 because numGuests doesn't exist on the restaurant object
//Can short  circuit this with the || operator:
const guest2 = restaurant.numGuests || 10
console.log(guest2)

///////////////////////////////////////////////////////////////////////////////////

/* 
!The Nullish Coalescing Operator (??)
  * Works with the idea or concept of nullish values rather than falsy values
  * Nullish values: Null and Undefined (NOT 0 or ' ')
  * Only nullish values will short circuit the evaluation
  * If the first operand is undefined it returns the second operand
*/

restaurant.numGuests = 0
const guestCorrect = restaurant.numGuests ?? 10
console.log(guestCorrect) //Correctly returns 0
