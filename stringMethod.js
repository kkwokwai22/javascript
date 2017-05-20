// chatAt 
var anyString = 'Brave new world';
console.log('The charAt string = ' + anyString.charAt(0)); // B 
console.log('The charAt string = ' + anyString.charAt(6)); // n 

// charCodeAt
var anyStringTwo = 'HelloWorld';
console.log('The charCodeAt string = ' + anyStringTwo.charCodeAt(0)) // 72
console.log('The charCodeAt string = ' + anyStringTwo.charCodeAt(6)) // 111


// fromCharCode
var hiddenNumber = String.fromCharCode(65, 66, 67);  // returns "ABC"
console.log(hiddenNumber);

// concat
var firstArray = [1,2,3,4,5,6]
var secondArray = [1,2,3,4,5,6]

var combineArray = firstArray.concat(secondArray);
console.log(combineArray);

// indexOf
console.log('The index of the first w from the beginning is ' + anyString.indexOf('w'));
// logs 8

// lastindexOf 
console.log('The index of the last w from the beginning is ' + anyString.lastIndexOf('w'));
// logs 10


// locateCompare
// match
// replace
// search
// split 
// slice
// subString 
// subStr 
// toLowerCase
// toUpperCase
// toLocaleLowerCase
// toLocaleUpperCase