//'use strict'

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'

// Data needed for first part of the section
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
}

/////////////////////////////////////////////////////////////////////

const question = new Map([
  ['question', 'What is the best programming language'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try Again'],
])
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`)
}

//const answer = Number(prompt('Your Answer'))
//console.log(answer);

//console.log(question.get(question.get('correct') === answer))

//Convert Map to array
console.log([...question])
console.log([...question.entries()])
console.log([...question.keys()])
console.log([...question.values()])

/* 
!Challenge Four:

Write a program that receives a list of variable names written in underscore_case and convert them to camelCase. The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
            underscore_case
            first_name
            Some_Variable
              calculate_AGE
            delayed_departure

Should produce this output (5 separate console.log outputs): 

underscoreCase *
firstName **
someVariable ***
calculateAge ****
delayedDeparture *****

Hints:
§ Remember which character defines a new line in the textarea 😉

§ The solution only needs to work for a variable made out of 2 words, like a_b

§ Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉

§ This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

*/

document.body.append(document.createElement('textarea'))
document.body.append(document.createElement('button'))

const text = document.querySelector('textarea')
const btn = document.querySelector('button')

const convert = () => {
  const lowerCase = text.value.toLowerCase()
  const stringArr = lowerCase.split('_')
  const newArr = []
  
  for (const word of stringArr) {
    newArr.push(word.replace(word[0], word[0].toUpperCase()))
  }

  const newString = newArr.join('')
  const camelString = newString.replace(newString[0], newString[0].toLowerCase())
  const camelArr = camelString.split('\n')

  for(let word = 0; word < camelArr.length; word++){
    console.log(`${camelArr[word].trim().padEnd(20)} ${'*'.repeat(word + 1)}`)
  } 
}
//Other solution
/* 
const convert = () => {
  const text = document.querySelector('textarea')
  const rows = text.split('\n')

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().splie('_')
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`

    console.log(`${output.padEnd(20)}${'*'.repeat(i + 1)}`)
  }
}




*/



btn.addEventListener('click', convert)