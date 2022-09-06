// let blerim = "intern";
// console.log(blerim);

/*let firstName = 'Blerim';
let lastName = 'Shaqiri';

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

//Types of values / Primitives

let nameOla = 'Blerim';
let age = 26;
let isApproved = true;
let firstNemojbrate = undefined;
let selectColor = null;
*/

/*

let person = {
    name: 'blerim',
    age: 26
}

// Changing the name of the person inside the object (Dot notation)
person.age = 99;
person.name = 'Scot';

//Changing the name via (Bracket Notation)

person['name'] = 'John Snow';



console.log(person);

*/

/*
let selectColors = ['red', 'blue'];
selectColors[2] = 1;
console.log(selectColors.length);
*/

//Learning Functions



/*function greet(name, lastName) {
    console.log(`Hello` + name + lastName);
}
greet('Blerim', ' Shaqiri');
greet('John', ' Snow');
*/
//Function that calculates a value

/*function square(number) {
    return number * number;
}

let number = square(250);
console.log(number);

console.log(square(959));

//This is some test changes 

let bill = 430;
let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill is ${bill} the tip is ${tip} and the total is ${bill + tip}`);*/

// Arithmatic operators

/*let x = 10;
let y = 5;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// Increment operators (++)
console.log(x);
console.log(++x);
console.log(x++);

// Decrement Operator (--)
console.log(--x);
*/
// Assignment Operators

/*
let x = 10;
x++;
x = x + 1;

x += 5;

x = x * 3;
x *= 3;

// Comparison Operators


let c = 1;
// Relational Operators
console.log(c > 0);
console.log(c >= 1);
console.log(c < 1);
console.log(c <= 1);

// Equality operators
console.log(c === 1); //Is equal
console.log(c !== 1); //Is not equal

//Strict equality operator (same type and value)
console.log(1 === 1);
console.log('1' === 1);
*/


/*
// Lose equality operator (checks only if the values are equal)
console.log( 1 == 1);
console.log( '1' == 1);
console.log( true == 1);
*/

/*
// Ternary Operators/Conditional Operator

let customer = 110;

if (customer < 100 ) {
console.log('gold');
} else {
   console.log('silver');
};

let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

// ? = true 
// : = else
*/

// Logical Operators

// Logical AND (&&) - returns TRUE if both are TRUE
// console.log(true && true);
// console.log(false && true);

/*
let highIncome = true;
let goodCreditScore = true;
let eligableForLoan = highIncome && goodCreditScore;

console.log(eligableForLoan);
*/

/*
// Logical OR ( || ) - returns true if one is true

let highIncome = false;
let goodCreditScore = true;
let eligableForLoan = highIncome || goodCreditScore;

console.log(eligableForLoan);
*/

/*
let highIncome = false;
let goodCreditScore = false;
let eligableForLoan = highIncome || goodCreditScore;
console.log('eligable', eligableForLoan);

// The NOT operator (!)
let applicationRefused = !eligableForLoan;
console.log('application', applicationRefused);
*/

// Falsy values (false)

// Undefined
// null
// 0
// false
// ''
// NaN

// Anything that is not Falsy is Truthy

/*
let userColor = 'red';
let defaultColor = undefined;
let currentColor = userColor || defaultColor;

console.log(currentColor);
*/

// let x = 10;
// let y = (x>5) && (x<15);

// console.log(y);

// let x = 5;
// x+=3
// console.log(x);

// let x = 10;
// let y = x++;
// console.log(y);

// let x=1;
// let y = x!==2;
// console.log(y);


//Small Challenge my way

// let a = 'red';
// let b = 'blue';

// a = 'blue';
// b = 'red';

// console.log(a);
// console.log(b);

//Small Challenge instructors way

// let a = 'red';
// let b = 'blue';

// let c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);







