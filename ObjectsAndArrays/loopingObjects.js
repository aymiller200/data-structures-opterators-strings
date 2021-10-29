/* 
! Looping Objects: Object Keys, Values, and Entries
*/

const openingHours = {
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
};

//? PROPERTY NAMES
const properties = Object.keys(openingHours)
console.log(properties); // ['thu', 'fri', 'sat']

let openStr = `We are open on ${properties.length} days:`

for (const day of Object.keys(openingHours)){
  //console.log(day); //thu, fri, sat
  openStr += `${day}, `
}

console.log(openStr); // We are open on 3 days: thu, fri, sat

//? PROPERTY VALUES: 
const values = Object.values(openingHours)
console.log(values); // [{open: 12, close: 22}, {open: 11, close: 23}, {open: 0, clase: 24}]

//? ENTIRE OBJECT
const entries = Object.entries(openingHours)
console.log(entries); //[ ['thu', {open: 12, close: 22}],  ['fri', {open: 11, close: 23}], ['sat', {open: 0, close: 24}] ]

for (const [key, {open, close}] of entries){
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
}
