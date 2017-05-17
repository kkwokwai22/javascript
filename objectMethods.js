// toString
//
// toLocaleString
//
// valueOf
//
// hasOwnProperty
//
// isPrototypeOf
//
// propertyIsEnumerable
//
// As i was researching about the object toString i realize the
//
// [] typeof is a object not only that ... it contains array method/object methods
//
var a = 1000;
var stringifyA = a.toString(); // '1000'
console.log(stringifyA);

var arrayOfFruits = ['apple', 'grapes', 'banana', 'orange'];
var stringifyArray = arrayOfFruits.toString();
console.log(stringifyArray);
