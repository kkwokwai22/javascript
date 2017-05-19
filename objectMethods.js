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

// toString methods
var a = 1000;
var stringifyA = a.toString(); // '1000'
console.log(stringifyA);

var arrayOfFruits = ['apple', 'grapes', 'banana', 'orange'];
var stringifyArray = arrayOfFruits.toString();
console.log(stringifyArray);

//toLocaleString

var number = 123456.789;

// request a currency format
console.log(number.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
// → 123.456,79 €

// the Japanese yen doesn't use a minor unit
console.log(number.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }))
// → ￥123,457

// limit to three significant digits
console.log(number.toLocaleString('en-IN', { maximumSignificantDigits: 3 }));
// → 1,23,000

// The ideo before toLocaleString is about changing the number to a specific currency great for fintech

//valueOf



// hasOwnProperty

var o = {}
o.props = 'cheese'
var check = o.hasOwnProperty('props')
console.log(check);

// isPrototypeOf

function ProtoTypeExample (age,status) {
    this.age = age;
    this.status = true;
    this.everyoneHasThisPrototype = function() {
      console.log('everyone can call this')
    }
}

ProtoTypeExample.prototype.extendMethod = function() {
  console.log('only the extendedMethod has it')
}

var extendMethodExampleOne = new ProtoTypeExample(12);
extendMethodExampleOne.everyoneHasThisPrototype();
extendMethodExampleOne.extendMethod();

console.log(extendMethodExampleOne.isPrototypeOf(ProtoTypeExample));



