
/* 
!REST PATTERN AND REST PARAMETERS
  * Similar Syntax, but does the opposite of the Spread operator

  * Uses the exact same syntax to collect multiple elements and condense them into array

  * Called 'rest' because it will take the rest of, or the remaining elements of an array and then put them into a new array

  *Collects all of the other elements AFTER the last variable

  *There can only be one rest in any destructuring assignment
*/

//DESTRUCTURING with REST
//? Spread, because on RIGHT side of =
const arrTwo = [1, 2, ...[3, 4]]

//? REST, because on LEFT side of =
const [u, g, ...others] = [1, 2, 3, 4, 5]
console.log(u, g, others) //[1, 2, [3, 4, 5]]

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

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]
console.log(pizza, risotto, otherFood) // Pizza, Risotto [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

//Rest with objects:
//we took sat into its own variable, and collected the rest of the weekdays into their own variable
const { sat, ...weekdays } = restaurant.openingHours
console.log(weekdays) // {thu: {}, fri: {}}

//FUNCTIONS with REST
//                   rest parameters
const add = function (...numbers) {
  let sum = 0
  for (let i = 0; i < numbers.length; i++) sum += numbers[i]
  console.log(sum)
}

//Taking all of these arguments and packing them into an array
add(2, 3)
add(5, 3, 7, 2)
add(8, 2, 5, 3, 2, 1, 4)

const x = [23, 5, 7]
add(...x)

restaurant.orderPizza('pineapple', ' vegan pepperoni', 'artichokes', 'garlic')
//pineapple = mainIng
//' vegan pepperoni', 'artichokes', 'garlic' = ...otherIng
restaurant.orderPizza('pineapple')
//pineapple = mainIng
// [] =  otherIng



/* 
!SPREAD OPERATOR 
  * SPREAD OPERATORS WORK ON ALL ITERABLES: 
        ? Strings, 
        ? Arrays, 
        ? Maps, 
        ? Sets
        ? NOT OBJECTS
  * We can use the spread operator to expand an array into all it's elements. Unpacking all or the array at once.
  * We use the spread operator whenever we would otherwise write multiple values separated by commas.
        ? First situation in which it is useful is when we write an array literal like below. 
        ? Second situation in which it is useful is when we pass arguments into functions.
  * Whenever we need  the elements of an array individually we use the spread oeprator. 
  * Spread operator does not work with template strings. Multiple values separated by a comma are usually only expected when we pass arguments into a function, or when we make a new array
!Difference Between Spread Operator and Destructuring and Array: 
  * The Spread operator takes ALL the elements from the array, and it also doesn't create new variables, as a consequence we can only use it in places where we would otherwise write values separated by commas.
*/

const arrOne = [7, 8, 9]
const badNewArr = [1, 2, arrOne[0], arrOne[1], arrOne[2]]
console.log(badNewArr) // [1, 2, 7, 8, 9]

const newArr = [1, 2, ...arr] //Spread operator takes all the values out of the 'arr' array and then write them individually into the 'newArr'
console.log(newArr)

console.log(...newArr) // 1, 2, 7, 8, 9 <- logged the individual elements in the array.

const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log(newMenu) //[ 'Pizza', 'Pasta', 'Risotto', 'Gnocci' ]

// ! Two important use cases of the spread operater:
// ? Create shallow copies of arrays.
const mainMenuCopy = [...restaurant.mainMenu]
console.log('SHALLOW COPY -->', mainMenuCopy)

// ? Merge two arrays together.
const mainAndStarterMenu = [
  'TWO ARRAYS MERGED TOGETHER -->',
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]
console.log(mainAndStarterMenu)

//! Iterables:
const string = 'Ayanna'
const letters = [...string, ' ', 'S.']
console.log(letters) // ['A', 'y', 'a', 'n', 'n', 'a', ' ', 's']

//!Since ES2018 the spread operator actually works with objects, even though objects are not iterables.
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Ayanna' }
console.log('SPREAD OPERATOR WITH OBJECTS -->', newRestaurant)

//? Shallow copies of object with spread operator
const restaurantCopy = { ...restaurant }
restaurantCopy.name = "Chuck e' Cheese"
console.log(restaurantCopy.name)

//!RECAP ON REST AND SPREAD:
// ? SPREAD: Used where we would otherwise write VALUES separated by a comma
// ? REST: Used where we would otherwise write VARIABLES separated by a comma
