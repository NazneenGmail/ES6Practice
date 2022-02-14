var str = "Vivek Singh Bisht"; //using double quotes
var str2 = 'John Doe'; //using single quotes
console.log(typeof str);
console.log(typeof str2);

var x = 3; //without decimal
var y = 3.6; //with decimal
console.log(typeof x);
console.log(typeof y);


var bigInteger =  234567890123456789012345678901234567890n;
console.log(typeof bigInteger);

var a = 2;
var b =  3;
var c =  2;
console.log(a == b); // returns false
console.log(a == c); //returns true
console.log(typeof (a == b));
console.log(typeof (a == c));

var x1; // value of x is undefined
var y1 = undefined; // we can also set the value of a variable as undefined
console.log(typeof x1);
console.log(typeof y1);

var z=null;
console.log(typeof z);

var symbol1 = Symbol('symbol');
console.log(typeof symbol1);

// Collection of data in key-value pairs
var obj1 = {
    x:  43,
    y:  "Hello world!",
    z: function(){
       return this.x;
    }
 }
 // Collection of data as an ordered list
 var array1 = [5, "Hello", true, 4.1];

 console.log(typeof obj1);
 console.log(typeof array1);

 a=1;
 console.log('a = '+a);
 var a;

hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;

hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling
function hoistedFunction(){ 
  console.log(" Hello world! ");
}

// Hoisting takes place in the local scope as well
function doSomething(){
    x = 33;
    console.log(x);
    var x;
  }

var x8;
console.log(x8); // Outputs "undefined" since the initialization of "x" is not hoisted
x8 = 23;

"use strict";
x5 = 26; // Gives an error since 'x' is not declared
console.log(x5);
var x5; 

var x10 = 2;
var y10 = "2";
console.log(x10 == y10)  // Returns true since the value of both x and y is the same
//Equality coercion takes place when using ‘ == ‘ operator. 
console.log(x10 === y10); // Returns false

console.log(x10 === y10) // Returns false since the typeof x is "number" and typeof y is "string"

const value1 = '5';
const value2 = 9;
let sum = value1 + value2;

console.log(sum);
if(typeof value1 == 'string') {
    sum = Number(value1) + value2
}
console.log(sum);

var x11 = 3;
var y11 = "3";
console.log(x11 + y11); // Returns "33" 

var x12 = 24;
var y12 = "Hello";
console.log(x12 + y12);  // Returns "24Hello";

var firstname = "Vivek";
var surname = " Bisht";
console.log(firstname + surname);     // Returns "Vivek Bisht"

var x13 = 3;
var y13 = "3";
console.log(x13 - y13);    //Returns 0 since the variable y (string type) is converted to a number type

//All values except 0, 0n, -0, “”, null, undefined and NaN are truthy values.

var x14 = 0;
var y14 = 23;
        
if(x14) { console.log(x14) }   // The code inside this block will not run since the value of x is 0(Falsy)  
        
if(y14) { console.log(y14) }    // The code inside this block will run since the value of y is 23 (Truthy)

//Logical operators in javascript, unlike operators in other programming languages, do not return 
//true or false. They always return one of the operands.

var x15 = 220;
var y15 = "Hello";
var z15 = undefined;

console.log(x15 || y15);    // Returns 220 since the first value is truthy
console.log(x15 || z15);  // Returns 220 since the first value is truthy

console.log(x15 && y15);    // Returns "Hello" since both the values are truthy
        
console.log(y15 && z15);   // Returns undefined since the second value is falsy
        
if( x15 && y15 ){ 
  console.log("Code runs" ); // This block runs because x && y returns "Hello" (Truthy)
}   
        
if( x15 || z15 ){
  console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
}

console.log(isNaN("Hello"));  // Returns true
console.log(isNaN(345));   // Returns false
console.log(isNaN('1'));  // Returns false, since '1' is converted to Number type which results in 0 ( a number) 
console.log(isNaN(true)); // Returns false, since true converted to Number type results in 1 ( a number)
console.log(isNaN(false)); // Returns false
console.log(isNaN(undefined)); // Returns true