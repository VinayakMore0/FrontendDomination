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



































