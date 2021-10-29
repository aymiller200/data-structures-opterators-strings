/* 
!SETS
  * A collection of unique values. 
  * Can never have any duplicates.
  * Values grouped together in a set {}
  * Different from an array: 
        ? Elements are unique
        ? Order does not matter
        ? Cannot retrieve elements from a set
  * Main use case for sets is to remove duplicate value from arrays.
*/

                                        //Pass in an iterable
  const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza'])
  console.log(ordersSet); //{Pasta, Pizza, Risotto}
  console.log(new Set('Ayanna')); // {A, y, a, n}
  
  //Length of set
  console.log(ordersSet.size); //3
  
  //Check if a certain element is in a set
  console.log(ordersSet.has('Pizza'));
  console.log(ordersSet.has('bread'));
  
  //Adding elements to a set
  ordersSet.add('Garlic Bread')
  ordersSet.add('Garlic Bread')
  console.log(ordersSet); //{Pasta, Pizza, Risotto, Garlic Bread}
  
  //Delete Elements from a set
  ordersSet.delete('Risotto')
  console.log(ordersSet); // {Pasta, Pizza, Garlic Bread}
  
  //Delete all elements from a set
  ordersSet.clear()
  console.log(ordersSet); //{}
  
  //looping over a set
  for(const order of ordersSet ) console.log(order);
  
  //Example of removing duplicate values from arrays with sets. 
  const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']
  
  //Spread operator works the same way with sets. Takes all of the elements out of the iterable and essentially writes them comma separated
  const staffUnique = [...new Set(staff)]
  console.log(staffUnique);
  
  console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);
  console.log(new Set('AyannaMiller').size);

  ///////////////////////////////////////////////////////////////////
  /* 
  * Maps
    ? A data structure used to map values to keys
    ? Keys can have any type in maps
    ? In orer to read data from a map we use the get method
    ? In order to add to the map we use the set method
    ? Check if a map has a certain key with the has method
  */

    const rest = new Map();

    //Adding new element to data structure.
    //Pass in two argurments: KeyName, and the value 
    rest.set('name', 'Classico Italiano')
    rest.set(1, 'Italy')
    rest.set(2, 'Lisbon')
    console.log(rest); // {'name' => 'Classico Italiano', 1 => 'Italy, 2 => 'Lisbon'}

    //The set method returns the updated map, so we can chain sets. 
    rest
      .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
      .set('open', 11)
      .set('close', 23)
      .set(true, 'We are open')
      .set(false, 'We are closed')

    //Get method to retrieve from the map
    console.log(rest.get('name'))
    console.log(rest.get(true))

    const time = 21; 
    console.log(rest.get(time > rest.get('open') && time < rest.get('clost')))

    //has method to check if the map has a certain key
    console.log(rest.has('categories')) //true

    //delete elements on the map based on key
    rest.delete(2)
    console.log(rest);

    //remove all elements from map
    //rest.clear()

    //size of map
    console.log(rest.size);


//Using arrays or objects as map keys
const arr = [1 ,2]
rest.set(arr, 'Test')
console.log(rest); //[1, 2] => test
console.log(rest.get(arr));
//console.log(rest.get([1, 2])); //undefined because this array and the array in the set are two different objects.

//Can use map with dom object: 
rest.set(document.querySelector('h1'), 'Heading')// -> key: h1, value: 'Heading'

///////////////////////////////////////////////////////////////////

/* 
!More with maps
*/
const question = new Map([
  ['question', 'What is the best programming language'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try Again']
])

console.log(question);

//Convert Objects to map
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

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

for(const [key, value] of question) {
  if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}