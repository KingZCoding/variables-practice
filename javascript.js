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
let age = 25;
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
const myBirthday = '18.04.1982';

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
const age = someCode(birthday);

//or

const BIRTHDAY = '18.04.1982'
const AGE = someCode(BIRTHDAY);



