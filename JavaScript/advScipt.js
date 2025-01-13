// this
console.log(this);

function abcd() {
    console.log(this);
}
abcd();

var obj = {
    name: function() {
        console.log(this);
    },
    age: 20,
    email: "dsfjda@gmail.com" 
}
obj.name();

var obj2 = {
    sayName: function() {
        console.log(this);
        function childFnc() {
            console.log(this);
        }
        childFnc();
    }
}
obj2.sayName();

var obj3 = {
    sayName: function() {
        const child = ()=> {
            console.log(this);
        }
        child();
    }
}
obj3.sayName();

function add() {
    console.log(this);
}
const ans = new add();

document.querySelector("button")
.addEventListener("click", function() {
    console.log(this);
});


// call, apply, bind

const obj4 = {name : "Vinayak"}
function abcd() {
    console.log(this);
}
abcd.call(obj4);

function abcd(a, b, c) {
    console.log(this, a, b, c);
}
abcd.apply(obj4, [1, 2, 3]);

function abcd() {
    console.log(this);
}
const playFncLater = abcd.bind(obj4);
playFncLater();


// Prototypal Inheritance

function makeHuman(name, age) {
    this.name = name;
    this.age = age;
}
makeHuman.prototype.printMyName = function() {
    console.log(this.name);
}
const human1 = new makeHuman("Vinayak", 20); 


// closures

function counter() {
    var count = 0;
    return function() {
        count++;
        console.log(count);
    };
}
var fnc = counter();
fnc();

function abcd1() {
    var a = 12;
    return function() {
        console.log(a);
    }
}
var ans1 = abcd1();
ans1();

function timer() {
    var a = 16;
    return setTimeout(function() {
        console.log(a);
    }, 2000)
}
var ans2 = timer();


// Event Delegation

var parent = document.querySelector("#parent");
parent.addEventListener("click", function() {
    console.log("works!");
})

parent.addEventListener("click", function(details) {
    console.log(details);
})

parent.addEventListener("click", function(details) {
    if(details.target.id === "play") {
        console.log("play song");
    }else if(details.target.id === "pause") {
        console.log("pause song");
    }
})


// hofs

function abcd2(param) {

}
abcd2(function() {});
// OR
function abcd3() {
    return function() {

    }
}

var arr = [1, 2, 3, 4, 5, 6];
arr.forEach(function() {})


// try - catch

function divide(a, b) {
    try{
        if(b == 0) {
            throw Error("It will resulted as infinity")
        }
        console.log(a/b);
    }catch(err) {
        console.error(err);
    }
}
divide(12, 0);


// Custom Events

const evt = new Event("nwEvt");

document.querySelector("button")
.addEventListener("nwEvt", function() {
    alert("NEW EVENT CALLED");
})
document.querySelector("button").dispatchEvent(evt);

const yourevent = new Event("goHome");

document.querySelector("button")
.addEventListener("goHome", function() {
    alert("Going");
})
document.querySelector("button").dispatchEvent(yourevent);



