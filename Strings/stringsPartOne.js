/* 
*Whenever we call a method on a string, javascript converts that string into an object with the same content. Then, it is on that object which the method is called. 
      ? This process of converting strings to objects is called 'boxing'
      ? When the opperation is done, the method is converted back to a regular string primitive.
      ? All string methods return primitives
      
!ALL STRING METHODS ARE CASE SENSITIVE AND RETURN A NEW STRING
*/

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'

  const airline = 'TAP Air Portugal'
  const plane = 'A320'

  //? getting position of a letter: 
  console.log(plane[0]);
  console.log(plane[1]);
  console.log(plane[2]);

  console.log('B737'[0]);

  //? getting length of a string:
  console.log(airline.length);
  console.log('B737'.length);

  //? Strings also have methods:
  console.log(airline.indexOf('r')); //6
  console.log(airline.lastIndexOf('r')); //10
  console.log(airline.indexOf('Portugal'));//2 (CASE SENSITIVE)

  //? Slice method:
  console.log(airline.slice(4)); // (4) is where the slice starts, so -> Air Portugal
  console.log(airline.slice(4, 7)); // the second argument is where you pass in the end parameter, so -> Air. * **NOTE** * the length of the extracted string will always be the end argument minus the beigging argument

  //? Extracting strings with the slice method without knowing what the index is
  console.log(airline.slice(0, airline.indexOf(' ')));
  console.log(airline.slice(airline.lastIndexOf(' ') + 1))

  //? Negative argument to extract from the end of the string. 
  console.log(airline.slice(-2)); //al
  console.log(airline.slice(1, -2)); //AP Air Portug

  const checkMiddleSeat = function(seat) {
    // B and E are middle seats
    const s = seat.slice(-1)
    if(s === 'B' || s === 'E'){
      console.log('You got the middle seat!');
    }else{
      console.log('You got lucky');
    }
  }

  checkMiddleSeat('11B')
  checkMiddleSeat('23C')
  checkMiddleSeat('3E')
    
