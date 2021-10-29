/* 
!Split method: 
    *Allows us to split a string into different parts based on a divider string.
*/

console.log('a+very+nice+string'.split('+')); // [a, very, nice, string]
console.log('Ayanna Miller'.split(' ')); // [Ayanna, Miller]

//Ayanna will go into firstName, and Miller will go into lastName
const [firstName, lastName] = 'Ayanna Miller'.split(' ')

//? join
const newName = ['Ms.', firstName, lastName.toUpperCase()].join(' ')
console.log(newName);


const capitalizeName = function(name){
  const names = name.split(' '); //array
  const namesUpper = []
  for(const n of names){
    //namesUpper.push(n[0].toUpperCase() + n.slice(1))
    namesUpper.push(n.replace(n[0], n[0].toUpperCase())) //same thing
  }
  console.log(namesUpper.join(' '));
}
capitalizeName('jessican ann smith davis')
capitalizeName('cris joy matson')

//? Padding a string: Adding a certain numbers of characters to a string until the string reaches a desired length
const message = 'Go to gate 23!'

console.log(message.padStart(25, '+')); //first arg is the length we want for the string, ad second arg is what we want to pad the string with. =>   +++++++++++Go to gate 23!
console.log('Ayanna'.padStart(23, '+')); //+++++++++++++++++Ayanna
console.log('Cris'.padStart(25, '+').padEnd(30, '+')); //+++++++++++++++++++++Cris+++++

const maskCreditCard = function(number){
  const str = number + '' //number in a string
  const last = str.slice(-4) //last four of string
  return last.padStart(str.length,'*')

}
console.log(maskCreditCard(98769872)) // ****9872 
console.log(maskCreditCard(432347898769872))
console.log(maskCreditCard('2343892098098098209819'))

//? Repeat: Repeat same string multiple times
const messageTwo = 'Bad weather...All departures delayed'
console.log(messageTwo.repeat(5)); //number of times you want to repeat it. 

const planesInLine = function(n){
  console.log(`There are ${n} planes in line. ${messageTwo.repeat(n)} ` );
}

planesInLine(5)
planesInLine(12)
planesInLine(2)


///////////////////////////////////////////////////////////////
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'

  console.log(flights.split('+'));

  const getCode = str => str.slice(0, 3).toUpperCase()

  for(const flight of flights.split('+')){
     const [type, from, to, time] = flight.split(';')

     const output = `${type.startsWith('_Delayed') ? ':(' : ''} ${type.replace(/_/g, ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(50)
     console.log(output);
  }