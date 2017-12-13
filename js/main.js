//Answering Tricky JS Interview Questions


//                    1. Explain event delegation.
JS event listeners fire not only on a single DOM element but on all its descendants also.
JS as it relates to the DOM. Fires on every children. Happens through and event called event bubbling.
//                    2. Describe event bubbling.
Inverse of event delegation. Also known as propogation, events on an element will bubble up and
also fire on all parents


                //   3. Whats the difference between target
                //             and currentTarget?
The latter is the element with the listener attached (currentTarget), the former is the actual
element that triggered it (target)


                //   4. Explain why the following doesnt work as an IIFE:
IIFE stands for immediately invoked function expression. Expressions results in a value.
function foo (){
    //this creates a reference
} ();//can't do this

//related to question 5. Explan the difference on the usage of
function foo (){
  //i am known as
  //a definition or statement
}

var foo = function (){
  //i am an expression
  //i resolve to a value, even if just "undefined"
  //An expression is any vaild unit of code that resolves to a value
}


//this thing here
function foo(){

} ();

//is as if you
function foo(){

}
();
//wrote it on seprate lines


//                    5a. What needs to be changed to properly make it an IIFE?
( function foo(){
  //wrap the function inside ()
  //JS interpt anything inside parentheses as an expression not to be a statement
  //Anything inside this function cannot be accessed outside of it
})();

//Why would I ever use one?
//Controls variable scope
//FireFox - ReferenceError: foo is not defined
Controls variable names so you do not have collision
Maintain independence
Easier to write your own code.


//                    6). Explain "hoisting".
All variables (var) are declared at the top of any given function scope
whether you know it or not, this includes function declarations.
Also includes functions written as statements

//example
function foo (){

}();

//example
function hoist(track){
  if (track === "all eyes on me"){
    var action = 'This is my jam!'
  } else {
    var action = "Next!"//JSlinter wouldn't like it written this way
  }
  return action;
}


//                  Const and let
Not hoisted
Scoped within the block they are in, and the function
Gives you more control
Solves the problem of JS hoisting

//                    7) What is the difference between a variable
//                       that is : null, undefined or undeclared?
undeclared
//example
const bar = foo + 1;
//undeclared: when you've try to use a variable that hasn't been used before
undefined
//undefined: you declared it but it doesn't have a value. it hasn't assigned a value.
//variable declared but no defined value (not initialized)
//object/array exists but nothing at that key/index
//function exists but doesn't return anything
//falsy



//examples
let foo;
le bar = {};
let baz = ['jonny','phil','ed'];
const qux = function (){
  //don't return anything: undefined
}

console.log(foo,bar.name,baz[4], qux());
//all print undefined
const quxx;
//"Missing intitializer in const declaration"


null
//null has a value. it's value is null
null is a "nothing" value
not zero, not an empty string/object/array
falsy

//example
const quux = null;
console.log(quux);
//prints null

//                    7a) How would you go about checking these states?
undeclared finds you
Except when assigning a value
//example
foo = 5;

console.log(foo);
//prints 5
//implied global

//Checking for undefined

let foo;

console.log(typeof foo); //"undefined" as a string
console.log(typeof bar); // undeclared, but also returns "undefined"

//preferred
console.log(foo === undefined); // true boolean
const baz = "undefined";
console.log(baz === undefined); //false


//Check for null

const foo = null;
console.log(typeof foo);// object

//preferred
console.log(foo === null); //true boolean



//                    8. What is the difference between == and ===?
let foo;
const bar = null;//null

//compare the two
console.log(foo == bar); //true boolean
== is a check for equality
//double equals checks for equality
=== //triple equals check for equality and type
