var a = 12;
var b = 22;

console.log("hey");

// Inbuild Features - console, alert, prompt

console.log("Hello");
console.warn("Hello");
console.error("Hello");

// alert("Hey");

// var nam = prompt("hello");

// Variables and Constants
var a = 12;
var b = 32;
const c = 67;

// Types

// - Spread
var arr = [12, 13, 14, 15];
var arr2 = [...arr];

// Conditionals
var age = 18;
if (age < 18) {
    console.log("You are underage");
} else if (age > 18) {
    console.log("You are eligible");
} else {
    console.log("You need permission");
}

// loops
// for(start; end; chance) {

// }
for(var i = 1; i < 11; i++) {
    console.log(i);
}

// start;
// while(end) {
//     change;
// }

var i = 1;
while (i < 11) {
    i++;
    console.log(i);
}

// function
function hbday() {
    console.log("Happy Brithday");   
}

// function abcd(parameters) {

// }
// abcd(arguments);

function abc(val) {
    console.log(12 + val);
}
abc(12);

// Prep for Interview
function abcd() {
    // function statement
}

var abcd = function() {
    // function expresssion
}

// function() {
//     // anonymous function
// }

// fat arrow
var a = ()=> {

}

// fat arrow with one param
var g = (ab)=> {

}
g(12)
// OR
var g = ab => {

}
g(12)

// fat arrow with implicit returns 
var abcd = ()=> "returnType";

// return
function wxyz() {
    return 12;
}
console.log(wxyz());

// Array
var users = ["Vipul", "Yash", "Aaryan", "Vinayak", "Anish"];
console.log(users[4]);

var arrR = [1, 2, "3", function(){}, [], 4];

var arr = [1, 2, 3, 4, 5];

arr.forEach(element => {
    console.log(element);
});

// Object

var obj = {
    name: "Yash",
    age: 20,
    email: "yash@gmail.com",
    contact: 9993029322
};

var battery = {
    compony: "connon",
    price: 1200,
    for: "camera",
    isWorking: true
};

var obj = {};
var obj2 = new Object();

console.log(battery.price);

// Synchronous & Asynchronous JS




