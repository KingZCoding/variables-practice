//practice from javascript.info/variables

//long way
let intro;
intro = 'Hello'; //store the string 'Hello' in the variable named message
alert(intro); //shows the variable content

/*
short way
let message = 'Hello!'; define the vafriable and assign the value
alert(message); Hello!
*/

/* not recommended to do this way
let user = 'John', age = 25, message = 'Hello!';
*/

//recommended to do this way
let user = 'John';
//let age = 25;
let popup = 'Hello';

/* also ok this way
let user = 'John',
    age = 25,
    message = 'Hello!';
*/

let hello = 'Hello World!';
let message;

// copy 'Hello World!' from hello into message
message = hello;

//now to variables hold the same date
alert(hello);
alert(message);

/* this code does not work with repeated let message declared twice

let message = 'This';
let message = 'That'; SyntaxError: 'messgae' has already been declared
*/

//showing the use of $ and _ as variable names
let $ = 1;
let _ = 2;
console.log($ + _);

//declaring a const, onst never change unlike let
//const myBirthday = '18.04.1982';

/* attempting to reassign constant
myBirthday = 01.01.2001; // error, cant reassign the constant!
*/

// Using constants for aliases for colors
const COLOR_RED = '#F00';
const COLOR_GREEN = '#0F0';
const COLOR_BLUE = '#00f';
const COLOR_ORANGE = '#FF7F00';

// when we need to pick a color
let color = COLOR_ORANGE
alert(color);
/*
//tasks at end of javascript.info/variables lesson
//declaring two variables and copying them to call the same name
let admin;
let name = 'John'
admin = name
alert(admin);

//giving proper variable names
let ourPlanetName = 'Earth'
let currentUserName = 'John';

//uppercase const?
const birthday = '18.04.1982';
const number = someCode(birthday);

//or

const BIRTHDAY = '18.04.1982'
const AGE = someCode(BIRTHDAY);
*/

//continuing variables with w3schools.com/js/js_arithmetic.asp
// two number can be literals
/*
let a = 10;
let b = 5;
let x = 100 + 50;

//or variables
let c = a + b;

//or expressions
let y = (100 + 50) * a;
console.log(x);
console.log(c);
console.log(y);

//subtraction
let x = 5;
let y = 2;
let z = x - y;
console.log(z);

//multiplication
let x = 5;
let y = 2;
let z = x * y;
console.log(z);

//dividing
let x = 5;
let y = 2;
let z = x / y;
console.log(z);

//remainder
let x = 5;
let y = 2;
let z = x % y;
console.log(z);

//incrementing
let x = 5;
x++;
let z = x;
console.log(z);

//decrementing
let x = 5;
x--;
let z = x;
console.log(z);

//exponentiation
let x = 5;
let z = x ** 2;
console.log(z);

//same as Math.pow(x,y)
let x = 5;
let z = Math.pow(x,2);
console.log(z);

// operator precedence PEMDAS
let x = 100 + 50 * 3; //multiplication would be done first
console.log(x);

let x = (100 + 50) * 3; //paranthesis would be done first
console.log(x);

//floating precison
let x = 0.2 + 0.1; //not very accurate
console.log(x)

//instead do multiplication then division 
let x = (0.2 * 10 + 0.1 * 10) / 10;
console.log(x);
*/

//assignment from top
let x = (4+ 6 +9) / 77
console.log(x)

let a = 10;
console.log(a);

const MAX = 57;
let actual = MAX - 13;
let percentage = actual / MAX;
console.log(percentage);

// my own practice
let name = 'Cody';
const myBirthday = 9-19-1997;
let todaysDate = 8-18-2024;
let age = myBirthday - todaysDate;
console.log(age);
console.log(name);

let myWeight = 225;
let myHeight = 70;
let myBMI = myWeight / myHeight;
console.log(myBMI);






