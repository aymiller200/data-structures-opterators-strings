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

restaurant.orderDelivery({
  //WE CALLED THE FUNCTION, AND THEN PASSED IN AN OBJECT OF OPTIONS
  time: '22.30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
})

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
})

//SPREAD METHOD
// const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")]
// console.log(ingredients);

restaurant.orderPasta(...ingredients)


/* 
!Destructuring Objects
*/
//*MUST USE EXACT PROPERTY NAMES
//* Order does not matter with objects.

const { name, openingHours, categories } = restaurant
console.log('Object dstructuring -->', name, openingHours, categories)

//? Variables different from property names:
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant
console.log('New Variable Names -->', restaurantName, hours, tags)

//? DEFAULT VALUES
const { menu = [], starterMenu: starters = [] } = restaurant //WITHOUT SETTING THE DEFAULT VALUE ON MENU, WE WOULD GET UNDEFINED
console.log('DEFAULT VALUES -->', menu, starters)

//? MUTATING VARIABLES WHILE DESTRUCTURING OBJECT
let a = 111
let b = 999
const obj = { a: 23, b: 7, c: 14 }
;({ a, b } = obj)
console.log(a, b) //23, 7

//? Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours
console.log('NESTED OBJECTS WITH OPENING HOURS -->', o, c)

///////////////////////////////////////////////////////////////////////////////
/* 
!Destructuring Arrays
*/

//? receive two return values from a function
const [starter, mainCourse] = restaurant.order(2, 0)
console.log(starter, mainCourse)

let [first, second] = restaurant.categories
console.log(first, second) // takes first two elements from the restaraunts categories array

let [main, , secondary] = restaurant.categories
console.log(main, secondary) //takes the first and the third elements from the cotegories array (Italian, Vegetarian)

//not using let and const here because we are simply reassigning the values.
//? Switch two elements with destructuring
;[main, secondary] = [secondary, main]
console.log(main, secondary)

//Switch two elements without destructuring
// const temp = one
// one = three
// three = temp
// console.log(one, three) //Vegetarian Italian

//////////////////////////////////////////////////////////////////////////////
/* 
!Destructuring Arrays
*/
//? Without destructuring
const arr = [2, 3, 4]
const d = arr[0]
const e = arr[1]
const f = arr[2]

//? With destructuring
const [x, y, z] = arr //we are detstroying the oringal array, we are just unpacking it
console.log(x, y, z)

//? nested destructuring
const nested = [2, 4, [5, 6]]
const [h, , m] = nested
console.log(h, m) //2 [5, 6]

//? destructuring within destructuring
const nestedTwo = [2, 4, [5, 6]]
const [i, , [j, k]] = nestedTwo
console.log(i, j, k) // 2, 5, 6

//? Default values
const [p = 1, q = 1, r = 1] = [8, 9]
console.log(p, q, r) //where r was undefined before, it is now one.



const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

/*
!Looping Arrays For of loop
  ? This loop will automatically loop over the array, and in each iteration it will give us access to the current array element 'item'
  ? For of can still use continue and break keywords
*/
for (const item of menu) console.log(item)

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`) //each of the items is now an array with the index and the element
}






