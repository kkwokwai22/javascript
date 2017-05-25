// chatAt 
console.log()
console.log("chatAt method".toUpperCase())
var anyString = 'Brave new world';
console.log('The charAt string = ' + anyString.charAt(0)); // B 
console.log('The charAt string = ' + anyString.charAt(6)); // n 


console.log()
console.log("charCodeAt method".toUpperCase())
// charCodeAt
var anyStringTwo = 'HelloWorld';
console.log('The charCodeAt string = ' + anyStringTwo.charCodeAt(0)) // 72
console.log('The charCodeAt string = ' + anyStringTwo.charCodeAt(6)) // 111


// fromCharCode
console.log()
console.log("fromCharCode method".toUpperCase())
var hiddenNumber = String.fromCharCode(65, 66, 67);  // returns "ABC"
console.log(hiddenNumber);

// concat
console.log()
console.log("concat method".toUpperCase())
var firstArray = [1,2,3,4,5,6]
var secondArray = [1,2,3,4,5,6]

var firstStr = 'hello'
var secondStr = 'second'

var combineArray = firstArray.concat(secondArray);
console.log(combineArray);

var combineStr = firstStr.concat(secondStr)
console.log(combineStr)
// indexOf
console.log()
console.log("indexOf method".toUpperCase())
console.log('The index of the first w from the beginning is ' + anyString.indexOf('w'));
// logs 8

// lastindexOf 
console.log()
console.log("lastindexOf method".toUpperCase())
console.log('The index of the last w from the beginning is ' + anyString.lastIndexOf('w'));
// logs 10

// localeCompare

// match
console.log()
console.log("match method".toUpperCase())
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

// replace



// search
console.log()
console.log("search method".toUpperCase())
function testInputUsingSearch (re, str) {
	if(str.search(re) > -1){
		return str + ' contains ' + re;
	} else {	
		return str + ' doesnt contains ' + re;
	}
} 
console.log(testInputUsingSearch('ger', 'cheeseburger'));

// split
console.log(); 
console.log("split method".toUpperCase())
var splitString = 'hello world how are you going to split this'
var ok = splitString.split(' ');
console.log(ok);

// slice
console.log();
console.log('slice method'.toUpperCase())
var str = 'helloworld';
var str2 = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var strSlice = str.slice(0,2);
var strSlice2 = str2.slice(0,2)
console.log(strSlice);
console.log(strSlice2);

// subString 


// subStr 


// toLowerCase
// toUpperCase
// toLocaleLowerCase
// toLocaleUpperCase