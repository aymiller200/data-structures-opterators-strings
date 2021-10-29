

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'

  const airline = 'TAP Air Portugal'

  //? Changing the case of a string: 
  console.log(airline.toLowerCase()); //tap air portugal
  console.log(airline.toUpperCase()); //TAP AIR PORTUGAL
  console.log('Ayanna'.toUpperCase()); //AYANNA

  //? Fix capitalization in name
  const passenger = 'aYAnnA'
  const passengerLower = passenger.toLowerCase()
  const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
  console.log(passengerCorrect); // Ayanna

  //? Comparing Email
  const email = 'hello@ayanna.io'
  const loginEmail = '  HEllO@AYanNa.Io \n';

  const lowerEmail = loginEmail.toLowerCase();
  const trimmedEmail = lowerEmail.trim() //Handles white space
  console.log(trimmedEmail); //hello@ayanna.io

  //? With method chaining
  const normalizedEmail = loginEmail.toLowerCase().trim()
  console.log(normalizedEmail); //hello@ayanna.io
  console.log(email === normalizedEmail); //true

  //? Replacing strings
  const priceGB = '288,97£'
  const priceUS = priceGB.replace('£', '$').replace(',', '.') //first argument is what we want to replace, second is what we are replacing it with.
  console.log(priceUS); //288.97$

  const announcement = 'All passengers come to boarding door 23. Boarding door 23'

  console.log(announcement.replace('door', 'gate')); //Only replaces the first door. 

  //can fix this with a regular expression with the global flag(g)
  console.log(announcement.replace(/door/g, 'gate'));


//! BOOLEAN METHODS (includes, startsWith, endsWith)
const plane ='Airbus A320neo'
console.log(plane.includes('A320')); //true
console.log(plane.includes('Boeing')); //false
console.log(plane.startsWith('Air')); //true

if(plane.startsWith('Airbus') && plane.endsWith('neo')){
  console.log('Part of the new Airbus Family');
}

//practice
const checkBaggage = function(items){
  const baggage = items.toLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun')){
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
}

checkBaggage('I have a laptop, some Food, and a pocket Knife')
checkBaggage('socks and camera')
checkBaggage('snacks and a gun')


